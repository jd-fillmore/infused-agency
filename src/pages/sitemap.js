export default function Sitemap() {
  const therapyLocations = [
    { name: "SEO for Therapists Ontario", url: "/seo/for-therapists-ontario" },
    { name: "SEO for Therapists Alberta", url: "/seo/for-therapists-alberta" },
    {
      name: "SEO for Therapists British Columbia",
      url: "/seo/for-therapists-british-columbia",
    },
  ];

  return (
    <div className="sitemap-container">
      <h1>Site Map</h1>

      <section>
        <h2>SEO for Therapists</h2>
        <ul>
          {therapyLocations.map((location, index) => (
            <li key={index}>
              <a href={location.url}>{location.name}</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
