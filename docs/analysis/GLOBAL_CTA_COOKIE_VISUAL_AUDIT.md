# Auditoría Visual Global — Botones/CTA + Cookie Consent

**Fecha:** 2026-09-17
**Status:** ✅ IMPLEMENTED (2026-09-18) — ver `GLOBAL_CTA_COOKIE_IMPLEMENTATION_REPORT.md` para el detalle completo de qué se aplicó, cómo y en qué archivos.
**Alcance original:** Auditoría analítica únicamente. Ningún archivo de código fue modificado en esta fase inicial.
**Decisiones aprobadas e implementadas:** Dirección C (Blue + Peach Hierarchy) para el sistema de CTA, Option A (Light) para CookieConsent.
**Nota:** El Hero de HOME (`src/app/(landings)/home/components/Hero.tsx`) está congelado y se excluyó de la implementación; `/diagnostico` quedó deferred por decisión explícita (sistema de marca propio).

---

## 1. Inventario de botones/CTA

| PAGE / COMPONENT | LABEL | ROLE | BACKGROUND | TEXT COLOR | BORDER | RADIUS | HOVER | FOCUS | ACTIVE | WIDTH | TOKEN/HEX |
|---|---|---|---|---|---|---|---|---|---|---|---|
| LandingsHeader (global, `/`, `/soluciones/*`, `/como-trabajamos`) | Analizar mi proyecto | PRIMARY | `var(--io-action)` | white | none | `var(--io-radius-md)` | JS → `var(--io-action-hover)` | ❌ ninguno | ❌ ninguno | auto | token |
| LandingsHeader nav links | Soluciones / Cómo trabajamos / etc. | TEXT LINK | transparent | `var(--io-text-muted)` (o `var(--io-action)` si activo) | none | — | JS → `var(--io-action)` | ❌ | ❌ | auto | token |
| Home Hero (CONGELADO) | Analizar mi proyecto | PRIMARY | `var(--io-action)` | white | none | `var(--io-radius-md)` | JS → hover | ❌ | ❌ | auto (minHeight 48px) | token |
| `/soluciones` Hero | Analizar mi proyecto (sin flecha) | PRIMARY | `var(--io-action)` | white | none | `var(--io-radius-md)` | JS → hover | ❌ | ❌ | auto | token |
| `/soluciones/visibilidad` Hero | Analizar mi proyecto → | PRIMARY | `var(--io-action)` | white | none | `var(--io-radius-md)` | JS → hover | ❌ | ❌ | auto | token |
| `/soluciones/campanas` Hero | Analizar mi proyecto → | PRIMARY | `var(--io-action)` | white | none | `var(--io-radius-md)` | JS → hover | ❌ | ❌ | auto | token |
| `/soluciones/conversion` Hero | Analizar mi proyecto → | PRIMARY | `var(--io-action)` | white | none | `var(--io-radius-md)` | JS → hover | ❌ | ❌ | auto | token |
| `/como-trabajamos` Hero | Analizar mi proyecto → | PRIMARY | `var(--io-action)` | white | none | `var(--io-radius-md)` | JS → hover | ❌ | ❌ | auto | token |
| `/como-trabajamos` CTAFinal | Analizar mi proyecto → | PRIMARY | `var(--io-action)` | white | none | `var(--io-radius-md)` | JS → hover | ❌ | ❌ | auto | token |
| `/web-para-empresas` Hero | Analizar mi proyecto (sin flecha) | PRIMARY | `var(--io-action)` | white | none | `var(--io-radius-md)` | JS → hover | ❌ | ❌ | auto (minHeight 48px, inline-flex) | token |
| `/web-para-empresas` Header (propio, distinto de LandingsHeader) — desktop | Analizar | PRIMARY | `var(--io-action)` | white | none | `var(--io-radius-md)` | ❌ **sin hover** | ❌ | ❌ | auto | token |
| `/web-para-empresas` Header — mobile dropdown | Analizar mi proyecto | PRIMARY | `var(--io-action)` | white | none | `var(--io-radius-md)` | ❌ **sin hover** | ❌ | ❌ | 100% | token |
| `/web-para-empresas` Pricing — plan recomendado | Analizar mi proyecto | PRIMARY | `var(--io-action)` | white | none | `var(--io-radius-md)` | JS → hover | ❌ | ❌ | 100% (grid cell) | token |
| `/web-para-empresas` Pricing — planes no recomendados | Quiero este plan / Quiero saber más | SECONDARY | `var(--io-bg-soft)` | `var(--io-action)` | none | `var(--io-radius-md)` | ❌ sin hover (guard `if plan.recommended`) | ❌ | ❌ | 100% | token |
| `/web-para-empresas` Pricing — badge "Recomendada" | Recomendada | (badge, no accionable) | `var(--io-accent)` | white | none | `20px` (hardcoded, no token) | — | — | — | auto | mixto |
| `/web-para-empresas` FAQForm | (submit paso 1) | FORM ACTION | `var(--io-action)` | white | none | `var(--io-radius-md)` | JS → hover + `translateY(-2px)` + boxShadow más intenso | ❌ | ❌ | 100% | token |
| LandingsFooter / Home Footer | Inicio, Soluciones, Contacto, Privacidad, Cookies, Aviso Legal | TEXT LINK | transparent | `var(--io-text-muted)` | none | — | JS → `var(--io-action)` | ❌ | ❌ | auto | token |
| Home Footer | Preferencias de cookies | TEXT LINK (button semántico) | transparent | `var(--io-text-muted)` | none | none | JS → `var(--io-action)` | ❌ | ❌ | auto | token |
| CookieConsent banner | Rechazar | COOKIE ACTION | transparent | white | `1px solid #666` | `6px` | JS → borderColor `#999` | ❌ | ❌ | auto | **hardcoded, fuera de tokens** |
| CookieConsent banner | Configurar | COOKIE ACTION | transparent | white | `1px solid #666` | `6px` | JS → borderColor `#999` | ❌ | ❌ | auto | **hardcoded** |
| CookieConsent banner | Aceptar | COOKIE ACTION | `#4a9eff` | white | `1px solid #4a9eff` | `6px` | JS → `#2e7fd9` | ❌ | ❌ | auto | **hardcoded** |
| CookieConsent modal | Cancelar | COOKIE ACTION | transparent | `#333` | `1px solid #ccc` | `6px` | ❌ sin hover | ❌ | ❌ | auto | hardcoded |
| CookieConsent modal | Guardar Preferencias | COOKIE ACTION | `#4a9eff` | white | `1px solid #4a9eff` | `6px` | ❌ sin hover | ❌ | ❌ | auto | hardcoded |
| `/diagnostico` LandingCtaButton `accent` | Quiero mi análisis gratuito | PRIMARY (sistema propio) | `#FF8C00` | white | `2px solid transparent` | `14px` | CSS transition declarada, sin JS de color (solo transform/shadow) | ❌ | ❌ | auto | **sistema de color totalmente distinto** |
| `/diagnostico` LandingCtaButton `white` | (variante) | SECONDARY (sistema propio) | white | `#1A1140` (navy propio) | — | `14px` | — | ❌ | ❌ | auto | sistema propio |
| `/diagnostico` LandingCtaButton `outline` | (variante) | TERTIARY (sistema propio) | transparent | white | `rgba(255,255,255,0.4)` | `14px` | — | ❌ | ❌ | auto | sistema propio |
| `/diagnostico` LandingLeadForm | (submit) | FORM ACTION (sistema propio) | `#FF8C00` | white | none | `14px` | disabled → opacity 0.6 | ❌ | ❌ | 100% | sistema propio |
| `/diagnostico` LandingHeader | Teléfono (¿Hablamos?) | TEXT LINK (sistema propio) | transparent | `#0B0314` | — | — | ❌ | ❌ | ❌ | auto | sistema propio |

