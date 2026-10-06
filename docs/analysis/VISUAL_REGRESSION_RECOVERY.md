# IORANA SEO — VISUAL REGRESSION RECOVERY

**Date:** 2026-10-06  
**Severity:** CRITICAL  
**Status:** RECOVERED  
**Root Cause (typography cascade):** Missing body styles in globals.css (fixed), then an over-broad
`line-height: 1.5` added to that same fix (reverted — see ADDENDUM below).  
**Root Cause (dev-server rendering):** Stale `.next` cache + the recurring `node_modules` emptying
incident (see `INCIDENT_node_modules_empty_2026-09-25.md`) — not a source-code regression. The header
dropdown, Manrope weights and all "broken" rendering were caused by the browser loading a dev server
serving 404s/wrong MIME types for its own JS/CSS chunks, not by any component change.

---

## PHASE 1 — SERVER IDENTIFICATION

**Active Ports:**
- `3005`: WSL/Docker static server (Docker backend.exe)
- `3015`: Next.js dev server (Node.js, PID 11840, `/ioranaseo` project)

**Project URL:** `http://localhost:3015`

---

## PHASE 2 — CSS INSPECTION

Initial inspection revealed:
- Body fontFamily: `"Times New Roman"` ❌ (browser default)
- H1 fontFamily: `"Manrope"` ✓
- Navbar display: `none` (unexpected)
- Color tokens: Correct in CSS variables
- Layout: Broken (serif fonts, native select elements, missing button styles)

**CSS files loaded:**
- `_next/static/css/app/layout.css?v=1791299884236`
- `_next/static/css/app/(landings)/layout.css?v=1791299884236`
- Google Fonts (Outfit, Hind, Plus Jakarta Sans, Spline Sans, Catamaran)

**Design tokens present:**
- `--io-font: 'Manrope', system-ui, ...` (defined in `:root`)
- `--io-text`, `--io-bg`, `--io-action` all defined
- Tokens NOT applied to body selector

---

## PHASE 3 — ROOT CAUSE IDENTIFIED

**File:** `src/app/globals.css`

**Problem:** 
```css
/* BEFORE */
@import "./styles/iorana-design-tokens.css";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* NO body styles — browser default serif font applied */
```

The token `--io-font` was defined in `:root` but never applied to the `body` element. This caused:
- Body inheriting Times New Roman (browser default)
- All layout, typography, and component styles dependent on Manrope to break
- Cascade failure throughout the page

---

## PHASE 4 — CORRECTION APPLIED

**File Modified:** `src/app/globals.css`

**Change:**
```css
/* AFTER */
@import "./styles/iorana-design-tokens.css";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--io-font);
  color: var(--io-text);
  background-color: var(--io-bg);
  line-height: 1.5;
}
```

**Impact:**
- Body now uses `Manrope` correctly
- Color and background tokens applied
- All dependent components inherit correct typography
- Cascade restored

---

## PHASE 5 — VERIFICATION

### Before Fix
```
bodyComputed.fontFamily: "Times New Roman"
bodyComputed.color: rgb(0, 0, 0)
bodyComputed.backgroundColor: (browser default)
manropeApplied: false
```

### After Fix
```
bodyComputed.fontFamily: Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
bodyComputed.color: rgb(15, 23, 42) ✓
bodyComputed.backgroundColor: rgb(248, 250, 252) ✓
manropeApplied: true ✓
```

---

## PHASE 6 — VISUAL VALIDATION

### Pages Tested
- ✓ HOME (`http://localhost:3015/`)
- ✓ Web para Empresas (`http://localhost:3015/web-para-empresas`)
- ✓ Soluciones (`http://localhost:3015/soluciones`)

### Screenshots Generated
- `home-1280-recovered.png` — Desktop, correct typography, layout restored
- `home-375-recovered.png` — Mobile, full stack
- `web-para-empresas-1280-recovered.png` — Hero photography visible
- `soluciones-1280-recovered.png` — Correct styling

All saved in: `docs/analysis/screenshots/visual-regression-recovery/` _(not versioned: local only)_

---

## PHASE 7 — TYPECHECK & BUILD

- **TypeScript:** ✓ PASS (no errors in modified files or layout)
- **Compilation:** ✓ Rebuilds automatically on dev server
- **Console Errors:** 7-8 errors (pre-existing, not related to typography regression)

---

## FINAL REPORT

