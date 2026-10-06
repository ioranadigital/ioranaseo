# /soluciones/campanas/ — Visual Polish (Google Ads + Meta Ads)

**Fecha:** 2026-09-28 · Reemplaza la estructura anterior de 7 secciones (Hero, ComoFunciona,
NoSonAnunciosAislados, QueIncluye, DondeSeAtasca, PorDondeEmpezar, FAQAnalisis con mini-formulario) por una
página compacta de 5 secciones, con identidad propia centrada en anuncios, audiencias y canales.

## IMPLEMENTATION SUMMARY

```
Header global
Hero (copy izq. / laptop con anuncio + creatividad social + foto der.)
Google Ads + Meta Ads (2 paneles grandes, no 3 cards)
Cómo trabajamos tus campañas (id="como-trabajamos-campanas", 4 pasos conectados)
Soluciones según objetivo (3 cards compactas: leads, ventas, marca)
Preguntas frecuentes + Diagnóstico (FAQ 4 preguntas / panel sin formulario)
Footer
```

Archivos nuevos: `Canales.tsx`, `ComoTrabajamos.tsx`, `Objetivos.tsx`, `CampanasVisuals.tsx` (13 microvisuales
SVG propios de esta página). `Hero.tsx` y `FAQAnalisis.tsx` reescritos en el mismo archivo (eliminado el
mini-formulario "¿Qué necesitas?" con placeholder de pasos, mismo anti-patrón ya retirado en HOME,
`/web-para-empresas/` y `/soluciones/visibilidad/`). `page.tsx` actualizado.

**Sin usar / no borrados** (documentados como deuda, mismo criterio que en las rondas anteriores):
`ComoFunciona.tsx`, `NoSonAnunciosAislados.tsx`, `QueIncluye.tsx`, `DondeSeAtasca.tsx`, `PorDondeEmpezar.tsx`.
Ya no los importa `page.tsx`.

## VISUAL DIFFERENTIATION

**VISIBILITY PAGE DUPLICATION: LOW.**

- **Hero:** en vez de la interfaz de búsqueda+SERP+mapa de Visibilidad, aquí el panel principal es un laptop
  conceptual con un anuncio de búsqueda activo (recuadro "Anuncio" con borde azul, imitando un anuncio real
  sin cifras), y el panel secundario superpuesto es una creatividad social (feed conceptual con imagen,
  copy corto y CTA) en vez de un mapa. Ningún elemento reutiliza la composición de búsqueda/mapa ni la de
  navegador+responsive de `/web-para-empresas/`.
- **Bloque de canales:** **2 paneles grandes** (Google Ads / Meta Ads), no 3 cards — así se diferencia
  claramente de las "3 formas" de Visibilidad y del capability board de `/web-para-empresas/`. Google Ads usa
  tonos azules; Meta Ads usa **lavanda** (`#8B7CF6`, nuevo tono introducido solo para esta página, tal como
  permitía el brief) para reforzar que son plataformas distintas.
- **Proceso:** 4 pasos con microvisual propio (objetivo/audiencia con diana, creatividad con "más" flotante,
  barras de rendimiento con flecha ascendente, línea de resultados) — conceptualmente distinto del proceso de
  Visibilidad (análisis/optimización/contenido/seguimiento con lupa, checklist, documento, línea) aunque
  comparte el patrón "tarjeta con número + conector" del sistema.
- **Objetivos:** 3 iconos compactos (carpeta+check para leads, carrito+calendario para ventas, red de
  personas para marca) en cards horizontales pequeñas — formato distinto de las cards verticales de
  Visibilidad.
- **Personalidad general:** más dinámica y orientada a activación/alcance (fondos con lavanda puntual, laptop
  + redes sociales), frente al tono de descubrimiento/presencia local de Visibilidad.

## ROUTES

| Elemento | Destino |
|---|---|
| Hero — "Analizar mi proyecto" | `/diagnostico/` |
| Hero — "Ver cómo funciona" | `#como-trabajamos-campanas` (scroll real confirmado) |
| Diagnóstico final — "Empezar diagnóstico" | `/diagnostico/` |

