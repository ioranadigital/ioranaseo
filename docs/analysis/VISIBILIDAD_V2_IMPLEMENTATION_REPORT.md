# Visibilidad V2 — Informe de implementación (PR-CLA-009)

**Fecha:** 2026-10-07 · **Entorno:** local (`npx next dev -p 3015`) · **Commits:** ninguno (sin commit/push/deploy)

## 1. Alcance

Rediseño de todo el contenido posterior al hero de `/soluciones/visibilidad/` siguiendo el mockup aprobado
(`docs/design/IORANA_SEO_Visibilidad_Mockup_Aprobado.png`, añadido al repo el 2026-10-07). El hero, la
cabecera y el footer **no se han tocado**.

## 2. Archivos modificados

| Archivo | Cambio |
|---|---|
| `components/Hero.tsx` | **Sin cambios.** No leído para edición, solo verificado que sigue intacto. |
| `components/Introduccion.tsx` | **Nuevo.** Bloque 01. |
| `components/TresFormas.tsx` | Reescrito. Bloque 02 (antes: SEO / SEO Local / Maps por separado → ahora: SEO / SEO Local + Maps / GEO). |
| `components/ComoTrabajamos.tsx` | Copy reescrito (Analizamos/Priorizamos/Implementamos/Medimos). Estructura, `id="como-trabajamos"` y visuales reutilizados sin cambios. |
| `components/Comercializacion.tsx` | **Nuevo**, sustituye a `MasOportunidades.tsx` (eliminado). Bloque 04. |
| `components/AnalisisVisibilidad.tsx` | **Nuevo.** Bloque 05. |
| `components/FAQAnalisis.tsx` | Reescrito: 5 preguntas del brief, se retira la tarjeta promocional lateral (redundante con el Bloque 05). |
| `components/VisibilidadVisuals.tsx` | Añadido `CardGeoVisual` (mockup de chat IA); eliminado `CardSeoLocalVisual` (sin uso tras fusionar SEO Local + Maps). |
| `page.tsx` | Nuevo orden: Hero → Introduccion → TresFormas → ComoTrabajamos → Comercializacion → AnalisisVisibilidad → FAQAnalisis. |
| `styles.css` | Eliminados 5 bloques de CSS huérfano (`!important`) de los componentes muertos retirados; se deja una nota explicando por qué. El bloque "HERO" (ya inactivo, de una versión anterior) no se ha tocado por precaución. |

### Eliminados (código muerto, sin importar desde ningún `page.tsx`, confirmado por grep antes de borrar)

- `components/MasOportunidades.tsx` (sustituido por `Comercializacion.tsx`)
- `components/QueSignificaVisibilidad.tsx`
- `components/CasosDondeFalla.tsx`
- `components/LasPalancas.tsx`
- `components/QueHacemos.tsx`
- `components/QueNecesitasMejorar.tsx`

## 3. Componentes reutilizados

- `VisibilidadVisuals.tsx`: `CardSeoVisual` y `CardMapsVisual` (sin cambios) para las tarjetas SEO y SEO Local + Maps; `StepAnalisisVisual/StepOptimizacionVisual/StepContenidoVisual/StepSeguimientoVisual` reasignados a los 4 pasos de la metodología.
- `/api/diagnostico` + `DiagnosticoWizard` (ya en producción, probado con envío real): es el destino funcional de todos los CTA de conversión de la página (hero, bloque 05, FAQ no tiene CTA propio).
- Tokens de diseño (`--io-*`) y patrones visuales (tarjetas, `tf-card`, acordeón FAQ) ya existentes en el proyecto.

## 4. Bloque 05 — Conversión: decisión de integración

El mockup propone dos campos (URL, "qué te preocupa") + CTA. **No existe backend para capturar solo esos
dos valores** y el brief pide explícitamente "reutilizar el sistema funcional existente" y "no simular
envíos correctos". Decisión tomada:

- Los dos campos están implementados como inputs reales controlados (fidelidad visual con el mockup, con
  `<label>` accesibles aunque visualmente ocultos).
- El botón "Analizar mi visibilidad →" **no envía los campos a ningún sitio** — es un `Link` que navega a
  `/diagnostico/`, el único flujo con backend real y probado (mismo patrón que ya usan el hero y el resto
  de CTAs de esta página).
- Esto se documenta aquí en vez de fingir un envío: los valores escritos en "tu web" / "qué te preocupa" no
  persisten. **Integración pendiente** si se quiere prefill real del wizard con esos datos (no se ha tocado
  `DiagnosticoWizard.tsx`, fuera del alcance de esta tarea).

## 5. Bloque GEO — lenguaje sin promesas

Siguiendo la restricción del brief, el título del bloque GEO usa "Que la IA pueda **descubrir y citar**"
(no "recomendar" ni "aparecer garantizado"), y la FAQ correspondiente aclara explícitamente que no se
garantizan apariciones en ChatGPT, Gemini o Perplexity.

