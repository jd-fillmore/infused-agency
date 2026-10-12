import React from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../../components/Nav/nav";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";
import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";
import ServiceCard from "../../components/ui/ServiceCard";
import Breadcrumb from "../../components/ui/Breadcrumb";
import Icon from "../../components/ui/Icon";
import PageJsonLd from "../../components/seo/PageJsonLd";
import { webPageGraph } from "../lib/verticalSeoSchema";

const GROUP_TITLES = [
  { title: "SEO", groups: ["seo"] },
  { title: "Web Design", groups: ["web-design"] },
  { title: "eCommerce Marketing", groups: ["ecommerce-marketing"] },
  {
    title: "Digital Marketing and Reputation",
    groups: ["digital-marketing", "reputation"],
  },
];

const Services = ({ groups = [] }) => {
  return (
    <>
      <Head>
        <title>Infused Agency | Online Marketing Solutions</title>
        <meta
          name="description"
          content="Boost your business with our digital marketing, SEO and web design services today. Get a free quote!"
        />
        <link rel="canonical" href="https://infused.agency/services" />
        <PageJsonLd
          graph={webPageGraph({
            url: "/services",
            name: "Infused Agency | Online Marketing Solutions",
            pageType: "CollectionPage",
            description:
              "Boost your business with our digital marketing, SEO and web design services today. Get a free quote!",
            breadcrumbs: [
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
            ],
          })}
        />
      </Head>
      <Nav />
      <main className="redesign-root">
        <section className="relative overflow-hidden border-b border-border bg-surface pb-16 pt-28 sm:pt-32 lg:pt-36">
          <div
            className="pointer-events-none absolute inset-0 glow-radial"
            aria-hidden="true"
          />
          <Container className="relative">
            <Breadcrumb
              items={[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
              ]}
              className="mb-8"
            />
            <h1 className="max-w-4xl text-balance font-display text-h1 font-bold leading-[1.08] tracking-[-0.02em] text-ink">
              Our Services
            </h1>
            <p className="mt-5 max-w-2xl text-lead text-muted">
              Online marketing services for business that want to add
              credibility and grow their revenue.
            </p>
          </Container>
        </section>

        <Section>
          <p className="max-w-3xl text-base leading-relaxed text-muted">
            At Infused Agency, we help businesses in Niagara grow by improving
            their online presence. Whether you need your website to show up on
            Google or want a design that brings in more customers, we’re here to
            help. Our services include{" "}
            <Link href="/" className="font-semibold text-accent hover:underline">
              Niagara SEO
            </Link>{" "}
            to boost your rankings, and Lead-Generating Web Design that turns
            visitors into customers.
          </p>
        </Section>

        {groups.map((g) =>
          g.services.length ? (
            <Section key={g.title} heading={g.title} headingAs="h3">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {g.services.map((s) => (
                  <ServiceCard
                    key={s.url}
                    href={s.url}
                    title={s.name}
                    description={s.summary}
                  />
                ))}
              </div>
            </Section>
          ) : null
        )}

        <Section
          heading="SEO by industry"
          subhead="Industry-specific programmes with published province and city coverage."
        >
          <ul className="flex flex-wrap gap-3">
            <li>
              <Link
                href="/therapist-seo"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
              >
                SEO for Therapists in Canada
                <Icon name="arrow-right" className="h-4 w-4 text-accent" />
              </Link>
            </li>
          </ul>
          <Button href="/industries" variant="secondary" className="mt-6">
            Browse all industries
          </Button>
        </Section>
      </main>
      <CTA />
      <Footer />
    </>
  );
};

export default Services;

export async function getStaticProps() {
  const services = require("../lib/services");
  const { published } = services.computePublishedServices();
  const publishedServices = published.map((r) => r.service);
  const groups = GROUP_TITLES.map((g) => ({
    title: g.title,
    services: publishedServices
      .filter((s) => g.groups.includes(s.group))
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((s) => ({ name: s.name, url: s.url, summary: s.summary })),
  }));
  return { props: { groups } };
}