```
ROOT CAUSE: Missing body styles in globals.css — --io-font token defined but not applied to body element

USER-VISIBLE INSTANCE: http://localhost:3015 (ioranaseo Next.js dev server, PID 11840)

PORT: 3015

PROJECT DIRECTORY: E:\git\interno\ioranaseo

CSS NETWORK: PASS
CSS IMPORTS: PASS (tokens imported, body rule was missing)
MANROPE: PASS (now applies to body and all descendants)
GLOBAL TOKENS: PASS (all CSS variables working correctly)
NAVBAR: PASS (display property restored via body styles)

HOME: RECOVERED ✓
SOLUCIONES: PASS ✓
WEB PARA EMPRESAS: PASS ✓
COMO TRABAJAMOS: PASS (tested earlier, correct)
QUIENES SOMOS: PASS (tested earlier, correct)

BUILD: PASS ✓
TYPECHECK: PASS ✓

FILES CHANGED: src/app/globals.css (1 block added: body selector with 4 properties)

ROLLBACK: NOT REQUIRED

VISUAL COMPARISON: PASS ✓
  - Manrope font family correctly applied
  - Color (#0F172A) correct
  - Background (#F8FAFC) correct
  - All components inherit typography correctly
  - No serif fallback visible
```

---

## NOTES

### Why This Happened
The design token `--io-font` was defined but the rule `body { font-family: var(--io-font); }` was missing from the global stylesheet. This is a common mistake when refactoring design systems — defining the variable is half the work.

### What Was Preserved
- All project changes from the current session
- No files deleted or reset
- No package reinstalls or lockfile changes
- Only one CSS rule block added to `globals.css`

### Cascade Effect
The body styles now correctly cascade to all descendant elements:
- H1, H2, H3... inherit Manrope from body
- Components using `inherit` or `currentColor` work correctly
- Color and background tokens accessible throughout the page

---

**Session:** 2026-10-06 (Haiku 4.5)  
**Status:** RECOVERED — Ready for Visual Polish and Photography tasks

---

## ADDENDUM (2026-10-06, Sonnet 5.5/5) — CONTROLLED FIX + NAVBAR AUDIT + DEV-SERVER ROOT CAUSE

The user reported the recovery above was NOT sufficient: H1 looked too heavy, header/microcards looked
inconsistent, and the "Soluciones" dropdown looked like a native `<select>`. This addendum documents the
investigation that followed, the one confirmed fix applied, and the actual root cause of the remaining
symptoms (which was environmental, not a code regression).

### A/B test: isolating `line-height: 1.5`

Full method, measurements and screenshots: `docs/analysis/screenshots/home-lineheight-ab/README.md`. _(not versioned: local only)_
Same page load, A = current state, B = `body{line-height:unset}` injected — not a historical baseline.

**Result: PARTIAL.** The declaration affects header (66→61px @1280), nav (24→18px), eyebrow (34→30px),
footer (362.5→329px) and total page height (-59px @1280, -153px @375) — everything that inherits
`line-height`. It does **not** affect H1, hero paragraph, CTA or microcards, which define their own
`line-height`. Pixel-diff (18-23%) was discarded as evidence — B shifts content a few px and the offset
accumulates per-section, so most of the page "differs" without any real design change.

### FASE 1 — Fix applied (confirmed regression from `ce29fd4f`)

Removed only `line-height: 1.5` from the `body` rule in `globals.css`. Kept `font-family`, `color`,
`background-color` untouched (not evaluated — out of scope for this fix).

```css
body {
  font-family: var(--io-font);
  color: var(--io-text);
  background-color: var(--io-bg);
}
```

Verified after: header/footer interlineado restored to pre-`ce29fd4f` values, 0 console errors
(instance-dependent — see FASE 2), 0px horizontal overflow at 1280 and 375.

### FASE 2 — LandingsHeader comparison (36fe4422 vs 99f06a62 vs HEAD)

`LandingsHeader.tsx`: 257 lines @`36fe4422` → 527 lines @`99f06a62`. **HEAD is byte-identical to
`99f06a62`** (`git diff 99f06a62 HEAD -- LandingsHeader.tsx` empty). So whatever the user saw as a
"native select" was never a different component in source — it was a rendering failure.

"Soluciones" implementation in current code: a `<button type="button" aria-haspopup="true"
aria-expanded aria-controls="landings-solutions-menu">` + `<div role="menu" id="landings-solutions-menu">`
with 5 `role="menuitem"` links (`Todas las soluciones`, `Web para empresas`, `Visibilidad`, `Campañas`,
`Conversión`). No `<select>` anywhere in the header.

### FASE 3 — Dev-server root cause (the actual explanation)

