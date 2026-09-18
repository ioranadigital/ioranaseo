# Auditoría de Visual Polish — /soluciones/

**Fecha:** 2026-09-18
**Alcance:** Auditoría analítica únicamente. Ningún archivo de código fue modificado.
**Referencia de comparación:** Hero de HOME (`src/app/(landings)/home/components/Hero.tsx`), congelado — no auditado en detalle, solo usado como vara de medir.
**Fuera de alcance:** subpáginas `/soluciones/visibilidad`, `/soluciones/campanas`, `/soluciones/conversion` (mencionadas solo cuando aportan contexto de consistencia).

---

## 0. Arquitectura actual (confirmada, no tocar)

`src/app/(landings)/soluciones/page.tsx` renderiza, en este orden:

```
SolucionesLayoutClient (Header + Footer globales)
  Hero
  PuntoDePartida        — "Cada negocio tiene un punto de partida diferente"
  LasCuatroSoluciones   — Web / Visibilidad / Campañas / Conversión
  NoSonServiciosAislados
  Diagnostico           — "¿Por dónde debería empezar?"
  Metodo                — "Trabajamos desde el problema, no desde el servicio"
  FAQAnalisis
```

Coincide exactamente con la arquitectura aprobada en el brief. No se propone eliminar, fusionar ni reordenar ninguna sección.

---

## 1. Auditoría del Hero

**Archivo:** `src/app/(landings)/soluciones/components/Hero.tsx`

**Layout:** centrado y simétrico — texto arriba (`maxWidth:780px`, `textAlign:center`), visual debajo (`maxWidth:760px`, centrado). Esto es estructuralmente **opuesto** al Hero de HOME (columnas 46/54 lado a lado). No se propone cambiar este layout centrado — es coherente con que `/soluciones` es una página de "índice" de 4 capacidades, no una landing de conversión directa de un solo producto.

