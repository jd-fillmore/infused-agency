import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Nav from "../Nav/nav";
import Footer from "../Footer/footer";
import CTA from "../CTA/cta";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Breadcrumb from "../ui/Breadcrumb";
import HeroAtmosphere from "../ui/HeroAtmosphere";
import Accordion from "../ui/Accordion";
import Icon from "../ui/Icon";
import CitySeoJsonLd from "../seo/CitySeoJsonLd";

const NIAGARA_CITIES = [
  { name: "St. Catharines", href: "/seo/st-catharines" },
  { name: "Niagara Falls", href: "/seo/niagara-falls" },
  { name: "Welland", href: "/seo/welland" },
  { name: "Grimsby", href: "/seo/grimsby" },
  { name: "Thorold", href: "/seo/thorold" },
  { name: "Port Colborne", href: "/seo/port-colborne" },
  { name: "Niagara-on-the-Lake", href: "/seo/niagara-on-the-lake" },
  { name: "Fort Erie", href: "/seo/fort-erie" },
  { name: "Beamsville", href: "/seo/beamsville" },
  { name: "Crystal Beach", href: "/seo/crystal-beach" },
  { name: "Fonthill", href: "/seo/fonthill" },
];

function Prose({ paragraphs }) {
  if (!paragraphs || !paragraphs.length) return null;
  return (
    <div className="max-w-3xl">
      {paragraphs.map((p, i) => (
        <p key={i} className="mt-4 text-base leading-relaxed text-muted">
          {p}
        </p>
      ))}
    </div>
  );
}

function CheckList({ items }) {
  if (!items || !items.length) return null;
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-sm leading-relaxed text-muted"
        >
          <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Hero({ city, hero }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface pb-16 pt-28 sm:pt-32 lg:pt-36">
      <HeroAtmosphere />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Breadcrumb
              items={[
                { name: "Home", href: "/" },
                { name: "SEO", href: "/seo" },
                { name: city },
              ]}
              className="mb-8"
            />
            <h1 className="max-w-3xl text-balance font-display text-h1 font-bold leading-[1.08] tracking-[-0.02em] text-ink">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lead text-muted">
              {hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/get-a-quote" size="lg">
                Book Free Consultation
              </Button>
              <Button href="/work" variant="secondary" size="lg">
                See Our Results
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <Image
                src={hero.image}
                alt={hero.alt}
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Intro({ intro, city }) {
  if (!intro || !intro.paragraphs.length) return null;
  return (
    <Section
      eyebrow="Local SEO in the Niagara region"
      heading={intro.heading || `${city} SEO services`}
    >
      <Prose paragraphs={intro.paragraphs} />
    </Section>
  );
}

function Proof({ proof }) {
  if (!proof) return null;
  return (
    <Section
      eyebrow={proof.heading}
      heading={proof.client}
      subhead={proof.subhead}
    >
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
          <Image
            src={proof.image}
            alt={proof.alt}
            className="h-auto w-full"
          />
        </figure>
        <div>
          <Badge tone="accent">{proof.label}</Badge>
          <ul className="mt-5 space-y-3">
            {proof.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm leading-relaxed text-muted"
              >
                <Icon
                  name="check"
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button href="/work" variant="secondary" className="mt-8">
            View More Results
            <Icon name="arrow-right" className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Section>
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

function WhyChoose({ whyChoose }) {
  if (!whyChoose) return null;
  return (
    <Section heading={whyChoose.heading}>
      <Prose paragraphs={whyChoose.paragraphs} />
      {whyChoose.awards && (
        <figure className="mt-8 overflow-hidden rounded-xl border border-border bg-card shadow-card">
          <Image
            src={whyChoose.awards.image}
            alt={whyChoose.awards.alt}
            className="h-auto w-full"
          />
        </figure>
      )}
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {whyChoose.blocks.map((block, i) => (
          <Card key={i} className="flex h-full flex-col">
            <h3 className="font-display text-lg font-bold text-ink">
              {block.title}
            </h3>
            <div className="mt-3">
              <Prose paragraphs={block.paragraphs} />
            </div>
            {block.checklist && block.checklist.length ? (
              <div className="mt-5">
                <CheckList items={block.checklist} />
              </div>
            ) : null}
            <div className="mt-3">
              <Prose paragraphs={block.paragraphsAfter} />
            </div>
          </Card>
        ))}
      </div>
      {whyChoose.closingHeading || whyChoose.closingParagraphs.length ? (
        <div className="mt-10 max-w-3xl">
          {whyChoose.closingHeading && (
            <h2 className="font-display text-h3 font-bold text-ink">
              {whyChoose.closingHeading}
            </h2>
          )}
          <Prose paragraphs={whyChoose.closingParagraphs} />
        </div>
      ) : null}
    </Section>
  );
}

function ServicesGrid({ services }) {
  if (!services || !services.cards.length) return null;
  return (
    <Section
      heading={services.heading}
      subhead={services.subhead || undefined}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.cards.map((card, i) => (
          <Card key={i} className="flex h-full flex-col">
            <span className="font-display text-sm font-bold text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-display text-lg font-bold text-ink">
              {card.title}
            </h3>
            <div className="mt-3">
              <Prose paragraphs={card.paragraphs} />
            </div>
            {card.checklist && card.checklist.length ? (
              <div className="mt-5">
                <CheckList items={card.checklist} />
              </div>
            ) : null}
            <div className="mt-3">
              <Prose paragraphs={card.paragraphsAfter} />
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Faq({ faqs }) {
  if (!faqs || !faqs.length) return null;
  return (
    <Section heading="Frequently Asked Questions">
      <Accordion items={faqs} className="max-w-3xl" />
    </Section>
  );
}

function CityLinks() {
  return (
    <Section
      eyebrow="Explore Niagara"
      heading="SEO for every Niagara community"
      subhead="We help businesses get found right here in the Niagara region."
    >
      <ul className="flex flex-wrap gap-3">
        {NIAGARA_CITIES.map((c) => (
          <li key={c.href}>
            <Link
              href={c.href}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
            >
              {c.name}
              <Icon name="arrow-right" className="h-4 w-4 text-accent" />
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent/15"
          >
            Browse all industries
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </li>
      </ul>
    </Section>
  );
}

const NiagaraCityPage = ({ page }) => {
  const { seo, hero, city } = page;

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
        <meta property="og:site_name" content="Infused Agency" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.canonical} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <CitySeoJsonLd
          city={seo.city}
          region={seo.region}
          url={seo.url}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: page.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </Head>
      <Nav />
      <main className="redesign-root">
        <Hero city={city} hero={hero} />
        <Intro intro={page.intro} city={city} />
        <Proof proof={page.proof} />
        <ProseBlock block={page.servicesBlock} />
        <ProseBlock block={page.localBlock} />
        <WhyChoose whyChoose={page.whyChoose} />
        <ServicesGrid services={page.services} />
        <Faq faqs={page.faqs} />
        <CityLinks />
      </main>
      <CTA />
      <Footer />
    </>
  );
};

export default NiagaraCityPage;