// Astro-only registry for legacy routes and standalone pages that are no
// longer part of the rebuild.
//
// The legacy Next.js service records still describe some of these routes, so
// every Astro adapter that reads legacy data must filter or rewrite them here
// rather than editing the shared source-of-truth files under /data and /src.
//
// `disposition` is the public response for the retired URL:
//   - "redirect": a genuinely equivalent surviving page exists.
//   - "gone":     the page or offer was removed and no equivalent exists.
//
// `linkList` controls how the route is handled when it appears in a list of
// promotional links (related services, chips, "keep exploring" blocks):
//   - "drop"    remove the obsolete link.
//   - "rewrite" keep the link but send it to the surviving equivalent.
// Inline editorial links in body copy are always rewritten for redirects and
// de-linked (label preserved, href removed) for gone routes.

export const RETIRED_ROUTES = [
  {
    route: "/therapist-seo",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/usa",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/alberta",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/british-columbia",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/manitoba",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/new-brunswick",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/newfoundland-and-labrador",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/nova-scotia",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/ontario",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/prince-edward-island",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/quebec",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/saskatchewan",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/alberta/airdrie",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/alberta/calgary",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/alberta/edmonton",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/alberta/lethbridge",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/alberta/red-deer",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/british-columbia/abbotsford",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/british-columbia/burnaby",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/british-columbia/richmond",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/british-columbia/surrey",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/british-columbia/vancouver",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/manitoba/winnipeg",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/new-brunswick/fredericton",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/new-brunswick/moncton",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/new-brunswick/saint-john",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/newfoundland-and-labrador/st-johns",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/nova-scotia/cape-breton",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/nova-scotia/halifax",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/ontario/brampton",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/ontario/hamilton",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/ontario/mississauga",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/ontario/ottawa",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/ontario/toronto",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/prince-edward-island/charlottetown",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/quebec/gatineau",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/quebec/laval",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/quebec/longueuil",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/quebec/montreal",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/quebec/quebec-city",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/saskatchewan/regina",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/therapist-seo/saskatchewan/saskatoon",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The Canada/USA therapist SEO programme (/therapist-seo and its province and city pages) was removed.",
  },
  {
    route: "/seo/for-therapists-albany",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-buffalo",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-huntington",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-rochester",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-syracuse",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-usa",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-canada",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-ontario",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-quebec",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-british-columbia",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-alberta",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-saskatchewan",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-manitoba",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-nova-scotia",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-new-brunswick",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-newfoundland-labrador",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-toronto",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-ottawa",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-mississauga",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-brampton",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-hamilton",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-montreal",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-quebec-city",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-laval",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-longueuil",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-vancouver",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-surrey",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-gatineau",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-burnaby",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-richmond",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-abbotsford",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-calgary",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-edmonton",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-red-deer",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-lethbridge",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-airdrie",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-saskatoon",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-regina",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-winnipeg",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-halifax",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-cape-breton",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-moncton",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-saint-john",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-fredericton",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/seo/for-therapists-st-johns",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The US therapist city page was removed.",
  },
  {
    route: "/services",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason:
      "The standalone services hub was removed. SEO, AI search and web design are linked directly from the main navigation.",
  },
  {
    route: "/process",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The standalone process page was removed.",
  },
  {
    route: "/areas-we-serve",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason:
      "The standalone areas-we-serve page was removed. Local coverage is handled by the individual city pages.",
  },
  {
    route: "/web-design/ecommerce-web-design",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason:
      "The standalone eCommerce web design page was removed. Store builds are covered by the core web design service.",
  },
  {
    route: "/web-design/shopify-web-design",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason:
      "The standalone Shopify web design page was removed. Store builds are covered by the core web design service.",
  },
  {
    route: "/effective-web-design-steps",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The standalone effective web design steps guide was removed.",
  },
  {
    route: "/kd-florist",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The KD Flowers case study page was removed.",
  },
  {
    route: "/tree-reports",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The TreeReports case study page was removed.",
  },
  {
    route: "/web-design/website-hosting",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason:
      "Website hosting and maintenance was retired as a standalone service and has no equivalent page.",
  },
  {
    route: "/ecommerce-marketing",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason:
      "The standalone eCommerce marketing service line was retired and has no equivalent hub page.",
  },
  {
    route: "/ecommerce-marketing/ecommerce-optimization",
    disposition: "redirect",
    destination: "/web-design",
    replacementLabel: "Web Design & Development",
    linkList: "rewrite",
    reason:
      "Store and checkout optimization is now delivered within conversion-focused web design.",
  },
  {
    route: "/ecommerce-marketing/ecommerce-ppc",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "Paid eCommerce advertising is no longer offered.",
  },
  {
    route: "/ecommerce-marketing/ecommerce-seo",
    disposition: "redirect",
    destination: "/seo",
    linkList: "drop",
    reason:
      "eCommerce SEO is now delivered within the core search engine optimization service.",
  },
  {
    route: "/ecommerce-marketing/shopify-seo",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason:
      "Standalone Shopify SEO was retired. Shopify store work is covered by the core web design and SEO services.",
  },
  {
    route: "/digital-marketing",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason:
      "The standalone digital marketing service was retired. The agency now sells SEO, AI search and web design.",
  },
  {
    route: "/digital-marketing/conversion-rate-optimization",
    disposition: "redirect",
    destination: "/web-design",
    replacementLabel: "Web Design & Development",
    linkList: "rewrite",
    reason:
      "Conversion optimization is now delivered within conversion-focused web design.",
  },
  {
    route: "/reputation-management",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "Reputation management was retired as a standalone service.",
  },
  {
    route: "/reputation-management/online-reputation-repair",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "Online reputation repair was retired with the reputation service line.",
  },
  {
    route: "/seo/content-writing",
    disposition: "redirect",
    destination: "/seo",
    linkList: "drop",
    reason: "Content writing is delivered as part of the core SEO service.",
  },
  {
    route: "/seo/franchise-seo",
    disposition: "redirect",
    destination: "/seo",
    linkList: "drop",
    reason: "Franchise and multi-location SEO is delivered within the core SEO service.",
  },
  {
    route: "/seo/link-building",
    disposition: "redirect",
    destination: "/seo",
    linkList: "drop",
    reason: "Link earning is delivered as part of the core SEO service.",
  },
  {
    route: "/seo/local-seo",
    disposition: "redirect",
    destination: "/seo",
    replacementLabel: "SEO services",
    linkList: "rewrite",
    reason:
      "Local SEO is delivered within the core SEO service and the surviving city and industry pages.",
  },
  {
    route: "/seo/technical-seo",
    disposition: "redirect",
    destination: "/seo",
    linkList: "drop",
    reason: "Technical SEO is delivered as part of the core SEO service.",
  },
  {
    route: "/seo/white-label",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason: "The white-label fulfilment programme was retired.",
  },
  {
    route: "/website-conversion-optimization",
    disposition: "redirect",
    destination: "/web-design",
    replacementLabel: "Web Design & Development",
    linkList: "rewrite",
    reason:
      "The standalone conversion optimization page was removed. Conversion work is delivered within conversion-focused web design.",
  },
  {
    route: "/wordpress-developer-niagara",
    disposition: "gone",
    destination: null,
    linkList: "drop",
    reason:
      "The WordPress Developer Niagara page was removed and no equivalent page exists. WordPress projects are quoted within web design engagements.",
  },
];

