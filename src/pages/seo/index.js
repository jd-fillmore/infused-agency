import React from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../../../components/Nav/nav";
import PageHero from "../../../components/ui/PageHero";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/ui/Icon";
import CTA from "../../../components/CTA/cta";
import Footer from "../../../components/Footer/footer";
import PageJsonLd from "../../../components/seo/PageJsonLd";
import { webPageGraph } from "../../lib/verticalSeoSchema";

const PROSE = "max-w-3xl text-base leading-relaxed text-muted";
const LINK = "text-accent hover:text-accent-hover";

const APPROACH = [
  {
    icon: "search",
    title: "Research",
    body: "We start with comprehensive research to identify your industry trends, target audience, and effective keywords. This data-driven approach ensures we tailor our SEO strategies to meet your business goals.",
  },
  {
    icon: "code",
    title: "Build",
    body: "In the build phase, we optimize your website’s structure and content for better visibility. Our focus is on user-friendly design, mobile optimization, and engaging, keyword-rich content that attracts and converts visitors.",
  },
  {
    icon: "bolt",
    title: "Grow",
    body: "SEO is an ongoing process. We monitor your site’s performance and make adjustments while implementing off-page strategies like link building. This ensures sustained traffic growth and long-term success for your business.",
  },
];

const SERVICES = [
  {
    title: "Keyword Research",
    body: "Keyword research identifies the most effective words and phrases your potential customers use to find your services. By targeting these keywords, we ensure your website appears in relevant searches, increasing traffic and visibility. This helps attract more customers, ultimately growing your business.",
  },
  {
    title: "Link Building",
    body: "Link building involves acquiring high-quality backlinks from other websites to yours. These links enhance your website’s authority and improve its search engine rankings. Increased visibility leads to more traffic and potential customers, helping your business grow and establish a stronger online presence.",
  },
  {
    title: "Content Writing",
    body: "Content writing focuses on creating engaging, relevant, and keyword-rich content for your website. Well-crafted content attracts and retains visitors, informs and educates your audience, and improves search engine rankings. This drives more traffic, generates leads, and boosts sales, fostering business growth.",
  },
  {
    title: "On-Page SEO",
    body: "On-page SEO optimizes individual web pages to rank higher in search engines. This includes improving meta tags, headers, images, and internal links. Enhanced on-page SEO increases your site’s visibility, attracts more traffic, and converts visitors into customers, driving business growth.",
  },
  {
    title: "Local SEO",
    body: "Local SEO targets customers in your specific area by optimizing your online presence for local searches. This includes managing your Google My Business listing and acquiring local citations. Effective local SEO ensures your business appears in local searches, attracting nearby customers and increasing sales.",
  },
  {
    title: "Technical SEO",
    body: "Technical SEO improves the backend of your website to enhance its performance and search engine rankings. This includes optimizing site speed, mobile-friendliness, and security. A well-optimized site provides a better user experience, increases visibility, and attracts more visitors, driving business growth.",
  },
];

const CITIES = [
  { href: "/seo/beamsville", label: "Beamsville, ON" },
  { href: "/seo/crystal-beach", label: "Crystal Beach, ON" },
  { href: "/seo/fonthill", label: "Fonthill, ON" },
  { href: "/seo/fort-erie", label: "Fort Erie, ON" },
  { href: "/seo/grimsby", label: "Grimsby, ON" },
  { href: "/seo/niagara-on-the-lake", label: "Niagara-on-the-Lake, ON" },
  { href: "/seo/port-colborne", label: "Port Colborne, ON" },
  { href: "/seo/thorold", label: "Thorold, ON" },
  { href: "/seo/welland", label: "Welland, ON" },
];

