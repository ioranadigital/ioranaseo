# HOME VISUAL POLISH — TIER 1 EXECUTIVE REVIEW

**Date:** 2026-09-16  
**Purpose:** Detailed review of HIGH IMPACT visual improvements for HOME page  
**Status:** Ready for Approval (No Implementation Yet)  

---

## 📋 TIER 1 SUMMARY TABLE

| # | Mejora | Elemento | Impacto | Alcance | Riesgo | Recomendación |
|---|--------|----------|---------|---------|--------|---------------|
| 1 | Hero Background Gradient | Hero Section | HIGH | HOME ONLY | LOW | RECOMMENDED |
| 2 | PresenciaDigital Connecting Lines | Flow Visual | HIGH | HOME ONLY | LOW | RECOMMENDED |
| 3 | TodoLoQueNecesitas Icon Backgrounds | Card System | HIGH | HOME ONLY | MEDIUM | RECOMMENDED |
| 4 | Button State Refinement | Global CTAs | HIGH | GLOBAL COMPONENT | HIGH | OPTIONAL |
| 5 | Card Hover Shadows | Card Styling | HIGH | HOME ONLY | LOW | RECOMMENDED |

---

## 🎯 DETAILED PROPOSALS

---

## MEJORA #1: HERO BACKGROUND GRADIENT

### 1. ELEMENTO
Hero Section (top fold)

### 2. ESTADO ACTUAL
- Background: solid white (`backgroundColor: 'var(--io-bg)'`)
- No visual distinction from content area below
- Right column empty (visual imbalance)
- Text sits directly on white with no visual "frame"

### 3. PROBLEMA VISUAL

**Issue:** Hero feels flat and text-dominant

- **Jerarquía:** No visual emphasis for primary CTA
- **Personalidad de marca:** Plain, lacks visual sophistication
- **Consistencia:** Other sections use subtle backgrounds; hero is stark white
- **Percepción profesional:** Minimalist approach works, but feels underbaked vs. accent color usage elsewhere

**Why it matters:** Hero is first impression. Current treatment is functional but doesn't elevate brand perception.

### 4. PROPUESTA

**Option A (RECOMMENDED):** Subtle gradient background

```
Background: Linear gradient from white (top) to var(--io-bg-soft) (bottom)
Direction: 180deg (top to bottom)
Duration: Fade over 60-80% of hero height
Effect: Creates subtle visual elevation without distraction
```

**Visual Effect:**
- Top of hero remains pure white (text contrast)
- Bottom gradually transitions to soft gray (`--io-bg-soft`)
- Creates container feeling without visual bulk
- Right column gets subtle background color that frames content

