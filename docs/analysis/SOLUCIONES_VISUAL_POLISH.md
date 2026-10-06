# /soluciones/ — Visual Polish (Hub principal)

**Fecha:** 2026-09-28 · Dirección visual aprobada: Hero = Opción 1, tarjetas "Nuestras soluciones" = Opción 2.

## IMPLEMENTATION SUMMARY

`/soluciones/` pasa de ser una landing larga (7 secciones: Hero, PuntoDePartida, LasCuatroSoluciones,
NoSonServiciosAislados, Diagnostico, Metodo, FAQAnalisis) a un **hub compacto de 4 secciones**:

```
Header global
Hero (Opción 1: copy izq. / foto+navegador+microcards der.)
Nuestras soluciones (id="nuestras-soluciones", Opción 2: 6 tarjetas)
Cómo se conectan (4 nodos WEB→VISIBILIDAD→CAMPAÑAS→CONVERSIÓN)
¿No sabes qué necesitas? (panel de diagnóstico, sin formulario)
Footer
```

Archivos nuevos: `Hero.tsx` (reescrito completo), `NuestrasSoluciones.tsx`, `ComoSeConectan.tsx`,
`DiagnosticoClosing.tsx`, `SolutionsVisuals.tsx` (microvisuales SVG propios de esta página, sin librerías
nuevas). `page.tsx` actualizado para renderizar solo estas 4 secciones.

**Sin usar / no borrados** (fuera de alcance, documentados como deuda, igual que en `/web-para-empresas/`):
`PuntoDePartida.tsx`, `LasCuatroSoluciones.tsx`, `NoSonServiciosAislados.tsx`, `Diagnostico.tsx`,
`Metodo.tsx`, `FAQAnalisis.tsx`. Ya no los importa `page.tsx`, pero siguen en el repo por si se quiere
recuperar contenido de ellos.

## ROUTES

| Elemento | Destino | Estado |
|---|---|---|
| Hero — "Ver todas las soluciones" | `#nuestras-soluciones` | scroll real confirmado (no `href="#"`) |
| Hero — "Analizar mi proyecto" | `/diagnostico/` | sin cambios de ruta |
| Card Web para empresas | `/web-para-empresas/` | **sin cambio de URL**, como pedía el brief |
| Card SEO y SEO Local | `/soluciones/visibilidad/` | existente |
| Card Google Maps | `/soluciones/visibilidad/` | existente (no hay sublanding de Maps en el MVP) |
| Card Google Ads y Meta Ads | `/soluciones/campanas/` | existente |
| Card Analytics y medición | `/soluciones/conversion/` | existente |
| Card CRO y mejora continua | `/soluciones/conversion/` | existente |
| Nodo Web / Visibilidad / Campañas / Conversión | mismas 4 rutas de arriba | existente |
| Cierre — "Empezar diagnóstico" | `/diagnostico/` | existente |

No se ha creado ninguna sublanding nueva (`/seo/`, `/google-maps/`, `/google-ads/`, `/analytics/`, `/cro/`
etc. no existen). Dos cards (Maps y Analytics/CRO) comparten página con otra, porque el MVP real solo tiene
4 familias — es una decisión de mapeo, no un enlace roto.

## RESPONSIVE RESULT

| Ancho | Nuestras soluciones (grid) | Resultado |
|---|---|---|
| 375 | 1 columna | PASS |
| 430 | 1 columna | PASS |
| 768 | 2 columnas (verificado: `354px 354px`) | PASS |
| 1024 | 3 columnas (verificado: `312px 312px 312px`) | PASS |
| 1280 | 3 columnas | PASS |
| 1440 | 3 columnas | PASS |

- **Hero:** 2 columnas (copy / foto+navegador) desde 1024; se apila en una sola columna centrada en
  768–1023 y en mobile, tal como pedía el brief ("puede pasar a stack, no forzar composición desktop").
- **Cómo se conectan:** 4 nodos en fila desde 768px (caben con holgura, no hace falta 2×2); en mobile
  ≤767 pasa a columna única con el conector reorientado en vertical. Al no depender de un grid 2×2 en ningún
  breakpoint, **no puede reproducirse el bug de conectores de `/web-para-empresas/`** — el conector nunca
  se muestra en un layout que no sea el que realmente conecta cada par de nodos.
