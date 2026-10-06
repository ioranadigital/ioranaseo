# /soluciones/ — "Nuestras Soluciones" — Real Photography Visual Polish

> **ROLLBACK (2026-09-29, mismo día):** el usuario pidió revertir esta ronda — `NuestrasSoluciones.tsx`
> volvió a la versión con ilustración SVG únicamente (sin foto), y los 4 `.webp` generados en
> `public/assets/img/soluciones/cards/` se eliminaron (la carpeta vuelve a tener solo `.gitkeep`). Las 4
> fotos originales siguen intactas en `E:\git\interno\ioranaseo\docs\img` por si se retoma más adelante.
> Verificado tras el rollback: 0px overflow, 0 errores de consola nuevos, `pnpm build` PASS. El resto de
> este documento describe la implementación ya revertida, como referencia histórica.

**Fecha:** 2026-09-29 · Combina **fotografía real de negocio + microvisual IORANA (UI) + icono** en las 6
cards existentes, sin reducirlas a 4 y sin tocar ninguna otra sección de la página.

## Origen de las fotos

Por instrucción explícita del usuario, las fotos NO se han descargado de stock/Google — se han tomado de
`E:\git\interno\ioranaseo\docs\img` (carpeta propia del usuario) y se han procesado con `sharp` (recorte
inteligente por atención + conversión a WebP) hacia `public/assets/img/soluciones/cards/`. Ninguna coincide
con las ya usadas en Home (`public/assets/img/home/capabilities/`) — son 4 fotos distintas, no repetidas.

| Card | Archivo | Foto origen (`docs/img`) | Peso final |
|---|---|---|---|
| Web para empresas | `web-para-empresas.webp` | `man-works-on-laptop-in-garage-with-motorcycles-...jpg` | 61.1 KB |
| SEO y SEO Local | `seo-local.webp` | `smiling-man-working-on-laptop-in-workshop-...jpg` | 70.9 KB |
| Google Maps | `google-maps.webp` | `woman-working-at-flower-shop-using-laptop-...jpg` | 68.8 KB |
| Google Ads y Meta Ads | `campanas.webp` | `smiling-woman-using-laptop-in-bright-cafe-...jpg` | 40.2 KB |
| Analytics y medición | — | **no disponible** | — |
| CRO y mejora continua | — | **no disponible** | — |

Las 4 usadas son las únicas 4 fotos que había en `docs/img` en el momento de esta ronda. Para Analytics y
CRO no existía ninguna foto adicional distinta a repartir sin repetir una de las 4 ya asignadas — siguiendo
la regla explícita de no repetir imágenes, esas 2 cards se implementaron con el fallback neutro (ver
§ FALLBACK) y se reportan como `PHOTO ASSET REQUIRED`.

## Variedad fotográfica lograda

4 entornos y personas distintas: mecánico/taller de motos (hombre, frontal, plano medio), carpintería
(hombre, perfil, plano medio), floristería (mujer, 3/4, plano medio, negocio muy reconocible visualmente) y
cafetería (mujer, frontal-cercano, plano medio-corto). Ninguna repite composición "persona de espaldas +
pantalla" — las 4 tienen cara/gesto visible y contexto de negocio real e identificable. La limitación real:
las 4 fotos disponibles comparten el elemento "portátil" (es lo que había en el lote entregado); no hay
todavía ninguna foto de "dos personas colaborando" ni de "interacción con cliente" en `docs/img` — se
reporta honestamente como variedad BUENA pero no completa frente al ideal del brief (§3), condicionada al
lote de fotos disponible hoy.

## Overlay (microvisual IORANA existente, reutilizado como badge)

Cada card reutiliza su propio SVG de `SolutionsVisuals.tsx` (`CardWebVisual`, `CardSeoVisual`, etc. —
**no se ha borrado ni creado ningún SVG nuevo**, tal como pedía §25) como una insignia flotante pequeña
(38-40% del ancho de la foto, ~20-30% del área visual) sobre la foto real, en la esquina con menos
"contenido importante" de cada foto concreta (comprobado visualmente, no solo por posición fija):

| Card | Esquina del badge | Motivo |
|---|---|---|
| Web para empresas | superior-izquierda | cara y manos quedan a la derecha/centro-abajo |
| SEO y SEO Local | superior-izquierda | perfil mirando a la derecha, manos abajo-centro |
| Google Maps | inferior-izquierda | cara arriba-izquierda, flores ocupan la derecha |
| Google Ads y Meta Ads | superior-derecha | cara centro-izquierda, manos centro-abajo |
| Analytics / CRO | — (SVG centrado, ver fallback) | sin foto |

