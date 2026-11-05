// Titles and meta descriptions for the country and region hubs.
//
// City pages get theirs from the templates in locations.mjs; hubs are generated
// here so every hub title stays within 60 characters and every description
// within 140-160 characters (see verify-locations / audit-location-pages).

const pages = (count) => (count === 1 ? "page" : "pages");
const regionsLabel = (count) => `${count} ${count === 1 ? "region" : "regions"}`;
const countryLabel = (name) => (name === "United States" ? "the United States" : name);

export function regionSeo(service, regionName, cityCount) {
  if (service === "ai-search-optimization") {
    return {
      title: `${regionName} AI Search Optimization | Infused Agency`,
      description:
        `AI search optimization for ${regionName} businesses: ${cityCount} live city ${pages(cityCount)}, ` +
        `GEO, AI SEO and Google visibility work, served remotely from the Niagara region.`,
    };
  }

  return {
    title: `${regionName} SEO for Therapists | Infused Agency`,
    description:
      `SEO for therapists in ${regionName}: ${cityCount} live city ${pages(cityCount)} covering local SEO, ` +
      `Google Business Profile and AI search visibility, served remotely from Niagara.`,
  };
}

export function countrySeo(service, countryName, cityCount, regionCount) {
  const label = countryLabel(countryName);

  if (service === "ai-search-optimization") {
    return {
      title: `AI Search Optimization in ${label} | Infused`,
      description:
        `AI search optimization across ${label}: ${cityCount} live city pages in ${regionsLabel(regionCount)}, ` +
        `covering GEO and AI SEO, served remotely from the Niagara region in Ontario.`,
    };
  }

  return {
    title: `SEO for Therapists in ${label} | Infused Agency`,
    description:
      `SEO for therapists across ${label}: ${cityCount} live city pages in ${regionsLabel(regionCount)}, ` +
      `with local SEO and AI visibility work, served remotely from the Niagara region.`,
  };
}
