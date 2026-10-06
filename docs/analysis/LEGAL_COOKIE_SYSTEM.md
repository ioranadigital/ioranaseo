# Legal + Cookie Consent System

**Fecha:** 2026-09-28 · Referencia funcional: sistema de cookies de NEOSUMA, adaptado visualmente al
branding de IORANA SEO. Enfoque: **REFINE + RESTYLE + COMPLETE**, no reescritura desde cero — el sistema
de consentimiento ya funcionaba (localStorage, versión, eventos); esta ronda completa lo que faltaba
(layout legal compartido, accesibilidad del modal, reopen desde `LandingsFooter`) y corrige bugs reales
encontrados en la auditoría inicial.

---

## 1. CURRENT IMPLEMENTATION (auditoría previa a modificar)

Estado encontrado antes de tocar nada:

- **`/legal/`, `/legal/privacidad/`, `/legal/cookies/`, `/legal/aviso-legal/`:** sin `layout.tsx` — se
  renderizaban **sin Header ni Footer global**. Contenido correcto en el fondo (real, no inventado) pero
  usando `var(--io-text-primary)` / `var(--io-text-secondary)`, dos tokens que **no existen** en
  `iorana-design-tokens.css` (solo existen `--io-text` y `--io-text-muted`) — el texto caía al color
  heredado por defecto en vez del sistema de diseño real. Sin navegación legal, sin sidebar, sin forma de
  reabrir preferencias de cookies desde estas páginas.
- **`CookieConsent.tsx`:** lógica de consentimiento (localStorage, versión `"1"`, eventos, toggles) ya
  funcionaba correctamente y ya había sido restyleada visualmente el 2026-09-18 (ver
  `GLOBAL_CTA_COOKIE_IMPLEMENTATION_REPORT.md`, "Option A — Light"): banner e igualdad de peso entre
  Rechazar/Configurar/Aceptar ya resueltos, sin dark pattern. Lo que **faltaba**: semántica de diálogo
  accesible en el modal de preferencias (sin `role="dialog"`, sin `aria-modal`, sin focus trap, sin cierre
  con Escape, sin restauración de foco, sin bloqueo de scroll).
- **`LandingsFooter.tsx`** (usado por `/web-para-empresas`, `/soluciones/*`, `/como-trabajamos`, y ahora
  `/legal/*`): **no tenía** el botón "Preferencias de cookies". `HomeFooter.tsx` (solo `/`) sí lo tenía
  correctamente implementado desde antes — inconsistencia real entre los dos footers del sitio.
- **`LandingsHeader.tsx`:** su rama de navegación "genérica" (fuera de Home/Soluciones/Cómo trabajamos/
  Diagnóstico) apunta a anclas `#que-incluye` / `#precios` que solo existen en `/web-para-empresas`. Al
  añadir Header a `/legal/*` por primera vez, esa rama se habría aplicado también ahí, generando enlaces
  rotos reales en el header de las 4 páginas legales.
- **GA4 / analítica:** no existe ningún `<script>` de `googletagmanager.com/gtag/js` en todo el
  proyecto. `CookieConsent.tsx` y `trackEvent.ts` asumen `window.gtag` pero nada lo define nunca. **Hoy,
  aceptar o rechazar la categoría "Analítica" no tiene ningún efecto real** — no se carga ningún script,
  no se envía ni recibe ningún dato de medición, no se instala ninguna cookie de terceros.
- **Cookies reales activas:** ninguna cookie HTTP de terceros. El propio consentimiento se guarda en
  `localStorage` (`iorana-cookie-consent`), no en una cookie. No hay middleware, no hay `document.cookie`,
  no hay Supabase/NextAuth en uso (solo un `dns-prefetch` residual a Supabase en `layout.tsx`, sin cliente
  real).
- **Datos jurídicos:** no existe en ningún fichero del repo razón social, NIF/CIF, domicilio social, datos
  de registro mercantil, DPO, proveedores de hosting/email, ni base jurídica de tratamiento. El contenido
  legal existente (Privacidad, Cookies, Aviso Legal) es genérico pero no contiene datos falsos — solo
  carece de los datos identificativos reales. Se detectaron además **3 emails de contacto distintos** en
  el código: `info@ioranaseo.com` (páginas legales), `contacto@ioranaseo.com` (fallback de
  `api/contacto/route.ts`), `honatuya@gmail.com` (schema.org en `layout.tsx` y `lib/seo.ts`) — posible
  descuido, no corregido en esta ronda por no saber cuál es el correcto (ver **LEGAL DATA REQUIRED**).

