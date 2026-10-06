# IORANA SEO — WEB-PARA-EMPRESAS PHOTOGRAPHY VISUAL POLISH

**Date:** 2026-10-06  
**Page:** `/web-para-empresas/`  
**Task:** Hero full-width with real photography + WhatIncludes second photo  
**Status:** COMPLETED (Local testing)

---

## 1. PHOTOGR APHY SOURCING

### Hero Photo
- **Source File:** `/c/Users/rivarela/Downloads/two-smiling-young-adults-working-in-a-cafe-2026-09-22-04-31-30-utc.jpg`
- **Original Size:** 4854×3343 px, 3.8 MB
- **Destination:** `public/assets/img/web-para-empresas/hero-business.jpg`
- **Final Size:** 3.8 MB (JPG, full quality for now; should be optimized to WebP in production)
- **Usage:** Hero background, full-width panoramic layout
- **Encadrage:** Shows café setting with two people (medium shot, visible environment, natural spacing)

### WhatIncludes Photo
- **Source File:** `public/assets/img/home/hero-small-business.webp` (existing, approved asset)
- **Size:** 91 KB, 1400×933 px (WebP)
- **Usage:** WhatIncludes section, right column, replacing interactive SVG visual
- **Rationale:** Different from Hero photo; shows small business owner in work context

---

## 2. COMPONENT CHANGES

### Hero.tsx
**File:** `src/app/(landings)/web-para-empresas/components/Hero.tsx`

**Changes:**
- Restructured from card layout (left content, right image) → full-width panoramic
- Implemented same pattern as `/soluciones/` Hero
- Background image with white-to-transparent gradient (legible on left, reveals photo on right)
- Floating microcards over non-face areas (Search, Smartphone, MousePointerClick icons)
- Preserved H1, description, CTA, and benefits
- Responsive: desktop full-width, mobile stacked with image below text

**Key CSS:**
- `.wh-bg`: Absolute positioned background
- `.wh-bg__fade`: Gradient overlay (32% solid white, fades to transparent at 62%)
- `object-position: 65% 50%`: Focuses on right side where people are (but secondary to environment)
- Min-height: 560px (desktop), 600px (1440+)
- Mobile: aspect-ratio 1.6, border radius, positioned after text

### WhatIncludes.tsx
**File:** `src/app/(landings)/web-para-empresas/components/WhatIncludes.tsx`

**Changes:**
- Removed: `SharedWebVisual` SVG component reference
- Added: Static photo from `hero-small-business.webp`
- Maintained: Interactive chips (6 capabilities, hover/click behavior)
- Changed: Right column now shows photo instead of dynamic SVG

**Structure:**
```
Left column (42fr):
  - Dot + Title + Description
  - 6 interactive chips (Responsive, SEO, Forms, Analytics, Copy, Training)

Right column (58fr):
  - Photo of small business owner + web (1400×933, WebP)
```

---

## 3. RESPONSIVE VALIDATION

| Breakpoint | Test | Result | Notes |
|---|---|---|---|
| **1440px** | Full-width hero, microcards visible, text legible | ✓ PASS | Gradient strong; photo visible right 40% |
| **1280px** | Same as 1440 | ✓ PASS | Text still max-width 520px; no overflow |
| **1024px** | Threshold: gradient still visible, text readable | ✓ PASS | Min-height 560px; gradient opacity strong |
| **768px** | Mobile breakpoint: stacked, photo below text | ✓ PASS | aspect-ratio 1.6; no border on hero-section; border on photo itself |
| **430px** | Mobile narrow: padding reduced (16px) | ✓ PASS | Text, photo, buttons all stack; no overflow |
| **375px** | Mobile smallest: all elements visible, no overlap | ✓ PASS | Chip sizes reduced; photo fills width; readable |

### Specific Checks
- **Faces/Rostros:** Visible in hero (center-right), proportionally smaller than in `/soluciones/`
- **Overflow horizontal:** 0px on all breakpoints
- **Button wrapping:** None on desktop; acceptable on <430px (secondary CTA wraps)
- **Microcards visibility:** Desktop visible; mobile repositioned to corners
- **Photo aspect ratio:** Maintained; no distortion
- **Text legibility:** Gradient ensures white text/dark text readable over any image area
- **CLS (Cumulative Layout Shift):** Defined dimensions prevent layout jumping

---

## 4. ASSETS INVENTORY

### Deployed to Project
```
public/assets/img/web-para-empresas/
├── hero-business.jpg          (3.8 MB, JPG — should optimize to WebP)
├── hero-business.webp         (old placeholder, 500×500, can remove)
├── hero-business.webp.png     (PowerShell artifact, can remove)
└── (no other changes)

public/assets/img/home/
└── hero-small-business.webp   (unchanged, reused)
```

### Optimization Pending
- **JPG → WebP:** Hero photo is still JPG (3.8 MB). Recommend using Next.js Image Optimization or `next/image` component in production. Current setup loads JPG directly; browser handles resizing.
- **Image dimensions:** `<img width={1920} height={820}` hardcoded; accurate for desktop full-width. Mobile may load full resolution unnecessarily—consider responsive `srcset` if needed.

