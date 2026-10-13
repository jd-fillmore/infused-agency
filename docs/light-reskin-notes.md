# Light re-skin notes

Working checklist, discovery log and assumptions for the dark→light re-skin
(spec: `docs/light-redesign-spec.md`). Phases **L0–L3** only; the task stops
after L3 (templates L4, remaining pages L5, QA L6 are not in scope this session).
One commit per phase; each phase ends with
`yarn verify:seo && yarn test:seo && yarn lint && yarn build`.

## Assumptions (documented instead of asking)

1. **Production branch.** There is no branch literally named `production`. HEAD
   of `origin/master` (`02a1c31`) is the merge of `feat/dark-saas-redesign` and
   is the deployed dark redesign; local `master` (`4e5914e`) is stale/pre-redesign.
   `git diff --stat origin/master feat/dark-saas-redesign` is empty (identical
   content). So **`origin/master` is treated as "the current production branch"**
   and `feat/light-reskin` was branched from it.
2. **Screenshots.** The spec asks for a `before/` screenshot set at 375/768/1280.
   Captured with headless Chrome against a production `next start` on `:3100`
   (27 PNGs, see `docs/light-reskin-screenshots/`). This model cannot view
   images, so the set is a human-review artefact, not something this session
   checks. `after/` and 1440px are L6 (out of scope). No screenshot/QA tooling
   was added to `package.json`.
3. **Spec filename typo.** `docs/light-redesign-spec.md` and
   `docs/redesign-notes.md` refer to `docs/redesign-spec.md`, which does not
   exist; the actual file is `docs/redesigin-spec.md`. Read that.
4. **Brand palette source.** The logo is a raster PNG that this model cannot
   read. The brand colours were instead recovered from git history of
   `src/pages/variables.scss` and the legacy `general.scss` gradient (the
   pre-redesign brand tokens), which is a reliable, documented source. See
   "Brand palette" below. A human should confirm the logo hex on review.
5. **Scope of "light" after L3.** Global tokens turn light in L1, so *all* pages
   pick up the new base immediately. Per-page legacy SCSS that hard-codes dark
   values (heroes, some cards) is **L5** work and is intentionally not fully
   swept here; the global shared sheets *are* converted in L1. Inner pages may
   therefore look transitional until L4/L5.

## Brand palette

Recovered brand tokens (pre-redesign, `git show 700e185:src/pages/variables.scss`
and `screen.scss`):

- brand blue `#005c97` (and the lighter `#2b9ae1`); indigo `#363795`;
  deep indigo glows `#092839`; deep indigo base `#100a25`;
  signature gradient `linear-gradient(to right, #005c97, #363795)`;
  gold `#e2c044`; green `#1b8e47`.

Light palette designed from that hue (blue→indigo) — the accent and contrast
band are derived from the brand blue/indigo, **not** from the reference site:

| token | value | use |
| --- | --- | --- |
| `--color-base` | `#f6f7fb` | page background (cool off-white) |
| `--color-surface` | `#eef2fb` | alternate section band (brand tint) |
| `--color-card` | `#ffffff` | elevated cards |
| `--color-elevated` | `#ffffff` | raised surfaces |
| `--color-ink` | `#161b33` | body/heading text (deep brand indigo, not black) |
| `--color-muted` | `#516172` | muted text (blue-grey) |
| `--color-border` | `#e2e7ef` | hairline borders |
| `--color-border-strong` | `#cbd5e4` | stronger borders / inputs |
| `--color-accent` | `#005c97` | primary brand accent (buttons, links) |
| `--color-accent-hover` | `#00497a` | accent hover (deepen) |
| `--color-accent-deep` | `#0e1b3d` | deep brand indigo |
| `--color-accent-contrast` | `#ffffff` | text on accent |
| `--color-contrast` | `#0e1b3d` | deep "contrast band" (CTA band, footer) |
| `--color-contrast-ink` | `#e9edf6` | text on the contrast band |
| `--color-gold` | `#8a6100` | gold highlight, darkened for AA on light |
| `--color-success` | `#147d3f` | success |
| `--color-warning` | `#b45309` | warning |
| `--color-error` | `#dc2626` | error |

Contrast (WCAG AA needs ≥4.5:1 for normal text, ≥3:1 for large/UI). Computed
relative-luminance ratios:

