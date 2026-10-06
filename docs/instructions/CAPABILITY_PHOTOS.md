# Fotografías de "Todo lo que necesitas para captar mejor" (Home)

**Estado:** PHOTO ASSETS REQUIRED — las 6 fotos aún no existen. La sección funciona con un placeholder
(degradado soft blue/peach + icono de la capacidad) hasta que se añadan los archivos.

## Rutas esperadas (locales, servidas desde `public/`)

| Capacidad | Archivo | Escena sugerida |
|---|---|---|
| Web y landing pages | `public/assets/img/home/capabilities/web-business.webp` | responsable de pequeño negocio (panadería, cafetería, tienda) trabajando en su local |
| SEO y SEO Local | `public/assets/img/home/capabilities/seo-business.webp` | propietario/a de negocio local (cafetería, floristería) con portátil |
| Google Maps | `public/assets/img/home/capabilities/maps-business.webp` | comercio físico real con su propietario/a (restaurante, cafetería, floristería) |
| Google Ads y Meta Ads | `public/assets/img/home/capabilities/ads-business.webp` | responsable de negocio trabajando con móvil / portátil |
| Analytics y medición | `public/assets/img/home/capabilities/analytics-business.webp` | persona o pequeño equipo revisando datos en portátil |
| CRO y mejora continua | `public/assets/img/home/capabilities/cro-business.webp` | persona trabajando con web / tablet / portátil |

## Requisitos
- WebP (o AVIF), luminosas, naturales, persona + entorno de pequeño negocio. Sin headshots, salas de reuniones ni fondos blancos.
- Proporción aproximada 5:4 (el componente declara 800×640) y < 150–180 KB por foto.
- Sin cifras, rankings ni reseñas visibles en la foto.
- El recorte se ajusta con `objectPosition` / `objectPositionMobile` en `CAPACIDADES`
  (`src/app/(landings)/home/components/TodoLoQueNecesitas.tsx`). Mantener la cara fuera de las zonas de las microcards.
- No usar imágenes externas en producción.
