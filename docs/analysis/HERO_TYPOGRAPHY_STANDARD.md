# HERO — Estándar tipográfico y de geometría (PR-CLA-IOR-002 v1.1)

**Fecha:** 2026-10-06 · **Referencia aprobada (no modificada):** `/web-para-empresas/` (`src/app/(landings)/web-para-empresas/components/Hero.tsx`)
**Estado:** aplicado en local, pendiente de aprobación visual · **Sin commit/push/deploy**

Capturas: `docs/analysis/screenshots/hero-standard/{before,after}/<pagina>-<ancho>.png` (375, 430, 768, 1024, 1280, 1440, 1920; `before/` solo 375/768/1280/1440). _(no versionado: solo en local)_

---

## 1. Valores reales de la referencia (medidos en el navegador con Manrope cargada + CSS)

### Tipografía
| Elemento | ≥1025 px | 768 px | ≤430 px | ≤375 px |
|---|---|---|---|---|
| Familia | Manrope (`--font-manrope` vía layout de `(landings)`) | = | = | = |
| **H1** | `clamp(32px, 5.2vw, 56px)` · **800** · lh **1.2** · ls **−0.01em** · mb 24 | 39,94px / 47,9px / −0,4px | 36px, lh 1.25 (`styles.css`, `!important`) | 36px / 38,88px (lh 1.08) / −0,54px (−0,015em) · mb 16 |
| **Eyebrow** | 12px · 700 · ls 0,08em · MAYÚS · padding **8/16** · mb **24** · radius `--io-radius-md` | = | = | 11px · padding 6/12 · mb 12 |
| **Párrafo** | **18px** · lh **1.65** (29,7px) · **max-width 500px** · mb 32 | = | = | 15px · lh 1.6 (24px) · mb 16 |
| **CTA** | **16px · 600** · padding **14/32** · min-height 48 · caja **218×50** (sin borde) | = | 15px | 15px · padding 12/16 · ancho 100 % |

### Geometría
| | Valor |
|---|---|
| Sección | `padding: 60px 20px` (≥769 px) · 40px 20px (≤768) · 32px 20px (≤430) · 32px 16px (≤375) |
| Contenedor (`.hero-grid`) | **max-width 1280px**, `margin: 0 auto`, `width: 100%`; borde izquierdo del texto: **x=20 a 1280 px, x=73 a 1440 px, x=312 a 1920 px** |
| Rejilla | `1.2fr 0.8fr`, gap 50px (columnas 705/470 a 1280 y 738/492 a 1440); ≤1024 px pasa a columna flex apilada |
| Alineación vertical | contenido arriba: eyebrow a **60 px** del borde superior de la sección |
| H1 | `max-width: 100%` de la columna; saltos de línea forzados con `<br>` ("Una web preparada / para captar clientes.") ⇒ 2 líneas, **553 px** de texto |
| Párrafo | max-width **500px** (texto 471 px) |
| Altura | 594 px (60 + contenido 474 + 60) |
| Capa fotográfica | absoluta, anclada a la sección; el H1 entra ≈38 px en su fundido (alfa ≈37 %) |

---

## 2. Estándar aplicado a los Heroes interiores

Mismo sistema editorial en todos: contenedor 1280/20, padding superior 60, eyebrow/H1/párrafo/CTA de la tabla anterior (incluida la escala móvil de la referencia).
Lo que **no** se copia de la referencia (se calcula por página): el ancho real del H1, la columna editorial y la **zona segura** frente a la fotografía/escenario.

### Anchos: qué es cada cosa
1. **Columna editorial** (rejilla): sobra todo lo que no ocupa la 2ª columna (foto/escenario, que conserva su tamaño anterior).
2. **Ancho real del H1**: lo marcan las palabras (no se fuerza el nº de líneas).
3. **Párrafo**: max-width 500 px en todas las páginas.
4. **Zona segura**: hasta dónde puede llegar el H1. Calculada por página, expresada como porcentaje de fundido que el texto puede invadir (≤ ≈37–39 %, igual que la referencia) o como hueco mínimo al escenario (≥ 20 px).

