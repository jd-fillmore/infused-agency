import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../Nav/nav";
import Footer from "../Footer/footer";
import CTA from "../CTA/cta";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Breadcrumb from "../ui/Breadcrumb";
import Accordion from "../ui/Accordion";
import ServiceCard from "../ui/ServiceCard";
import Icon from "../ui/Icon";
import { servicePageGraph } from "../../src/lib/verticalSeoSchema";

const PROSE = "max-w-3xl text-base leading-relaxed text-muted";

function Proof({ items }) {
  if (!items || !items.length) return null;
  return (
    <Section
      heading="Proof from our work"
      subhead="Real results from businesses we have helped grow."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {items.map((item) => (
          <Card key={item.id} className="flex h-full flex-col">
            <h3 className="font-display text-lg font-bold text-ink">
              {item.namedEntity}
            </h3>
            {item.metric ? (
              <p className="mt-3 font-display text-2xl font-bold text-gradient">
                {item.metric}
              </p>
            ) : null}
            {item.quote ? (
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                &ldquo;{item.quote}&rdquo;
              </p>
            ) : null}
            {item.person ? (
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                {item.person}
              </p>
            ) : null}
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

function LinkList({ title, links }) {
  if (!links || !links.length) return null;
  return (
    <Section heading={title}>
      <ul className="flex flex-wrap gap-3">
        {links.map((l, i) => (
          <li key={i}>
            {l.internal && l.href.startsWith("/") ? (
              <Link
                href={l.href}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
              >
                {l.label}
                <Icon name="arrow-right" className="h-4 w-4 text-accent" />
              </Link>
            ) : (
              <a
                href={l.href}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
              >
                {l.label}
                <Icon name="arrow-right" className="h-4 w-4 text-accent" />
              </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Process({ steps }) {
  if (!steps || !steps.length) return null;
  return (
    <Section
      heading="What we do"
      subhead="The repeatable process we run to grow search visibility and leads."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <ServiceCard
            key={i}
            number={String(i + 1).padStart(2, "0")}
            title={s.title}
            description={s.text}
          />
        ))}
      </div>
    </Section>
  );
}

function ListSection({ title, items }) {
  if (!items || !items.length) return null;
  return (
    <Section heading={title}>
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
    </Section>
  );
}

function Sections({ sections }) {
  if (!sections || !sections.length) return null;
  return (
    <>
      {sections.map((s, i) => (
        <Section key={i} heading={s.heading}>
          <div className="max-w-3xl space-y-4">
            {s.paragraphs &&
              s.paragraphs.map((p, j) => (
                <p key={j} className="text-base leading-relaxed text-muted">
                  {p}
                </p>
              ))}
          </div>
        </Section>
      ))}
    </>
  );
}

const ServicePage = ({ page }) => {
  const c = page.content;
  const graph = servicePageGraph({
    breadcrumbs: page.breadcrumbs,
    name: page.name,
    serviceType: page.group,
    url: page.canonical,
    faqs: c.faqs,
  });

  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.summary} />
        <link rel="canonical" href={page.canonical} />
        <meta property="og:site_name" content="Infused Agency" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.summary} />
        <meta property="og:url" content={page.canonical} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={page.title} />
        <meta name="twitter:description" content={page.summary} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
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
            <Breadcrumb items={page.breadcrumbs} className="mb-8" />
            <h1 className="max-w-4xl text-balance font-display text-h1 font-bold leading-[1.08] tracking-[-0.02em] text-ink">
              {page.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-lead text-muted">
              {c.directAnswer}
            </p>
            <Button href="/get-a-quote" size="lg" className="mt-8">
              Get Free Quote
            </Button>
          </Container>
        </section>

        <Section heading="What it is">
          <p className={PROSE}>{c.intro}</p>
        </Section>

        <Section heading="Who it&rsquo;s for">
          <p className={PROSE}>{c.forWho}</p>
        </Section>

        <Process steps={c.process} />
        <ListSection title="What you get" items={c.deliverables} />
        <ListSection title="How we measure results" items={c.metrics} />
        <Sections sections={c.sections} />

        <Proof items={page.proof} />
        <LinkList title={page.relatedSectionTitle} links={page.related} />
        <LinkList title={page.industrySectionTitle} links={page.industries} />
        <Faq faqs={c.faqs} />
      </main>
      <CTA />
      <Footer />
    </>
  );
};

export default ServicePage;
