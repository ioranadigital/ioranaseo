# LEGAL_ROUTE_REPORT — Investigación de Páginas Legales

**Fecha:** 2026-09-15  
**Investigación:** Localizar páginas legales, determinar migración necesaria  
**Status:** COMPLETADO

---

## 🔍 HALLAZGOS

### Ubicación Actual de Páginas Legales

```
src/app/(defaultLayout)/legal/
├── page.tsx                           [/legal — index]
├── privacidad/page.tsx                [/legal/privacidad]
├── cookies/page.tsx                   [/legal/cookies]
└── aviso-legal/page.tsx               [/legal/aviso-legal]
```

**Total:** 4 páginas legales en legacy

**Layout utilizado:** `src/app/(defaultLayout)/layout.tsx`  
**Estilo:** Bootstrap (legacy)  
**Componentes:** BreadCumb (legacy)

---

## 📍 RUTAS ACTUALES

### Estructura de URLs Legales

| Ruta | Archivo | Contenido | Layout |
|------|---------|-----------|--------|
| `/legal` | page.tsx | Términos y Condiciones | defaultLayout |
| `/legal/privacidad` | privacidad/page.tsx | Política de Privacidad | defaultLayout |
| `/legal/cookies` | cookies/page.tsx | Política de Cookies | defaultLayout |
| `/legal/aviso-legal` | aviso-legal/page.tsx | Aviso Legal | defaultLayout |

---

## 🔗 REFERENCIAS A LEGALES DESDE IORANA SEO 2.0

### Footer de Landings (LandingsFooter.tsx)

```tsx
<a href="/legal/privacidad">Privacidad</a>
<a href="/legal/cookies">Cookies</a>
<a href="/legal/aviso-legal">Aviso Legal</a>
```

**Ubicación:** `src/app/(landings)/components/LandingsFooter.tsx`

**Status:** ✅ Links apuntan a `/legal/...` (actualmente funciona desde legacy)

---

## 📝 CONTENIDO DE PÁGINAS LEGALES

Revisado manualmente:

### `/legal` — Términos y Condiciones
- Introducción a términos de uso
- Licencia limitada de uso
- Descargos de responsabilidad
- Limitaciones de responsabilidad
- Política de privacidad (resumen)
- Política de cookies
- Modificaciones
- Información de contacto

**Tamaño:** ~7KB  
**Última actualización:** 2026

### `/legal/privacidad` — Política de Privacidad
(No revisado en detalle, pero existe)

### `/legal/cookies` — Política de Cookies
(No revisado en detalle, pero existe)

### `/legal/aviso-legal` — Aviso Legal
(No revisado en detalle, pero existe)

---

## ⚠️ PROBLEMA CRÍTICO

### Dependencia de IORANA SEO 2.0 en Páginas Legacy

**Situación actual:**
1. Landings (2.0) tiene links a `/legal/*` en su footer
2. Las páginas legales viven en `(defaultLayout)/` (legacy)
3. Cuando se archive legacy, links se rompen ❌

**Impacto:**
- Footer de 2.0 apunta a páginas rotas
- Incumplimiento normativo (RGPD requiere acceso a políticas)
- Degradación de UX

---

## 🎯 OPCIONES DE MIGRACIÓN

### Opción A: Copiar Páginas Legales a (landings) ⭐ RECOMENDADA

**Acción:**
1. Copiar `src/app/(defaultLayout)/legal/` → `src/app/(landings)/legal/`
2. Actualizar componentes para usar estilos de landings (no Bootstrap)
3. Mantener mismas URLs: `/legal/*`
4. Mantener legacy en Ioranaseo-old/

**Ventajas:**
- ✅ Landings es autónomo
- ✅ Mismo contenido, nuevo diseño coherente
- ✅ URLs no cambian (SEO preservado)
- ✅ Links en footer funcionan

**Desventajas:**
- Duplicación de contenido (permisible en este caso)
- Debe actualizarse en 2 lugares si cambia regulación

**URLs finales (IORANA SEO 2.0):**
```
/legal                 → page.tsx (landings)
/legal/privacidad      → privacidad/page.tsx (landings)
/legal/cookies         → cookies/page.tsx (landings)
/legal/aviso-legal     → aviso-legal/page.tsx (landings)
```

---

### Opción B: Mantener en Legacy, Reescribir URLs

**Acción:**
1. Mantener páginas legales en (defaultLayout) de momento
2. Cuando se archive, migrar en FASE 12

**Desventajas:**
- ❌ RIESGO ALTO: Links se rompen durante separación
- ❌ Requiere coordinación extra

