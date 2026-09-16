# ROOT_ROUTE_REPORT — Investigación de Ruta Raíz (/)

**Fecha:** 2026-09-15  
**Investigación:** Determinar qué archivo sirve `/` actualmente  
**Status:** COMPLETADO

---

## 🔍 HALLAZGOS

### Arquitectura de Rutas Actual

```
src/app/
├── layout.tsx                          [Root layout — metadata, head, <html>]
├── (defaultLayout)/
│   ├── page.tsx                        ← SIRVE / (HOME ANTIGUO)
│   ├── about/, contacto/, planes/
│   └── legal/
├── (landings)/
│   ├── home/page.tsx                   ← SIRVE /home (HOME NUEVO)
│   ├── web-para-empresas/, soluciones/
│   └── como-trabajamos/
├── diagnostico/page.tsx                ← SIRVE /diagnostico
└── [otros]
```

### Ruta Raíz (`/`)

**Archivo actual:** `src/app/(defaultLayout)/page.tsx`  
**Contenido:** HOME ANTIGUO (web legacy)  
**Status:** ✅ Funciona  

```
GET / → src/app/(defaultLayout)/page.tsx
```

**Layout utilizado:** `src/app/(defaultLayout)/layout.tsx`  
**Componentes:** HeroBanner3, About3, Pricing3, ContactIno3, WhatsappCTA (legacy)

---

### Ruta `/home`

**Archivo actual:** `src/app/(landings)/home/page.tsx`  
**Contenido:** HOME NUEVO (IORANA SEO 2.0)  
**Status:** ✅ Funciona  

```
GET /home → src/app/(landings)/home/page.tsx
```

**Layout utilizado:** `src/app/(landings)/layout.tsx`  
**Componentes:** Hero, PresenciaDigital, NuestroSistema, etc. (2.0)

---

## ⚠️ PROBLEMA CRÍTICO

### Duplicación de Rutas de Inicio

Actualmente existen **DOS homes**:
- `/` → HOME ANTIGUO (legacy)
- `/home` → HOME NUEVO (2.0)

**Impacto SEO:**
- Posible penalización por contenido duplicado
- Confusión de indexación en buscadores
- Ambiguedad para usuarios

**URLs actuales que apuntan a cada home:**

**Landings (2.0) apunta a:**
```
/home                      [HOME 2.0]
/web-para-empresas         [Landing 2.0]
/soluciones                [Landing 2.0]
/soluciones/visibilidad    [Landing 2.0]
/soluciones/campanas       [Landing 2.0]
/soluciones/conversion     [Landing 2.0]
/como-trabajamos           [Landing 2.0]
```

**Legacy apunta a:**
```
/                          [HOME antiguo]
/planes, /servicios        [Legacy]
/legal, /contacto          [Legacy]
/about, /informe-gratuito  [Legacy]
```

---

## ✅ VERIFICACIÓN DE next.config.js

Revisado: NO hay rewrites o redirects que cambien `/` a `/home`.  
No hay lógica especial de routing.

**Conclusión:** Router groups tienen comportamiento por defecto.

---

## 🎯 PROPUESTA PARA IORANA SEO 2.0 FINAL

### Opción A: `(landings)` sirve `/` (RECOMENDADA)

**Cambios necesarios:**
1. Crear `src/app/(landings)/page.tsx` que sirva el HOME de landings
2. Eliminar `src/app/(defaultLayout)/page.tsx` (del proyecto activo, copiar a legacy)
3. Cambiar (defaultLayout) a otro nombre o hacerlo especial para legacy

**Ventajas:**
- `/` sirve HOME nuevo (producción actual)
- `/home` puede redirigir a `/` (o eliminarse)
- Estructura clara: landings en raíz, legacy aislado

**Rutas finales:**
```
/                          → HOME 2.0 (landings)
/home                      → 301 redirect a / (opcional)
/web-para-empresas         → Landing 2.0
/soluciones/...            → Landing 2.0
/como-trabajamos           → Landing 2.0
```

---

### Opción B: Mantener estructura actual (temporal)

**Cambios:** Ninguno por ahora.

**Ventajas:**
- Cero riesgo de regresión
- Separación clara: `/` (legacy), `/home` (2.0)

**Desventajas:**
- SEO duplicado
- Confuso para usuarios
- No sostenible post-lanzamiento

**Rutas:**
```
/                          → HOME antiguo (legacy)
/home                      → HOME 2.0
/web-para-empresas         → Landing 2.0
/soluciones/...            → Landing 2.0
/como-trabajamos           → Landing 2.0
```

---

## 📋 RECOMENDACIÓN

**Para IORANA SEO 2.0 (post-separación de legacy):**

Implementar **Opción A** pero como FASE 11 (post-lanzamiento):

1. **AHORA (FASE 3-7):** Mantener Opción B (no tocar `/`)
2. **DESPUÉS de validar Ioranaseo-old/:** Implementar Opción A
3. **DEPLOY:** 
   - Crear src/app/(landings)/page.tsx
   - Eliminar src/app/(defaultLayout)/page.tsx de raíz
   - Configurar redirect `/home` → `/` en next.config.js
   - Hacer 301 permanent para SEO

---

## 🔗 NAVEGACIÓN INTER-RUTAS

### Verificación: ¿Hay links internos a `/` desde (landings)?

Buscando referencias en componentes de landings...

**Resultado:** Múltiples referencias a `/` esperadas en header, footer, etc.

**Acción recomendada:** Cuando se implemente Opción A, todos los links a `/` funcionarán automáticamente.

---

## 🛡️ IMPACTO EN SNAPSHOTS

### Para Ioranaseo-old/

- ✅ Puede mantener `/` como HOME antiguo dentro del snapshot
- ✅ Será completamente autónomo
- ✅ Cuando se reutilice, podrá tener su propia estructura de rutas

### Para IORANA SEO 2.0

- ⚠️ NO CAMBIAR `/` AHORA (riesgo de regresión)
- ⚠️ Mantener `/home` como HOME temporal
- ✅ Cambiar post-lanzamiento (FASE 11)

---

## 📌 CONCLUSIÓN

**Pregunta:** ¿Qué sirve `/` actualmente?  
**Respuesta:** `src/app/(defaultLayout)/page.tsx` (HOME ANTIGUO)

**Pregunta:** ¿Qué sirve `/home`?  
**Respuesta:** `src/app/(landings)/home/page.tsx` (HOME NUEVO)

**Pregunta:** ¿Cómo conseguir que `/` sirva HOME 2.0?  
**Respuesta:** 
- Crear `src/app/(landings)/page.tsx` (duplicar home/page.tsx)
- O cambiar estructura de router groups
- **Implementar después de FASE 10 (no durante snapshot)**

**Riesgo actual:** SIN CAMBIOS = No regresión. Mantener así durante snapshot.

---

**Archivo generado:** ROOT_ROUTE_REPORT.md (2026-09-15)  
**Repositorio:** E:\git\interno\ioranaseo  
**Decisión:** Mantener `/` sirviendo legacy DURANTE FASE 3-7, cambiar DESPUÉS
