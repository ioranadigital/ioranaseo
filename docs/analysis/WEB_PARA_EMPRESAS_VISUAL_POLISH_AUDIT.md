# /web-para-empresas/ — Visual Polish Audit

> **Actualización 2026-09-27 — IMPLEMENTATION RESULT:** el Visual Polish descrito en este audit se implementó.
> Ver la sección [IMPLEMENTATION RESULT](#implementation-result-2026-09-27) al final del documento para el
> estado por bloque, capturas y QA. El audit original (sin cambios de código) se conserva íntegro debajo como
> registro histórico de la decisión.


**Fecha:** 2026-09-27 · **Alcance:** auditoría visual y técnica, sin cambios de código (`CODE MODIFIED: NO`).
**Referencia:** lenguaje visual ya aprobado y congelado en HOME (ver `HOME_SECTIONS_STATUS.md`).

---

## CURRENT VISUAL LEVEL

La página funciona y es coherente en tokens de color, pero se quedó en la **generación anterior** al Visual
Polish de HOME: cards de texto sin microvisuales reales, mockups abstractos de un solo estilo (navegador con
barras grises), sin fotografía, sin interacción con propósito (solo un accordion de FAQ y un mini-formulario
de diagnóstico que no lleva a ningún sitio). Es una landing "de catálogo" — clara y ordenada, pero plana y,
en el tramo de precios, muy larga en móvil.

## HOME CONSISTENCY: **NEEDS POLISH**

- Los tokens de color (`--io-action`, `--io-accent`, `--io-bg-soft`, `--io-border`, `--io-text`) se usan
  correctamente en casi todo el código nuevo, pero conviven con **hardcodes del azul antiguo `#3B82F6`**
  (`rgb(59, 130, 246)`) en sombras y overlays — visualmente casi idéntico a `--io-action` (`#336FE6`), así que
  no rompe nada a la vista, pero es deuda de tokens.
- El lenguaje de microvisuales/microcards de HOME (SVG con estructura azul + acento peach) no existe aquí:
  los "mockups" son `<div>` anidados con barras de color plano, sin la textura ni el detalle que ya tienen
  `HomeMicrovisuals.tsx` / `CapabilityVisuals.tsx`.
- No hay fotografía real en ninguna sección, mientras que HOME ya la incorporó en "Todo lo que necesitas".
- El patrón de interacción "hover preview + click fijo + panel compartido" que definimos en HOME no aparece
  aquí en ningún sitio equivalente (Nuestro método / Qué incluye), aunque el contenido se presta a ello.

---

## SECTION-BY-SECTION AUDIT

### 1. Hero — **POLISH**
- Impacto visual: medio. Buen H1, buen eyebrow, pero el mockup de navegador+móvil es genérico (barras
  grises, sin fotografía ni contexto de negocio real).
- Balance copy/visual: correcto (1.2fr/0.8fr).
- **CTA "Analizar mi proyecto" es un `<button>` sin `onClick` ni `href` — no hace nada.** Bug de conversión,
  no solo de estilo.
- Altura: 592px en 1280 (razonable), pero 814px en 430 y 667px en 375 (los benefits 2×2 empujan bastante).
- Responsive: funciona, sin overflow, pero la nota accent ("Negocios locales...") se solapa visualmente muy
  cerca del mockup en 375 (`bottom: -32px`, fuera del contenedor).
- INTERACTION: STATIC (solo hover de color en el CTA).
- PHOTO: **YES** — una foto real de una PYME (comercio, taller, estudio) sustituyendo el mockup abstracto
  encajaría igual que en HOME, sin convertirlo en el mismo layout.

### 2. "De la visibilidad a los resultados" — **REDESIGN** (la más débil de la página)
- Solo texto + flechas "→", fondo blanco plano, sin cards, sin microvisual, sin interacción.
- Es, conceptualmente, el mismo journey de 3 pasos que HOME tenía **antes** de su Visual Polish
  ("Te encuentran / Te entienden / Contactan" → aquí "Que te encuentren / Que entiendan lo que haces / Que
  contacten"). Ver **REDUNDANCY** más abajo.
- Altura: 403px en 1280 (compacta), pero se siente vacía, no corta.
- INTERACTION: STATIC.
- PHOTO: NO (es un journey conceptual, no una foto de negocio).

### 3. Nuestro método — **POLISH**
- Cards con número en círculo + conector, funcional pero plano (mismo patrón que la vieja versión de
  "Nuestro sistema de captación" de HOME, ya sustituida allí por un pipeline interactivo).
- **Bug responsive confirmado:** a 1024px exactos, la línea/flechas conectoras (activadas por
  `min-width:1024px` en el `<style>` del propio componente) se muestran sobre una rejilla ya forzada a 2
  columnas por ese mismo breakpoint — la línea cruza entre las tarjetas 01 y 02 sin conectar nada real
  (ver captura `web-para-empresas-audit/method-1024-bug` descrita en Technical Risks).
- Podría beneficiarse de un microvisual pequeño por paso (igual que Nuestro sistema de captación en HOME),
  sin llegar a un pipeline interactivo completo — aquí describe un proceso interno, no una selección del
  usuario.
- INTERACTION: STATIC.

### 4. Qué incluye tu web — **POLISH**
- Checklist + mockup de navegador con "badges" flotantes (Tu negocio en Google / Diseño responsive /
  Medición incluida) — es el componente más cercano en espíritu a las microcards de HOME, pero con menos
  detalle visual (rectángulos grises, sin iconografía).
- **Enlace "Ver todos los detalles →" con `href="#"` — no lleva a ningún sitio.**
- Buen candidato a **capability board / workspace visual** (como "Todo lo que necesitas" en HOME), aunque
  aquí describe una sola web, no 6 capacidades distintas — mejor un solo panel enriquecido que un board.
- INTERACTION: STATIC.
- PHOTO: opcional — podría convivir con el mockup si se quiere seguir mostrando "la web" como producto.

### 5. Planes / precios — **MICRO POLISH** (no reconstruir)
- Jerarquía y alineación correctas: card recomendada centrada, con badge peach, `translateY(-16px)` y borde
  azul reforzado — coherente con "¿Por dónde quieres empezar?" de HOME.
- **Las 3 CTA de precio (`<button>`) no tienen `onClick` ni `href` — ningún plan es contratable ni deriva a
  contacto/diagnóstico.** Es el hueco de conversión más grave de toda la página.
- Mobile: el reordenamiento (recomendada primero) funciona vía `order` + flex-column, correcto.
- Consistencia peach/azul: correcta.
- **TOO TALL en mobile:** 2216px (375) / 2168px (430) solo esta sección, por el `gap: 32px` entre 3 cards
  apiladas con listas de hasta 6 líneas cada una. A 1280 es razonable (1029px, 3 columnas).

### 6. FAQ + "Cuéntanos tu proyecto" — **REDESIGN**
- El accordion de FAQ (izquierda) es sólido y reutilizable.
- **El panel derecho es exactamente el mismo anti-patrón que acabamos de eliminar de HOME**: un
  mini-formulario multistep con opciones tipo radio y un paso 1 funcional seguido de un placeholder
  literal — *"Paso 2/4 — Formulario multistep a completar"*. No hace nada, no guarda nada, no envía a
  ningún sitio. `/diagnostico/` ya existe como el wizard real.
- Recomendación conceptual (sin implementar): sustituir este panel por una promoción de
  `/diagnostico/`, con el mismo espíritu que el nuevo bloque de HOME (`FAQAnalisis.tsx`), pero con copy
  propio de "Web" en vez de repetir el de HOME.
- **TOO TALL en mobile:** 1486px (375) / 1378px (430), agravado por el formulario muerto.
- INTERACTION: ACCORDION (FAQ) + CLICK (formulario, roto).

---

## REDUNDANCIES

**REDUNDANCY: MEDIUM.**

- "De la visibilidad a los resultados" repite el concepto de journey de cliente que HOME ya cuenta
  (encontrar → entender → contactar), pero con foco distinto (aquí es "cómo trabaja tu web", no "qué hace
  Iorana"). No es una copia literal de contenido, pero sí del mismo arco narrativo en un formato más pobre
  (sin visual, sin interacción) justo donde HOME ya elevó el nivel.
- **Cómo profundizar en vez de repetir:** en lugar de narrar otra vez "te encuentran / entienden / contactan"
  en abstracto, esta sección podría mostrar **cómo se traduce eso dentro de la propia web** (ej.: SEO on-page
  real, estructura de contenido, formulario/CTA reales) — mismo arco, pero con el detalle específico de
  "Web" que HOME no cubre.
- El mini-formulario de diagnóstico (FAQForm) es la redundancia más seria: es funcionalmente el mismo
  componente roto que HOME tenía y ya eliminó a favor de `/diagnostico/`. Aquí sigue vivo.
- "Nuestro método" (Estrategia/Diseño/SEO/Conversión) y "Nuestro sistema de captación" de HOME
  (Web/Visibilidad/Campañas/Conversión) comparten el patrón visual "4 pasos + conector", pero el contenido
  no se solapa (uno es proceso de trabajo, el otro es el sistema de captación) — redundancia de **patrón**,
  no de **contenido**.

## VISUAL STORYTELLING POTENTIAL: **HIGH**

El contenido ya existe y es bueno; falta la capa visual (microvisuals, fotografía, un panel compartido con
interacción) que HOME ya demostró que funciona en este mismo sistema de diseño.

---

## TOP 5 VISUAL IMPROVEMENTS

1. **SECTION:** FAQ + panel derecho (`FAQForm.tsx`)
   **CHANGE:** sustituir el formulario multistep roto por un panel promocional de `/diagnostico/` (mismo
   espíritu que `home/FAQAnalisis.tsx`, copy propio de Web).
   **IMPACT:** HIGH (elimina un componente roto visible y una redundancia de producto)
   **EFFORT:** LOW
   **RECOMMENDED:** YES

2. **SECTION:** Precios — CTAs sin destino
   **CHANGE:** dar `href`/`onClick` real a los 3 botones de plan (contacto, WhatsApp o `/diagnostico/` según
   plan) y al CTA del Hero.
   **IMPACT:** HIGH (es fuga de conversión directa, no solo estética)
   **EFFORT:** LOW
   **RECOMMENDED:** YES

3. **SECTION:** "De la visibilidad a los resultados"
   **CHANGE:** enriquecer con un microvisual por paso (browser/SEO/form, en la línea de
   `HomeMicrovisuals.tsx`) sin convertirlo en un scroll runway ni copiar el layout de HOME.
   **IMPACT:** HIGH (es la sección visualmente más pobre de la página)
   **EFFORT:** MEDIUM
   **RECOMMENDED:** YES

4. **SECTION:** Hero
   **CHANGE:** sustituir el mockup abstracto por una composición foto real + microinterfaz superpuesta
   (mismo lenguaje que "Todo lo que necesitas" en HOME), y corregir el CTA sin destino.
   **IMPACT:** MEDIUM-HIGH
   **EFFORT:** MEDIUM
   **RECOMMENDED:** YES

5. **SECTION:** Nuestro método
   **CHANGE:** arreglar el conflicto de breakpoint a 1024px (conector vs. grid 2×2) y valorar un microvisual
   discreto por paso.
   **IMPACT:** MEDIUM
   **EFFORT:** LOW (el bug) / MEDIUM (el microvisual)
   **RECOMMENDED:** YES para el bug — OPTIONAL para el microvisual

## HIGHEST IMPACT VISUAL CHANGE

**Sustituir el mini-formulario de diagnóstico roto (FAQForm) por un panel de promoción a `/diagnostico/`.**
No es solo la mejora visualmente más consistente con HOME: es el único punto de la auditoría donde el
usuario puede quedarse literalmente atascado en un "Paso 2/4" que no lleva a ningún sitio, en una página cuyo
objetivo es la conversión. Corrige a la vez visual, redundancia de producto y una fuga de conversión real.

## KEEP AS IS

- **Header y Footer:** compartidos, ya frozen, no tocar.
- **Estructura de precios (jerarquía, orden, badge, mobile reorder):** funciona bien, es fiel al sistema de
  HOME ("¿Por dónde quieres empezar?"). Solo necesita CTAs funcionales, no rediseño.
- **Accordion de FAQ (columna izquierda de FAQForm):** limpio, accesible en su forma actual, reutilizable.
- **Grid 2×2 de "Nuestro método" en tablet:** funciona correctamente en 768–1023 (verificado en captura).
- **Copy general de todas las secciones:** claro, sin necesidad de reescritura para esta ronda de polish.

---

## RESPONSIVE RISKS

| Riesgo | Dónde | Detalle |
|---|---|---|
| **Bug confirmado a 1024px exactos** | Nuestro método | La línea/flechas conectoras (`min-width:1024px`, en el `<style>` del componente) se activan sobre una rejilla ya forzada a 2 columnas por el mismo breakpoint (`max-width:1024px`, inclusive). Verificado visualmente: una línea gris cruza entre las cards 01/02 sin conectar nada. |
| Altura excesiva en mobile | Pricing (2216px @375) y FAQ+form (1486px @375) | Página completa: **7782px** de alto en 375, **7882px** en 430 — muy por encima de los ~4400px de 1280/1440. |
| Nota flotante casi fuera de caja | Hero, 375 | `.hero-accent-note` usa `bottom: -32px` dentro de un contenedor con `overflow: hidden` — al límite de recortarse. |
| Reglas de header duplicadas/obsoletas | `styles.css` (líneas 1–49, 302–335) | Ver Technical Risks — no coinciden con las clases reales de `LandingsHeader.tsx`, así que no tienen efecto, pero tampoco se detectan como error. |

Todo lo demás (768, 1024, 1280, 1440) pasa sin overflow horizontal (`scrollWidth <= clientWidth` confirmado
en las seis anchuras).

## TECHNICAL RISKS

- **CTAs sin destino (bug funcional, no solo visual):**
  - Hero: botón "Analizar mi proyecto" sin `onClick`/`href`.
  - Pricing: los 3 botones de plan ("Quiero este plan", "Analizar mi proyecto", "Quiero saber más") sin
    `onClick`/`href`.
  - WhatIncludes: enlace "Ver todos los detalles →" con `href="#"`.
- **Componentes muertos (no importados por `page.tsx`, pero presentes en el repo):**
  `components/Header.tsx` (220 líneas), `components/Methodology.tsx` (123 líneas),
  `components/ValueProposition.tsx` (117 líneas) — 460 líneas sin uso. `components/index.ts` los
  re-exporta, pero ese barrel tampoco se usa (todos los imports de `page.tsx` son directos).
- **CSS muerta en `styles.css` (~80 líneas):** las reglas que apuntan a `header nav`, `header button`,
  `.landing-header`, `.desktop-nav`, `.mobile-menu-btn`, `header > div > a[href="#contacto"]` no coinciden
  con ninguna clase real de `LandingsHeader.tsx` (que usa `landings-header__*`, BEM, y su propio `<style>`
  interno con su propia lógica responsive). Parecen resto de un header antiguo. Sin efecto actual, pero
  confunden a quien mantenga el archivo.
- **Hardcodes de color antiguo:** `rgba(59, 130, 246, …)` (`#3B82F6`) en `WhatIncludes.tsx` (sombra de
  badges), `Pricing.tsx` (sombra de card recomendada) y `FAQForm.tsx` (sombra del panel y de un botón) — no
  usan `--io-action`. Visualmente casi idénticos a `--io-action` (`#336FE6`), así que no se nota, pero es el
  patrón exacto de "hardcode antiguo" que pedías vigilar.
- **`transform: scale()`:** no encontrado en esta página.
- **`overflow-x: clip` como parche:** sí aparece, en `body` y `section` dentro de `@media (max-width: 375px)`
  en `styles.css` — un guardarraíl global (no solo de esta página) para evitar overflow horizontal a 375px,
  en vez de corregir la causa en cada componente. Como hoy no hay overflow real (confirmado: 0px en las seis
  anchuras), no está enmascarando nada actualmente, pero es la clase de parche a evitar si se toca layout.
- **Responsive duplicado entre archivos:** cada componente define su propio `<style>` con los mismos
  breakpoints (1024/768/430/375) que también aparecen, para las mismas secciones, en `styles.css` — no
  contradictorios hoy, pero es la razón de fondo del bug de "Nuestro método" a 1024px (dos fuentes de verdad
  para el mismo breakpoint).
- **Tokens:** el resto de la página usa correctamente `--io-action`, `--io-action-hover`, `--io-accent`
  (`#F4A27C`), `--io-bg-soft`, `--io-border`, `--io-text`, `--io-text-muted`. No se han encontrado más
  hardcodes relevantes fuera de los citados arriba.

## FILES THAT WOULD CHANGE

Si se implementa el TOP 5 (no se ha tocado nada todavía):

- `src/app/(landings)/web-para-empresas/components/Hero.tsx`
- `src/app/(landings)/web-para-empresas/components/VisibilityToResults.tsx`
- `src/app/(landings)/web-para-empresas/components/OurMethod.tsx`
- `src/app/(landings)/web-para-empresas/components/WhatIncludes.tsx` (solo el enlace muerto, si se prioriza)
- `src/app/(landings)/web-para-empresas/components/Pricing.tsx` (solo los CTA, sin tocar estructura)
- `src/app/(landings)/web-para-empresas/components/FAQForm.tsx` (posible split/renombrado si se separa FAQ de
  panel de diagnóstico)
- `src/app/(landings)/web-para-empresas/styles.css` (limpieza de reglas muertas de header, si se decide)
- Posible archivo nuevo de microvisuales específico de Web (equivalente a `HomeMicrovisuals.tsx` /
  `CapabilityVisuals.tsx`), y posibles assets de fotografía en
  `public/assets/img/web-para-empresas/` (no existen todavía).
- Opcional: borrar `Header.tsx`, `Methodology.tsx`, `ValueProposition.tsx` e `index.ts` si se confirma que
  no los usa nada (limpieza, no visual).

---

## Screenshots generados

`docs/analysis/screenshots/web-para-empresas-audit/`:
- `{375,430,768,1024,1280,1440}-full.png` — página completa por anchura.
- `1280-{hero,visibilidad,metodo,incluye,pricing,faq-form}.png` — recortes por sección a 1280.

## ENTREGA

```
CURRENT VISUAL LEVEL: generación previa al Visual Polish de HOME — funcional, coherente en tokens, pero sin
microvisuales reales, sin fotografía y con 2 CTAs/1 enlace/1 formulario que no llevan a ningún sitio.
HOME CONSISTENCY: NEEDS POLISH
HERO: POLISH
NUESTRO MÉTODO: POLISH
QUÉ INCLUYE: POLISH
PRICING: MICRO POLISH
FAQ / CLOSING: REDESIGN
VISUAL STORYTELLING POTENTIAL: HIGH
TOP 5: ver sección TOP 5 VISUAL IMPROVEMENTS
HIGHEST IMPACT: sustituir el formulario de diagnóstico roto (FAQForm) por un panel de promoción a /diagnostico/
RESPONSIVE RISKS: bug confirmado a 1024px en Nuestro método; página muy larga en mobile (7782–7882px) por
  Pricing (2216px) y FAQ+form (1486px)
TECHNICAL RISKS: 3 CTAs y 1 enlace sin destino; 460 líneas de componentes muertos; ~80 líneas de CSS muerta
  apuntando a un header que ya no existe con esas clases; hardcodes de #3B82F6 en 3 archivos
FILES THAT WOULD CHANGE: ver sección FILES THAT WOULD CHANGE
CODE MODIFIED: NO
```

---

## IMPLEMENTATION RESULT (2026-09-27)

Implementado sobre el TOP 5 del audit, con foco en HIGHEST IMPACT primero. Arquitectura general, pricing
structure, copy general, Header, Footer, rutas, SEO y breakpoints existentes: sin tocar. Archivo nuevo:
`WebVisuals.tsx` (microvisuales SVG propios de esta página, sin librerías nuevas).

### Estado por bloque

- **Hero:** copy y CTA intactos; visual derecho enriquecido con foto real de negocio (placeholder mientras no
  exista el asset) + mini navegador (`HeroBrowserVisual`) + 3 microcards (Diseño responsive / SEO preparado /
  CTA claros). CTA corregido a `/diagnostico/`.
- **De la visibilidad a los resultados:** reformulada en 3 pasos con microvisual propio por paso (SERP
  conceptual / navegador con jerarquía / CTA+formulario), fila estática conectada con flecha discreta —
  sin scroll runway ni sticky. Copy conservado.
- **Nuestro método:** mismos 4 pasos (Estrategia/Diseño/SEO/Conversión) con microvisual propio en cada
  tarjeta. Bug de 1024px corregido (ver abajo).
- **Qué incluye tu web:** convertido en capability board — lista de 6 capacidades (chips) a la izquierda +
  un único navegador compartido a la derecha cuya zona resaltada cambia según la capacidad activa (hover
  previsualiza, click fija, teclado con Enter/Space). Contenido idéntico al original, solo cambia la
  presentación. Enlace roto "Ver todos los detalles →" (`href="#"`) **eliminado** — no existe un destino real
  dentro de la página y no se ha inventado ninguno.
- **Pricing:** solo micro polish — mismos planes, precios, features, badge, orden y reordenamiento mobile.
  Tokens corregidos (`#3B82F6` → `--io-action`), CTAs ahora son enlaces reales, y se añadió compactación de
  spacing en mobile (sin ocultar contenido).
- **FAQ + cierre:** el mini-formulario roto ("Cuéntanos tu proyecto" con el placeholder "Paso 2/4...") se
  **eliminó por completo**. En su lugar, panel de promoción a `/diagnostico/` con el copy exacto del brief
  (eyebrow, H3, copy, 4 beneficios, CTA "Empezar diagnóstico").

### Bug de 1024px — FIXED

Causa raíz confirmada en el audit: el conector se activaba en `min-width:1024px` mientras la rejilla ya
forzaba 2 columnas en un rango que incluía 1024 (`max-width:1024px`, inclusive). Solución: alinear ambas
condiciones a la convención de breakpoints ya usada en el resto de la página —
tablet **768–1023** (2×2, conector oculto) y desktop **≥1024** (4 columnas, conector visible) — sin crear
ningún breakpoint nuevo. Verificado: a 1024px exactos la rejilla es ahora `repeat(4, 1fr)` real y el conector
conecta las 4 tarjetas correctamente (ver `1024-metodo.png`).

### CSS heredada — decisiones tomadas (sin limpieza masiva de `styles.css`)

Para evitar que reglas antiguas de `styles.css` (con selectores `!important` de descendiente, ej.
`.visibility-section h2`, `.visibility-section p`, `.hero-accent-note`) interfirieran con el nuevo marcado,
se optó por **no reutilizar** esos nombres de clase heredados en los elementos rediseñados (en vez de editar
`styles.css`): `VisibilityToResults` ya no lleva la clase `visibility-section`, y la nota de acento del Hero
se eliminó (redundante con las nuevas microcards, y era la única fuente real de solape). El resto de reglas
de `styles.css` señaladas como CSS muerta en el audit original (bloque de selectores de header, `.form-box`,
`.faq-grid`, `.method-grid`/`.method-card`, `.hero-mockup`) siguen sin usarse, ahora también por parte de los
componentes reescritos, y quedan documentadas para una limpieza futura, no realizada en esta ronda.

### PHOTO ASSET REQUIRED

La foto del Hero aún no existe. Ruta preparada: `public/assets/img/web-para-empresas/hero-business.webp`
(persona real trabajando en un pequeño negocio/PYME — café, tienda, estudio, comercio, servicio profesional;
nada de headshot ni stock corporativo frío). Mientras no exista el archivo, se muestra un degradado soft
blue/peach con un icono, sin romper el layout ni usar imágenes externas.

### QA

| Ancho | Resultado |
|---|---|
| 375 | PASS |
| 430 | PASS |
| 768 | PASS |
| 1024 | PASS (bug de conector corregido) |
| 1280 | PASS |
| 1440 | PASS |

- **Overflow horizontal:** 0px en los seis anchos.
- **Enlaces:** Hero CTA → `/diagnostico/`; Pricing → Esencial `/contacto/`, Web de Captación `/diagnostico/`,
  Growth `/contacto/`; FAQ CTA → `/diagnostico/`; ningún `href="#"` ni CTA sin destino.
- **Hardcodes de azul antiguo:** 0 en los archivos modificados.
- **Errores de consola:** 0 en las seis anchuras.
- **Altura total de página** (antes → ahora): 1024: 6009px → 4654px (−22 %, por el fix de 4 columnas);
  1280/1440: 4444px → 4280px; 768: 6675px → 6389px; 375: 7782px → 7429px; 430: 7882px → 7605px.

### Capturas

`docs/analysis/screenshots/web-para-empresas-polish/`: página completa en los seis anchos
(`{375,430,768,1024,1280,1440}-full.png`), recortes por sección a 1280 y 375 (`hero`, `journey`, `metodo`,
`incluye`, `pricing`, `faq-closing`), `1024-metodo.png` (verificación del fix del conector) y
`1280-incluye-zone{3,5}.png` (verificación de dos capacidades más del capability board).

### ENTREGA

```
HERO: PASS
HERO CTA: PASS (/diagnostico/)
WEB JOURNEY: PASS
NUESTRO MÉTODO: PASS
1024 CONNECTOR BUG: FIXED
QUÉ INCLUYE: PASS
PRICING: PASS
PRICING CTA 1 (Esencial): /contacto/
PRICING CTA 2 (Web de Captación): /diagnostico/
PRICING CTA 3 (Growth): /contacto/
FAQ OLD MINI FORM: REMOVED
NEW DIAGNOSTIC PANEL: PASS
BROKEN LINKS: 0
OLD BLUE IN MODIFIED FILES: 0
375: PASS
430: PASS
768: PASS
1024: PASS
1280: PASS
1440: PASS
HORIZONTAL OVERFLOW: 0px
BUILD: PASS
```

---

## HERO PHOTO INTEGRATION (2026-09-27, segunda ronda)

Fotografía definitiva integrada: `public/assets/img/web-para-empresas/hero-business.webp` (34.5 KB, WebP
calidad 90, 500×500 px), generada exactamente a partir de la imagen indicada por el usuario
(`Ioranaseo-old/public/assets/img/seo-local-tablet-450.jpg`, sin sustituir por ningún stock). El placeholder
degradado ya no se muestra (`data-missing` confirmado `false` en las seis anchuras).

Único ajuste de código: `object-position` del `<img>` — `58% 50%` en desktop/tablet (el recorte solo afecta
a los laterales, ya que el contenedor es más alto que ancho) y `58% 10%` en mobile ≤767px, donde el propio
`hero-photo` cambia a una caja apaisada (ancho 100% / alto 62%) y el recorte pasa a ser vertical: un valor
top-biased mantiene cara y manos con la tablet visibles en vez de centrarlas y perder la cabeza. Ningún otro
elemento (layout, copy, CTA, microcards, browser mockup, Header, Footer, tokens) se ha tocado.

La nota decorativa "✦ Negocios locales. Grandes oportunidades." sigue eliminada (no se ha recuperado).

### QA

| Ancho | Crop | Microcard overlap con la cara |
|---|---|---|
| 375 | PASS | 0 |
| 430 | PASS | 0 |
| 768 | PASS | 0 |
| 1024 | PASS | 0 |
| 1280 | PASS | 0 |
| 1440 | PASS | 0 |

- **MICROCARD OVERLAP:** 0 sobre la cara en las seis anchuras (verificado visualmente). Dos microcards se
  superponen geométricamente al rectángulo de la foto por diseño ya aprobado (p.ej. "Diseño responsive" sobre
  la zona del torso/edificio) — eso es intencional, no un conflicto.
- **Overflow horizontal:** 0px en las seis anchuras.
- **Errores de consola:** 0.
- **Nitidez:** la foto se muestra siempre por debajo de su resolución nativa (máx. ~305px de ancho renderizado
  en 1440 frente a 500px nativos), sin pixelado visible.

### ENTREGA

```
FINAL PHOTO: USED
PHOTO ASSET: public/assets/img/web-para-empresas/hero-business.webp
FORMAT: WebP
WEIGHT: 34.5 KB
375 CROP: PASS
768 CROP: PASS
1280 CROP: PASS
MICROCARD OVERLAP: 0
HORIZONTAL OVERFLOW: 0px
BUILD: PASS
PAGE STATUS: FROZEN
```
