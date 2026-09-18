# AUDITORÍA VISUAL — /soluciones/visibilidad/

**Fecha:** 2026-09-18
**Tipo:** Auditoría únicamente. Ningún archivo de código fue modificado en esta ejecución.
**Alcance:** `src/app/(landings)/soluciones/visibilidad/**`
**Congelado (no tocado, no propuesto):** HOME, HOME Hero, `/soluciones/`, sistema CTA global, CookieConsent, Navbar, Footer, tokens, routing, SEO, `/diagnostico`, otras subpáginas.

---

## 1. Objetivo

Evaluar si `/soluciones/visibilidad/` alcanza el nivel de acabado visual de HOME y `/soluciones/` (tras su ronda de Visual Polish), y proponer una identidad propia — **TE BUSCAN → TE ENCUENTRAN → TE ELIGEN → GENERAS OPORTUNIDADES** — sin copiar el Hero de HOME (portátil+móvil+4 microcards) ni el Hero orbital de `/soluciones/` (4 nodos + conectores).

---

## 2. Concepto visual actual vs. concepto objetivo

La página ya recorre implícitamente la secuencia deseada, aunque no está unificada visualmente:

- `Hero` → aparece la idea de "te encuentran" (resultado de búsqueda + Maps + móvil + contenido).
- `QueSignificaVisibilidad` → literalmente narra **Te encuentran → Te comparan → Te eligen** (3 pasos con flechas), es la sección más alineada con el concepto pedido.
- `LasPalancas` → catálogo de las 4 palancas (SEO técnico, SEO Local, GBP/Maps, Contenidos) — grid de cards planas.
- `QueHacemos` → checklist + panel visual (el más "rico" en microelementos de toda la página).
- `CasosDondeFalla` → 3 problemas, iconos en círculo.
- `QueNecesitasMejorar` → 4 rutas de entrada, cards planas con icono.
- `FAQAnalisis` → FAQ + mini-formulario funcional (no requiere microvisual, ya es interactivo).

El territorio visual (búsquedas, resultados, mapas, presencia local) **ya está presente conceptualmente**, pero la ejecución es desigual: el Hero y `QueHacemos` tienen microinterfaces; el resto son solo icono-en-círculo, igual que estaba `/soluciones/` antes de su propia ronda de polish.

---

## 3. Estructura actual — sección por sección

| # | Sección | Contenido actual | Veredicto |
|---|---------|-------------------|-----------|
| 1 | `Hero` | H1 + copy + CTA + 4 beneficios + visual (resultado búsqueda central + badge Maps + badge móvil + badge contenido) | **ENRICH** — buena base conceptual, pero con problemas de responsive (ver §4) y sin halos ni conectores |
| 2 | `QueSignificaVisibilidad` | 3 pasos (Te encuentran/comparan/eligen) con icono circular + flecha | **ENRICH** — es la sección que mejor narra el concepto pedido; hoy solo tiene iconos Lucide en círculo, sin microvisual |
| 3 | `LasPalancas` | 4 cards planas (SEO técnico, SEO Local, GBP/Maps, Contenidos) con icono + bullets | **ENRICH** — mismo patrón que las "4 soluciones" de `/soluciones/` antes de su polish |
| 4 | `QueHacemos` | Checklist 8 items + panel visual (resultado búsqueda + reseñas/estrellas + bloque azul + mini gráfico) | **REFINE** — el panel visual es el más elaborado de la página, pero contiene un bloque de 5 estrellas que se lee como rating/reseña ficticia (ver §7, riesgo) |
| 5 | `CasosDondeFalla` | 3 problemas, icono circular, sin microvisual | **OPTIONAL** — nivel bajo por diseño (es una sección de "dolor", no necesita mucha riqueza visual) |
| 6 | `QueNecesitasMejorar` | 4 cards de enrutamiento, icono circular, 1 destacada | **OPTIONAL/ENRICH** — mismo patrón plano; nivel de detalle bajo es aceptable aquí (es un selector de intención, no un showcase) |
| 7 | `FAQAnalisis` | FAQ acordeón + mini-formulario interactivo de 4 opciones | **KEEP** — ya es funcional/interactivo, no necesita microvisual decorativo |

