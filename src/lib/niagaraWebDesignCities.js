// Single source of truth for the /web-design/<city> pages.
// The pillar, St. Catharines page, each city page and the cross-link lists
// all read from this list.

export const NIAGARA_WEB_DESIGN_CITIES = [
  {
    name: "Niagara Falls",
    titleName: "Niagara Falls, Ontario",
    slug: "niagara-falls",
    place: "Niagara Falls, Ontario, Canada",
    zoom: 13,
    seoUrl: null,
    neighbours: ["niagara-on-the-lake", "thorold"],
  },
  {
    name: "Niagara-on-the-Lake",
    titleName: "Niagara-on-the-Lake",
    slug: "niagara-on-the-lake",
    place: "Niagara-on-the-Lake, Ontario, Canada",
    zoom: 13,
    seoUrl: "/seo/niagara-on-the-lake",
    neighbours: ["niagara-falls", "beamsville"],
  },
  {
    name: "Welland",
    titleName: "Welland",
    slug: "welland",
    place: "Welland, Ontario, Canada",
    zoom: 13,
    seoUrl: "/seo/welland",
    neighbours: ["thorold", "fonthill"],
  },
  {
    name: "Fort Erie",
    titleName: "Fort Erie",
    slug: "fort-erie",
    place: "Fort Erie, Ontario, Canada",
    zoom: 13,
    seoUrl: "/seo/fort-erie",
    neighbours: ["crystal-beach"],
  },
  {
    name: "Beamsville",
    titleName: "Beamsville",
    slug: "beamsville",
    place: "Beamsville, Ontario, Canada",
    zoom: 13,
    seoUrl: "/seo/beamsville",
    neighbours: ["grimsby", "niagara-falls"],
  },
  {
    name: "Grimsby",
    titleName: "Grimsby, Ontario",
    slug: "grimsby",
    place: "Grimsby, Ontario, Canada",
    zoom: 13,
    seoUrl: "/seo/grimsby",
    neighbours: ["beamsville"],
  },
  {
    name: "Thorold",
    titleName: "Thorold",
    slug: "thorold",
    place: "Thorold, Ontario, Canada",
    zoom: 13,
    seoUrl: "/seo/thorold",
    neighbours: ["st-catharines", "welland"],
  },
  {
    name: "Port Colborne",
    titleName: "Port Colborne",
    slug: "port-colborne",
    place: "Port Colborne, Ontario, Canada",
    zoom: 13,
    seoUrl: "/seo/port-colborne",
    neighbours: ["welland"],
  },
  {
    name: "Fonthill",
    titleName: "Fonthill",
    slug: "fonthill",
    place: "Fonthill, Ontario, Canada",
    zoom: 13,
    seoUrl: "/seo/fonthill",
    neighbours: ["welland", "thorold"],
  },
  {
    name: "Crystal Beach",
    titleName: "Crystal Beach",
    slug: "crystal-beach",
    place: "Crystal Beach, Ontario, Canada",
    zoom: 13,
    seoUrl: "/seo/crystal-beach",
    neighbours: ["fort-erie"],
  },
];

export function getCity(slug) {
  return NIAGARA_WEB_DESIGN_CITIES.find((c) => c.slug === slug);
}

export function cityHref(slug) {
  return `/web-design/${slug}`;
}

// Cross-links: the pillar, St. Catharines and every city page, with
// descriptive anchors. Used by the city pages, the pillar and the
// St. Catharines page.
export const WEB_DESIGN_CROSS_LINKS = [
  { label: "St. Catharines web design", href: "/web-design/st-catharines" },
  ...NIAGARA_WEB_DESIGN_CITIES.map((c) => ({
    label: `Web design in ${c.name}`,
    href: `/web-design/${c.slug}`,
  })),
];
