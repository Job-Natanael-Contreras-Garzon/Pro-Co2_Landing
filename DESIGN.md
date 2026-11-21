---
name: "Fundación CO2"
description: "Architectural Glass over Living Canopy: multi-stratum frosted glass surfaces, native forest ink hierarchy, and tactile micro-interactions for Fundación CO2 Bolivia."
colors:
  moss-600: "#146342"
  moss-500: "#1c7c54"
  moss-700: "#0e4a31"
  moss-900: "#0a291c"
  moss-300: "#7ccca6"
  moss-200: "#b2dfc6"
  moss-100: "#d5ede0"
  moss-50: "#edf7f2"
  amberleaf-300: "#e8c27a"
  amberleaf-500: "#b87b22"
  ink-950: "#0a1c14"
  ink-900: "#112a1e"
  ink-800: "#204233"
  ink-700: "#2f5443"
  ink-600: "#3d6351"
  mist-100: "#edf1eb"
  mist-200: "#dfe7e0"
  smoked-void: "#0b1d16"
  smoked-ink: "#f2f7f4"
  pure-white: "#ffffff"
  error-crimson: "#b91c1c"
typography:
  display:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3.65rem"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Source Sans 3, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: "Source Sans 3, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: "0.05em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0em"
    fontFeature: '"tnum" 1'
rounded:
  control: "12px"
  card: "16px"
  header: "24px"
  panel: "28px"
  footer: "32px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "40px"
  section-y: "80px"
  section-y-lg: "112px"
  container-max: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.ink-950}"
    textColor: "{colors.pure-white}"
    typography: "{typography.title}"
    rounded: "{rounded.card}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.moss-700}"
  button-mint:
    backgroundColor: "{colors.moss-300}"
    textColor: "{colors.ink-950}"
    typography: "{typography.title}"
    rounded: "{rounded.card}"
    padding: "16px 24px"
  button-mint-hover:
    backgroundColor: "{colors.moss-200}"
  button-ghost:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.ink-950}"
    typography: "{typography.label}"
    rounded: "{rounded.card}"
    padding: "16px 20px"
  button-ghost-hover:
    backgroundColor: "{colors.pure-white}"
  chip-filter:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.ink-800}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "10px 16px"
  chip-filter-active:
    backgroundColor: "{colors.ink-950}"
    textColor: "{colors.pure-white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "10px 16px"
  card-glass-sheet:
    backgroundColor: "{colors.mist-100}"
    textColor: "{colors.ink-950}"
    rounded: "{rounded.panel}"
    padding: "32px"
  card-glass-floating:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.ink-950}"
    rounded: "{rounded.panel}"
    padding: "32px"
  card-glass-smoked:
    backgroundColor: "{colors.smoked-void}"
    textColor: "{colors.smoked-ink}"
    rounded: "{rounded.panel}"
    padding: "32px"
  input-field:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.ink-950}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "14px 16px"
  input-field-invalid:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.error-crimson}"
  nav-header:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.ink-800}"
    typography: "{typography.body}"
    rounded: "{rounded.header}"
    padding: "12px 20px"
  tier-selector:
    backgroundColor: "{colors.smoked-void}"
    textColor: "{colors.smoked-ink}"
    rounded: "{rounded.control}"
    padding: "14px"
  tier-selector-active:
    backgroundColor: "{colors.moss-500}"
    textColor: "{colors.pure-white}"
  accordion-faq:
    textColor: "{colors.ink-950}"
    typography: "{typography.body}"
    padding: "16px 0px"
  toast-popover:
    backgroundColor: "{colors.smoked-void}"
    textColor: "{colors.pure-white}"
    typography: "{typography.body}"
    rounded: "{rounded.card}"
    padding: "14px 20px"
---

# Design System: Fundación CO2

## Overview

**Creative North Star: "Architectural Glass over Living Canopy"**

