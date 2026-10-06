# Visibilidad — Recuperación de regresión visual (2026-10-07)

Sin commit, push ni deploy. Página: `/soluciones/visibilidad/`.

## 1. Causa raíz

Dos incidentes encadenados, ninguno es un fallo de CSS del componente:

1. **`pnpm build` con `next dev` activo (puerto 3015).** El build pisó `.next` mientras el dev server seguía
   sirviéndolo. Evidencia en el log del dev server: 404 en `/_next/static/css/app/layout.css`,
   `.../(landings)/layout.css`, `.../visibilidad/layout.css`, `chunks/main-app.js`, `app-pages-internals.js`.
   Sin CSS ni JS la página se ve con tipografía por defecto, botones sin marca e ilustraciones SVG en negro.
   Es el incidente ya documentado en el procedimiento local (no ejecutar build con dev activo).
2. **`git checkout` sobre `visibilidad/components/Hero.tsx`** (ejecutado por mí al hacer un rollback a petición del
   usuario). El Hero fotográfico aprobado solo existía como cambios **sin commit**; HEAD contiene el Hero
   anterior (interfaz abstracta). El checkout descartó esos cambios. Se restauró el archivo íntegro desde el
   contenido leído antes de la edición (foto 3:2, máscaras fade-x/fade-y, `margin-left: -20px`,
   `width: min(720px, calc(100% + 115px))`, 3 microcards).

Otras páginas no estaban afectadas por el código; sí lo estaban por el servidor (mismo `.next`).

## 2. Acciones

- Diff de seguridad guardado antes de editar: scratchpad de sesión `safety-diff.patch` (171 KB, `git diff`).
- Restauración de `Hero.tsx` (único archivo de código modificado en esta tarea).
- Parado solo mi servidor (3 procesos con CommandLine del proyecto, puerto 3015) → `pnpm build` → borrado de
  `.next` → `next dev -p 3015` reiniciado. `pnpm-lock.yaml` md5 `b8b4860c...` sin cambios. No se reinstaló nada.

## 3. Preservado

Tres canales (`Introduccion.tsx`), tres soluciones (`TresFormas.tsx`, `VisibilidadVisuals.tsx`), Cómo trabajamos,
Comercialización, Análisis, FAQ, `page.tsx`, `styles.css`. No modificados. Otras páginas no modificadas.

## 4. Verificación (dev server reiniciado, página real)

| Ancho | Overflow | H1 | CTA | Foto | Microcards |
|---|---|---|---|---|---|
| 375 | 0 | Manrope 36px | #F67752 | OK | 2 |
| 430 | 0 | Manrope 36px | #F67752 | OK | 2 |
| 768 | 0 | Manrope 40px | #F67752 | OK | 2 |
| 1024 | 0 | Manrope 53px | #F67752 | OK | 2 |
| 1280 | **63 px** | Manrope 56px | #F67752 | OK | 3 |
| 1440 | 0 | Manrope 56px | #F67752 | OK | 3 |
| 1920 | 0 | Manrope 56px | #F67752 | OK | 3 |

Sin errores de consola ni respuestas ≥400. Manrope cargada (`document.fonts.check`). Home, Web para empresas,
Campañas y Conversión: Manrope y CSS cargados, sin overflow a 1440.

Capturas: `docs/analysis/screenshots/visibilidad-regression/after-1440.png` y `after-{375..1920}-hero.png`.
No existe captura "antes" de la regresión en el repo (la captura del usuario no está guardada en disco).

## 5. Pendiente

**Overflow horizontal a 1280 (63–73 px)** en Visibilidad, Campañas y Conversión; Web para empresas: 0.
Origen: la capa `.vh-bg` / `.cph-bg` / `.cvh-bg` con `width: min(720px, ...)` y `margin-left` negativo,
introducida en el ajuste de tamaño del 2026-10-07 (anterior a la regresión). Mi informe anterior daba 0 a
1280, medición incorrecta. Hero congelado: no se ha corregido; requiere decisión.
