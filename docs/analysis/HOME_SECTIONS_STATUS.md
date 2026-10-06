# HOME — estado de las secciones rediseñadas

**Última actualización:** 2026-09-27 · Regla común: no modificar una sección FROZEN salvo bug real, regresión responsive o problema de accesibilidad.

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

## Incidencias técnicas abiertas
- `node_modules` se vacía de forma inesperada durante el desarrollo: ver `INCIDENT_node_modules_empty_2026-09-25.md`.
