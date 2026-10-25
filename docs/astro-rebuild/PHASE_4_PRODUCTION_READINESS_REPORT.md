# Phase 4 — Free Quote Conversion, Interaction Polish & Production Readiness

**Project:** infused.agency Next.js → Astro rebuild  
**Branch:** `astro-rebuild`  
**Date:** 2026-10-23  
**Status:** Complete for the current 23-page Astro prototype. **Not committed, not pushed, not deployed.**

---

## 1. Scope and outcome

This phase replaced the Free Audit conversion offer with **Free Quote** across the current Astro route set, polished interaction and focus states, closed the production-readiness gaps that could be fixed safely inside the prototype, and verified the result in a browser at desktop and mobile widths.

The legacy Next.js application in the repository root was not modified. No routes were added beyond the existing 23-page Astro build, apart from the generated `/sitemap.xml` endpoint.

The two agreed-value assumptions in the brief could not be applied as written because the repository does not contain them:

- Current title retained: `Niagara SEO, AI Search & Web Design | Infused Agency`
- Current H1 retained: `SEO, AI Search & Web Design for Niagara Businesses.`

Changing either requires owner approval; no unsupported metadata rewrite was made.

---

## 2. Files changed

### New files

| File | Purpose |
| --- | --- |
| `astro/src/pages/sitemap.xml.ts` | Build-derived sitemap containing only the currently indexable Astro routes. |
| `astro/public/robots.txt` | Crawler policy with the canonical sitemap declaration. |
| `astro/public/img/og-infused.jpg` | Branded 1200×630 default Open Graph / Twitter image. |

### Modified files

**Navigation, footer and shared UI**

- `astro/src/components/nav/Nav.astro`
- `astro/src/components/footer/Footer.astro`
- `astro/src/components/ui/PageHero.astro`
- `astro/src/components/ui/CtaBand.astro`
- `astro/src/components/ui/ServiceCard.astro`
- `astro/src/layouts/BaseLayout.astro`

**Pages and templates**

- `astro/src/pages/index.astro`
- `astro/src/pages/get-a-quote.astro`
- `astro/src/pages/404.astro`
- `astro/src/pages/seo/port-colborne.astro`
- `astro/src/pages/posts/[slug].astro`
- `astro/src/templates/HomePage.astro`
- `astro/src/templates/ServicePage.astro`
- `astro/src/templates/LocalSeoPage.astro`
- `astro/src/templates/VerticalPage.astro`
- `astro/src/templates/BlogIndexPage.astro`
- `astro/src/templates/BlogPostPage.astro`

**Metadata and validation**

- `astro/src/components/seo/SeoHead.astro`
- `astro/scripts/validate-prototype.mjs`

**Styles**

- `astro/src/styles/base.css`
- `astro/src/styles/components.css`
- `astro/src/styles/motion.css`
- `astro/src/styles/tokens.css`

Tracked changes: **639 insertions, 148 deletions across 23 files**, plus the three new files above.

---

## 3. Free Quote conversion

### CTA language

| Context | Label |
| --- | --- |
| Primary buttons, footer link, hero CTAs, full-width CTA bands | `Get a Free Quote` |
| Desktop header button, top bar, mobile menu quick link, space-constrained labels | `Free Quote` |
| Quote page primary conversion | `Get Your Free Quote` |

### Conversion paths updated

- Desktop and mobile navigation, including the Services mega menu aside and mobile menu CTA.
- Global top bar.
- Footer contact link and bottom-bar link.
- Homepage hero, proof section and closing CTA band.
- Service, local, vertical and blog templates.
- Blog post aside and closing CTA bands.
- Quote page.
- `404` contact card.
- Port Colborne conversion copy.

Every quote CTA points to the built `/get-a-quote` route. Phone, email and Calendly continue to use the existing verified details:

- Phone: `(905) 933-3115` → `tel:+19059333115`
- Email: `info@infused.agency`
- Booking: `https://calendly.com/infused-agency/project-discovery/`

No new endpoint, form action, form field, success message or business claim was invented.

### Audit language

All conversion-oriented “free audit” language was removed. The only remaining site-facing use is factual explanatory copy on the homepage:

> “We audit how AI tools describe your business, strengthen the details they rely on, and shape your content into clear answers they can quote.”

One occurrence of the word “audit” remains in rendered page text, on the homepage, and it is not a CTA. Historical Phase 1–3 documents still describe the old audit offer; they were not rewritten.

---

## 4. Quote page

`/get-a-quote` now provides a complete conversion path without pretending a form exists:

- **H1:** `Get Your Free Quote`
- Direct phone and email links in the hero and the “What happens next” panel.
- Email links include a `Free quote request` subject.
- Two existing Calendly links, both opening in a new tab with `rel="noreferrer"`.
- Written quote expectations and a three-step process.
- Closing CTA changed from a self-referential “Get a Free Quote” link back to `/get-a-quote` to **“Book a consultation”**, using the existing Calendly destination in a new tab.