- **Overflow horizontal:** 0px en las seis anchuras (`scrollWidth === clientWidth`).
- **Errores de consola:** 0.

## BROKEN LINKS

- **Total de enlaces revisados:** Hero (2), 6 cards, 4 nodos del sistema conectado, cierre de diagnóstico.
- **Rotos:** 0.
- **`href="#"`:** 0 (verificado por script: `document.querySelectorAll('a[href="#"]').length === 0`).

## VISUAL DECISIONS

- **Hero (Opción 1):** copy a la izquierda (eyebrow "Soluciones", H1, subcopy, 2 CTAs, 3 micro-benefits con
  icono Lucide) y a la derecha una composición foto + mini navegador (SVG propio) + 3 microcards flotantes
  (Diseño responsive / SEO preparado / CTA claros), mismo lenguaje ya usado en HOME y en
  `/web-para-empresas/` pero con una composición propia (no es el mismo archivo ni la misma imagen).
- **Tarjetas (Opción 2):** 6 tarjetas grandes y limpias, microvisual arriba a todo el ancho sobre un fondo
  muy suave (azul, verde, peach o lavanda según la tarjeta, nunca saturado), título, copy breve de una frase
  y CTA discreto "Ver solución →". Sin icono genérico único, cada tarjeta tiene su propio microvisual SVG.
- **Cómo se conectan:** 4 nodos compactos con un punto de color (azul los tres primeros, peach el último,
  mismo código que el resto del sistema: azul = estructura, peach = acento puntual) y un conector fino entre
  ellos. Cada nodo es un enlace real a su landing — no es solo decorativo.
- **Cierre de diagnóstico:** panel `--io-bg-soft` con un degradado radial azul muy sutil, icono en círculo
  con un punto peach, título, copy y CTA azul sólido. Sin formulario, sin campos, sin wizard.
- **Sin datos falsos:** ninguna cifra, ranking, estrella, reseña ni testimonio en toda la página (auditado
  visualmente sección por sección).
- **FAQ:** eliminada de esta página (no reducida — retirada por completo), tal como permitía el brief
  ("evaluar si puede eliminarse"). El HUB no repite las preguntas de HOME ni de las sublandings, que ya
  tienen su propia FAQ.
- **Auxiliar "Ver todas las soluciones" dentro de la propia sección de tarjetas:** decidí **no** añadirlo.
  El brief lo permitía solo "si aporta navegación real", y esta sección ya muestra las 4 familias reales
  completas — un enlace "ver todas" ahí mismo no llevaría a ningún sitio nuevo.

## PHOTO STATUS

**PHOTO ASSET REQUIRED.** Ruta preparada: `public/assets/img/soluciones/hero-soluciones-business.webp`.
No existe todavía, y **no se ha reutilizado** la foto de `/web-para-empresas/` (habría creado una repetición
visual evidente entre dos páginas del mismo hub, muy próximas en la navegación). Mientras no exista el
archivo, se muestra un degradado soft blue/peach con un icono, sin romper el layout ni usar imágenes
externas — mismo patrón de fallback que las demás páginas.

## TECHNICAL NOTES

- **Altura total de página** (antes → ahora): 1280/1440: no medido en la versión de 7 secciones previa a
  esta ronda, pero la nueva versión mide 2405px (antes la página tenía Hero + 6 secciones adicionales,
  bastante más larga); 1024: 2454px; 768: 3166px; 430: 4467px; 375: 4498px. Confirma el objetivo explícito
  del brief: "NO debe ser una landing larga como Web para empresas" (que quedó en 4280px en 1280 tras su
  propio Visual Polish) — este hub es notablemente más corto.