| pair | ratio |
| --- | --- |
| `ink #161b33` on `base #f6f7fb` | ~15.9:1 |
| `ink #161b33` on `card #ffffff` | ~16.9:1 |
| `muted #516172` on `base` | ~6.0:1 |
| `muted #516172` on `card` | ~6.3:1 |
| `accent #005c97` on `base` | ~6.6:1 |
| `accent #005c97` on `card` | ~7.1:1 |
| `#ffffff` on `accent #005c97` (primary button) | ~7.1:1 |
| `gold #8a6100` on `card` | ~5.5:1 |
| `success #147d3f` on `card` | ~5.2:1 |
| `warning #b45309` on `card` | ~5.0:1 |
| `error #dc2626` on `card` | ~4.8:1 |
| `contrast-ink #e9edf6` on band `#0e1b3d` | ~11:1 |
| `#ffffff` on band `#0e1b3d` | ~16.9:1 |

All pairs pass AA. `--color-gold` is intentionally the darkened brand gold
`#8a6100` because the original `#e2c044` only reaches ~1.9:1 on white.

Signature text gradient re-derived from the brand blue→indigo:
`linear-gradient(100deg, #005c97 0%, #3f6fd8 48%, #363795 100%)` (all stops
≥4.3:1 on white; used on large headings / rules).

## Fonts

- **Poppins** for display and body, weights **400/500/600/700** (4 weights, 1
  family — within the "max 2 families and 3 to 4 weights" rule).
- Chosen because the reference uses Poppins, Poppins is **open-licence (SIL OFL,
  Google Fonts)**, and the spec §L0.3 says to use the reference's family when it
  is open-licence. We load it ourselves via `next/font/google` (no file copied).
- `display: swap`, Latin subset, size-adjusted fallback (`adjustFontFallback`),
  preload of the critical weights — matches how the current site loads Inter.
- The result stays distinct from the reference through palette, layout, icons
  and our own content — the reference's teal/coral/gold and its illustrations
  are never used.

## Phase checklist

### L0 — Reference extraction and baseline
- [x] Branch `feat/light-reskin` created from `origin/master`.
- [x] `yarn verify:seo` green before starting (329 published pages, 0 gate fails,
      0 schema failures, 0 regression failures/warnings).
- [x] Before-screenshots captured: 9 pages × 3 widths = 27 PNGs under
      `docs/light-reskin-screenshots/before/` (home, `/industries`, pillar,
      province, city, service, Niagara city, blog post, `/get-a-quote`).
- [x] `docs/light-design-reference.md` written (design facts only, no copy/code).
- [x] Dark-only hard-coded styling inventoried (below).
- [x] Light palette designed with AA contrast ratios (above).
- [x] Committed as L0 `465a9f9`.

### L1 — Tokens and typography re-skin
- [x] `src/styles/tailwind.css`: light `@theme` (colours, gradient, shadows,
      atmosphere), `color-scheme: light`, body bg/text, Poppins font vars,
      type-scale tuning.
- [x] `src/pages/_document.js`: `theme-color` → light, `color-scheme: light`.
- [x] `src/pages/variables.scss`: remap legacy SCSS tokens to light values.
- [x] `src/styles/rescue.css` + `legacy-saas.css`: convert the dark-forced
      shared-layer values (body, inner heroes, blog/article, forms, modals,
      tables, chips, pagination, area lists, call-outs) to the light system.
- [x] Fonts: Poppins via `next/font/google` in `_app.js`; `$heading`/`$body`.
- [x] Atmosphere: replace `glow-radial`/`glow-radial-deep` glows with subtle
      tinted light gradients; `bg-grid` lines darkened; `shadow-glow` re-tinted.
- [x] `components/ui/*` primitives: drop `bg-white/5` / white-on-dark idioms in
      favour of light tokens.
- [x] `src/pages/dev/styleguide.js`: show the new tokens/type/components.
- [x] `yarn verify:seo && yarn test:seo && yarn lint && yarn build`; committed as
      L1 `d6ea3ba`.

### L2 — Interaction and motion system
- [x] Motion tokens (easing `cubic-bezier(.2,.75,.25,1)`, 150ms micro,
      250–350ms card) as CSS variables + Tailwind utilities.
- [x] Card/box hover: lift ~4px, layered shadow, accent-tinted border, title/
      arrow nudge; transform/opacity/shadow/border/background only.
- [x] Image zoom inside clipped containers (scale ~1.04).
- [x] Buttons: lift + deepen; arrow slide; active press.
- [x] Links/nav: underline reveal; mega-menu panel fade+rise with delay.
- [x] Accordion: smooth grid-rows/height transition + rotating chevron.
- [x] Optional CSS-only scroll reveal (content visible by default, no CLS).
- [x] `prefers-reduced-motion` and `@media (hover: hover)` guards.
- [x] Add effects to the styleguide; committed as L2 `33427ea`.

### L3 — Shell and homepage
- [x] `components/Nav/topBar.js`: announcement strip now brand accent band
      (`bg-accent`, `text-accent-contrast`, `arrow-nudge`); was `bg-accent-deep`.
