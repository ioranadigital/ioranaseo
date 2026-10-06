# /como-trabajamos/ — Visual Polish

**Fecha:** 2026-09-28 · **REFERENCE: APPROVED MOCKUP** (dirección visual del último mockup elegido por el
usuario, no reinterpretada). Reemplaza la estructura anterior de 8 secciones (Hero, CuatroAtributos,
PrincipioDeTrabajo, ComoTrabajamosContigo, UnEnfoqueIntegral, NosImplicamos, CTAFinal, FAQ) por una página
compacta de 5 secciones, con lenguaje propio de proceso, colaboración, seguimiento y transparencia.

## IMPLEMENTATION SUMMARY

```
Header global
Hero (copy izq. / 3 cards conectadas: Diagnóstico → Plan de acción → Seguimiento, der.)
Qué pasa después del diagnóstico (3 pasos: Definimos prioridades → Organizamos el plan → Ponemos en marcha y medimos)
Trabajamos contigo (2 paneles: Nosotros / Tú, 4 acciones compactas cada uno)
Seguimiento continuo (bucle: Revisar → Priorizar → Ejecutar → Mejorar ↺)
Preguntas frecuentes + Diagnóstico (FAQ 5 preguntas / panel sin formulario)
Footer
```

Archivos nuevos: `PostDiagnostico.tsx`, `Colaboracion.tsx`, `SeguimientoContinuo.tsx`,
`ComoTrabajamosVisuals.tsx` (9 microvisuales SVG propios de esta página; el bucle de seguimiento y los 8
puntos de colaboración usan iconos Lucide directamente, sin ilustración, tal como pedía el brief). `Hero.tsx`
y `FAQ.tsx` reescritos en el mismo archivo. `page.tsx` actualizado.

**Sin usar / no borrados** (documentados como deuda, mismo criterio que en las rondas anteriores):
`CuatroAtributos.tsx`, `PrincipioDeTrabajo.tsx`, `ComoTrabajamosContigo.tsx`, `UnEnfoqueIntegral.tsx`,
`NosImplicamos.tsx`, `CTAFinal.tsx`. Ya no los importa `page.tsx`.

## CONTENT PRESERVED

Antes de sustituir, auditué el contenido de las 8 secciones anteriores:

- **FAQ (`FAQ.tsx`, 6 preguntas):** tenía respuestas honestas y bien planteadas. Reutilicé el tono y, donde
  el tema coincidía, la propia respuesta: "¿Cuánto tiempo tarda en verse una mejora?" → adaptada a "¿Cuánto
  dura el proceso desde el diagnóstico hasta las primeras mejoras?"; "¿Cómo decidís por dónde empezar?" →
  informó la respuesta de "¿Puedo participar en la definición del plan?".
- **`ComoTrabajamosContigo.tsx` (timeline de 4 pasos: Nos reunimos → Identificamos → Ponemos en marcha →
  Medimos y mejoramos):** su espíritu y parte de su lenguaje ("ponemos en marcha", "medimos y mejoramos")
  están recogidos en el nuevo bloque de 3 pasos "Qué pasa después del diagnóstico", que el propio brief pedía
  como reemplazo directo (3 pasos en vez de 4, para diferenciar la página de Campañas/Conversión).

## CONTENT REMOVED

Documentado, no eliminado en silencio:

- **`CuatroAtributos.tsx`** (Cercanía y compromiso / Experiencia multidisciplinar / Método y orden /
  Resultados a largo plazo): la nueva estructura fija de 5 secciones no tiene hueco para un bloque de
  atributos adicional. Su mensaje de cercanía queda parcialmente recogido en el nuevo bloque de colaboración.
