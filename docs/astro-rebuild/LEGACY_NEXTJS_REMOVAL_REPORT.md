# Legacy Next.js Removal Report

Repository: `infused-agency` · Branch: `astro-rebuild` · Date: 2026-10-24

This report records the completion of the migration that made Astro the sole
application in this repository, including what the prior session had already
done and what this session finished.

> Nothing below is committed. All work is in the working tree of
> `astro-rebuild` for review.

---

## 1. State found at the start of this session

The previous session stopped mid-run (a failed `yarn install` — `EPERM` while
unlinking a stale `@tailwindcss/oxide` Windows binary). Its changes were intact
in the working tree:

### Already completed by the previous session (verified from the working tree)

- **Root package manifest converted.** `package.json` had been rewritten as a
  Yarn 1 (1.22.19, `packageManager` field, Node 22 engines) manifest for the
  Astro-only workflow; every Next.js-only dependency (`next`, `react`,
  `react-dom`, `reactstrap`, `slick-carousel`, `swiper`, `framer-motion`,
  `next-sitemap`, `tailwindcss`, `eslint-config-next`, etc.) had been removed.
- **`yarn.lock` regenerated** for the Astro-only dependency set (~6,260 lines
  of legacy dependency resolution removed).
- **Legacy Next.js application deleted (uncommitted):** `components/`,
  `src/pages/**` (all page modules and page-scoped SCSS), `src/templates/`,
  `src/styles/`, `src/img/**`, `src/video/`, `uploads/public` assets, `out/`
  (checked-in Next build output), `next.config.js`, `next-sitemap.config.js`,
  `postcss.config.js`, `.eslintrc.json`, `jsconfig.json`, `public/`
  (superseded by `astro/public/`), all Next-era `scripts/*.js`, and a large
  number of throwaway root-level debugging artifacts (`check*.js`, `fix*.js`,
  `validate_astro*.txt`, `build_astro*.txt`, `stackdump`/`.DS_Store` files).
- **Shared CommonJS data helpers retained and updated:** `src/lib/services.js`,
  `src/lib/verticalSeo.js`, `src/lib/canadaNicheSeo.js`,
  `src/lib/niagaraIndustries.js`, `src/lib/launch.js`,
  `src/lib/verticalSeoSchema.js` — comments updated for Astro, and the
  vertical-SEO gate cache moved from `.next/cache/` to a `.cache/` directory so
  Astro builds and scripts no longer depend on a Next build tree.
- **Deleted Next-only libs whose content was exported to JSON:** `src/lib/homeFaqs.js`,
  `src/lib/niagaraWebDesignCities.js`, `src/lib/posts.js`.
- **Astro content snapshots created:** `astro/src/content/legacy/*.json`
  (industry, city, bespoke, work-project page data and the therapist route
  manifest exported from the removed React tree).
- **Deployment/hosting updated:** `netlify.toml` build command + publish
  directory (`astro/dist`), `.github/workflows/ci.yml` reduced to a single
  Astro job, root `.gitignore` rewritten for the Astro repository.
- **Docs updated:** `README.md` rewritten as the Astro workflow reference;
  `docs/vertical-seo-build.md` and `docs/vertical-seo-build-spec.md` marked as
  historical with pointers to the Astro implementation.
- **Astro build already verified by the previous session:** the working tree
  contained a `.cache/vertical-seo-gate.json` gate cache produced by earlier
  successful runs.

### Incomplete when this session started

- **Dependencies were out of sync with the lockfile** (the failed install).
- **`astro/src/content/` was untracked** (the JSON snapshots had been created
  but never staged; fine, but see below — the directory was in the wrong place).
- **No `LEGACY_NEXTJS_REMOVAL_REPORT.md`** existed in `docs/astro-rebuild/`.
- **No directory-level cleanup:** `docs/city-image-manifest.json` untracked,
  stale `yarn-error.log` at root, duplicate root-level artifacts.
- **The removed legacy content was still referenced by helper code paths**
  (see defects fixed below).

---

## 2. Defects found and fixed in this session

1. **`yarn check` never ran Astro's checks.** The previous session renamed the
   scripts to bare `check` / `build` / `validate`. Yarn 1 has a built-in
   `check` command (lockfile/node_modules verifier) that shadows a script of
   the same name, so `yarn check` silently validated the lockfile instead of
   running `astro check`. CI (`yarn check`) was therefore never type-checking
   Astro. Fixed by restoring the established `:*` suffix convention:
   `dev:astro`, `build:astro`, `preview:astro`, `check:astro`,
   `validate:astro`, `verify:astro` (`dev`, `build`, `preview` kept as plain
   aliases since they are not Yarn built-ins). `.github/workflows/ci.yml`,
   `netlify.toml` and `README.md` updated to match.
2. **Missing `@types/node`** caused 9 TypeScript errors in
   `astro/src/lib/posts.ts` (`node:fs`/`node:path`/`process` untyped and
   cascading implicit-any errors). Added `@types/node` as a devDependency;
   `yarn.lock` updated.
