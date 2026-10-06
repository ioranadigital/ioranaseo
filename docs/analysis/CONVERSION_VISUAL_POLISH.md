# /soluciones/conversion/ — Visual Polish (Opción 3: CRO / UX / Datos)

**Fecha:** 2026-09-28 · Reemplaza la estructura anterior de 7 secciones (Hero, ComoFunciona,
NoEsSoloUnaWeb, QueIncluye, DondeSePierde, PorDondeEmpezar, FAQAnalisis con mini-formulario) por una página
compacta de 5 secciones, con identidad propia centrada en comportamiento, UX, datos y mejora continua.

## IMPLEMENTATION SUMMARY

```
Header global
Hero (copy izq. / web conceptual + overlay A/B der.)
Qué optimizamos (3 pilares: Formularios, UX, Medición)
Cómo trabajamos la conversión (id="como-trabajamos-conversion", 4 pasos: Análisis→Hipótesis→Mejora→Medición)
Resultados que puedes conseguir (3 cards compactas: contactos, reservas, rendimiento)
Preguntas frecuentes + Diagnóstico (FAQ 5 preguntas / panel sin formulario)
Footer
```

Archivos nuevos: `QueOptimizamos.tsx`, `ComoTrabajamos.tsx`, `Resultados.tsx`, `ConversionVisuals.tsx` (13
microvisuales SVG propios de esta página). `Hero.tsx` y `FAQAnalisis.tsx` reescritos en el mismo archivo
(eliminado el mini-formulario con placeholder de pasos, mismo anti-patrón ya retirado en HOME,
`/web-para-empresas/`, `/soluciones/visibilidad/` y `/soluciones/campanas/`). `page.tsx` actualizado.

**Sin usar / no borrados** (documentados como deuda, mismo criterio que en las rondas anteriores):
`ComoFunciona.tsx`, `NoEsSoloUnaWeb.tsx`, `QueIncluye.tsx`, `DondeSePierde.tsx`, `PorDondeEmpezar.tsx`. Ya no
los importa `page.tsx`.

## CONTENT PRESERVED

Revisé el contenido existente antes de sustituirlo. La FAQ anterior (`FAQAnalisis.tsx`) tenía 6 preguntas con
respuestas bien planteadas sobre CRO, rediseño, landing pages y medición — reutilicé y adapté 5 de ellas
(fusionando "¿Qué es CRO?" con "¿Qué significa optimizar la conversión?" en una sola pregunta, y añadiendo
"¿Necesito mucho tráfico para empezar?" y "¿Trabajáis solo con la web o también con campañas?" que pedía el
brief) en vez de inventar contenido nuevo desde cero. No se ha perdido ninguna afirmación relevante — las
respuestas mantienen el mismo tono prudente (sin plazos ni porcentajes garantizados) del copy original.

## VISUAL DIRECTION: OPTION 3

