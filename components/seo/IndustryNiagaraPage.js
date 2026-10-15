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
import PageJsonLd from "./PageJsonLd";
import { industryGraph } from "../../src/lib/verticalSeoSchema";
import { NIAGARA_INDUSTRIES } from "../../src/lib/niagaraIndustries";

const NIAGARA_CITIES = [
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

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

// Lightweight inline-link renderer: paragraphs may embed `[label](/href)`
// tokens (internal links). Everything else renders as plain text.
function RichText({ text }) {
  const nodes = [];
  let last = 0;
  let match;
  const re = new RegExp(LINK_RE);
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const [, label, href] = match;
    if (href.startsWith("/")) {
      nodes.push(
        <Link
          key={`${match.index}-${href}`}
          href={href}
          className="font-semibold text-accent transition-colors hover:text-accent-hover"
        >
          {label}
        </Link>
      );
    } else {
      nodes.push(
        <a
          key={`${match.index}-${href}`}
          href={href}
          className="font-semibold text-accent transition-colors hover:text-accent-hover"
        >
          {label}
        </a>
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}

function Prose({ paragraphs }) {
  if (!paragraphs || !paragraphs.length) return null;
  return (
    <div className="max-w-3xl">
      {paragraphs.map((p, i) => (
        <p key={i} className="mt-4 text-base leading-relaxed text-muted">
          <RichText text={p} />
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

function Hero({ page }) {
  const { hero, seo, industry } = page;
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
                { name: industry },
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

function Intro({ intro }) {
  if (!intro || !intro.paragraphs.length) return null;
  return (
    <Section
      eyebrow="SEO for Niagara businesses"
      heading={intro.heading}
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

function AreasLinks() {
  return (
    <Section
      eyebrow="Explore Niagara"
      heading="SEO for every Niagara community"
      subhead="We serve businesses across the Niagara region. Each city below has its own local SEO page."
    >
      <ul className="flex flex-wrap gap-3">
        {NIAGARA_CITIES.map((c) => (
          <li key={c.href}>
            <Link
              href={c.href}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
            >
              <Icon name="map-pin" className="h-4 w-4 text-accent" />
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function OtherIndustries({ currentUrl }) {
  const others = NIAGARA_INDUSTRIES.filter((item) => item.href !== currentUrl);
  return (
    <Section
      eyebrow="More industries"
      heading="Other industries we serve in Niagara"
      subhead="Search behaviour differs by industry. Explore the programmes we run for other Niagara sectors."
    >
      <ul className="flex flex-wrap gap-3">
        {others.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent/15"
            >
              {item.displayName}
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
          >
            Browse all industries
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </li>
      </ul>
    </Section>
  );
}

const IndustryNiagaraPage = ({ page }) => {
  const { seo, industry } = page;

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
        <PageJsonLd
          graph={industryGraph({
            url: seo.url,
            name: seo.title,
            serviceName: `${industry} SEO`,
            description: seo.description,
            faqs: page.faqs,
            breadcrumbs: [
              { name: "Home", href: "/" },
              { name: "SEO", href: "/seo" },
              { name: industry, href: seo.url },
            ],
          })}
        />
      </Head>
      <Nav />
      <main className="redesign-root">
        <Hero page={page} />
        <Intro intro={page.intro} />
        <Proof proof={page.proof} />
        <ProseBlock block={page.bodyBlock} />
        <ProseBlock block={page.areasBlock} />
        <AreasLinks />
        <WhyChoose whyChoose={page.whyChoose} />
        <ServicesGrid services={page.services} />
        <Faq faqs={page.faqs} />
        <OtherIndustries currentUrl={seo.url} />
      </main>
      <CTA />
      <Footer />
    </>
  );
};

export default IndustryNiagaraPage;
