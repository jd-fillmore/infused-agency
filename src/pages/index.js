import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Nav from "../../components/Nav/nav";
import Footer from "../../components/Footer/footer";
import {
  Container,
  Section,
  Button,
  Badge,
  Card,
  ServiceCard,
  Accordion,
  TestimonialCard,
  Icon,
  StatBlock,
} from "../../components/ui";
import { HOME_FAQS } from "../lib/homeFaqs";
import { homeGraph } from "../lib/verticalSeoSchema";
import { getLatestPosts } from "../lib/posts";

import feat1 from "../../src/img/feat-suk-law.png";
import feat2 from "../../src/img/feat-flat-rock.png";
import feat3 from "../../src/img/feat-fred.png";
import feat5 from "../../src/img/feat-kd.png";
import feat6 from "../../src/img/feat-delta.png";
import feat7 from "../../src/img/feat-brandi.png";
import feat8 from "../../src/img/feat-jerry.png";
import test1 from "../../src/img/testimonial-lucas-folino-niagara.png";
import flatRock from "../../src/img/st-catharines-seo-results.jpg";
import delta from "../../src/img/niagara-seo-company-results.jpg";

const AUDIT_URL = "/get-a-quote";

const TRUST = [
  { icon: "users", label: "50+ Niagara businesses helped" },
  { icon: "target", label: "Local SEO for Niagara businesses" },
  { icon: "map-pin", label: "Based in St. Catharines" },
  { icon: "clock", label: "Over 10 years of local SEO" },
];

const AFFILIATES = [
  { icon: "search", label: "Google Partner", note: "Certified agency" },
  { icon: "users", label: "Niagara Chamber", note: "Member" },
  { icon: "star", label: "Three Best Rated", note: "Top-rated local" },
  { icon: "check", label: "GoodFirms", note: "Verified reviews" },
  { icon: "spark", label: "DesignRush", note: "Listed agency" },
  { icon: "chat", label: "Google Reviews", note: "40+ five-star" },
];

const CLIENT_LOGOS = [
  { src: feat1, alt: "Suk Law" },
  { src: feat2, alt: "Flat Rock Cellars" },
  { src: feat3, alt: "Fred's Concrete" },
  { src: feat5, alt: "KD Flowers" },
  { src: feat6, alt: "Delta Energy Solutions" },
  { src: feat7, alt: "Brandi May Psychotherapy" },
  { src: feat8, alt: "Jerry's Insulating" },
];

const AREA_CITIES = [
  { name: "Niagara-on-the-Lake", href: "/seo/niagara-on-the-lake" },
  { name: "Welland", href: "/seo/welland" },
  { name: "Fort Erie", href: "/seo/fort-erie" },
  { name: "Beamsville", href: "/seo/beamsville" },
  { name: "Grimsby", href: "/seo/grimsby" },
  { name: "Thorold", href: "/seo/thorold" },
  { name: "Port Colborne", href: "/seo/port-colborne" },
  { name: "Fonthill", href: "/seo/fonthill" },
  { name: "Crystal Beach", href: "/seo/crystal-beach" },
];

const RESULT_IMAGES = [
  {
    src: flatRock,
    alt: "Search visibility results for Flat Rock Cellars, a Niagara winery we work with",
    name: "Flat Rock Cellars",
    industry: "Winery",
    stat: "+550%",
    statLabel: "local visibility",
  },
  {
    src: delta,
    alt: "Local search visibility results for Delta Energy Solutions, serving Niagara Falls and the Niagara region",
    name: "Delta Energy Solutions",
    industry: "Electrical & energy",
    stat: "+670%",
    statLabel: "local visibility",
  },
];

const WHAT_WE_DO = [
  {
    number: "1",
    title: "Keyword research",
    href: "/seo",
    description: "Find the terms that bring calls.",
  },
  {
    number: "2",
    title: "Link building",
    href: "/seo/link-building",
    description: "Build trust with relevant links.",
  },
  {
    number: "3",
    title: "Content writing",
    href: "/seo/content-writing",
    description: "Pages written for buyers.",
  },
  {
    number: "4",
    title: "Local SEO",
    href: "/seo/local-seo",
    description: "Win the map for your services.",
  },
  {
    number: "5",
    title: "Technical SEO",
    href: "/seo/technical-seo",
    description: "Keep your site fast and crawlable.",
  },
  {
    number: "6",
    title: "On-page SEO",
    href: "/seo",
    description: "Tighten pages that drive calls.",
  },
];

