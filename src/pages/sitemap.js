export default function Sitemap() {
  const therapyLocations = [
    { name: "SEO for Therapists Airdrie", url: "/seo/for-therapists-airdrie" },
    { name: "SEO for Therapists Alberta", url: "/seo/for-therapists-alberta" },
    {
      name: "SEO for Therapists Abbotsford",
      url: "/seo/for-therapists-abbotsford",
    },
    { name: "SEO for Therapists Burnaby", url: "/seo/for-therapists-burnaby" },
    { name: "SEO for Therapists Calgary", url: "/seo/for-therapists-calgary" },
    {
      name: "SEO for Therapists Edmonton",
      url: "/seo/for-therapists-edmonton",
    },
    {
      name: "SEO for Therapists Lethbridge",
      url: "/seo/for-therapists-lethbridge",
    },
    {
      name: "SEO for Therapists Red Deer",
      url: "/seo/for-therapists-red-deer",
    },
    {
      name: "SEO for Therapists Richmond",
      url: "/seo/for-therapists-richmond",
    },
    { name: "SEO for Therapists Surrey", url: "/seo/for-therapists-surrey" },
    {
      name: "SEO for Therapists Vancouver",
      url: "/seo/for-therapists-vancouver",
    },
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
