# /quienes-somos/ — Bloque "Quién está detrás"

**Fecha:** 2026-09-29 · **Página nueva.** `/quienes-somos/` no existía en el proyecto (sin ruta, sin
referencias en ningún fichero) — se ha creado desde cero siguiendo el mismo patrón de scaffolding que el
resto de páginas del sitio (`layout.tsx` con metadata + `LayoutClient` con Header/Footer globales +
`page.tsx`), con **un único bloque** de contenido, tal como fija el tope de densidad del propio brief
("headline, 1 párrafo, 5 especialidades, bloque NEOSUMA. Nada más").

## IMPORTANTE — no wireada a la navegación

Esta página **no se ha añadido** al dropdown de Soluciones, al footer ni al sitemap
(`site-config.ts`). El `GLOBAL_NAVIGATION_AUDIT.md` (ronda anterior, mismo día) fijó la arquitectura final
como un conjunto cerrado de 12 páginas que no incluye `/quienes-somos/`; este brief tampoco pedía
integrarla en la navegación. Queda como página standalone, accesible solo por URL directa, hasta que se
decida cómo y dónde enlazarla (el propio brief solo especificaba este bloque, consistente con el patrón ya
usado en el sitio de construir páginas por fases — ver `/como-trabajamos/` en su momento).

## Archivos nuevos

- `src/app/(landings)/quienes-somos/layout.tsx` (metadata)
- `src/app/(landings)/quienes-somos/QuienesSomosLayoutClient.tsx` (Header global + Footer global, mismo
  patrón que el resto de páginas)
- `src/app/(landings)/quienes-somos/page.tsx`
- `src/app/(landings)/quienes-somos/components/QuienDetras.tsx`

## CONTENIDO

- **Título (H2):** "Quién está detrás"
- **Headline:** "Un equipo de especialistas, según lo que necesita cada proyecto."
- **Copy:** el texto exacto proporcionado en el brief, sin cambios.
- **5 áreas** en formato chip compacto (icono pequeño + label, no cards grandes): Estrategia digital
  (Compass), SEO y visibilidad (Search), Campañas (Megaphone), Analítica y conversión (BarChart3),
  Tecnología y automatización (Cog) — iconos Lucide, coherentes con los ya usados en el resto del sitio.
- **Bloque NEOSUMA**, deliberadamente secundario: fondo `var(--io-bg)` (más apagado que el blanco de la
  sección), borde suave, acento peach (`var(--io-accent)`) como barra fina de 3px a la izquierda, tipografía
  más pequeña (15px/13.5px vs 17px/15px del bloque principal) — no compite visualmente con IORANA SEO.
  Título "IORANA SEO forma parte de NEOSUMA" + copy exacto del brief.

## SIN NOMBRES NI FOTOS (verificado)

- 0 nombres propios, 0 cargos, 0 perfiles personales, 0 fotografías, 0 retratos, 0 biografías en todo el
  componente.
- Sin ilustración de equipo ficticio ni stock photos — los 5 chips icono+label son en sí mismos el único
  recurso visual, tal como permitía el propio brief ("Preferencia: small icon + label o compact chips").

## ENLACE "CONOCER NEOSUMA"

**No añadido.** Se comprobó si existe una URL pública confirmada de NEOSUMA: el repo
`E:\git\interno\neosuma.com` existe y su carpeta sugiere el dominio `neosuma.com`, pero no hay ninguna
confirmación explícita en el propio proyecto (su `.env.local`/`.env.example` solo definen
`NEXT_PUBLIC_BASE_URL=http://localhost:3008`, sin dominio de producción declarado). Siguiendo la regla
explícita del brief ("Si no está confirmada: NO inventar URL"), se ha omitido el enlace. Si el negocio
confirma la URL real, añadir un `<Link href="...">Conocer NEOSUMA →</Link>` dentro de `.qd-neosuma` es un
cambio de una línea.

## RESPONSIVE

| Ancho | Resultado | Notas |
|---|---|---|
| 375 | PASS | Chips en 2 columnas (`flex: 1 1 calc(50% - 5px)` bajo 430px), NEOSUMA debajo |
| 430 | PASS | igual que 375 |
| 768 | PASS | Chips en una fila (wrap natural) |
| 1024 | PASS | igual |
| 1280 | PASS | igual |
| 1440 | PASS | igual |

- **Overflow horizontal:** 0px en las seis anchuras.
- **Errores de consola:** 0.
- **Altura de página** (con Header+Footer globales, sin contenido adicional): 375: 1666px · 430: 1620px ·
  768: 1275px · 1024/1280/1440: 1105px — sección compacta, no genera una página excesivamente alta,
  conforme a §10/§11 del brief.

## MICRO-POLISH (2026-09-29) — spacing

Sección aprobada visualmente; único cambio pedido: más aire entre los chips de especialidades y el bloque
NEOSUMA. `.qd-areas { margin-bottom }` de `32px` → `44px` (+12px). Nada más tocado — headline, copy,
especialidades, iconos, colores, tipografía, layout general, footer y navbar sin cambios (confirmado por
`git status`: solo el directorio `quienes-somos/` aparece afectado).

Verificado (Playwright, las 6 anchuras): separación real entre `.qd-areas` y `.qd-neosuma` = 44px en
375/430/768/1024/1280/1440 (antes 32px); 0px overflow; 0 errores de consola; altura de la sección con
holgura moderada (375: 767px · 1280/1440: 623px, subida de ~12px respecto a la versión anterior — no
"excesivamente alta").

**Enlace "Conocer NEOSUMA":** re-evaluado una tercera vez, mismo resultado — sigue sin URL pública
confirmada en el proyecto, no se ha añadido.

## ENTREGA (versión inicial)

```
PERSONAL NAMES: 0
PERSONAL PHOTOS: 0
SPECIALIST AREAS: 5
NEOSUMA RELATION: PASS
MOBILE: PASS
BUILD: PASS
```

## ENTREGA (micro-polish spacing)

```
SPECIALTIES: PASS
NEOSUMA BLOCK: PASS
SPACING: PASS
NEOSUMA LINK: NOT USED
375: PASS
1280: PASS
BUILD: PASS
```