No se detectan secciones a eliminar o reordenar.

---

## 4. Auditoría del Hero

**Composición actual:** tarjeta central "resultado de búsqueda" (barra de búsqueda + 3 resultados con opacidad decreciente) + 3 badges satélite (Maps arriba-izq, móvil arriba-der, contenido abajo-izq) + anotación peach "Más visibilidad. Más oportunidades." Todo dentro de `.visibilidad-hero-visual` (fondo blanco sólido, sin halos).

**Comparación estructural:** esta composición es, en espíritu, muy parecida a la que tenía `/soluciones/` **antes** de su ronda de polish (1 nodo central + 3 badges satélite) — es decir, visibilidad está hoy en el nivel "pre-polish" de `/soluciones/`, no en el nivel actual post-polish.

- **Copy/visual ratio:** correcto, el visual no compite con el copy.
- **Iconografía:** `Search`, `MapPin` — apropiada, sin iconos genéricos de más.
- **Background:** blanco plano, sin halos (a diferencia de HOME y `/soluciones/`, que ya usan `radial-gradient` sutil azul+peach).
- **Spacing:** correcto, sin solapes detectados en 1280/768/430/375 (verificado por captura).
- **Uso de `transform: scale()`:** **SÍ existe** — ver §14, es el hallazgo más importante de esta auditoría.
- **Jerarquía frente a HOME y `/soluciones/`:** por debajo de ambos. HOME y `/soluciones/` ya no dependen de `scale()` para su responsive; visibilidad sí.

**Veredicto:** ENRICH (no KEEP, no rediseño completo).

---

## 5. Dirección visual propuesta para el Hero (NO implementado)

Composición conceptual evaluada, reutilizando el lenguaje de microinterfaces ya existente en esta misma página (la barra de búsqueda + resultados que YA tiene el Hero, y la ficha Maps que YA tiene):

```
   [Maps]                    [móvil]
        \                    /
         \                  /
      [ BUSCADOR + RESULTADO ]   ← elemento central, ya existe
         /                  \
        /                    \
  [contenido/web]      (punto peach de conexión)
```

Es decir: **mantener los 4 elementos que ya existen** (búsqueda/resultado, Maps, móvil, contenido) pero:
1. añadir halos sutiles (azul+peach) al fondo, igual que HOME y `/soluciones/`;
2. añadir 1-2 conectores finos y de bajo contraste entre el elemento central y los satélites, con como máximo un acento peach puntual — para que se lea como "un sistema", no 4 piezas sueltas;
3. sustituir `transform: scale()` por un layout real en 430/375.

No se propone copiar el laptop+móvil de HOME ni el sistema de nodos+conectores de `/soluciones/` tal cual — la base (buscador/resultado/mapa/negocio) ya es una identidad propia y diferenciada, solo necesita term inarse.

---

## 6. Verificación "no copiar HOME"

Confirmado: el Hero actual **no** replica el laptop+móvil+4 microcards de HOME. Usa un lenguaje propio (buscador+resultado+Maps+móvil+contenido) centrado en descubrimiento/búsqueda, coherente con el territorio pedido. Ningún cambio necesario en este eje.

---

## 7. Google/Maps — hallazgo de riesgo

El badge "Maps" del Hero (icono `MapPin` + 2 líneas) es correcto: no replica la interfaz real de Google, no tiene estrellas ni reseñas ni "#1".

**Riesgo real detectado fuera del Hero:** en `QueHacemos.tsx` (líneas 158-166), el panel visual incluye un bloque con **5 iconos `Star` rellenos en peach**, etiquetado "BÚSQUEDAS RELEVANTES":

