import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../Nav/nav";
import Footer from "../Footer/footer";
import CTA from "../CTA/cta";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";
import Breadcrumb from "../ui/Breadcrumb";
import HeroAtmosphere from "../ui/HeroAtmosphere";
import Accordion from "../ui/Accordion";
import Icon from "../ui/Icon";
import PageJsonLd from "../seo/PageJsonLd";
import { Prose, CheckList } from "./parts";
import { canadaNicheCityGraph } from "../../src/lib/canadaNicheSeo";

function Hero({ city, content, breadcrumbs }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface pb-16 pt-28 sm:pt-32 lg:pt-36">
      <HeroAtmosphere />
      <Container className="relative">
        <Breadcrumb items={breadcrumbs} className="mb-8" />
        <h1 className="max-w-3xl text-balance font-display text-h1 font-bold leading-[1.08] tracking-[-0.02em] text-ink">
          SEO for Concrete Contractors in {city.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lead text-muted">
          {content.hero.subhead}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/get-a-quote" size="lg">
            Book Free Consultation
          </Button>
          <Button href="/work" variant="secondary" size="lg">
            See Our Results
          </Button>
        </div>
      </Container>
    </section>
  );
}

function ProseBlock({ block }) {
  if (!block || !block.paragraphs.length) return null;
  return (
    <Section heading={block.heading} subhead={block.subhead || undefined}>
      <Prose paragraphs={block.paragraphs} />
      {block.checklist && block.checklist.length ? (
        <div className="mt-6 max-w-3xl">
          <CheckList items={block.checklist} />
        </div>
      ) : null}
      <Prose paragraphs={block.paragraphsAfter} />
    </Section>
  );
}

function Nearby({ content, nearby, niche }) {
  if (!nearby || !nearby.length) return null;
  return (
    <Section heading={content.nearby.heading} subhead={content.nearby.subhead}>
      <ul className="grid gap-3 sm:grid-cols-2">
        {nearby.map((city) => (
          <li key={city.slug} className="rounded-lg border border-border bg-card p-4">
            {city.note ? (
              <p className="text-sm leading-relaxed text-muted">{city.note}</p>
            ) : null}
            <Link
              href={city.href}
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              <Icon name="map-pin" className="h-4 w-4" />
              SEO for {niche.name} in {city.name}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
        Browse the full list of city pages from the{" "}
        <Link
          href={`/seo/for-${niche.slug}`}
          className="font-semibold text-accent transition-colors hover:text-accent-hover"
        >
          SEO for {niche.name} in Canada hub
        </Link>
        .
      </p>
    </Section>
  );
}

const CanadaNicheCityPage = ({
  niche,
  city,
  content,
  breadcrumbs,
  urlPath,
  nearby,
}) => (
  <>
    <Head>
      <title>{content.seo.title}</title>
      <meta name="description" content={content.seo.description} />
      <link rel="canonical" href={`https://infused.agency${urlPath}`} />
      <meta property="og:site_name" content="Infused Agency" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={content.seo.title} />
      <meta property="og:description" content={content.seo.description} />
      <meta property="og:url" content={`https://infused.agency${urlPath}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={content.seo.title} />
      <meta name="twitter:description" content={content.seo.description} />
      <PageJsonLd
        graph={canadaNicheCityGraph({
          niche,
          city,
          urlPath,
          name: content.seo.title,
          description: content.seo.description,
          faqs: content.faqs,
        })}
      />
    </Head>
    <Nav />
    <main className="redesign-root">
      <Hero city={city} content={content} breadcrumbs={breadcrumbs} />
      <ProseBlock block={content.competition} />
      <ProseBlock block={content.searches} />
      <ProseBlock block={content.season} />
      <ProseBlock block={content.whatWeDo} />
      <ProseBlock block={content.straight} />
      <Section heading="Frequently Asked Questions">
        <Accordion items={content.faqs} className="max-w-3xl" />
      </Section>
      <Nearby content={content} nearby={nearby} niche={niche} />
    </main>
    <CTA />
    <Footer />
  </>
);

export default CanadaNicheCityPage;