const INDUSTRY_CARDS = [
  {
    category: "Trades",
    displayName: "Concrete contractors",
    benefit: "Get found for jobs in your area.",
    href: "/seo/for-concrete-contractors-niagara",
  },
  {
    category: "Trades",
    displayName: "Insulation contractors",
    benefit: "Rank for high-value installs.",
    href: "/seo/for-insulation-niagara",
  },
  {
    category: "Trades",
    displayName: "Electricians",
    benefit: "Win calls in your service area.",
    href: "/seo/for-electricians-niagara",
  },
  {
    category: "Legal",
    displayName: "Law firms",
    benefit: "Attract local clients.",
    href: "/seo/for-law-firms-niagara",
  },
  {
    category: "Energy",
    displayName: "Solar companies",
    benefit: "Capture local demand.",
    href: "/seo/for-solar-companies-niagara",
  },
  {
    category: "Hospitality",
    displayName: "Wineries",
    benefit: "Drive visits and enquiries.",
    href: "/seo/for-wineries-niagara",
  },
];

const FAQ_ITEMS = [
  {
    q: "How much does SEO cost in Niagara?",
    a: "It depends on your competition, your site and how many services and towns you cover. We quote each business individually after a free audit.",
  },
  {
    q: "How long does SEO take?",
    a: "Most clients see early movement in rankings and enquiries within three to six months, with bigger results building over six to twelve months.",
  },
  {
    q: "Will ChatGPT or Gemini recommend my business?",
    a: "No one can guarantee a mention. Clear content, consistent business details and genuine reviews improve your odds, and we build those signals.",
  },
  {
    q: "Can you guarantee a #1 ranking?",
    a: "No, and no honest agency can. We commit to proven, white-hat work and clear reporting rather than a ranking promise.",
  },
];