## 2. LEGAL ROUTES

Sin rutas nuevas, tal como pedía el brief:

| Ruta | Contenido |
|---|---|
| `/legal/` | Índice — 3 tarjetas a los documentos |
| `/legal/privacidad/` | Política de privacidad |
| `/legal/cookies/` | Política de cookies |
| `/legal/aviso-legal/` | Aviso legal |

**Layout compartido nuevo:** `legal/layout.tsx` → `legal/LegalLayoutClient.tsx` (Header global +
`LegalNav` sidebar/nav + Footer global), aplicado a las 4 rutas porque ninguna tenía `layout.tsx` propio
(no hay riesgo de header/footer duplicado). `legal/components/LegalNav.tsx` (sidebar 232px en desktop,
pastillas horizontales sin sticky en mobile) y `legal/components/LegalHero.tsx` (eyebrow "LEGAL" + H1 +
intro breve, sin CTA de marketing) se comparten entre las 4 páginas.

## 3. COOKIE CATEGORIES

Alineadas con lo que el sistema realmente controla — se retiró de la página `/legal/cookies/` la mención a
una tercera categoría "Cookies de Funcionalidad" que existía en el texto antiguo pero no corresponde a
ningún toggle real:

| Categoría | Estado | Control |
|---|---|---|
| Necesarias | Siempre activas | Checkbox bloqueado, no desactivable |
| Analítica | Opt-in | Checkbox, `false` por defecto en el modal salvo elección previa guardada |
| Marketing | **NO USADA** | No se muestra — no hay ningún script de marketing (Google Ads, Meta Pixel) en el sitio |

## 4. CONSENT STORAGE

- Clave: `localStorage["iorana-cookie-consent"]` → `{ analytics: boolean, version: "1", timestamp: number }`.
- Ya versionado (`CONSENT_VERSION = "1"`) desde antes de esta ronda — no se ha tocado el esquema de
  persistencia ni se ha forzado una migración; un cambio de versión futuro volvería a mostrar el banner
  automáticamente (lógica ya existente, verificada).
- No se han tocado los nombres de clave, ni la codificación JSON, para no invalidar el consentimiento ya
  guardado por visitantes reales.

## 5. ANALYTICS BEHAVIOR

- `initializeGA4()` (ya existente): si `window.gtag` existe, concede `analytics_storage: "granted"`.
- `revokeGA4()` (**nuevo**, añadido en esta ronda como contraparte simétrica): si `window.gtag` existe,
  deniega `analytics_storage: "denied"`. Se invoca desde `handleRejectAll` y desde `handleSavePreferences`
  cuando el usuario apaga Analítica — antes no existía ningún mecanismo de revocación explícita.
- **Ambas funciones son no-op hoy** porque `window.gtag` nunca se define — no hay ningún `<script>` de
  Google Analytics cargado en el sitio. Ver **GA4 MEASUREMENT ID REQUIRED** más abajo.

## 6. FOOTER REOPEN

- `HomeFooter.tsx` (`/`): ya tenía el botón, sin cambios.
- `LandingsFooter.tsx` (`/web-para-empresas`, `/soluciones/*`, `/como-trabajamos`, `/legal/*`): **añadido**
  el mismo patrón (`<button>` que despacha `OPEN_COOKIE_PREFERENCES_EVENT`), replicando exactamente la
  implementación ya aprobada de `HomeFooter.tsx`.
- `LegalNav.tsx`: añade un tercer punto de reapertura, dentro de la propia navegación legal.
- Verificado con Playwright: click en el botón del footer de `/como-trabajamos` (que usa
  `LandingsFooter`) abre el modal correctamente, con el estado de Analítica reflejando lo ya guardado.

## 7. ACCESSIBILITY

Modal de preferencias (`CookieConsent.tsx`), añadido en esta ronda:

- `role="dialog"`, `aria-modal="true"`, `aria-labelledby` apuntando al `<h2>` del título.
- Focus trap: `Tab`/`Shift+Tab` cicla dentro de los elementos focuseables del modal.
- `Escape` cierra el modal (verificado con Playwright).
- Foco restaurado al elemento que abrió el modal al cerrarlo (footer/nav button).
- Scroll del fondo bloqueado (`document.body.style.overflow = "hidden"`) mientras el modal está abierto.
- Checkboxes con `aria-label` explícito ("Cookies necesarias, siempre activas" / "Cookies de analítica").
- Banner: `role="region" aria-label="Aviso de cookies"` (no es modal, no bloquea el resto de la página,
  por eso no lleva `aria-modal`/focus trap).
