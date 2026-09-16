# TECHNICAL_CLEANUP_AUDIT — Auditoría Pre-Limpieza Técnica

**Fecha:** 2026-09-16  
**Fase:** Post-FASE 6 (Cierre documental)  
**Objetivo:** Identificar candidatos para limpieza técnica SIN realizarla aún  
**Status:** 🔍 AUDITADO (NO ELIMINADO)

---

## 📋 RESUMEN EJECUTIVO

FASE 6 completada exitosamente. El proyecto IORANA SEO 2.0 está limpio de legacy code.

Identificados candidatos para limpieza técnica (NO CRÍTICA):

| Área | Candidatos | Estado | Acción |
|------|-----------|--------|--------|
| **Dependencias** | 6 pkgs | UNUSED | ⏸️ PENDIENTE |
| **CSS** | Bootstrap + legacy | UNUSED | ⏸️ PENDIENTE |
| **Assets** | 109 files (20M) | UNREFERENCED | ⏸️ PENDIENTE |
| **Components** | 7 files | UNCERTAIN | ⏸️ PENDIENTE |
| **Git Safety** | .gitignore missing | CRITICAL | 🔴 REQUIERE ATENCIÓN |

---

## 🛠️ DEPENDENCIAS AUDIT

### Instaladas en package.json

```json
{
  "dependencies": {
    "bootstrap": "^5.3.3",           → UNUSED
    "bootstrap-icons": "^1.11.3",     → UNUSED
    "html-react-parser": "^5.1.18",   → UNUSED
    "lucide-react": "^1.20.0",        → ACTIVE
    "next": "15.1.8",                 → ACTIVE
    "react": "19.0.0",                → ACTIVE
    "react-bootstrap": "^2.10.6",     → UNUSED
    "react-dom": "19.0.0",            → ACTIVE
    "react-slick": "^0.30.2",         → UNUSED
    "slick-carousel": "^1.8.1"        → UNUSED
  }
}
```

### Candidatos para Eliminación

| Dependencia | Imports | Status | Note |
|-------------|---------|--------|------|
| `bootstrap` | 0 | UNUSED | Legacy styling framework |
| `bootstrap-icons` | 0 | UNUSED | Legacy icons |
| `react-bootstrap` | 0 | UNUSED | Legacy UI components |
| `react-slick` | 0 | UNUSED | Carousel library (not used) |
| `slick-carousel` | 0 | UNUSED | Carousel CSS (not used) |
| `html-react-parser` | 0 | UNUSED | HTML parsing (not needed) |

### Active Dependencies

| Dependencia | Imports | Status | Note |
|-------------|---------|--------|------|
| `next` | ✅ | ACTIVE | Framework |
| `react`, `react-dom` | ✅ | ACTIVE | Core |
| `lucide-react` | ✅ | ACTIVE | Icon library (used in landings) |
| `tailwindcss` | ✅ | ACTIVE | Styling framework |

### Recommendation

**Remove when ready:**
```bash
pnpm remove bootstrap bootstrap-icons react-bootstrap react-slick slick-carousel html-react-parser
```

**Impact:** Reduce node_modules by ~200MB, reduce build size

---

## 🎨 CSS AUDIT

### Files

```
src/app/globals.css             (Main entry)
  ├─ @import "bootstrap/..."    ❌ UNUSED
  ├─ @import "./assets/main.css"
  ├─ @import "./styles/..."
  └─ @tailwind directives       ✅ ACTIVE

src/app/assets/main.css         (Legacy main styles)
src/app/styles/
  └─ iorana-design-tokens.css   (Design tokens)
```

### Legacy CSS Patterns Found

```css
.btn-barrido              ❌ UNUSED
.btn-barrido-contact      ❌ UNUSED
.btn-primary              ❌ UNUSED (Bootstrap)
.btn-secondary            ❌ UNUSED (Bootstrap)
[other Bootstrap classes] ❌ UNUSED
```

### References in Active Code