const Home = ({ latestPosts }) => {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(homeGraph({ faqs: HOME_FAQS })),
          }}
        />

        <title>
          Niagara SEO Company &amp; Local SEO Services | Infused Agency
        </title>
        <meta
          name="description"
          content="Niagara SEO company for local SEO, Google Business Profile and AI search. Based in St. Catharines, serving the whole Niagara region. Free SEO audit."
        />
        <meta
          name="google-site-verification"
          content="VK8okfPDhG2ziQHXaOAh2Nerc_pVe6vR9pcCp1WtSW8"
        />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Niagara" />
        <meta name="geo.position" content="43.0896;-79.0849" />
        <meta name="ICBM" content="43.0896, -79.0849" />

        <meta property="og:site_name" content="Infused Agency" />
        <link rel="canonical" href="https://infused.agency" />
      </Head>

      <Nav />

      <main className="redesign-root">
        <section className="relative overflow-hidden pt-14 pb-16 sm:pt-20 sm:pb-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-grid opacity-60"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[620px] aurora-burst opacity-90"
          />
          <span
            aria-hidden="true"
            className="orb -left-10 top-10 h-56 w-56 bg-accent/40"
          />
          <span
            aria-hidden="true"
            className="orb right-[-3rem] top-0 h-72 w-72 bg-[#363795]/40"
          />
          <span
            aria-hidden="true"
            className="orb bottom-0 right-1/4 h-52 w-52 bg-gold-bright/40"
          />
          <Container className="relative">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h1 className="mt-5 max-w-3xl text-balance font-display text-display font-bold leading-[1.04] tracking-[-0.03em] text-ink">
                  Local SEO Services in Niagara &amp; St. Catharines
                </h1>
                <p className="mt-5 text-lead text-muted">
                  We help small businesses in Niagara get found with local SEO
                  and AI search. Based in St. Catharines, we serve the whole
                  Niagara region with practical work that brings calls and
                  enquiries.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="/get-a-quote" size="lg">
                    Get your free SEO audit
                  </Button>
                  <Button href="/work" variant="secondary" size="lg">
                    View our work
                  </Button>
                </div>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {TRUST.map((item) => (
                    <li key={item.label} className="flex items-center gap-2">
                      <Icon name={item.icon} className="h-5 w-5 text-accent" />
                      <span className="text-sm text-muted">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Card glow className="relative overflow-hidden lg:max-w-md">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1.5 bg-warm-gradient"
                  />
                  <h2 className="font-display text-h3 font-bold text-ink">
                    Start your project today
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Book a free, no-obligation consultation. Tell us where your
                    business is today and where you want it to be.
                  </p>
                  <Button href="/get-a-quote" size="lg" className="mt-6 w-full">
                    Get your free SEO audit
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </Button>
                  <p className="mt-6 border-t border-border pt-5 text-xs leading-relaxed text-muted">
                    Book in under two minutes. Free consultation, no tedious
                    forms, no obligation.
                  </p>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-y border-border bg-surface/60 py-12">
          <Container>
            <p className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Recognized and affiliated
            </p>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {AFFILIATES.map((affiliate) => (
                <li key={affiliate.label}>
                  <div className="flex h-full flex-col items-center gap-3 rounded-xl border border-border bg-card px-4 py-5 text-center shadow-card card-lift">
                    <span className="icon-tile h-10 w-10">
                      <Icon name={affiliate.icon} className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold leading-snug text-ink">
                      {affiliate.label}
                    </span>
                    <span className="text-xs leading-snug text-muted">
                      {affiliate.note}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 mb-7 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              A few of the businesses we work with
            </p>
            <ul className="grid grid-cols-2 items-center gap-6 sm:grid-cols-4 lg:grid-cols-7">
              {CLIENT_LOGOS.map((item) => (
                <li key={item.alt} className="flex justify-center">
                  <div className="relative h-10 w-24">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="96px"
                      className="object-contain brightness-0 opacity-60 transition-opacity hover:opacity-90"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <Section
          id="results"
          className="border-t border-border"
          eyebrow="Proof"
          heading="Real results for Niagara businesses"
        >
          <div className="reveal mt-10 grid gap-6 md:grid-cols-2">
            {RESULT_IMAGES.map((result) => (
              <Card key={result.alt} className="overflow-hidden" interactive>
                <div className="relative h-52 overflow-hidden rounded-lg border border-border">
                  <Image
                    src={result.src}
                    alt={result.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute left-3 top-3">
                    <Badge tone="gold" className="shadow-card">
                      <Icon name="star" className="h-3.5 w-3.5" />
                      Verified result
                    </Badge>
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-4">
                  <span className="icon-tile h-12 w-12 shrink-0">
                    <Icon name="trending-up" className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-display text-2xl font-bold leading-none text-gold">
                      {result.stat}
                    </div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                      {result.statLabel}
                    </div>
                  </div>
                </div>
                <div className="mt-4 border-t border-border pt-4">
                  <div className="text-base font-semibold text-ink">
                    {result.name}
                  </div>
                  <div className="mt-0.5 text-sm text-muted">
                    {result.industry}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="reveal mt-10 grid gap-6 md:grid-cols-3">
            <TestimonialCard
              showStars
              avatar={test1}
              avatarAlt="Lucas Folino, owner of Fred's Concrete, a Niagara client of Infused Agency"
              quote="&ldquo;Infused Agency got me a lot more visibility through Google in a short period of time. Which has led to a ton of leads for my business. Very knowledgeable and they walk you through every detail. Would definitely recommend!&rdquo;"
              person="Lucas Folino"
              role="Owner"
              company="Fred's Concrete"
            />
            <TestimonialCard
              showStars
              quote="&ldquo;I reached out to a few companies to help with ranking my business presence online. JD came in with the best advice on how to organically rank my company&rsquo;s website. We are already seeing thousands of impressions driven directly from his services. Best yet , you are not tied into a massive monthly bill.&rdquo;"
              person="Brent McCoppenopen"
              role="Owner"
              company="Timberwolf Carpentry & Renovations"
            />
            <TestimonialCard
              showStars
              quote="&ldquo;JD Has been excellent to work with. He took the time to understand our objectives and created a plan to help us achieve them. Within 3 months we have already seen growth in our organic ranking which is very impressive.&rdquo;"
              person="Scott Forbes"
              role="Owner"
              company="Pro Battery Shop"
            />
          </div>
        </Section>

        <Section
          id="why-infused"
          className="border-y border-border bg-surface/40"
          eyebrow="Why Infused"
          heading="Why Niagara businesses choose Infused Agency"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="flex h-full flex-col">
              <h3 className="font-display text-lg font-bold text-ink">
                Planned around Niagara&apos;s seasons
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                We time work to the months that matter most.
              </p>
            </Card>
            <Card className="flex h-full flex-col">
              <h3 className="font-display text-lg font-bold text-ink">
                Enquiries, not empty traffic
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                We track calls and form fills that drive revenue.
              </p>
            </Card>
            <Card className="flex h-full flex-col">
              <h3 className="font-display text-lg font-bold text-ink">
                People who know local search
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                We know the map pack and AI answers in Niagara.
              </p>
            </Card>
            <Card className="flex h-full flex-col">
              <h3 className="font-display text-lg font-bold text-ink">
                Straight answers on cost and fit
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                We quote after a free audit and tell you if it&apos;s not a fit.
              </p>
            </Card>
          </div>
        </Section>

        <Section
          id="what-we-do"
          eyebrow="Services"
          heading="Small Business SEO Services in Niagara"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHAT_WE_DO.map((item) => (
              <ServiceCard
                key={item.title}
                number={item.number}
                title={item.title}
                description={item.description}
                href={item.href}
              />
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            Need a site built to rank? See our{" "}
            <Link href="/web-design/niagara">Niagara web design services</Link>.
          </p>
        </Section>

        <Section>
          <h2>AI SEO Services for ChatGPT &amp; Gemini Search</h2>
          <p className="mt-4 text-muted">
            We structure your content, business details and reviews so ChatGPT and
            Gemini can recommend you. See our{" "}
            <Link href="/ai-search">AI search services</Link>.
          </p>
        </Section>

        <Section
          id="areas"
          eyebrow="Where we work"
          heading="Areas served"
        >
          <p className="mt-4 text-muted">
            We serve St. Catharines, Niagara Falls,{" "}
            {AREA_CITIES.map((city, idx) => (
              <span key={city.href}>
                <Link href={city.href}>{city.name}</Link>
                {idx < AREA_CITIES.length - 1 ? ", " : "."}
              </span>
            ))}{" "}
            Pelham, West Lincoln, Smithville and Wainfleet.
          </p>
        </Section>

        <Section
          id="industries"
          heading="SEO for Niagara Industries"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRY_CARDS.map((item) => (
              <Card
                key={item.href}
                interactive
                className="flex h-full flex-col"
              >
                <Badge tone="accent" className="self-start">
                  {item.category}
                </Badge>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {item.displayName}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {item.benefit}
                </p>

                <Link
                  href={item.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                >
                  Learn more
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-8">
            <Link href="/industries">View all industries</Link>
          </div>
        </Section>

        <Section id="contact">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-warm-gradient px-6 py-14 text-center shadow-lift sm:px-12 sm:py-16">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-grid opacity-20"
            />
            <span
              aria-hidden="true"
              className="orb -left-10 top-0 h-56 w-56 bg-gold-bright/30"
            />
            <span
              aria-hidden="true"
              className="orb -right-8 bottom-0 h-56 w-56 bg-accent/40"
            />
            <div className="relative flex flex-col items-center">
              <h2 className="text-balance font-display text-h2 font-bold leading-[1.12] tracking-[-0.02em] text-white">
                Claim Your Free Local SEO Audit
              </h2>
              <p className="mt-4 text-lead text-contrast-ink/90">
                Get a clear look at your local visibility.
              </p>
              <p className="mt-3 max-w-2xl text-sm text-contrast-ink/80">
                We&apos;ll show you where you stand and what to fix first.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href={AUDIT_URL} size="lg">
                  Get your free SEO audit
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="faq"
          className="border-t border-border"
          heading="Frequently Asked Questions"
        >
          <div className="mt-8">
            <Accordion items={FAQ_ITEMS} />
          </div>
        </Section>

        <Section
          id="blog"
          className="border-y border-border bg-brand-wash"
          eyebrow="Learn"
          heading="Blog"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map(({ id, title, image }) => (
              <Card key={id} interactive className="flex h-full flex-col">
                {image && (
                  <div className="relative mb-4 h-40 overflow-hidden rounded-lg border border-border">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink">
                  <Link
                    className="transition-colors hover:text-accent"
                    href={`/posts/${id}`}
                  >
                    {title}
                  </Link>
                </h3>
                <Link
                  href={`/posts/${id}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                >
                  Read article
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const latestPosts = getLatestPosts(3).map(({ id, title, image }) => ({
    id,
    title,
    image,
  }));
  return {
    props: {
      latestPosts,
    },
  };
};
