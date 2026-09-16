# TAILWIND_USAGE_AUDIT — IORANA SEO 2.0

**Date:** 2026-09-17
**Type:** Investigation only — no code changes made
**Status:** RESOLVED / REMOVED — see [TAILWIND_REMOVAL_REPORT.md](./TAILWIND_REMOVAL_REPORT.md)

> **Update (2026-09-17):** Findings below were approved and acted on.
> Tailwind has since been fully removed from the project — the 7 inert
> utilities documented here were rewritten as explicit CSS, the `@tailwind`
> directives were removed from `globals.css`, and the `tailwindcss` /
> `@tailwindcss/postcss` packages were uninstalled. This document is kept
> as-is below for historical record of the investigation; see
> `TAILWIND_REMOVAL_REPORT.md` for what was actually changed and how it was
> validated.

---

## EXECUTIVE SUMMARY

Tailwind CSS is installed as a dependency but **has never actually compiled** in
this project — confirmed previously (LandingsHeader fix): the built CSS bundle
contains the literal, unprocessed text `@tailwind base; @tailwind components;
@tailwind utilities;` because no `postcss.config` file registers
`@tailwindcss/postcss` in the build pipeline.

This audit scanned every `.tsx` file under `src/` for Tailwind-style
`className` usage to answer: **is Tailwind load-bearing anywhere, or can it be
removed outright?**

**Finding: Tailwind's real footprint is tiny — 7 usages across 3 files, all
the same pattern (`hidden` + a single responsive variant to reveal a desktop-
only decorative element). Everything else in the codebase (195 unique
`className` values counted; 188 of them) is custom CSS defined in per-
component `<style>` blocks or per-route `styles.css` files — not Tailwind.**

**Conclusion: Tailwind can be removed completely from the project.** The 7
inert usages should be replaced with explicit CSS (the same
`<style>` + `@media` pattern already used successfully in the Hero.tsx and
LandingsHeader.tsx fixes) before or as part of removal, so the "desktop-only"
intent those elements were written for actually starts working — right now it
silently does not.

---

## 1. METHODOLOGY

1. Extracted every `className="..."` (and template-literal className) value
   from all `.tsx` files under `src/` (`Ioranaseo-old/` excluded — not part of
   the active app).