- **Hero:** panel principal = navegador con una web conceptual neutra de PYME (headline, imagen, CTA,
  formulario y bloque de contenido con gráfico) — sin marca real, sin claims. Panel secundario superpuesto =
  comparación A/B (dos tarjetas "A" y "B" con headline y CTA distintos), sin ganador, sin porcentajes, sin
  uplift. 2 microcards ("Analiza y optimiza", "A/B Test"), dentro del máximo de 2–3 que pedía el brief.
  **HERO DENSITY: GOOD** — no se añadió la fila opcional de micro-benefits ("Enfoque en resultados / Para
  PYMEs / Sin tecnicismos") porque, con eyebrow + H1 + subcopy + 2 CTAs + stage visual, sumarla generaba
  ruido en vez de claridad; el propio brief autorizaba omitirla en ese caso.
- **Qué optimizamos:** 3 paneles (Formularios y contacto en azul, Experiencia de usuario en verde, Medición y
  mejora continua en peach/naranja) — colores muy suaves, sin saturar, tal como pedía el brief.
- **Proceso:** 4 pasos con microvisual propio (lupa + puntos de datos, bombilla + elementos UI, engranaje +
  bloque UI, gráfico + bucle de iteración).
- **Resultados:** 3 cards horizontales compactas con icono conceptual (contacto, reserva, rendimiento),
  mismo formato que los "Objetivos" de Campañas pero con iconografía y copy propios de conversión.
- **A/B testing:** presente en el Hero, tal como exigía el brief, con representación puramente conceptual.
- **Analytics:** presente en "Medición y mejora continua" y en el paso "Medición" del proceso, como gráfico
  de líneas + bucle, sin cifras.

## VISUAL DIFFERENTIATION

**VISIBILITY DUPLICATION: LOW** · **CAMPAIGNS DUPLICATION: LOW**

- Frente a Visibilidad (búsqueda + mapa + ficha local): esta página no usa ningún elemento de búsqueda ni de
  mapa; su Hero es una web genérica con formulario y comparación A/B.
- Frente a Campañas (laptop + anuncio + creatividad social + foto real): esta página no usa laptop ni
  anuncios ni fotografía; su lenguaje es 100% interfaz/datos (navegador, formulario, gráfico, A/B).
- Frente a `/web-para-empresas/` (construcción de la web): esta página no habla de crear una web, sino de
  optimizar el comportamiento de una que ya existe — el foco es UX/datos, no "diseño y construcción".
- Matriz de diferenciación respetada: Web=construcción, Visibilidad=búsqueda/local, Campañas=anuncios/
  audiencias, Conversión=comportamiento/UX/datos/optimización.

## ROUTES

| Elemento | Destino |
|---|---|
| Hero — "Analizar mi proyecto" | `/diagnostico/` |
| Hero — "Ver cómo funciona" | `#como-trabajamos-conversion` (scroll real confirmado) |
| Diagnóstico final — "Empezar diagnóstico" | `/diagnostico/` |

## RESPONSIVE

| Ancho | Resultado | Notas |
|---|---|---|
| 375 | PASS | Hero en orden copy→CTA→visual; pilares/resultados en 1 columna; proceso vertical |
| 430 | PASS | igual que 375 |
| 768 | PASS | pilares 2+1; proceso 2×2 |
| 1024 | PASS | pilares y proceso en su disposición desktop (proceso: 4 columnas con conectores reales) |
| 1280 | PASS | composición completa |
| 1440 | PASS | igual que 1280 |

- **Overflow horizontal:** 0px en las seis anchuras.
- **Errores de consola:** 0.
- **Bug de conectores (mismo patrón ya corregido en `/web-para-empresas/` y evitado en Visibilidad y
  Campañas):** verificado que no se repite. A 1024px, `ComoTrabajamos` es una rejilla de 4 columnas reales
  (231px cada una) con conector visible en las 3 uniones.
- **Border por defecto del proceso:** construido desde el principio con el ajuste que se aplicó a Campañas en
  su micro-polish final (`1px solid var(--io-border)` por defecto, `var(--io-action)` en hover) — verificado
  por color computado (`rgb(219, 234, 254)` en reposo).
- **Altura total de página:** 375: 5262px · 430: 5193px · 768: 4265px · 1024: 3002px · 1280/1440: 3028px —
  densidad similar a Campañas (3079px en 1280) y Visibilidad (2986px en 1280), más profunda que el hub
  `/soluciones/` (2405px), tal como pedía el brief.

## BROKEN LINKS

- **Revisados:** Hero (2 CTAs), Diagnóstico (1 CTA).
- **Rotos:** 0.
- **`href="#"`:** 0.

## TECHNICAL NOTES

- **Sin fotografía:** a diferencia de Campañas y Visibilidad (que sí preveían foto o eran 100% ilustración),
  el brief de esta página no pedía ninguna fotografía — todo el Hero es interfaz conceptual (navegador +
  comparación A/B). No se ha creado ninguna carpeta de assets fotográficos para esta página.
- **CSS heredada:** el nuevo Hero y las nuevas secciones usan prefijos de clase propios (`cvh-`, `qo-`,
  `cw-`, `rs-`, `cf-`), verificados contra `styles.css` de esta página sin ningún solapamiento. Las reglas
  antiguas (`.conversion-hero-*`, `.como-funciona-*`, `.sistema-conversion-*`, `.que-incluye-*`,
  `.donde-pierde-*`, `.por-donde-*`) y el bloque de selectores de header quedan huérfanas, documentadas como
  deuda, sin limpieza en esta ronda.
- **Tokens:** `--io-action`, `--io-action-hover`, `#F4A27C` (vía `var(--io-accent)`), `--io-bg-soft`,
  `--io-border`, `--io-radius-md`/`--io-radius-lg` en todo el código nuevo. Un verde puntual (`#34A86A`),
  usado solo en microvisuals localizados (UX, "Experiencia de usuario"), tal como autorizaba el brief. 0
  hardcodes de azul antiguo (`#3B82F6` / `rgba(59,130,246,…)`).
- **Sin datos falsos:** 0 conversion rates, uplift, tráfico, ventas, leads o dashboards con cifras en
  cualquier microvisual — todos los gráficos son formas conceptuales sin números.

## ENTREGA

```
HERO: PASS
HERO STYLE: OPTION 3
HERO DENSITY: GOOD
A/B TEST VISUAL: PASS
QUÉ OPTIMIZAMOS: PASS
FORMULARIOS: PASS
UX: PASS
MEASUREMENT: PASS
PROCESS: PASS
RESULTS: PASS
FAQ: PASS
DIAGNOSTIC: PASS
VISIBILITY DUPLICATION: LOW
CAMPAIGNS DUPLICATION: LOW
FAKE METRICS: 0
BROKEN LINKS: 0
HREF #: 0
375: PASS
430: PASS
768: PASS
1024: PASS
1280: PASS
1440: PASS
HORIZONTAL OVERFLOW: 0px
BUILD: PASS
PAGE STATUS: READY FOR VISUAL REVIEW
```

---

## FINAL VISUAL QA + FREEZE (2026-09-28)

Sin cambios de código en esta ronda — solo verificación. `pnpm build` PASS. Referencia de altura y estado
confirmados sin desviación respecto a la ronda anterior.

### Verificación del borde de "Medición y mejora continua" (Card 3)

Investigado el borde azul observado en alguna captura desktop. Confirmado que es un **artefacto de la propia
herramienta de QA**, idéntico al ya diagnosticado en `/soluciones/` (card "Google Maps"): Playwright deja un
cursor virtual en una posición fija que, tras cargar la página o hacer `scrollIntoView`, cae por casualidad
sobre esa card — un usuario real nunca posiciona el ratón así sin moverlo. Verificado paso a paso:

1. Nada más cargar, sin ninguna acción de ratón: `card3.matches(':hover')` → `true`, pero el color de borde
   computado de las 3 cards es idéntico (`rgb(219, 234, 254)` = `var(--io-border)`).
2. Al mover el ratón a una esquina neutra (`mouse.move(2, 2)`): `:hover` pasa a `false` en las 3 cards.
3. Al hacer un hover genuino sobre la card 3 (`locator.hover()`): el borde cambia correctamente a
   `rgb(51, 111, 230)` = `var(--io-action)`, confirmando que el CSS de hover funciona como se diseñó.

No se ha modificado ningún código.

| Ítem | Resultado |
|---|---|
| CARD 3 DEFAULT BORDER | SOFT (`var(--io-border)`, igual que las otras dos cards) |
| CARD 3 HOVER | PASS (`var(--io-action)`, sombra sutil, `translateY(-2px)`) |
| QA HOVER ARTIFACT | YES (cursor fantasma de Playwright, no un bug del sitio) |
| 375 / 430 / 768 / 1024 / 1280 / 1440 | PASS |
| HORIZONTAL OVERFLOW | 0px en las seis anchuras |
| CONSOLE ERRORS | 0 |
| BUILD | PASS |
| PAGE STATUS | FROZEN |

### ENTREGA

```
HERO: PASS
QUÉ OPTIMIZAMOS: PASS
CARD 3 DEFAULT BORDER: SOFT
CARD 3 HOVER: PASS
QA HOVER ARTIFACT: YES
PROCESS: PASS
RESULTS: PASS
FAQ + DIAGNOSTIC: PASS
375: PASS
768: PASS
1280: PASS
HORIZONTAL OVERFLOW: 0px
CONSOLE ERRORS: 0
BUILD: PASS
PAGE STATUS: FROZEN
```

---

## FINAL RESPONSIVE QA (2026-09-28, segunda pasada)

Sin cambios de código — solo verificación exhaustiva. `pnpm build` PASS.

**Nueva observación sobre el artefacto de QA (Card 3):** en esta pasada volvió a aparecer, esta vez como un
color intermedio (`rgb(63, 120, 232)`, entre `--io-border` y `--io-action`) en 1024/1280/1440. Investigado a
fondo: es el mismo cursor fantasma de Playwright, capturado esta vez **a mitad de transición** — mi propio
script leía el color justo después de mover el ratón a una esquina neutra, sin esperar los 200ms de la
transición CSS a que termine. Repetido el mismo chequeo con una espera de 600ms tras el movimiento del
ratón: las 3 cards muestran el mismo `rgb(219, 234, 254)` (`--io-border`), `:hover` es `false` en las tres,
no hay `:focus-within`, y `document.activeElement` es `BODY`. **QA HOVER ARTIFACT: CONFIRMED** — no hay bug
real, no se ha tocado código.

| Ancho | Resultado |
|---|---|
| 375 | PASS |
| 430 | PASS |
| 768 | PASS |
| 1024 | PASS |
| 1280 | PASS |
| 1440 | PASS |

- **HERO:** PASS — H1 sin cortes, copy legible, ambos CTA correctos, browser mockup + formulario + overlay
  A/B sin solapamientos en ninguna anchura; en mobile el orden copy → CTA → visual se mantiene.
- **QUÉ OPTIMIZAMOS:** PASS — proporciones, microvisuales, copy y borders correctos; tablet en 2+1; borde
  por defecto `var(--io-border)` en las tres cards, confirmado en reposo.
- **PROCESS:** PASS — 4 columnas en desktop (≥1024) con conectores (`display:block`), 2×2 en tablet
  (768–1023, conectores `none`), stack en mobile (conectores `none`). Sin repetición del bug de 1024.
- **RESULTS:** PASS — alturas, copy, iconos y alineación correctos; 1 columna en mobile.
- **FAQ:** PASS — accordion con `+`/`−`, `aria-expanded` alterna `true`/`false` correctamente con teclado
  (Enter), sin foco inicial artificial (`document.activeElement` es `BODY` tras cargar).
- **DIAGNOSTIC:** PASS — copy, 3 beneficios y CTA "Empezar diagnóstico" → `/diagnostico/` correctos.
- **Footer:** transición de 80px en las seis anchuras, igual que el resto del sistema; Footer global no
  tocado.
- **Enlaces:** 0 rotos, 0 `href="#"`.
- **Consola:** 0 errores, 0 warnings.

### PAGE HEIGHTS

| Ancho | Altura |
|---|---|
| 375 | 5262px |
| 430 | 5193px |
| 768 | 4265px |
| 1024 | 3002px |
| 1280 | 3028px |
| 1440 | 3028px |

Idénticas a la ronda anterior — no se ha intentado reducir artificialmente.

### ENTREGA

```
375: PASS
430: PASS
768: PASS
1024: PASS
1280: PASS
1440: PASS
HERO: PASS
QUÉ OPTIMIZAMOS: PASS
PROCESS: PASS
RESULTS: PASS
FAQ: PASS
DIAGNOSTIC: PASS
BROKEN LINKS: 0
HREF #: 0
HORIZONTAL OVERFLOW: 0px
CONSOLE ERRORS: 0
PAGE HEIGHTS:
375: 5262px
430: 5193px
768: 4265px
1024: 3002px
1280: 3028px
1440: 3028px
BUILD: PASS
PAGE STATUS: FROZEN
FINAL RESPONSIVE QA: PASS
QA HOVER ARTIFACT: CONFIRMED
```

---

## HERO — fotografía integrada como fondo (PR-CLA-IOR-001 v2.1, 2026-10-06)

Sustituye los dos microvisuales SVG del Hero (`HeroWebsiteVisual`, `HeroAbTestVisual`) por una fotografía real integrada. Revisión visual pendiente (no aprobado todavía).
Referencias: técnica de `/web-para-empresas/` (la ruta `/soluciones/web-para-empresas/` de la plantilla no existe) y geometría de `/soluciones/visibilidad/`. Ninguna se ha modificado.

### Asset
| | |
|---|---|
| Original (no modificado) | `docs/img/ads-business.webp` — 1000×667 (3:2), 62 KB _(no versionado: solo en local)_ |
| Asset definitivo | `public/assets/img/conversion/hero-conversion.webp` — copia idéntica (md5 `85b763f0…`); ya era WebP, no se recomprime ni se amplía |
| Servido | `next/image` (`fill`, `priority`, `sizes="(min-width: 1025px) 660px, 540px"`) |

### ⚠ Observaciones sobre la fotografía (decisión del usuario)
- **Es el mismo archivo que usa HOME** (`public/assets/img/home/capabilities/ads-business.webp`, md5 idéntico; foto de la capacidad "Google Ads y Meta Ads" en `TodoLoQueNecesitas.tsx`). La plantilla pide no reutilizar fotos de Web para empresas ni de Visibilidad; HOME no está prohibida, pero la misma foto aparece en dos páginas.
- **Resolución baja:** 1000 px de ancho para una capa de 655 px (≈1,5× a 1× DPR); a pantallas 2× la foto se ve algo blanda. No hay versión mayor en el proyecto.
- **Contexto:** carpintero hablando por teléfono con un portapapeles en un taller. Encaja con "contacto / revisión de resultados", aunque no muestra una web.

### Análisis de la foto (% del ancho/alto de la imagen)
- Hombre (único protagonista): cabeza x≈64–80 %, y≈6–35 %; cuerpo hasta el borde derecho (x≈94 %) y el inferior. Cara y móvil en x≈66–78 %.
- Izquierda (0–45 %): taller de madera desenfocado ⇒ zona para el fundido. Entorno suficiente (no `WIDER PHOTO REQUIRED`).

### Geometría final (desktop >1024 px, misma técnica que Visibilidad/Campañas)
- `padding: 60px 20px`, contenedor 1280 px, `align-items: start`: eyebrow a 60 px del borde. Sin `min-height` ni `height` fijos.
- Capa en el flujo de la 2ª columna: `margin-left: -50px; width: min(655px, 100% + 50px); aspect-ratio: 3/2`, desplazada `--cvh-r` (0–40 px) para conservar posición con el contenedor ampliado. Foto completa, sin `cover` ni recorte.
  Altura del hero **603 px** a ≥1280 (60 + 437 + 107 de aire inferior; el copy de 3 líneas de H1 + párrafo de 4 líneas mide 475 px, más alto que la foto). Cabeza ≈ 127 px.
- H1 estándar de 56 px: `width: calc(100% + 70px - --cvh-r)` ⇒ 3 líneas, termina a +26 px dentro de la capa a 1280 y a −1 px a 1440/1920 (en la zona más difuminada: alfa ≤ 13 %).
  Se eliminó la cesión de ancho del escenario anterior (`max(380px, 100% − 620px)`): la foto vuelve a ser una capa con ancho propio.
- **Máscaras:** horizontal `transparent 0 → #000 30 % … #000 90 % → transparent 100 %`; vertical `transparent 0 → #000 6 % … #000 86 % → transparent 100 %` (el pelo llega al 6 % de la altura).
- Sin borde, sombra de caja, radio ni fondo propio.

### Microcards
Las 2 aprobadas, sin cambios de texto ni métricas: `Analiza y optimiza` (top 7 %, left 33 %) y `A/B Test` (bottom 6 %, left 34 %), sobre la madera del fondo, a la izquierda del hombre; hermanas de las máscaras.
El visual anterior mostraba un A/B de tarjetas A y B (SVG) y un formulario; no se conserva (tapaba al protagonista); la microcard `A/B Test` mantiene la idea de prueba A/B.

### Responsive (≤1024 px = apilado aprobado, copy centrado)
Foto bajo el copy: `max-width: 540px; aspect-ratio: 6/5; object-position: 100% 50 %` (se ve del 20 % al 100 %: el hombre completo), máscara simétrica 6 %/94 %; microcards a la izquierda.
| Ancho | Hero | Capa | Cabeza ≈ |
|---|---|---|---|
| 375 | 820 px | 328×273 | 79 px |
| 430 | 954 px | 375×313 | 91 px |
| 768 | 924 px | 540×450 | 131 px |
| 1024 | 996 px | 540×450 | 131 px |
| 1280 / 1440 / 1920 | 603 px | 655×437 | 127 px |

Antes (con SVG): 833 / 868 px en 375 / 768 y 603 px a 1280. Overflow del Hero y de la página: 0 px en los 7 anchos. 0 errores de consola; 0 respuestas HTTP ≥400.

### Limitaciones
- Alturas apiladas altas (1024 → 996 px) porque la foto 6:5 va bajo un copy de 4 bloques con H1 de 2–4 líneas; Visibilidad (936) y Campañas (827) tienen el mismo patrón con menos texto.
- Capturas: `docs/analysis/screenshots/hero-photography/conversion/hero-{375,430,768,1024,1280,1440}.png`, `hero-1920-extra.png`, `before/`. _(no versionado: solo en local)_
- `HeroWebsiteVisual` y `HeroAbTestVisual` siguen exportados en `ConversionVisuals.tsx`, ya sin uso (código muerto; no se borra por el alcance "solo Hero").

### QA técnico
`pnpm build` · lockfile sin cambios · enlaces de CTAs intactos (`/diagnostico/`, `#como-trabajamos-conversion`) · Manrope real · typecheck sin errores.