- **`PrincipioDeTrabajo.tsx`** (cita: "No creemos en soluciones genéricas. Creemos en entender, priorizar y
  ejecutar lo que realmente necesita tu negocio."): buen copy, pero no hay sitio en la estructura aprobada.
  Queda disponible por si se quiere reutilizar en otro punto del sitio.
- **`UnEnfoqueIntegral.tsx`** (mini-navegación a las 4 soluciones: Web para empresas, Visibilidad, Campañas,
  Conversión, con enlaces reales): eran enlaces útiles, pero el brief fija la estructura en 5 secciones sin
  hueco para un bloque de navegación cruzada aquí. Si se quiere recuperar esa navegación, `/soluciones/` ya
  cumple esa función como hub.
- **`NosImplicamos.tsx`** (escena de escritorio ilustrada con iconos Coffee/Sprout/NotebookPen): estilo visual
  sustituido por la nueva composición de 3 cards conectadas del Hero.
- **`CTAFinal.tsx`** (botón de cierre): su función queda absorbida por el nuevo panel de diagnóstico al final
  de la página, consistente con el resto del sistema.

**Bug corregido de paso:** el CTA principal del Hero anterior enlazaba a `href="#contacto"`, un ancla que no
existe en esta página (no hay ningún elemento con `id="contacto"`) — era un enlace roto heredado. El nuevo
Hero usa `/diagnostico/` y `/contacto/`, ambas rutas reales.

## VISUAL DIFFERENTIATION

Lenguaje propio: **proceso + colaboración + seguimiento**, frente a:

- **Web para empresas:** web + negocio (construcción).
- **Visibilidad:** búsqueda + Maps.
- **Campañas:** anuncios + audiencias.
- **Conversión:** UX + datos + CRO.

Esta página no vende ninguna solución — explica cómo es trabajar con IORANA SEO. El Hero usa 3 documentos
conectados por flechas (no un navegador ni una foto), el bloque de colaboración usa un formato "Nosotros / Tú"
que no existe en ninguna otra página, y el bucle de seguimiento es un flujo continuo con icono de retorno
(↺), no un pipeline de servicio.

## ROUTES

| Elemento | Destino |
|---|---|
| Hero — "Empezar diagnóstico" | `/diagnostico/` |
| Hero — "Hablar con nosotros" | `/contacto/` (antes `href="#contacto"`, roto) |
| Diagnóstico final — "Empezar diagnóstico" | `/diagnostico/` |

## RESPONSIVE

| Ancho | Resultado | Notas |
|---|---|---|
| 375 | PASS | Hero en orden copy→CTAs→visual (cards apiladas, sin flechas ni números, priorizando legibilidad); colaboración y bucle en 2×2/stack |
| 430 | PASS | igual que 375 |
| 768 | PASS | "Qué pasa después" en 3 columnas (caben con holgura); bucle en 4 columnas |
| 1024 | PASS | composición completa |
| 1280 | PASS | composición completa |
| 1440 | PASS | igual que 1280 |

- **Overflow horizontal:** 0px en las seis anchuras.
- **Errores de consola:** 0.
- **Footer:** transición de 80px en las seis anchuras, igual que el resto del sistema; Footer global no
  tocado.
- **Altura total de página:** 375: 4803px · 430: 4682px · 768: 3678px · 1024: 3029px · 1280/1440: 2907px —
  más corta que `/web-para-empresas/` (4280px en 1280) y de profundidad similar a las landings de soluciones
  (2907–3079px), tal como pedía el brief.

## BROKEN LINKS

- **Revisados:** Hero (2 CTAs), Diagnóstico (1 CTA).
- **Rotos:** 0 (el `#contacto` roto del Hero anterior queda corregido).
- **`href="#"`:** 0.

## TECHNICAL NOTES

- **CSS heredada:** el nuevo código usa prefijos de clase propios (`cth-`, `pd-`, `cl-`, `sc-`, `cf-`),
  verificados contra `styles.css` de esta página sin ningún solapamiento. Las reglas antiguas de las 6
  secciones retiradas y el bloque de selectores de header quedan huérfanas, documentadas como deuda, sin
  limpieza en esta ronda.
- **Tokens:** `--io-action`, `--io-action-hover`, `#F4A27C` (vía `var(--io-accent)`), `--io-bg-soft`,
  `--io-border`, `--io-radius-md`/`--io-radius-lg`, tipografía Manrope heredada del sistema. Verde puntual
  (`#34A86A`) para "Seguimiento", igual que el ya usado en Conversión. 0 hardcodes de colores antiguos
  (`#3B82F6`, `rgba(59,130,246,…)`, `#FF8C00`).
- **Bordes:** por defecto `var(--io-border)`, hover a `var(--io-action)` en las cards de "Qué pasa después
  del diagnóstico" — aplicado desde el principio con el ajuste ya validado en Campañas/Conversión.
- **Sin datos falsos:** 0 porcentajes, +X%, revenue, leads o resultados ficticios en ningún microvisual.
- **FAQ:** accordion con `+`/`−`, `aria-expanded`, sin autofocus, foco visible con teclado.

## ENTREGA

```
HERO: PASS
HERO VISUAL: PROCESS-SPECIFIC
POST-DIAGNOSTIC: PASS
COLLABORATION: PASS
NOSOTROS PANEL: PASS
TU PANEL: PASS
CONTINUOUS FOLLOW-UP: PASS
FAQ: PASS
DIAGNOSTIC: PASS
CONTENT DENSITY: COMPACT
LARGE TEXT BLOCKS: 0
BROKEN LINKS: 0
HREF #: 0
375: PASS
430: PASS
768: PASS
1024: PASS
1280: PASS
1440: PASS
HORIZONTAL OVERFLOW: 0px
CONSOLE ERRORS: 0
BUILD: PASS
PAGE STATUS: READY FOR VISUAL REVIEW
```

## FINAL VISUAL QA + FREEZE (2026-09-28)

Ronda de verificación final tras aprobación de la implementación. No se rediseñó nada; la única duda
planteada por el brief fue el indicador de retorno/ciclo (↺) al final del bucle de "Seguimiento continuo".

### LOOP INDICATOR — investigación y decisión

1. **Comprobación del DOM/CSS real:** el elemento vivía como un `<span className="sc-loopback">↺</span>`
   posicionado con `position: absolute; top: -30px; right: 0` sobre el último nodo ("Mejorar"), sin ningún
   trazo, curva ni línea que lo conectara visualmente de vuelta al primer nodo ("Revisar").
2. **Evidencia visual:** captura ampliada de `.sc-loop` en 1280px (`loopzoom.png`, script `loopcheck.js`)
   confirmó el símbolo flotando por encima/a la derecha del último nodo, sin relación visual clara con el
   resto del flujo — exactamente la condición que el brief describe como "aparece flotando sin una relación
   visual clara".
3. **Decisión aplicada** (regla explícita del brief: *"preferencia: REMOVE antes que añadir una conexión
   compleja"*): se eliminó el `<span>` y sus dos reglas CSS asociadas (`.sc-loopback` y su `display: none`
   en el breakpoint móvil) de `SeguimientoContinuo.tsx`. No se añadió conector/curva alternativa porque no
   podía hacerse de forma limpia sin aproximarse a la complejidad que el brief pedía evitar (SVG grande,
   runway, animación).
4. **Verificación de la eliminación:** `document.querySelector('.sc-loopback')` → `null`; captura
   `loopzoom2.png` (script `loopcheck2.js`) muestra las 4 tarjetas simples, sin artefacto flotante. "Mejorar"
   sigue distinguiéndose sutilmente del resto mediante su borde/icono en `var(--io-accent)` (regla preexistente
   `.sc-node:last-child .sc-node__icon`, no tocada).
5. **Efecto colateral:** ninguno — las alturas totales de página en las 6 anchuras son idénticas a las de la
   ronda anterior (ver tabla RESPONSIVE arriba), confirmando que la eliminación no desplazó ni recompactó
   ningún otro bloque.

**Resultado: LOOP INDICATOR: REMOVED.**

### Verificaciones adicionales

- **Hero / Post-diagnóstico / Panel de diagnóstico:** sin cambios respecto a la ronda anterior — PASS.
- **Colaboración, densidad móvil:** 375px → altura 953px; 430px → altura 929px; sin overflow de texto en
  `.cl-list__text` (`scrollWidth > clientWidth` → `false` en ambas anchuras). PASS, no se tocó nada (regla
  del brief: "Si PASS: NO TOCAR").
- **QA responsive completo (375/430/768/1024/1280/1440):** 0px overflow horizontal en las seis anchuras.
- **CTAs verificados:** Hero → `/diagnostico/` y `/contacto/`; Diagnóstico final → `/diagnostico/`. 0 enlaces
  rotos, 0 `href="#"`.
- **Consola:** 0 errores en las seis anchuras.
- **FAQ:** navegación por teclado (focus + Enter) alterna correctamente `aria-expanded`.
- **Footer:** transición de 80px, sin cambios.
- **Alturas de página (sin reducción artificial):** 375: 4803px · 430: 4682px · 768: 3678px · 1024: 3029px ·
  1280/1440: 2907px — idénticas a la ronda de implementación.
- **Build:** `pnpm build` → exit code 0, "✓ Compiled successfully."
- **Alcance de cambios:** `git status --short` limitado exclusivamente a ficheros de `/como-trabajamos/`.

### Screenshots

`docs/analysis/screenshots/como-trabajamos-final-qa/`: `375-full.png`, `768-full.png`, `1280-full.png`,
`1280-hero.png`, `1280-collaboration.png`, `1280-seguimiento.png`, `375-faq-diagnostic.png`.

### ENTREGA FINAL

```
HERO: PASS
POST-DIAGNOSTIC: PASS
COLLABORATION: PASS
COLLABORATION MOBILE DENSITY: GOOD
CONTINUOUS FOLLOW-UP: PASS
LOOP INDICATOR: REMOVED
FAQ: PASS
DIAGNOSTIC: PASS
375: PASS
430: PASS
768: PASS
1024: PASS
1280: PASS
1440: PASS
BROKEN LINKS: 0
HREF #: 0
HORIZONTAL OVERFLOW: 0px
CONSOLE ERRORS: 0
BUILD: PASS
PAGE STATUS: FROZEN
```
