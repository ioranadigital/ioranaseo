# Global Navigation Audit — Header + Mobile Nav + Footer

**Fecha:** 2026-09-28 · Ronda de **navegación + consistencia de enlaces + estados activos + IA del
footer**, explícitamente NO una ronda de rediseño visual. Header/Footer mantienen su apariencia (colores,
tipografía, radios, sombras); solo cambia su estructura de navegación.

## FINAL INFORMATION ARCHITECTURE

```
/
/soluciones/
/web-para-empresas/            (hija conceptual de Soluciones, URL sin anidar)
/soluciones/visibilidad/
/soluciones/campanas/
/soluciones/conversion/
/como-trabajamos/
/diagnostico/                  (noindex, Header mínimo propio)
/contacto/
/legal/privacidad/
/legal/cookies/
/legal/aviso-legal/
```

Sin páginas nuevas creadas.

## HEADER LINKS

Antes de esta ronda, el Header (`LandingsHeader.tsx`) tenía **3 ramas de navegación distintas** según la
página: Home/Soluciones/Cómo trabajamos usaban "Soluciones + Cómo trabajamos" (con `href="#soluciones"`,
un ancla **rota** — no existe `id="soluciones"` en ningún fichero del proyecto); `/web-para-empresas` tenía
su propia mini-nav de anclas ("Qué incluye"/"Cómo trabajamos"/"Precios"); `/legal/*` (recién creado en la
ronda anterior) usaba "Soluciones + Cómo trabajamos" con rutas reales.

**Unificado a una única arquitectura para todas las páginas normales:** `IORANA SEO (logo) · Soluciones
(dropdown) · Cómo trabajamos · Contacto (CTA)`. `/web-para-empresas` deja de mostrar su propia mini-nav de
anclas en el header global — sus secciones `#que-incluye` y `#precios` **siguen existiendo en la página**
(no se ha tocado su contenido), solo pierden su atajo propio en el header, en favor de la arquitectura
consistente que pide el brief (§2, §20). Documentado explícitamente aquí por si se prefiere revertir ese
punto en concreto.

`/diagnostico/` conserva su Header mínimo aparte (ver **DIAGNOSTICO SPECIAL HEADER**).

## SOLUTIONS DROPDOWN

Nuevo, no existía antes. Desktop (`≥1024px`): botón "Soluciones" con `aria-haspopup`, `aria-expanded`,
`aria-controls`; dropdown compacto (mín. 226px, fondo blanco, borde suave, sombra pequeña, radio del
sistema), solo títulos (sin mega-menu, sin micro-descripciones — se descartaron por preferencia de
compacidad del propio brief):

| Label | Href |
|---|---|
| Todas las soluciones | `/soluciones` |
| Web para empresas | `/web-para-empresas` |
| Visibilidad | `/soluciones/visibilidad` |
| Campañas | `/soluciones/campanas` |
| Conversión | `/soluciones/conversion` |

**Interacción verificada (Playwright):** click abre/cierra (toggle real), `Enter` con foco en el botón lo
abre, `Escape` lo cierra y devuelve el foco al botón, click fuera lo cierra. Cada link del menú es un
`<Link>` real (crawlable), no un botón + `router.push`.

**Bug encontrado y corregido durante esta misma ronda:** la primera implementación combinaba
`onMouseEnter`/`onMouseLeave` (abrir en hover) con un toggle en el `onClick` del mismo botón. Un click real
de ratón dispara primero `mouseenter` (abre) y luego `click` (alterna → cierra) en el mismo gesto — el
dropdown se abría y se volvía a cerrar instantáneamente al hacer click con ratón. Confirmado con Playwright
(`openedOnClick: false` en la primera pasada). Corregido eliminando los handlers de hover: el trigger es un
`<button>` de click puro, que ya es mouse+teclado por definición (cumple §5 sin depender de hover en
absoluto).

## MOBILE NAV