**Qué hay en el visual ahora mismo ("Visual Ecosystem"):**
- Contenedor: `background:white`, `border:1px solid var(--io-border)`, `border-radius:var(--io-radius-lg)`, `min-height:340px`, sin gradientes ni halos (fondo de la sección es `var(--io-bg)` plano).
- 3 líneas SVG discontinuas (`stroke-dasharray`) que conectan un nodo central con 3 nodos periféricos.
- **Nodo central "Web":** caja blanca 128×148px, borde `3px solid var(--io-text)`, `border-radius:8px`, contiene barras wireframe genéricas (ninguna foto, ningún contenido real) + label "Web" debajo.
- **Badge "Visibilidad"** (arriba-izq.): píldora blanca 104×40px, icono `Search` (Lucide, 13px) + barra gris.
- **Badge "Campañas"** (arriba-der.): caja azul sólida 92×48px, icono `Megaphone` (11px) + texto "Ad" + barra blanca translúcida.
- **Badge "Conversión"** (abajo-centro): caja blanca 108×46px, 3 barras de altura creciente (colores border/action/**accent**) + icono `TrendingUp` (16px).
- Microanotación peach: `✦ Trabajan juntas` (11px, `var(--io-accent)`, bold), esquina inferior derecha.

**Comparación con HOME:** WEAKER. HOME usa una fotografía real (mujer en su tienda) dentro de un portátil+móvil realistas, con halos de fondo (radial-gradient azul+peach) y microcards con mini-gráficos reales (mapa, barras+línea, sparkline). El Hero de `/soluciones` es enteramente **wireframe abstracto** — ninguna pieza sugiere "negocio real", el fondo es plano, y usa iconos Lucide donde HOME ya eliminó los iconos de sus microcards en rondas posteriores (ver §9).

**¿Se beneficiaría de mockup central / microcards / conectores / mini-previews?** Ya tiene conectores (líneas SVG) y un embrión de "microcards" (los 3 badges) — el concepto de composición ya está bien encaminado. Lo que falta no es estructura sino **densidad visual y calidez**: los badges son geometría plana sin un mini-recurso reconocible (un mini-mapa real, una mini-gráfica con trazo, un mini-resultado de búsqueda), y el nodo central "Web" es un wireframe sin ninguna referencia a una web real (ni siquiera abstracta, como si fuera una tarjeta). No se recomienda convertir el Hero en "un portátil como protagonista" (eso repetiría literalmente HOME y confundiría el mensaje: `/soluciones` no vende "una web", vende "4 piezas conectadas").

---

## 2. Visual Storytelling — identidad propia, no copia de HOME

El mensaje de HOME es *"esto es una web real funcionando"* → un solo dispositivo protagonista tiene sentido ahí.
El mensaje de `/soluciones` es *"4 piezas trabajan juntas"* → el protagonista debería ser la **relación entre 4 nodos**, no un dispositivo. El Hero actual ya intuye esto (nodo central + 3 periféricos conectados), lo cual es la dirección correcta y **no debe sustituirse por un mockup de portátil**.

Lenguaje visual recomendado para `/soluciones` (paralelo al de HOME, pero con identidad propia):
- **Mantener:** composición de nodos + conectores (ya existe).
- **Tomar de HOME:** el criterio de "cada pieza lleva un mini-recurso reconocible, nunca un icono desnudo" — es decir, aplicar la misma filosofía de las microcards de HOME (mini-mapa, mini-gráfico, mini-interfaz) a los 3-4 nodos de `/soluciones`, en vez de iconos Lucide sueltos.
- **Tomar de HOME:** halos de fondo sutiles (radial-gradient azul+peach) en vez de fondo plano.
- **No tomar de HOME:** la fotografía real, el dispositivo portátil/móvil, la nota manuscrita — esos elementos pertenecen específicamente a la narrativa "esto es tu web" de HOME.
- **Elemento diferenciador propio:** el flujo/red de 4 nodos conectados (Web → Visibilidad → Campañas → Conversión) es una identidad visual que HOME no tiene y que `/soluciones` ya posee en germen (aquí y en `NoSonServiciosAislados`) — es el activo visual más distintivo de esta página y merece ser el hilo conductor, repetido consistentemente en Hero y en `NoSonServiciosAislados` con el mismo lenguaje de mini-recursos.

---

## 3. Concepto de página: "no son 4 servicios, son 4 capacidades conectadas"

Estado actual de esta comunicación visual:

- **Hero:** SÍ hay conectores (líneas SVG discontinuas), pero solo 3 de las 4 piezas están representadas como nodos periféricos (Visibilidad, Campañas, Conversión) — "Web" es el nodo central, no periférico, lo que visualmente la trata como "la base" más que como "una capacidad igual a las demás". Es una decisión defendible (Web es literalmente la base sobre la que actúan las demás) pero vale la pena confirmar que es intencional.
- **`NoSonServiciosAislados`:** SÍ hay un flujo lineal explícito con las 4 piezas + `ArrowRight` entre cada una + una capa transversal "Medición" en peach debajo. Esta es, hoy, la sección que **mejor** comunica el concepto — ya se siente como sistema, no como lista.
- **`LasCuatroSoluciones`:** NO hay conectores; es una grid 2×2 de cards independientes sin ninguna señal visual de relación entre ellas. Aquí SÍ se siente como "4 servicios separados" pese a que el copy debajo del título dice lo contrario ("conectamos el resto cuando es necesario").

**Conclusión:** el concepto ya está bien resuelto en 2 de 3 secciones relevantes; el eslabón débil es `LasCuatroSoluciones`, que es puramente una grid de cards sin lenguaje de sistema.

---

## 4. Auditoría de las 4 solution cards

**Archivo:** `src/app/(landings)/soluciones/components/LasCuatroSoluciones.tsx`

| Aspecto | Estado actual | Veredicto |
|---|---|---|
| Iconos | Lucide (`Monitor`, `Search`, `Megaphone`, `Target`), 26px, dentro de círculo 52px `border-radius:var(--io-radius-md)` | KEEP (tamaño y librería coherentes con el resto del sitio) |
| Tamaño de card | `padding:44px 40px`, sin altura fija (`display:flex; flexDirection:column`) | KEEP |
| Fondo | Alterna `white` / `var(--io-bg-soft)` entre las 4 cards | KEEP (crea ritmo visual sin necesitar más elementos) |
| Border | `1.5px solid var(--io-border)`, `border-radius:var(--io-radius-lg)` | KEEP |
| Spacing | `gap:18px` interno, `gap:28px` entre cards | KEEP |
| Jerarquía | Eyebrow numerado ("01 — WEB") + icono + título 22px + copy + 5 bullets + link CTA con flecha | KEEP (clara y legible) |
| Relación visual entre las 4 | Ninguna — grid 2×2 sin conectores ni indicación de sistema | **REFINE** (ver §3) |
| Riqueza visual / storytelling | Solo icono + texto, sin ningún mini-recurso gráfico | **ENRICH** |
| Responsive | 2 columnas → 1 columna en `max-width:767px` (`.cuatro-soluciones-grid`); padding de card se reduce en 430px | KEEP (colapso estándar, sin problemas detectados) |

**Resumen:** la estructura y jerarquía ya están al nivel de HOME (limpias, bien espaciadas). Lo que falta es exclusivamente riqueza visual — son las cards con menos "personalidad" de toda la página.

---

## 5. Microelementos posibles por capacidad (propuesta conceptual — sin implementar)

Regla dura confirmada: **ningún dato ficticio** (`+42%`, ROI, nº de leads inventado, ratings) — igual que se corrigió en HOME, donde las microcards muestran gráficos/mapas abstractos pero nunca una cifra inventada.

| Capacidad | Micro-recurso propuesto | Ejemplo concreto (abstracto, sin datos falsos) |
|---|---|---|
| **Web** | Mini navegador / mini dispositivo | Un rectángulo con barra de navegador (3 puntos) + 1-2 bloques de contenido abstractos — igual que el nodo central actual, pero más pulido, sin necesidad de foto real (eso es exclusivo de HOME) |
| **Visibilidad** | Mini buscador / mini resultado / mini Maps | Barra de búsqueda con lupa + 1 resultado simulado, o un mini-mapa con calles + pin (reutilizando el lenguaje ya validado en las microcards de HOME) |
| **Campañas** | Mini gráfico / mini anuncio | Barras ascendentes + línea de tendencia (igual que la Campaign card de HOME), o una mini tarjeta de "anuncio" con badge "Ad" (ya existe embrionariamente en el Hero actual) |
| **Conversión** | Mini formulario / mini funnel / mini analytics | Un embudo simple de 3 franjas decrecientes, o un mini formulario con 2 campos + botón, o un sparkline (igual que la Data card de HOME) |

Todos estos recursos son **decorativos y abstractos**, coherentes con cómo HOME ya resolvió el mismo problema sin inventar métricas.

---

## 6. Peach (`#F4A27C`) — uso actual y oportunidades

**Uso actual en `/soluciones` (root, sin subpáginas):**
1. Hero: micro-anotación `✦ Trabajan juntas` (texto, 11px).
2. Hero: una de las 3 barras del badge "Conversión" usa `var(--io-accent)`.
3. `PuntoDePartida`: el label de la solución (`→ Web`, `→ Visibilidad`...) usa `var(--io-accent)` como color de texto.
4. `NoSonServiciosAislados`: micro-anotación `✦ Medición — capa transversal`.

Es decir, **ya existe** el patrón "peach = anotación/señal puntual, nunca fondo de acción" — exactamente la regla que pide el brief. No se detecta ningún uso indebido (ni como fondo de CTA ni de forma masiva).

**Oportunidades adicionales (contenidas, no masivas):**
- Un pequeño subrayado peach bajo los números "01/02/03/04" de `PuntoDePartida`, ecoando el subrayado de la nota manuscrita de HOME.
- Un punto/indicador peach discreto en el nodo central del Hero o en `NoSonServiciosAislados`, marcando la capa de "Medición" como conector visual (hoy es solo texto).
- Mantener el peach fuera de los CTAs — no hay ningún hallazgo que lo contradiga hoy.

---

## 7. Botones — verificación (sin hallazgos)

Se confirmó en `Hero.tsx`:
```
Analizar mi proyecto
```
sin flecha, `backgroundColor:var(--io-action)`, `color:white`, `padding:'14px 32px'`, con `onMouseEnter/onMouseLeave` hacia `var(--io-action-hover)`. Coincide exactamente con el sistema global congelado.

El resto de CTAs de la página (`LasCuatroSoluciones`, `Diagnostico`, `PuntoDePartida`) son enlaces "ver más" con copy distinto ("Ver Web de Captación →", "→ Web", etc.) — mantienen su flecha correctamente, ya que la regla de "sin flecha" aplica solo al CTA exacto "Analizar mi proyecto".

**No hay ningún bug visual de botones que reportar.** No se propone ningún cambio en esta área.

---

## 8. Responsive (375 / 430 / 768 / 1024 / 1280 / 1440)

Basado en `src/app/(landings)/soluciones/styles.css` y los `<style>` internos de cada componente.

| Sección | Desktop (1280+) | Tablet (768-1024) | Mobile (≤430/375) |
|---|---|---|---|
| Hero visual | Composición completa a tamaño real | `.soluciones-hero-visual-inner { transform: scale(0.85) }` (768px) | `scale(0.68)` (430px), `scale(0.62)` (375px) |
| Punto de partida | Grid 4 columnas | Grid 2 columnas (1024px) | Grid 1 columna (767px) |
| 4 soluciones | Grid 2 columnas | Grid 2 columnas (1023px) | Grid 1 columna (767px) |
| No son servicios aislados | 3 ideas en fila, nodos en fila | 3 ideas en fila hasta 1023px, luego 1 columna | Nodos en columna con flecha rotada 90° (430px) |
| Diagnostico | Grid 2×2 | Grid 2×2 hasta 767px | Grid 1 columna, featured banner en columna |
| Método | Grid 4 columnas + línea conectora | Grid 2 columnas (1024px), conector oculto | Grid 1 columna (767px) |
| FAQ + Análisis | 2 columnas | 1 columna (1023px) | 1 columna |

**Filosofía "Desktop completo / Tablet simplifica / Mobile esencial":** se cumple en general para las secciones de grid (colapsos de 4→2→1 o 3→1 columnas, estándar y sin sobresaltos).

**Hallazgo — riesgo de legibilidad (no de overflow):** el Hero usa `transform:scale()` para encoger TODA la composición como bloque en vez de reestructurarla por breakpoint. A 375px (`scale(0.62)`), un badge que ya tiene texto de 9-13px queda visualmente equivalente a ~6-8px — al límite de la legibilidad. No es un problema de overflow (el `scale` no cambia el flujo de layout, solo la representación visual, y los `min-height` del contenedor ya se reducen en paralelo: 340→280→240→220px), pero si se enriquecen los nodos con más detalle (§1, §5), este enfoque de "encoger todo por igual" dejará de ser viable — en ese caso la solución correcta sería reestructurar el Hero mobile (por ejemplo, apilar los nodos verticalmente a tamaño legible) en vez de seguir escalando uniformemente. Se señala como riesgo a resolver **si** se implementa la mejora #1, no como bug a corregir ahora.

**Hallazgo menor (no visual, no prioritario):** `soluciones/styles.css` contiene selectores genéricos `header nav` / `header button` (líneas 4-49) que datan de antes de que `LandingsHeader.tsx` tuviera su propio `<style>` scoped (`.landings-header__nav-desktop` / `.landings-header__hamburger`, breakpoint 1024px). Es el mismo patrón de reglas potencialmente redundantes que ya se encontró y limpió en `home/styles.css` en una ronda anterior. No se toca aquí — está fuera del alcance de "visual polish" y no es visible para el usuario (el header ya funciona correctamente vía sus propias reglas internas), pero queda anotado para una futura pasada de limpieza técnica.

**No se propone `overflow-x:hidden` en ningún caso** — no se detectó riesgo real de overflow horizontal, solo el riesgo de legibilidad ya descrito, cuya solución (si aplica) es estructural.

---

## 9. Consistencia con HOME

| Dimensión | Veredicto | Justificación |
|---|---|---|
| Hero | **WEAKER** | Sin foto, sin dispositivo realista, fondo plano sin halos, wireframe genérico en vez de contenido reconocible. |
| Microvisuals | **WEAKER** | Los 3 badges del Hero son geometría plana; ningún mini-mapa, mini-gráfico con trazo real ni mini-interfaz reconocible como los de HOME. |
| Cards (4 soluciones) | **INCONSISTENT** | Estructuralmente al mismo nivel o más ricas en información (bullets, copy, CTA propio) que las capabilities de HOME, pero sin ningún recurso visual — mezcla señales de nivel distinto dentro de la misma página. |
| Backgrounds | **SAME LEVEL** | Uso correcto y consistente de `var(--io-bg)` / `var(--io-bg-soft)` / `white`, igual que HOME. |
| Iconography | **INCONSISTENT** | HOME eliminó los iconos de sus microcards en una ronda posterior de pulido; `/soluciones` todavía usa iconos Lucide en Hero, `PuntoDePartida`, `NoSonServiciosAislados` y `Diagnostico`. No es un error — esa decisión de HOME fue específica a sus microcards — pero crea una diferencia de lenguaje perceptible si se navega de una página a otra. |
| Spacing | **SAME LEVEL** | Ritmo de padding/gap comparable. |
| Branding (peach) | **SAME LEVEL** | Mismo patrón "acento puntual, nunca fondo de CTA" ya presente correctamente. |
| Visual personality | **WEAKER** | HOME se percibe "viva" (foto real, dispositivos creíbles); `/soluciones` se percibe como diagrama/wireframe — funcional pero frío. |

---

## 10. Top 5 mejoras priorizadas

### 1. Enriquecer el Hero con micro-recursos reales por nodo + halos de fondo — **HIGH VISUAL IMPACT**
- **CURRENT STATE:** nodo central wireframe + 3 badges geométricos sin contenido reconocible; fondo plano `var(--io-bg)`.
- **PROBLEM:** es el primer elemento visual de la página y el que más se aleja del nivel de HOME.
- **PROPOSAL (conceptual):** mantener la composición de nodos + conectores (es el activo correcto), pero sustituir los badges/nodo central por micro-recursos reconocibles (mini-buscador, mini-gráfico, mini-funnel — ver §5) y añadir halos radiales sutiles azul+peach al fondo de la sección, igual que HOME.
- **IMPACT:** alto — cierra la mayor brecha detectada.
- **RISK:** medio — no debe convertirse en "un portátil protagonista" (contradiría el mensaje de la página); debe seguir sin métricas inventadas.
- **FILES AFFECTED:** `soluciones/components/Hero.tsx`, `soluciones/styles.css`.
- **RESPONSIVE IMPACT:** el `transform:scale()` actual dejará de ser viable con nodos más ricos en detalle; probablemente requiera apilamiento vertical real en mobile en vez de escalado uniforme.
- **RECOMMENDED.**

### 2. Añadir un micro-recurso visual a cada una de las 4 solution cards — **MEDIUM**
- **CURRENT STATE:** icono + título + copy + bullets + link, sin ningún elemento gráfico.
- **PROBLEM:** son las cards con menos personalidad visual de la página.
- **PROPOSAL:** un mini-recurso pequeño por card (reutilizando el mismo lenguaje del punto 1), sin tocar estructura, copy ni CTA existentes.
- **IMPACT:** medio-alto, refuerza sensación de "producto" sin rediseñar el grid.
- **RISK:** bajo — puramente aditivo.
- **FILES AFFECTED:** `soluciones/components/LasCuatroSoluciones.tsx`.
- **RESPONSIVE IMPACT:** vigilar que la card no crezca en exceso en la columna única de mobile.
- **RECOMMENDED.**

### 3. Enriquecer los nodos de "No son servicios aislados" con el mismo lenguaje visual — **MEDIUM**
- **CURRENT STATE:** 4 círculos de icono genérico conectados por `ArrowRight`, label peach "Medición" debajo.
- **PROBLEM:** el concepto de sistema ya está bien resuelto aquí, pero visualmente es el más "plano" de las tres secciones relacionadas con el mensaje central.
- **PROPOSAL:** usar la misma "firma visual" por capacidad definida en la mejora 1 y 2, repetida aquí por tercera vez para dar coherencia interna a la página.
- **IMPACT:** medio — más un remate de coherencia que una necesidad urgente.
- **RISK:** bajo.
- **FILES AFFECTED:** `soluciones/components/NoSonServiciosAislados.tsx`.
- **RESPONSIVE IMPACT:** el fallback ya existente (columna + flecha rotada a 430px) debe seguir funcionando con nodos más detallados; validar legibilidad a ese tamaño.
- **RECOMMENDED.**

### 4. Extender ligeramente el uso del peach como acento — **OPTIONAL**
- **CURRENT STATE:** 4 usos puntuales en toda la página (2 micro-anotaciones, 1 barra de gráfico, 1 color de texto de enlace).
- **PROBLEM:** ninguno real — el uso actual ya es correcto y contenido; esto es una oportunidad de personalidad, no una corrección.
- **PROPOSAL:** subrayado peach bajo los números de `PuntoDePartida`, o un indicador peach en la capa "Medición" del flujo de nodos.
- **IMPACT:** bajo-medio, cosmético.
- **RISK:** bajo, siempre que se mantenga contenido (regla explícita: no masivo).
- **FILES AFFECTED:** `soluciones/components/PuntoDePartida.tsx`, `soluciones/components/NoSonServiciosAislados.tsx`.
- **RESPONSIVE IMPACT:** ninguno.
- **OPTIONAL.**

### 5. Fondo con halos radiales en el Hero (si no se aborda como parte de la mejora 1) — **OPTIONAL**
- **CURRENT STATE:** `backgroundColor: var(--io-bg)` plano en toda la sección.
- **PROBLEM:** contribuye a la sensación "fría" del Hero frente a HOME.
- **PROPOSAL:** aplicar el mismo tratamiento de `radial-gradient` sutil azul+peach que usa `hero-section` en HOME.
- **IMPACT:** medio, cambio barato en esfuerzo/impacto.
- **RISK:** muy bajo — solo fondo, sin efecto en layout.
- **FILES AFFECTED:** `soluciones/components/Hero.tsx`.
- **RESPONSIVE IMPACT:** ninguno.
- **RECOMMENDED** (de bajo riesgo; puede implementarse junto con la mejora 1 en el mismo esfuerzo).

---

## 11. Resumen ejecutivo

`/soluciones` tiene una **arquitectura de información y jerarquía de texto ya al nivel de HOME** (spacing, tokens, estructura de secciones), y de hecho ya intuye correctamente el lenguaje de "nodos conectados" que le da identidad propia frente a HOME. La brecha real está concentrada en la **riqueza visual de 3 puntos concretos** (Hero, las 4 solution cards, y los nodos de "No son servicios aislados") que hoy se apoyan en iconos y geometría plana en vez de micro-recursos reconocibles como los que HOME ya validó (mini-mapa, mini-gráfico, sparkline, mini-interfaz) — sin necesidad, en ningún caso, de fotografía real ni de un dispositivo protagonista, que son elementos específicos de la narrativa de HOME y no deberían copiarse literalmente aquí.