Fundación CO2 presents Bolivian environmental restoration not as a dense administrative portal, but as architectural frosted glass planes suspended above sunlit forest mist. Three physical Z-planes—translucent base sheets, elevated milk-glass plates, and deep botanical smoked panels—hover over a fixed living canvas (`ambient-canvas`) of slow-drifting canopy, sunlight, mineral, and deep-shade radial orbs.

Layout density stays calm and editorial through asymmetric 12-column bento compositions separated by generous vertical rhythm (`80px` to `112px`). Expressive `Bricolage Grotesque` display typography compressed to `-0.03em` tracking anchors every section alongside warm humanist `Source Sans 3` copy and tabular `JetBrains Mono` reserved exclusively for verified field metrics, dates, phone coordinates, and bank numbers. Motion is governed by a tactile spring-deceleration easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`), cursor-tracked radial specular sheens on desktop, and zero-bloat native browser primitives (`<dialog>`, `[popover="manual"]`, `<details>`, `:user-invalid`, and View Transitions).

The system explicitly rejects generic centered two-button hero templates, uniform 3-column card rows, nested cards-inside-cards, decorative pulsing status dots, synthetic background grid lines, and fabricated technical telemetry tags (`SEC_01`, `VAL_01`, `PROG_01`).

**Key Characteristics:**
- **Three-Tier Physical Glass Depth:** Distinct translucent base sheets (`blur(20px)`), elevated floating plates (`blur(24px)`), and dark smoked botanical panels (`blur(22px)`) over a drifting 4-orb ambient canvas.
- **Specular 1px Gradient Edges:** Every glass surface carries a `mask-composite: exclude` gradient bezel (`::before`) and desktop pointer-tracking radial sheen (`--mx` / `--my` via `SpecularTrackDirective`) rather than flat opaque borders.
- **Editorial Type Discipline:** High-character `Bricolage Grotesque` (`-0.03em`) paired with legible `Source Sans 3` (`1.6` line-height) and `JetBrains Mono` restricted strictly to measurable figures, dates, phone numbers, and bank coordinates.
- **Asymmetric 12-Column Bento Rhythm:** Generous `1280px` editorial layouts using `7 / 5`, `8 / 4`, `6 / 6`, and full-width splits with deliberate Z-axis overlaps on desktop.
- **Native Web Platform Primitives:** Interactive `<dialog>` reader with `@starting-style` backdrop blur, manual Popover API toast notifications, CSS `block-size` `<details>` accordions (`interpolate-size: allow-keywords`), auto-growing textareas (`field-sizing: content`), and View Transitions category filtering.

## Colors

A sunlit botanical palette anchored in forest obsidian inks and atmospheric sage mist, punctuated by deep canopy moss and a restrained flash of solar amberleaf exclusively on dark smoked surfaces.

### Primary
- **Canopy Moss (`moss-600`, #146342):** Primary brand accent governing interactive focus outlines on light surfaces, native browser `accent-color` and `caret-color`, hero headline emphasis, program survival metrics, valid field feedback, and QR code finder centers.
- **Emerald Canopy (`moss-500`, #1c7c54):** Active donation tier background tint (`rgba(28, 124, 84, 0.30)`), hero CTA arrow badge hover state, ambient canopy backdrop glow, and subtle smoked-footer emblem container.
- **Deep Moss (`moss-700`, #0e4a31):** Hover fill for solid botanical-obsidian buttons and primary interactive link color over light frosted glass.
- **Shadow Canopy (`moss-900`, #0a291c):** Deepest botanical shade anchor in the theme ramp for extreme dark-green surface grounding.
- **Luminous Mint (`moss-300`, #7ccca6):** High-contrast primary button fill (`ink-950` text) inside dark smoked glass, selected tier borders, toast confirmation icons, and smoked-footer section headings.
- **Pale Mint (`moss-200`, #b2dfc6):** Focus outline ring inside `.glass-smoked`, hover state for mint CTAs, secondary labels over smoked glass, and the central QR monogram text.
- **Frosted Mint (`moss-100`, #d5ede0):** Soft tag backgrounds (`Interoperable` badge), contact channel icon wells, confirmation status banner background, and primary body text over smoked glass.
- **Whisper Mint (`moss-50`, #edf7f2):** High-contrast text tint inside compact dark header action buttons.

### Secondary
- **Solar Amberleaf (`amberleaf-300`, #e8c27a):** Warm highlight reserved for dark smoked glass—identifying the recommended donation tier eyebrow, live impact feedback readout, and warm bottom-right specular refraction in the `.glass-smoked::before` edge gradient.
- **Ochre Amberleaf (`amberleaf-500`, #b87b22):** Warm solar accent token paired with the ambient sunlight backdrop orb (`rgba(199, 140, 50, 0.4)`).

### Neutral
- **Botanical Obsidian (`ink-950`, #0a1c14):** Primary display headings, primary solid CTA fills, active journal filter chips, QR dark modules, and base body text color.
- **Deep Forest Ink (`ink-900`, #112a1e):** Secondary interactive labels, mobile navigation links, and ghost button ink.
- **Forest Slate (`ink-800`, #204233):** Primary editorial paragraph copy, desktop navigation links, and uppercase form field labels.
- **Muted Pine (`ink-700`, #2f5443):** Supporting metadata, photo captions, article dates, metric descriptions, and location lines.
- **Sage Graphite (`ink-600`, #3d6351):** Root scrollbar thumb and tertiary muted text (alongside `#365949` tuned for accessible input placeholder contrast).
- **Pale Canopy Mist (`mist-100`, #edf1eb):** Soft atmospheric light neutral behind translucent base sheets.
- **Atmospheric Mist (`mist-200`, #dfe7e0):** Root `html` canvas ground and scrollbar track beneath the drifting ambient light orbs.
- **Smoked Canopy Void (`smoked-void`, #0b1d16):** Browser `theme-color` and top dark stop (`rgba(11, 29, 22, 0.82)`) of `.glass-smoked` nocturnal panels.
- **Smoked Mist Ink (`smoked-ink`, #f2f7f4):** Default foreground text color inside `.glass-smoked` surfaces.
- **Pure Specular White (`pure-white`, #ffffff):** Top-left glass specular edge highlights, QR code vector background, high-contrast headings on smoked glass, and active form input background on focus.

### Semantic
- **Validation Crimson (`error-crimson`, #b91c1c):** Native `:user-invalid` input border shift and inline `.mwg-error` guidance, paired with a soft tinted fill (`rgba(254, 242, 242, 0.9)`).

### Named Rules
**The Smoked-Polarity Inversion Rule.** On light glass (`glass-sheet` and `glass-floating`), primary actions fill with `ink-950` and hover to `moss-700`, while focus rings render in `moss-600`. Inside `glass-smoked`, polarity inverts: primary actions fill with `moss-300` over `ink-950` text, hover to `moss-200`, and focus rings switch to `moss-200` to preserve AA legibility.

**The Rare Amberleaf Rule.** `amberleaf-300` appears strictly on dark `glass-smoked` surfaces to spotlight the recommended donation tier, live selection feedback, and warm edge refraction—never as a light-surface button fill or generic badge background.

## Typography

**Display Font:** Bricolage Grotesque (variable weights `600–800`, self-hosted `.woff2` `latin` + `latin-ext`, fallback `ui-sans-serif, system-ui, sans-serif`)
**Body Font:** Source Sans 3 (variable weights `400–700`, self-hosted `.woff2` `latin` + `latin-ext`, fallback `ui-sans-serif, system-ui, sans-serif`)
**Label/Mono Font:** JetBrains Mono (variable weights `400–600`, self-hosted `.woff2` `latin` + `latin-ext`, fallback `ui-monospace, SFMono-Regular, monospace`, paired with `font-variant-numeric: tabular-nums`)

**Character:** Expressive, high-personality geometric-organic display forms tightened to `-0.03em` contrast crisply against warm humanist body prose and disciplined monospaced data figures.

### Hierarchy
- **Display** (`800` ExtraBold, `2.25rem` mobile scaling up to `3.65rem` at `xl`, `0.98` line-height, `-0.03em` letter-spacing, `text-wrap: balance`): Hero manifesto `<h1>` headline only.
- **Headline** (`800` ExtraBold, `1.875rem` mobile scaling to `3rem` at `sm+`, `1.0` to `1.02` line-height, `-0.03em` letter-spacing, `text-wrap: balance`): Major section `<h2>` headers across Institutional, Programs, Bitácora, Donations, and Contact.
- **Title** (`700–800` Bold/ExtraBold, `1.25rem` to `1.875rem`, `1.25` to `1.375` line-height, `-0.03em` letter-spacing): Panel and card `<h3>` titles, reader modal heading, and hero/card sub-headers.
- **Body** (`400` Regular, `1rem` base and `1.125rem` hero lead, `1.6` base / `1.625` relaxed line-height, `text-wrap: pretty`, constrained to `46ch–62ch` measure): Editorial paragraphs, mission/vision summaries, FAQ answers, and modal long-form chronicles.
- **Label** (`600–700` SemiBold/Bold, `0.75rem`, `1.33` line-height, `0.05em` letter-spacing when uppercase): Form field labels, uppercase action buttons, category filter chips, and status pills.
- **Mono** (`600–800`, `0.75rem` to `1.875rem`, `1.4` line-height, `tabular-nums`): Strictly quantitative field metrics (`420 t`, `86%`, `+18.500`), publication dates (`14 NOV 2026`), publication counts, WhatsApp phone numbers, and the `1000-0045-8921-02` bank account.

### Named Rules
**The Real-Data-Only Mono Rule.** `JetBrains Mono` with `tabular-nums` is restricted solely to authentic measurable numbers, dates, phone numbers, and bank coordinates—never to decorative section prefixes, fake status codes, or prose labels.

**The Editorial Measure Cap Rule.** Body copy never runs unrestrained across wide bento columns; paragraphs cap between `46ch` and `62ch` (`max-w-[46ch]` to `max-w-[62ch]`) with `text-wrap: pretty`, while `.display-title` headings apply `text-wrap: balance`.

## Layout

The page sits over a single fixed ambient canvas (`position: fixed; inset: 0; z-index: -1`) carrying four slow-drifting blurred radial orbs (`26s` to `34s` alternate keyframes) beneath a centered `1280px` (`max-w-7xl`) content column.

- **Container & Gutters:** Horizontal section padding scales from `16px` on mobile to `24px` (`sm`, `640px+`) and `32px` (`lg`, `1024px+`). Main content begins `96px` (`pt-24`) to `128px` (`lg:pt-32`) below the viewport top to clear the fixed floating navigation capsule, while `section[id]` elements carry `scroll-margin-top: 6.25rem` (`100px`) for clean anchor landings.
- **Vertical Rhythm:** Major sections breathe with `80px` (`py-20`) mobile vertical padding expanding to `112px` (`sm:py-28`) on larger viewports.
- **Asymmetric 12-Column Bento Grids (`lg`, `1024px+`, `20px–36px` gaps):**
  - **Hero Manifesto:** `7 / 5` asymmetric split where the Z2 QR overlay plaque steps across the lower-left edge of the canopy photo (`lg:-bottom-6 lg:-left-10`, `z-20`).
  - **Institutional Manifesto:** `6 / 6` split with a `7 / 5` Mission-and-Vision sub-grid lifting `-48px` (`lg:-mt-12`) over the volunteer photo, followed by an alternating `5 / 7 / 7 / 5` four-pillar bento grid.
  - **Programs Bento:** `8 / 4` row (with the 8-column forestry card split internally `6 / 6` media-to-copy) above a `12`-column horizontal circular-economy strip (`5 / 4 / 3`).
  - **Bitácora (Journal):** Dynamic grid reflow—two or more articles display a `7`-column floating lead card next to a `5`-column sheet card, followed by `12`-column horizontal strips (`5 / 7`); filtering down to a single article expands it into a `12`-column (`6 / 6`) showcase.
  - **Donations Mesa & Contact:** `5 / 7` weighted splits pairing `glass-floating` QR/channel surfaces on the left with `glass-smoked` or `glass-floating` action panels on the right, plus a `4 / 8` FAQ accordion sheet below Donations.
- **Breakpoints:** `sm` (`640px`), `md` (`768px`), `lg` (`1024px`), `xl` (`1280px`).

### Named Rules
**The No-Nested-Cards Rule.** Never nest glass cards inside glass cards. Internal sub-sections inside any panel separate via `1px` translucent hairlines (`rgba(10, 28, 20, 0.10)` on light glass, `rgba(255, 255, 255, 0.15)` on smoked glass) and whitespace rather than secondary boxed containers.

**The Asymmetric Bento Tension Rule.** Multi-column rows reject uniform three-card `4 / 4 / 4` symmetry in favor of weighted proportions (`7 / 5`, `8 / 4`, `5 / 7`) and purposeful Z-axis overlaps on desktop.

## Elevation & Depth

Depth is achieved through a hybrid physical-glass and botanical-shadow architecture rather than flat drop shadows on opaque white surfaces. Every panel occupies one of three physical glass strata floating over the fixed ambient canvas, pairing `backdrop-filter` blur/saturation with top specular inner rims, bottom grounding edges, and tinted botanical ambient shadows (`rgba(9, 28, 19, ...)`). Hovering `.glass-hover` surfaces lifts them `-3px` over `0.52s cubic-bezier(0.16, 1, 0.3, 1)` while desktop pointer tracking activates a radial cursor sheen (`.specular-track::after` driven by `--mx` and `--my`).

### Shadow Vocabulary
- **Z1 Base Sheet (`glass-sheet`)** (`backdrop-filter: blur(20px) saturate(180%)`; `background: linear-gradient(148deg, rgba(255, 255, 255, 0.56) 0%, rgba(241, 246, 242, 0.36) 100%)`; `box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.88), inset 0 -1px 0 0 rgba(10, 28, 20, 0.06), 0 18px 36px -22px rgba(9, 28, 19, 0.2)`): Default contextual panels (Hero manifesto, Origin sheet, Programs forestry card, FAQ sheet, secondary journal cards). Hover deepens shadow to `inset 0 1px 0 0 rgba(255, 255, 255, 0.94), inset 0 -1px 0 0 rgba(10, 28, 20, 0.08), 0 24px 44px -20px rgba(9, 28, 19, 0.26)`.
- **Z2 Floating Plate (`glass-floating`)** (`backdrop-filter: blur(24px) saturate(190%)`; `background: linear-gradient(148deg, rgba(255, 255, 255, 0.84) 0%, rgba(246, 250, 247, 0.64) 100%)`; `box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.96), inset 0 -1px 0 0 rgba(10, 28, 20, 0.08), 0 24px 48px -20px rgba(9, 28, 19, 0.26), 0 6px 16px -6px rgba(9, 28, 19, 0.1)`): Elevated navigation bar, overlapping Hero QR card, Vision Z-bridge card, Carbon Zero bento, lead Journal story, reader `<dialog>`, QR Simple card, and Contact channels/form. Hover deepens shadow to `inset 0 1px 0 0 rgba(255, 255, 255, 0.98), inset 0 -1px 0 0 rgba(10, 28, 20, 0.1), 0 30px 58px -20px rgba(9, 28, 19, 0.32)`.
- **Z3 Smoked Botanical Glass (`glass-smoked`)** (`backdrop-filter: blur(22px) saturate(180%)`; `background: linear-gradient(148deg, rgba(11, 29, 22, 0.82) 0%, rgba(7, 20, 15, 0.74) 100%)`; `box-shadow: inset 0 1px 0 0 rgba(213, 237, 224, 0.22), inset 0 -1px 0 0 rgba(0, 0, 0, 0.36), 0 24px 52px -22px rgba(5, 16, 11, 0.5)`): Dark focal anchors (Mission panel, Youth Education card, Direct Bank & WhatsApp Mesa, Site Footer, and Toast Popover). Hover deepens shadow to `inset 0 1px 0 0 rgba(213, 237, 224, 0.3), inset 0 -1px 0 0 rgba(0, 0, 0, 0.42), 0 30px 58px -20px rgba(4, 14, 9, 0.6)`.
- **Modal Backdrop (`dialog.modern-dialog[open]::backdrop`)** (`background-color: rgba(8, 22, 16, 0.56); backdrop-filter: blur(10px)`): Atmospheric canopy scrim behind the article reader modal, animated via `@starting-style` and `allow-discrete`.

### Named Rules
**The Three-Strata Glass Rule.** Every content container belongs explicitly to Z1 (`glass-sheet` for ambient reading), Z2 (`glass-floating` for elevated navigation, active forms, and Z-overlaps), or Z3 (`glass-smoked` for high-priority dark focal anchors)—never flat unlayered opaque boxes over the ambient orbs.

**The Specular Rim Light Rule.** Glass bezels are drawn as `1px` directional gradient edges via `::before` with `mask-composite: exclude` (catching bright white light top-left and moss or amberleaf refraction bottom-right) paired with top `inset` highlights rather than uniform opaque CSS strokes.

## Shapes

The form language follows concentric architectural geometry where corner radius scales proportionally with container footprint:

- **Primary Bento & Dialog Shells (`28px` / `1.75rem`):** Applied consistently to major glass bento panels, primary photography frames, and the `<dialog>` article reader (`32px` / `2rem` on the full-width smoked-glass footer container).
- **Floating Header & Compact Surfaces (`16px` to `24px`):** The fixed header scales from `16px` on mobile to `24px` (`sm+`); compact floating overlays, pillar tiles, toast popovers, inset media frames, and flagship hero/form CTAs share a tactile `16px` radius.
- **Interactive Controls & Fields (`12px`):** Form inputs, selects, textareas, category filter chips, donation tier tiles, header nav links, and icon wells use a crisp `12px` corner curve.
- **Status Pills & Icon Triggers (`9999px`):** Full-capsule rounding is reserved exclusively for floating category pills, the `Interoperable` badge, and circular modal dismiss buttons.
- **Clipping & Dividers:** Glass containers set `isolation: isolate` with `border-radius: inherit` on `::before` and `::after` pseudo-elements so specular rims and hover glows clip accurately. Structural internal divisions rely on straight `1px` translucent hairlines (`rgba(10, 28, 20, 0.10)` or `rgba(255, 255, 255, 0.15)`).

### Named Rules
**The Concentric Radius Hierarchy Rule.** Corner rounding scales monotonically with element footprint: `28px–32px` for primary bento panels and footer shells, `16px` for compact floating cards and hero/form CTAs, `12px` for form fields and control chips, and `9999px` solely for micro-status tags and circular close icons.

## Components

### Buttons
Tactile, grounded actions engineered with crisp contrast shifts and spring-deceleration micro-lift (`0.36s cubic-bezier(0.16, 1, 0.3, 1)`).
- **Shape:** Gently rounded architectural buttons (`16px` radius on flagship hero, form submit, and WhatsApp CTAs; `12px` radius on compact header, copy-account, and modal secondary actions).
- **Primary (`button-primary`):** Solid `ink-950` (`#0a1c14`) fill with `#ffffff` or `moss-50` (`#edf7f2`) text, `14px 24px` padding (`10px 16px` in header, `16px 24px` in contact submit), featuring either bold `Bricolage Grotesque` copy with an inset arrow icon box (`rgba(255, 255, 255, 0.10)`) or uppercase `12px` tracked labels (`0.05em`).
- **Smoked-Surface Primary (`button-mint`):** Luminous `moss-300` (`#7ccca6`) fill with `ink-950` (`#0a1c14`) bold text and `16px 24px` padding inside dark `.glass-smoked` blocks (`10px 16px` on compact account copy).
- **Hover / Focus / Active:** Hover shifts `ink-950` to `moss-700` (`#0e4a31`) and `moss-300` to `moss-200` (`#b2dfc6`) while lifting `translateY(-2px)`; `:active` compresses to `scale(0.985)`; `:focus-visible` renders a `2px` outline with `3px` offset (`#146342` on light glass, `#b2dfc6` on smoked glass).
- **Secondary / Ghost (`button-ghost`):** Translucent white (`rgba(255, 255, 255, 0.85)`) with a `1px` `rgba(10, 28, 20, 0.15)` border and `ink-950` uppercase tracked text, resolving to solid `#ffffff` on hover (`16px 20px` padding).

### Chips
Crisp editorial pills separating interactive category filtering from passive photography metadata.
- **Style:** Filter chips use `12px` corners, `10px 16px` padding, uppercase `12px` tracked semibold `Source Sans 3`, translucent `rgba(255, 255, 255, 0.75)` fill, and a `1px` `rgba(10, 28, 20, 0.10)` stroke. Non-interactive status tags use `9999px` pill geometry with `4px 12px` padding (`rgba(255, 255, 255, 0.90)` + `backdrop-filter: blur(12px)` over photography, or `moss-100` with `moss-700` text on light glass).
- **State:** Active filter chips (`aria-pressed="true"`) invert to solid `ink-950` with `#ffffff` text and transition via `document.startViewTransition()` when reduced motion is disabled.

### Cards / Containers
Multi-stratum translucent glass containers with cursor-reactive specular borders.
- **Corner Style:** `28px` for primary bento cards; `16px` for compact floating plaques, pillar tiles, and mission/vision Z-bridge cards; `32px` for the footer container.
- **Background:** Layered Z1 (`glass-sheet`), Z2 (`glass-floating`), or Z3 (`glass-smoked`) frosted gradients.
- **Shadow Strategy:** Top specular `inset` light + subtle bottom rim + botanical ambient shadow; `.glass-hover` lifts `-3px` and triggers `.specular-track::after` cursor light.
- **Border:** `1px` directional gradient bezel via `::before` `mask-composite: exclude` rather than flat gray borders.
- **Internal Padding:** `20px` on compact overlays, `24px–32px` on standard cards, and `40px` (`lg:p-10`) on hero, contact form, donation mesa, and footer shells.

### Inputs / Fields
Accessible native-validated glass form controls avoiding JavaScript validation clutter.
- **Style:** `12px` corners, `14px 16px` padding, `rgba(255, 255, 255, 0.80)` surface, `1px` `rgba(10, 28, 20, 0.15)` stroke, `14px` `Source Sans 3` text (`ink-950`), `#365949` placeholder text, custom inline chevron on `<select>`, and `field-sizing: content` auto-expansion (`6.5rem` to `18rem`) on `<textarea>`.
- **Focus:** Shifts background to solid `#ffffff` and applies a `2px` `moss-600` (`#146342`) focus ring.
- **Error / Valid:** CSS `:user-invalid` shifts border to `error-crimson` (`#b91c1c`) with tinted `rgba(254, 242, 242, 0.9)` fill and reveals `.mwg-error` text; `:user-valid` shifts border to `moss-600` (`#146342`).

### Navigation
Floating Z2 architectural capsule anchored cleanly above scrolling content.
- **Style & Typography:** Fixed container (`12px` mobile / `20px` desktop top offset) holding a `.glass-floating` capsule (`16px` mobile / `24px` `sm+` radius, `12px 20px` padding). Contains a `40×40px` `ink-950` `CO2` emblem box (`Bricolage Grotesque` + `moss-300` subscript), `14px` `Source Sans 3` medium links (`ink-800` hovering to `rgba(255, 255, 255, 0.75)` pills), a tabular `JetBrains Mono` WhatsApp quick-link at `xl+`, and a compact `Donar con QR` CTA (`sm+`).
- **Mobile Treatment:** Below `1024px` (`lg`), navigation collapses into a `40px` translucent white menu button (`rgba(255, 255, 255, 0.70)`) toggling a detached `.glass-floating` vertical menu (`16px` radius) with a full-width `ink-950` donate action.

### Interactive Donation Tier Selector (`donations-mesa`)
Signature interactive control inside the Z3 `.glass-smoked` mesa (`grid-cols-2 sm:grid-cols-4`, `10px` gap). Unselected amount tiles render at `rgba(255, 255, 255, 0.05)` with `1px` `rgba(255, 255, 255, 0.15)` strokes (`12px` radius, `14px` padding). Selecting a tier (`aria-pressed="true"`) shifts the tile to `rgba(28, 124, 84, 0.30)` with a `moss-300` (`#7ccca6`) border, updates an `aria-live="polite"` `amberleaf-300` impact readout, and dynamically composes the pre-filled WhatsApp receipt URL.

### Native Reader Dialog, FAQ Accordion & Toast Popover
- **Reader `<dialog>` (`modern-dialog`):** Elevated `.glass-floating` modal (`28px` radius, `max-width: 42rem`) entering with CSS `@starting-style` + `allow-discrete` (`translateY(14px) scale(0.98)` to `0`/`1` over `0.28s`) above a blurred canopy backdrop (`rgba(8, 22, 16, 0.56)` + `blur(10px)`).
- **FAQ `<details>` (`modern-accordion`):** Pure CSS `block-size: 0` to `auto` expansion (`interpolate-size: allow-keywords`, `0.34s var(--ease-tactile)`) with rotating `45deg` inline `+` icon and `1px` `rgba(10, 28, 20, 0.10)` horizontal dividers.
- **Toast `[popover="manual"]` (`modern-popover`):** Top-layer `.glass-smoked` floating capsule (`16px` radius, `14px 20px` padding) anchored `24px` above the bottom viewport edge with a `moss-300` verification icon.

## Do's and Don'ts

### Do:
- **Do** assign every container explicitly to Z1 (`glass-sheet`), Z2 (`glass-floating`), or Z3 (`glass-smoked`) over the ambient orb canvas so visual hierarchy reads through glass opacity and elevation.
- **Do** preserve the `1px` masked gradient specular border (`::before` + `mask-composite: exclude`) and desktop pointer-tracking highlight (`--mx` / `--my`) on glass panels.
- **Do** restrict `JetBrains Mono` (`tabular-figures`) strictly to verifiable quantitative figures, dates, phone numbers, and bank accounts (`1000-0045-8921-02`).
- **Do** use `amberleaf-300` (`#e8c27a`) sparingly on `glass-smoked` surfaces to spotlight recommended donation tiers and live selection readouts.
- **Do** rely on native browser capabilities (`<dialog>`, `[popover="manual"]`, `<details>` with `interpolate-size: allow-keywords`, `:user-invalid`, `field-sizing: content`) and honor `prefers-reduced-motion: reduce`.
- **Do** keep focus rings high-contrast (`2px solid #146342` with `3px` offset on light glass; `2px solid #b2dfc6` inside `.glass-smoked`) and constrain body prose to `46ch–62ch`.

### Don't:
- **Don't** nest glass cards inside other glass cards; separate internal data groups with subtle `1px` translucent hairlines (`rgba(10, 28, 20, 0.10)` or `rgba(255, 255, 255, 0.15)`).
- **Don't** default to symmetric centered two-button heroes or uniform 3-column equal-height card rows; maintain asymmetric 12-column bento ratios (`7 / 5`, `8 / 4`, `5 / 7`).
- **Don't** reintroduce decorative AI status codes (`SEC_01`, `VAL_01`, `PROG_01`), pulsing status dots, synthetic background grid lines, or commercial placeholder labels (`Demo Admin`).
- **Don't** apply `Bricolage Grotesque` `-0.03em` display tracking onto long body paragraphs or drop `Source Sans 3` below `1rem` (`16px`) and `1.6` line-height for main reading copy.
- **Don't** depend on external Google Fonts or third-party CSS/icon CDNs at runtime; all fonts (`.woff2`), inline SVGs, and imagery must remain self-contained for static cPanel hosting.