- **Desviación menor del orden sugerido en el brief (§30):** en el banner, el orden DOM/visual actual es
  texto → enlaces Privacidad/Cookies → botones Rechazar/Configurar/Aceptar. El brief sugería botones antes
  que los enlaces legales. No se reordenó para no arriesgar el layout desktop (texto izquierda / acciones
  derecha) ya revisado y aprobado el 2026-09-18. El orden actual sigue siendo lógico por teclado (no hay
  `div` con `onClick` sin semántica) — se documenta como desviación menor, no como fallo.

## 8. RESPONSIVE

QA con Playwright en 375/430/768/1024/1280/1440, en las 4 páginas legales:

| Ancho | Resultado |
|---|---|
| 375 | PASS — 0px overflow, nav legal en pastillas horizontales sin sticky |
| 430 | PASS — 0px overflow |
| 768 | PASS — 0px overflow, sidebar aparece (232px) |
| 1024 | PASS — 0px overflow |
| 1280 | PASS — 0px overflow |
| 1440 | PASS — 0px overflow |

Banner y modal de preferencias verificados también en 375/1280 (screenshots incluidos).

## 9. LEGAL DATA REQUIRED

No se ha inventado ningún dato. Pendiente de que el negocio proporcione lo siguiente para que las páginas
legales sean completas (hoy son honestas pero incompletas):

- **Aviso Legal — identificación del titular (obligatorio bajo LSSI-CE):** razón social, NIF/CIF,
  domicilio social, datos de inscripción registral (si aplica). No existe en ningún fichero del repo.
- **Aviso Legal — propiedad intelectual y legislación/jurisdicción aplicable:** secciones legalmente
  habituales que no están en el contenido actual; no se han añadido por no estar soportadas por el
  contenido existente (regla explícita del brief).
- **Privacidad — responsable del tratamiento, base jurídica, plazos de conservación, destinatarios,
  transferencias internacionales, DPO (si aplica):** ninguno de estos datos existe hoy en el sitio.
- **Email de contacto legal inconsistente:** el código usa 3 emails distintos (`info@ioranaseo.com` en las
  páginas legales, `contacto@ioranaseo.com` como fallback del formulario de `/contacto/`,
  `honatuya@gmail.com` en el schema.org de `layout.tsx`/`lib/seo.ts`). No se ha unificado porque no hay
  forma de saber cuál es el correcto sin confirmación del negocio.
- **GA4 MEASUREMENT ID REQUIRED:** no hay ningún script de Google Analytics cargado en el sitio. El toggle
  de "Analítica" en el panel de cookies es, hoy, funcionalmente un no-op (guarda la preferencia pero no
  activa nada). Si se quiere analítica real, hace falta decidir e instalar el script de GA4 (con su
  Measurement ID real) condicionado a `analytics === true` — no se ha inventado ni añadido un ID de
  ejemplo.

## 10. QA RESULTS

Ejecutado con Playwright (`playwright-core` + Chromium local) contra `pnpm dev` en `localhost:3005`:

- **First visit (storage limpio):** banner visible, sin analítica antes de decisión — PASS.
- **Reject:** banner se cierra, `localStorage` → `{analytics:false,...}`, sitio y `/contacto/` siguen
  funcionando (200, 0 errores de consola) — PASS.
- **Accept:** `localStorage` → `{analytics:true,...}` — PASS.
- **Custom:** Necesarias bloqueada y marcada; Analítica apagada y guardada; tras recargar, banner sigue
  oculto (preferencia respetada); reabierta desde el footer, refleja el estado apagado correctamente;
  vuelta a activar y guardar, persistido — PASS.
- **Reopen (footer):** abre el modal con el estado actual reflejado — PASS.
- **Enlaces:** 0 enlaces rotos, 0 `href="#"` en las 4 páginas legales (13–16 enlaces por página, todos a
  rutas reales).
- **Overflow:** 0px en las 6 anchuras × 4 páginas.
- **Consola:** 0 errores en las 6 anchuras × 4 páginas.
- **Build:** `pnpm build` → exit code 0, "✓ Compiled successfully", las 4 rutas legales presentes en la
  tabla de salida.
