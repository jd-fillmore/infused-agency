# Phase 3.2 — Visual Redesign Review

**Project:** infused.agency Next.js → Astro rebuild
**Branch:** `astro-rebuild`
**Date:** 2026-10-23
**Status:** Redesign implemented and verified on the prototype route set. **Not committed, not pushed, not deployed.**

---

## 1. Scope

Phase 3.2 replaces the plain template look of the Astro prototype with a real agency visual direction, on the same 23 static pages built in Phase 3. No new routes were migrated. No copy, metadata, canonical handling, or verified structured data was removed. No testimonials, metrics, client logos, awards, or claims were invented — every proof point on the page comes from `data/site/site-facts.json` or the existing post content.

Redesigned pages:

| Route | Template |
| --- | --- |
| `/` | `templates/HomePage.astro` |
| `/seo` | `templates/ServicePage.astro` |
| `/seo/port-colborne` | `templates/LocalSeoPage.astro` |
| `/therapist-seo` | `templates/VerticalPage.astro` |
| `/blog` | `templates/BlogIndexPage.astro` |
| `/posts/*` (15 posts) | `templates/BlogPostPage.astro` |
| `/get-a-quote` | `pages/get-a-quote.astro` |
| `404`, `500` | `pages/404.astro`, `pages/500.astro` |

---

## 2. Visual direction

| Role | Value |
| --- | --- |
| Warm base / paper | `#f4efe6`, deep paper `#ece3d4` |
| Navy chapters | `#08152b`, `#0e1b3d` |
| Brand blue | `#005c97`, hover `#066aa8` |
| Indigo | `#363795` |
| Gold accents | `#8a6100` (text), `#e2c044` (bright) |
| Type | Poppins 400/500/600/700 (existing `@fontsource/poppins`, no new font) |

Tokens live in `astro/src/styles/tokens.css`; base/layout/typography in `base.css`; components in `components.css`; motion in `motion.css`. No new dependencies were added in this phase.

Chapter rhythm on the homepage: navy hero → warm trust strip → warm services → navy proof/testimonials → warm manifesto → tinted capabilities → navy AI-search editorial → warm web-design split → warm industries → navy areas → blue-gradient CTA → warm FAQ → warm blog → navy footer with oversized watermark.

The hero is a dark, grid-textured stage: kicker line, four-line headline with a gold accent line, lead, two CTAs, trust list, and a layered "verified result" report card built from real data (+550% Flat Rock Cellars), a "50+ Niagara businesses helped" ticket and a Google Partner sticker.

---

## 3. Files changed in this phase

**Styles**

- `astro/src/styles/tokens.css` — palette, type scale, spacing, radii, shadows, motion tokens.
- `astro/src/styles/base.css` — warm base, section tones (surface/warm/tint/contrast), typography, container, section heading, prose, skip-link; print safety for reveals.
- `astro/src/styles/components.css` — buttons, badges/chips, cards, service/industry/testimonial/accordion/callout components, nav, topbar, mega menu, mobile menu, footer, page hero, and all homepage chapter styles.
- `astro/src/styles/motion.css` — hero line rise, report bar growth, mega/mobile panel animations, scroll-reveal rules, `prefers-reduced-motion` overrides.

**Layout and components**

- `astro/src/layouts/BaseLayout.astro` — reveal observer (below-fold only), header scroll state, mega menu (hover/focus/Escape/click-away), mobile menu (scroll lock, Escape, focus trap, resize close, link close).
- `astro/src/components/nav/Nav.astro` — dark header, topbar, brand, desktop nav with full-width Services mega panel, phone + gold quote CTA, `<details>`-based mobile overlay menu.
- `astro/src/components/footer/Footer.astro` — navy footer with description, service/city/company columns, contact block, socials, oversized watermark.
- `astro/src/components/ui/Section.astro`, `PageHero.astro`, `ServiceCard.astro`, `Button.astro` (added `gold` variant), `TestimonialCard.astro`, `Accordion.astro`, `Card.astro`, `CtaBand.astro`.