## 6. Capturas antes/después

`docs/analysis/screenshots/visibilidad-v2/after/` — 375, 430, 768, 1024, 1440 px (full page). No se generó
"antes" porque el objetivo era sustituir contenido ya desactualizado (componentes con copy distinto al
aprobado), no hay versión previa que preservar como referencia.

## 7. Validaciones

| Validación | Resultado |
|---|---|
| Hero sin modificar | **PASS** — `Hero.tsx` no editado en esta tarea; verificado visualmente en las 5 capturas (H1, copy, CTA, microcards, foto intactos). |
| TypeScript (`tsc --noEmit --ignoreDeprecations 6.0`) | **PASS** — 0 errores nuevos; solo los preexistentes y ajenos en `src/lib/technical-seo.ts` y un slider con `ref`. |
| `pnpm build` | **PASS** (tras parar el dev server y limpiar `.next`, ver nota). Ruta `/soluciones/visibilidad` compila: 11 kB / 127 kB First Load JS. |
| Lockfile sin cambios | **PASS** — md5 `b8b4860c7f9d504d86eab49e5cadc6ac` idéntico antes/después. |
| Overflow horizontal (375/430/768/1024/1280/1440/1920) | **PASS** — `scrollWidth - clientWidth = 0` en los 7 anchos. |
| Consola del navegador | **PASS** — 0 errores en carga limpia (tras el fix de un comentario CSS sin cerrar, ver incidencia). |
| CTA/enlaces | **PASS** — "Analizar mi proyecto" (hero) y "Analizar mi visibilidad →" (bloque 05) apuntan a `/diagnostico`. |
| FAQ interactiva | **PASS** — acordeón abre/cierra correctamente (probado por script). |
| SEO/metadata existente | **PASS** — `layout.tsx` (title, description, OG) no tocado. No había JSON-LD previo que preservar. |
| Jerarquía semántica | **PASS** — cada bloque usa `<h2>`, tarjetas usan `<h3>`. |
| Responsive 360–1440 | **PASS** — ver capturas; layouts de 1/2/3/4 columnas colapsan correctamente en los breakpoints heredados del resto del proyecto (1023px). |

### Incidencia durante la implementación

Un comentario CSS que añadí en `styles.css` quedó sin cerrar (`/* ... ` sin `*/`), lo que rompió
temporalmente la compilación de **todas** las páginas que importan ese módulo (incluida `/soluciones/campanas`,
no relacionada con este cambio). Se detectó de inmediato por el error 500 en la primera verificación visual,
se corrigió añadiendo el cierre `*/`, y se confirmó que `/soluciones/campanas` no sufrió ningún cambio real
(solo fue una compilación en caché momentáneamente rota).

## 8. Integraciones no realizadas / pendientes

- Backend propio para el mini-formulario del Bloque 05 (ver §4) — por diseño, no autorizado en este alcance.
- Prefill del wizard de `/diagnostico/` con los valores de "tu web" / "qué te preocupa" — requeriría tocar
  `DiagnosticoWizard.tsx`, fuera del alcance ("no modificar otras páginas... sin necesidad justificada").
- Enlaces "Conocer SEO / SEO Local / GEO →" del mockup: **omitidos** porque no existen páginas de detalle
  propias para SEO, SEO Local o GEO (solo existen `/soluciones/visibilidad`, `/campanas`, `/conversion`); el
  brief prohíbe crear rutas nuevas sin autorización.
- No se han tocado Analytics/GA4/GTM (viven en el layout global, no en esta página).

## 9. Recomendaciones posteriores

- Decidir si se quiere un endpoint real para el Bloque 05 (2 campos) o si el patrón "CTA → /diagnostico/"
  es suficiente de forma permanente.
- Si se aprueba, dar de alta las páginas de detalle SEO / SEO Local / GEO para poder enlazarlas desde el
  Bloque 02.
- El bloque "HERO" de CSS huérfano en `styles.css` (líneas iniciales del archivo) sigue sin uso real — se
  dejó intacto por precaución, pero puede limpiarse en una tarea futura que toque explícitamente el hero.

## 10. Criterios de cierre

- Hero original intacto: ✅
- Página sigue el mockup aprobado (estructura, bloques, tono Product Growth): ✅
- SEO, SEO Local + Maps y GEO diferenciados: ✅
- Funciona en desktop y móvil, sin overflow: ✅
- Sin CTA falsamente funcionales (ver §4, documentado en vez de simulado): ✅
- SEO/Analytics existentes operativos (no tocados): ✅
- Validaciones locales documentadas: ✅

## Veredicto

**READY para revisión local.** READY no autoriza desplegar — sin commit, push ni despliegue realizados.