- **CSS heredada de `styles.css`:** por la misma razón que en `/web-para-empresas/`, el nuevo Hero **no**
  reutiliza los nombres de clase antiguos (`soluciones-hero-section`, `soluciones-hero-visual`,
  `soluciones-hero-visual-inner`, `sol-hero-node`, etc.) que tenían overrides `!important` pensados para la
  composición "orbit" anterior (4 nodos en círculo) — habrían roto la nueva rejilla foto+navegador. El nuevo
  Hero usa un prefijo propio (`sh-*`) totalmente independiente. Esas reglas antiguas, junto con las de
  `PuntoDePartida`/`LasCuatroSoluciones`/`NoSonServiciosAislados`/`Diagnostico` (ya no usadas por `page.tsx`)
  y el bloque de selectores de header (`header nav`, `.desktop-nav`, etc. — mismo patrón ya documentado en
  el audit de `/web-para-empresas/`, no coincide con las clases BEM reales de `LandingsHeader`), quedan
  huérfanas en `styles.css`. No se ha hecho limpieza de ese archivo en esta ronda.
- **Tokens:** `--io-action`, `--io-action-hover`, `#F4A27C` (vía `var(--io-accent)`), `--io-bg-soft`,
  `--io-border`, `--io-radius-md`/`--io-radius-lg` usados en todo el código nuevo. 0 hardcodes de azul
  antiguo (`#3B82F6` / `rgba(59,130,246,…)`) en los archivos modificados.
- **Accesibilidad:** las 6 tarjetas y los 4 nodos son `<Link>` reales (no `<div>` con `onClick`); los CTAs
  llevan `focus-visible` con anillo de foco; ninguna tarjeta ni nodo depende de hover para funcionar en
  móvil (el hover es un extra en `@media (hover: hover)`).

## ENTREGA

```
HERO: PASS
HERO STYLE: OPTION 1
HERO PHOTO: PLACEHOLDER (asset pendiente, ver PHOTO STATUS)
SOLUTION CARDS: PASS
CARD STYLE: OPTION 2
CARDS: 6
CARD WEB: /web-para-empresas/
CARD SEO: /soluciones/visibilidad/
CARD MAPS: /soluciones/visibilidad/
CARD ADS: /soluciones/campanas/
CARD ANALYTICS: /soluciones/conversion/
CARD CRO: /soluciones/conversion/
CONNECTED SYSTEM: PASS
DIAGNOSTIC CLOSING: PASS
NEW SUBPAGES CREATED: 0
WEB PARA EMPRESAS URL: UNCHANGED
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

Sin cambios de código en esta ronda — solo verificación. `pnpm build` PASS. Referencia de altura confirmada
sin desviación respecto a la ronda anterior.

| Ancho | Resultado | Columnas Nuestras Soluciones | Altura total |
|---|---|---|---|
| 375 | PASS | 1 | 4498px |
| 430 | PASS | 1 | 4467px |
| 768 | PASS | 2 | 3166px |
| 1024 | PASS | 3 | 2454px |
| 1280 | PASS | 3 | 2405px |
| 1440 | PASS | 3 | 2405px |

- **CTA alignment:** los CTA de las 6 cards quedan dentro de los límites de su card en las seis anchuras
  (verificado por rects, sin desbordar).
- **Cómo se conectan:** los 4 nodos miden la misma altura entre sí en cada ancho (91px en fila desde 768px,
  47px apilados en mobile) — sin wrap irregular.
- **Footer transition:** 80px de hueco entre el cierre de diagnóstico y el `<footer>` en las seis anchuras,
  igual que el resto del sistema (HOME).
- **Overflow horizontal:** 0px, 0 errores de consola, en las seis anchuras.

**Falsa alarma descartada:** una captura mostró un borde azul en la card "Google Maps" en 1280 sin que
mediara ninguna interacción real. Investigado: es un artefacto del propio script de QA (Playwright deja un
cursor virtual en una coordenada fija que, tras un `scrollIntoView` programático, queda por casualidad sobre
esa card — un usuario real nunca mueve el ratón así al hacer scroll). Confirmado reproduciendo con cero
llamadas a `mouse.move`: el estado `:hover` aparece igual. No es un bug del sitio.

### ENTREGA

```
375: PASS
430: PASS
768: PASS
1024: PASS
1280: PASS
1440: PASS
CARD DENSITY: APPROPRIATE
HORIZONTAL OVERFLOW: 0px
BUILD: PASS
PAGE STATUS: FROZEN
```