- **Alcance de cambios:** `git status --short` confirma que solo se tocaron `LandingsFooter.tsx`,
  `LandingsHeader.tsx` (rama de nav para `/legal/*`), `CookieConsent.tsx`, las 4 páginas de `/legal/*` y
  los ficheros nuevos de `legal/` — ninguna otra página (Home, Soluciones, Web para empresas, Campañas,
  Visibilidad, Conversión, Cómo trabajamos, Contacto, Diagnóstico) fue modificada.

## Screenshots

`docs/analysis/screenshots/legal-cookie-system/`: `privacy-375.png`, `privacy-1280.png`,
`cookies-375.png`, `cookies-1280.png`, `legalnotice-375.png`, `legalnotice-1280.png`, `banner-375.png`,
`banner-1280.png`, `preferences-375.png`, `preferences-1280.png`.

## 11. FIRST VISIT BEHAVIOR — VERIFICACIÓN DEDICADA (2026-09-28, ronda 2)

Verificado en navegador real (Playwright + Chromium), NO asumido — cada test parte de un contexto de
navegador nuevo sin `storageState` (aislamiento equivalente a incógnito: sin cookies/localStorage
heredados de ningún test anterior).

**Dos hallazgos reales corregidos en esta ronda** (el comportamiento de fondo — localStorage, versión,
persistencia — ya funcionaba y no se tocó):

1. **Faltaba el título "Tu privacidad"** en el banner — nunca se había implementado visualmente pese a
   estar en el brief original. Añadido como `<h2 id="cookie-banner-title">`, y el banner ahora usa
   `aria-labelledby` (antes `aria-label` genérico) apuntando a él.
2. **Los labels de los 3 botones no coincidían con la referencia** ("Rechazar" / "Configurar" / "Aceptar"
   → ahora "Rechazar todas" / "Configurar preferencias" / "Aceptar todas").
3. **Hallazgo de cumplimiento, no solo de copy:** al abrir "Configurar preferencias" directamente desde
   el banner (sin haber aceptado/rechazado antes), el toggle de Analítica aparecía **premarcado
   (`true`)** por defecto. Esto es un patrón de opt-in premarcado — contrario a la exigencia de "acción
   afirmativa inequívoca" para categorías opcionales. Corregido: `tempAnalytics` ahora inicia en `false`;
   al reabrir tras una decisión real ya guardada, sigue reflejando correctamente el valor guardado (esto
   ya funcionaba y se verificó que sigue funcionando tras el cambio).

Resultado de la re-verificación tras los 3 fixes, contextos limpios en cada test:

| Test | Resultado |
|---|---|
| First visit — banner auto-show | PASS — aparece sin interacción previa |
| First visit — contenido exacto | PASS — título "Tu privacidad", Rechazar todas/Configurar preferencias/Aceptar todas, enlaces Privacidad y Política de Cookies, los 5 presentes |
| First visit — modal NO se abre solo | PASS — `modalOpenOnLoad: false`; solo banner, tal como distingue el brief |
| Accept → reload | HIDDEN (no reaparece) |
| Reject → reload | HIDDEN (no reaparece); `/contacto/` sigue funcionando (200, 0 errores) |
| Configure → modal | PASS — Necesarias bloqueada y marcada; Analítica ahora **desmarcada por defecto** (fix aplicado) |
| Configure → guardar → reload | HIDDEN (no reaparece), preferencia guardada |
| Footer reopen | PASS — refleja el estado guardado (probado tras un Reject: checkbox de Analítica aparece correctamente desmarcado) |
| Nuevo contexto (incógnito-equivalente) | PASS — banner vuelve a aparecer; confirmado que el storage estaba realmente vacío (no arrastre entre tests) |
| Analítica antes de consentimiento | BLOCKED — `gtag` es `undefined`, 0 requests a `googletagmanager`/`google-analytics` antes de decidir |
| Analítica tras Aceptar | `localStorage.analytics: true` (gtag sigue sin existir en el sitio — ver §5/§9 de este documento; el "ALLOWED" es a nivel de preferencia guardada, no de tráfico real, porque GA4 no está instalado) |
| Analítica tras Rechazar | `localStorage.analytics: false`, y ahora además `revokeGA4()` se invoca (no-op hoy, ver §5) |
| Consent version | `USADO` — `version: "1"` presente en cada objeto guardado |