Verificado visualmente en zoom por card: en ninguna de las 4 el badge cubre cara, gesto o manos sobre el
teclado.

## Fallback (Analytics y CRO — sin foto disponible)

Contenedor y comportamiento responsive completos, listos para recibir la foto real en cuanto exista en
`docs/img` (mismo componente `CardMedia`, misma lógica de `onError` ya usada en `TodoLoQueNecesitas.tsx` de
Home): fondo suave del tono de la card (`--io-bg-soft` / `rgba(52,168,106,.08)`) con el microvisual SVG
centrado a tamaño grande — visualmente limpio, sin aspecto de "hueco roto". En cuanto se añadan
`analytics.webp` y `conversion.webp` a `public/assets/img/soluciones/cards/`, el componente las recogerá
automáticamente sin tocar código.

## Composición foto + UI (§11)

La UI (badge) nunca se "hornea" dentro de la foto — es HTML/CSS puro (`<div>` con `box-shadow` +
`border-radius`) conteniendo el SVG existente, superpuesto con `position: absolute`. Responsive, editable,
nítido en cualquier densidad de píxel.

## Altura de imagen y densidad de sección

Se usó `aspect-ratio: 2/1` (en vez de 1.6:1 exacto) tras comprobar los anchos reales de card en este grid
concreto — a 1.6:1 la foto habría salido de 233-240px en desktop (fuera del rango pedido de 160-190px);
con 2:1 el resultado real medido es:

| Ancho | Alto de foto medido |
|---|---|
| 375 | 170.5px |
| 768 | 176px |
| 1024 | 155px |
| 1280 / 1440 | 191px |

Todos dentro (o a 5px) del rango pedido en cada tramo. La sección no ha crecido de forma apreciable
respecto a la versión anterior (SVG en caja de color) — el bloque de foto sustituye 1:1 al bloque de
ilustración anterior mediante márgenes negativos que lo llevan a sangre contra el borde de la card.

## Sin datos falsos

Verificado: 0 métricas, 0 porcentajes, 0 estrellas, 0 reseñas, 0 "#1" en ningún overlay ni foto — los SVG
reutilizados ya cumplían esto de antes (son mockups conceptuales, nunca tuvieron cifras).

## Grid y responsive

Sin cambios de arquitectura: 3×2 en 1024/1280/1440, 2 columnas en 768, 1 columna en 375/430 — igual que
antes. 0px de overflow horizontal en las 6 anchuras. 0 errores de consola nuevos (el único 404 detectado en
la página es el ya documentado y preexistente de la foto del Hero de `/soluciones/`, sin relación con esta
sección).

## No se ha tocado

Hero, "Cómo se conectan", cierre de diagnóstico, Header, Footer — verificado que ningún otro fichero fuera
de `NuestrasSoluciones.tsx` y los nuevos assets de imagen aparece en el diff de esta ronda.

## Screenshots

`docs/analysis/screenshots/soluciones-real-photography/`: `section-375.png`, `section-430.png`,
`section-768.png`, `section-1024.png`, `section-1280.png`, `section-1440.png`, más zooms individuales de
las 4 cards con foto real para verificar el encuadre.

## ENTREGA

```
SOLUTION CARDS: 6
WEB PHOTO: USED
SEO PHOTO: USED
MAPS PHOTO: USED
ADS PHOTO: USED
ANALYTICS PHOTO: REQUIRED
CRO PHOTO: REQUIRED
PHOTO VARIETY: GOOD (limitada por el lote de 4 fotos disponible hoy en docs/img; sin foto de "dos personas" o "interacción con cliente" todavía)
HUMAN PRESENCE: GOOD
OVERLAYS: PASS
FAKE METRICS: 0
FAKE REVIEWS: 0
375: PASS
768: PASS
1280: PASS
HORIZONTAL OVERFLOW: 0px
BUILD: PASS
```

## PHOTO ASSET REQUIRED

- `public/assets/img/soluciones/cards/analytics.webp` — sugerido: persona o pequeño equipo revisando
  información (no espaldas-mirando-dashboard como única composición).
- `public/assets/img/soluciones/cards/conversion.webp` — sugerido: persona hablando con cliente o
  profesional trabajando directamente con otra persona (más "interacción" que "analítica").

Añadir ambos ficheros a `docs/img` (o directamente a `public/assets/img/soluciones/cards/` ya procesados) y
avisar para que los recorte/optimice/asigne — el componente ya está listo para recogerlos sin más cambios
de código.