const SEO = ({ childServices = [] }) => {
  return (
    <>
      <Head>
        <title>SEO Search Engine Optimization | Infused Agency</title>
        <meta
          name="description"
          content="Looking for SEO services? Check out Infused Agency's search engine optimization services today."
        />
        <link rel="canonical" href="https://infused.agency/seo" />
        <PageJsonLd
          graph={webPageGraph({
            url: "/seo",
            name: "SEO Search Engine Optimization | Infused Agency",
            pageType: "CollectionPage",
            description:
              "Looking for SEO services? Check out Infused Agency's search engine optimization services today.",
            breadcrumbs: [
              { name: "Home", href: "/" },
              { name: "SEO", href: "/seo" },
            ],
          })}
        />
      </Head>
      <Nav />
      <main className="redesign-root">
        <PageHero
          title="Search Engine Optimization (SEO)"
          description="We're ready to boost your rankings and drive results."
          breadcrumbs={[{ name: "Home", href: "/" }, { name: "SEO" }]}
        />

        <Section
          heading={
            <>
              Rank better on Google for more{" "}
              <span className="text-gradient">leads</span>,{" "}
              <span className="text-gradient">traffic</span> and{" "}
              <span className="text-gradient">revenue</span>.
            </>
          }
        >
          <div className="max-w-3xl space-y-4">
            <p className="text-base leading-relaxed text-muted">
              Search Engine Optimization (SEO) done by our{" "}
              <Link className={LINK} href="/">
                SEO Niagara
              </Link>{" "}
              team is your local business’s secret weapon in today’s digital
              world. Imagine your business appearing at the top of Google search
              results whenever someone in your area searches for your services.
              That’s the power of SEO.
            </p>
            <p className="text-base leading-relaxed text-muted">
              Why is SEO crucial for local businesses? Visibility. Higher search
              engine rankings mean more people see your business, leading to
              increased foot traffic, calls, and inquiries. Potential customers
              are searching for businesses like yours, and SEO ensures they find
              you first.
            </p>
            <p className="text-base leading-relaxed text-muted">
              <Link className={LINK} href="/posts/local-seo-tips-niagara">
                Local SEO specifically attracts customers
              </Link>{" "}
              in your area. By using locally relevant keywords, creating
              location-specific content, and keeping your business details
              consistent online, you become the top choice for local searches.
            </p>
            <p className="text-base leading-relaxed text-muted">
              This is important because local searches often have high purchase
              intent. If someone searches for “best Italian restaurant near me,”
              they’re likely planning to dine out soon. Showing up in these
              searches means capturing ready-to-buy customers.
            </p>
            <p className="text-base leading-relaxed text-muted">
              SEO also{" "}
              <Link className={LINK} href="/posts/how-seo-upgrades-business">
                builds trust and credibility
              </Link>
              . People trust search engines, and top-ranking businesses are seen
              as more reliable. Managing online reviews and optimizing your
              Google My Business listing further boosts your trustworthiness.
            </p>
            <p className="text-base leading-relaxed text-muted">
              The result? More customers and revenue. SEO drives targeted
              traffic that converts into paying customers. Invest in SEO to
              boost your visibility, build trust, and grow your business.
            </p>
          </div>
        </Section>

        <Section>
          <div className="grid gap-5 lg:grid-cols-3">
            {APPROACH.map((step) => (
              <Card key={step.title} className="flex h-full flex-col">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-white/5">
                  <Icon name={step.icon} className="h-5 w-5 text-accent" />
                </span>
                <h3 className="mt-5 font-display text-h3 font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </Card>
            ))}
          </div>
        </Section>

        <Section heading="Real & Local SEO Results">
          <div className="max-w-3xl space-y-6">
            <p className={PROSE}>
              At Infused Agency, we deliver real local SEO results for Niagara
              businesses. Our expert strategies boost your online visibility,
              ensuring your business ranks at the top of local searches. We
              focus on driving targeted traffic, which converts into genuine
              leads, sales, and increased revenue. By optimizing your website
              with locally relevant keywords, managing your online reviews, and
              enhancing your Google My Business listing, we help build trust and
              attract ready-to-buy customers. Let us help your Niagara business
              grow and thrive with proven SEO techniques tailored to your local
              market.
            </p>
            <Button href="/get-a-quote" size="lg">
              Get Started
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </div>
        </Section>

        <Section heading="SEO Services To Grow Your Business">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Card key={service.title} className="flex h-full flex-col">
                <h2 className="font-display text-h3 font-bold text-ink">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.body}
                </p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          heading="Serving SEO to Businesses in Niagara since 2013"
          headingAs="h3"
        >
          <ul className="flex flex-wrap gap-2.5">
            {CITIES.map((city) => (
              <li key={city.href}>
                <Link
                  className="inline-flex rounded-full border border-border bg-white/5 px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
                  href={city.href}
                >
                  {city.label}
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Section heading="SEO by industry">
          <ul className="flex flex-wrap gap-3">
            <li>
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
                href="/therapist-seo"
              >
                SEO for Therapists in Canada
                <Icon name="arrow-right" className="h-4 w-4 text-accent" />
              </Link>
            </li>
          </ul>
        </Section>

        {childServices.length ? (
          <Section heading="Search engine optimization services">
            <ul className="grid gap-3 sm:grid-cols-2">
              {childServices.map((s) => (
                <li key={s.url}>
                  <Link
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover"
                    href={s.url}
                  >
                    {s.name}
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        ) : null}
      </main>
      <CTA />
      <Footer />
    </>
  );
};

export default SEO;

export async function getStaticProps() {
  const services = require("../../lib/services");
  const { published } = services.computePublishedServices();
  const childServices = published
    .filter((r) => r.service.parentUrl === "/seo")
    .map((r) => ({ name: r.service.name, url: r.service.url }))
    .sort((a, b) => a.name.localeCompare(b.name));
  return { props: { childServices } };
}
