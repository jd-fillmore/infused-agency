// Pure JSON-LD builders for vertical SEO pages. No fs, safe to import anywhere.
const SITE = "https://infused.agency";
const ORG_ID = `${SITE}/#organization`;

function breadcrumbList(breadcrumbs) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.href.startsWith("http") ? c.href : `${SITE}${c.href}`,
    })),
  };
}

function areaServedFor(page) {
  if (page.kind === "pillar") return { "@type": "Country", name: "Canada" };
  if (page.kind === "country") return { "@type": "Country", name: "United States" };
  if (page.kind === "province")
    return { "@type": "AdministrativeArea", name: page.province.name };
  return { "@type": "City", name: page.city.name };
}

function serviceSchema(page) {
  return {
    "@type": "Service",
    name: `${page.headingSingular} SEO`,
    serviceType: "Search engine optimization",
    provider: { "@id": ORG_ID },
    areaServed: areaServedFor(page),
    url: page.canonical,
  };
}

function faqSchema(faqs) {
  if (!faqs || !faqs.length) return null;
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function buildGraph(page) {
  const graph = [breadcrumbList(page.breadcrumbs), serviceSchema(page)];
  const faq = faqSchema(page.faqs);
  if (faq) graph.push(faq);
  return { "@context": "https://schema.org", "@graph": graph };
}

module.exports = { breadcrumbList, serviceSchema, faqSchema, buildGraph, SITE, ORG_ID };
