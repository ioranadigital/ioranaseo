# BASELINE-UI-001 — Estado visual de IORANA SEO 2.0

**Fecha de QA y cierre:** 2026-10-07 · **Entorno:** `next dev -p 3015` + `pnpm build` · **Base:** `main` en `ce29fd4f`
**Commit y tag:** el commit se titula `chore(ui): establish IORANA SEO 2.0 visual baseline` y el tag anotado es
`baseline-ui-001`. Un documento no puede contener el hash de su propio commit: se obtiene con
`git rev-list -n 1 baseline-ui-001`.

## 0. Vocabulario de estados

| Estado | Significado |
|---|---|
| **FROZEN** | Aprobación visual documentada. No modificar salvo bug real, regresión responsive o problema de accesibilidad. |
| **FROZEN PARCIAL** | Solo los bloques indicados están aprobados; el resto sigue pendiente. |
| **QA PASS** | Funcionamiento técnico validado (matriz responsive, consola, build). No implica aprobación visual. |
| **PENDING VISUAL APPROVAL** | Pendiente de aprobación visual. |
| **KNOWN ISSUES** | Problema conocido y aceptado para este baseline (ver §7). |

## 1. Desbloqueo responsive (6 casos de overflow horizontal real)

Todos eran reales (`scrollWidth > clientWidth`). Corrección mínima, sin cambiar texto, fotos, colores ni CTA.

| # | Ruta @ ancho | Overflow | Causa demostrada | Corrección | Archivo |
|---|---|---|---|---|---|
| 1 | `/web-para-empresas/` @430 | 199 px | La `<img width=560>` no tenía `max-width`; su ancho intrínseco ensanchaba la pista `1fr` de `.wi-grid` (594 px en un viewport de 415) | `.wi-visual img { max-width:100%; height:auto; aspect-ratio:560/374 }` | `WhatIncludes.tsx` |
| 2 | `/web-para-empresas/` @1024 | 31 px | La misma imagen (560 px) en una columna de 484 px útiles | Misma regla | `WhatIncludes.tsx` |
| 3 | `/soluciones/visibilidad/` @1280 | 63 px | `.vh-bg` (720 px, `margin-left:-20px`) sobresale por la derecha `95 − --vh-r` px; solo cabe con ≥1380 px de viewport | `overflow-x: clip` en `.vh-section` | `visibilidad/components/Hero.tsx` |
| 4 | `/soluciones/campanas/` @1280 | 73 px | Ídem (`.cph-bg`) | `overflow-x: clip` en `.cph-section` | `campanas/components/Hero.tsx` |
| 5 | `/soluciones/conversion/` @1280 | 73 px | Ídem (`.cvh-bg`) | `overflow-x: clip` en `.cvh-section` | `conversion/components/Hero.tsx` |
| 6 | `/contacto/` @375 | 2 px | Dos causas: la tarjeta del formulario (`align-items:start`) se ajustaba a su ancho mínimo (342 px > 320 px) y `.cf-form-row` usaba `1fr`, que deja que los `<input>` ensanchen la columna | `minmax(0,1fr)` en `.cf-form-row` + `max-width:100%` en los hijos de `.contacto-main-grid` (≤1023 px) | `ContactoForm.tsx`, `ContactoClient.tsx` |

### Excepción local autorizada: `overflow-x: clip` en los Heroes (casos 3–5)

- **Decisión:** autorizada el 2026-10-07. Es una excepción **local** (en la sección de cada Hero, nunca en `html`/`body`).
- **Por qué:** la capa de foto (720 px) está diseñada para sobresalir de la columna. El desbordamiento ocurría en todo el
  rango 1025–≈1400 px (medido 1025/1100/1180/1280/1366/1440 → 0 tras el cambio). `clip` recorta solo lo que ya quedaba
  fuera de la pantalla: escala, encuadre, degradados y microcards no cambian.
- **Alternativa descartada:** acortar la capa (≈658 px a 1280, −9 %), que sí cambiaría escala y encuadre.
- **Compatibilidad:** `overflow-x: clip` requiere Chrome ≥90, Safari ≥16, Firefox ≥81. No se añadió *fallback* con
  `hidden` porque convertiría el eje Y en `auto`.
- **Restricción:** no modificar de nuevo fotografías ni geometría de estos Heroes sin una nueva decisión.

### Verificación de no regresión visual (comparación de píxeles)