| Página | Mecanismo | Fórmula (CSS) | Resultado medido (1280 / 1440) |
|---|---|---|---|
| Visibilidad (foto, fundido 30 % de 725px) | `max-width` | `calc(100% + 13px − --vh-r)` = 48 (gap) − 120 (margen neg.) + 85 (tolerancia ⇒ alfa 39 %) | H1 → x=588 / 640; solape con la foto 80 / 52 px (alfa 37 % / 24 %) |
| Campañas (foto, fundido 12 % de 655px) | `max-width` | `calc(100% + 27px − --cph-r)` = 48 − 50 + 29 (alfa ≤37 %) | H1 → x=477 / 661; separación +101 / −3 px |
| Conversión (escenario) | `width` | `calc(100% + 28px − --cvh-r)` | H1 → x=604 / 657; hueco al escenario 24 / 51 px |
| Cómo trabajamos (escenario) | `width` | `calc(100% + 28px − --cth-r)` | H1 → x=489 / 621; hueco 82 / 30 px |
| Soluciones (foto a sangre, degradado) | `max-width: 610px` | el degradado deja ≥45 % de foto desde ≈50 % del ancho (611 px a 1280, 638 px a ≥1440) | H1 → x=619 / 671, solo sobre estanterías; no toca ninguna cara |
| Quiénes somos (sin foto, centrado) | contenedor 900px | para que el H1 de 56px siga en 2 líneas (835 px) | centrado en 215→1050 / 295→1130 |

`--xx-r = clamp(0px, (100cqw − 1200px)/2, 40px)`: el contenedor pasa de 1200 a 1280 px (gana 40 px a cada lado a partir de ≈1360 px); esta variable (con `container-type: inline-size` en la rejilla) desplaza la capa/escenario hacia la izquierda esos mismos píxeles, de modo que **no se mueve ni cambia de tamaño**.

---

## 3. Auditoría: antes → después (viewport 1280 px)

| Página | Max-width contenedor | H1 | H1 ancho | Párrafo | CTA | Diferencia (antes) |
|---|---|---|---|---|---|---|
| **Referencia** | 1280 (x=20) | 56/800/1.2 | 553 (2 ln) | 18/1.65, max 500 (471) | 16/600, 218×50 | — |
| Soluciones | 1200 + 20 padding interno (x=53), pad. 72 | 48/800/1.15, max 520 → **56** | 513 → 599 (2 ln) | 17/1.6 max 460 → **18/1.65 max 500** | 15,5, pad 13/26 → **16, 218×50** | texto 33 px más a la derecha; eyebrow 7/14, mb 20; top 72 |
| Visibilidad | 1200 (x=33) | 46/800/1.18 → **56** | 466 → 568 (2 ln) | 17/1.6 max 440 → **18/1.65 max 500** | idem | contenedor 40 px más estrecho; H1 −18 % |
| Campañas | 1200 (x=33) | 46 → **56** | 540 → 457 (2 ln) | 17 max 440 → **18 max 500** | idem | idem |
| Conversión | 1200 (x=33), pad. 56, centrado vertical (eyebrow a 84 px) | 42 (clamp 28–42) → **56** | 496 → 584 (3 ln) | 16,5/1.6 max 460 → **18/1.65 max 500** | idem | H1 −25 %; alineación centrada → superior |
| Cómo trabajamos | 1200 (x=33), pad. 56, centrado vertical | 42 → **56** | 411 → 469 (2 ln) | 16,5 max 440 → **18 max 500** | idem | idem |
| Quiénes somos | 640 centrado | 40/**700**/sin ls → **56/800/−0,01em** | 597 → 835 (2 ln) | 16/1.6 max 520 → **18/1.65 max 500** | 15, pad 12/26 → **16, 218×50** | peso 700; eyebrow 6/14 mb 16; pad. 64/48 |
| Contacto | 1200 | 48/800 | 358 | — | — | **no tiene Hero equivalente** (ver §5) |

Alturas (1280 px): Referencia 594 · Soluciones 606 → **626** · Visibilidad 603 → **603** · Campañas 557 → **557** · Conversión 522 → **602** · Cómo trabajamos 465 → **506** · Quiénes somos 530 → **616**.
Eyebrow a 60 px del borde superior y en x=20 (1280) / x=73 (1440) en todas las páginas con layout de columnas.

---

## 4. Fotografías y escenarios preservados

Posición y tamaño medidos antes y después (idénticos, ±0 px):

| | 1280 px | 1440 px | 1920 px |
|---|---|---|---|
| Visibilidad (foto) | 508→1233 · 725×483 | 588→1313 | 828→1553 |
| Campañas (foto) | 578→1233 · 655×437 | 658→1313 | 898→1553 |
| Conversión (escenario) | 628→1233 · 605×410 | 708→1313 | 948→1553 |
| Cómo trabajamos (escenario) | 571→1233 · 662×295 | 651→1313 | 891→1553 |
| Soluciones (foto a sangre) | ver §5 | | |

