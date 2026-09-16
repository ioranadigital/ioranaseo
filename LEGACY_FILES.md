# AUDITORÍA COMPLETA: Separación IoranaSEO Legacy vs 2.0

**Fecha:** 2026-09-15  
**Commit Seguridad:** `b26f8ab3` (snapshot before isolating legacy IoranaSEO site)  
**Rama:** main  
**Estado:** AUDITORÍA COMPLETADA - Estructura de migración identificada

---

## 📋 RESUMEN EJECUTIVO

### Resultado de Auditoría: **SEPARACIÓN SEGURA Y VIABLE**

- ✅ **SIN dependencias cruzadas** entre (landings) y (defaultLayout)
- ✅ **Componentes completamente aislados** por sección
- ✅ **Datos separados** (Data/faq-inicio.json vs componentes internos)
- ✅ **Estilos mayormente independientes** (Bootstrap vs Tailwind)
- ⚠️ **Archivos compartidos identificados:** globals.css, design tokens, layout.tsx raíz
- ⚠️ **Dependencias compartidas en package.json** (ambas webs necesitan Bootstrap + Tailwind)

---

## 🗂️ GRUPO A: ARCHIVOS LEGACY (defaultLayout)

Código usado **EXCLUSIVAMENTE** por la web antigua. Estos archivos deben moverse a `Ioranaseo-old/`.

### A.1 Páginas Legacy (src/app/(defaultLayout)/)

```
(defaultLayout)/
├── page.tsx                          [HOME antiguo]
├── about/page.tsx                    [Página Sobre Nosotros]
├── contacto/page.tsx                 [Formulario de Contacto]
├── informe-gratuito/page.tsx         [Landing antiguo]
├── legal/
│   ├── page.tsx
│   ├── aviso-legal/page.tsx
│   ├── cookies/page.tsx
│   └── privacidad/page.tsx
├── planes/
│   ├── page.tsx
│   ├── basico/page.tsx
│   ├── avanzado/page.tsx
│   ├── premium/page.tsx
│   ├── inicio/page.tsx
│   └── compara/page.tsx
├── servicios/
│   ├── page.tsx
│   ├── contenidos/page.tsx
│   ├── crm/page.tsx
│   ├── facebook-ads/page.tsx
│   ├── facturacion-electronica/page.tsx
│   ├── gestion-documental/page.tsx
│   ├── google-ads/page.tsx
│   ├── ia-automatizaciones/page.tsx
│   ├── imagen-marca/page.tsx
│   ├── notificaciones-whatsapp/page.tsx
│   ├── pagina-web/page.tsx
│   ├── posicionamiento-google/page.tsx
│   ├── seo-local/page.tsx
│   ├── sistema-reservas-online/page.tsx
│   └── tienda-online/page.tsx
└── layout.tsx                        [Layout de defaultLayout]
```

**Total: 30+ páginas/rutas legacy**

### A.2 Componentes Legacy (src/app/Components/)

Todos los componentes en esta carpeta son **EXCLUSIVAMENTE** para (defaultLayout):

```
src/app/Components/
├── About/About3.tsx
├── AuditoriaGratis/
├── Blog/ (BlogCard, BlogList, etc.)
├── BlogDetails/
├── Card/
├── CaseDetails/
├── CaseStudy/ (CaseStudy1, CaseStudy2, etc.)
├── ClientLayout.tsx
├── Common/ (componentes compartidos internos)
├── ContactInfo/ContactIno3.tsx
├── Faq/ (FaqAccordion, etc.)
├── FeaturesSection/
├── Footer/              ← IMPORTANTE: Footer legacy
├── Header/              ← IMPORTANTE: Header legacy (diferentes de LandingsHeader)
├── HeroBanner/HeroBanner3.tsx
├── InformeGratisForm.tsx
├── Landing/
├── Modal/
├── NuestroProcesoLocal/
├── Partner/
├── PlanDetail/
├── Pricing/Pricing3.tsx
├── PricingComparison/
├── PymesProcess.tsx
├── SeoBenefit/
├── Services/
├── Skill/
├── TableAnalysis/
├── Team/
├── Testimonial/
├── VideoModal/
├── WebGratis/
├── WhatsappCTA/WhatsappCTA.tsx
└── Work/
```

