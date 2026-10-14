import { NIAGARA_INDUSTRIES } from "../lib/niagaraIndustries";

export default function Sitemap({ services: publishedServices = [] }) {
  const industries = NIAGARA_INDUSTRIES.filter(
    (item) => item.slug !== "therapists"
  ).map((item) => ({
    name: `SEO for ${item.displayName} in Niagara`,
    url: item.href,
  }));

  const therapistSeo = [
    { name: "SEO for Therapists in Canada", url: "/therapist-seo" },
    { name: "SEO for Therapists in the USA", url: "/therapist-seo/usa" },
    { name: "Therapist SEO in Ontario", url: "/therapist-seo/ontario" },
    { name: "Therapist SEO in Quebec", url: "/therapist-seo/quebec" },
    {
      name: "Therapist SEO in British Columbia",
      url: "/therapist-seo/british-columbia",
    },
    { name: "Therapist SEO in Alberta", url: "/therapist-seo/alberta" },
    {
      name: "Therapist SEO in Saskatchewan",
      url: "/therapist-seo/saskatchewan",
    },
    { name: "Therapist SEO in Manitoba", url: "/therapist-seo/manitoba" },
    { name: "Therapist SEO in Nova Scotia", url: "/therapist-seo/nova-scotia" },
    {
      name: "Therapist SEO in New Brunswick",
      url: "/therapist-seo/new-brunswick",
    },
    {
      name: "Therapist SEO in Newfoundland and Labrador",
      url: "/therapist-seo/newfoundland-and-labrador",
    },
    {
      name: "Therapist SEO in Prince Edward Island",
      url: "/therapist-seo/prince-edward-island",
    },
  ];

  return (
    <div className="sitemap-container">
      <h1>Site Map</h1>

      {publishedServices.length ? (
        <section>
          <h2>Solutions</h2>
          <ul>
            {publishedServices.map((s, index) => (
              <li key={index}>
                <a href={s.url}>{s.name}</a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section>
        <h2>Industries in Niagara</h2>
        <ul>
          {industries.map((location, index) => (
            <li key={index}>
              <a href={location.url}>{location.name}</a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Therapist SEO</h2>
        <ul>
          {therapistSeo.map((location, index) => (
            <li key={index}>
              <a href={location.url}>{location.name}</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const services = require("../lib/services");
  const { published } = services.computePublishedServices();
  return {
    props: {
      services: published
        .map((r) => ({ name: r.service.name, url: r.service.url }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    },
  };
}