| Cambio | Resultado |
|---|---|
| Heroes Visibilidad/Campañas/Conversión @1280 (antes/después) | **idénticos byte a byte** |
| `/web-para-empresas/` sección "Qué incluye" @768, 1280, 1366, 1440, 1920 (CSS anterior simulado vs actual) | idénticos |
| `/contacto/` @768, 1024, 1280, 1440, 1920 | idénticos |
| `/web-para-empresas/` @430 y @1024 | cambian (era un layout roto; ahora cabe — ver capturas) |
| `/contacto/` @375 | cambia (tarjeta 342→320 px, relleno simétrico 29/29 px) |
| `/contacto/` @481 | cambia: la fila de 2 columnas ya no desborda el interior de la tarjeta (mejora; sin cambio de texto ni tamaños) |

Capturas en `docs/analysis/screenshots/baseline-ui-001/` (`before-*` / `after-*`).

## 2. Resultado del QA

| Control | Resultado |
|---|---|
| Matriz responsive 15 rutas × 7 anchos (375/430/768/1024/1280/1440/1920) = 105 | **105/105 PASS** (overflow real 0, Manrope, CSS, `h1` único, imágenes, navegación, enlaces) |
| Errores de consola / respuestas HTTP ≥400 | 0 / 0 |
| Cookies | **PASS** según el alcance probado (ver §3) |
| `pnpm build` | **PASS** (con el dev server parado, `.next` borrado después, dev reiniciado y verificado) |
| `pnpm-lock.yaml` | **sin cambios** (md5 `b8b4860c7f9d504d86eab49e5cadc6ac`) |
| Typecheck (`tsc --noEmit --ignoreDeprecations 6.0`) | 0 errores en archivos tocados; ver KNOWN ISSUES (§7, punto 2) |

Observación (no es fallo): en Home a 375/430 una `<img>` lazy queda sin cargar porque pertenece a `.hero-mockup-mobile`,
que el propio CSS oculta (`display:none`, "phone dropped" ≤430 px).

## 3. Consentimiento de cookies (`CookieConsent.tsx`, clave `iorana-cookie-consent`)

| Prueba | Resultado |
|---|---|
| Primera visita: banner visible, sin clave guardada, sin `gtag`/`dataLayer` | PASS |
| Rechazar todas → `analytics:false`, banner oculto, persiste tras recarga | PASS |
| Aceptar todas → `analytics:true`, banner oculto, persiste tras recarga | PASS |
| Configurar preferencias: diálogo, analítica **desmarcada** por defecto, necesarias deshabilitadas, `Esc` cierra | PASS |
| Guardar con analítica marcada → `true` | PASS |
| Reapertura desde Footer ("Preferencias de cookies"): muestra el valor guardado y permite cambiarlo (`true`→`false`) | PASS |
| 375 px: banner y modal dentro del viewport, 0 overflow | PASS |
| Peticiones a Google Analytics/GTM/Ads/Meta/Clarity/Hotjar en todos los estados | 0 |

**Alcance y límite:** el PASS cubre la interfaz de consentimiento, su persistencia y la ausencia de peticiones de
analítica. "Bloqueo de analítica sin consentimiento" se cumple porque **no hay ningún script de analítica cargado**
(`initializeGA4/revokeGA4` son no-ops). Pruebas **pendientes** hasta integrar analítica real: (a) el script solo se
carga tras aceptar, (b) `gtag('consent','update')` concede/revoca correctamente, (c) no aparecen cookies `_ga*` antes de
consentir, (d) la revocación detiene los envíos.

## 4. Estado visual de cada ruta

Asignado tras revisar los informes históricos de `docs/analysis/`. Los sellos "PAGE STATUS: FROZEN" de los bloques de
entrega son del 2026-09-28 y **anteriores** a las rondas fotográficas y de tipografía (2026-10-06/07), que figuran como
"no aprobado todavía" / "pendiente de aprobación visual". Por eso esas rondas no se consideran aprobadas.

