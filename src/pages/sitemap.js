export default function Sitemap() {
  const therapyLocations = [
    {
      name: "SEO for Therapists Abbotsford",
      url: "/seo/for-therapists-abbotsford",
    },
    { name: "SEO for Therapists Airdrie", url: "/seo/for-therapists-airdrie" },
    { name: "SEO for Therapists Alberta", url: "/seo/for-therapists-alberta" },
    {
      name: "SEO for Therapists Brampton",
      url: "/seo/for-therapists-brampton",
    },
    {
      name: "SEO for Therapists British Columbia",
      url: "/seo/for-therapists-british-columbia",
    },
    { name: "SEO for Therapists Burnaby", url: "/seo/for-therapists-burnaby" },
    { name: "SEO for Therapists Calgary", url: "/seo/for-therapists-calgary" },
    {
      name: "SEO for Therapists Edmonton",
      url: "/seo/for-therapists-edmonton",
    },
    {
      name: "SEO for Therapists Gatineau",
      url: "/seo/for-therapists-gatineau",
    },
    {
      name: "SEO for Therapists Hamilton",
      url: "/seo/for-therapists-hamilton",
    },
    { name: "SEO for Therapists Laval", url: "/seo/for-therapists-laval" },
    {
      name: "SEO for Therapists Lethbridge",
      url: "/seo/for-therapists-lethbridge",
    },
    {
      name: "SEO for Therapists Longueuil",
      url: "/seo/for-therapists-longueuil",
    },
    {
      name: "SEO for Therapists Mississauga",
      url: "/seo/for-therapists-mississauga",
    },
    {
      name: "SEO for Therapists Montreal",
      url: "/seo/for-therapists-montreal",
    },
    { name: "SEO for Therapists Ontario", url: "/seo/for-therapists-ontario" },
    { name: "SEO for Therapists Ottawa", url: "/seo/for-therapists-ottawa" },
    { name: "SEO for Therapists Quebec", url: "/seo/for-therapists-quebec" },
    {
      name: "SEO for Therapists Quebec City",
      url: "/seo/for-therapists-quebec-city",
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
    { name: "SEO for Therapists Toronto", url: "/seo/for-therapists-toronto" },
    {
      name: "SEO for Therapists Vancouver",
      url: "/seo/for-therapists-vancouver",
    },
    {
      name: "SEO for Therapists Manitoba",
      url: "/seo/for-therapists-manitoba",
    },
    {
      name: "SEO for Therapists Winnipeg",
      url: "/seo/for-therapists-winnipeg",
    },
    {
      name: "SEO for Therapists Saskatchewan",
      url: "/seo/for-therapists-saskatchewan",
    },
    {
      name: "SEO for Therapists Saskatoon",
      url: "/seo/for-therapists-saskatoon",
    },
    {
      name: "SEO for Therapists Regina",
      url: "/seo/for-therapists-regina",
    },
    {
      name: "SEO for Therapists Nova Scotia",
      url: "/seo/for-therapists-nova-scotia",
    },
    {
      name: "SEO for Therapists Halifax",
      url: "/seo/for-therapists-halifax",
    },
    {
      name: "SEO for Therapists Cape Breton",
      url: "/seo/for-therapists-cape-breton",
    },
    {
      name: "SEO for Therapists Moncton",
      url: "/seo/for-therapists-moncton",
    },
    {
      name: "SEO for Therapists Saint John",
      url: "/seo/for-therapists-saint-john",
    },
    {
      name: "SEO for Therapists Fredericton",
      url: "/seo/for-therapists-fredericton",
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