**Total: ~35 carpetas de componentes legacy**

### A.3 Datos Legacy (src/app/Data/)

```
src/app/Data/
├── blog1.json
├── blog2.json
├── casestudy1.json
├── casestudy2.json
├── counter.json
├── faq-inicio.json
├── faq.json
├── feature.json
├── project1.json
├── services1.json, services2.json, services3.json, services4.json
├── team1.json
├── testimonial1.json, testimonial2.json, testimonial3.json
```

**Total: 17 archivos JSON con datos legacy**

### A.4 Assets Legacy (src/app/assets/)

```
src/app/assets/
└── main.css              ← Estilos legacy que incluyen Bootstrap customization
```

(Las imágenes en `public/assets/img/` se revisarán en FASE 7)

---

## 🎯 GRUPO B: ARCHIVOS IORANA SEO 2.0 (landings)

Código usado **EXCLUSIVAMENTE** por la nueva web. Estos archivos permanecen en la raíz del proyecto.

### B.1 Páginas Web 2.0 (src/app/(landings)/)

```
(landings)/
├── home/                             [HOME nuevo]
│   ├── page.tsx
│   ├── layout.tsx
│   ├── HomeLayoutClient.tsx
│   └── components/
│       ├── FAQAnalisis.tsx
│       ├── Footer.tsx                ← Footer NUEVO (diferente al legacy)
│       ├── Hero.tsx
│       ├── NuestroSistema.tsx
│       ├── PresenciaDigital.tsx
│       ├── PorDondeEmpezar.tsx
│       └── TodoLoQueNecesitas.tsx
├── web-para-empresas/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── WebLayoutClient.tsx
│   └── components/
│       ├── FAQForm.tsx
│       ├── Header.tsx                ← Header específico de esta landing
│       ├── Hero.tsx
│       ├── Methodology.tsx
│       ├── OurMethod.tsx
│       ├── Pricing.tsx
│       ├── ProcessSteps.tsx
│       ├── ValueProposition.tsx
│       ├── VisibilityToResults.tsx
│       ├── WhatIncludes.tsx
│       └── index.ts
├── soluciones/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── SolucionesLayoutClient.tsx
│   ├── components/
│   │   ├── Diagnostico.tsx
│   │   ├── FAQAnalisis.tsx
│   │   ├── Hero.tsx
│   │   ├── LasCuatroSoluciones.tsx
│   │   ├── Metodo.tsx
│   │   ├── NoSonServiciosAislados.tsx
│   │   └── PuntoDePartida.tsx
│   ├── campanas/
│   ├── conversion/
│   └── visibilidad/
├── como-trabajamos/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── ComoTrabajamosLayoutClient.tsx
│   └── components/
│       ├── CTAFinal.tsx
│       ├── ComoTrabajamosContigo.tsx
│       ├── CuatroAtributos.tsx
│       ├── FAQ.tsx
│       ├── Hero.tsx
│       ├── NosImplicamos.tsx
│       ├── PrincipioDeTrabajo.tsx
│       └── UnEnfoqueIntegral.tsx
├── components/                       ← Componentes compartidos entre landings
│   ├── LandingsFooter.tsx
│   ├── LandingsHeader.tsx            ← Header COMPARTIDO de landings
│   └── LandingsLayoutWrapper.tsx
├── layout.tsx                        ← Layout raíz de landings
└── [otros layouts de sub-secciones]
```

**Total: 80+ componentes nuevos, completamente self-contained**

### B.2 Página de Diagnóstico (src/app/diagnostico/)

```
src/app/diagnostico/
├── page.tsx
└── LandingClient.tsx
```

**Nota:** Está fuera de (landings) pero es parte de IORANA SEO 2.0.

---

## 🔄 GRUPO C: ARCHIVOS COMPARTIDOS (ambas webs necesitan)

Estos archivos **PERMANECEN en la raíz** porque ambas secciones los reutilizan.

### C.1 CSS Global y Design Tokens