```tsx
{[1, 2, 3, 4, 5].map((n) => (
  <Star key={n} size={10} strokeWidth={0} fill="var(--io-accent)" />
))}
```

Visualmente esto **se lee como una valoración de 5 estrellas / reseña**, independientemente de que el texto debajo diga otra cosa. Esto entra en conflicto directo con la prohibición explícita de esta y de anteriores rondas: *"NO introducir: estrellas; reviews; número de reseñas; posiciones '#1'; ranking ficticio"* (secciones 7 y 18 de este mismo brief). Es una inconsistencia entre la intención del componente (mostrar "búsquedas relevantes", un concepto sin relación con reseñas) y el símbolo elegido (rating de 5 estrellas).

Este hallazgo se eleva a mejora **HIGH** en §21.

---

## 8. SEO / Visibilidad orgánica

El Hero ya representa un resultado de búsqueda de forma abstracta (barra + 3 líneas de resultado con opacidad decreciente, sin ranking numérico, sin keywords inventadas, sin porcentajes). Cumple la regla. No se detectan oportunidades adicionales que no caigan ya dentro de las mejoras de §21.

---

## 9. Microvisuales — auditoría por sección

| Sección | Estado actual | Clasificación |
|---|---|---|
| Hero — badges satélite | Ya son microinterfaces (Maps, móvil, contenido) | KEEP ICON *(ya es microvisual)* |
| `QueSignificaVisibilidad` — 3 pasos | Icono Lucide en círculo (`Search`, `FileText`, `CheckCircle`) | **REPLACE WITH MICROVISUAL** — es la sección más narrativa de la página y hoy es la más plana |
| `LasPalancas` — 4 cards | Icono Lucide en círculo (`Settings`, `MapPin`, `Map`, `FileText`) | **REPLACE WITH MICROVISUAL** (densidad media, igual que las 4 cards de `/soluciones/`) |
| `QueHacemos` — panel visual | Ya es microinterfaz rica (con el problema de §7) | ENRICH ICON *(corregir, no añadir más)* |
| `CasosDondeFalla` — 3 problemas | Icono Lucide en círculo | NO CHANGE — sección de "dolor", la planitud es aceptable y evita sobrecargar |
| `QueNecesitasMejorar` — 4 cards | Icono Lucide en círculo | NO CHANGE — es un selector de intención (como un menú), no un showcase; añadir microvisuales aquí competiría con las 4 cards de `LasPalancas` que cubren el mismo contenido con más detalle |

---

## 10. Storytelling visual

La secuencia **TE BUSCAN → TE ENCUENTRAN → TE ELIGEN → GENERAS OPORTUNIDADES** ya existe textualmente en `QueSignificaVisibilidad` (Te encuentran / Te comparan / Te eligen) y en los 4 "beneficios" del Hero (Más visibilidad / Tráfico cualificado / Más oportunidades / Crecimiento sostenible). El potencial de storytelling visual es **HIGH**, porque la estructura textual del storytelling ya está escrita — solo falta que `QueSignificaVisibilidad` tenga un tratamiento visual a la altura de lo que cuenta (hoy son 3 círculos con icono, sin ningún microvisual que refuerce "encuentran/comparan/eligen").

---

## 11. Peach — uso actual

Uso puntual ya correcto en:
- anotación del Hero ("Más visibilidad. Más oportunidades.");
- badge "RECOMENDADA" en `QueNecesitasMejorar` (fondo peach solo en ese badge, no en el CTA);
- una barra del mini-gráfico en `QueHacemos` (4ª barra, "Medición").

Uso **a corregir** (no "ampliar", sino reencauzar): las 5 estrellas peach de `QueHacemos` (§7) son el único caso de peach que se siente "extendido" más allá de lo puntual, porque ocupa 5 elementos repetidos en lugar de 1 acento.

No se propone ampliar peach globalmente. `--io-accent` no requiere cambios.

---