| Ruta / elemento | QA | Estado visual | Evidencia |
|---|---|---|---|
| Header, Footer, sistema de CTA, `CookieConsent` | QA PASS | **FROZEN** | `GLOBAL_CTA_COOKIE_VISUAL_AUDIT.md` (decisiones aprobadas: CTA Dirección C, CookieConsent Option A); `WEB_PARA_EMPRESAS_VISUAL_POLISH_AUDIT.md` ("Header y Footer: compartidos, ya frozen") |
| `/` y `/home/` | QA PASS | **FROZEN PARCIAL**: Hero (congelado según `GLOBAL_CTA_COOKIE_*`) y 4 secciones (PresenciaDigital, NuestroSistema, PorDondeEmpezar, FAQAnalisis). **PENDING VISUAL APPROVAL**: TodoLoQueNecesitas | `HOME_SECTIONS_STATUS.md` |
| `/soluciones/` | QA PASS | **FROZEN PARCIAL**: contenido y tarjetas (2026-09-28). **PENDING VISUAL APPROVAL**: Hero con tipografía estándar y foto (2026-10-06) | `SOLUCIONES_VISUAL_POLISH.md`, `HERO_TYPOGRAPHY_STANDARD.md` |
| `/web-para-empresas/` | QA PASS (+ casos 1–2) | **FROZEN PARCIAL**: página (sello 2026-09-28) y Hero como referencia aprobada del estándar tipográfico. **PENDING VISUAL APPROVAL**: efecto de los casos 1–2 en la sección "Qué incluye" a ≤1024 px | `WEB_PARA_EMPRESAS_VISUAL_POLISH_AUDIT.md`, `HERO_TYPOGRAPHY_STANDARD.md`. *Discrepancia a confirmar:* el informe de la ronda fotográfica dice "no aprobado todavía"; el estándar posterior (2026-10-06) la cita como "Referencia aprobada". Se trata como aprobada por ser posterior |
| `/soluciones/visibilidad/` | QA PASS (+ caso 3) | **FROZEN PARCIAL**: Hero (declarado FROZEN el 2026-10-07 y restaurado). **PENDING VISUAL APPROVAL**: Introducción, TresFormas, ComoTrabajamos, Comercialización, Análisis, FAQ (V2) | `VISIBILIDAD_REGRESSION_RECOVERY.md`, `VISIBILIDAD_V2_IMPLEMENTATION_REPORT.md` ("READY para revisión local") |
| `/soluciones/campanas/` | QA PASS (+ caso 4) | **FROZEN PARCIAL**: resto de la página (2026-09-28). **PENDING VISUAL APPROVAL**: Hero fotográfico y ajustes de tamaño/posición (2026-10-07) | `CAMPANAS_VISUAL_POLISH.md` ("no aprobado todavía") |
| `/soluciones/conversion/` | QA PASS (+ caso 5) | **FROZEN PARCIAL**: resto de la página (2026-09-28). **PENDING VISUAL APPROVAL**: Hero fotográfico y ajustes de tamaño/posición (2026-10-07) | `CONVERSION_VISUAL_POLISH.md` ("no aprobado todavía") |
| `/como-trabajamos/` | QA PASS | **FROZEN PARCIAL**: página (2026-09-28). **PENDING VISUAL APPROVAL**: Hero con tipografía estándar | `COMO_TRABAJAMOS_VISUAL_POLISH.md`, `HERO_TYPOGRAPHY_STANDARD.md` |
| `/quienes-somos/` | QA PASS | **FROZEN PARCIAL**: bloque "Quién está detrás". **PENDING VISUAL APPROVAL**: resto y Hero | `QUIENES_SOMOS_VISUAL_POLISH.md` ("READY FOR VISUAL REVIEW") |
| `/contacto/` | QA PASS (+ caso 6) | **PENDING VISUAL APPROVAL** (sin aprobación documentada) | `CONTACTO_IMPLEMENTATION_REPORT.md` está desactualizado ("In Progress") |
| `/diagnostico/` | QA PASS | **PENDING VISUAL APPROVAL** (sistema de marca propio, "deferred" en la unificación de CTA) | `GLOBAL_CTA_COOKIE_IMPLEMENTATION_REPORT.md` |
| `/legal/`, `/legal/aviso-legal/`, `/legal/privacidad/`, `/legal/cookies/` | QA PASS | **PENDING VISUAL APPROVAL**; contenido incompleto (ver §7, punto 6) | `LEGAL_COOKIE_SYSTEM.md` §9 |

**Secciones FROZEN preservadas:** los archivos de Home (`home/`), `LandingsFooter`, `CookieConsent` y `layout.tsx` no
tienen ningún cambio frente a HEAD (`git diff --stat HEAD` vacío). El Hero de Visibilidad solo recibe `overflow-x: clip`,
con capturas idénticas.

## 5. Recursos necesarios (usados por el sitio)

- `public/assets/img/visibilidad/hero-visibilidad.webp` (nuevo)
- `public/assets/img/campanas/hero-campanas.webp` (nuevo)
- `public/assets/img/conversion/hero-conversion.webp` (nuevo)
- `public/assets/img/web-para-empresas/hero-business.webp` (modificado)
- Comprobado: todos los `/assets/img/...` referenciados desde `src/` existen; `src/` no referencia `docs/` ni `Ioranaseo-old/`.

## 6. Integridad documental

Revisadas las referencias a imágenes y capturas de los 11 `.md` incluidos (no hay enlaces Markdown a archivos locales;
son rutas citadas en el texto): 42 referencias.

| Resultado | Nº | Tratamiento |
|---|---|---|
| El archivo existe y entra en el commit (o ya estaba versionado) | 26 | Sin cambios |
| Apunta a material excluido (capturas históricas y fotos de stock originales) | 10 | Anotado en el propio texto: "no versionado: solo en local" |
| Mención histórica a algo que ya no existe: assets que nunca existieron o rutas de destino sustituidas (6) y componentes de Visibilidad eliminados en V2 citados por la auditoría original (3: `LasPalancas`, `QueHacemos`, `QueSignificaVisibilidad`) | 9 | Sin cambios; es narrativa de la época, no un enlace |

