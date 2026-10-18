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
  StatBlock,
  Accordion,
  TestimonialCard,
  Icon,
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
import test2 from "../../src/img/testimonial-brandi-may-niagara.png";
import test3 from "../../src/img/testimonial-sandro-visca-niagara.png";
import flatRock from "../../src/img/st-catharines-seo-results.jpg";
import delta from "../../src/img/niagara-seo-company-results.jpg";
import infused from "../../src/img/infused-agency-seo-niagara.png";
import reviews from "../../src/img/seo-niagara-reviews.png";

const TRUST = [
  { icon: "users", label: "50+ Niagara businesses helped" },
  { icon: "target", label: "Local SEO for Niagara businesses" },
  { icon: "map-pin", label: "Based in St. Catharines" },
  { icon: "clock", label: "Over 10 years of local SEO" },
];

const CITIES = [
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

const AFFILIATES = [
  { icon: "search", label: "Google Partner", note: "Certified agency" },
  { icon: "users", label: "Niagara Chamber", note: "Member" },
  { icon: "star", label: "Three Best Rated", note: "Top-rated local" },
  { icon: "check", label: "GoodFirms", note: "Verified reviews" },
  { icon: "spark", label: "DesignRush", note: "Listed agency" },
  { icon: "chat", label: "Google Reviews", note: "40+ five-star" },
];

const AREA_PARAGRAPHS = [
  "We work with businesses right across the Niagara region, with support tailored to each community listed below. Based in St. Catharines, our team meets local owners in person to build complete search campaigns, from Google Business Profiles and map rankings to modern AI search. We bring the same local knowledge to Niagara Falls, helping businesses handle seasonal swings and stay visible to residents and visitors year-round. Explore your city below to see how we can help your brand grow.",
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

const MARKET_PARAGRAPHS = [
  "Local search across Niagara is busy, and the decision happens before anyone calls. A homeowner in St. Catharines, Welland or Grimsby weighs a few options on Google and the map, then reaches out. Miss that short list and the job usually goes to a competitor.",
  "A good local SEO partner treats that short list as the whole game. Local search is where the calls start, and it rewards a complete, well-managed Google Business Profile. We focus on searches that end in a phone call. Local proof usually decides it.",
  "The goal is not vanity rankings but more qualified enquiries from the communities you serve, so your week fills with customers ready to talk.",
];

const LOCAL_SEO_PARAGRAPHS = [
  "On most searches, the first thing a customer sees is a map with three businesses. Winning a spot there in St. Catharines or Niagara Falls is often worth more than the result underneath. A complete, well-managed Google Business Profile is the foundation, and local SEO in Niagara starts there.",
  "Focused work beats trying to compete with the whole internet. As a local SEO company, we help you own the services and towns where buyers look for help. Relevance matters far more than volume. Our St. Catharines SEO work starts with your Google Business Profile and the map rankings that bring in calls.",
  "A growing share of customers now ask ChatGPT, Gemini or a Google AI Overview to recommend a local business, so we plan for those results as part of our work. Those tools draw on clear, consistent information and genuine reviews, so the groundwork that helps you rank also helps you get named.",
];

const LOCAL_SEO_DELIVERABLES = [
  "Local SEO services built around what you sell",
  "Google Business Profile optimization",
  "City pages for the cities and towns you serve",
  "Reviews and trust signals that reassure buyers",
  "Technical fixes that keep your site fast and crawlable",
];

const WHAT_WE_DO = [
  {
    number: "1",
    title: "Local SEO and Google Business Profile",
    href: "/seo/local-seo",
    description:
      "We optimise your listing, reviews and local signals so you appear in the map for the right services and towns.",
  },
  {
    number: "2",
    title: "Service pages for each thing you sell",
    href: "/seo/content-writing",
    description:
      "Every service gets its own page, written around the words customers use when ready to buy.",
  },
  {
    number: "3",
    title: "City-by-city coverage",
    href: "/seo",
    description:
      "We build genuine relevance for each community you serve, from St. Catharines out to the smaller towns.",
  },
  {
    number: "4",
    title: "Technical SEO",
    href: "/seo/technical-seo",
    description:
      "We fix speed, indexing and structure so search engines can crawl and trust your site.",
  },
  {
    number: "5",
    title: "Content and links",
    href: "/seo/link-building",
    description:
      "Useful content and relevant links build the authority that keeps rankings steady over time.",
  },
  {
    number: "6",
    title: "AI search",
    href: "/ai-search",
    description:
      "We structure your content so assistants like ChatGPT and Gemini are more likely to recommend you.",
  },
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

const Home = ({ latestPosts, industries = [] }) => {
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
          SEO Niagara, St. Catharines &amp; Niagara Falls | Local SEO Company
          &amp; AI SEO Agency | Infused Agency
        </title>
        <meta
          name="description"
          content="Niagara SEO company for St. Catharines, Niagara Falls and the wider region: local SEO, Google Business Profile optimization and AI search, with a free consultation. Based in Niagara, Ontario, Canada."
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
                <Badge>Local SEO &amp; AI Search</Badge>
                <h1 className="mt-5 max-w-3xl text-balance font-display text-display font-bold leading-[1.04] tracking-[-0.03em] text-ink">
                  Niagara SEO <span className="text-gradient">Company</span>
                </h1>
                <p className="mt-5 text-lead text-muted">
                  Infused Agency helps Niagara businesses get found on Google
                  and recommended by AI assistants. We plan local SEO, content
                  and technical work from St. Catharines for companies across
                  Niagara Falls and the wider region, so more of the right
                  customers find you. If you are looking for an SEO company St. Catharines
                  business owners can meet in person, we are based in St. Catharines and
                  work with businesses across Niagara in person.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="/get-a-quote" size="lg">
                    Book a free consultation
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </Button>
                  <Button href="/services" variant="secondary" size="lg">
                    Explore our services
                  </Button>
                </div>
                <p className="mt-4 text-sm text-muted">
                  Serving St. Catharines, Niagara Falls and the Niagara Region.
                </p>
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
                    Get your free quote
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
              Recognised and affiliated
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
          </Container>
        </section>

        <Section
          id="market"
          eyebrow="Niagara market"
          heading="SEO and AI search for Niagara, St. Catharines and Niagara Falls businesses"
        >
          <div className="max-w-3xl space-y-4 text-lead text-muted">
            {MARKET_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section
          id="results"
          className="border-t border-border"
          eyebrow="Proof"
          heading="Real results for Niagara businesses"
          subhead="As a local SEO agency serving Niagara, we track rankings, traffic and leads and let the numbers do the talking. Here is a sample of what we've produced for local clients."
        >
          <div className="reveal relative overflow-hidden rounded-2xl bg-warm-gradient p-6 shadow-lift sm:p-8">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-grid opacity-20"
            />
            <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <StatBlock
                value="+550%"
                label="Local visibility, Flat Rock Cellars"
              />
              <StatBlock
                value="+670%"
                label="Local visibility, Delta Energy Solutions"
              />
              <StatBlock value="50+" label="Clients helped with SEO" />
              <StatBlock value="100s" label="High-intent keywords ranked" />
            </div>
          </div>

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
              quote="Infused Agency got me a lot more visibility through Google in a short period of time. Which has led to a ton of leads for my business. Very knowledgeable and they walk you through every detail. Would definitely recommend!"
              person="Lucas Folino"
              role="Owner"
              company="Fred's Concrete"
            />
            <TestimonialCard
              showStars
              avatar={test2}
              avatarAlt="Brandi May, owner of Brandi May Psychotherapy, a Niagara client of Infused Agency"
              quote="Infused Agency are not only clear professionals and expert in their fields, but are extremely personable to work with. I would definitely recommend Infused Agency to anyone looking to optimize SEO!"
              person="Brandi May"
              role="Owner"
              company="Brandi May Psychotherapy"
            />
            <TestimonialCard
              showStars
              avatar={test3}
              avatarAlt="Sandro Visca, owner of VISCA Electric, a Niagara client of Infused Agency"
              quote="Working with Infused Agency was a pleasure. They were extremely responsive and informative from start to finish. Infused Agency is creative, efficient, and very knowledgeable in their field."
              person="Sandro Visca"
              role="Owner"
              company="VISCA Electric"
            />
          </div>

          <div className="mt-10">
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
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
          </div>
        </Section>

        <Section
          id="why-local-seo"
          className="border-y border-border bg-surface/40"
          eyebrow="Why it matters"
          heading="Why Niagara businesses need local SEO"
        >
          <div className="max-w-3xl space-y-4 text-lead text-muted">
            {LOCAL_SEO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {LOCAL_SEO_DELIVERABLES.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="icon-tile mt-0.5 h-7 w-7 shrink-0">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <span className="text-sm text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="areas"
          eyebrow="Where we work"
          heading="Local SEO across St. Catharines, Niagara Falls and the Niagara Region"
        >
          <div className="max-w-3xl space-y-4 text-lead text-muted">
            {AREA_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CITIES.map((city) => (
              <li key={city.href}>
                <Card interactive className="group flex h-full flex-col">
                  <div className="flex items-center gap-3">
                    <span className="icon-tile h-11 w-11 shrink-0">
                      <Icon name="map-pin" className="h-5 w-5" />
                    </span>
                    <p className="font-display text-lg font-bold text-ink">
                      {city.name}
                    </p>
                  </div>
                  <div className="mt-5 flex flex-col gap-2 border-t border-border pt-5 text-sm">
                    <Link
                      href={city.href}
                      className="flex items-center justify-between rounded-lg px-3 py-2 font-semibold text-accent transition-colors hover:bg-accent/10 hover:text-accent-hover"
                    >
                      <span>SEO in {city.name}</span>
                      <Icon
                        name="arrow-right"
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>
                    <Link
                      href="/seo/local-seo"
                      className="flex items-center justify-between rounded-lg px-3 py-2 font-semibold text-accent transition-colors hover:bg-accent/10 hover:text-accent-hover"
                    >
                      <span>Local SEO in {city.name}</span>
                      <Icon
                        name="arrow-right"
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="why-infused"
          className="border-y border-border bg-surface/40"
          eyebrow="Why Infused"
          heading="Why Niagara businesses choose Infused Agency"
          subhead="Niagara is not a generic market. Tourism, seasonality and a wide service area change what works, so we plan around how local businesses here actually get hired."
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="flex h-full flex-col">
              <h3 className="font-display text-lg font-bold text-ink">
                Planned around Niagara's seasons
              </h3>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
                <p>
                  Demand rises and falls with the seasons, from summer tourism
                  to the spring and fall home-improvement rush. We time your
                  pages, content and Google Business Profile activity to the
                  months that matter, so your SEO is working when demand peaks.
                </p>
              </div>
            </Card>
            <Card className="flex h-full flex-col">
              <h3 className="font-display text-lg font-bold text-ink">
                Enquiries, not empty traffic
              </h3>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
                <p>
                  We measure what connects to revenue:
                </p>
              </div>
              <ul className="mt-5 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="icon-tile mt-0.5 h-7 w-7 shrink-0">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-muted">
                    rankings for the services you sell
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="icon-tile mt-0.5 h-7 w-7 shrink-0">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-muted">
                    calls and form fills per page
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="icon-tile mt-0.5 h-7 w-7 shrink-0">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-muted">
                    Google Business Profile calls and directions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="icon-tile mt-0.5 h-7 w-7 shrink-0">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-muted">
                    which towns produce enquiries
                  </span>
                </li>
              </ul>
            </Card>
            <Card className="flex h-full flex-col">
              <h3 className="font-display text-lg font-bold text-ink">
                Written by people who know local search
              </h3>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
                <p>
                  We know how the map pack, reviews and AI answers decide who
                  gets recommended in St. Catharines, Niagara Falls and the
                  towns around them.
                </p>
              </div>
            </Card>
            <Card className="flex h-full flex-col">
              <h3 className="font-display text-lg font-bold text-ink">
                Straight answers on cost and fit
              </h3>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
                <p>
                  What SEO costs depends on your competition, your site and how
                  many services and towns you cover, so we quote each business
                  individually after a free audit. If SEO is not the right fit
                  yet, we will tell you.
                </p>
              </div>
            </Card>
          </div>
          <div className="mt-10">
            <Button href="/get-a-quote" size="lg">
              Book a free consultation
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </div>
        </Section>

        <Section
          id="what-we-do"
          eyebrow="Services"
          heading="What we do for Niagara businesses"
          subhead="Everything we do for search is in one place, so our services are easy to compare. Each service links to a page with the detail, process and proof behind it."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHAT_WE_DO.map((item) => (
              <ServiceCard
                key={item.href}
                number={item.number}
                title={item.title}
                description={item.description}
                href={item.href}
              />
            ))}
          </div>
        </Section>

        <Section
          id="faq"
          className="border-t border-border"
          eyebrow="FAQ"
          heading="Frequently asked questions"
          subhead="The questions we hear most from Niagara business owners."
        >
          <Accordion items={HOME_FAQS} />
        </Section>

        <Section
          id="industries"
          eyebrow="Industries"
          heading="SEO built around your industry"
          subhead="Some industries have their own search behaviour, competition and rules. We build search programmes around how a specific industry actually gets found, right here in the Niagara region."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((item) => (
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
                <p className="mt-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-muted">
                  <Icon name="map-pin" className="h-4 w-4 text-accent" />
                  {item.coverage}
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
            <span className="text-sm font-semibold text-ink">
              Featured for therapists:
            </span>
            <Badge as={Link} href="/therapist-seo" tone="muted">
              SEO for Therapists in Canada
              <Icon name="arrow-right" className="h-4 w-4" />
            </Badge>
            <Badge as={Link} href="/therapist-seo/usa" tone="muted">
              SEO for Therapists in the USA
              <Icon name="arrow-right" className="h-4 w-4" />
            </Badge>
          </div>
        </Section>

        <Section
          id="blog"
          className="border-y border-border bg-brand-wash"
          eyebrow="Learn"
          heading="Latest Blog Posts"
          subhead="Practical guides on local SEO, AI search and marketing for Niagara businesses."
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
                Ready to grow your{" "}
                <span className="text-gold-bright">business?</span>
              </h2>
              <p className="mt-4 text-lead text-contrast-ink/90">
                Tell us your goals and we will book a free consultation with an
                SEO consultant in Niagara. No obligation, no jargon.
              </p>
              <p className="mt-3 max-w-2xl text-sm text-contrast-ink/80">
                You will speak with an SEO expert in Niagara, not a call centre.
                We plan your work with people who know the Niagara market.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/get-a-quote" size="lg">
                  Start your free strategy call
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  See all services
                </Button>
              </div>
              <p className="mt-6 max-w-2xl text-sm text-contrast-ink/75">
                Free consultation. We reply within one business day, and if we
                are not the right fit we will point you to someone who is.
              </p>
            </div>
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
  const { buildIndustriesProps } = require("../lib/verticalSeo");
  const industries = buildIndustriesProps().homepageItems;
  return {
    props: {
      latestPosts,
      industries,
    },
  };
}
