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
- [x] Dark theme tokens (below) implemented in `src/styles/tailwind.css` `@theme`
      as CSS variables + Tailwind theme extension (colours, fluid type scale,
      radius, shadow/glow, container, z-index).
- [x] `next/font`: **Inter** (400/600) body + **Playfair Display** (700) display
      = 3 weights total, self-hosted, `display:swap`, wired via CSS variables
      `--font-inter` / `--font-playfair` on a wrapper in `_app.js`.
- [x] Primitives in `components/ui/`: Container, Section (eyebrow/heading/
      subhead), Button (primary/secondary/ghost), Badge (pill/chip), Card
      (border/hover-lift/gradient/glow), ServiceCard (numbered), StatBlock,
      Accordion (native `<details>`), TestimonialCard, Breadcrumb, Field +
      input/label styles, and an inline SVG `Icon` set. Barrel `components/ui/index.js`.
- [x] Atmosphere utilities: `bg-grid`, `glow-radial`, `glow-radial-deep`,
      `border-gradient` (CSS only, no images).
- [x] `/dev/styleguide` preview page — `noindex`, `getStaticProps` returns
      `notFound` in production so it is never built or sitemapped.
- [x] `_document.js`: `theme-color` `#100a25` + `color-scheme: dark`.
- [x] Built CSS: **37.2 kB gzipped** total (still under the ~50 kB target).

### R2 — Header, mega menu, footer
- [x] Sticky translucent dark header (`sticky top-0`, backdrop blur, border
      appears on scroll) with logo, Solutions (mega menu), Work, About, Blog,
      and a primary "Get a quote" button. Rewritten without reactstrap/Bootstrap
      nav (plain markup + Tailwind), mobile toggle reimplemented with Escape close.
- [x] Mega menu restyled as a full-width dark panel: 4 service groups with group
      headings + one-line descriptions, an "SEO by industry" group (live
      verticals only), and a featured "Not sure where to start?" card. Kept the
      Phase 7 behaviour: hover/focus open with delays, Escape closes and returns
      focus to the trigger, touch-tap opens, server-rendered links.
- [x] New mega footer: brand + social icons (from site-facts social profiles),
      Services by group, Industries (live verticals), Niagara cities (published
      `/seo/{city}` pages only), Company, and public contact details + legal links.
- [x] Reviews badge **omitted** — no verified rating/count in `site-facts.json`.
- [x] Deleted now-unused `components/Nav/nav.scss` and `components/Footer/
      footer.scss` (their classes were used only by the converted components).
- [x] Header switched from `position: fixed` (Bootstrap `.fixed-top`) to
      `position: sticky`, so it reserves its own height and can never overlap
      content. NOTE: legacy pages still carry their old large top padding, so
      they show extra top spacing until Phase R5 reflows them (deferred per spec).

Decisions / assumptions logged:
- **Industries nav/footer entries are not added yet.** The spec lists an
  "Industries" item in the R2 header, but the `/industries` page is created in
  R4. Adding the link now would create a broken internal link (the
  broken-link gate fails on it). We keep the existing nav links in R2 and link
  the footer "Industries" column straight to the live vertical pillars
  (`/therapist-seo`). The `/industries` entry is added in R4 with the page.
- Header logo switched from `infused-logo.png` (82x17, too low-res) to the
  existing `niagara-web-design-infused-logo.webp` (200x58) for a crisp header.
- `navData.js` holds the menu data + short, neutral one-line descriptions in our
  own words (no competitor copy).

### R3 — Homepage
- [x] Rebuilt `src/pages/index.js` on the design system (Tailwind + `components/ui`).
      `Head` kept byte-identical: same `homeGraph({ faqs: HOME_FAQS })` script,
      title, meta description, canonical, geo/verification metas. H1 kept exactly
      `Niagara SEO and AI SEO Services`.
- [x] Section order per spec: hero (eyebrow, H1, supporting copy, primary CTA +
      compact inline lead form + real trust row) → recognised/affiliate strip →
      "how people find your business" intro → proof strip (StatBlocks +550%/+670%,
      50+, testimonials) → where to start (4 numbered cards + buyer-guide links) →
      services grid (all 21 services, numbered, grouped as the mega menu, from
      `navData.js`) → choose your path (3 intent cards) → how we work (4 steps) →
      web design + SEO together (3 features) → why Infused (4 differentiators) →
      industries (paragraph + chips = live verticals only) → where we work (Niagara
      city pills, only published `/seo/{city}` pages) → FAQ → final CTA with the
      form again.
- [x] New `components/Home/LeadForm.js`. **Assumption:** the site has no form
      backend (every page funnels to Calendly on `/get-a-quote` and the public
      email); the form therefore submits through the existing contact channel via
      a prefilled `mailto:info@infused.agency`, and includes the required hidden
      honeypot field (`company_url`, visually hidden + `aria-hidden`, `tabIndex -1`).
      Logged as an open question.
- [x] Extended `src/lib/homeFaqs.js` with 4 fresh FAQs (clients helped, work
      outside Niagara, first step, web + SEO). `HOME_FAQS` is still the single
      source for both the visible Accordion and the FAQPage JSON-LD, so they stay
      in sync. Only FAQ *content* changed — JSON-LD **types** are unchanged.
- [x] Reused only real assets/proof: `aff-*` affiliate badges and `feat-*` client
      logos (both already on the site and in `site-facts.clientLogosAllowed`), the
      two verified result metrics, and the three owner-attributed testimonials.
      No reviews badge, no invented numbers, no competitor copy.
- [x] Regression: **0 failures, 0 warnings**. Word count kept within the ≤15% rule
      (3155 → ~2740) after adding substantive prose; H1/title/meta/canonical/robots
      and JSON-LD types all unchanged.
- [x] `yarn lint` (pre-existing warnings only; new files clean), `yarn build`,
      `yarn verify:seo`, `yarn test:seo` (17 passed) all green.

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