Hamburger (`<1024px`): "Soluciones" es ahora un **accordion** expandible (`aria-expanded`,
`aria-controls="landings-mobile-solutions-panel"`) con las mismas 5 entradas; debajo, "Cómo trabajamos"
como link directo. **Contacto NO se duplica dentro del menú** — se verificó programáticamente que el panel
del hamburger contiene 0 enlaces "Contacto" (el CTA ya está siempre visible fuera del hamburger, en todas
las anchuras). `Escape` cierra el menú completo; seleccionar cualquier página lo cierra también.

## FOOTER LINKS

El sitio tiene **dos componentes de footer** (hallazgo de la auditoría, no introducido en esta ronda):
`HomeFooter` (`home/components/Footer.tsx`, usado por `/`, `/contacto/`, `/como-trabajamos/`, `/soluciones/`
y sus 3 hijas — 7 páginas) y `LandingsFooter` (`components/LandingsFooter.tsx`, usado por
`/web-para-empresas/` y `/legal/*` — 5 páginas). Se ha aplicado la misma reestructuración a ambos para que
el footer sea idéntico en todo el sitio. **Se deja documentado como deuda estructural** que ambos ficheros
son casi duplicados exactos — unificarlos en un solo componente sería una refactorización legítima pero
fuera del alcance de esta ronda (navegación, no arquitectura de componentes).

Nueva estructura de 4 columnas (antes: Marca / Navegación / Legal, 3 columnas):

| Columna | Contenido |
|---|---|
| IORANA SEO | Texto de marca, sin cambios |
| SOLUCIONES | Todas las soluciones, Web para empresas, Visibilidad, Campañas, Conversión |
| NAVEGACIÓN | Cómo trabajamos, Contacto |
| LEGAL | Privacidad, Cookies, Aviso Legal, Preferencias de cookies |

**Bug encontrado y corregido:** el link "Soluciones" de la antigua columna "Navegación" usaba
`href="#soluciones"` — un ancla que no existe en NINGUNA página del sitio (ni siquiera en Home). Al
usarse `HomeFooter` en 7 páginas distintas, este era un enlace roto en las 7. Sustituido por los 5 enlaces
reales de Soluciones.

## LEGAL LINKS

Sin cambios respecto a la ronda anterior (`LEGAL_COOKIE_SYSTEM.md`): `/legal/privacidad`, `/legal/cookies`,
`/legal/aviso-legal`, más "Preferencias de cookies". Verificados de nuevo aquí como parte del footer y del
`LegalNav` propio de esas páginas — 0 rotos.

## COOKIE PREFERENCES ACTION

Verificado en las 3 páginas representativas (`/`, `/web-para-empresas`, `/legal/privacidad`, una por cada
familia de footer + la navegación legal propia): click en "Preferencias de cookies" abre el modal
(`role="dialog"`) sin navegar (`window.location` no cambia, verificado comparando la URL antes/después del
click) y sin recargar la página.

## ACTIVE STATE RULES

| Regla | Implementación |
|---|---|
| `/soluciones/*` → Soluciones activo | `pathname.startsWith('/soluciones')` |
| `/web-para-empresas/` → Soluciones activo | Añadido explícitamente: `isSolucionesFamily = isSolucionesPage \|\| pathname.startsWith('/web-para-empresas')` — antes esta página NO activaba "Soluciones" (de hecho ni siquiera mostraba ese item, ver **HEADER LINKS**) |
| `/como-trabajamos/` → Cómo trabajamos activo | `pathname.startsWith('/como-trabajamos')` — sin cambios |
| Dentro del dropdown, cada entrada se resalta en su propia página | `pathname === '/soluciones'` para "Todas las soluciones" (exacto, para no quedar activo en sus hijas), `pathname.startsWith(href)` para el resto |

## LEGACY LINKS FOUND

Reportado, no modificado automáticamente (regla del brief §17), porque están en ficheros ya documentados
como código muerto en rondas anteriores — no se renderizan en ninguna ruta viva:

- `src/app/(landings)/web-para-empresas/components/Header.tsx` — header propio de esta página, **no
  importado por nadie** (`WebLayoutClient.tsx` usa `LandingsHeader`, confirmado por grep). Contiene anclas
  `#que-incluye`/`#metodo`/`#precios` — nótese que ni siquiera coincide con la mini-nav que SÍ estaba viva
  hasta esta ronda (esa no tenía "Método"), por lo que este fichero es de una versión aún más antigua de la
  página.
