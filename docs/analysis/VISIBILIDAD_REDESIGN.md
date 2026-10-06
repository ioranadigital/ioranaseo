# /soluciones/visibilidad/ — Rediseño (SEO + SEO Local + Google Maps)

**Fecha:** 2026-09-28 · Reemplaza la estructura anterior de 7 secciones (Hero, QueSignificaVisibilidad,
LasPalancas, QueHacemos, CasosDondeFalla, QueNecesitasMejorar, FAQAnalisis con mini-formulario) por una
página compacta de 5 secciones, con identidad propia centrada en búsqueda / mapa / ficha local.

## Estructura implementada

```
Header global
Hero (copy izq. / búsqueda+resultados+mapa+ficha der.)
Tres formas de ganar visibilidad (3 cards: SEO, SEO Local, Google Maps)
Cómo trabajamos tu visibilidad (id="como-trabajamos", 4 pasos conectados)
Más visibilidad, más oportunidades (visual izq. / 5 beneficios der.)
Preguntas frecuentes + Diagnóstico (FAQ 4 preguntas / panel sin formulario)
Footer
```

Archivos nuevos: `Hero.tsx` (reescrito), `TresFormas.tsx`, `ComoTrabajamos.tsx`, `MasOportunidades.tsx`,
`VisibilidadVisuals.tsx` (10 microvisuales SVG propios de esta página). `FAQAnalisis.tsx` se reescribió en el
mismo archivo (eliminado el mini-formulario "¿Qué necesitas?" con placeholder de pasos, mismo anti-patrón ya
retirado en HOME y en `/web-para-empresas/`). `page.tsx` actualizado para renderizar solo estas 5 secciones.

**Sin usar / no borrados** (documentados como deuda, mismo criterio que en las rondas anteriores):
`QueSignificaVisibilidad.tsx`, `LasPalancas.tsx`, `QueHacemos.tsx`, `CasosDondeFalla.tsx`,
`QueNecesitasMejorar.tsx`. Ya no los importa `page.tsx`.

## Identidad visual propia (vs. HOME y /web-para-empresas/)

- **Hero:** en vez de foto + navegador (patrón de HOME/`/web-para-empresas/`), esta página usa una interfaz
  de búsqueda con resultado tipo SERP como panel principal, y un mapa + ficha de negocio simplificada como
  panel secundario superpuesto — mismo lenguaje de composición (panel grande + panel pequeño superpuesto +
  microcards), pero sin fotografía y con un contenido totalmente distinto (búsqueda/mapa, no web/dispositivo).
- **Tarjetas del Bloque 1:** microvisual propio por tarjeta — SEO (buscador + jerarquía de contenido), SEO
  Local (pin con radio de proximidad y dos "competidores" cercanos, sin mapa literal) y Google Maps (mapa en
  cuadrícula + pin + ficha). Deliberadamente diferenciados entre sí para que "SEO Local" no sea una copia de
  "Google Maps".
- **Proceso (Bloque 2):** 4 pasos con microvisual propio cada uno (lupa sobre documento, checklist con
  engranaje, documento con líneas de contenido, línea de progreso) — distinto del pipeline de "Nuestro
  método" de `/web-para-empresas/` y del journey de HOME, aunque comparte el patrón general "tarjeta con
  número + conector" del sistema.
- **Bloque 3:** visual compuesto en disposición vertical (buscador arriba, resultado + mapa abajo),
  deliberadamente distinto de la composición horizontal del Hero para no sentirse repetido dentro de la
  misma página.
- **Sin foto:** el brief explícitamente prefería ilustración de interfaz sobre fotografía aquí ("No uses foto
  si no hace falta"), así que no se ha creado ninguna carpeta de assets fotográficos para esta página.

## QA

| Ancho | Resultado | Notas |
|---|---|---|
| 375 | PASS | 1 columna en cards y proceso; 3ª microcard del Hero oculta (ver decisiones) |
| 430 | PASS | igual que 375 |
| 768 | PASS | Bloque 1 en "2 + 1" (2 cols, Maps centrada debajo); proceso 2×2 |
| 1024 | PASS | Bloque 1 en 3 columnas; proceso en 4 columnas con conectores reales (ver bug check) |
| 1280 | PASS | composición completa |
| 1440 | PASS | igual que 1280 |

- **Overflow horizontal:** 0px en las seis anchuras.
- **Errores de consola:** 0.
- **Bug de conectores (mismo patrón que se corrigió en `/web-para-empresas/`):** verificado que NO se repite.
  A 1024px, `ComoTrabajamos` pasa a rejilla de 4 columnas reales (231px cada una) y el conector se muestra
  (`display:block` en las 3 uniones) — grid y conector coinciden, igual que en tablet (768–1023, 2×2, sin
  conector). Construido correctamente desde el principio con la convención de breakpoints del sistema
  (tablet 768–1023 / desktop ≥1024), sin necesidad de corrección posterior.
- **Scroll al CTA secundario:** "Ver cómo funciona" desplaza correctamente hasta `#como-trabajamos`
  (verificado con clic real, sección visible tras el scroll).
- **Enlaces:** CTA principal del Hero → `/diagnostico/`; CTA del panel de diagnóstico final → `/diagnostico/`;
  0 `href="#"` en toda la página.
- **Altura total de página:** 375: 4940px · 430: 4948px · 768: 4489px · 1024: 2954px · 1280/1440: 2986px.

## Decisiones visuales propias

- **Tercera microcard del Hero oculta en mobile (≤767):** con 3 chips flotantes sobre una composición ya
  apilada (panel principal + panel de mapa superpuesto) en un ancho de ~340px, mantener las 3 generaba
  amontonamiento. Mantuve las dos más específicas de "visibilidad" ("Cerca de ti", "Contenido relevante") y
  oculté la más genérica ("Más visible"). Mismo criterio ya aplicado en el Hero de HOME.
- **"SEO Local" vs. "Google Maps":** inicialmente dibujé el microvisual de SEO Local con dos círculos
  traslúcidos decorativos que no comunicaban nada con claridad (los detecté al revisar las capturas). Los
  sustituí por un pin con un radio de proximidad punteado y dos puntos cercanos — comunica "cerca de mí" sin
  duplicar el concepto de mapa literal que ya usa la tarjeta de Google Maps.
- **Preguntas de FAQ:** adapté las respuestas a partir del tono ya usado en el `FAQAnalisis.tsx` anterior de
  esta misma página (evitando inventar plazos o promesas nuevas), ajustadas a las 4 preguntas exactas que
  pedía el brief.
- **Tablet en Bloque 1:** implementé "2 + 1" (2 columnas, Google Maps centrada debajo) en vez de forzar 3
  columnas estrechas en 768–1023, tal como permitía el brief.

## Pendiente

Nada pendiente de assets — esta página no requiere fotografía. Sin incidencias abiertas propias (el problema
de `node_modules` vaciándose sigue como incidencia técnica aparte, ver
`docs/analysis/INCIDENT_node_modules_empty_2026-09-25.md`).

## ENTREGA

```
HERO: PASS
BLOCK 1: PASS
BLOCK 2: PASS
BLOCK 3: PASS
FAQ + DIAGNOSTIC PANEL: PASS
CTA LINKS: PASS
  - Hero primario → /diagnostico/
  - Hero secundario → #como-trabajamos (scroll real, verificado)
  - Diagnóstico final → /diagnostico/
RESPONSIVE: PASS (375 / 430 / 768 / 1024 / 1280 / 1440)
HORIZONTAL OVERFLOW: 0px
BUILD: PASS
```
