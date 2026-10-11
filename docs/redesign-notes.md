# Redesign notes

Working checklist and discovery log for the dark SaaS redesign. Phases R0–R3
only (spec §"do R0, R1, R2, R3 and then stop"). One commit per phase; Tailwind
setup is committed separately before any visual work.

## Phase checklist

### R0 — Foundations / guardrails (this phase)
- [x] Branch `feat/dark-saas-redesign` created from `seo-overhaul` (`4e5505a`).
- [x] Pre-redesign build captured: 172 pages, 95 with JSON-LD, 0 failures.
- [x] `scripts/seo-regression.js` written (`--write-baseline` + check mode).
- [x] `docs/pre-redesign-baseline.json` written from the current build.
- [x] `docs/redesign-allowlist.json` written (`allowH2Changes: ["/"]`,
      `allowNewPages: ["/industries"]`).
- [x] `verify:seo` wired to run the regression checker after schema validation.
- [x] `docs/design-reference.md` (design facts only, no competitor copy).
- [x] `data/site/site-facts.json` (verified facts; unknowns `null`).
- [x] `docs/redesign-open-questions.md` (documented assumptions).
- [ ] Run `yarn verify:seo && yarn test:seo && yarn lint && yarn build` + commit.

### R1a — Tailwind setup (separate commit)
- [x] **Tailwind v4.3.3** chosen (spec's preferred branch). Next 13.5.6 + Node
      22 build green with it, so no v3.4 fallback needed. Installed via yarn as
      devDependencies: `tailwindcss@^4`, `@tailwindcss/postcss@^4`, and
      `autoprefixer` (custom `postcss.config.js` replaces Next's default
      PostCSS pipeline, so autoprefixer keeps legacy vendor prefixing).
- [x] `postcss.config.js` → `@tailwindcss/postcss` + `autoprefixer`.
- [x] `src/styles/tailwind.css` imported first in `_app.js` (before Bootstrap so
      Bootstrap's reboot still wins on legacy components). Preflight **enabled**.
      `@source` covers `components/`, `src/pages/`, `data/`.
- [x] Design tokens mapped into `@theme` (colours, fonts, radius, shadow/glow,
      container) as CSS variables, plus z-index base vars + `z-*` utilities.
- [x] Existing SCSS/Bootstrap untouched and still working.
- [x] Built CSS: **34.9 kB gzipped** (was 32.5 kB) — under the ~50 kB target.

### R1b — Design system
- [ ] Dark theme tokens (below) as CSS variables + Tailwind theme extension.
- [ ] `next/font` Inter (body) + Playfair Display (display).
- [ ] Core primitives: Button, Card, Badge, SectionHeading, Container,
      Eyebrow, StatCard, TestimonialCard, LogoStrip.
- [ ] `/dev/styleguide` preview route (noindex).

### R2 — Header, mega menu, footer
- [ ] Sticky translucent header with backdrop blur; keyboard-accessible mega menu.

### R3 — Homepage
- [ ] Rebuild homepage on the design system; keep home JSON-LD types, title,
      meta, canonical, robots unchanged. H2s may change (allowlisted).

## Discovery

- Framework: Next.js **13.5.6**, **Pages Router** (`src/pages`), JS only, yarn.
- Styling: SCSS + Bootstrap 4 + reactstrap. Reusable chrome in `components/`.
- Fonts: `@next/font` available (currently DM_Sans).
- Site is already dark (`body { background: #100a25 }`); SCSS tokens live in
  `src/pages/variables.scss` — note several are misnamed (e.g. `$white: #000`).
- JSON-LD builders: `src/lib/verticalSeoSchema.js`. Homepage uses `homeGraph`
  → types Organization/ProfessionalService/LocalBusiness + WebSite + WebPage +
  FAQPage. These must not change in R3.
- Regression checker crawls `.next/server/pages/**/*.html` (same convention as
  `scripts/validate-schema.js` / `scripts/audit-pages.js`).

## Design tokens (brand-derived, to implement in R1b)

Accent is derived from Infused's own brand, **not** the reference's blue/violet.

| Token | Value | Notes |
| --- | --- | --- |
| `--bg` | `#100a25` | brand navy (`$main-dark-grey`) |
| `--surface` | `#120b2d` | brand navy alt (`$alt-dark-grey`) |
| `--card` | `#170f36` | raised card surface |
| `--border` | `rgba(255,255,255,.08)` | hairline |
| `--text` | `#f5f5f5` | `$dark-grey` |
| `--muted` | `#a9a3c2` | secondary text (AA) |
| `--accent` | `#2b9ae1` | brand blue (`$light-blue`) |
| `--accent-hover` | `#46a6ea` | brighter hover |
| `--accent-deep` | `#363795` | brand indigo (`$purple`) for gradients |
| `--gold` | `#e2c044` | brand gold (`$yellow`) for stat highlights |
| `--radius` | `0.75rem` | card/button radius |
| `--glow` | `0 0 28px -2px #2b9ae188`, inset `0 0 0 1px rgba(255,255,255,.06)` | accent glow |

Fonts: **Inter** (body, 400/500/700) + **Playfair Display** (display, 500/700),
both SIL OFL, loaded via `next/font` (self-hosted, `swap`).

## Assumptions (made, not asked)

1. Tailwind version not pinned in the spec → try v4, fall back to v3.4.
2. Logo hex unreadable here → accent from CSS brand tokens; logged as an open
   question.
3. Reference blue/violet deliberately not adopted (spec rule 1) — accent is
   brand-derived.
4. `clientsHelped: "50+"` and the results claim come from owner-supplied data.
5. Reviews badge hidden (no verified rating/count).
6. No competitor copy/headings/images reused; only generic structure recorded.
7. `/industries` treated as a new allowlisted page; nav inclusion decided in R2.
