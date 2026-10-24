import { defineConfig } from "astro/config";

// Phase 3 isolation decision:
// The legacy Next.js app owns the repository root (`src/`, `public/`, `.next/`).
// To keep it fully intact and runnable as the migration reference, the Astro
// project is rooted in `astro/` and is invoked with `astro ... --root astro`.
// This avoids any collision between Next pages and Astro pages and keeps the
// legacy build/deploy configuration untouched.
export default defineConfig({
  site: "https://infused.agency",
  output: "static",
  trailingSlash: "never",
  build: {
    format: "directory",
  },
  devToolbar: {
    enabled: false,
  },
  vite: {
    server: {
      // Allow reading the existing JSON/Markdown content sources at the repo root.
      fs: {
        allow: [".."],
      },
    },
  },
});