No se ha creado ninguna sublanding nueva (`/google-ads/`, `/meta-ads/`, `/instagram-ads/`, `/facebook-ads/`
no existen).

## RESPONSIVE

| Ancho | Resultado | Notas |
|---|---|---|
| 375 | PASS | Google Ads / Meta Ads en stack; proceso vertical; objetivos 1 columna; 3ª microcard del Hero oculta |
| 430 | PASS | igual que 375 |
| 768 | PASS | proceso en 2×2 |
| 1024 | PASS | proceso en 4 columnas con conectores reales (verificado, ver nota de bug) |
| 1280 | PASS | composición completa |
| 1440 | PASS | igual que 1280 |

- **Overflow horizontal:** 0px en las seis anchuras.
- **Errores de consola:** 0.
- **Bug de conectores (patrón ya corregido en `/web-para-empresas/` y ya evitado en Visibilidad):**
  verificado que no se repite. A 1024px, `ComoTrabajamos` pasa a rejilla de 4 columnas reales (231px cada
  una) y el conector se muestra en las 3 uniones — construido desde el principio con la convención de
  breakpoints del sistema (tablet 768–1023 / desktop ≥1024).
- **Altura total de página:** 375: 4598px · 430: 4533px · 768: 3780px · 1024: 3037px · 1280/1440: 3079px —
  más profunda que `/soluciones/` (2405px en 1280, que es un hub) pero muy por debajo de `/web-para-empresas/`
  (4280px en 1280), tal como pedía el brief.

## BROKEN LINKS

- **Revisados:** Hero (2 CTAs), Diagnóstico (1 CTA).
- **Rotos:** 0.
- **`href="#"`:** 0.

## PHOTO STATUS

**PHOTO ASSET REQUIRED.** Ruta preparada: `public/assets/img/campanas/hero-campanas-business.webp`. No
existe todavía. Mientras tanto se muestra un pequeño badge circular con degradado azul/lavanda y un icono,
integrado como una insignia junto al laptop (no como un recuadro grande que tape la interfaz de anuncios).
No se ha reutilizado ninguna foto de HOME, `/web-para-empresas/` ni `/soluciones/visibilidad/`.

## TECHNICAL NOTES

- **Decisión de composición tomada durante la QA:** mi primer intento colocaba la foto como un cuadrado
  grande (40% del ancho) superpuesto directamente sobre el centro de la pantalla del laptop, tapando gran
  parte del anuncio. Lo detecté al revisar la captura y lo sustituí por una insignia circular más pequeña
  (27%, con borde blanco), anclada en el hueco vacío bajo el laptop — mantiene la fotografía integrada con la
  interfaz sin ocultar contenido.
- **CSS heredada:** el nuevo Hero y las nuevas secciones usan prefijos de clase propios (`cph-`, `ch-`,
  `cw-`, `ob-`, `cf-`), verificados contra `styles.css` de esta página sin ningún solapamiento — evita el
  mismo tipo de interferencia de reglas `!important` heredadas que se corrigió en `/web-para-empresas/`. Las
  reglas antiguas (`.campanas-hero-*`, `.como-funciona-*`, `.no-anuncios-*`, `.que-incluye-*`,
  `.donde-atasca-*`, `.por-donde-*`) y el bloque de selectores de header quedan huérfanas, documentadas como
  deuda, sin limpieza en esta ronda.
- **Tokens:** `--io-action`, `--io-action-hover`, `#F4A27C` (vía `var(--io-accent)`), `--io-bg-soft`,
  `--io-border`, `--io-radius-md`/`--io-radius-lg` en todo el código nuevo. Un tono adicional, lavanda
  (`#8B7CF6`), introducido puntualmente solo para Meta Ads, tal como autorizaba el brief. 0 hardcodes de azul
  antiguo (`#3B82F6` / `rgba(59,130,246,…)`).
- **Sin métricas ni logos oficiales:** ningún ROAS, CTR, +X%, número de clientes ni resultado de campaña
  ficticio en ningún microvisual; Instagram/Facebook representados de forma conceptual (lucide-react no
  incluye iconos de marca en esta versión, y el brief pedía no descargar logos sin control).

## ENTREGA