## 12. Halos

El Hero es hoy `backgroundColor: white` plano (sin `radial-gradient`). Dado que HOME y `/soluciones/` ya establecieron el patrón de halos sutiles (azul suave + peach muy sutil) sin comprometer el fondo predominantemente blanco, **visibilidad se beneficiaría del mismo tratamiento** para no sentirse "un escalón por debajo" en la misma familia de páginas. Ver mejora MEDIUM en §21.

---

## 13. Cards / bloques — comparación con HOME y `/soluciones/`

| Atributo | `LasPalancas` / `QueNecesitasMejorar` (visibilidad) | 4 cards `/soluciones/` (post-polish) |
|---|---|---|
| Border | `1.5px solid var(--io-border)` | igual |
| Radius | `var(--io-radius-lg)` | igual |
| Padding | `28px 24px` | igual |
| Icon size | 22px en círculo 46-48px | igual, pero ahora con microvisual adicional |
| Fondos | blanco / soft alternado en `QueNecesitasMejorar` (destacada) | alternancia soft/white ya presente |
| Densidad | icono + texto únicamente | icono + texto + 1 microvisual (~20-30% de la card) |
| Sombras | `QueNecesitasMejorar` ya usa sombra en la destacada | consistente |

Conclusión: la estructura (border/radius/padding/spacing) ya está al mismo nivel que `/soluciones/`. La única brecha real es la **ausencia de microvisual**, exactamente la brecha que `/soluciones/` cerró en su propia ronda.

---

## 14. Responsive — uso de `transform: scale()`

**Confirmado y localizado exactamente:**

`src/app/(landings)/soluciones/visibilidad/styles.css`:

```css
/* línea 108-111, dentro de @media (max-width: 430px) */
.visibilidad-hero-visual-inner {
  transform: scale(0.8);
  transform-origin: center;
}

/* línea 133-136, dentro de @media (max-width: 375px) */
.visibilidad-hero-visual-inner {
  transform: scale(0.72);
  transform-origin: center;
}
```

Verificado visualmente (capturas 430px y 375px): los 4 elementos del Hero (resultado de búsqueda, badge Maps, badge móvil, badge contenido) se encogen como una sola unidad, cada vez más pequeños, exactamente el mismo anti-patrón ya corregido en HOME y en `/soluciones/`. A 375px el texto interior de las microinterfaces (líneas de resultado, texto "Maps") es notablemente más pequeño que en 1280px — no es ilegible todavía porque son solo líneas decorativas sin texto real, pero el patrón es el mismo que motivó la corrección en las rondas anteriores.

**Debe sustituirse** por un layout real (documentar únicamente en esta ronda, no implementar):
- 1024/768: el Hero ya usa `flex-direction: column` en el grid completo (texto arriba, visual abajo) — correcto, sin `scale()` a esos anchos.
- 430/375: aquí es donde vive el `scale()`. Alternativa: stack vertical real de los 4 elementos (igual que se hizo en `/soluciones/`) o simplificación a 2 elementos visibles + los otros 2 integrados como acentos menores, evitando reducir la composición completa.

---

## 15. Mobile — evaluación

- Microvisuales: hoy se reducen artificialmente por `scale()` (§14) — no aceptable según el propio criterio de esta auditoría.
- Cards (`LasPalancas`, `QueNecesitasMejorar`, `CasosDondeFalla`): ya colapsan a 1 columna en `<768px`, sin texto microscópico (verificado, fuente mínima 12.5px en bullets).
- No hay imágenes raster en la página (todo es CSS/SVG/Lucide) — sin riesgo de peso.
- No hay textos largos desbordando en 375px (verificado por captura completa).

---

## 16. Tablet — evaluación