Assets, máscaras, fundidos, microcards y su posicionamiento (%) **sin cambios**. Cómo se mantiene el tamaño: la 2ª columna sigue valiendo 605/662 px (`min(605px, (100% − 48px)·0,525)`), y la capa fotográfica pasa a tener ancho propio (`min(725px, 100% + 120px)` / `min(655px, 100% + 50px)`) en lugar de heredarlo.

---

## 5. Decisiones, excepciones y compromisos (para revisión)

1. **Corte apilado 1023 → 1024 px (Visibilidad, Campañas, Conversión, Cómo trabajamos).** La referencia ya apila a ≤1024 px. Con el H1 estándar (53 px a 1024) la columna editorial de ≈390 px dejaba H1 de 4 líneas y huecos enormes (Cómo trabajamos 719 px de alto). No es un breakpoint nuevo: se alinea con el existente de la referencia. Soluciones mantiene 1023 (su layout a sangre funciona a 1024).
2. **Banda 1025–≈1275 px en las páginas de escenario.** Para que el H1 no pase a 4 líneas, el escenario de Conversión y Cómo trabajamos cede ancho a la columna editorial solo por debajo de ≈1275 / ≈1180 px (tercer término en la rejilla: `max(380px, 100% − 620px)` / `max(400px, 100% − 500px)`). A 1025 px el escenario mide 380 / 470 px (antes 492 / 530); desde ≈1275 px vuelve a 605 / 662 px.
3. **Visibilidad: H1 con más líneas en la banda baja.** La foto no se puede reducir (restricción del brief), así que el H1 estándar de 56 px se ajusta a su zona segura: 4 líneas a 1025–1150 px, 3 líneas a 1170–1275 px, **2 líneas desde 1280 px** (medido). Es la consecuencia directa de H1 estándar + foto intacta; si se quiere evitar, habría que subir el corte apilado de esa página o reducir la capa (decisión del usuario).
4. **Soluciones: el hero crece de 606 a 626 px (+3,3 %).** El fondo es `object-fit: cover` sobre una caja con altura de contenido: las personas escalan un +3,3 % (imperceptible). Compensarlo exigiría fijar altura o cambiar el padding estándar; no se ha hecho.
5. **Quiénes somos conserva su composición centrada (sin fotografía)**, con H1/párrafo/CTA estándar. El contenedor se ensancha de 640 a 900 px para que el H1 siga en 2 líneas. Pasarla a texto a la izquierda dejaría media pantalla vacía; se deja a decisión del usuario.
6. **Contacto:** su H1 (48/800) vive en una rejilla de formulario sin eyebrow, párrafo ni CTA: no es un Hero equivalente. No se ha tocado.
7. **Eyebrow en los layouts apilados** (Visibilidad, Campañas, Conversión, Cómo trabajamos): sigue alineado a la izquierda con el resto del texto centrado (`align-self: flex-start`). Es la composición aprobada previa y el brief pide conservarla; **se recomienda centrarlo** (una línea de CSS por página) si se quiere coherencia.
8. **CTA:** padding 13/31 + borde (1–1,5 px) para igualar la caja de la referencia (218×50); un padding "14/32 + borde 1,5 px" daba 52 px de alto.
9. **Escala móvil de la referencia replicada tal cual** (36px / lh 1.25 a ≤430; lh 1.08 y ls −0,015em a ≤375). El interlineado 1.08 es muy ajustado en H1 de 3–4 líneas; es el valor aprobado en la referencia.
10. Padding de sección móvil: se usa `max-width: 768px` (no 767) para coincidir con la referencia a 768 px exactos (40 px).

## 6. Pendiente / fuera de alcance
- La referencia (`/web-para-empresas/`) tiene overflow de página a 430 px (199 px) y 1024 px (31 px) procedente de `WhatIncludes` (no es del Hero). No se ha tocado.
- Anchos >1920 px no validados.
- Tras aprobar, valorar extraer un componente compartido (no se ha creado ninguno en esta fase, como pedía el brief).

## 7. Archivos modificados
`src/app/(landings)/soluciones/components/Hero.tsx` · `…/soluciones/visibilidad/components/Hero.tsx` · `…/soluciones/campanas/components/Hero.tsx` · `…/soluciones/conversion/components/Hero.tsx` · `…/como-trabajamos/components/Hero.tsx` · `…/quienes-somos/components/Hero.tsx` · este documento · capturas. Solo CSS del bloque `<style>` de cada Hero (más el `sizes` de `next/image` en Visibilidad/Campañas); ni copy, ni assets, ni rutas, ni CSS global.