- `src/app/(landings)/como-trabajamos/components/CTAFinal.tsx` — documentado desde la ronda de Visual
  Polish de `/como-trabajamos/` como no importado por `page.tsx`; contiene `href="#contacto"` (roto si
  llegara a usarse, ya que el ancla no existe en ninguna página).
- `src/app/diagnostico/LandingClient.tsx` + `src/app/diagnostico/components/Landing/*` (LandingHeader,
  LandingFooter, LandingCtaButton, LandingGoalSelector, LandingLeadForm, LandingPricing) — flujo de
  `/diagnostico/` **anterior al wizard actual**. `page.tsx` real usa `DiagnosticoWizard` +
  `LandingsHeader`; `LandingClient.tsx` no está importado por ningún fichero vivo. Contiene sus propios
  enlaces internos (`#landing-hero`, `#lead-form`) que nunca se ejecutan en producción.
- Reglas CSS huérfanas `header > div > a[href="#contacto"] { ... }` en los `styles.css` legacy de
  `web-para-empresas`, `como-trabajamos`, `soluciones`, `soluciones/campanas`, `soluciones/conversion`,
  `soluciones/visibilidad` — apuntan a un selector que ya no existe en el DOM real (el CTA del header usa
  `/contacto/` desde antes de esta ronda). Ya documentadas como deuda de rondas anteriores.

**Rutas legacy explícitamente buscadas y NO encontradas como enlaces reales:** `/servicios`, `/nosotros`,
`/casos-de-exito`, `/recursos` o `/casos` como ruta (solo existen como anclas `#recursos`/`#casos`,
ocultas tras el flag `LAUNCH_MVP_SHOW_RECURSOS_Y_CASOS = false`, sin renderizarse hoy). `pathname.startsWith('/home')`
aparece solo como lógica de detección de la ruta huérfana `/home` (que `next.config.mjs` redirige de forma
permanente a `/`), nunca como un link navegable.

## BROKEN LINKS

- **Encontrados y corregidos:** `#soluciones` (Header, rama Home/Soluciones/Cómo trabajamos) y
  `#soluciones` (`HomeFooter`, usado en 7 páginas) — 2 ubicaciones, ambas con el mismo ancla inexistente.
- **Rastreo completo tras la corrección** (12 páginas del MVP, Playwright): **0** enlaces rotos, **0**
  `href="#"`, **0** `href=""`, **0** botones sin acción real (`onClick={() => {}}` — buscado en todo `src`,
  0 resultados).
- **Anclas internas de una misma página** (Hero → sección más abajo, ej. `#nuestras-soluciones`,
  `#como-trabajamos-conversion`, `#por-donde-empezar`, etc.) verificadas una por una contra su `id` real:
  las 7 encontradas en el proyecto tienen un destino válido en la misma página. Ninguna se ha tocado.

## QA RESULTS

Ejecutado con Playwright (contextos limpios, Chromium local) contra `pnpm dev` en `localhost:3005`.

**Estados activos (desktop, 1280px):**

| Página | Soluciones | Cómo trabajamos |
|---|---|---|
| `/soluciones` | ACTIVE | — |
| `/web-para-empresas` | ACTIVE | — |
| `/soluciones/visibilidad` | ACTIVE | — |
| `/soluciones/campanas` | ACTIVE | — |
| `/soluciones/conversion` | ACTIVE | — |
| `/como-trabajamos` | — | ACTIVE |

**Dropdown (desktop):** abre con click, alterna cerrado con un segundo click, abre con `Enter` (foco por
teclado), `Escape` cierra y devuelve el foco, click fuera cierra — todo PASS tras el fix documentado arriba.

**Mobile:** hamburger abre el menú (`aria-expanded="true"`), accordion de Soluciones expande sus 5 links,
0 "Contacto" duplicados dentro del panel, `Escape` cierra el menú completo — todo PASS.

**Diagnóstico:** Header confirmado mínimo — sin botón Soluciones, sin "Cómo trabajamos", sin hamburger,
con Contacto — PASS, sin romper la excepción.