There is **no quote form and no form backend**. This remains an explicit open decision. A form must not be added until the owner confirms fields, routing, spam handling, privacy language and success behaviour. Formspree is already installed as a dependency but is unused in the Astro prototype.

---

## 5. Interaction polish

### Timing and hover policy

- Added `--duration-card: 280ms`; interactions use `150ms`, `240ms` and `280ms`.
- Hover styling is gated under `@media (hover: hover)` so touch devices do not retain sticky hover states.
- Focus-visible styling is separate from hover and applies to keyboard users on every interactive element reviewed.
- Active states use a restrained 1px press.

### Components reviewed

- Primary, secondary, light, ghost and gold buttons.
- Arrow links and footer links.
- Cards, service cards, post cards and the featured post.
- Chips, province links, area links and social links.
- Desktop nav links, top bar, mega menu and mobile menu.
- Accordion summaries.
- Page hero breadcrumbs and inline links on dark surfaces.

### Focus rings

- Dark contexts use the gold ring, `rgb(226, 192, 68)`.
- Light mega-menu and mobile-panel links use the brand accent, `rgb(0, 92, 151)`.
- Cards with interactive children expose a `:focus-within` state as well as hover.
- Dark-card province links now have sufficient hover/focus contrast.

### Card motion

Card hover lift uses the CSS `translate` property rather than `transform`. This avoids inheriting the 640ms scroll-reveal transform timing on cards inside `.reveal-group`, so the hover lift responds in the intended interaction window while the reveal system stays untouched.

Measured at rest: `translate: none`.  
Measured after hover: `translate: 0px -5px`, with the lift shadow applied.

---

## 6. Motion preservation

The existing motion system was preserved:

- Hero line-rise and report-bar animations remain.
- Scroll reveals remain below-fold only and are still added by JavaScript.
- The reveal observer, stagger and reduced-motion rules were not rewritten.
- Only an explicit card override was added so interaction timing is not coupled to the reveal transition.
- Reduced-motion mode removes movement while keeping colour, border and outline feedback.

Automated reduced-motion result:

- `prefers-reduced-motion: reduce` matched.
- Hero button transform: `none`.
- Hero title animation duration: effectively zero.
- Hidden reveal elements: `0`.

No-JavaScript result:

- `will-reveal` elements: `0`.
- Hero opacity: `1`.
- Service cards visible: `true`.
- H1 present and correct.

---

## 7. Navigation regression testing

The desktop mega menu and mobile menu were regression-tested without refactoring the navigation implementation.

### Desktop mega menu at 1440px

- Opens from the Services summary.
- Panel width: **1216px**.
- Nav width: **1216px**.
- Panel left/right: **112px / 1328px**, matching the nav.
- No horizontal overflow.
- Escape closes the panel and returns focus to the summary.

### Mobile menu at 390px

- Opens from the menu toggle.
- Panel width: **390px**.
- `body.menu-open` is applied while open.
- No horizontal overflow.
- Escape closes the menu, removes the body scroll lock and restores focus.
- Touch environment reports `(hover: hover): false` and `(pointer: coarse): true`; no hover transform is applied.

---

## 8. Production-readiness fixes

### Default social image and metadata

- Added `astro/public/img/og-infused.jpg`, a 1200×630 branded image.
- `SeoHead.astro` now emits a default absolute `og:image` and `twitter:image` for every page.
- Added `og:image:alt` and `twitter:image:alt`.
- Twitter card is now `summary_large_image`.
- Post pages pass the post title as image alt text.
- `theme-color` now matches the dark header/navigation colour.

### Sitemap and robots

- Added a build-derived `/sitemap.xml` with **21 indexable URLs**: home, blog, quote, SEO, local SEO, therapist SEO and 15 posts.
- Excludes `/404`, `/500` and dynamic templates.
- Post entries include `lastmod` dates.
- Added `/robots.txt` with `Sitemap: https://infused.agency/sitemap.xml`.
- The sitemap currently describes this 23-page prototype, not the full legacy production site. It must be expanded as routes migrate.

### Other fixes in scope

- 404 contact copy changed to “Request a free quote and get a written scope.”
- Service-page callout CTA changed to `Get a Free Quote`.
- Quote-page email and phone details are now actionable links.
- Quote-page closing CTA no longer loops back to the same page.
- Dark-card province-link hover/focus contrast corrected.
- Breadcrumbs and inline links on dark page heroes now have readable gold treatment.
- Validator now checks sitemap routes, robots declaration, OG image existence and absoluteness, image alt text, Twitter metadata and the default social image.

---

## 9. Validation results

All commands were run from the repository root after the final code change.

| Command | Result |
| --- | --- |
| `yarn check:astro` | **0 errors, 0 warnings, 0 hints** across 38 files |
| `yarn build:astro` | **23 pages built** in 1.11s |
| `yarn validate:astro` | **PASSED** with 1 expected warning |
| `git diff --check` | Clean; no whitespace errors |
| Site-facing “free audit” search | No conversion copy remains; one explanatory homepage “audit” sentence |

The validator’s single warning is expected: **57 internal links point to real production routes that have not yet been migrated into this 23-page prototype**. They are present in the route manifest and were not invented or replaced with dead links to silence the warning.

