import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../../components/Nav/nav";
import Footer from "../../components/Footer/footer";
import CTA from "../../components/CTA/cta";
import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import Breadcrumb from "../../components/ui/Breadcrumb";
import Icon from "../../components/ui/Icon";
import PageJsonLd from "../../components/seo/PageJsonLd";
import { industriesGraph } from "../lib/verticalSeoSchema";

const TITLE = "SEO by Industry | Infused Agency";
const DESCRIPTION =
  "SEO programmes built for specific industries in the Niagara region and beyond. See the sectors Infused Agency serves and how to get started.";
const H1 = "SEO by industry";
const SUBHEAD =
  "We build search programmes around how a specific industry actually gets found. Start with the sector closest to your business, then explore the industries we serve across Niagara.";

function pluralize(n, singular, plural) {
  return `${n} ${n === 1 ? singular : plural}`;
}

function coverageLine(item) {
  return [
    pluralize(item.provinceCount, "province", "provinces"),
    pluralize(item.cityCount, "city", "cities"),
  ].join(" · ");
}

const Industries = ({ items = [], categories = [] }) => {
  const [active, setActive] = useState("All");
  const chips = ["All", ...categories];
  const visible =
    active === "All" ? items : items.filter((item) => item.category === active);

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://infused.agency/industries" />
        <meta property="og:site_name" content="Infused Agency" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content="https://infused.agency/industries" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <PageJsonLd
          graph={industriesGraph({
            url: "/industries",
            name: TITLE,
            description: DESCRIPTION,
            breadcrumbs: [
              { name: "Home", href: "/" },
              { name: "Industries", href: "/industries" },
            ],
            items: items.map((item) => ({
              name: `${item.displayName} SEO`,
              url: item.href,
            })),
          })}
        />
      </Head>
      <Nav />
      <main className="redesign-root">
        <Section
          as="section"
          eyebrow="Industries"
          heading={H1}
          headingAs="h1"
          subhead={SUBHEAD}
          className="pt-32 sm:pt-36 lg:pt-40"
        >
          <Breadcrumb
            className="mb-10"
            items={[
              { name: "Home", href: "/" },
              { name: "Industries", href: "/industries" },
            ]}
          />
        </Section>

        <Section
          heading="Browse by industry"
          subhead="Every card below links to a live programme. Filter by category, or jump straight to the industry closest to your business."
        >
          <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter by industry category">
            {chips.map((chip) => {
              const isActive = chip === active;
              return (
                <button
                  key={chip}
                  type="button"
                  onClick={() => setActive(chip)}
                  aria-pressed={isActive}
                  className="chip-toggle transition-colors"
                >
                  {chip}
                </button>
              );
            })}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item) => (
              <Card
                key={item.slug}
                interactive
                className="flex h-full flex-col"
              >
                <Badge tone="accent" className="self-start">
                  {item.category}
                </Badge>
                <h3 className="mt-4 font-display text-xl font-bold text-ink">
                  {item.displayName}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {item.benefit}
                </p>
                <p className="mt-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-muted">
                  <Icon name="map-pin" className="h-4 w-4 text-accent" />
                  {item.coverage || coverageLine(item)}
                </p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                >
                  Learn more
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Link>
              </Card>
            ))}

            <Card
              gradient
              className="flex h-full flex-col justify-between bg-elevated"
            >
              <div>
                <h3 className="font-display text-xl font-bold text-ink">
                  Don&rsquo;t see your industry?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  New industry programmes go live as we publish real content for
                  them. Tell us what you do and we&rsquo;ll show you where the
                  opportunity is.
                </p>
              </div>
              <Button href="/get-a-quote" className="mt-6 self-start">
                Talk to us
              </Button>
            </Card>
          </div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Industries;

export async function getStaticProps() {
  const { buildIndustriesProps } = require("../lib/verticalSeo");
  const { items, categories } = buildIndustriesProps();
  return { props: { items, categories } };
}
