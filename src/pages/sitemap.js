export default function Sitemap() {
  const therapyLocations = [
    {
      name: "SEO for Solar Companies Arizona",
      url: "/seo/for-solar-companies-arizona",
    },
    {
      name: "SEO for Solar Companies Phoenix",
      url: "/seo/for-solar-companies-phoenix",
    },
    {
      name: "SEO for Solar Companies Tucson",
      url: "/seo/for-solar-companies-tucson",
    },
    {
      name: "SEO for Solar Companies Mesa",
      url: "/seo/for-solar-companies-mesa",
    },
    {
      name: "SEO for Solar Companies Gilbert",
      url: "/seo/for-solar-companies-gilbert",
    },
    {
      name: "SEO for Solar Companies Chandler",
      url: "/seo/for-solar-companies-chandler",
    },
    {
      name: "SEO for Solar Companies Glendale",
      url: "/seo/for-solar-companies-glendale",
    },
    {
      name: "SEO for Solar Companies Scottsdale",
      url: "/seo/for-solar-companies-scottsdale",
    },
  ];

  return (
    <div className="sitemap-container">
      <h1>Site Map</h1>

      <section>
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