**Templates and pages**

- `HomePage.astro` — new composition described above (hero, trust strip, services, proof, manifesto, capabilities, AI search, web design, industries, areas, CTA, FAQ, blog preview).
- `ServicePage.astro`, `LocalSeoPage.astro`, `VerticalPage.astro`, `BlogIndexPage.astro`, `BlogPostPage.astro`, `pages/get-a-quote.astro`, `pages/404.astro`, `pages/500.astro`.

---

## 4. Interactions

**Mega menu (desktop, ≥1080px)**

- Opens on hover, click or keyboard focus of the `Services` summary; closes on click outside, Escape (focus returns to the summary), and viewport changes below 1080px.
- The panel is a static-positioned child of the nav so it spans the whole container width (measured: 1216px panel inside a 1216px nav at 1440px, aligned to the container edges, not to the clicked item).
- Four link columns (SEO / Web Design / eCommerce Marketing / Digital Marketing and Reputation) plus a dark "free audit" aside and a footer strip.

**Mobile menu (<1080px)**

- Native `<details>` overlay fixed below the header; opening locks body scroll (`body.menu-open { overflow: hidden }`).
- Escape closes the panel and restores focus to the toggle; Tab is trapped inside the open panel; a resize back to desktop closes the menu; navigating to a link closes it.
- Panel height measured 778px below a 66px header at 320/390/430px; internal content scrolls.

**Motion**

- Hero lines use CSS-only rise animation with a 90ms stagger; report bars grow in sequence.
- Scroll reveals: JavaScript only adds `.will-reveal` to elements whose top is below 92% of the viewport at load, so above-the-fold content is never hidden and a no-JS render shows everything.
- `prefers-reduced-motion: reduce` cancels animations and transitions and forces revealed content visible (verified: hero bars `opacity: 1`, headline height 330px, reveal classes absent).

---

## 5. Fixes made during visual QA

1. **Hero headline wrapping** — the original 3-line composition wrapped to 5 lines at 1440px and 6 at 320px. Re-cut to four explicit lines (SEO, AI Search / & Web Design / for Niagara / Businesses.) and tuned `clamp()` so it holds 4 lines from 320px to 1440px (41.6px at 320, 48px at 390, 82.4px at 1440).
2. **Web design cards clipped** — the three service cards sat inside the left column of a split, so "eCommerce Web Design" was clipped at 1440px. Moved the cards to a full-width row under the split and added a `Explore web design` link beside the prose.
3. **Duplicate audit card on service pages** — `ServicePage` rendered the same "Start with a free audit" card in the hero aside *and* in the intro section. The intro section is now a two-column heading/prose layout; the audit card only appears in the hero.
4. **320px horizontal overflow (quote page)** — long CTA labels (`white-space: nowrap`) pushed the layout viewport to 329px. Buttons now wrap below 360px and long `.btn--lg` labels get reduced inline padding.
5. **320px overflow from the closed mobile menu** — a closed `<details>` still laid out its fixed panel and pushed 9px of overflow. `.mobile-menu:not([open]) .mobile-nav { display: none }` removes it.
6. **Card title safety** — added `overflow-wrap: break-word` to card titles so long words can never clip.
7. **Trust strip legibility** — affiliation logos were nearly invisible; grayscale/contrast and opacity raised (0.74 → 0.86 affiliations, 0.68 → 0.82 client strip with a lighter brightness filter).
8. **Industry cards on mobile** — the 13rem desktop min-height left ~80px of dead space on small screens; relaxed below 700px.
9. **Hero accent gradient** — the gold→blue gradient washed the last headline line to grey; now a gold gradient that ends in deep gold.
10. **Partner sticker copy** — the hero sticker read "Google Partner / Niagara Chamber" under a Google Partner logo; reduced to "Google Partner" (the Niagara Chamber mark still appears in the trust strip).
11. **Therapist CTA heading** — `Grow your therapists practice` → `Grow your practice with local SEO` (grammar fix, same offer).
12. **Print safety** — `@media print` forces revealed content visible so printing or PDF capture never drops sections.