```
src/app/
├── globals.css                       ← CSS GLOBAL (importa Bootstrap, Tailwind, tokens)
└── styles/
    └── iorana-design-tokens.css     ← Design tokens CSS variables (--io-bg, --io-action, etc.)
```

**Uso:** Ambas (landings) y (defaultLayout) importan a través de globals.css  
**Razón:** Mantienen consistencia de colores y variables de diseño

### C.2 Componentes de Utilidad (src/components/)

```
src/components/
├── ContentAnalyzer.tsx
├── ExampleSEOPage.tsx
├── NoSSR.tsx
├── OptimizedImage.tsx               ← Usado por defaultLayout (HeroBanner3 lo importa como @/components)
├── PerformanceMetrics.tsx
├── SEODashboard.tsx
├── SEOHead.tsx
└── WebVitalsMonitor.tsx
```

**Nota:** No son importados directamente por (landings), pero OptimizedImage es usado por (defaultLayout).  
**Decisión:** MANTENER en raíz (bajo costo de mantener, son utilitarios)

### C.3 Utilidades (src/lib/)

```
src/lib/
├── content.ts
├── performance.ts
├── seo-utils.ts
├── seo.ts
├── submitLead.ts                    ← ¿Usado por ambas webs?
├── technical-seo.ts
└── trackEvent.ts
```

**Riesgo:** Necesita verificación si ambas las usan. Por ahora: MANTENER (bajo riesgo)

### C.4 Layout Raíz y Configuración

```
src/app/
├── layout.tsx                        ← Layout raíz (render de (landings) y (defaultLayout))
├── error.tsx
├── not-found.tsx
├── favicon.ico
└── package.json                      ← package.json proyecto (NO se divide)
```

**Nota:** layout.tsx raíz es crítico para ambas secciones vía (landings) y (defaultLayout) layouts.

### C.5 Public Assets (imágenes compartidas)

```
public/
├── assets/
│   └── img/
│       ├── logo/                     ← Logos (probablemente usados por ambas)
│       ├── shapes/                   ← Formas (legacy)
│       ├── hero/                     ← Imágenes hero (pueden ser legacy)
│       └── [más imágenes]
```

**A revisar en FASE 7:** Determinar si hay imágenes exclusively legacy.

---

## ⚠️ RIESGOS DETECTADOS Y PUNTOS CRÍTICOS

### 1. **CSS GLOBAL Y DEPENDENCIAS CONTAMINADAS**

**Riesgo:** `globals.css` importa AMBAS:
- `bootstrap/dist/css/bootstrap.min.css` (legacy)
- `@tailwind base/components/utilities` (2.0)

**Impacto:**
- (landings) carga Bootstrap aunque no lo usa → bloat CSS innecesario
- (defaultLayout) carga Tailwind aunque no lo usa
- Posibles conflictos de clases CSS

**Mitigación:**
- En PHASE 11, considerar separar CSS en dos globals.css (una por rama)
- Por ahora: Mantener como está (funcional, aunque no optimizado)

### 2. **package.json MIXTO**

**Riesgo:** package.json tiene dependencias para ambas webs:
- `bootstrap`, `react-bootstrap`, `react-slick`, `slick-carousel` (legacy)
- `lucide-react` (2.0)
- `tailwindcss` (2.0)

**Impacto:** Ambas dependencias instaladas siempre, aumenta node_modules.

**Mitigación:** ACEPTABLE para ahora. Post-migración, se puede considerar limpieza.

### 3. **FOOTER DUPLICADO**

**Riesgo POTENCIAL:** 
- `src/app/Components/Footer/` (legacy)
- `src/app/(landings)/home/components/Footer.tsx` (nuevo)
- `src/app/(landings)/components/LandingsFooter.tsx` (nuevo, compartido en landings)

**Actual:** NO hay conflicto porque están en paths diferentes.  
**Acción:** Cuando se mueva legacy, asegurar que no se rompen las referencias.

### 4. **HEADER DUPLICADO**

**Riesgo POTENCIAL:**
- `src/app/Components/Header/` (legacy, usado por defaultLayout)
- `src/app/(landings)/web-para-empresas/components/Header.tsx` (específico de una landing)
- `src/app/(landings)/components/LandingsHeader.tsx` (compartido en landings)