**Alternative (OPTIONAL):** SVG blob shape in right column
- Subtle abstract shape in accent color (#F4A27C)
- Opacity: 8-12% (very subtle)
- Positioned in background layer
- Adds personality without distraction

**Recommendation:** Implement Option A (gradient). Option B (blob) is more risky.

### 5. IMPACTO
**HIGH**
- Immediately elevates visual perception
- First-fold impact (user sees immediately on load)
- Improves brand positioning (more polished)
- Non-intrusive change

### 6. ALCANCE
**HOME ONLY**
- Applies only to `src/app/(landings)/home/components/Hero.tsx`
- Does not affect other pages
- Does not affect global design system

### 7. ARCHIVOS AFECTADOS
- `src/app/(landings)/home/components/Hero.tsx` — style prop on outer section
- No other files impacted

### 8. RESPONSIVE

**375px (mobile):**
- Gradient still visible but compresses vertically
- Text readability: NO IMPACT
- Visual effect: Maintained at reduced vertical space
- Touch targets: NO IMPACT

**768px (tablet):**
- Gradient displays normally
- Text hierarchy: NO IMPACT
- Visual balance: Improved (gradient fills horizontal space)

**1280px (desktop):**
- Gradient displays as designed
- Right column gradient background frames empty space nicely
- Visual effect: Maximum impact

**Recommendation:** NO RESPONSIVE ISSUES. Gradient scales perfectly.

### 9. RIESGO
**LOW**
- CSS-only change (no JavaScript, no DOM changes)
- No impact on other pages
- No global token changes
- No CLS risk (background property doesn't affect layout)
- No accessibility impact (purely aesthetic)
- Gradient is subtle (doesn't overpower text)

### 10. RECOMENDACIÓN
**RECOMMENDED**
- Low risk, high visual impact
- Improves brand perception immediately
- Simple to implement, simple to revert if needed
- No technical debt

---

## MEJORA #2: PRESENCIADIGITAL CONNECTING LINES

### 1. ELEMENTO
PresenciaDigital Section — 3-Step Flow Visualization

### 2. ESTADO ACTUAL
- 3 steps displayed as cards with circular icon containers
- Icon circles: 68px diameter, orange border, light gray background
- Steps laid out horizontally (flex, gap: 28px)
- NO visual connection between steps
- Each card is visually isolated

### 3. PROBLEMA VISUAL

**Issue:** Steps feel disconnected, don't communicate "flow" or "progression"

- **Jerarquía:** All 3 steps appear equally isolated
- **Claridad:** Users don't perceive this as sequential steps
- **Personalidad de marca:** Lacks polish (3 separate boxes vs. unified journey)
- **Consistencia:** Other sections use visual connections; this section doesn't

**Why it matters:** Section title is "De la presencia digital a las **oportunidades**" — the journey narrative is crucial. Current visual doesn't communicate the journey aspect.

### 4. PROPUESTA

**Implementing Connecting Lines between circles:**

```
Visual: Horizontal line connecting circle centers (desktop)
        Vertical line connecting circles (mobile, stacked)

Details:
- Line color: var(--io-action) (orange, same as circle border)
- Line weight: 2px
- Line opacity: 60% (lighter than circles to avoid dominance)
- Desktop: Horizontal line between step circles
- Mobile: Vertical line between stacked circles
- Implementation: CSS ::before pseudo-element on container
```

**Visual Effect:**
- Creates visual "flow" between steps
- Emphasizes progression: Te encuentran → Te entienden → Contactan
- Modern design pattern (common in process flows)
- Subtle but clear signal of journey

**Desktop Layout:**
```
   Circle 1 ————— Circle 2 ————— Circle 3
   (find)       (understand)   (contact)
```

**Mobile Layout:**
```
   Circle 1
      |
   Circle 2
      |
   Circle 3
```

### 5. IMPACTO
**HIGH**
- Dramatically improves visual narrative (journey vs. isolated items)
- Teaches user to read flow left-to-right or top-to-bottom
- Elevates visual sophistication
- Subtle but impactful change

### 6. ALCANCE
**HOME ONLY**
- Applies only to `src/app/(landings)/home/components/PresenciaDigital.tsx`
- No global components affected
- No token changes required

### 7. ARCHIVOS AFECTADOS
- `src/app/(landings)/home/components/PresenciaDigital.tsx` — add ::before line styling
- Possibly add media query for mobile (vertical lines)

### 8. RESPONSIVE

**375px (mobile):**
- Line orientation: Vertical (between stacked circles)
- Line visibility: Maintained
- Touch targets: NO IMPACT (circles remain 68px)
- Spacing: Lines fit naturally between circles

**768px (tablet):**
- Depending on layout: May be horizontal or vertical
- Lines display correctly
- Visual effect: Maintained

**1280px (desktop):**
- Horizontal lines display as designed
- Visual effect: Maximum clarity
- No layout shift

**Recommendation:** NO RESPONSIVE ISSUES. Lines adapt naturally with flex layout.

### 9. RIESGO
**LOW**
- CSS-only change (::before pseudo-element)
- No DOM changes
- No global impact
- No CLS risk (pseudo-elements don't affect layout flow)
- Line opacity/color doesn't affect text contrast
- Accessibility: NO IMPACT (pseudo-element, decorative)

### 10. RECOMENDACIÓN
**RECOMMENDED**
- Low risk, high visual impact
- Solves the visual narrative problem elegantly
- Standard design pattern (process flows)
- Simple to implement and revert

---

## MEJORA #3: TODOLOQUEENECESITAS ICON BACKGROUNDS

### 1. ELEMENTO
TodoLoQueNecesitas Section — Capability Cards

### 2. ESTADO ACTUAL
- Grid of cards displaying capabilities
- Each card has: icon + title + description
- Icons: Lucide React, likely 24px size
- Icons currently: placed inline with text, NO background circle
- Cards have border styling, NO inner card-level icon treatment

### 3. PROBLEMA VISUAL

**Issue:** Icons lack visual emphasis; inconsistent with PresenciaDigital section

- **Consistencia:** PresenciaDigital uses 68px icon circles; TodoLoQueNecesitas icons are bare
- **Jerarquía:** Icons are de-emphasized; should be visual focal points
- **Personalidad de marca:** Bare icons feel less polished than badge-style circles
- **Percepción profesional:** Icon circles signal importance and create visual rhythm

**Why it matters:** Visual consistency across sections. PresenciaDigital establishes icon circle pattern; breaking it in adjacent section feels incomplete.

### 4. PROPUESTA

**Add subtle circle backgrounds to all card icons:**

```
Icon Background Treatment:
- Container: 50-56px diameter circle
- Background color: var(--io-bg-soft) (light gray)
- Icon inside: 24px, color: var(--io-action) (orange)
- Border: Optional (1px var(--io-border) for definition)
- Implementation: Wrapper div around each icon

Visual Effect:
- Creates visual balance with PresenciaDigital
- Icons become focal points
- Adds visual hierarchy to cards
- Reinforces design system (circular icon pattern)
```

**Example:**
```
Before:  [Icon] Title
         Description

After:   [⭕] Title
         Description
         (where ⭕ is 50px gray circle with orange icon inside)
```

### 5. IMPACTO
**HIGH**
- Immediately improves visual consistency
- Elevates card design (circles are modern pattern)
- Creates visual hierarchy (icon → title → description)
- Enhances brand perception

### 6. ALCANCE
**HOME ONLY** (but could be applied globally to all card icons)
- Primary: `src/app/(landings)/home/components/TodoLoQueNecesitas.tsx`
- Could be applied to cards on other pages (e.g., /soluciones, /web-para-empresas)
- Does NOT affect global button or component system

**Recommendation:** Start HOME ONLY. Can extend to other pages if approved.

### 7. ARCHIVOS AFECTADOS
- `src/app/(landings)/home/components/TodoLoQueNecesitas.tsx` — add circle wrapper styling around icons
- Optionally: Other card-based sections if approved

### 8. RESPONSIVE

**375px (mobile):**
- Icon circles: 50px (slightly smaller for mobile)
- Card layout: Stacks vertically
- Visual hierarchy: Maintained
- Touch target: Icons remain easily tappable

**768px (tablet):**
- Icon circles: 52px
- Card grid: Likely 2 columns
- Visual effect: Balanced

**1280px (desktop):**
- Icon circles: 56px
- Card grid: Likely 3-4 columns
- Visual effect: Maximum clarity

**Recommendation:** Icons scale proportionally. NO RESPONSIVE ISSUES.

### 9. RIESGO
**MEDIUM**
- **Why MEDIUM:** Icon circle is a new visual element
- **Risk factors:**
  - Must ensure circle sizing doesn't break card proportions
  - Icon sizing must remain balanced within circle
  - Card padding/spacing must adjust to accommodate circles
  - If extended globally: could affect many pages
- **Mitigation:** Test on 375/768/1280 breakpoints; start HOME ONLY

**No accessibility risk (decorative element)**
**No CLS risk (circles fit within card dimensions)**

### 10. RECOMENDACIÓN
**RECOMMENDED**
- Improves visual consistency with high ROI
- Medium complexity (styling + testing)
- Risk is localized (HOME ONLY start)
- Can be extended incrementally

---

## MEJORA #4: BUTTON STATE REFINEMENT (OPTIONAL — GLOBAL IMPACT)

### 1. ELEMENTO
Global Button Styling (all CTAs across entire site)

### 2. ESTADO ACTUAL
- Primary buttons: Orange background, white text
- Secondary buttons: White/transparent background, border
- Hover state: Likely unclear or undefined
- Active/focus state: Likely unclear
- Disabled state: Probably not styled

### 3. PROBLEMA VISUAL

**Issue:** Button states (hover/focus/active) are inconsistent or undefined

- **Claridad:** Users don't get clear feedback on hover
- **Interactividad:** Buttons should have visible hover state
- **Consistencia:** Desktop hover may differ from mobile
- **Accesibilidad:** Focus state may not be visible on keyboard navigation

### 4. PROPUESTA

**Define and implement consistent button states:**

```
PRIMARY BUTTON (Orange):
- Default: background: var(--io-action), text: white
- Hover: background: darker shade (10% darker) or opacity: 0.9
- Focus: outline ring (2px var(--io-action), offset: 2px)
- Active: background: 15% darker
- Disabled: opacity: 0.5, cursor: not-allowed

SECONDARY BUTTON (Border):
- Default: border: 1px var(--io-action), background: transparent
- Hover: background: var(--io-bg-soft) or border-color: darker
- Focus: outline ring
- Active: background: var(--io-bg-soft) with darker border
- Disabled: opacity: 0.5, cursor: not-allowed
```

### 5. IMPACTO
**HIGH**
- Improves UX clarity (users know buttons are interactive)
- Improves accessibility (focus state visible on keyboard nav)
- Professional polish (all interactions smooth)
- Consistency across entire site

### 6. ALCANCE
**GLOBAL COMPONENT** ⚠️
- Affects all CTAs across entire site
- All pages: HOME, /web-para-empresas, /soluciones, /diagnostico, etc.
- Header, Footer may have buttons
- Global impact is significant

### 7. ARCHIVOS AFECTADOS
- All components with button styling
- Possibly: `src/components/` shared button styles if they exist
- Possibly: individual section component .tsx files
- Multiple files across site

### 8. RESPONSIVE

**375px/768px/1280px:**
- Button states should behave identically
- Touch devices: Hover doesn't apply (but focus does on long press)
- Desktop: Hover + Focus both visible
- NO RESPONSIVE ISSUES

### 9. RIESGO
**HIGH** ⚠️
- Global scope: affects entire site
- Touch implementation: hover doesn't work on mobile
- If color choices wrong: could reduce contrast
- Testing required: all pages, all button states
- Potential regression: if not tested thoroughly

**Mitigation needed:** Must test across all pages after implementation.

### 10. RECOMENDACIÓN
**OPTIONAL**
- Important for UX quality
- But HIGH RISK due to global scope
- Recommend: SECOND PHASE after HOME polish is approved
- Better to handle after single-page polish is validated

---

## MEJORA #5: CARD HOVER SHADOWS

### 1. ELEMENTO
TodoLoQueNecesitas Cards (and similar card components)

### 2. ESTADO ACTUAL
- Cards display with borders
- NO hover state visible
- NO shadow effect
- Cards appear flat

### 3. PROBLEMA VISUAL

**Issue:** Cards don't respond to interaction; feel inactive

- **Interactividad:** No visual feedback on hover
- **Modernidad:** Shadows are standard in modern UI design
- **Profundidad:** Flat design can feel dated
- **Consistencia:** Other elements have depth treatment

### 4. PROPUESTA

**Add subtle box-shadow on card hover:**

```
Default state:
- box-shadow: none (or light 1px shadow)

Hover state:
- box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08)
- Transition: box-shadow 0.2s ease-out
- Effect: Card lifts slightly, creating depth

Implementation:
- Apply to card container on hover
- Smooth transition over 0.2s
- Opacity 8% (very subtle, not dramatic)
```

### 5. IMPACTO
**HIGH**
- Makes cards feel interactive
- Subtle but immediate visual feedback
- Improves perceived responsiveness
- Modern, polished appearance

### 6. ALCANCE
**HOME ONLY** (initially)
- `src/app/(landings)/home/components/TodoLoQueNecesitas.tsx`
- Could extend to other card-based sections
- Does NOT affect global system

### 7. ARCHIVOS AFECTADOS
- `src/app/(landings)/home/components/TodoLoQueNecesitas.tsx` — add hover shadow
- Possibly: other card components

### 8. RESPONSIVE

**375px (mobile):**
- Touch devices: Hover doesn't apply (but active state could)
- Shadow: Would display on active/pressed state
- No visual issues

**768px/1280px (tablet/desktop):**
- Hover shadow displays normally
- Smooth interaction feedback
- Perfect user experience

**Recommendation:** Works well on hover. Touch devices get different interaction (that's OK).

### 9. RIESGO
**LOW**
- CSS-only change
- No layout impact
- No accessibility impact
- Reversible (simple property)
- No cross-page dependencies

### 10. RECOMENDACIÓN
**RECOMMENDED**
- Low risk, high polish value
- Improves interactivity feedback
- Simple implementation
- Good ROI for effort

---

## 📊 SUMMARY RECOMMENDATIONS

### APPROVE IMMEDIATELY (Recommended):
1. ✅ Hero Background Gradient — HIGH impact, LOW risk, HOME only
2. ✅ PresenciaDigital Connecting Lines — HIGH impact, LOW risk, HOME only
3. ✅ TodoLoQueNecesitas Icon Backgrounds — HIGH impact, MEDIUM risk, HOME only
5. ✅ Card Hover Shadows — HIGH impact, LOW risk, HOME only

### DEFER TO PHASE 2 (Optional):
4. ⏸️ Button State Refinement — HIGH impact, HIGH risk, GLOBAL (needs separate QA)

### ESTIMATED IMPLEMENTATION TIME (if approved):
- Improvement #1 (gradient): 15 minutes
- Improvement #2 (lines): 30 minutes
- Improvement #3 (icon circles): 30 minutes
- Improvement #5 (shadows): 10 minutes
- **Total: ~85 minutes** (1.5 hours)
- Plus: Responsive testing (30 minutes)

---

## 🛑 NEXT STEP

**DETENTE.**

No implementation.

Awaiting explicit approval to proceed with TIER 1 improvements.

---

**Generated:** 2026-09-16  
**Status:** Ready for Visual Approval  
**Scope:** HOME Page Visual Polish  
**Risk Level:** LOW (4 improvements) / MEDIUM (1 improvement deferred)
