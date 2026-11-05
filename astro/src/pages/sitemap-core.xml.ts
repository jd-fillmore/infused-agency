import type { APIRoute } from "astro";
import { SITE } from "../lib/site";
import { getAllPosts } from "../lib/posts";
import { RETIRED_ROUTE_PATHS } from "../lib/retired-routes.mjs";
import {
  getIndustryPages,
  getCitySeoPages,
  getBespokePages,
  WEB_DESIGN_CITIES,
} from "../lib/legacy-pages.mjs";
import { siteMapEntriesForService } from "../lib/locations.mjs";
import { escapeXml, urlElement } from "../lib/xml.mjs";

// Core sitemap: every page that is not part of the hierarchical location
// system. Location city, region and country pages are listed in the service
// sitemaps, and the two service roots move with them.
const META_UPDATED = "2026-11-02";
const META_UPDATED_ROUTES = new Set([
  "/seo/for-accountants-niagara",
  "/seo/for-appliance-repair-niagara",
  "/seo/for-architects-niagara",
  "/seo/for-asphalt-paving-niagara",
  "/seo/for-auto-body-shops-niagara",
  "/seo/for-basement-finishing-niagara",
  "/seo/for-cabinet-makers-niagara",
  "/seo/for-chiropractors-niagara",
  "/seo/for-concrete-contractors-niagara",
  "/seo/for-countertop-fabricators-niagara",
  "/seo/for-deck-builders-niagara",
  "/seo/for-dentists-niagara",
  "/seo/for-design-build-firms-niagara",
  "/seo/for-eavestrough-contractors-niagara",
  "/seo/for-electricians-niagara",
  "/seo/for-fence-installers-niagara",
  "/seo/for-financial-advisors-niagara",
  "/seo/for-fireplace-and-chimney-services-niagara",
  "/seo/for-flooring-installers-niagara",
  "/seo/for-foundation-waterproofing-niagara",
  "/seo/for-garage-door-companies-niagara",
  "/seo/for-general-contractors-niagara",
  "/seo/for-home-additions-niagara",
  "/seo/for-home-automation-installers-niagara",
  "/seo/for-home-builders-niagara",
  "/seo/for-hvac-contractors-niagara",
  "/seo/for-insulation-niagara",
  "/seo/for-insurance-brokers-niagara",
  "/seo/for-interior-designers-niagara",
  "/seo/for-interlock-installers-niagara",
  "/seo/for-kitchen-and-bathroom-renovators-niagara",
  "/seo/for-landscapers-niagara",
  "/seo/for-law-firms-niagara",
  "/seo/for-masonry-contractors-niagara",
  "/seo/for-med-spas-niagara",
  "/seo/for-mortgage-brokers-niagara",
  "/seo/for-optometrists-niagara",
  "/seo/for-painters-niagara",
  "/seo/for-pest-control-niagara",
  "/seo/for-physiotherapists-niagara",
  "/seo/for-plumbers-niagara",
  "/seo/for-pool-and-hot-tub-service-niagara",
  "/seo/for-pool-builders-niagara",
  "/seo/for-restoration-companies-niagara",
  "/seo/for-roofers-niagara",
  "/seo/for-septic-services-niagara",
  "/seo/for-siding-contractors-niagara",
  "/seo/for-siding-contractors-niagara",
  "/seo/for-solar-companies-niagara",
  "/seo/for-tile-installers-niagara",
  "/seo/for-towing-companies-niagara",
  "/seo/for-tree-services-niagara",
  "/seo/for-veterinarians-niagara",
  "/seo/for-window-and-door-installers-niagara",
  "/seo/for-wineries-niagara",
  "/ai-search/locations",
]);

const pageModules = import.meta.glob("./**/*.astro");

function routeForPage(file: string): string | null {
  const relative = file.replace(/^\.\//, "").replace(/\.astro$/, "");
  if (relative.includes("[")) return null;
  if (/(^|\/)(404|500)$/.test(relative)) return null;
  if (relative === "index") return "/";
  if (relative.endsWith("/index")) return `/${relative.slice(0, -"/index".length)}`;
  return `/${relative}`;
}

export const GET: APIRoute = () => {
  const entries = new Map<string, string | undefined>();

  for (const file of Object.keys(pageModules)) {
    const route = routeForPage(file);
    if (route) entries.set(route, undefined);
  }

  for (const post of getAllPosts()) entries.set(`/posts/${post.id}`, post.date || undefined);
  for (const page of getIndustryPages()) entries.set(page.seo.url, undefined);
  for (const page of getCitySeoPages()) entries.set(page.seo.url, undefined);
  for (const page of getBespokePages()) entries.set(page.pathname, undefined);
  for (const city of WEB_DESIGN_CITIES) entries.set(`/web-design/${city.slug}`, undefined);

  // Location pages belong to the service sitemaps, never to core.
  for (const service of ["seo-for-therapists", "ai-search-optimization"]) {
    for (const entry of siteMapEntriesForService(service)) entries.delete(entry.pathname);
  }

  for (const route of META_UPDATED_ROUTES) {
    if (entries.has(route)) entries.set(route, META_UPDATED);
  }

  entries.delete("/404");
  entries.delete("/500");
  for (const route of RETIRED_ROUTE_PATHS) entries.delete(route);

  const routes = [...entries.entries()].sort(([a], [b]) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });

  const urls = routes
    .map(([route, lastmod]) => urlElement(route === "/" ? SITE : `${SITE}${route}`, lastmod))
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
