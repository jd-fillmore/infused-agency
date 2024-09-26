/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
      },
    };
    // Add support for video files
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos/",
          outputPath: "static/videos/",
          name: "[name].[hash].[ext]",
        },
      },
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: "/beamsville-seo-company",
        destination: "/seo/beamsville",
        permanent: true,
      },
      {
        source: "/crystal-beach-seo-company",
        destination: "/seo/crystal-beach",
        permanent: true,
      },
      {
        source: "/fonthill-seo-company",
        destination: "/seo/fonthill",
        permanent: true,
      },
      {
        source: "/fort-erie-seo-company",
        destination: "/seo/fort-erie",
        permanent: true,
      },
      {
        source: "/grimsby-seo-company",
        destination: "/seo/grimsby",
        permanent: true,
      },
      {
        source: "/niagara-on-the-lake-seo",
        destination: "/seo/niagara",
        permanent: true,
      },
      {
        source: "/port-colborne-seo",
        destination: "/seo/port-colborne",
        permanent: true,
      },
      {
        source: "/thorold-seo-company",
        destination: "/seo/thorold",
        permanent: true,
      },
      {
        source: "/wainfleet-seo",
        destination: "/seo/wainfleet",
        permanent: true,
      },
      {
        source: "/welland-seo-company",
        destination: "/seo/welland",
        permanent: true,
      },
      {
        source: "/posts/best-practices-cta-buttons",
        destination: "/posts/3-best-practices-for-high-converting-cta-buttons",
        permanent: true,
      },
      {
        source: "/posts/3-things-your-website-needs-to-bring-in-more-revenue",
        destination: "/posts/3-things-website-needs-to-bring-in-revenue/",
        permanent: true,
      },
      {
        source: "/posts/10-best-seo-strategies-2021/",
        destination: "/posts/10-of-the-best-seo-strategies-for-2021",
        permanent: true,
      },
      {
        source: "/posts/10-tips-how-to-create-effective-landing-page/",
        destination:
          "/posts/10-tips-on-how-to-create-an-effective-landing-page",
        permanent: true,
      },
      {
        source: "/posts/best-strategies-rank-higher-google-maps-pack/",
        destination:
          "/posts/best-strategies-techniques-to-rank-higher-in-google-maps-pack",
        permanent: true,
      },
      {
        source: "/posts/web-design-for-small-businesses/",
        destination:
          "/posts/crafting-a-powerful-online-presence-web-design-tips-for-small-businesses",
        permanent: true,
      },
      {
        source: "/posts/visual-heirarchy-web-design/",
        destination:
          "/posts/creating-visual-hierarchy-in-web-design-guiding-users-with-design-principles",
        permanent: true,
      },
      {
        source: "/posts/web-design-trends",
        destination:
          "/posts/exploring-the-top-web-design-trends-of-2023-a-visual-revolution",
        permanent: true,
      },
      {
        source: "/posts/how-to-make-website-AODA-compliant/",
        destination:
          "/posts/how-do-i-make-my-website-aoda-wcag-accessibility-compliant",
        permanent: true,
      },
      {
        source: "/posts/boost-business-sales-web-design/",
        destination:
          "/posts/how-do-we-boost-our-business-sales-with-web-design",
        permanent: true,
      },
      {
        source: "/posts/how-to-create-effective-website-layout/",
        destination:
          "/posts/how-to-create-an-effective-website-layout-for-better-user-experience",
        permanent: true,
      },
      {
        source: "/posts/make-website-load-faster-pictures/",
        destination: "/posts/how-to-make-a-website-load-faster-with-pictures",
        permanent: true,
      },
      {
        source: "/posts/mastering-local-seo/",
        destination:
          "/posts/mastering-local-seo-7-strategies-to-boost-your-local-business",
        permanent: true,
      },
      {
        source: "/posts/web-performance-optimization/",
        destination:
          "/posts/maximizing-user-experience-the-art-of-web-performance-optimization",
        permanent: true,
      },
      {
        source: "/posts/new-website-tree-reports/",
        destination: "/posts/new-website-launched-treereports",
        permanent: true,
      },
      {
        source: "/posts/on-page-seo-best-practices/",
        destination:
          "/posts/on-page-seo-best-practices-optimizing-your-website-for-search-engines",
        permanent: true,
      },
      {
        source: "/posts/web-design-process/",
        destination: "/posts/our-8-step-web-design-process-for-2019",
        permanent: true,
      },
      {
        source: "/posts/seo-vs-ppc",
        destination: "/posts/seo-vs-ppc-which-should-you-use",
        permanent: true,
      },
      {
        source: "/posts/website-sales-speed-engagement",
        destination:
          "/posts/the-crucial-link-between-website-speed-sales-and-customer-engagement",
        permanent: true,
      },
      {
        source: "/posts/white-space-web-design",
        destination: "/posts/the-importance-of-white-space-in-web-design",
        permanent: true,
      },
      {
        source: "/posts/power-of-backlinks/",
        destination:
          "/posts/the-power-of-backlinks-building-a-strong-link-profile",
        permanent: true,
      },
      {
        source: "/posts/power-of-video-seo/",
        destination:
          "/posts/unlocking-the-power-of-video-seo-boost-your-visibility-and-engagement",
        permanent: true,
      },
      {
        source: "/posts/seo-in-web-design/",
        destination: "/posts/unveiling-the-importance-of-seo-in-web-design",
        permanent: true,
      },
      {
        source: "/posts/seo-steps-new-website/",
        destination:
          "/posts/what-are-the-steps-involved-for-doing-seo-for-a-new-website",
        permanent: true,
      },
      {
        source: "/posts/drive-visitors-to-new-website/",
        destination:
          "/posts/what-is-the-best-method-to-drive-visitors-to-a-new-website",
        permanent: true,
      },
      {
        source: "/Dundas-web-design",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ecommerce-web-design-St. Catharines",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ecommerce-web-design-st-catharines",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wordpress-developer-St. Catharines",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wordpress-developer-st-catharines",
        destination: "/",
        permanent: true,
      },
      {
        source:
          "/posts/how-can-i-generate-website-traffic-with-0-marketing-budget",
        destination: "/",
        permanent: true,
      },
      {
        source:
          "/posts/how-can-i-generate-website-traffic-with-0-marketing-budget",
        destination: "/",
        permanent: true,
      },
      {
        source: "/posts/how-to-build-a-website-with-good-seo-in-mind/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/posts/best-seo-keywords-for-interior-designers/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/5-effective-seo-techniques-for-landscaping-companies/",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
