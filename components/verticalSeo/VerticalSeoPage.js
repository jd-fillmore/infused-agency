import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../Nav/nav";
import Footer from "../Footer/footer";
import CTA from "../CTA/cta";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Breadcrumb from "../ui/Breadcrumb";
import Accordion from "../ui/Accordion";
import Icon from "../ui/Icon";
import { buildGraph } from "../../src/lib/verticalSeoSchema";

const PROSE = "max-w-3xl text-base leading-relaxed text-muted";

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
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
              >
                {l.label}
                <Icon name="arrow-right" className="h-4 w-4 text-accent" />
              </Link>
            ) : (
              <a
                href={l.href}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
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

function ProvinceCard({ province, singular }) {
  return (
    <Card interactive className="flex h-full flex-col">
      <Badge tone="muted" className="self-start">
        {province.abbr}
      </Badge>
      <h3 className="mt-4 font-display text-lg font-bold text-ink">
        {province.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {province.publishedCityCount > 0
          ? `${province.publishedCityCount} ${
              province.publishedCityCount === 1 ? "city" : "cities"
            } covered across ${province.name}.`
          : `${singular} SEO across ${province.name}.`}
      </p>
      {province.cities.length ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {province.cities.map((city) => (
            <li key={city.slug}>
              <Link
                href={city.href}
                className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
              >
                {city.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
      <Link
        href={province.href}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
      >
        {singular} SEO in {province.name}
        <Icon name="arrow-right" className="h-4 w-4" />
      </Link>
    </Card>
  );
}

function CityCard({ city, singular }) {
  return (
    <Link
      href={city.href}
      className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-5 shadow-card transition-transform duration-200 hover:-translate-y-1 hover:border-accent/40"
    >
      <span className="text-sm font-semibold text-ink">
        {singular} SEO in {city.name}
      </span>
      <Icon
        name="arrow-right"
        className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-accent"
      />
    </Link>
  );
}

function Hero({ page, children }) {
  return (
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
        {children}
        <Button href="/get-a-quote" size="lg" className="mt-8">
          Get Free Quote
        </Button>
      </Container>
    </section>
  );
}

const VerticalSeoPage = ({ page }) => {
  const { content, vertical, province, city, geo } = page;
  const graph = buildGraph(page);
  const ruleRegulator = geo && geo.verified && geo.regulator;
  const publishedCities = (page.citiesIndex || []).filter((c) => c.published);
  const publishedProvinces = (page.provincesIndex || []).filter(
    (p) => p.published
  );

  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={content.summary} />
        <link rel="canonical" href={page.canonical} />
        <meta property="og:site_name" content="Infused Agency" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={content.summary} />
        <meta property="og:url" content={page.canonical} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={page.title} />
        <meta name="twitter:description" content={content.summary} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      </Head>
      <Nav />
      <main className="redesign-root">
        <Hero page={page}>
          <p className="mt-5 max-w-2xl text-lead text-muted">
            {content.directAnswer}
          </p>
        </Hero>

        {content.intro ? (
          <Section>
            <p className={PROSE}>{content.intro}</p>
          </Section>
        ) : null}

        {(page.kind === "pillar" || page.kind === "country") && (
          <>
            {vertical.serviceEmphasis.length ? (
              <Section
                heading={`Our approach for ${vertical.displayName.toLowerCase()}`}
                subhead="The areas we focus on to win search visibility in this industry."
              >
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {vertical.serviceEmphasis.map((s, i) => (
                    <Card key={i} className="flex h-full flex-col">
                      <Icon name="target" className="h-6 w-6 text-accent" />
                      <p className="mt-4 text-sm leading-relaxed text-muted">
                        {s}
                      </p>
                    </Card>
                  ))}
                </div>
              </Section>
            ) : null}

            {content.localInsight ? (
              <Section heading="The Canadian market">
                <p className={PROSE}>{content.localInsight}</p>
              </Section>
            ) : null}

            {page.regulationRows.length ? (
              <Section heading="Provincial regulation landscape">
                <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
                  <div className="overflow-x-auto">
                    <table className="table w-full">
                      <thead>
                        <tr>
                          <th>Province</th>
                          <th>Regulator</th>
                        </tr>
                      </thead>
                      <tbody>
                        {page.regulationRows.map((r, i) => (
                          <tr key={i}>
                            <td>{r.name}</td>
                            <td>
                              {r.regulator}
                              {r.note ? ` — ${r.note}` : ""}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Section>
            ) : null}

            {page.quebecLanguageNote ? (
              <Section heading="Quebec and French-language considerations">
                <p className={PROSE}>{page.quebecLanguageNote}</p>
              </Section>
            ) : null}
          </>
        )}

        {page.kind === "province" && (
          <>
            {geo && geo.provinceSearchNotes ? (
              <Section
                heading={`How ${vertical.singular} SEO works in ${province.name}`}
              >
                <p className={PROSE}>{geo.provinceSearchNotes}</p>
              </Section>
            ) : null}
            {content.localInsight ? (
              <Section>
                <p className={PROSE}>{content.localInsight}</p>
              </Section>
            ) : null}
            {ruleRegulator ? (
              <Section heading="Provincial regulation">
                <p className={PROSE}>
                  {geo.regulator}
                  {geo.advertisingRulesNote
                    ? ` — ${geo.advertisingRulesNote}`
                    : ""}
                </p>
              </Section>
            ) : null}
          </>
        )}

        {page.kind === "city" && (
          <>
            {content.localInsight ? (
              <Section
                heading={`How ${vertical.singular} SEO works in ${city.name}`}
              >
                <p className={PROSE}>{content.localInsight}</p>
              </Section>
            ) : null}
            {city.neighbourhoods ? (
              <Section heading="Neighbourhoods and areas we cover">
                <ul className="flex flex-wrap gap-2">
                  {city.neighbourhoods.map((n, i) => (
                    <li
                      key={i}
                      className="rounded-full border border-border bg-white/5 px-3 py-1 text-sm text-muted"
                    >
                      {n}
                    </li>
                  ))}
                </ul>
              </Section>
            ) : null}
            {city.majorIndustries ? (
              <Section heading="Local economy">
                <p className={PROSE}>
                  {city.name}&rsquo;s local economy leans on{" "}
                  {city.majorIndustries.join(", ")}.
                </p>
              </Section>
            ) : null}
            {ruleRegulator ? (
              <Section heading="Provincial rules">
                <p className={PROSE}>
                  {geo.regulator}
                  {geo.advertisingRulesNote
                    ? ` — ${geo.advertisingRulesNote}`
                    : ""}
                </p>
              </Section>
            ) : null}
            {vertical.serviceEmphasis.length ? (
              <Section heading={`What we do for ${city.name} practices`}>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {vertical.serviceEmphasis.map((s, i) => (
                    <Card key={i} className="flex h-full flex-col">
                      <Icon name="bolt" className="h-6 w-6 text-accent" />
                      <p className="mt-4 text-sm leading-relaxed text-muted">
                        {s}
                      </p>
                    </Card>
                  ))}
                </div>
              </Section>
            ) : null}
            {content.localChecklist ? (
              <Section heading="Your local checklist">
                <CheckList items={content.localChecklist} />
              </Section>
            ) : null}
          </>
        )}

        {content.localChecklist && page.kind !== "city" ? (
          <Section heading="What to get right">
            <CheckList items={content.localChecklist} />
          </Section>
        ) : null}

        {(page.kind === "pillar" || page.kind === "country") &&
        page.provincesIndex.length ? (
          <Section
            heading={`${vertical.displayName} SEO by province`}
            subhead={`Pick your province to see the cities we cover for ${vertical.displayName.toLowerCase()}.`}
          >
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {publishedProvinces.map((p) => (
                <ProvinceCard
                  key={p.slug}
                  province={p}
                  singular={vertical.singular}
                />
              ))}
            </div>
          </Section>
        ) : null}

        {page.kind === "province" && page.citiesIndex.length ? (
          <Section
            heading={`${vertical.singular} SEO in ${province.name} cities`}
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {publishedCities.map((c) => (
                <CityCard key={c.slug} city={c} singular={vertical.singular} />
              ))}
            </div>
          </Section>
        ) : null}

        {page.legacyCities && page.legacyCities.length ? (
          <Section heading="More cities">
            <ul className="flex flex-wrap gap-3">
              {page.legacyCities.map((l, i) => (
                <li key={i}>
                  <Link
                    href={l.href}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
                  >
                    {l.label}
                    <Icon name="arrow-right" className="h-4 w-4 text-accent" />
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        <Proof items={page.proof} />
        <Faq faqs={content.faqs} />
        <LinkList title="Related services" links={page.serviceLinks} />
        <LinkList title="Related pages" links={page.links} />
      </main>
      <CTA />
      <Footer />
    </>
  );
};

export default VerticalSeoPage;