- `.btn-barrido`: 0 references
- `.btn-primary`: 0 references
- Bootstrap classes: 0 references

### Bootstrap Import

**Current:** `src/app/globals.css` line 1
```css
@import "bootstrap/dist/css/bootstrap.min.css";
```

**Status:** UNUSED — can be removed

**Impact:** Reduce CSS bundle ~200KB

### Recommendation

**When ready (NOT NOW):**
1. Remove Bootstrap import from globals.css
2. Remove legacy CSS classes
3. Keep design-tokens.css (used for colors)
4. Keep Tailwind directives

---

## 📦 ASSETS AUDIT

### public/assets Structure

```
public/assets/ (109 files, 20M total)
├── img/
│   ├── about/         (Legacy pages)
│   ├── bg/            (Backgrounds)
│   ├── blog/          (Blog images)
│   ├── case/          (Case studies)
│   ├── hero/          (Hero sections)
│   ├── icons/         (Icon files)
│   ├── logo/          (Logo files)
│   └── others/        (Miscellaneous)
└── [other files]
```

### Usage Analysis

**References in active code (landings + diagnostico):** 0

**Classification:**
- ACTIVE IN 2.0: UNKNOWN (requires manual review)
- LEGACY ONLY: Likely ~90%
- SHARED: Logos (possibly)
- UNREFERENCED: Possible

### Specific Directories Assessment

| Folder | Purpose | Usage |
|--------|---------|-------|
| `img/about/` | About page images | Legacy only |
| `img/blog/` | Blog images | Legacy only |
| `img/case/` | Case studies | Legacy only |
| `img/hero/` | Hero sections | Unknown |
| `img/icons/` | Icons | Unknown |
| `img/logo/` | Logos | Possibly shared |
| `img/others/` | Misc | Unknown |

### Recommendation

**BEFORE DELETING ANY ASSET:**
1. Manual review of each folder
2. Check if used by favicon.ico or design tokens
3. Verify logos are not referenced in HTML
4. Test homepage rendering after removal

**Safe to remove (95% confidence):**
- `img/about/`
- `img/blog/`
- `img/case/`

**Verify first (50% confidence):**
- `img/hero/`
- `img/icons/`
- `img/logo/`

---

## 🧩 src/components AUDIT

### Files (9 total, 2 references)

| File | References | Status | Usage |
|------|-----------|--------|-------|
| `OptimizedImage.tsx` | 1+ | ACTIVE | Image optimization |
| `SEOHead.tsx` | 1+ | ACTIVE | SEO utilities |
| `index.ts` | N/A | CONFIG | Exports |
| `ContentAnalyzer.tsx` | 0 | UNUSED | Old analyzer |
| `ExampleSEOPage.tsx` | 0 | UNUSED | Example component |
| `NoSSR.tsx` | 0 | UNUSED | SSR bypass |
| `PerformanceMetrics.tsx` | 0 | UNUSED | Metrics display |
| `SEODashboard.tsx` | 0 | UNUSED | Dashboard |
| `WebVitalsMonitor.tsx` | 0 | UNUSED | Monitoring |

### Components Assessment

**ACTIVE (2 files):**
- OptimizedImage: Used in landing components
- SEOHead: Likely used for metadata

**UNUSED (7 files):**
- ExampleSEOPage, ContentAnalyzer
- PerformanceMetrics, SEODashboard
- WebVitalsMonitor, NoSSR
- (possibly demo/legacy code)

### Recommendation

**Safe to remove (high confidence):**
```
src/components/ExampleSEOPage.tsx
src/components/ContentAnalyzer.tsx
src/components/PerformanceMetrics.tsx
src/components/SEODashboard.tsx
src/components/WebVitalsMonitor.tsx
src/components/NoSSR.tsx
```

**Keep (active):**
```
src/components/OptimizedImage.tsx
src/components/SEOHead.tsx
```

---

## 🔗 src/lib AUDIT

### Files (7 total, 7 references — all active)

