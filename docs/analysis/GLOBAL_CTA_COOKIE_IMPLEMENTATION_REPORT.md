# Implementación — Sistema Global CTA/Botones + CookieConsent

**Fecha:** 2026-09-18
**Basado en:** `GLOBAL_CTA_COOKIE_VISUAL_AUDIT.md`
**Dirección aplicada:** C — Blue + Peach Hierarchy
**Estilo de cookies aplicado:** Option A — Light
**Excluidos (por decisión explícita):** `/diagnostico` (sistema de marca propio, deferred) y `src/app/(landings)/home/components/Hero.tsx` (congelado)

---

## 1. Tokens

`src/app/styles/iorana-design-tokens.css`

| Token | Antes | Después | Motivo |
|---|---|---|---|
| `--io-action` | `#3B82F6` | `#336FE6` | El azul original con texto blanco daba 3.68:1 (falla AA normal). El nuevo tono da **4.61:1** (pasa AA normal), manteniendo una apariencia casi idéntica. |
| `--io-action-hover` | `#2563EB` | `#2559C6` | Coherente con el nuevo primary; da 6.32:1 con blanco. |

Ningún otro token fue modificado (`--io-accent`, `--io-bg`, `--io-bg-soft`, `--io-text`, `--io-text-muted`, `--io-border`, radios, tipografía: todos intactos).

## 2. Focus y Active globales

`src/app/globals.css` — dos reglas nuevas, sin tocar ninguna otra:

```css
button:focus-visible,
a:focus-visible {
  outline: 3px solid var(--io-action-hover);
  outline-offset: 2px;
  border-radius: var(--io-radius-sm);
}

button:active {
  transform: scale(0.98);
}
```

Verificado con navegación por teclado (Tab): el foco se ve como anillo azul sólido de 3px en cualquier botón o link del sitio (probado en `/`, fuera del banner de cookies). La regla preexistente `a:hover, a:focus { color: #FF8C00 }` (que da el color naranja de `/diagnostico` a los links en focus/hover en todo el sitio) se dejó intacta — coexiste sin conflicto porque actúa sobre `color`, no sobre `outline`.

`:active` se limitó a `button` (no a `a`) para no aplicar un efecto de "presión" a enlaces de texto plano (nav, footer), que no lo esperan visualmente. La mayoría de los CTA primarios reales son `<button>`; los que son `<Link>` (Header, la mayoría de los Hero) no reciben el press-effect — gap menor, documentado, no shows visual negativo.

## 3. CTA primario — unificación de copy

Regla aplicada: **"Analizar mi proyecto" (sin flecha)**, en TODO CTA que use exactamente ese copy, en cualquier página fuera de `/diagnostico`. Enlaces con copy distinto ("Ver Web de Captación →", "Ver soluciones de crecimiento →", etc.) mantienen su flecha — no son "el mismo CTA".

Archivos con flecha eliminada:
- `src/app/(landings)/soluciones/visibilidad/components/Hero.tsx`
- `src/app/(landings)/soluciones/campanas/components/Hero.tsx`
- `src/app/(landings)/soluciones/conversion/components/Hero.tsx`
- `src/app/(landings)/como-trabajamos/components/Hero.tsx`
- `src/app/(landings)/como-trabajamos/components/CTAFinal.tsx`
- `src/app/(landings)/home/components/PorDondeEmpezar.tsx` (card "Quiero conseguir más clientes")
- `src/app/(landings)/soluciones/conversion/components/PorDondeEmpezar.tsx` (card "Necesito optimizar mi web")
- `src/app/(landings)/soluciones/campanas/components/PorDondeEmpezar.tsx` (card "Necesito lanzar campañas")
- `src/app/(landings)/soluciones/visibilidad/components/QueNecesitasMejorar.tsx` (card "Mejorar mi posicionamiento")
- `src/app/(landings)/soluciones/components/Diagnostico.tsx` (quitado el icono `ArrowRight`, mismo criterio que el arrow de texto; import limpiado)

Ya usaban el copy correcto sin flecha (sin cambios de texto): Home Hero (congelado), `/soluciones` Hero, `/web-para-empresas` Hero, `/web-para-empresas` Pricing (plan recomendado).

## 4. Padding del CTA primario

`src/app/(landings)/soluciones/components/Hero.tsx`: `14px 28px` → `14px 32px`, alineado con el valor que ya usaban todos los demás Hero (incluido el Home congelado). Era el único outlier.

## 5. Hover faltante

`src/app/(landings)/web-para-empresas/components/Header.tsx` — el CTA propio de este header (desktop y el del dropdown mobile) no tenía `onMouseEnter`/`onMouseLeave`. Añadido en ambos, con la misma transición `background-color 0.2s` → `var(--io-action-hover)` que usa el resto del sitio. Aprovechado también para corregir su label ("Analizar" → "Analizar mi proyecto") en el botón desktop.

`src/app/(landings)/web-para-empresas/components/Pricing.tsx` — los botones secundarios ("Quiero este plan" / "Quiero saber más") no tenían hover. Añadido: `var(--io-bg-soft)` → `var(--io-border)` en hover (mismo patrón conceptual que el primary, pero en la escala de fondo suave, ya que su texto/fondo ya usa esos tokens).

## 6. Peach — badge "Recomendada"

`src/app/(landings)/web-para-empresas/components/Pricing.tsx` — el badge de fondo peach (`var(--io-accent)`) llevaba texto blanco (2.04:1, falla AA incluso para texto no interactivo). Cambiado a `var(--io-text)` → **8.76:1**. Es el único elemento peach del sistema que actúa como "señal de conversión destacada" (Dirección C, sección 10 del brief); el CTA real del plan recomendado sigue en azul. Radio del badge (`20px` hardcoded, forma de píldora) se dejó igual — no estaba en el alcance de este cambio.