Screenshots añadidos: `firstvisit-375.png`, `firstvisit-1280.png`, `preferences-375.png`,
`preferences-1280.png` (sustituye una captura anterior de esta misma ruta que por error había quedado
tomada después de cerrar el modal — corregido).

## 12. BANNER REPOSITION — replicado de NEOSUMA (2026-09-29)

El usuario reportó que el banner cubría todo el ancho inferior de la página y pidió replicar cómo lo
muestra `E:\git\interno\neosuma.com` (`components/consent/CookieBanner.tsx`): una tarjeta flotante,
**no** una barra a todo lo ancho.

**Referencia auditada en NEOSUMA:** tarjeta `fixed`, en mobile con márgenes laterales (`left-4 right-4
bottom-4`), en desktop anclada a la derecha (`sm:left-auto sm:right-6 sm:bottom-6`, `max-w-[440px]`), fondo
blanco, borde suave, radio grande, sombra, con: título "Tu privacidad", párrafo, dos botones de igual peso
(Rechazar todas / Aceptar todas) y debajo una fila con "Configurar preferencias" (enlace de texto) + enlaces
Privacidad/Cookies. Solo se replicó la **estructura y el comportamiento** (según pidió el brief original de
esta serie: "utilizar como referencia FUNCIONAL el sistema de NEOSUMA, pero adaptarlo visualmente al
branding de IORANA SEO") — los colores de NEOSUMA (`#104373`, `#6F9EE1`, `#DCEBFF`) NO se copiaron; se
mantienen los tokens propios de IORANA (`--io-action`, `--io-border`, `--io-radius-lg`, etc.). Tampoco se
añadió `framer-motion` (no es una dependencia del proyecto) — la animación de entrada se replicó con un
`@keyframes` CSS simple, respetando `prefers-reduced-motion`.

**Cambios aplicados a `CookieConsent.tsx` (banner únicamente; modal de preferencias sin cambios):**

- Posición: de `position:fixed; bottom:0; left:0; right:0` (barra completa) a tarjeta flotante —
  `left:16px; right:16px; bottom:16px` en mobile (`<768px`), `right:24px; bottom:24px; max-width:420px;
  left:auto` desde `768px`. Ya **no cubre el ancho de la página** en ningún breakpoint desde tablet.
- Estructura reordenada para igualar a NEOSUMA: título → párrafo → **Rechazar todas / Aceptar todas**
  (mismo peso, fila en desktop, columna en `≤430px`) → fila inferior con "Configurar preferencias" (ahora
  un enlace de texto subrayado, ya no un tercer botón con el mismo tratamiento que Aceptar/Rechazar) +
  Privacidad/Cookies.
- Label del segundo enlace legal acortado de "Política de Cookies" a "Cookies", igual que NEOSUMA.
- Lógica de consentimiento (localStorage, `handleAcceptAll`/`handleRejectAll`/`handleSavePreferences`,
  `revokeGA4`) **sin ningún cambio** — solo se tocó el JSX/CSS del banner.

**Verificado tras el cambio:** primera visita (clean storage) sigue mostrando el banner automáticamente con
los 5 elementos requeridos; Aceptar/Rechazar/Configurar siguen persistiendo y no reabriendo el banner tras
recargar; reapertura desde el footer sigue reflejando el estado guardado; 0px de overflow horizontal en
320/375/430/768/1024/1280/1440; `pnpm build` → PASS.

## Archivos modificados / nuevos

**Modificados:**
- `src/components/CookieConsent.tsx` (accesibilidad del modal, `revokeGA4`, copy alineado al brief, link
  "Privacidad" añadido al banner; ronda 2: título "Tu privacidad", labels de botones alineados a la
  referencia, fix del toggle de Analítica premarcado por defecto)
- `src/app/(landings)/components/LandingsFooter.tsx` (botón "Preferencias de cookies" añadido)
- `src/app/(landings)/components/LandingsHeader.tsx` (rama de navegación segura para `/legal/*`, sin
  anclas rotas)
- `src/app/(landings)/legal/page.tsx`, `legal/privacidad/page.tsx`, `legal/cookies/page.tsx`,
  `legal/aviso-legal/page.tsx` (restyle a tokens reales, contenido reorganizado, sin datos inventados)

**Nuevos:**
- `src/app/(landings)/legal/layout.tsx`
- `src/app/(landings)/legal/LegalLayoutClient.tsx`
- `src/app/(landings)/legal/components/LegalNav.tsx`
- `src/app/(landings)/legal/components/LegalHero.tsx`