export const RETIRED_ROUTE_PATHS = RETIRED_ROUTES.map((entry) => entry.route);

// A few legacy pages still pitch a retired service in their body copy. These
// exact-string replacements live here, rather than in the legacy Next.js
// sources, so the Astro build stops advertising discontinued offers without
// changing the old implementation. Exact matches keep unrelated editorial
// mentions (for example blog posts about digital marketing) untouched.
const RETIRED_COPY_REPLACEMENTS = new Map([
  [
    "Hosting and ongoing maintenance",
    "Support after launch",
  ],
  [
    "We offer website hosting and ongoing maintenance so your site stays current and looked after after launch. During your consultation we can talk through the hosting options we typically work with.",
    "We do not sell hosting as a separate service. We can recommend hosting that suits your site and walk you through keeping it current after launch, and WordPress projects include a handover so you can update pages, posts and photos yourself.",
  ],
  [
    "We can, and usually should. A store designed around how people shop pairs naturally with SEO for collections and product pages. Together they make sure the happiest customers are the ones who can find you.",
    "Yes, through our core SEO service. A store designed around how people shop pairs naturally with SEO for collections and product pages, and we handle that work as part of ongoing SEO rather than as a separate Shopify-only package.",
  ],
]);

/** Replaces exact legacy sentences that advertise a retired service. */
export function rewriteRetiredServiceCopy(text) {
  if (typeof text !== "string") return text;
  return RETIRED_COPY_REPLACEMENTS.get(text) ?? text;
}

