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
import { canadaNicheHubGraph } from "../../src/lib/canadaNicheSeo";

function Hero({ hub, breadcrumbs }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface pb-16 pt-28 sm:pt-32 lg:pt-36">
      <HeroAtmosphere />
      <Container className="relative">
        <Breadcrumb items={breadcrumbs} className="mb-8" />
        <h1 className="max-w-3xl text-balance font-display text-h1 font-bold leading-[1.08] tracking-[-0.02em] text-ink">
          {hub.hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lead text-muted">
          {hub.hero.description}
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

function ProvinceGroups({ groups }) {
  return (
    <Section
      eyebrow="City pages"
      heading="SEO for Concrete Contractors across Canada"
      subhead="Each city below has its own page covering local competition, the searches people use, and the work we do there."
    >
      <div className="space-y-10">
        {groups.map((group) => (
          <div key={group.province.slug}>
            <h3 className="font-display text-lg font-bold text-ink">
              {group.province.name}
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.cities
                .filter((city) => city.published)
                .map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={city.href}
                      className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
                    >
                      <Icon
                        name="map-pin"
                        className="h-4 w-4 shrink-0 text-accent"
                      />
                      SEO for Concrete Contractors in {city.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

const CanadaNicheHubPage = ({ hub, groups, breadcrumbs, urlPath, niche }) => (
  <>
    <Head>
      <title>{hub.seo.title}</title>
      <meta name="description" content={hub.seo.description} />
      <link rel="canonical" href={`https://infused.agency${urlPath}`} />
      <meta property="og:site_name" content="Infused Agency" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={hub.seo.title} />
      <meta property="og:description" content={hub.seo.description} />
      <meta property="og:url" content={`https://infused.agency${urlPath}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={hub.seo.title} />
      <meta name="twitter:description" content={hub.seo.description} />
      <PageJsonLd
        graph={canadaNicheHubGraph({
          niche,
          urlPath,
          name: hub.seo.title,
          description: hub.seo.description,
          faqs: hub.faqs,
        })}
      />
    </Head>
    <Nav />
    <main className="redesign-root">
      <Hero hub={hub} breadcrumbs={breadcrumbs} />
      <Section heading={hub.intro.heading}>
        <Prose paragraphs={hub.intro.paragraphs} />
      </Section>
      <Section heading={hub.jobs.heading}>
        <Prose paragraphs={hub.jobs.paragraphs} />
      </Section>
      <Section heading={hub.whatWeDo.heading}>
        <Prose paragraphs={hub.whatWeDo.paragraphs} />
        {hub.whatWeDo.checklist && hub.whatWeDo.checklist.length ? (
          <div className="mt-6 max-w-3xl">
            <CheckList items={hub.whatWeDo.checklist} />
          </div>
        ) : null}
      </Section>
      <ProvinceGroups groups={groups} />
      <Section heading={hub.niagara.heading}>
        <Prose paragraphs={hub.niagara.paragraphs} />
      </Section>
      <Section heading="Frequently Asked Questions">
        <Accordion items={hub.faqs} className="max-w-3xl" />
      </Section>
    </main>
    <CTA />
    <Footer />
  </>
);

export default CanadaNicheHubPage;