---

## 6. Verification

Commands run from the repo root on `astro-rebuild`:

| Command | Result |
| --- | --- |
| `yarn check:astro` | **0 errors, 0 warnings, 0 hints** (37 files) |
| `yarn build:astro` | **23 pages built**, no errors |
| `yarn validate:astro` | **PASSED** — metadata/canonical/H1/JSON-LD/assets all valid; 1 expected warning: 57 internal links point to real production routes that are outside this prototype build |

**Responsive measurements** (headless Chrome via `puppeteer-core` installed in a temp directory outside the repo — not a project dependency):

| Page | 320px | 390px | 430px |
| --- | --- | --- | --- |
| `/` | `scrollWidth 320` | `390` | `430` |
| `/seo` | `320` | `390` | `430` |
| `/get-a-quote` | `320` (was 329 before the button fix) | `390` | `430` |
| `/blog` | `320` | `390` | `430` |

`document.scrollWidth === innerWidth` on every tested page, so there is no horizontal overflow or zoom-out at 320/390/430px.

**Interaction checks**

| Check | Result |
| --- | --- |
| Mega panel width at 1440 | Panel 1216px, left 112 / right 1328 — identical to the nav container |
| Mega at 1080 / 1200 | Fits with no overflow; headings wrap to two lines at 1080 |
| Escape closes mega and returns focus to summary | ✅ |
| Mobile menu at 320/390/430 | Opens, `body.menu-open` set, panel 0→viewport width, no overflow |
| Reduced motion | Animations cancelled, hero bars fully visible, headline intact |
| JavaScript disabled | `.will-reveal` count `0` — all content rendered visible |
| Layout shift | Reveals animate `opacity`/`transform` only |

**Screenshots** (temp dir `/private/var/folders/lb/.../T/infused-shots/after`): `home-hero-1440.png`, `home-full-1440.png`, `home-full-390.png`, `mega-1440.png`, `mega-1080.png`, `menu-320/390/430.png`, plus full-page and section captures for `/seo`, `/seo/port-colborne`, `/therapist-seo`, `/blog`, one blog post and `/get-a-quote` at 1440px and 390px.

---

## 7. Known issues and open decisions

1. **No form on `/get-a-quote`.** The page routes to the external Calendly booking link, matching the previous prototype. If the live site has a form, it needs a separate decision (provider, spam protection, and where submissions go).
2. **CTA band saturation.** The blue-gradient CTA band is the most saturated element in the system; if it reads too "loud" it can be desaturated to the navy surface without breaking the layout.
3. **Proof copy repetition.** Both verified results carry the same context sentence ("Local visibility grew after SEO work with Infused Agency.") straight from `site-facts.json`. Distinct one-line results would need client-approved wording — nothing was invented here.
4. **Mega menu link targets.** Most mega/mobile links point to production routes not present in this prototype (the validator warning). They are intentional and will resolve once the remaining routes are migrated in Phase 4.
5. **No automated accessibility sweep.** Keyboard flow, focus visibility, scroll lock and reduced motion were verified manually in a headless browser; an axe/Lighthouse pass should run before any production build.

---

## 8. Approval checklist

- [ ] Homepage direction (dark hero, warm base, navy proof chapters, gold accents) is the look we want
- [ ] Homepage section order and copy are final
- [ ] Mega menu (full container width, four columns + audit aside) is approved
- [ ] Mobile menu (fixed overlay, accordions, body scroll lock) is approved
- [ ] Motion (hero line rise, bar growth, scroll reveals, reduced-motion behaviour) is approved
- [ ] Service page layout change (heading + prose two-column intro, no duplicated audit card) is approved
- [ ] Blog index and blog post layouts are approved
- [ ] Quote page approach (no form, Calendly + email + phone) is approved, or the form requirement is defined
- [ ] Proceed to Phase 4 route migration