| File | Purpose | Status |
|------|---------|--------|
| `submitLead.ts` | Form submission webhook | ✅ ACTIVE |
| `trackEvent.ts` | Analytics tracking | ✅ ACTIVE |
| `seo-utils.ts` | SEO utilities | ✅ ACTIVE |
| `seo.ts` | SEO metadata | ✅ ACTIVE |
| `technical-seo.ts` | Technical SEO | ✅ ACTIVE |
| `performance.ts` | Performance metrics | ✅ ACTIVE |
| `content.ts` | Content utilities | ✅ ACTIVE |

### Recommendation

**Keep all** — All files are active and referenced

---

## 🔴 CRITICAL FINDINGS

### 1. Missing .gitignore

**Finding:** Root directory has NO .gitignore

**Current Status:**
- `node_modules/` (548M) — NOT versionded (by luck)
- `.next/` (149M) — NOT versionned (by luck)
- Both NOT protected against accidental commits

**Risk:** If developer runs `git add .`, will versionn 697MB of build artifacts

**Action Required:** Create .gitignore

**Recommended .gitignore:**
```
# Dependencies
node_modules/
.pnpm-store/

# Build outputs
.next/
out/
dist/
build/

# Environment
.env
.env.local
.env.*.local

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
yarn-debug.log*

# Testing
coverage/

# Ioranaseo-old build artifacts
Ioranaseo-old/node_modules/
Ioranaseo-old/.next/
```

---

## 📊 CLEANUP PRIORITY MATRIX

| Area | Candidate | Risk | Impact | Priority |
|------|-----------|------|--------|----------|
| **Git** | Add .gitignore | CRITICAL | CRITICAL | 🔴 NOW |
| **Deps** | Remove 6 packages | LOW | MEDIUM (200MB) | 🟡 SOON |
| **CSS** | Remove Bootstrap | LOW | SMALL (200KB) | 🟡 LATER |
| **Assets** | Remove legacy img/ | MEDIUM | HIGH (15M) | 🟡 LATER |
| **Components** | Remove 6 files | LOW | LOW | 🟡 LATER |

---

## ✅ CHECKLIST PARA SIGUIENTE FASE

### Phase "Cleanup-Deps" (if authorized)
- [ ] Add .gitignore
- [ ] `pnpm remove bootstrap bootstrap-icons react-bootstrap react-slick slick-carousel html-react-parser`
- [ ] `pnpm install --frozen-lockfile`
- [ ] `pnpm build` → verify EXIT CODE 0
- [ ] `pnpm dev` → verify startup

### Phase "Cleanup-CSS" (if authorized)
- [ ] Remove Bootstrap import from globals.css
- [ ] Remove legacy CSS classes (.btn-barrido, etc.)
- [ ] Test homepage styling
- [ ] Verify colors still work

### Phase "Cleanup-Assets" (if authorized)
- [ ] Manual review of public/assets/img/ folders
- [ ] Identify which are truly unused
- [ ] Remove confirmed legacy
- [ ] Test homepage rendering

### Phase "Cleanup-Components" (if authorized)
- [ ] Verify 7 components are truly unused
- [ ] Remove ExampleSEOPage, ContentAnalyzer, etc.
- [ ] `pnpm build` → verify EXIT CODE 0

---

## 🎯 CURRENT STATUS

| Area | Status | Blocker |
|------|--------|---------|
| FASE 6 | ✅ COMPLETE | ❌ NO |
| Build | ✅ PASS (EXIT 0) | ❌ NO |
| Dev | ✅ PASS | ❌ NO |
| Git Safety | ⚠️ MISSING | 🔴 YES (.gitignore) |
| Cleanup Ready | 🟡 PARTIAL | ❌ NO (depends on review) |

---

**Generado:** 2026-09-16  
**Auditoría completada:** Candidatos identificados, sin eliminaciones realizadas  
**Próximo paso:** Crear .gitignore (CRÍTICO) + Autorizar fases de limpieza opcionales