- [x] `components/Nav/nav.js`: light header with scrolled shadow + smooth
      transition; `hover:bg-white/5` → `hover:bg-surface` (desktop + mobile).
- [x] `components/Nav/megaMenu.js`: light panel, soft brand shadow, fade+rise
      (`transition-[opacity,transform] duration-200 ease-smooth`, `-translate-y-1`
      → `translate-y-0`); hover chips → `bg-surface`; chevrons eased.
- [x] `components/Footer/footer.js`: now the **deep contrast band**
      (`bg-contrast`, `text-contrast-ink/…`, white logo, `gold-bright` accent dot
      and quote link, white/10 dividers, `arrow-nudge`). This gives the page its
      dark/light rhythm at the bottom; `components/CTA/cta.js` already used light
      tokens from L1 so stays as-is.
- [x] `src/pages/index.js`: affiliate chip `bg-white/[0.03]` → `bg-card`;
      testimonial grid gets `reveal`; buyer-guide links get `group`+`arrow-nudge`.
      Content, order, headings and links unchanged; only owner-supplied stats,
      testimonials and logos are shown.
- [x] Hero works on light: no dark hero art exists — the right column is the
      (now light) `Card` form panel; `glow-radial` is a subtle light tint.
- [x] `yarn verify:seo && yarn test:seo && yarn lint && yarn build` green; committed
      as L3.

## Dark-only styling inventory (L0.1)

Places where the dark theme is hard-coded and must be converted:

**`src/styles/tailwind.css`**
- `@theme` dark colours: base `#0a0a0b`, surface `#101012`, card `#161618`,
  elevated `#1c1c1f`, borders `rgba(255,255,255,.08/.16)`, ink `#f5f5f5`,
  muted `#a1a1aa`, accent `#22d3ee`/`#67e8f9`/`#0891b2`, contrast `#082834`,
  gold `#e2c044`, success `#1b8e47`.
- `--gradient-accent` cyan→ice→white; `--shadow-card` white inset +
  black shadow; `--shadow-glow` cyan glow.
- `@layer base`: `color-scheme: dark`; body bg `var(--color-base)`.
- `bg-grid` uses `rgba(255,255,255,.04)` lines; `glow-radial` /
  `glow-radial-deep` cyan radial glows; `border-gradient` cyan border.

**`src/styles/rescue.css`**
- `body { background:#0a0a0b !important }`.
- `.redesign-root .text-gradient` forced to the cyan gradient.

**`src/styles/legacy-saas.css`**
- `.text-gradient` cyan; `.seo-city-hero`/`.inner-hero` paragraph text
  `rgba(255,255,255,.72)`; `.blog p/li` `rgba(255,255,255,.82)`.
- Hard-coded cyan gradients for `.home-client-results` and
  `.seo-page .call-out`.
- `.inner-hero` dark radial-gradient + `#0a0a0b` band.
- Chips: `rgba(255,255,255,.05)` bg + `rgba(34,211,238,…)` active.
- Blog/pagination accent `rgba(34,211,238,…)`.
- `.grimsby li` / `.areas-served li` `rgba(255,255,255,.72)`.

**`src/pages/variables.scss`** — legacy tokens remapped to dark
(`$light-blue:#22d3ee`, `$white:#000`, `$dark-grey:#f5f5f5`,
`$main-dark-grey:#0a0a0b`, `$alt-dark-grey:#101012`, …).

**`src/pages/_document.js`** — `theme-color #0a0a0b`, `color-scheme: dark`.

**Components / pages**
- `components/Nav/nav.js`: `bg-base/90 backdrop-blur-md`, `hover:bg-white/5`.
- `components/Nav/topBar.js`: `bg-accent-deep`, `border-white/10`, `text-white/90`.
- `components/Nav/megaMenu.js`: `bg-surface/98`, black drop shadow,
  `hover:bg-white/5`.
- `components/ui/Button.js`: `bg-white/5`, `shadow-glow`.
- `components/ui/Field.js`, `Badge.js`, `Card.js` (`shadow-glow`, `ring-accent`).
- `components/CTA/cta.js`: `bg-base`.
- Many content components use `bg-white/5` chips and `glow-radial` hero overlays
  (`components/ui/PageHero.js`, `cities/NiagaraCityPage.js`,
  `verticalSeo/VerticalSeoPage.js`, `services/ServicePage.js`).
- `src/pages/index.js`: hero radial glows, gradient heading, device mock.

## Facts / claims

No new claims are introduced. Only existing, owner-supplied facts
(`data/site/site-facts.json`) may be displayed; anything unverified stays
omitted (same policy as the dark redesign). Content, headings, URLs, redirects,
sitemaps and JSON-LD are unchanged by this re-skin.