```
HERO: PASS
HERO VISUAL: CAMPAIGNS-SPECIFIC
GOOGLE ADS: PASS
META ADS: PASS
PROCESS: PASS
OBJECTIVES: PASS
FAQ: PASS
DIAGNOSTIC: PASS
VISIBILITY PAGE DUPLICATION: LOW
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

## FINAL VISUAL MICRO-POLISH + FREEZE (2026-09-28)

Microajuste único: el borde por defecto de las 4 cards de "De la estrategia a los resultados" pasó de
`1.5px solid var(--io-action)` (protagonista, efecto wireframe) a `1px solid var(--io-border)` (suave, en
línea con el resto del sistema). En hover, el borde pasa a `var(--io-action)`, con sombra sutil y
`translateY(-2px)`, transición `200ms` (dentro del rango 180–220ms pedido). Estructura, numeración,
conectores y microvisuales sin cambios — solo la propiedad `border` del estado por defecto y el `transition`
del estado hover.

| Ítem | Resultado |
|---|---|
| PROCESS DEFAULT BORDER | SOFTENED (`var(--io-border)`, verificado por color computado: `rgb(219, 234, 254)`) |
| PROCESS HOVER | PASS (`var(--io-action)`, `rgb(51, 111, 230)`, sombra + `translateY(-2px)`) |
| 375 / 430 / 768 / 1024 / 1280 / 1440 | PASS |
| HORIZONTAL OVERFLOW | 0px en las seis anchuras |
| BUILD | PASS |
| PAGE STATUS | FROZEN |

### ENTREGA

```
PROCESS DEFAULT BORDER: PASS
PROCESS HOVER: PASS
375: PASS
768: PASS
1280: PASS
HORIZONTAL OVERFLOW: 0px
BUILD: PASS
PAGE STATUS: FROZEN
```

---

## HERO — fotografía integrada como fondo (PR-CLA-IOR-001 v2.1, 2026-10-06)

**Sustituye la sección "PHOTO STATUS" anterior** (PHOTO ASSET REQUIRED + insignia circular): ya hay fotografía facilitada por el usuario.
También elimina el 404 de `/assets/img/campanas/hero-campanas-business.webp`, que nunca existió. Revisión visual pendiente (no aprobado todavía).

**Referencias:** técnica de `/web-para-empresas/` (capa + máscaras + microcards fuera de las máscaras) y geometría de `/soluciones/visibilidad/` (altura natural, alineación superior). Ninguna de las dos se ha modificado.

### Asset
| | |
|---|---|
| Original (no modificado) | `docs/img/cheerful-women-discuss-business-with-laptop-indoor-2026-09-24-14-10-13-utc.JPG` — 4603×3066 (3:2), 4,39 MB _(no versionado: solo en local)_ |
| Asset definitivo | `public/assets/img/campanas/hero-campanas.webp` — 1600×1066, 203 KB, WebP q0.82 (canvas de Chromium; sin sharp/cwebp) |
| Servido | `next/image` (`fill`, `priority`, `sizes="(min-width: 1024px) 660px, 540px"`) |
| Origen | fotografía facilitada por el usuario (stock ya presente en `docs/img/`); no se descargó ni generó nada; no es ninguna de las fotos de Web para empresas ni Visibilidad |

### Análisis de la foto (% del ancho/alto de la imagen)
- Mujer izquierda (delantal a rayas, gesticulando): cara x≈16–29 %, cabeza y≈10–34 %; cuerpo hasta x≈45 %.
- Mujer derecha (sentada, escribiendo en una libreta): cara x≈67–78 %, cabeza y≈28–57 %.
- Portátil en el centro (x≈35–58 %, y≈55–81 %), pantalla en blanco. Entorno: estantería con cerámica, ventana con plantas, mesa de taller ⇒ suficiente (no `WIDER PHOTO REQUIRED`).
- Las dos personas ocupan casi todo el ancho (6–95 %) ⇒ el fundido izquierdo debe ser corto (0→12 %) para no tocar a la mujer de la izquierda.
- Contexto de negocio pequeño/artesanal; encaja con "Genera demanda para tu negocio".

### Geometría final (desktop ≥1024px, misma técnica que Visibilidad)
- `padding-top/bottom: 60px` y `.cph-grid { align-items: start }`: eyebrow a 60 px del borde. Sin `min-height` ni `height` fijos.
- Capa en el flujo de la 2ª columna: `position: relative; margin-left: -50px; aspect-ratio: 3 / 2` ⇒ foto completa, sin `cover` ni recorte. La altura del hero resulta de ella: **557 px** a ≥1280 (60 + 437 + 60).
  Capa 655×437 (≈ columna + 50 px); cabezas ≈ 118 px (Visibilidad ≈ 106 px; referencia ≈ 124–139 px) ⇒ escala moderada.
  Separación H1 → capa: +5 px (sin solape; con −75 px la "tu" del H1 entraba 20 px en el fundido).
- **Máscaras:** horizontal `transparent 0 → #000 12 % … #000 90 % → transparent 100 %`; vertical `transparent 0 → #000 7 % … #000 86 % → transparent 100 %`
  (rampa superior corta porque el pelo de la mujer izquierda llega al 9 % de la altura).