**Total de instancias distintas inventariadas: 24** (excluyendo repeticiones exactas del mismo componente en distintas páginas cuando el código es idéntico, p. ej. los 4 Hero de `/soluciones/*` cuentan como un patrón repetido pero se listan por página porque son archivos independientes).

---

## 2. Inconsistencias detectadas

| # | Inconsistencia | Dónde | Clasificación | Nota |
|---|---|---|---|---|
| 1 | Botón "Analizar mi proyecto" con flecha `→` en unas páginas y sin ella en otras (Home, `/soluciones` index, `/web-para-empresas` Hero no llevan flecha; `/soluciones/visibilidad`, `/campanas`, `/conversion`, `/como-trabajamos` sí) | Multi-página | **INCONSISTENT** | Mismo rol, mismo copy base, sin razón visible para la diferencia. |
| 2 | Padding del CTA primario varía: `14px 28px` (soluciones index) vs `14px 32px` (resto) | Multi-página | **INCONSISTENT** | Diferencia menor pero sin justificación de layout. |
| 3 | `/web-para-empresas` tiene su propio `Header.tsx` en vez de reutilizar `LandingsHeader` | `/web-para-empresas` | **UNCERTAIN** | Podría ser deliberado (esta landing es más "producto/pricing" que el resto), pero produce falta de hover en su CTA (ver #4) y label distinto ("Analizar" vs "Analizar mi proyecto"). |
| 4 | CTA del Header propio de `/web-para-empresas` (desktop y mobile) no tiene `onMouseEnter`/`onMouseLeave` — no cambia en hover | `/web-para-empresas` Header | **INCONSISTENT** | Todos los demás CTA primarios sí cambian de color en hover; aquí el botón se queda estático. |
| 5 | Radio de la card "Recomendada" (badge) es `20px` hardcodeado, no usa `var(--io-radius-lg)` (18px) ni ningún token | Pricing | **UNCERTAIN** | Es una pastilla (pill), probablemente intencional usar un radio grande "redondeado total"; pero al no ser un token, un cambio futuro de radios no lo actualizaría. |
| 6 | Ningún botón del sitio (fuera de `/diagnostico`, que tampoco lo hace realmente) define un estado `:focus` visible propio — se depende del outline por defecto del navegador | Todo el sitio | **INCONSISTENT** (es una omisión sistemática, no un diseño intencional) | Ver sección WCAG. |
| 7 | Ningún botón define estado `:active` explícito | Todo el sitio | **INTENTIONAL** (razonable no diferenciarlo si hover+transition ya cubre el feedback) | No se considera error grave. |
| 8 | CookieConsent usa una paleta de color **completamente hardcodeada y ajena** al sistema de tokens (`#1a1a1a`, `#4a9eff`, `#2e7fd9`, `#666`, `#999`, `#ccc`, `#333`) | `CookieConsent.tsx` | **INCONSISTENT** | Es el único componente global que no usa ni un solo `var(--io-*)`. |
| 9 | El azul del banner de cookies (`#4a9eff`) es un azul **distinto** del azul de marca (`#3B82F6`) — más claro/cian | `CookieConsent.tsx` | **INCONSISTENT** | Un usuario que navega del sitio al banner percibe dos azules distintos. |
| 10 | Radio del banner/modal de cookies es `6px`, no coincide con ningún token (`--io-radius-sm`=8px es el más cercano) | `CookieConsent.tsx` | **INCONSISTENT** | |
| 11 | `/diagnostico` usa una paleta, tipografía (`Outfit` vs `Manrope`) y sistema de radios (`14px`) **totalmente distintos** de IORANA SEO 2.0 (`landingTheme.ts`: primary `#4D32A5` morado, accent `#FF8C00` naranja) | Toda la ruta `/diagnostico` | **UNCERTAIN → requiere decisión de producto** | No es un descuido de CSS: es una landing de campaña con marca propia, probablemente heredada de una fase anterior. Ver recomendación en §16. |
| 12 | El borde del "portátil" en el mockup de `/web-para-empresas` Hero usa `#1a1a1a` hardcodeado en vez de `var(--io-text)` (`#0F172A`) | `/web-para-empresas` Hero | **UNCERTAIN** | Visualmente casi idéntico (ambos casi-negro), pero no seguirá cambios futuros del token. |
| 13 | El botón de FAQForm (paso 1) usa `boxShadow: rgba(59,130,246,...)` hardcodeado en vez de derivar del token — coincide en valor pero no en mantenibilidad | `/web-para-empresas` FAQForm | **UNCERTAIN** | Cosmético, no visible al usuario. |
| 14 | Estilo del botón secundario NO está formalizado como "sistema" — solo existe implementado una vez (Pricing, planes no recomendados) | `/web-para-empresas` Pricing | **INTENTIONAL** (es el único sitio con planes, tiene sentido que solo ahí exista un secundario) | Útil como semilla del `SECONDARY` para las Direcciones A/B/C. |

**Total de inconsistencias: 14** (10 clasificadas INCONSISTENT, 1 INTENTIONAL confirmada como no-error, 3 UNCERTAIN que requieren decisión).

---

## 3. Uso real de tokens

| Token | Ocurrencias en `.tsx` (fuera de Hero de HOME) | Resumen de uso |
|---|---|---|
| `--io-action` | 237 | Extremadamente extendido: CTAs primarios, iconos, bordes de foco visual, textos destacados, bullets. |
| `--io-action-hover` | 12 | Solo en los `onMouseEnter` de los CTAs primarios reales (no en `/diagnostico`, no en CookieConsent, no en el Header propio de `/web-para-empresas`). |
| `--io-accent` (peach) | 39 | Usado como acento puntual: micro-anotaciones ("Más visibilidad. Más oportunidades."), bordes de badges de atención, barras de gráfico, badge "Recomendada". **Nunca** como fondo de un CTA principal. |
| `--io-border` | 171 | Bordes suaves de cards, separadores, inputs. |
| `--io-bg-soft` | 82 | Fondos de eyebrows/badges, iconos circulares, botones secundarios. |

**Colores hardcodeados que deberían pertenecer al sistema de tokens:**
- `#1a1a1a` (near-black) en `CookieConsent.tsx` y `/web-para-empresas/Hero.tsx` → candidato claro a `var(--io-text)`.
- `#4a9eff` / `#2e7fd9` en `CookieConsent.tsx` → si el banner se alinea al sistema, deberían ser `var(--io-action)` / `var(--io-action-hover)`.
- `#666`, `#999`, `#ccc`, `#333` en `CookieConsent.tsx` → no tienen equivalente directo en los tokens actuales (no hay una escala de grises definida); sería necesario decidir si se mapean a `var(--io-text-muted)`/`var(--io-border)` o si se introduce una escala de grises nueva (fuera del alcance de esta auditoría, solo señalado).
- `rgba(59,130,246,...)` en `FAQForm.tsx` → coincide en valor con `--io-action` pero no está vinculado al token.

No se encontró ningún hardcode de `#3B82F6` ni `#F4A27C` fuera de `Hero.tsx` (congelado) y del propio archivo de tokens — es decir, **donde el sistema de tokens se usa, se usa correctamente**; el problema es la existencia de sistemas paralelos completos (CookieConsent, `/diagnostico`) que no lo usan en absoluto.

---

## 4. Tres direcciones de diseño (propuesta conceptual — sin código)

### Dirección A — Blue Primary
- **PRIMARY:** azul actual (`--io-action` / `--io-action-hover`), texto blanco.
- **SECONDARY:** fondo `--io-bg-soft`, texto `--io-action`, o alternativamente blanco con borde `--io-border`/`--io-action`.
- **PEACH:** solo como acento — anotaciones manuscritas, subrayados, badges de "novedad/recomendado" no accionables, detalles decorativos.
- **TEXT LINKS:** `--io-text-muted` por defecto, `--io-action` en hover/activo.
- **Ventaja:** máxima continuidad con el diseño actual; es, de hecho, lo que el 90% del sitio ya hace de forma natural. Coste de migración mínimo.
- **Riesgo:** el peach queda infrautilizado; el sistema no gana un segundo nivel de énfasis visual para "la acción más importante de la página".

### Dirección B — Peach Primary
- **PRIMARY:** peach como fondo de CTA.
- **BLUE:** para links y elementos secundarios.
- **Contraste real (ver tabla WCAG §5):** blanco sobre `#F4A27C` da **2.04:1** — **falla** AA normal (4.5:1) y AA large (3:1). No es viable usar texto blanco sobre el peach actual.
- **Alternativas viables:**
  - Texto oscuro (`--io-text` `#0F172A`) sobre `#F4A27C` → **8.76:1**, pasa AA y AAA con margen.
  - Si se prefiere mantener texto blanco, se necesitaría un peach más oscuro. Una reducción de ~40% de luminosidad (`≈ #92614A`) alcanza **≈5.2:1** con blanco, pasando AA normal por poco margen — pero deja de ser "peach", se convierte en un terracota oscuro que se aleja de la identidad de marca actual.
- **Ventaja:** el peach ganaría muchísimo protagonismo, diferenciándose de la competencia (muchas agencias usan azul como color dominante).
- **Riesgo:** cambiar el color dominante de toda la marca es un cambio de identidad, no solo de CTA; además obliga a usar texto oscuro (rompe la convención actual de "texto blanco sobre color de acción").

### Dirección C — Blue + Peach Hierarchy (híbrida)
- **PRIMARY GENERAL:** azul (`--io-action`), para todos los CTA de navegación estándar ("Analizar mi proyecto" en Header, Hero, secciones intermedias).
- **CONVERSIÓN DESTACADA / RECOMENDADO:** tratamiento peach — **solo** para el único elemento de conversión más importante de una página cuando hay jerarquía explícita que comunicar (ej. el plan "Recomendada" de Pricing, o un único CTA final de cierre de página tipo `CTAFinal`). Regla clara: **nunca más de un elemento peach-primary por vista**; si una página no tiene una jerarquía de conversión clara (ej. una landing con un solo CTA), ese CTA se queda en azul.
- **SECONDARY:** blanco/`--io-bg-soft` con texto `--io-action`.
- **TEXT LINKS:** azul.
- **PEACH como señal:** además del uso "CTA recomendado", se mantiene su uso actual de acento decorativo (anotaciones, subrayados, badges no accionables).
- **Contraste:** el peach como fondo de CTA en esta dirección requeriría la misma decisión que en Dirección B (texto oscuro sobre peach, `8.76:1`) para el caso concreto en que se use como fondo de botón.

---

## 5. Tabla de contraste WCAG (cálculo real, luminancia relativa)

| BACKGROUND | TEXT | CONTRAST RATIO | AA NORMAL TEXT (4.5:1) | AA LARGE TEXT (3:1) |
|---|---|---|---|---|
| `--io-action` `#3B82F6` | white `#FFFFFF` | **3.68:1** | ❌ FALLA | ✅ PASA |
| `#F4A27C` (peach) | white `#FFFFFF` | **2.04:1** | ❌ FALLA | ❌ FALLA |
| `#F4A27C` (peach) | `--io-text` `#0F172A` | **8.76:1** | ✅ PASA | ✅ PASA |
| `--io-bg-soft` `#EFF6FF` | `--io-action` `#3B82F6` | **3.38:1** | ❌ FALLA | ✅ PASA (justo) |
| white `#FFFFFF` | `--io-action` `#3B82F6` (texto/link) | **3.68:1** | ❌ FALLA | ✅ PASA |

**Hallazgo crítico:** el patrón de botón MÁS usado en todo el sitio hoy (`--io-action` + texto blanco, 14–16px, peso 600) **no cumple WCAG AA para texto normal**. Cumple para "texto grande" (18.66px bold o 24px regular), pero los CTA reales están por debajo de ese umbral. Esto no es un problema introducido por esta auditoría — es el estado actual, en todas las páginas, incluido el Hero de HOME congelado. Se documenta aquí como hallazgo, sin tocar nada.

---

## 6. Estados conceptuales por dirección

| Estado | Dirección A (Blue) | Dirección B (Peach) | Dirección C (Híbrida) |
|---|---|---|---|
| DEFAULT | Azul + blanco | Peach + texto oscuro | Azul + blanco (general) / Peach + texto oscuro (destacado) |
| HOVER | Azul más oscuro (`--io-action-hover`) | Peach ligeramente más oscuro/saturado | Igual que DEFAULT según cuál sea |
| FOCUS | Anillo (`outline`/`box-shadow`) de 2–3px en un tono con contraste ≥3:1 contra el fondo de la página, ej. azul oscuro o `--io-text`, **nunca** solo un cambio de opacidad | Igual criterio; dado que el fondo del botón ya es peach, el anillo de foco debería ser azul o navy para diferenciarse claramente | Igual criterio, color de anillo consistente independientemente de si el botón es azul o peach (para que el usuario reconozca "esto tiene foco" sin ambigüedad) |
| ACTIVE | Ligero oscurecimiento adicional o `scale(0.98)` | Igual patrón | Igual patrón |
| DISABLED | Opacidad reducida (~0.5–0.6) + `cursor: not-allowed`, manteniendo el mismo color base (no gris genérico) para no perder identidad | Igual | Igual |

En los tres casos, el FOCUS es hoy **inexistente** como estado diseñado (se documenta como hallazgo, no como parte de ninguna dirección — es una carencia transversal a corregir independientemente de qué dirección de color se elija).

---

## 7. Auditoría de CookieConsent.tsx

**Fondo actual:** `#1a1a1a` (negro casi puro, banner) — contraste enorme con el resto del sitio, que es 100% fondos claros (`--io-bg` `#F8FAFC`, blanco). Modal de preferencias: blanco, sin relación cromática con el banner que lo abre.

**Tipografía:** no especifica ninguna `fontFamily` — hereda la del `body`/`html` global. Si el body usa Manrope, el banner también, pero esto no está garantizado explícitamente en el propio componente (no es un bug, es una dependencia implícita).

**Botones:** ver tabla §1 e inconsistencias #8–#10. Los tres botones del banner (Rechazar/Configurar/Aceptar) comparten `padding: 10px 20px`, `borderRadius: 6px`, `fontSize: 14px` — **mismo tamaño exacto**. La diferencia de jerarquía viene exclusivamente del color: Rechazar y Configurar son `transparent` + borde `#666` (outline), Aceptar es fondo sólido `#4a9eff` + `fontWeight: 600` (vs 500 de los otros dos).

**Veredicto sobre jerarquía Aceptar vs Rechazar:** técnicamente Rechazar y Configurar tienen trato **idéntico** entre sí (mismo estilo exacto), lo cual es correcto — no hay un "botón gris discreto" para Rechazar específicamente. Pero Aceptar sí recibe un tratamiento visualmente más fuerte que AMBOS (relleno sólido + peso de fuente mayor), lo que **crea una jerarquía desigual entre "aceptar" y "no aceptar"**, aunque de forma más sutil que el patrón que el brief pedía evitar explícitamente ("azul fuerte + gris discreto"). No es el peor caso posible, pero no cumple estrictamente "MISMA JERARQUÍA, MISMA VISIBILIDAD" que pide la sección 12 del brief.

**Spacing:** `gap: 20px` entre bloque de texto y botones; `gap: 10px` entre botones; `padding: 20px` en el banner. Layout: `display:flex, justifyContent:'space-between', flexWrap:'wrap'`.

**Border:** el banner no tiene borde propio (solo `boxShadow: '0 -2px 10px rgba(0,0,0,0.1)'` hacia arriba). Los botones sí llevan `border: 1px solid` en Rechazar/Configurar/Cancelar.

**Layout desktop vs mobile:** **no existe ninguna media query ni breakpoint** dentro de `CookieConsent.tsx`. Todo el comportamiento responsive depende únicamente de `flexWrap: 'wrap'` en dos niveles (el contenedor principal y el grupo de botones). No hay tratamiento específico para 375/430 (ver §9 más abajo con el análisis de qué pasa en la práctica).

**Preference center:** modal centrado (`position:fixed`, overlay `rgba(0,0,0,0.5)`), tarjeta blanca `borderRadius:12px`, `maxWidth:500px`, `width:90%`, `maxHeight:80vh` con scroll. Contiene: toggle "Cookies Necesarias" (checkbox deshabilitado, siempre activo), toggle "Analítica" (checkbox funcional), y dos botones (Cancelar / Guardar Preferencias) con el mismo patrón de color hardcodeado que el banner.

**Link "Política de Cookies":** `href="/legal/cookies"`, color `#4a9eff` (el mismo azul ajeno al sistema), `fontSize:12px`, sin subrayado, sin estado hover definido.

---

## 8. Dos opciones de estilo para el banner de cookies

### OPTION COOKIE A — LIGHT
- Fondo blanco o `--io-bg` (`#F8FAFC`), borde superior `1px solid var(--io-border)`, `boxShadow` suave hacia arriba (ej. `0 -4px 20px rgba(15,23,42,0.08)`).
- Texto `--io-text` / `--io-text-muted`.
- Rechazar y Configurar: mismo tratamiento — fondo blanco/transparente + borde `var(--io-border)`, texto `--io-text`.
- Aceptar: incluso en esta opción, para no romper la jerarquía, se recomienda que Aceptar mantenga el **mismo tipo de tratamiento visual (outline)** que Rechazar/Configurar, diferenciándose solo por *orden* (situarlo el último, posición convencional) en vez de por color — o, si se opta por darle color de marca, usar `--io-action` en los tres con la MISMA intensidad (los tres outline, o los tres rellenos) para no favorecer visualmente ninguna opción.
- **Ventajas:** integración total e inmediata con el resto de IORANA SEO 2.0; reduce la sensación de "interrupción agresiva" que da hoy el negro puro.
- **Riesgos:** un banner claro sobre un fondo de página también claro puede perder visibilidad/urgencia si no se refuerza con sombra y borde suficientes; hay que vigilar que no "desaparezca" visualmente.
- **Desktop:** banda horizontal inferior, texto a la izquierda, tres botones a la derecha en fila.
- **Mobile:** ver §9 (stack recomendado).

### OPTION COOKIE B — DARK SOFT
- Fondo `--io-text` (`#0F172A`, navy oscuro del propio sistema) en vez de `#1a1a1a` genérico — mantiene la intención "oscura y visible" del diseño actual pero usando un color que **sí pertenece** a la paleta de marca.
- Texto blanco (contraste `#0F172A` vs blanco es altísimo, >15:1, sin problema).
- Botones: Rechazar/Configurar en outline blanco semitransparente (`border: 1px solid rgba(255,255,255,0.3)`); Aceptar puede usar `--io-accent` (peach) como pequeño acento de marca — pero aplicando el mismo cuidado de contraste que en la Dirección B de CTA: peach + texto oscuro, no peach + blanco.
- **Ventajas:** conserva la lectura "esto es un aviso importante" (fondo oscuro) sin sentirse genérico/plantilla; usa colores que pertenecen realmente al sistema.
- **Riesgos:** si Aceptar usa peach y los otros dos quedan en blanco/outline, hay que verificar que la diferencia sea de "marca" y no de "urgencia" — el peach no debería leerse como "más importante", solo como "esta es la acción de marca". Recomendación: aplicar el peach como un detalle pequeño (ej. borde o icono), no como relleno grande, para no reintroducir el problema de jerarquía desigual.
- **Desktop/Mobile:** igual estructura que Opción A.

Para ambas opciones, el punto no negociable (repetido del brief): **Aceptar y Rechazar deben compartir tipo de tratamiento** (ambos outline, o ambos rellenos con el mismo peso visual) — la única variable "aceptable" para diferenciar es el orden en pantalla, no el peso cromático.

---

## 9. Mobile Cookie UX (375 / 430)

**Estado actual:** con `flexWrap: 'wrap'` en el grupo de tres botones y `minWidth: '250px'` en el bloque de texto, a 375–430px de ancho el texto y el enlace "Política de Cookies" ocupan una fila completa y el grupo de tres botones (`Rechazar`, `Configurar`, `Aceptar`, cada uno con `padding: 10px 20px`) **no cabe en una sola fila** — el `flexWrap` los hace pasar a 2 filas (típicamente 2 botones en la primera fila y 1 en la segunda, en un orden no controlado explícitamente, dependiente del ancho exacto del texto de cada botón). No hay scroll horizontal (el `flexWrap` lo evita), pero el resultado es una composición visual "cortada" y con salto de layout dependiente del viewport exacto, no diseñada intencionalmente.

**Propuesta (sin implementar):** layout **stack vertical completo** en mobile (los 3 botones en columna, cada uno a ancho completo o centrado), en el orden Rechazar → Configurar → Aceptar (o el orden que se decida, pero consistente), **todos con el mismo ancho y el mismo tratamiento de color** entre sí para no introducir jerarquía por tamaño. Alternativa "2+1" (Rechazar + Configurar en una fila, Aceptar solo en la fila siguiente a ancho completo) se desaconseja porque el aislamiento visual de "Aceptar" en su propia fila ya le da prominencia por posición, incluso sin cambiar el color — si se elige esa opción, compensar dándole el mismo tratamiento cromático que los otros dos.

---

## 10. Resumen de archivos que se verían afectados si se implementara (NO tocados en esta auditoría)

- `src/components/CookieConsent.tsx` (estilo completo del banner + modal)
- `src/app/(landings)/web-para-empresas/components/Header.tsx` (añadir hover al CTA, unificar label)
- `src/app/(landings)/web-para-empresas/components/Hero.tsx` (unificar `#1a1a1a` → `var(--io-text)`, añadir flecha si se decide unificar)
- `src/app/(landings)/soluciones/components/Hero.tsx` (unificar padding/fontSize/flecha con el resto de `/soluciones/*`)
- `src/app/(landings)/soluciones/visibilidad/components/Hero.tsx`, `campanas/components/Hero.tsx`, `conversion/components/Hero.tsx` (si se decide quitar/añadir flecha de forma uniforme)
- `src/app/(landings)/web-para-empresas/components/FAQForm.tsx` (boxShadow → derivar de token)
- Potencialmente `src/app/styles/iorana-design-tokens.css` (solo si se decide introducir un nuevo token de "focus ring" o una escala de grises — no para cambiar valores existentes)
- `src/app/diagnostico/components/Landing/landingTheme.ts` y todo `src/app/diagnostico/components/Landing/*` **solo si** se decide migrar esa landing al sistema IORANA SEO 2.0 (cambio de gran alcance, ver recomendación).
- `src/app/(landings)/home/components/Hero.tsx` — **excluido explícitamente**, congelado.

---

## 11. Recomendación final

**Sistema de CTA recomendado: Dirección C (híbrida)**, por ser la que mejor aprovecha lo que el sitio ya hace bien (azul como lenguaje base, extendido y coherente en 237 usos) sin desperdiciar el peach, y porque ya existe una semilla real de ella en el propio código (el patrón "recomendado vs no recomendado" de `Pricing.tsx`, y el badge "Recomendada" en peach). Se recomienda definir la regla de "máximo un CTA peach por vista" de forma explícita antes de tocar ningún archivo.

**Estilo de cookies recomendado: Opción A (Light)**, porque:
1. Es el cambio de menor riesgo (no introduce un nuevo color "de marca" para el banner, solo reutiliza lo que ya existe).
2. Resuelve directamente el hallazgo del brief ("apariencia muy oscura comparada con el resto de IORANA SEO") sin necesidad de decidir cómo tratar el peach en un contexto legal/funcional donde la neutralidad importa más que la expresividad de marca.
3. Un banner de cookies no necesita "personalidad de marca fuerte" — necesita ser legible, confiable y coherente. La Opción B es visualmente más interesante pero añade una decisión de diseño (uso de peach en un contexto legal) que no aporta valor funcional.

**Decisión pendiente fuera del alcance de CTA/Cookie:** qué hacer con `/diagnostico`. No se recomienda tocarlo como parte de esta iniciativa — es un sistema de marca completo y deliberado (probablemente una landing de campaña de pago con su propia identidad "urgente" en naranja), y migrarlo tendría implicaciones de conversión que exceden un ajuste de estilo. Se deja documentado como hallazgo de gran magnitud para que el negocio decida conscientemente, no como parte del sistema de botones a unificar ahora.