## 7. CookieConsent — Option A (Light)

`src/components/CookieConsent.tsx` — reescritura completa de estilos (lógica, `localStorage`, eventos y toggles intactos, cero cambios funcionales).

**Banner:**
- Fondo `#1a1a1a` → `white`; borde superior `1px solid var(--io-border)`; sombra suave hacia arriba `0 -4px 20px rgba(15,23,42,0.08)` (antes `0 -2px 10px rgba(0,0,0,0.1)` sobre negro).
- Texto `white` → `var(--io-text)`.
- Link "Política de Cookies": `#4a9eff` → `var(--io-action)`, con hover a `var(--io-action-hover)` (antes no tenía hover).

**Botones del banner (Rechazar / Configurar / Aceptar) — jerarquía igualada:**
Los tres comparten ahora exactamente el mismo objeto de estilo (`cookieButtonStyle`) y los mismos handlers de hover: fondo blanco, borde `var(--io-border)`, texto `var(--io-text)`, radio `var(--io-radius-sm)`, `fontWeight:600`. En hover, los tres cambian a borde/texto `var(--io-action)`. Antes, Aceptar tenía fondo azul sólido + `fontWeight:600` mientras Rechazar/Configurar eran outline + `fontWeight:500` — esa asimetría desapareció por completo.

**Modal de preferencias:**
- Tarjeta: añadido `border: 1px solid var(--io-border)`; radio `12px` hardcoded → `var(--io-radius-md)` (mismo valor, ahora es token).
- Textos: `#666` → `var(--io-text-muted)`; título/subtítulos → `var(--io-text)`; separador `#eee` → `var(--io-border)`.
- Cancelar: mismo estilo que los botones del banner (`cookieButtonStyle`).
- Guardar Preferencias: azul primario (`var(--io-action)`/blanco) — es una acción de "confirmar" tras elegir en los toggles, no un "aceptar/rechazar todo", por lo que no aplica la misma regla de igualdad estricta del banner.

**Mobile (375/430):** nuevo `<style>` interno con `@media (max-width: 640px)` — los 3 botones pasan a stack vertical, `width:100%`, mismo orden (Rechazar → Configurar → Aceptar), mismo estilo. Antes dependía únicamente de `flexWrap` sin breakpoint, lo que producía un wrap de 2+1 no controlado.

**Desktop:** sin cambios de layout — texto a la izquierda, acciones a la derecha, fila única (ya funcionaba así, solo cambiaron los colores).

## 8. Verificación

- **Overflow horizontal:** 0px en 375/430/768/1024/1280/1440, verificado en `/`, `/web-para-empresas`, `/soluciones`, `/soluciones/visibilidad`, `/soluciones/campanas`, `/soluciones/conversion`, `/como-trabajamos`.
- **Focus visible:** confirmado por navegación de teclado (Tab) — anillo azul 3px sólido.
- **`/diagnostico`:** verificado visualmente sin cambios (morado/naranja/Outfit intactos).
- **`Hero.tsx` de HOME:** no editado; su botón "Analizar mi proyecto" adopta el nuevo azul automáticamente por depender del token global (comportamiento esperado y aceptado explícitamente en el brief).
- **Build de producción:** `pnpm build` → PASS.

## 9. Archivos modificados

- `src/app/styles/iorana-design-tokens.css`
- `src/app/globals.css`
- `src/components/CookieConsent.tsx`
- `src/app/(landings)/soluciones/components/Hero.tsx`
- `src/app/(landings)/soluciones/visibilidad/components/Hero.tsx`
- `src/app/(landings)/soluciones/campanas/components/Hero.tsx`
- `src/app/(landings)/soluciones/conversion/components/Hero.tsx`
- `src/app/(landings)/como-trabajamos/components/Hero.tsx`
- `src/app/(landings)/como-trabajamos/components/CTAFinal.tsx`
- `src/app/(landings)/home/components/PorDondeEmpezar.tsx`
- `src/app/(landings)/soluciones/conversion/components/PorDondeEmpezar.tsx`
- `src/app/(landings)/soluciones/campanas/components/PorDondeEmpezar.tsx`
- `src/app/(landings)/soluciones/visibilidad/components/QueNecesitasMejorar.tsx`
- `src/app/(landings)/soluciones/components/Diagnostico.tsx`
- `src/app/(landings)/web-para-empresas/components/Header.tsx`
- `src/app/(landings)/web-para-empresas/components/Pricing.tsx`

**No modificados (por decisión explícita):** `src/app/(landings)/home/components/Hero.tsx`, todo `src/app/diagnostico/**`.

## 10. Pendiente fuera de alcance (no implementado ahora)

- `/diagnostico`: sigue como sistema de marca propio (Outfit, morado/naranja, `LandingCtaButton`, `landingTheme`). Deferred, tal como pidió el brief.
- Colores de grises hardcodeados sin token equivalente (`#666`, `#999`, `#ccc`, `#333`, `#eee` de CookieConsent) fueron todos mapeados a `var(--io-text)` / `var(--io-text-muted)` / `var(--io-border)` según el caso — no quedó ninguno sin resolver dentro de este componente.
- `boxShadow` hardcodeado en `FAQForm.tsx` (coincide en valor con el token pero no deriva de él) — no estaba en el alcance de este brief de implementación, se deja anotado para una futura pasada de limpieza cosmética.
