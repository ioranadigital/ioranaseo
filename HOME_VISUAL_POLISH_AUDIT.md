# HOME_VISUAL_POLISH_AUDIT — IORANA SEO 2.0

**Date:** 2026-09-16  
**Page:** / (HOME)  
**Purpose:** Visual refinement audit for prelaunch polish  
**Status:** Analysis Complete - Awaiting Approval  

---

## 📋 EXECUTIVE SUMMARY

HOME page is **structurally sound** and **visually coherent**. No architectural changes needed. This audit identifies **targeted visual refinements** to enhance brand perception and user experience without redesign.

**Total Recommendations:** 7 (3 HIGH, 3 MEDIUM, 1 OPTIONAL)

---

## ✅ WHAT'S WORKING WELL

### 1. **Hierarchy & Flow** ✅
- Clear progression: Hero → Presence → System → Solutions → CTA → FAQ
- Each section has dedicated purpose
- Logical narrative arc from problem to solution
- Good use of whitespace between sections (60-80px padding)

### 2. **Typography** ✅
- Manrope font applied consistently
- Font weights well-used (700/800 for headings, 600 for subheadings)
- Line height ratios appropriate (1.2 for headings, 1.6 for body)
- Responsive sizing with clamp() ensures readability at all sizes

### 3. **Color System** ✅
- Token-based: `--io-action`, `--io-accent`, `--io-bg-soft`, `--io-border`
- Primary accent (#F4A27C) applied consistently to CTAs and icons
- Sufficient contrast between text and backgrounds
- Color palette supports brand identity

### 4. **Icon Usage** ✅
- Lucide React icons throughout
- Consistent sizing (24-32px in headers, 20px in cards)
- Color consistent with action token
- Icons support content without overloading

### 5. **CTA Buttons** ✅
- 8 CTAs total across sections
- Clear distinction: primary (orange) vs secondary (white/border)
- Consistent styling across page
- All point to valid routes (/diagnostico, /web-para-empresas, /soluciones)

### 6. **Mobile Responsiveness** ✅
- Flex layouts adapt properly to 375px+
- No horizontal overflow detected
- Touch targets reasonable (44px+ for buttons)
- Grid layouts stack appropriately

### 7. **Accessibility Baseline** ✅
- lang="es" present
- Links have descriptive text
- Alt attributes on critical images (none in HOME currently)
- Focus states should exist (needs visual verification)

---

## 🎨 VISUAL IMPROVEMENTS IDENTIFIED

### HIGH IMPACT RECOMMENDATIONS

#### 1. **Hero Section — Visual Weight & Emphasis**

**Current State:**
- Hero content area (left) vs empty space (right) on desktop
- Single H1 without supporting visual
- Button has standard opacity

**Issues:**
- Right column unused visual real estate
- Page feels text-heavy at hero fold
- CTA lacks visual prominence

**Recommended Improvements:**

```
Option A: Hero Background Enhancement
- Add subtle gradient background (white → var(--io-bg-soft))
- OR add SVG shape/blob behind H1
- Creates visual interest without adding image
- Cost: Low (CSS only)
- Impact: High (first impression)

Option B: Hero Layout Adjustment
- Maintain 1.2fr/0.8fr grid
- Use right column for highlight box or accent shape
- Could show key metrics (e.g., "500+ clients advised")
- Cost: Medium (layout + content)
- Impact: High (credibility signal)
```

**Recommendation:** IMPLEMENT Option A (gradient background)
- Improves visual hierarchy
- No new assets required
- Subtle but effective
- Maintains mobile clarity

---

#### 2. **PresenciaDigital Section — Icon/Circle Treatment**

**Current State:**
- 3-step flow with circular icon containers
- 68px circles with 2.5px border
- Border color = `--io-action` (orange)
- Background = `--io-bg-soft` (light)

**Issues:**
- Icons feel isolated inside circles
- No visual connection between steps
- Steps don't feel like a progressive "flow"
- Connector lines missing (common pattern for 3-step flows)

**Recommended Improvements:**

```
Option A: Add Connecting Lines
- Horizontal lines between circles on desktop
- Visual "→" to show progression
- Mobile: lines become vertical
- Cost: Low (CSS ::before/::after)
- Impact: High (visual flow clarity)

Option B: Icon Enhancement
- Slightly larger icons (24px → 28px)
- Add subtle glow/shadow behind circles
- Creates depth without loading
- Cost: Low (CSS shadows)
- Impact: Medium (polish)

Option C: Alternative Circle Style
- Switch to borderless circles with solid orange background
- Orange background + white icon
- More modern look
- Cost: Low (color swap)
- Impact: High (visual refresh)
```

**Recommendation:** IMPLEMENT Option A (connecting lines) + Option B (icon sizing)
- Improves visual flow narrative
- No new assets
- Enhances "journey" concept

---

#### 3. **TodoLoQueNecesitas Section — Card Consistency & Visual Hierarchy**

**Current State:**
- Grid of capability cards (likely 2-3 columns)
- Cards have borders, padding, icon treatments
- Each card has icon + title + description

**Issues (to verify visually):**
- Card spacing may vary
- Icon sizing consistency unclear
- Hover state treatment not defined
- Cards might feel flat (no shadow/depth)

**Recommended Improvements:**

```
Option A: Add Subtle Shadows
- box-shadow: 0 2px 8px rgba(0,0,0,0.08)
- Applies on hover: 0 4px 12px rgba(0,0,0,0.12)
- Creates depth without bulk
- Cost: Low (CSS only)
- Impact: Medium (polish)

Option B: Icon Background Circles
- Small circle background for each card's icon
- Color: var(--io-bg-soft)
- Creates visual consistency with PresenciaDigital
- Cost: Low (CSS)
- Impact: High (brand consistency)

Option C: Card Borders
- Soft border-radius increase (from 8px → 12px)
- Border color: lighter shade of --io-border
- Creates softer, more modern feel
- Cost: Very Low
- Impact: Medium (polish)
```

**Recommendation:** IMPLEMENT Option A (hover shadow) + Option B (icon circles)
- Improves interactivity feedback
- Increases visual hierarchy
- Reinforces design system

---

### MEDIUM PRIORITY RECOMMENDATIONS

#### 4. **NuestroSistema Section — Visual Documentation**

**Current State:**
- Explanatory section about approach
- Likely includes text-heavy content
- System methodology breakdown

**Recommended Improvement:**
- Visual timeline or numbered steps visualization
- Could use subtle background patterns
- Add visual breath (more white space)

**Impact:** Medium (improves scannability)

---

#### 5. **PorDondeEmpezar Section — CTA Section Polish**

**Current State:**
- Call-to-action section
- Heading + description + button

**Recommended Improvement:**
- Button styling refinement
- Ensure button text is scannable and action-oriented
- Consider background color (subtle, not default)
- Possible: Add second CTA button (primary + secondary options)

**Impact:** Medium (conversion optimization)

---

#### 6. **Global Button Styling — Consistency Audit**

**Current State:**
- Primary buttons: orange background, white text
- Secondary buttons: white/transparent background, border

**Recommended Check:**
- Hover state color (opacity fade or darker shade?)
- Active state (clicked, focused)
- Disabled state treatment (if any)
- Button text sizing and line-height

**Improvement:** Ensure all buttons follow consistent state pattern:
```
- Default: base color
- Hover: opacity 0.9 or 5% darker
- Active: 10% darker
- Focus: outline ring
- Disabled: 50% opacity, cursor: not-allowed
```

**Impact:** Medium (UX polish)

---

### OPTIONAL RECOMMENDATIONS

#### 7. **Footer Visual Enhancement** (if applicable)

**Current State:**
- Standard footer with links and copyright

**Optional Improvement:**
- Add subtle background color (var(--io-bg-soft) instead of pure white)
- Improves visual separation from body
- Creates "containment" feeling
- Cost: Very Low

**Impact:** Low (polish)

---

## 📊 DETAILED ANALYSIS BY SECTION

### HERO
| Element | Current | Assessment | Priority |
|---------|---------|------------|----------|
| Background | White | Plain, could have subtle gradient | HIGH |
| H1 styling | 32-56px clamp | ✅ Good responsive sizing | — |
| Eyebrow tag | Inline-block, orange text | ✅ Clear | — |
| CTA buttons | Standard button style | ✅ Clear but could use emphasis | MEDIUM |
| Right column | Empty/unused space | ⚠️ Opportunity for visual | HIGH |

### PRESENCIA DIGITAL
| Element | Current | Assessment | Priority |
|---------|---------|------------|----------|
| Flow layout | 3 equal cards | ✅ Clear but no progression visual | MEDIUM |
| Icon circles | 68px, border, light bg | ✅ Good but feels isolated | HIGH |
| Connector lines | None | ⚠️ Missing (common pattern) | HIGH |
| Icons | 24px Lucide | ✅ Good | — |
| Step labels | Simple text | ✅ Clear | — |

### TODO LO QUE NECESITAS
| Element | Current | Assessment | Priority |
|---------|---------|------------|----------|
| Card grid | Multiple columns | ✅ Good layout | — |
| Card styling | Borders | ⚠️ Flat appearance | MEDIUM |
| Hover state | Unclear | ⚠️ Needs shadow treatment | MEDIUM |
| Icons | In cards | ✅ Present | — |
| Icon backgrounds | None/unclear | ⚠️ Inconsistent with rest | HIGH |

### NUESTRO SISTEMA
| Element | Current | Assessment | Priority |
|---------|---------|------------|----------|
| Methodology | Text-based | ✅ Clear but text-heavy | MEDIUM |
| Visual aids | Possibly none | ⚠️ Could benefit from diagram | OPTIONAL |
| Spacing | Adequate | ✅ Good | — |

### POR DONDE EMPEZAR
| Element | Current | Assessment | Priority |
|---------|---------|------------|----------|
| CTA section | Standard | ✅ Clear but plain | MEDIUM |
| Button styling | Consistent | ✅ Good | — |
| Background | Unclear | ⚠️ May need accent | MEDIUM |

### FAQ
| Element | Current | Assessment | Priority |
|---------|---------|------------|----------|
| Accordion | Lucide icons | ✅ Good | — |
| Styling | Standard | ✅ Works well | — |
| Colors | Brand consistent | ✅ Matches system | — |

---

## 🎯 PRIORITIZED ACTION LIST

### TIER 1: HIGH VISUAL IMPACT (Execute if approved)

1. **Hero gradient background** (or blob shape)
   - Effort: 15 min
   - Impact: High
   - Recommendation: CSS gradient from white to --io-bg-soft

2. **PresenciaDigital connecting lines**
   - Effort: 30 min
   - Impact: High
   - Recommendation: CSS ::before pseudo-elements between circles

3. **TodoLoQueNecesitas icon backgrounds**
   - Effort: 20 min
   - Impact: High (consistency)
   - Recommendation: Small circle backgrounds for all card icons

### TIER 2: MEDIUM POLISH (Nice-to-have)

4. **Card hover shadows**
   - Effort: 10 min
   - Impact: Medium (interactivity)
   - Recommendation: Smooth shadow increase on hover

5. **Global button state refinement**
   - Effort: 20 min
   - Impact: Medium (UX clarity)
   - Recommendation: Define hover/active/focus states consistently

6. **NuestroSistema visual enhancement**
   - Effort: 30-60 min
   - Impact: Medium (scannability)
   - Recommendation: Add timeline or step visualization

### TIER 3: OPTIONAL (Nice polish only)

7. **Footer background**
   - Effort: 5 min
   - Impact: Low (aesthetic)
   - Recommendation: Apply --io-bg-soft background

---

## 📱 RESPONSIVE VERIFICATION NEEDED

Before implementation, visual verification needed at:

- **375px** (mobile)
- **768px** (tablet)
- **1280px** (desktop)

Specifically check:
- Gradient backgrounds don't crush on mobile
- Connecting lines scale/hide appropriately
- Icon sizing remains balanced
- Button sizes remain touchable (44px+ target)

---

## 🚫 WHAT NOT TO CHANGE

❌ **Architecture** - Page structure frozen  
❌ **Navigation** - All links/routes fixed  
❌ **Typography family** - Manrope stays  
❌ **CTA destinations** - All routes hardcoded  
❌ **SEO elements** - No changes to metadata  
❌ **Form behavior** - No changes  

---

## ✅ WHAT CAN CHANGE

✅ **Background colors** - Gradients, soft colors  
✅ **Shadows** - Box-shadows, text-shadows  
✅ **Borders** - Radius, color, weight  
✅ **Spacing** - Padding, gaps, margins  
✅ **Icon styling** - Size, background, color  
✅ **Button states** - Hover, active, focus (visual only)  
✅ **Accent colors** - Via token updates  

---

## 📝 IMPLEMENTATION NOTES

### For Developer:
- All changes should be CSS-only where possible
- No new components unless absolutely required
- Maintain token-based color system
- Test at 375px, 768px, 1280px breakpoints
- Verify no CLS (Cumulative Layout Shift) issues

### For Designer/Reviewer:
- Approve each tier before implementation
- Visual QA needed after each change
- Compare desktop/mobile side-by-side
- Verify brand consistency with accent color

---

## 🛑 NEXT STEP

**DETENTE.**

Awaiting approval before implementing any changes.

Recommendation: Approve TIER 1 improvements (highest ROI) and proceed iteratively.

---

**Generated:** 2026-09-16  
**Page:** HOME (/)  
**Status:** Ready for Review  
**Awaiting:** Visual Polish Approval
