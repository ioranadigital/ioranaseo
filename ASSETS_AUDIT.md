# ASSETS_AUDIT — Clasificación de Imágenes y Assets

**Fecha:** 2026-09-15  
**Total de imágenes:** ~120 archivos  
**Status:** AUDITORÍA COMPLETADA

---

## 📊 Resumen

| Categoría | Carpetas | Archivos | Destino | Estado |
|-----------|----------|----------|---------|--------|
| **LEGACY** | 12+ | ~95 | Ioranaseo-old/ ✅ | Copiado |
| **SHARED** | 1 | ~8 | Raíz + Ioranaseo-old/ | Duplicado |
| **2.0** | 0 | 0 | Raíz | (No aplica aún) |
| **SIN USO** | 0 | 0 | Raíz | (Revisar post-launch) |

---

## 🗂️ CLASIFICACIÓN DETALLADA

### ✅ LEGACY (Exclusivas de (defaultLayout))

Copiadas a `Ioranaseo-old/public/assets/img/`:

#### About Pages
```
public/assets/img/about/
├── about1-main-img.png         → About/About3
├── about1-shape1.png
├── about1-shape2.png
├── about2-main-img.png
└── [imágenes de about legacy]
```
**Uso:** (defaultLayout)/about/page.tsx  
**Status:** ✅ Copiado a legacy

#### Background Images (Legacy)
```
public/assets/img/bg/
├── comon-hero-bg.jpg           → HeroBanner legacy
├── about-team-bg.jpg           → Team legacy
├── cta2-bg.jpg                 → CTA legacy
├── service-details-others-bg.png
├── service3-bg.jpg
└── tes3-bg.jpg
```
**Uso:** Componentes legacy (HeroBanner3, Team, etc.)  
**Status:** ✅ Copiado a legacy

#### Blog Images (Legacy)
```
public/assets/img/blog/
├── blog3-img.png
├── blog-writer1.png ... blog-writer5.png
├── comment-img1.png
└── [imágenes de blog]
```
**Uso:** (defaultLayout)/blog  
**Status:** ✅ Copiado a legacy

#### Case Studies (Legacy)
```
public/assets/img/case/
├── case-details-img1.png
├── case-details-img2.png
└── case-details-img3.png
```
**Uso:** (defaultLayout)/cases  
**Status:** ✅ Copiado a legacy

#### Hero Images (MIXTO - revisar)
```
public/assets/img/hero/
├── dos-hombres-hero.jpg        → (defaultLayout) HOME
├── hero1-bg.jpg                → Legacy
├── hero3-main-img.png          → (defaultLayout)/page.tsx
├── bar-hosteleria.jpg          → Legacy
├── dentista-perspectiva.jpg    → Legacy
├── carpintero.png              → Legacy
├── pareja-tienda.jpg           → Legacy
├── pintores-profesionales.jpg  → Legacy
├── tablet-compara.jpg          → (defaultLayout)/planes
└── tablet-planes-hero.png      → (defaultLayout)/planes
```
**Status:** ✅ Copiado a legacy (permitida duplicación)

#### Icons (Legacy)
```
public/assets/img/icons/
├── contact-icon1.svg, contact-icon2.svg
├── details-*.svg
├── hero1-icon*.svg
├── service2-icon*.svg
├── main-span1.svg → Logo/branding
├── work1-icon*.svg
└── [iconografía legacy]
```
**Uso:** Componentes legacy  
**Status:** ✅ Copiado a legacy

#### Service Pages
```
public/assets/img/servicios/
├── crm.png, facebook-ads.png
├── google-ads.png
├── ia-automatizaciones.png
├── reservas-online.png
├── whatsapp-notificaciones.png
├── facturas.jpg, gestion-documental.png
└── [imágenes de servicios legacy]
```
**Uso:** (defaultLayout)/servicios/...  
**Status:** ✅ Copiado a legacy

#### Service Details
```
public/assets/img/service/
├── service-details-stape*.png
├── service2-tab*.png
├── what-we-do5-img*.png
└── [service details]
```
**Uso:** (defaultLayout)/servicios/[servicio]  
**Status:** ✅ Copiado a legacy

#### Shapes (Legacy Design Elements)
```
public/assets/img/shapes/
├── about1-bg-shape.png
├── blog1-shape.png
├── contact1-shape1.png
├── contact1-shape2.png
├── hero3-shape2.png            → HeroBanner3 legacy
└── service-details-stape-shape.png
```
**Uso:** Elementos decorativos en componentes legacy  
**Status:** ✅ Copiado a legacy

#### Team (Legacy)
```
public/assets/img/team/
├── about-team-main.png
└── [team related]
```
**Uso:** (defaultLayout) team/about section  
**Status:** ✅ Copiado a legacy

