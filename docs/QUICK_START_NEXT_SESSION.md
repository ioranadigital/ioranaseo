# Quick Start — Próxima Sesión (2026-09-21)

## Para Reanudar en 3 Días

### 1. Verificar Estado del Proyecto

```bash
cd E:\git\interno\ioranaseo

# Ver últimos commits
git log --oneline -5

# Ver cambios sin commitear
git status

# Leer documentación de esta sesión
cat docs/SESION_2026-09-18_CONTACTO_REDISENO.md
```

### 2. Iniciar Dev Server

```bash
# Asegurarse de que .env.local existe
ls -la .env.local

# Instalar dependencias (si es necesario)
pnpm install

# Iniciar servidor en puerto 3005
npm run dev

# Test: abrir en navegador
http://localhost:3005/contacto/
```

### 3. Testing del Formulario

```bash
# Test API endpoint
curl -X POST http://localhost:3005/api/contacto \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Test User",
    "email": "test@example.com",
    "empresa": "Test Co",
    "motivo": "necesito_web",
    "mensaje": "Test message",
    "privacidad": true
  }'

# Expected response:
# { "ok": true } ← Email debería enviarse a contacto@neosuma.com
```

### 4. Verificar Email Recibido

```
Revisar inbox de: contacto@neosuma.com
Buscar subject: "Nueva consulta: ..."
Verificar HTML format es correcto
```

### 5. Build & Deploy (si aplica)

```bash
# Clean build
pnpm build

# Expected: ✓ Compiled successfully

# Deploy a staging
# (Instructions en separate docs si existe)
```

---

## Archivos Clave

| Archivo | Propósito | Última Modificación |
|---------|-----------|-------------------|
| `src/app/(landings)/contacto/page.tsx` | Page metadata + wrapper | 2026-09-18 |
| `src/app/(landings)/contacto/ContactoClient.tsx` | 2-column layout | 2026-09-18 |
| `src/app/(landings)/contacto/components/ContactoForm.tsx` | Form fields + API call | 2026-09-18 |
| `src/app/api/contacto/route.ts` | Resend API handler | 2026-09-18 |
| `src/app/api/contacto/motivos.ts` | Motivos enum | 2026-09-18 |
| `.env.local` | API credentials | 2026-09-18 |

---

## Checklist Testing (cuando reanudes)

```
[ ] Dev server inicia sin errores
[ ] /contacto/ página carga correctamente
[ ] Formulario tiene todos los campos
[ ] Layout 2-columnas visible en desktop
[ ] Responsive en 375px/768px/1280px
[ ] Click "Enviar consulta" sin form data muestra errores
[ ] Email válido pasa validación
[ ] Motivo select tiene 7 opciones
[ ] Textarea contador funciona (0/600)
[ ] Privacy checkbox required
[ ] Submit button enabled
[ ] API /api/contacto responde POST
[ ] Email recibido en contacto@neosuma.com
[ ] HTML email formateado correctamente
[ ] Rate limiting funciona (intento 6 = 429)
[ ] Honeypot silencioso (website field)
```

---

## Problemas Comunes & Soluciones

### "Module not found: Can't resolve 'resend'"
```bash
pnpm add resend
pnpm install --force
```

### "EADDRINUSE: address already in use :::3005"
```bash
pkill -f "next dev"
npm run dev
```

### ".env.local not found"
```bash
# Debe existir en raíz de ioranaseo
ls E:\git\interno\ioranaseo\.env.local

# Si no existe:
# Ver SESION_2026-09-18_CONTACTO_REDISENO.md sección .env.local config
```

### "Build failed because of webpack errors"
```bash
rm -rf .next
pnpm build
```

### "Cannot find module 'next/dist/pages/_app'"
```bash
rm -rf node_modules .pnpm-store
pnpm install --force
npm run dev
```

---

## Notas Importantes para el Día 21

❗ **Email Destination:** Todos los emails → contacto@neosuma.com (NO cambiar)

❗ **API Key:** Compartida entre proyectos (master.env), NO rotar

❗ **Rate Limiting:** 5/IP/hora, en memoria (OK para dev, considerar Redis para prod)

❗ **Resend Dashboard:** Monitorear en https://resend.com (logs, bounces, etc.)

❗ **No tocar:** HOME, /soluciones/, /como-trabajamos/, Header, Footer, tokens

---

## Comandos Útiles Rápidos

```bash
# Iniciar servidor
npm run dev

# Build production
pnpm build

# Ver status git
git status

# Ver commits recientes
git log --oneline -5

# Ver archivos de /contacto
ls -R src/app/\(landings\)/contacto/

# Ver API route
cat src/app/api/contacto/route.ts

# Testear API POST
curl -X POST http://localhost:3005/api/contacto -H "Content-Type: application/json" -d '{"nombre":"Test","email":"test@example.com","empresa":"Test","motivo":"necesito_web","mensaje":"Test","privacidad":true}'

# Check node processes
ps aux | grep node

# Kill node processes
pkill -f "next dev"
```

---

**Estado Inicial:** ✅ Funcionando  
**Próxima Sesión:** 2026-09-21  
**Duración Estimada:** 2-3 horas (testing + deployment)
