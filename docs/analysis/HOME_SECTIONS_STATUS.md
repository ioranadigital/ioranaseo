# HOME — estado de las secciones rediseñadas

**Última actualización:** 2026-10-07 (QA de BASELINE-UI-001; sin cambios de código en Home) · Regla común: no modificar una sección FROZEN salvo bug real, regresión responsive o problema de accesibilidad.

| Sección | Componente | Estado |
|---|---|---|
| De la presencia digital a las oportunidades | `home/components/PresenciaDigital.tsx` | **FROZEN** (sticky scroll runway 480/400/320px) |
| Nuestro sistema de captación | `home/components/NuestroSistema.tsx` | **FROZEN** (pipeline interactivo; en móvil sin panel y con enlace superpuesto) |
| Todo lo que necesitas para captar mejor | `home/components/TodoLoQueNecesitas.tsx` (+ `CapabilityVisuals.tsx`) | Fotos reales integradas (`public/assets/img/home/capabilities/`); pendiente de aprobación final |
| ¿Por dónde quieres empezar? | `home/components/PorDondeEmpezar.tsx` | **FROZEN** |
| **Preguntas frecuentes + Diagnóstico digital gratuito** | `home/components/FAQAnalisis.tsx` | **FROZEN** |

## ¿Por dónde quieres empezar? — FROZEN (2026-09-26)

Aprobado y congelado:
- 3 cards con fondo blanco y borde peach; card central RECOMENDADA (badge `#F4A27C`, texto oscuro, contraste 8.76:1).
- CTA central azul sólido; CTAs laterales outline; checks azules; sin iconos en cabecera.
- Franja "Diagnóstico inicial gratuito" debajo.
- **768px: 3 columnas (aprobado; NO convertir a 2×2).** CTAs en una sola línea mediante `white-space: nowrap`,
  padding reducido, margen −8px y fuente `clamp(12.5px, 1.65vw, 15px)` solo en las secundarias.
- Hover peach `rgba(244,162,124,0.08)` (solo con `@media (hover: hover)`); foco visible con `:focus-within`.

Verificación final (sin cambios de código; `pnpm build` PASS con el código final):

| Ancho | Resultado | Overflow horizontal |
|---|---|---|
| 375 | PASS | 0px |
| 430 | PASS | 0px |
| 768 | PASS (3 columnas, CTAs en 1 línea) | 0px |
| 1024 | PASS (nota abajo) | 0px |
| 1280 | PASS | 0px |
| 1440 | PASS | 0px |

**Nota conocida (1024px exacto):** "Ver soluciones de crecimiento →" (CTA de la card 3) se parte en dos líneas.
Ya ocurría antes de esta ronda y 1024+ se mantuvo congelado. Si se decide corregirlo, aplicar el mismo enfoque
que en 768 (nowrap + menos padding + fuente ajustada) sin cambiar nada más.

## Preguntas frecuentes + Diagnóstico digital gratuito — FROZEN (2026-09-27)

Aprobado y congelado. Reemplaza el mini-formulario de diagnóstico anterior (eliminado); el CTA envía a `/diagnostico/`,
donde vive el wizard real. Desktop/1024+: FAQ (izq.) + panel (der.); tablet 768 y mobile: apilado, FAQ arriba.

- FAQ: accordion con `+`/`−`, un solo item abierto a la vez, `aria-expanded`/`aria-controls`/`aria-labelledby`, sin
  `autoFocus` ni `.focus()` programático — verificado que `document.activeElement` es `BODY` tras cargar y hacer scroll.
  CSS usa `:focus-visible` (no `:focus`), así que un click de ratón no deja anillo persistente y sí lo muestra un Tab real.
- Panel: eyebrow + H3 + copy + 3 checks + mini-flujo (Web/SEO/Maps/Ads → Diagnóstico → Prioridades, oculto en mobile) + CTA azul.
- Separación con el Footer: el `padding-bottom` propio de la sección se llevó a `0` en todos los breakpoints; el hueco
  visible hasta el `<footer>` (80px) lo aporta el `marginTop: '80px'` inline de `Footer.tsx` (no tocado, fuera de alcance).

**Nota para quien retome esto:** si algún día se reduce el "gap" de 80px, hay que tocar `Footer.tsx` (`marginTop`),
no esta sección — aquí ya no queda padding que recortar.

## BASELINE-UI-001 — verificación de Home (2026-10-07)

Detalle completo en `BASELINE_UI_001.md`. No se ha cambiado el estado de ninguna sección.

**Estados (vocabulario del baseline):** FROZEN = aprobación visual documentada · FROZEN PARCIAL = solo los bloques
indicados · QA PASS = validado técnicamente · PENDING VISUAL APPROVAL = pendiente de aprobación · KNOWN ISSUES.

| Elemento de Home | QA | Estado |
|---|---|---|
| Hero de Home | QA PASS | **FROZEN** (`GLOBAL_CTA_COOKIE_VISUAL_AUDIT.md`, `GLOBAL_CTA_COOKIE_IMPLEMENTATION_REPORT.md`) |
| PresenciaDigital, NuestroSistema, PorDondeEmpezar, FAQAnalisis | QA PASS | **FROZEN** (secciones de arriba) |
| TodoLoQueNecesitas | QA PASS | **PENDING VISUAL APPROVAL** (fotos reales integradas, aprobación final pendiente) |
| Home en conjunto | QA PASS | **FROZEN PARCIAL** |

**KNOWN ISSUES relacionados con Home y el sitio:**
- Excepción local `overflow-x: clip` en los Heroes de Visibilidad, Campañas y Conversión (no afecta a Home).
- 5 errores de TypeScript preexistentes en `src/lib/technical-seo.ts` (`next build` no valida tipos).
- Interfaces de Google, Maps e IA de Visibilidad: pendientes de integrar.
- GA4/GTM no integrados: el toggle "Analítica" no activa nada. Quedan pendientes las pruebas de consentimiento con
  analítica real (carga condicional del script, Consent Mode, ausencia de cookies `_ga*` antes de consentir, revocación).
- `globals.css` sin `line-height: 1.5` respecto a HEAD (trabajo de tipografía previo; afecta a todo el sitio).

- `/` y `/home/` a 375, 430, 768, 1024, 1280, 1440 y 1920: overflow horizontal 0, Manrope y CSS cargados, un único `h1`,
  sin errores de consola ni respuestas ≥400.
- Archivos de Home (`home/`), `LandingsFooter`, `CookieConsent` y `layout.tsx`: sin diferencias frente a HEAD, por lo que las
  secciones FROZEN conservan su diseño.
- Banner y preferencias de cookies: PASS (aceptar, rechazar, configurar, persistencia, reapertura desde el Footer).
- A 375/430 el `Hero` oculta `.hero-mockup-mobile` con `display:none` (intencionado, "phone dropped"); su `<img>` lazy no
  se descarga y no es un fallo.
- La nota de 1024px de "¿Por dónde quieres empezar?" no se ha vuelto a medir en esta ronda y sigue vigente.

## Incidencias técnicas abiertas
- `node_modules` se vacía de forma inesperada durante el desarrollo: ver `INCIDENT_node_modules_empty_2026-09-25.md`.