- 768/1024: el Hero pasa a `flex-direction: column` (texto arriba, visual abajo) — es un layout real, no depende de `scale()` a estos anchos. Correcto.
- `LasPalancas`: 4→2 columnas en `<1024px`, luego 1 columna en `<768px` — layout real vía grid, correcto.
- `QueNecesitasMejorar`: mismo patrón, correcto.
- No se depende de `scale()` global en ningún punto salvo el Hero en 430/375 (§14).

---

## 17. Consistencia HOME / `/soluciones/` / `/soluciones/visibilidad/`

| Elemento | Clasificación |
|---|---|
| Hero | **WEAKER** — buena base conceptual, pero sin halos, sin conectores, y todavía depende de `transform:scale()` (ya eliminado en HOME y `/soluciones/`) |
| Cards (`LasPalancas`, `QueNecesitasMejorar`) | **WEAKER** — mismo nivel que `/soluciones/` tenía antes de su polish (icono en círculo, sin microvisual) |
| Iconografía | **SAME LEVEL** — mismo set Lucide, mismos tamaños/strokeWidth que el resto del sitio |
| Microvisuals | **INCONSISTENT** — el Hero y `QueHacemos` ya tienen microinterfaces (nivel alto/medio), pero `QueSignificaVisibilidad`, `LasPalancas`, `CasosDondeFalla`, `QueNecesitasMejorar` no tienen ninguna (nivel cero) — no hay una gradación de densidad deliberada como la que ahora existe en `/soluciones/` (Hero alto, cards medio, bloque final bajo); aquí es más un "todo o nada" según la sección |
| Spacing / backgrounds | **SAME LEVEL** — mismos paddings, radii, bordes y alternancia de fondos `white`/`var(--io-bg-soft)` que el resto del sitio |
| Brand personality | **WEAKER** — sin halos ni acentos peach puntuales fuera de 2 usos aislados, la página se siente más "genérica" que HOME/`/soluciones/` |

---

## 18. No métricas ficticias — verificación

Revisada toda la página. No se encontraron `+X%`, `#1`, CTR, ROI, DA/DR, número de leads, ni posiciones SEO inventadas. **Único hallazgo relacionado:** el bloque de 5 estrellas de `QueHacemos` (§7) — no es una métrica numérica, pero es un símbolo de rating/reseña que la propia auditoría tiene instrucción explícita de prohibir. Se documenta como hallazgo, no como "métrica ficticia" en sentido estricto, pero mismo espíritu de la regla.

---

## 19. Sistema técnico

Toda la página ya cumple: CSS propio/scoped (`styles.css` + `<style>` inline en `FAQAnalisis.tsx`), `style={}`, Lucide, sin SVG propio en el Hero (usa solo `div`s con bordes/radios, a diferencia de `/soluciones/` que sí usa `<svg>` para el mini-mapa y las líneas de tendencia). Ninguna librería nueva presente. Cualquier implementación futura debe mantenerse dentro de este mismo sistema.

---

## 20. No tocar — verificación de cumplimiento de esta auditoría

Esta ejecución **no modificó ningún archivo**. Se confirma que no se tocó: HOME, `/soluciones/`, Navbar, Footer, CookieConsent, sistema CTA, tokens, SEO, routing, copy, `/diagnostico`, ni las subpáginas `seo-local`/`google-maps`/`contenidos` referenciadas por `QueNecesitasMejorar` (fuera del alcance de esta auditoría, no fueron leídas ni auditadas).

---

## 21. Priorización — Top 5 mejoras

