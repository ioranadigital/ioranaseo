# 🚀 Deploy Guide - ioranaseo

## Archivos agregados
✅ `Dockerfile` - Multi-stage build para Next.js
✅ `.dockerignore` - Optimización de build
✅ `docker-compose.yml` - Deploy local con Docker Compose
✅ `.env.example` - Plantilla de variables

## Problema Resuelto
**Antes:**
- ❌ Falta Dockerfile → `ERROR: failed to read dockerfile: open Dockerfile: no such file or directory`
- ❌ NODE_ENV=production en build-time → No instala TypeScript/webpack necesarios

**Ahora:**
- ✅ Dockerfile multi-stage (builder + runtime)
- ✅ Build con NODE_ENV=development → instala devDependencies
- ✅ Runtime con NODE_ENV=production → imagen optimizada

## Cómo Desplegar

### Opción 1: Local con Docker Compose
```bash
cd E:\git\interno\ioranaseo
docker-compose up --build
```
Accede a: http://localhost:3005

### Opción 2: Coolify (localhost)
1. Ve a http://localhost:8000 (Coolify)
2. Configura las variables de entorno:
   - NODE_ENV: Dejar como "runtime only" (no en build-time)
   - PORT: 3005
3. El Dockerfile será usado automáticamente
4. Redeploy

### Opción 3: Línea de comandos
```bash
cd E:\git\interno\ioranaseo
docker build -t ioranaseo:latest .
docker run -p 3005:3005 ioranaseo:latest
```

## Variables de Entorno Requeridas
Crear `.env.local` con:
```env
NEXT_PUBLIC_SUPABASE_URL=https://zvehtloitnuglyjtxwye.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

## Health Check
El contenedor incluye health check automático. Verifica cada 30s.

## Troubleshooting

### Build falla: "Cannot find module TypeScript"
→ Asegurar que NODE_ENV=development en build-time en Coolify

### Puerto 3005 ya en uso
→ `docker ps` y `docker kill <container_id>` para detener

### Imagen muy grande
→ Usar multi-stage (ya implementado) - reduce ~500MB

---

**Última actualización:** 2026-07-03
**Status:** ✅ Ready to Deploy