2. Deduplicated to 195 unique class tokens.
3. Classified each token as either:
   - **Tailwind utility** (matches Tailwind's naming grammar: bare utilities
     like `hidden`, `flex`, `grid`, spacing/sizing scales, or
     `{breakpoint}:{utility}` responsive variants), or
   - **Custom CSS class** (kebab-case semantic name — e.g. `hero-section`,
     `ct-timeline-item`, `landings-header__hamburger` — defined in an inline
     `<style>` block within the same component, or in a route's `styles.css`).
4. For every real Tailwind utility found, located every call site and read
   surrounding code to determine what the element is and what "correct"
   behavior was presumably intended.
5. Searched all `.css` files under `src/` for `@tailwind`/`@apply`/`@config`
   directives, and all `src/` + `next.config.mjs` for direct imports of the
   `tailwindcss` or `@tailwindcss/postcss` packages.

---

## 2. INVENTORY: REAL TAILWIND USAGE (7 occurrences, 3 files)

All 7 occurrences follow the identical shape: `hidden {breakpoint}:{display}`,
applied to a `position: absolute` decorative connector/arrow between steps in
a "how it works"-style sequence, explicitly commented or evidently intended
as **desktop-only**.

| # | File | Line | Class | Element | Intended behavior |
|---|------|------|-------|---------|--------------------|
| 1 | `src/app/(landings)/home/components/NuestroSistema.tsx` | 100 | `hidden lg:block` | Horizontal connector line between step cards | Hidden <1024px, visible ≥1024px |
| 2 | `src/app/(landings)/home/components/NuestroSistema.tsx` | 223 | `hidden lg:block` | `→` arrow between step cards | Hidden <1024px, visible ≥1024px |
| 3 | `src/app/(landings)/web-para-empresas/components/OurMethod.tsx` | 114 | `hidden lg:block` | Horizontal connector line between method steps | Hidden <1024px, visible ≥1024px |
| 4 | `src/app/(landings)/web-para-empresas/components/OurMethod.tsx` | 130 | `hidden lg:flex` | Connector node/dot (1 of 3) | Hidden <1024px, visible ≥1024px |
| 5 | `src/app/(landings)/web-para-empresas/components/OurMethod.tsx` | 146 | `hidden lg:flex` | Connector node/dot (2 of 3) | Hidden <1024px, visible ≥1024px |
| 6 | `src/app/(landings)/web-para-empresas/components/OurMethod.tsx` | 162 | `hidden lg:flex` | Connector node/dot (3 of 3) | Hidden <1024px, visible ≥1024px |
| 7 | `src/app/(landings)/web-para-empresas/components/ProcessSteps.tsx` | 86 | `hidden md:block` | Horizontal connector line between process steps | Hidden <768px, visible ≥768px |

**Current actual behavior (all 7):** the `hidden` class is inert (no
`display: none` is ever generated), so **these elements render at every
breakpoint, including mobile** — the desktop-only intent has never actually
applied since these components were written. This is the same class of bug
already found and fixed in `LandingsHeader.tsx`.

**Risk assessment of current inert state:**
- All 7 are absolutely-positioned decorative elements (connector lines,
  arrows, dots) with low opacity (0.2–0.3) or thin dimensions (1.5–8px) — low
  visual weight even when wrongly shown on mobile.
- None carry interactive behavior, text content critical to comprehension, or
  affect document flow (`position: absolute` removes them from flow, so they
  cannot by themselves push other content or cause vertical layout shifts).
- They **can** contribute to horizontal overflow on narrow viewports in cases
  where their `left`/`right` percentage or fixed-width positioning places them
  outside the parent's bounds (e.g. `left: 100%` in NuestroSistema's arrow,
  `left: 12.5%; right: 12.5%` spanning connectors) — but HOME and
  `/web-para-empresas` have both already been visually reviewed and approved
  at 375/768/1280 without this being flagged as a horizontal-overflow bug, so
  in practice any spillover appears to be absorbed by existing container
  padding/overflow rather than causing visible breakage.
- **Not a new issue introduced by anything done in this session** — this is
  how these three files have behaved since Tailwind stopped (or never
  started) compiling.

---

## 3. INVENTORY: NON-TAILWIND CLASSES (188 of 195 tokens)

The remaining 188 unique class tokens are **not Tailwind** — they are custom,
semantic, kebab-case (or BEM-style, e.g. `landings-header__hamburger`) class
names, each defined in a `<style>{...}</style>` block colocated in the same
component file, or in a route-level `styles.css` (e.g.
`src/app/(landings)/web-para-empresas/styles.css`). Examples:
`hero-section`, `hero-grid`, `campanas-hero-badge`, `ct-timeline-item`,
`que-hacemos-visual`, `landing-grid-4`, `presencia-arrow`,
`landings-header__nav-desktop` (this last one added in the recent
LandingsHeader fix — already CSS-only, not Tailwind).

This confirms the project's dominant styling pattern is **inline `style={}}`
objects for one-off layout/spacing, plus small custom CSS classes (scoped via
unique semantic names) for anything that needs a real CSS feature — pseudo-
selectors, media queries, or repeated declarations.** Tailwind was never the
primary styling mechanism here; it appears to be vestigial (likely from an
early scaffold or template) rather than integrated into the design system.

---

## 4. `@tailwind` DIRECTIVES — FULL PROJECT SCAN

```
$ grep -rn "@tailwind\|@apply\|@config" src/ --include="*.css"

src/app/globals.css:2:@tailwind base;
src/app/globals.css:3:@tailwind components;
src/app/globals.css:4:@tailwind utilities;
```

**Only `globals.css` references Tailwind.** None of the other 8 CSS files in
the project do:

```
src/app/(landings)/como-trabajamos/styles.css
src/app/(landings)/home/styles.css
src/app/(landings)/soluciones/campanas/styles.css
src/app/(landings)/soluciones/conversion/styles.css
src/app/(landings)/soluciones/styles.css
src/app/(landings)/soluciones/visibilidad/styles.css
src/app/(landings)/web-para-empresas/styles.css
src/app/styles/iorana-design-tokens.css
```