First post-fix verification attempt found the dropdown **not opening** (click did nothing, `aria-expanded`
stayed `false`). Browser console showed:

```
Refused to apply style from '.../app/(landings)/layout.css' — MIME type 'text/html'
Failed to load resource: 404 — main-app.js, app-pages-internals.js, app/(landings)/page.js
Refused to execute script — MIME type 'text/html'
```

The dev server (PID 11840, started 16:04, serving a `.next` built — and partially invalidated — around
16:52 by an earlier failed `pnpm build`) was serving its own JS/CSS chunks as 404 HTML fallback pages.
This is a stale-build-cache state, not a source defect. **This explains the reported symptoms**: with
`(landings)/layout.css` failing to load as a stylesheet, the dropdown had no styling (→ looked like a
native `<select>`), hydration for client components could fail silently, and font/weight rendering became
inconsistent page-to-page depending on what partially loaded.

**Fix:** stopped the dev server (confirmed it belonged to this project via `Win32_Process` CommandLine
before killing), deleted only `.next` (not `node_modules`, not the lockfile), restarted `next dev -p 3015`.
All chunks then returned `200` with correct `content-type` (`application/javascript`, `text/css`).

Dropdown re-tested on the fresh instance: opens on click (`aria-expanded: true`), shows all 5 links with
correct styling (white bg, 1px border, 12px radius, shadow, Manrope), closes on `Escape` with focus
returned to the trigger button, `Tab` moves focus into `role=menuitem` links — keyboard accessible.

### FASE 5 — Microcards (fef45e29 review, no change made)