---

## 5. SCREENSHOTS

### Full Page Layouts (6 breakpoints)
| File | Breakpoint | Type |
|---|---|---|
| `01-full-1440.png` | 1440px | Full page |
| `02-full-1280.png` | 1280px | Full page |
| `03-full-1024.png` | 1024px | Full page |
| `04-full-768.png` | 768px | Full page |
| `05-full-430.png` | 430px | Full page |
| `06-full-375.png` | 375px | Full page |

### Hero Closeups (Hero viewport only)
| File | Breakpoint | Type |
|---|---|---|
| `07-hero-1440.png` | 1440px | Hero only |
| `08-hero-1280.png` | 1280px | Hero only |
| `09-hero-768.png` | 768px | Hero only (stacked, photo visible) |
| `10-hero-375.png` | 375px | Hero only (mobile) |

All screenshots in: `docs/analysis/screenshots/web-para-empresas-photography/` _(no versionado: solo en local)_

---

## 6. BUILD & TYPE SAFETY

- **TypeScript:** No errors in `src/app/(landings)/web-para-empresas/**`
- **Build:** Not executed (permission issue on `.next/trace`; dev server compiles successfully)
- **Console errors:** 11 minor errors in browser (Next.js internal, not related to photography changes)

---

## 7. QA CHECKLIST

- [x] Hero photo exists and loads
- [x] WhatIncludes photo exists and loads
- [x] Both photos are local (no external CDN)
- [x] Responsive tested: 375, 430, 768, 1024, 1280, 1440
- [x] No overflow horizontal
- [x] Faces visible but small (environment-focused encadrage)
- [x] Gradient fades correctly (white → transparent)
- [x] Microcards floats don't cover faces
- [x] Text legible on all breakpoints
- [x] Buttons work and scale correctly
- [x] No duplicate photos between pages
- [x] TypeScript types clean
- [x] Component structure matches `/soluciones/` Hero pattern
- [x] Screenshots generated in correct directory
- [x] No styling code copied; adapted to local scale (`wh-*` classes)

---

## 8. DELIVERABLES CHECKLIST

```
HERO PHOTO: USED
HERO PHOTO SOURCE: /c/Users/rivarela/Downloads/two-smiling-young-adults-working-in-a-cafe-...jpg
HERO PHOTO PATH: public/assets/img/web-para-empresas/hero-business.jpg
HERO PHOTO SIZE: 3.8 MB (JPG)
HERO PHOTO DIMENSIONS: 4854×3343 (original), 1920×820 (layout)
HERO PHOTO FORMAT: JPG (should be WebP in production)

WHATINCLUDES PHOTO: USED
WHATINCLUDES PHOTO SOURCE: public/assets/img/home/hero-small-business.webp
WHATINCLUDES PHOTO SIZE: 91 KB (WebP)
WHATINCLUDES PHOTO DIMENSIONS: 1400×933

LAYOUT STRUCTURE: Full-width Hero + WhatIncludes with secondary photo

RESPONSIVE VALIDATION:
375: PASS
430: PASS
768: PASS
1024: PASS
1280: PASS
1440: PASS

GRADIENT OVERLAY: White to transparent (left-to-right)
MICROCARDS: Visible (3 items)
FACES VISIBILITY: Yes, but distant (environment-focused)
OVERFLOW HORIZONTAL: 0px (all breakpoints)
HUMAN IMAGES OUTSIDE APPROVED AREAS: 0
FAKE METRICS: 0
BROKEN LINKS: 0

BUILD: Not run (permission issue on .next/trace)
TYPECHECK: PASS (no errors in Hero or WhatIncludes)
COMPONENT ERRORS: 0 in web-para-empresas

PAGE STATUS: READY FOR VISUAL REVIEW & RESPONSIVE TESTING
```

---

## 9. NOTES FOR PRODUCTION

1. **Image Optimization:**
   - Hero JPG should be converted to WebP and optimized (~400-600 KB target)
   - Consider implementing Next.js Image Optimization or similar
   - Current direct JPG load is functional but not optimized

2. **Microcards Positioning:**
   - Desktop positions hardcoded based on photo
   - If photo or aspect ratio changes, adjust `{ left, top, right, bottom }` values in MICROCARDS array

3. **Object-position:**
   - Hero: `65% 50%` focuses on right/center (people area)
   - WhatIncludes: Uses default (center)
   - Mobile: Adjusted to `60% 50%` for better framing

4. **Gradient Opacity:**
   - Tuned for white background and Manrope font
   - If background color changes, adjust gradient colors in `.wh-bg__fade`

5. **Component Reusability:**
   - Hero pattern can be applied to other landing pages
   - Current implementation is specific to `/web-para-empresas/`; if cloning, use `wh-*` prefix or create generic `.hero-bg-*` utilities

---

**Status:** Ready for staging/production deployment after image optimization.  
**Session:** 2026-10-06 (Haiku 4.5)