### Browser QA coverage

Desktop at 1440×1000:

- `/`
- `/seo`
- `/seo/port-colborne`
- `/therapist-seo`
- `/blog`
- `/posts/local-seo-tips-niagara`
- `/get-a-quote`
- `/404`
- `/500`

Mobile at 390×844:

- All nine routes above.

Every route returned HTTP 200 under `astro preview`, had no horizontal overflow, no broken images and no audit CTA text. The only body-text “audit” match is the intentional homepage explainer.

Additional interaction checks:

- Mega menu geometry and Escape focus restoration.
- Mobile menu open/close, scroll lock and Escape focus restoration.
- Hover state on primary button and service card.
- Focus-ring colour and style on dark and light surfaces.
- Reduced-motion and JavaScript-disabled rendering.
- Touch hover media query and absence of hover movement.
- Calendly, email, phone and external-link attributes.

---

## 10. Visual QA

Screenshots were regenerated after the final build. Full-page capture scroll behaviour was pinned to `auto` during QA so smooth scrolling could not leave the page mid-scroll or skip scroll-reveal states.

Captured at 1440:

- Home (viewport and full page)
- SEO
- Port Colborne
- Therapist SEO
- Blog
- Blog post
- Quote page
- 404
- 500
- Desktop mega menu
- Reduced-motion state

Captured at 390:

- Every route above (viewport and full page)
- Mobile menu
- No-JavaScript state

Screenshot directory:

`/private/var/folders/lb/6prbllnj4tldwkn_bsf0lqw00000gn/T/infused-shots/phase4/`

Automated result files:

- `qa-results.json` — desktop, interaction, reduced-motion and no-JS checks.
- `qa-mobile-results.json` — all-route mobile overflow, image, CTA and touch-hover checks.

Visual review found no layout collisions, clipped headings, unreadable CTA panels, broken navigation overlays or missing images after regeneration. The homepage hero, mega menu, mobile menu and quote page were inspected individually.

---

## 11. Outstanding decisions and limitations

1. **No quote form or backend.** `/get-a-quote` deliberately relies on Calendly, email and phone. A form needs an owner decision on fields, delivery, spam handling, privacy copy and success behaviour before implementation.
2. **Sitemap scope.** The current sitemap covers only the 23-page prototype. It needs to grow with the migration and may need to become a sitemap index alongside the legacy route set.
3. **Trailing-slash normalisation.** `astro preview` returns 404 for trailing-slash variants. Host-level 301 normalisation remains an open deployment decision.
4. **Unmigrated production routes.** Navigation, footer and body links still point to 57 legitimate production routes outside this build. Full link and redirect regression can only be completed after those routes migrate.
5. **No host-level QA.** Redirects, cache headers, CDN behaviour, security headers and real production URLs were not tested in this phase.
6. **No Lighthouse, screen-reader or real-device test.** Browser QA used headless Chrome at the stated widths, not physical devices or assistive technology.
7. **No analytics or conversion tracking** exists in the prototype. Adding it is a separate decision.
8. **Homepage title/H1.** Current repository values were preserved; the brief’s listed “agreed” values were not present in the repository, and changing them requires owner approval.
9. **Formspree dependency.** Installed at the repository level but unused by the Astro quote page; retained rather than removed because it belongs to the existing dependency set.

---

## 12. Legacy Next.js and repository safety

- The legacy Next.js application under root `src/`, `public/`, `app`-equivalent files, `.next/`, and deploy configuration was **not modified**.
- No commit was created.
- No push was performed.
- No deployment was performed.
- The branch remains `astro-rebuild`.
- All work is uncommitted.

### Final `git status --short`

```text
 M astro/scripts/validate-prototype.mjs
 M astro/src/components/footer/Footer.astro
 M astro/src/components/nav/Nav.astro
 M astro/src/components/seo/SeoHead.astro
 M astro/src/components/ui/CtaBand.astro
 M astro/src/components/ui/PageHero.astro
 M astro/src/components/ui/ServiceCard.astro
 M astro/src/layouts/BaseLayout.astro
 M astro/src/pages/404.astro
 M astro/src/pages/get-a-quote.astro
 M astro/src/pages/index.astro
 M astro/src/pages/posts/[slug].astro
 M astro/src/pages/seo/port-colborne.astro
 M astro/src/styles/base.css
 M astro/src/styles/components.css
 M astro/src/styles/motion.css
 M astro/src/styles/tokens.css
 M astro/src/templates/BlogIndexPage.astro
 M astro/src/templates/BlogPostPage.astro
 M astro/src/templates/HomePage.astro
 M astro/src/templates/LocalSeoPage.astro
 M astro/src/templates/ServicePage.astro
 M astro/src/templates/VerticalPage.astro
?? astro/public/img/og-infused.jpg
?? astro/public/robots.txt
?? astro/src/pages/sitemap.xml.ts
?? docs/astro-rebuild/PHASE_4_PRODUCTION_READINESS_REPORT.md
```

No Next.js app, root deployment configuration or production integration was changed.