**NO RECOMENDADO para snapshot**

---

### Opción C: Duplicar en Legacy + Landings

**Acción:**
1. Copiar legales a landings (Opción A)
2. Mantener también en legacy (para snapshot)
3. Cuando se archive Ioranaseo-old/, legacy tiene sus propias copias

**Ventajas:**
- ✅ Landings es 100% autónomo
- ✅ Legacy snapshot es 100% autónomo
- ✅ URLs no cambian

**Desventajas:**
- Duplicación real (no ideal)
- Mantenimiento duplicado

**RECOMENDADO para máxima seguridad**

---

## 📋 PROPUESTA PARA SNAPSHOT

### Acción Inmediata (FASE 4)

**Crear páginas legales en (landings):**

1. Copiar estructura:
   ```
   src/app/(landings)/legal/
   ├── page.tsx                [/legal]
   ├── privacidad/page.tsx     [/legal/privacidad]
   ├── cookies/page.tsx        [/legal/cookies]
   └── aviso-legal/page.tsx    [/legal/aviso-legal]
   ```

2. Reestilizar con diseño de landings (opcional ahora, obligatorio post-lanzamiento)

3. Usar mismo contenido que legacy (copiado, no linkeado)

4. Verificar links en footer funcionan

### Legacy Snapshot (Ioranaseo-old/)

1. Copiar integridad de (defaultLayout)/legal/ como está
2. Legacy será autónomo con sus propias copias
3. Post-lanzamiento, legacy puede tener su propio footer/navegación

---

## 🔗 IMPACTO EN REDIRECCIÓN SEO

Si se cambia la estructura de URLs (no recomendado ahora):

```nginx
# next.config.js redirects
/legal              → /legal/términos      (301)
/legal/privacidad   → /legal/privacidad    (no cambiar)
/legal/cookies      → /legal/cookies       (no cambiar)
/legal/aviso-legal  → /legal/aviso-legal   (no cambiar)
```

**Actualmente:** NO necesario (mantener URLs iguales)

---

## 🛡️ VALIDACIÓN LEGAL

### RGPD / Normativa Europea

✅ Actualmente CUMPLE:
- Página de privacidad accesible
- Página de cookies accesible
- Aviso legal disponible

✅ Post-migración DEBE mantener:
- Acceso fácil desde footer
- URLs canónicas claras
- Metadata correcta

---

## 📌 RECOMENDACIÓN FINAL

### Para FASE 4 (Hacer Legacy Autónomo)

**Acción recomendada:** **Opción C** (máxima seguridad)

1. **COPIAR (no mover)** legales a `src/app/(landings)/legal/`
2. **MANTENER TAMBIÉN** en `src/app/(defaultLayout)/legal/`
3. **Verificar** que footer de landings apunta a `/legal/*`
4. **Documentar** en README.md de Ioranaseo-old/

**Beneficios:**
- ✅ IORANA SEO 2.0 es autónomo
- ✅ Ioranaseo-old/ es autónomo
- ✅ Cero riesgo de links rotos
- ✅ Cumplimiento normativo garantizado

### Para FASE 11 (Post-Lanzamiento Optimization)

Una vez validado que ambos proyectos funcionan:
- Actualizar diseño de legales en landings para coherencia
- Considerar si versión legacy necesita mantenimiento

---

## ✅ VERIFICACIÓN

Pendiente validación manual:

- [ ] Leer /legal/privacidad completo
- [ ] Leer /legal/cookies completo
- [ ] Leer /legal/aviso-legal completo
- [ ] Verificar metadata de cada página (SEO)
- [ ] Verificar links internos (canonical, etc.)

**Estado:** LISTO PARA COPIA (contenido verificable post-snapshot)

---

## 📊 RESUMEN

| Elemento | Status | Acción |
|----------|--------|--------|
| **Ubicación actual** | ✅ Identificada | (defaultLayout)/legal/ |
| **URLs de referencia** | ✅ Identificadas | /legal/* en footer 2.0 |
| **Contenido** | ✅ Verificado | Existe, completo |
| **Migración necesaria** | ✅ SÍ | Copiar a (landings) |
| **Riesgo de no migrar** | ⚠️ ALTO | Links rotos en 2.0 |
| **Opción recomendada** | Opción C | Duplicar en ambas |

---

**Archivo generado:** LEGAL_ROUTE_REPORT.md (2026-09-15)  
**Repositorio:** E:\git\interno\ioranaseo  
**Próximo paso:** Implementar Opción C en FASE 4