No se han modificado los archivos históricos excluidos.

## 7. KNOWN ISSUES y cambios pendientes

1. **Excepción de `overflow-x: clip`** en los Heroes de Visibilidad, Campañas y Conversión (ver §1).
2. **TypeScript:** 5 errores preexistentes en `src/lib/technical-seo.ts`
   (`getEntries`, `PerformanceObserverCallback`, `match` sobre `never`). `next build` omite la validación de tipos, así
   que no los detecta. El código legacy de `Ioranaseo-old/` añade más errores, pero no forma parte del build.
3. **Visibilidad — interfaces de Google, Maps e IA pendientes.** La tarea PR-CLA-IOR-003 se interrumpió. TresFormas e
   Introducción siguen con SVG abstractos e iconos Lucide; no hay logotipos oficiales de Google/Maps en el repo.
4. **Visibilidad — Bloque 05:** el mini-formulario no envía datos (el CTA navega a `/diagnostico/`); los enlaces
   "Conocer SEO / SEO Local / GEO" se omitieron porque esas páginas no existen.
5. **GA4/GTM no integrados:** el toggle "Analítica" no activa nada. Las pruebas de consentimiento con analítica real
   quedan pendientes (ver §3).
6. **Legal incompleto:** faltan datos del titular, base jurídica y plazos de conservación; hay 3 emails distintos en el
   código (`LEGAL_COOKIE_SYSTEM.md` §9). Requiere decisión del negocio.
7. **`globals.css`:** la working copy elimina `line-height: 1.5` respecto a HEAD (afecta a todo el sitio; parte del
   trabajo de tipografía previo). Incluido porque el QA se hizo con él.
8. **Home @1024:** el CTA "Ver soluciones de crecimiento →" se parte en dos líneas (preexistente; no re-medido en esta ronda).
9. **Documentación histórica:** `CONTACTO_IMPLEMENTATION_REPORT.md` está desactualizado; varios informes citan capturas
   solo locales (§6).
10. **Eliminaciones pendientes de decisión:** `Ioranaseo-old/public/assets/img/{contenidos,pagina-web}-450.jpg` (no incluidas).
11. **Discrepancia de aprobación** del Hero de Web para empresas (ver §4).
12. Git avisa de conversión LF→CRLF en varios archivos al hacer `add` (sin efecto funcional).

## 8. Contenido del commit y exclusiones

**Incluido:**
- `src/**` — 26 archivos: 6 Heroes, `globals.css`, 6 componentes de Visibilidad eliminados (código muerto), 3 nuevos
  (`Introduccion`, `Comercializacion`, `AnalisisVisibilidad`), reescritos (`TresFormas`, `FAQAnalisis`, `ComoTrabajamos`,
  `VisibilidadVisuals`, `page.tsx`, `styles.css`), `WhatIncludes.tsx`, `ContactoClient.tsx`, `ContactoForm.tsx`.
- `public/assets/img/{visibilidad,campanas,conversion,web-para-empresas}/` — 4 imágenes (§5).
- `docs/analysis/*.md` — informes y auditorías (modificados y nuevos), incluidos este documento, `HOME_SECTIONS_STATUS.md`
  y `VISIBILIDAD_REGRESSION_RECOVERY.md`.
- `docs/design/IORANA_SEO_Visibilidad_Mockup_Aprobado.png` (referencia oficial, 1,5 MB).
- Capturas esenciales: `screenshots/baseline-ui-001/`, `screenshots/visibilidad-regression/`, `screenshots/visibilidad-v2/`.

**Excluido:**
- `docs/img/` (≈46 MB): fotos de stock originales y copias de webp que el sitio no usa.
- `Ioranaseo-old/…` (2 eliminaciones): requieren decisión específica.
- Resto de carpetas de capturas sin seguimiento (`hero-standard`, `hero-photography`, `web-hero-recovery`,
  `web-para-empresas-photography`, `home-lineheight-ab`, `header-audit`, `visual-regression-recovery`,
  `home-typography-variants`, `home-historical-comparison`, `typography-recovery`) y 6 capturas sueltas de ajustes de
  Hero: evidencia histórica prescindible.
- Secretos, `.env*`, `node_modules/`, `.next/`: ignorados por `.gitignore`; sin secretos en el diff (escaneado).

## 9. Reproducibilidad

El conjunto incluido contiene todo el código y los assets que el sitio usa. Lo excluido no es referenciado por `src/`
(comprobado con grep) ni por `package.json`.