### 1. Eliminar `transform: scale()` del Hero en 430/375px
- **CURRENT STATE:** `.visibilidad-hero-visual-inner` usa `scale(0.8)` (430px) y `scale(0.72)` (375px) para comprimir los 4 elementos del Hero completos.
- **PROBLEM:** mismo anti-patrón ya corregido en HOME y `/soluciones/`; a 375px la composición completa se ve notablemente reducida, texto/líneas decorativas más finas que en desktop sin necesidad real.
- **PROPOSAL:** sustituir por un stack vertical real de los 4 elementos (o una versión simplificada de 2-3 elementos) usando CSS Grid/Flexbox real en el breakpoint, igual que se hizo en `/soluciones/`.
- **WHY IT HELPS:** alinea el Hero con el estándar ya establecido en HOME y `/soluciones/`; mejora legibilidad real en mobile.
- **RISK:** bajo — es un cambio de CSS responsive, no toca copy, CTA ni estructura de datos.
- **RESPONSIVE IMPACT:** positivo en 375/430; sin impacto en 768/1024/1280.
- **FILES AFFECTED:** `soluciones/visibilidad/styles.css`, posiblemente `soluciones/visibilidad/components/Hero.tsx` (si se requiere `gridArea`/clases nuevas).
- **DECISION:** RECOMMENDED.

### 2. Corregir el bloque de 5 estrellas en `QueHacemos.tsx`
- **CURRENT STATE:** panel visual de `QueHacemos` incluye 5 `<Star fill="var(--io-accent)">` bajo el texto "BÚSQUEDAS RELEVANTES".
- **PROBLEM:** se lee visualmente como una valoración/reseña de 5 estrellas, en conflicto directo con la prohibición explícita de "estrellas, reviews, ranking ficticio" de este y anteriores briefs.
- **PROPOSAL:** sustituir las 5 estrellas por un microvisual neutro coherente con "búsquedas relevantes" (p. ej. 2-3 líneas tipo "chip" o mini etiquetas de búsqueda, o una mini barra de búsqueda con lupa — reutilizando el lenguaje que ya existe en el propio Hero de esta página).
- **WHY IT HELPS:** elimina un riesgo real de incumplimiento de la regla "no reviews/ratings ficticios" que ya está viviendo en producción hoy.
- **RISK:** bajo — es un bloque decorativo aislado, sin lógica ni CTA.
- **RESPONSIVE IMPACT:** ninguno relevante (el bloque ya es pequeño en todos los anchos).
- **FILES AFFECTED:** `soluciones/visibilidad/components/QueHacemos.tsx`.
- **DECISION:** RECOMMENDED.

### 3. Añadir microvisuales de densidad media a `QueSignificaVisibilidad` y `LasPalancas`
- **CURRENT STATE:** ambas secciones usan solo icono Lucide en círculo, sin microinterfaz.
- **PROBLEM:** es la misma brecha que tenía `/soluciones/` antes de su ronda de polish; hoy es la sección menos alineada con el resto del sitio, especialmente `QueSignificaVisibilidad`, que narra literalmente el concepto pedido (Te encuentran/comparan/eligen) sin ningún refuerzo visual.
- **PROPOSAL:** añadir un pequeño microvisual por paso/card (p. ej. mini buscador para "Te encuentran", mini ficha/comparación para "Te comparan", mini check/confirmación para "Te eligen"; y equivalentes para las 4 palancas), en la misma línea de densidad media usada en las 4 cards de `/soluciones/` (~20-30% de la card, icono se mantiene como elemento principal).
- **WHY IT HELPS:** cierra la brecha de consistencia con `/soluciones/` y refuerza el storytelling que la sección ya cuenta en texto.
- **RISK:** medio-bajo — más superficie de cambio (2 componentes), riesgo de sobrecargar si no se limita el tamaño.
- **RESPONSIVE IMPACT:** neutro si los microvisuales se dimensionan de forma fija y pequeña (como en `/soluciones/`).
- **FILES AFFECTED:** `soluciones/visibilidad/components/QueSignificaVisibilidad.tsx`, `soluciones/visibilidad/components/LasPalancas.tsx`.
- **DECISION:** RECOMMENDED.