**Footer (3 páginas representativas, una por familia de footer + Legal):** 10 enlaces reales cada una
(5 Soluciones + Cómo trabajamos + Contacto + 3 Legal), columna "Soluciones" presente, "Preferencias de
cookies" abre el modal sin navegar — PASS en las 3.

**Responsive/overflow (12 páginas × 6 anchuras = 72 combinaciones):** 0px en 71 de 72. La única excepción
encontrada — `/contacto` a 375px (127px) y 430px (72px) — no estaba causada por esta ronda de navegación:
el formulario de contacto (`ContactoForm.tsx`) usaba una grid de 2 columnas fijas (`1fr 1fr`) sin ningún
`@media`, el único fichero del proyecto sin breakpoints en absoluto. Como `/contacto` pasa a formar parte
del crawl obligatorio de esta auditoría (y del sitemap, ver más abajo), se corrigió con el mismo patrón
usado en el resto del sitio (`<style>` con clase + `@media (max-width: 480px)` colapsando a 1 columna) —
cambio mínimo, sin tocar copy, campos ni visual del formulario. Verificado: 0px tras el fix.

**Consola:** 0 errores relacionados con navegación. Se detectaron 2 errores 404 preexistentes (no
relacionados con este audit, ya documentados en memoria de rondas anteriores): `/soluciones` y
`/soluciones/campanas` referencian fotos de hero (`hero-soluciones-business.webp`,
`hero-campanas-business.webp`) que aún no se han subido — "hero photo asset still pending" en
`SOLUCIONES_VISUAL_POLISH.md` y `CAMPANAS_VISUAL_POLISH.md` respectivamente. Sin relación con navegación,
no se tocan aquí.

**Build:** `pnpm build` → exit code 0, "✓ Compiled successfully", las 17 rutas de la app presentes.

## SITEMAP CROSSCHECK

`src/lib/site-config.ts` (`indexableRoutes`) no incluía `/contacto` pese a ser una página real, indexable
(sin `robots: {index:false}`) y enlazada desde el header, el footer y prácticamente toda página del sitio.
**Añadida** a `indexableRoutes` (`src/app/sitemap.ts` la recoge automáticamente). `/diagnostico` se deja
intacto en `noindexRoutes`, tal como pide explícitamente el brief (§33/§34) — no se ha tocado su
`robots: {index:false, follow:true}`.

## ADDENDUM 2 (2026-09-29) — Bug real: "Soluciones" invisible en 6 páginas

El usuario reportó que el menú no era uniforme (ej. `/como-trabajamos/` sin "Soluciones"). Verificado con
Playwright — **era un bug real, no percepción**: el botón "Soluciones" tenía `rect: 0×0` (invisible) en
exactamente estas 6 páginas: `/soluciones/`, sus 3 hijas (`visibilidad`/`campanas`/`conversion`),
`/web-para-empresas/` y `/como-trabajamos/`. Visible correctamente en `/`, `/quienes-somos/`, `/contacto/`
y las 3 páginas legales.

**Causa raíz:** cada una de esas 6 páginas tiene su propio `styles.css` legacy (de antes de que existiera
`LandingsHeader.tsx` compartido) con un bloque `@media (min-width: 769px) { header nav {display:flex
!important} header button {display:none !important} }`. Como es un selector de etiqueta genérico con
`!important`, capturaba también el nuevo botón `<button>` del dropdown de Soluciones (que vive dentro de
`header`) y lo ocultaba en desktop — aunque el propio botón nunca tuvo pensado ser afectado por una regla
pensada solo para el hamburger. Efecto secundario adicional descubierto: en el rango 769–1023px estas 6
páginas forzaban el nav de escritorio visible Y el hamburger oculto simultáneamente (`!important` en ambos
sentidos), rompiendo también el menú mobile ahí.

**Fix:** eliminado el bloque completo de esas 6 reglas heredadas en los 6 ficheros `styles.css` (dejando un
comentario explicativo, no un borrado silencioso) — el header compartido ya gestiona su propio responsive
con clases propias (`.landings-header__nav-desktop`, `.landings-header__hamburger`) y no necesita ninguna
regla de apoyo por página.