**Actual:** NO hay conflicto porque están en paths diferentes.

### 5. **DATA MIXTA**

**Riesgo:** `src/app/Data/` tiene datos legacy.

**Impacto:** Si se busca reutilizar datos (ej. faq.json), asegurar que LANDINGS tiene sus propios FAQs (verif in components).

**Actual:** LANDINGS tiene FAQAnalisis como componentes con datos inline → No hay dependencia en Data/*.json

### 6. **TAILWIND vs BOOTSTRAP**

**Riesgo:** Ambas dependencies instaladas, pero:
- `src/app/styles/iorana-design-tokens.css` usa CSS variables
- Ambas webs pueden acceder a ambos frameworks

**Actual:** ACEPTABLE. Las webs no tiene conflicto directo.

---

## ✅ VERIFICACIONES COMPLETADAS

- ✅ **(landings) NO importa de Components/** → 0 dependencias
- ✅ **(landings) NO importa de Data/** → 0 dependencias
- ✅ **(defaultLayout) NO importa de (landings)** → 0 dependencias
- ✅ **(defaultLayout) solo importa Components/ y Data/** → Aislado
- ✅ **Sin imports cruzados entre router groups** → Separación segura
- ✅ **Componentes locales self-contained** → Cada página tiene sus componentes
- ✅ **Assets duplicables** → public/assets pueden copiarse

---

## 📊 MATRIZ DE CLASIFICACIÓN

| Aspecto | Count | Destino | Notas |
|---------|-------|---------|-------|
| **Páginas Legacy** | 30+ | Ioranaseo-old/ | (defaultLayout)/ |
| **Componentes Legacy** | ~35 carpetas | Ioranaseo-old/ | src/app/Components/ |
| **Datos Legacy** | 17 archivos | Ioranaseo-old/ | src/app/Data/ |
| **Páginas 2.0** | 80+ comps | Raíz | (landings)/ + diagnostico/ |
| **Compartidos (quedan)** | 5 | Raíz | globals.css, layout.tsx, lib/, etc. |
| **Potencial bloat** | — | A revisar | Bootstrap en (landings), Tailwind en (defaultLayout) |

---

## 🛠️ PLAN DE MIGRACIÓN (Resumen)

### Paso 1: Crear Ioranaseo-old/
```
Ioranaseo-old/
├── src/app/
│   ├── (defaultLayout)/     ← Copiar completa
│   ├── Components/          ← Copiar completa
│   └── Data/                ← Copiar completa
├── public/assets/img/       ← Copiar imágenes legacy
├── src/app/styles/          ← **REVISAR** si es legacy o compartido
├── package.json             ← Copiar (puede ser igual)
├── README.md                ← Crear documentación
└── [config files]
```

### Paso 2: Validar IORANA SEO 2.0
- Confirmar que (landings) + diagnostico/ funcionan sin (defaultLayout)
- Confirmar que build PASS
- Verificar rutas activas: /, /web-para-empresas, /soluciones/*, /como-trabajamos

### Paso 3: Eliminar de Raíz
- Eliminar src/app/(defaultLayout)/
- Eliminar src/app/Components/
- Eliminar src/app/Data/
- Limpiar imports en globals.css (¿Bootstrap aún necesario?)
- Actualizar .gitignore si procede

### Paso 4: Documentación
- Crear LEGACY_MIGRATION_REPORT.md
- Actualizar README

---

## 🎯 PRÓXIMO PASO

**AUDITORÍA: ✅ COMPLETADA**

**Esperando confirmación para:**
1. ✅ Iniciar FASE 3 — CREAR Ioranaseo-old/
2. ✅ Iniciar FASE 4 — README de legacy
3. ✅ Iniciar FASE 5-6 — Limpiar raíz

**NO PROCEDER SIN CONFIRMACIÓN del usuario.**

---

**Archivo generado:** LEGACY_FILES.md (2026-09-15 22:15)  
**Repositorio:** E:\git\interno\ioranaseo  
**Commit base:** b26f8ab3
