import type { APIRoute } from "astro";
import { getAllPosts } from "../lib/posts";
import { SITE } from "../lib/site";
import { RETIRED_ROUTE_PATHS } from "../lib/retired-routes.mjs";
import {
  getIndustryPages,
  getCitySeoPages,
  getVerticalPages,
  getNicheCityPages,
  getNicheHub,
  getBespokePages,
  WEB_DESIGN_CITIES,
} from "../lib/legacy-pages.mjs";

const pageModules = import.meta.glob("./**/*.astro");

function routeForPage(file: string): string | null {
  const relative = file.replace(/^\.\//, "").replace(/\.astro$/, "");

  // Dynamic route templates are emitted separately, and error pages are
  // intentionally noindex.
  if (relative.includes("[") || /(^|\/)(404|500)$/.test(relative)) return null;

  if (relative === "index") return "/";
  if (relative.endsWith("/index")) return `/${relative.slice(0, -"/index".length)}`;
  return `/${relative}`;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const GET: APIRoute = () => {
  const entries = new Map<string, string | undefined>();

  for (const file of Object.keys(pageModules)) {
    const route = routeForPage(file);
    if (route) entries.set(route, undefined);
  }

  for (const post of getAllPosts()) {
    entries.set(`/posts/${post.id}`, post.date || undefined);
  }

  for (const page of getIndustryPages()) entries.set(page.seo.url, undefined);
  for (const page of getCitySeoPages()) entries.set(page.seo.url, undefined);
  for (const page of getVerticalPages()) entries.set(page.urlPath, undefined);
  for (const page of getNicheCityPages()) entries.set(page.urlPath, undefined);
  const nicheHub = getNicheHub();
  if (nicheHub?.urlPath) entries.set(nicheHub.urlPath, undefined);
  for (const page of getBespokePages()) entries.set(page.pathname, undefined);
  for (const city of WEB_DESIGN_CITIES) entries.set(`/web-design/${city.slug}`, undefined);

  // Exclude noindex/error routes and every retired route, even if a legacy
  // adapter or future page module tries to reintroduce one.
  entries.delete("/404");
  entries.delete("/500");
  for (const route of RETIRED_ROUTE_PATHS) entries.delete(route);

  const routes = [...entries.entries()].sort(([a], [b]) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });

  const urls = routes
    .map(([route, lastmod]) => {
      const loc = route === "/" ? SITE : `${SITE}${route}`;
      return [
        "  <url>",
        `    <loc>${escapeXml(loc)}</loc>`,
        lastmod ? `    <lastmod>${escapeXml(lastmod.slice(0, 10))}</lastmod>` : "",
        "  </url>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};