3. **Astro content-layer conflict.** The inherited JSON snapshots lived under
   `astro/src/content/legacy/`, which is Astro's reserved content-collections
   directory; each build logged a `glob-loader` warning (it expected `.md`
   files) and pushed the data through the content-sync machinery although
   nothing reads it as a collection. Moved to `astro/src/data/legacy/` and
   updated the lone consumers: `astro/src/lib/legacy-pages.mjs`
   (`LEGACY_CONTENT_DIR`), `README.md`, and — critically —
   `src/lib/verticalSeo.js`'s `legacyTherapistFiles()` which reads
   `therapist-routes.json` by absolute path (it would otherwise have failed
   silently and dropped the therapist "More cities" link block).
4. **Google Search Console verification file would have disappeared from the
   site.** Next served `googlea476b363e2afb389.html` from its `public/` dir,
   which the migration deleted. Copied it into `astro/public/` so Netlify
   publishes it again, and removed the root-level duplicate (pre-Next era,
   unreachable at the current publish directory).
5. **`.cache/` (the vertical-SEO gate cache directory) was not ignored** —
   added to `.gitignore`.
6. **The prototype validator would fail once the Google verification file is
   published.** `astro/scripts/validate-prototype.mjs` validates every `.html`
   file in `astro/dist` as a content page and requires every built route to
   appear in the sitemap. The opaque `googlea476b363e2afb389.html` service blob
   can satisfy neither — it must stay byte-identical and be sitemap-excluded.
   Added a `UTILITY_FILES` exclusion list to the validator so service files
   are skipped instead of amending the blob itself.

---

## 3. Retained and why

- **`src/lib/*.js` (CommonJS helpers)** — the single source of truth for the
  service, vertical×geo, Canada-niche and launch-gate data models; required at
  build time by `astro/src/lib/legacy-pages.mjs` and the validator script.
- **`src/content/canada-niche/**`** — Canada-wide concrete-contractor page
  copy consumed by `src/lib/canadaNicheSeo.js`.
- **`src/generated/services-nav.json`** — generated nav snapshot imported by
  `astro/src/lib/site.ts`.
- **`data/` and `posts/`** — shared content sources used directly by Astro.
- **`scripts/should-deploy-today.js`** — backs the still-active `deploy:check`
  script.
- **`docs/astro-rebuild/` planning docs** (01–06, CSV registers, earlier phase
  reports) — the audit trail of the rebuild. The Next-era progress notes at
  the repo root (`CANADA_PROGRESS.md`, `NICHE_PROGRESS.md`,
  `VERTICAL_PROGRESS.md`, `SEO_CLEANUP_PLAN.md`) got "historical document"
  banners instead of deletion because they are user-authored history.
- **`googlea476b363e2afb389.html`** relocated into `astro/public/` (see above).

## 4. Removed in this session

- Root duplicate `googlea476b363e2afb389.html` (superseded by `astro/public/` copy).
- Stale `yarn-error.log`.
- Nothing else — all large-scale legacy deletions were already in the working
  tree from the previous session and were verified as referenced-free (see §5).

## 5. Verification actually run

| Command | Result |
| --- | --- |
| `yarn install --frozen-lockfile` | ✅ "success Already up-to-date" — lockfile matches manifest (CI parity) |
| `yarn check:astro` | ✅ `astro check` — 75 files, **0 errors, 0 warnings** (9 errors before the fixes) |
| `yarn build:astro` | ✅ **201 pages built in 6.8s**, no content-loss warnings |
| `yarn validate:astro` | ✅ **200 HTML pages validated — PASSED with 0 warnings** (HTML titles, links, schema, sitemap, redirects) |
| `yarn verify:astro` (full chain) | ✅ `check:astro` + `build:astro` + `validate:astro` — exit code 0, run end to end after all fixes |
| Image-reference audit (ad hoc script) | ✅ All **242 unique `/img/...` references** across built HTML resolve to files shipped in `astro/dist` |
| Dangling-reference sweep (ad hoc search) | ✅ No references to `legacy-jsx`, `next.config`, `next-sitemap`, `next dev/build/start/lint`, `_app.js`, `.next/` remain in the active workflow files |
| `astro/dist` spot checks | ✅ `sitemap.xml`, `robots.txt` (with sitemap URL), `_redirects` all present |

Redirects (`astro/public/_redirects`), canonical URLs (`SeoHead`) and the
build-time sitemap (`astro/src/pages/sitemap.xml.ts`) all verified working by
`yarn validate:astro`.

Commands and their meanings are documented in `README.md`.

## 6. Unresolved issues / notes for review

- All changes are **uncommitted** by instruction. The diff contains 1,817
  deletions (legacy Next.js application), 20 modifications (manifest, config,
  docs, retained data helpers) and 3 new untracked items (`astro/src/data/`,
  `astro/public/googlea476b363e2afb389.html`, `docs/city-image-manifest.json`).
- `docs/astro-rebuild/02-seo-config.md` and other older planning docs still
  describe Next.js-era file paths; they are audit-history documents and were
  intentionally left as-is.
- The EPERM `yarn install` failure that stopped the previous session did not
  reproduce; the install now completes cleanly on this machine.