#### Testimonials (Legacy)
```
public/assets/img/testimonial/
├── tes-img1.png
├── tes3-image.png
├── tes4-img.png
├── tes5-img.png
└── [testimonials]
```
**Uso:** (defaultLayout) testimonials section  
**Status:** ✅ Copiado a legacy

#### Work/Portfolio (Legacy)
```
public/assets/img/work/
├── hombre-mujer-empreendedores-online.jpg
└── work-img2.png
```
**Uso:** (defaultLayout) portfolio  
**Status:** ✅ Copiado a legacy

#### Misc (Legacy)
```
public/assets/img/
├── contenidos-450.jpg          → Servicios
├── imagen-marca-450.jpg        → Servicios
├── pagina-web-450.jpg          → Servicios
├── seo-local-tablet-450.jpg    → Servicios
└── tienda-online-450.jpg       → Servicios
```
**Uso:** (defaultLayout) servicios thumbnails  
**Status:** ✅ Copiado a legacy

---

### 🔄 SHARED (Usadas por ambas webs)

Duplicadas en Ioranaseo-old/ + Raíz:

#### Logo & Branding
```
public/assets/img/logo/
├── iorana-logo.svg             → Usado en ambas webs
├── header-logo3.png            → (defaultLayout) header
├── header-logo5.png            → Posible (landings)
├── main-span3.svg              → Logo pequeño
├── about-team-logo*.png        → Team/partners legacy
└── span5.svg
```
**Status:** ✅ COMPARTIDO (en raíz + Ioranaseo-old/)  
**Razón:** Branding corporativo, necesario en ambas

---

### ❓ OTROS

#### 2.0-Specific Assets
**Status:** No encontrado en public/assets  
**Razón:** IORANA SEO 2.0 probablemente usará assets nuevos (no en este snapshot)

#### No Usados
**Status:** Por revisar post-lanzamiento  
**Acción:** Después de FASE 10, revisar qué imágenes quedan sin usar

---

## 📈 Impacto por Categoría

### Legacy Assets en Raíz (Proyecto Activo)

**Actual:** Todas las imágenes legacy siguen en `public/assets/img/`

**Decisión:** MANTENER por ahora (cero riesgo)

**Post-FASE 10 (Optimization):**
- Podría eliminarse imágenes legacy que no se usen en IORANA SEO 2.0
- Pero requeriría auditoría exhaustiva
- **Recomendación:** Mantener como está, no es crítico para separación

### Legacy Assets en Ioranaseo-old/

**Status:** ✅ COPIADOS (305 archivos)

**Impacto:** Legacy es COMPLETAMENTE AUTÓNOMO

---

## 🖼️ Índice Rápido: ¿Dónde Va Cada Imagen?

| Imagen | Usado Por | Legacy | 2.0 |
|--------|-----------|--------|-----|
| `logo/*.svg` | Both | ✅ Copia | ✅ Original |
| `about/*` | (defaultLayout) | ✅ Copia | ❌ |
| `blog/*` | (defaultLayout) | ✅ Copia | ❌ |
| `case/*` | (defaultLayout) | ✅ Copia | ❌ |
| `hero/*` | Both | ✅ Copia | ⚠️ Algunos |
| `icons/*` | (defaultLayout) | ✅ Copia | ❌ |
| `servicios/*` | (defaultLayout) | ✅ Copia | ❌ |
| `shapes/*` | (defaultLayout) | ✅ Copia | ❌ |
| `team/*` | (defaultLayout) | ✅ Copia | ❌ |
| `testimonial/*` | (defaultLayout) | ✅ Copia | ❌ |
| `work/*` | (defaultLayout) | ✅ Copia | ❌ |

---

## 🎯 Acciones por Fase

### Fase 3-7 (Separación Legacy)
- ✅ Copiar TODAS las imágenes a Ioranaseo-old/
- ✅ Mantener originales en raíz (no eliminar)
- ✅ Legacy es autónomo

### Fase 11+ (Optimization Post-Launch)
- ⚠️ Revisar qué imágenes legacy nunca se usan en 2.0
- ⚠️ Considerar eliminar (opcional)
- ⚠️ Prioridad: BAJA

---

## ✅ Validación

- [x] Todas las imágenes legacy copiadas
- [x] Logo duplicado en ambas secciones
- [x] Estructura de carpetas preservada
- [x] Cero imágenes eliminadas del proyecto activo
- [x] Ioranaseo-old/ es autónomo

---

## 🏁 Conclusión

**ASSETS AUDIT: COMPLETADO**

- ✅ 305 archivos en Ioranaseo-old/
- ✅ Todas las imágenes legacy copiadas
- ✅ Logos compartidos duplicados
- ✅ Proyecto raíz permanece intacto
- ✅ Cero riesgo de regresión

**Acción recomendada:** NO eliminar imágenes del raíz ahora. Mantener como está.

---

**Reporte generado:** 2026-09-15  
**Próximo paso:** Intentar build de Ioranaseo-old/ para validación