No `@apply` usage anywhere (would have been broken too, but the project
doesn't attempt it). No `tailwind.config.*` file exists in the repo at all —
consistent with Tailwind never having been wired up.

---

## 5. DIRECT PACKAGE IMPORTS

```
$ grep -rn "from ['\"]tailwindcss\|require(['\"]tailwindcss\|@tailwindcss/postcss" src/ next.config.mjs

src/app/(landings)/components/LandingsHeader.tsx:64:  postcss.config registering @tailwindcss/postcss), so those
```

The only match is **my own code comment** (added during the LandingsHeader
fix, documenting this exact finding) — not an actual import. No file in
`src/` or `next.config.mjs` imports or requires `tailwindcss` or
`@tailwindcss/postcss` programmatically. Their only footprint is as
`devDependencies` in `package.json`:

```json
"@tailwindcss/postcss": "^4.3.1",
"tailwindcss": "^4.3.1"
```

---

## 6. DEPENDENCY FOOTPRINT

```
node_modules/.pnpm/tailwindcss@4.3.2          820K
node_modules/.pnpm/@tailwindcss+postcss@4.3.2 120K
                                        Total: ~940K
```

Modest but non-zero. Also carries transitive install/audit surface (two
extra packages to keep patched) for a dependency that currently does nothing.

---

## 7. CAN TAILWIND BE REMOVED COMPLETELY?

**Yes — with one prerequisite.** Before (or as part of) removing the
`tailwindcss` / `@tailwindcss/postcss` packages and the three `@tailwind`
lines in `globals.css`, the 7 inert `hidden {bp}:{display}` usages listed in
§2 should be rewritten as explicit CSS — otherwise removing the package
changes nothing today (they're already no-ops) but permanently forecloses the
possibility of those "desktop-only" elements ever working as originally
intended without a rewrite anyway. Since a rewrite is required either to fix
them or to safely drop Tailwind, doing it once covers both.

The replacement pattern is already established and validated in this
codebase (used in the Hero.tsx mobile-overflow fix and the LandingsHeader
rewrite): a named CSS class with a base `display: none` and a
`@media (min-width: …)` override, declared in each component's existing
inline `<style>` block — no new architecture, no new breakpoints, consistent
with the 375/430/768/1024/1280/1440 set already in use project-wide.

**Nothing else depends on Tailwind compiling.** Removing the package and the
three `@tailwind` directives would not change the rendered output of any
other component, because no other component's current appearance relies on
Tailwind utility CSS existing (it doesn't exist today either).

---

## 8. WHAT THIS AUDIT DOES **NOT** CONCLUDE

Per scope instructions, this audit does not recommend or evaluate *when* or
*how* to execute removal — only whether it's viable. Explicitly out of scope
for this document:
- Whether to add `postcss.config` and activate Tailwind instead of removing
  it (the alternative path — not addressed here beyond noting it exists).
- Timing relative to the pending Global CTA Visual Audit / button work.
- Any code change to the 3 files listed in §2, `globals.css`, or
  `package.json`.

---

## 9. SUMMARY TABLE

| Question | Answer |
|---|---|
| Files using real Tailwind utilities | 3 |
| Total inert Tailwind occurrences | 7 |
| Files using custom CSS (not Tailwind) | 43+ (188 of 195 unique classes) |
| `@tailwind` directives in project | 3 (all in `globals.css`, none elsewhere) |
| Direct code imports of tailwindcss packages | 0 |
| node_modules footprint | ~940K (2 packages) |
| Can Tailwind be fully removed? | **Yes** |
| Prerequisite for safe removal | Rewrite the 7 `hidden {bp}:{display}` usages as explicit CSS (same pattern as Hero.tsx / LandingsHeader.tsx fixes) |
| Removal breaks anything else currently working? | No — nothing else depends on Tailwind CSS existing, because it currently doesn't |

---

**Generated:** 2026-09-17
**No files modified.** No `postcss.config` created. No pages touched. No
responsive behavior changed.
