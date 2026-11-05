import { defineConfig } from "astro/config";

// Astro is the repository's only application. The project is rooted in `astro/`
// (invoked as `astro ... --root astro`) because the shared content sources
// (`data/`, `posts/`, `src/lib/`) live at the repository root.
export default defineConfig({
  site: "https://infused.agency",
  output: "static",
  trailingSlash: "never",
  build: {
    format: "directory",
    // Keep small page-level styles inline, but emit the large global stylesheet
    // as a hashed, cacheable file instead of inlining ~78 KB into every page.
    inlineStylesheets: "auto",
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