### 4. Halos sutiles en el fondo del Hero
- **CURRENT STATE:** `.visibilidad-hero-visual` es `backgroundColor: white` plano.
- **PROBLEM:** HOME y `/soluciones/` ya usan `radial-gradient` sutil (azul+peach) en sus Hero; visibilidad se siente "un escalón por debajo" en la misma familia de páginas.
- **PROPOSAL:** aplicar el mismo patrón ya validado (`radial-gradient(...), radial-gradient(...), white`), manteniendo el fondo predominantemente blanco.
- **WHY IT HELPS:** consistencia de marca entre las 3 páginas ya pulidas.
- **RISK:** muy bajo — es solo `background`, no afecta layout ni overflow (patrón ya probado 2 veces en este sitio).
- **RESPONSIVE IMPACT:** ninguno.
- **FILES AFFECTED:** `soluciones/visibilidad/components/Hero.tsx`.
- **DECISION:** RECOMMENDED.

### 5. Conectores sutiles entre los 4 elementos del Hero
- **CURRENT STATE:** el resultado de búsqueda central y los 3 badges satélite (Maps, móvil, contenido) flotan sin ninguna línea/conexión visual entre ellos, más allá de la proximidad espacial.
- **PROBLEM:** se leen como 4 piezas sueltas en vez de "un sistema", a diferencia del Hero de `/soluciones/` que ya usa conectores fino + 1 acento peach puntual para comunicar justamente esa idea.
- **PROPOSAL:** añadir 1-2 líneas finas de bajo contraste (o un único punto/acento peach) conectando el elemento central con los satélites — mismo lenguaje ya usado en `/soluciones/`, sin llegar a un sistema de nodos+conectores completo (evitar copiarlo literal).
- **WHY IT HELPS:** refuerza "todo funciona junto" sin rediseñar la composición.
- **RISK:** bajo, pero requiere cuidado geométrico para no cruzar por encima del texto de las microinterfaces existentes.
- **RESPONSIVE IMPACT:** los conectores deberían ocultarse en el layout stack de mobile (igual que se hizo en `/soluciones/`).
- **FILES AFFECTED:** `soluciones/visibilidad/components/Hero.tsx`.
- **DECISION:** OPTIONAL.

---

## 22. Highest impact

**Eliminar la dependencia de `transform: scale()` en el Hero (mejora #1).**

Es el único hallazgo que representa una regresión estructural real (no solo estética) heredada de un patrón ya corregido dos veces en este mismo sitio (HOME, `/soluciones/`). Cerrarlo aquí también evita que quede como el último Hero del ecosistema `/soluciones/*` dependiendo de esta técnica.

*(Nota: la mejora #2 — el bloque de 5 estrellas — es la de mayor riesgo de cumplimiento de reglas explícitas del brief, y se recomienda no posponerla aunque no sea la seleccionada como "highest impact" de polish visual.)*

---

## 23. Riesgos de responsive

- El stack vertical real en 430/375 (mejora #1) debe verificarse sin overflow horizontal, igual que se validó en `/soluciones/`.
- Los microvisuales nuevos de la mejora #3 deben mantenerse pequeños y fijos en tamaño para no romper el grid de 4→2→1 columnas ya existente en `LasPalancas`.
- Los conectores de la mejora #5 (si se implementan) deben ocultarse explícitamente en el breakpoint donde el Hero pase a stack vertical, igual que se hizo en `/soluciones/` (`display: none` en el SVG/línea de conectores).

---

## 24. Archivos que cambiarían (si se aprueba implementación)

- `src/app/(landings)/soluciones/visibilidad/components/Hero.tsx`
- `src/app/(landings)/soluciones/visibilidad/components/QueHacemos.tsx`
- `src/app/(landings)/soluciones/visibilidad/components/QueSignificaVisibilidad.tsx`
- `src/app/(landings)/soluciones/visibilidad/components/LasPalancas.tsx`
- `src/app/(landings)/soluciones/visibilidad/styles.css`

Ningún otro archivo del proyecto necesitaría cambios para ejecutar las 5 mejoras propuestas.

---

**FIN DE LA AUDITORÍA. No se modificó código. Pendiente de aprobación del usuario para cualquier ronda de implementación.**