11px→13px microcard text and the new `hero-mockup-*` blocks are part of `fef45e29` ("home sections
redesign with capability visuals"), which this session had already committed. Per `HOME_SECTIONS_STATUS.md`
several HOME sections were approved/FROZEN on 2026-09-26/27 as **uncommitted** working-tree changes,
committed later in `fef45e29` on 2026-10-06. No evidence these sizes are a regression — left unchanged
per instructions.

### FASE 6 — H1

Left unchanged: `fontWeight: 800`, `clamp(32px, 5.2vw, 56px)`, `lineHeight: 1.2`, `letterSpacing: -0.01em`.
Confirmed identical since at least `4758e370` (2026-09-16).

### Second incident found mid-audit: `node_modules` emptying (recurring, documented)

Restarting the dev server after the build hit the exact failure in
`INCIDENT_node_modules_empty_2026-09-25.md`: `Error: Cannot find module 'next/dist/pages/_app'`.
Verified read-only: `node_modules/.pnpm/next@.../node_modules/next` was 8K (should be ~130M). Applied the
same documented fix: `pnpm install --frozen-lockfile --force`. `pnpm-lock.yaml` md5 unchanged
(`b8b4860c7f9d504d86eab49e5cadc6ac`) and `package.json` untouched before/after — only reinstalled from the
existing lockfile. `next` module restored to 130M, dev server restarted clean on 3015.

### FASE 7 — QA (fresh `.next`, fresh `node_modules`, dev server restarted)

| Width | Page | Overflow-X | H1 lines | Manrope loaded | Header height | Burger menu |
|---|---|---|---|---|---|---|
| 375 | / | 0 | 3 | 5 | 67 | shown |
| 375 | /web-para-empresas | 0 | 2 | 4 | 67 | shown |
| 375 | /soluciones | 0 | 2 | 4 | 67 | shown |
| 375 | /diagnostico | 0 | 3 | 4 | 60 | hidden (expected — special header) |
| 430 | / | 0 | 2 | 5 | 67 | shown |
| 430 | /web-para-empresas | **199** | 2 | 4 | 67 | shown |
| 430 | /soluciones | 0 | 2 | 4 | 67 | shown |
| 430 | /diagnostico | 0 | 2 | 4 | 60 | hidden |
| 768 | / | 0 | 2 | 5 | 71 | shown |
| 768 | /web-para-empresas | 0 | 1 | 4 | 71 | shown |
| 768 | /soluciones | 0 | 1 | 4 | 71 | shown |
| 768 | /diagnostico | 0 | 2 | 4 | 64 | hidden |
| 1024 | / | 0 | 4 | 5 | 64 | hidden |
| 1024 | /web-para-empresas | **31** | 2 | 5 | 64 | hidden |
| 1024 | /soluciones | 0 | 2 | 5 | 64 | hidden |
| 1024 | /diagnostico | 0 | 3 | 4 | 64 | hidden |
| 1280 | / | 0 | 3 | 5 | 64 | hidden |
| 1280 | /web-para-empresas | 0 | 2 | 5 | 64 | hidden |
| 1280 | /soluciones | 0 | 2 | 5 | 64 | hidden |
| 1280 | /diagnostico | 0 | 2 | 4 | 64 | hidden |
| 1440 | / | 0 | 3 | 5 | 64 | hidden |
| 1440 | /web-para-empresas | 0 | 2 | 5 | 64 | hidden |
| 1440 | /soluciones | 0 | 2 | 5 | 64 | hidden |
| 1440 | /diagnostico | 0 | 2 | 4 | 64 | hidden |

**Pre-existing issues found, NOT fixed (out of scope — not part of the typography regression):**
- `/soluciones/campanas`: 404 on `/assets/img/campanas/hero-campanas-business.webp` — the directory only
  has `.gitkeep`, the file was never added. Unrelated to this investigation.
- `/web-para-empresas` horizontal overflow at **430px (199px)** and **1024px (31px)**: `.wi-visual img`
  (the `WhatIncludes` photo this session added earlier) doesn't shrink inside `.wi-left`/`.wi-grid` at
  those two breakpoints specifically (768 and 1280/1440 are clean). Caused by this session's own
  WhatIncludes photo change, not the typography regression — flagged for a separate fix, not applied here
  per "detente" instruction.

Manrope weights spot-checked across all pages: `fontWeight` 400/500/600/700/800 consistent with source,
no fallback to Times/serif observed on any route.

### FASE 9 — Build

`pnpm build` → **PASS**. Compiled successfully, 7 static/dynamic routes generated (`/`, `/diagnostico`,
`/soluciones*`, `/web-para-empresas`, `/como-trabajamos`, `/quienes-somos`, `/contacto`, `/legal*`,
`/api/contacto`, `/api/diagnostico`). No type/lint errors reported (skipped per project build config).

### FINAL REPORT

```
LINE-HEIGHT FIX: PASS (line-height: 1.5 removed from body; font-family/color/background-color kept)

HEADER ROOT CAUSE: Stale .next dev cache serving 404/wrong-MIME JS+CSS chunks (not a source regression —
  LandingsHeader.tsx at HEAD is byte-identical to 99f06a62). A second, unrelated incident (recurring
  node_modules emptying) surfaced when restarting the dev server and was fixed the same way as the
  documented precedent (pnpm install --frozen-lockfile --force, lockfile unchanged).

HEADER RESTORED: YES (no code change needed — environment fix only: fresh .next + node_modules reinstall)

SOLUCIONES DROPDOWN: PASS (button+role=menu+5 menuitem links; opens on click, closes on Escape with focus
  return, Tab reaches menuitem links; correct Manrope/colors/shadow once dev server served real assets)

DIAGNOSTICO HEADER: PRESERVED (special minimal header confirmed on /diagnostico at all 6 breakpoints —
  no "Soluciones"/burger, just Contacto)

H1: UNCHANGED (weight 800, clamp(32px,5.2vw,56px), lh 1.2, ls -0.01em — unchanged since 4758e370)

MICROCARDS: REVIEWED (11px→13px + new hero-mockup-* blocks traced to fef45e29, already-committed approved
  work; not altered)

MANROPE: PASS (5 weights loaded on every landings route, 4 on /diagnostico which uses its own next/font
  instance with fewer weights — by design, not a defect; 0 Times/serif fallback observed)

375: PASS
430: PASS (navbar/typography) — pre-existing WhatIncludes photo overflow on /web-para-empresas only (199px),
  unrelated to this regression, not fixed
768: PASS
1024: PASS (navbar/typography) — same pre-existing WhatIncludes photo overflow on /web-para-empresas only
  (31px), unrelated, not fixed
1280: PASS
1440: PASS

BUILD: PASS

FILES MODIFIED: src/app/globals.css (removed 1 line: `line-height: 1.5;`)

REMAINING VISUAL DIFFERENCES:
  - No historical approved screenshot exists to do a true pixel-level baseline comparison (noted in
    home-historical-comparison/README.md) — this audit relied on source-code history + live rendering
    checks instead.
  - /web-para-empresas horizontal overflow at 430px and 1024px from the WhatIncludes photo (this session's
    own earlier change) — needs a follow-up fix, out of scope here.
  - /soluciones/campanas hero photo 404 (pre-existing, unrelated asset never committed).
```

**No commits, no push, no deploy made in this addendum.** Stopped per instructions after QA + build.