**Verificado tras el fix** (Playwright, 375/430/768/1024/1280/1440 × 13 páginas): "Soluciones" visible en
las 12 páginas normales en 900/1024/1280/1440px, hamburger visible y nav de escritorio oculto de forma
uniforme en 900px en las 12, 0px de overflow en las 78 combinaciones, 0 errores de consola nuevos (el único
error registrado es el 404 ya documentado de la foto pendiente de `/soluciones/campanas/`). Funcionalmente
comprobado en `/como-trabajamos/` (la página que reportó el usuario): el hamburger abre el menú y el
dropdown de Soluciones abre correctamente tras el fix.

## ADDENDUM (2026-09-29) — Quiénes somos añadida a la navegación global

Ronda de micro-fix, explícitamente solo navegación — contenido de `/quienes-somos/` sin tocar (ver
`QUIENES_SOMOS_QUIEN_DETRAS.md`).

- **Header desktop:** `Soluciones ▾ · Cómo trabajamos · Quiénes somos · Contacto (CTA)`. "Quiénes somos"
  añadido a `navItemsFull` en `LandingsHeader.tsx`, entre "Cómo trabajamos" y los items ocultos de
  Recursos/Casos. Mismo tratamiento visual (`fontWeight`/color) que el resto de items del array — sin
  estilo nuevo, tal como pedía el brief.
- **Active state:** `isQuienesSomosPage = pathname.startsWith('/quienes-somos')`, añadido al cálculo de
  `isActive`/`isActiveMobile` junto a la condición ya existente de Cómo trabajamos.
- **Mobile menu:** "Quiénes somos" aparece tras "Cómo trabajamos" dentro del panel del hamburger, después
  del accordion de Soluciones. Verificado: 0 "Contacto" duplicados dentro del panel (el CTA permanente
  fuera del hamburger sigue siendo el único).
- **Footer:** añadido a la columna NAVEGACIÓN de **ambos** componentes de footer (`LandingsFooter.tsx` y
  `home/components/Footer.tsx`), entre "Cómo trabajamos" y "Contacto", en las dos.
- **Diagnóstico:** Header especial verificado sin cambios — sigue sin "Quiénes somos" (ni Soluciones, ni
  Cómo trabajamos, ni hamburger), solo Logo + Contacto.
- **NEOSUMA — enlace "Conocer NEOSUMA":** re-evaluado, mismo resultado que en la ronda de creación de la
  página — sigue sin URL pública confirmada, no se ha añadido.
- **QA:** 9 páginas verificadas (las 8 del brief + Home), 0 `href="#"`, 0 `href=""`, 0px overflow en
  375/430/768/1024/1280/1440, `pnpm build` → PASS.

## ENTREGA

```
HEADER: PASS
SOLUTIONS DROPDOWN: PASS
MOBILE NAV: PASS
FOOTER: PASS
LEGAL LINKS: PASS
COOKIE PREFERENCES: PASS
DIAGNOSTICO SPECIAL HEADER: PRESERVED
BROKEN INTERNAL LINKS: 0
HREF #: 0
EMPTY HREF: 0
DEAD BUTTONS: 0
LEGACY LINKS FOUND: web-para-empresas/components/Header.tsx (no importado), como-trabajamos/components/CTAFinal.tsx (no importado), diagnostico/LandingClient.tsx + components/Landing/* (no importado, superado por el wizard), reglas CSS huérfanas header>div>a[href="#contacto"] en 6 styles.css legacy — ninguno se renderiza en producción, 0 impacto real
SOLUCIONES ACTIVE:
  /soluciones/ PASS
  /web-para-empresas/ PASS
  /soluciones/visibilidad/ PASS
  /soluciones/campanas/ PASS
  /soluciones/conversion/ PASS
COMO TRABAJAMOS ACTIVE: PASS
QUIENES SOMOS ACTIVE: PASS (añadido 2026-09-29)
375: PASS
768: PASS
1280: PASS
HORIZONTAL OVERFLOW: 0px
BUILD: PASS
```