- Sin borde, sombra de caja, radio ni fondo propio.

### Microcards
Solo las 3 aprobadas, sin cambios de texto: `Audiencias precisas`, `Nuevas audiencias`, `Más demanda` (audiencias / demanda; sin porcentajes, ROAS, CTR ni resultados).
Posiciones en % de la capa, medidas sobre zonas libres: `Más demanda` top 5 % left 37 % (pared entre las personas); `Nuevas audiencias` top 6 % right 4 % (ventana);
`Audiencias precisas` bottom 6 % left 40 % (mesa bajo el portátil). Son hermanas de las máscaras (no se difuminan). ≤1023 px se oculta `Más demanda` (decorativa).

### Microvisuales anteriores
`HeroAdsLaptopVisual` (laptop con un anuncio) y `HeroSocialCardVisual` (tarjeta social) **ya no se usan en el Hero**: son wireframes abstractos con la única palabra "Anuncio", tapaban a las personas y no aportan más información que las microcards.
Siguen exportados en `CampanasVisuals.tsx`, que no se ha tocado; comprobado con grep que ahora no los importa ningún otro componente (código muerto, no se ha borrado por el alcance "solo Hero").

### Responsive (≤1023px = layout apilado aprobado, copy centrado)
Foto bajo el copy: `margin: -24px auto 0; max-width: 540px; aspect-ratio: 4/3; object-position: 40% 50%` (se ve del ≈4 % al ≈93 %: ambas caras completas), máscara horizontal simétrica 6 %/94 %.
| Ancho | Hero | Capa | Cabeza ≈ | Resultado |
|---|---|---|---|---|
| 375 | 697 px | 328×246 | 66 px | PASS |
| 430 | 711 px | 383×287 | 78 px | PASS |
| 768 | 758 px | 540×405 | 109 px | PASS |
| 1024 | 476 px | 534×356 (gap +67 px al H1) | 96 px | PASS |
| 1280 / 1440 / 1920 | 557 px | 655×437 | 118 px | PASS |

Hero antes (sin foto): 532 px con el eyebrow a 111 px (contenido centrado) a ≥1280 y stage de 420 px.
Overflow: 0 elementos del Hero y 0 px de página en 375/430/768/1024/1280/1440/1920.

### Limitaciones / observaciones
- A 1024 px las dos microcards superiores quedan casi contiguas (7 px entre ellas), sin tapar rostros.
- A la izquierda, bajo el bloque editorial (310 px de alto), queda espacio negativo junto a la parte baja de la foto: consecuencia deliberada de la alineación superior (igual que en Visibilidad).
- Capturas: `docs/analysis/screenshots/hero-photography/campanas/hero-{375,430,768,1024,1280,1440}.png`, `hero-1920-extra.png`, `before/` y `comparison/`. _(no versionado: solo en local)_

### QA técnico
`pnpm build` · 0 errores de consola · 0 respuestas HTTP ≥400 (incluido el 404 antiguo, ya inexistente) · Manrope real · enlaces de los CTAs sin cambios (`/diagnostico/`, `#como-trabajamos-campanas`) · typecheck sin errores.
