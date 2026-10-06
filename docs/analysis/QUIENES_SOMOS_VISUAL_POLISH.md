# /quienes-somos/ — Complete Page Visual Polish

**Fecha:** 2026-09-29 · Construida alrededor del bloque "Quién está detrás" (ya aprobado, **sin tocar**)
una página completa: breve, humana, editorial, distinta de las landings de Soluciones.

## PAGE ROLE

`/quienes-somos/` no vende una solución concreta — explica qué es IORANA SEO, cómo trabaja y quién hay
detrás, cerrando con una invitación a contactar. No es una landing de conversión de servicio (no tiene
pricing, ni FAQ, ni casos de éxito) — es la página institucional/editorial del sitio.

## VISUAL DIRECTION

- **Hero deliberadamente sobrio:** layout centrado a una columna (todas las demás Heroes del sitio usan
  split copy-izquierda/visual-derecha con mockups de navegador/dashboard) — aquí el único elemento visual
  es un flujo conceptual de 3 nodos pequeños (Negocio → Estrategia → Oportunidades) conectados por flechas
  finas, sin foto, sin dashboard.
- **"Qué es IORANA":** diagrama conceptual compacto (4 chips — Web/Visibilidad/Campañas/Conversión —
  convergiendo en un nodo "Captación" y de ahí a "Oportunidades"), explícitamente NO 4 service cards
  grandes y NO una copia del pipeline de Home.
- **Principios:** 3 elementos horizontales compactos (icono + título + 1 frase), acento de color sutil por
  principio (Claridad = azul `--io-action`, Prioridad = peach `--io-accent`, Mejora continua = verde suave
  `#34A86A`, reutilizado del acento ya usado en `/soluciones/conversion/`) — NO cards altas.
- **CTA final:** cierre editorial centrado con fondo degradado muy sutil, un único botón primario y un
  enlace secundario de texto — explícitamente distinto del patrón FAQ+panel de diagnóstico que usan Home,
  Visibilidad, Campañas, Conversión y Cómo trabajamos.
- **Sin fotografías de equipo, sin stock photos, sin retratos** en ninguna sección.

## SECTION STRUCTURE

```
Header global
1. Hero — "Marketing digital pensado para negocios reales."
2. Qué es IORANA SEO — diagrama conceptual del sistema
3. Nuestra forma de trabajar — Claridad / Prioridad / Mejora continua
4. Quién está detrás — EXISTENTE, sin modificar (headline, copy, 5 especialidades, bloque NEOSUMA)
5. CTA final — "¿Hablamos de tu proyecto?"
Footer global
```

Sin FAQ, sin pricing, sin testimonios, sin casos, sin historia larga, sin perfiles de equipo — exactamente
la estructura de 6 bloques que pedía el brief, nada más.

## NEOSUMA RELATION

Sin cambios respecto a la versión ya aprobada: `QuienDetras.tsx` no se ha tocado. El bloque
"IORANA SEO forma parte de NEOSUMA" sigue siendo secundario (fondo apagado, acento peach, tipografía menor
que el resto de la página) y no se ha ampliado a una sección propia. El enlace "Conocer NEOSUMA →" sigue
sin añadirse — no existe URL pública confirmada en el proyecto (comprobado por tercera vez esta semana).

## NAVIGATION

Header y Footer globales sin cambios respecto a la ronda de navegación anterior — "Quiénes somos" ya
aparecía activo en el dropdown/nav y en el footer antes de esta ronda; esta ronda solo construyó el
contenido de la página que faltaba alrededor del bloque ya aprobado.

## RESPONSIVE

| Ancho | Overflow | Notas |
|---|---|---|
| 375 | 0px | Flujo del Hero envuelve en una fila compacta; diagrama de "Qué es IORANA" envuelve los 4 chips en 2 líneas; Principios en stack de 3 |
| 430 | 0px | igual |
| 768 | 0px | Principios en fila de 3 |
| 1024 | 0px | composición completa |
| 1280 | 0px | composición completa |
| 1440 | 0px | igual |

- **Errores de consola:** 0 en las 6 anchuras.
- **Altura de página (1280):** 2792px — claramente más corta que `/web-para-empresas/` (4334px en la misma
  anchura), cumpliendo §27 del brief sin fijar un objetivo artificial.

## BROKEN LINKS

Auditados: Hero (Hablar con nosotros → `/contacto/`, Ver nuestras soluciones → `/soluciones/`), CTA final
(Contacto → `/contacto/`, Empezar diagnóstico → `/diagnostico/`), Header, Footer. **0 enlaces rotos, 0
`href="#"`, 0 `href=""`** — 19 enlaces totales en la página, todos a rutas reales.

## TECHNICAL NOTES

- Archivos nuevos: `Hero.tsx`, `QueEsIorana.tsx`, `Principios.tsx`, `CTAFinal.tsx`, todos con prefijo de
  clase propio (`qh-`, `qi-`, `qp-`, `qc-`), verificados sin colisión con el resto del sitio.
- `QuienDetras.tsx` (bloque aprobado) importado sin ninguna modificación.
- `page.tsx` actualizado para componer los 5 bloques en orden.
- Iconos Lucide ya usados en el proyecto o coherentes con su estilo: `Store`/`Compass`/`Sparkles` (Hero),
  `Globe`/`Search`/`Megaphone`/`Target`/`Sparkles` (Qué es IORANA), `Eye`/`Flag`/`RefreshCw` (Principios).
- Tokens: `--io-action`, `--io-action-hover`, `--io-accent` (`#F4A27C`), `--io-bg-soft`, `--io-border`, más
  un único acento puntual `#34A86A` (verde), ya usado en `/soluciones/conversion/` según memoria del
  proyecto — sin paleta nueva.
- **Observación menor, no un bug:** tanto el Hero como el bloque "Quién está detrás" usan el mismo eyebrow
  "Quiénes somos" — ambos textos vienen especificados verbatim en sus briefs respectivos (secciones 2 y 15
  de este brief), así que no se ha alterado ninguno para evitar la repetición; se señala por transparencia.

## ENTREGA

```
HERO: PASS
HERO DIFFERENTIATION: STRONG
WHAT IS IORANA: PASS
PRINCIPLES: PASS
WHO IS BEHIND: PASS
NEOSUMA: PASS
FINAL CTA: PASS
FAQ: 0
PERSONAL NAMES: 0
PERSONAL PHOTOS: 0
BROKEN LINKS: 0
375: PASS
768: PASS
1280: PASS
HORIZONTAL OVERFLOW: 0px
BUILD: PASS
PAGE STATUS: READY FOR VISUAL REVIEW
```