const RETIRED_BY_PATH = new Map(
  RETIRED_ROUTES.map((entry) => [entry.route, entry])
);

// Internal legacy aliases that already redirect. Linking to the final URL
// avoids an unnecessary hop without changing any user-facing content.
const LEGACY_LINK_ALIASES = new Map([
  ["/work", "/results"],
  ["/niagara-seo-company", "/"],
]);

/** Normalises an internal pathname, stripping origin, query, hash and slash. */
export function normalizeInternalPath(href) {
  if (typeof href !== "string") return null;
  const value = href.trim();
  if (!value || value.startsWith("#")) return null;

  if (/^https?:\/\//i.test(value)) {
    try {
      const url = new URL(value);
      if (url.hostname !== "infused.agency" && url.hostname !== "www.infused.agency") {
        return null;
      }
      return normalizePathname(url.pathname);
    } catch {
      return null;
    }
  }

  if (value.startsWith("//")) return null;
  if (!value.startsWith("/")) return null;
  return normalizePathname(value.split("#")[0].split("?")[0]);
}

function normalizePathname(pathname) {
  const clean = pathname.replace(/\/+$/, "");
  return clean || "/";
}

/** Returns the registry entry for an internal path, or null. */
export function getRetiredRoute(href) {
  const pathname = normalizeInternalPath(href);
  return pathname ? RETIRED_BY_PATH.get(pathname) ?? null : null;
}

export function isRetiredRoute(href) {
  return Boolean(getRetiredRoute(href));
}

/**
 * Returns the surviving destination for a redirecting retired route, or null
 * when the route is gone or is not retired at all.
 */
export function retiredRedirectTarget(href) {
  const entry = getRetiredRoute(href);
  return entry?.disposition === "redirect" ? entry.destination : null;
}

/**
 * Rewrites local Markdown links in legacy copy. Redirecting routes keep the
 * link and point at the equivalent page; gone routes keep their label as plain
 * text so legitimate editorial mentions survive without a dead link.
 */
export function rewriteMarkdownLinks(text) {
  if (typeof text !== "string" || !text.includes("](")) return text;
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, label, href) => {
    const pathname = normalizeInternalPath(href);
    const alias = pathname ? LEGACY_LINK_ALIASES.get(pathname) : null;
    if (alias) return `[${label}](${alias})`;

    const entry = getRetiredRoute(href);
    if (!entry) return match;
    return entry.disposition === "redirect" ? `[${label}](${entry.destination})` : label;
  });
}

/**
 * Applies the list policy to a link-like object. Returns null when the link
 * should be removed from a promotional link list.
 */
export function rewritePromotionalLink(link) {
  if (!link || typeof link.href !== "string") return link;

  const pathname = normalizeInternalPath(link.href);
  const alias = pathname ? LEGACY_LINK_ALIASES.get(pathname) : null;
  if (alias) return { ...link, href: alias };

  const entry = getRetiredRoute(link.href);
  if (!entry) return link;
  if (entry.disposition === "gone" || entry.linkList === "drop") return null;
  return {
    ...link,
    href: entry.destination,
    ...(entry.replacementLabel ? { label: entry.replacementLabel } : {}),
  };
}

/** Rewrites and de-duplicates a list of promotional links. */
export function rewriteLinkList(links) {
  const output = [];
  const seen = new Set();
  for (const link of links ?? []) {
    const next = rewritePromotionalLink(link);
    if (!next) continue;
    const key = `${next.href}\u0000${next.label ?? ""}`;
    if (seen.has(key)) continue;
    seen.add(key);
    output.push(next);
  }
  return output;
}

/**
 * Recursively rewrites links in extracted legacy page data. Objects whose
 * `href` points at a gone route are removed from their containing array.
 */
export function rewritePageLinks(value) {
  if (typeof value === "string") {
    return rewriteRetiredServiceCopy(rewriteMarkdownLinks(value));
  }
  if (Array.isArray(value)) {
    return value
      .map((item) => rewritePageLinks(item))
      .filter((item) => item !== null && item !== undefined);
  }
  if (!value || typeof value !== "object") return value;

  if (typeof value.href === "string") {
    const next = rewritePromotionalLink(value);
    if (!next) return null;
    return Object.fromEntries(
      Object.entries(next).map(([key, item]) => [
        key,
        key === "href" ? item : rewritePageLinks(item),
      ])
    );
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, item]) => [key, rewritePageLinks(item)])
  );
}
