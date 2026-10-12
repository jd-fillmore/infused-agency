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
import { GROUPS, INDUSTRIES, DESCRIPTIONS } from "../../components/Nav/navData";
import { HOME_FAQS } from "../lib/homeFaqs";
import { homeGraph } from "../lib/verticalSeoSchema";

import feat1 from "../../src/img/feat-suk-law.png";
import feat2 from "../../src/img/feat-flat-rock.png";
import feat3 from "../../src/img/feat-fred.png";
import feat4 from "../../src/img/feat-north.png";
import feat5 from "../../src/img/feat-kd.png";
import feat6 from "../../src/img/feat-delta.png";
import feat7 from "../../src/img/feat-brandi.png";
import feat8 from "../../src/img/feat-jerry.png";
import test1 from "../../src/img/seo-company-niagara.png";
import test2 from "../../src/img/seo-niagara-experts.png";
import test3 from "../../src/img/seo-niagara-services.png";

const TRUST = [
  { icon: "users", label: "50+ Niagara businesses helped" },
  { icon: "target", label: "Proven, named local results" },
  { icon: "map-pin", label: "Based in St. Catharines" },
  { icon: "layers", label: "SEO and web design in one team" },
];

const START_PATHS = [
  {
    number: "1",
    title: "Local SEO",
    href: "/seo/local-seo",
    description:
      "Own the local pack and Google Maps for your services in the Niagara region.",
  },
  {
    number: "2",
    title: "Technical SEO",
    href: "/seo/technical-seo",
    description:
      "Fix crawl, speed, indexing and structured data problems holding rankings back.",
  },
  {
    number: "3",
    title: "Content Writing",
    href: "/seo/content-writing",
    description:
      "Pages and articles that answer real buyer questions and convert the visit.",
  },
  {
    number: "4",
    title: "AI Search",
    href: "/ai-search",
    description:
      "Get cited and recommended in ChatGPT, Gemini and Google AI Overviews.",
  },
];

const BUYER_GUIDES = [
  { label: "All services", href: "/services" },
  { label: "Our work", href: "/work" },
  { label: "Get a quote", href: "/get-a-quote" },
];

const INTENT_PATHS = [
  {
    title: "Grow organic traffic and leads",
    href: "/seo",
    description:
      "A full SEO programme covering technical health, content, links and reporting so you rank and stay ranked.",
    cta: "Explore SEO",
  },
  {
    title: "Get found by nearby customers",
    href: "/seo/local-seo",
    description:
      "Local SEO for your Google Business Profile, Maps presence and city-level pages across Niagara.",
    cta: "Explore local SEO",
  },
  {
    title: "Launch a website that converts",
    href: "/web-design",
    description:
      "Fast, accessible, conversion-focused web design and development built to support search from day one.",
    cta: "Explore web design",
  },
];

const STEPS = [
  {
    number: "1",
    title: "Research and competitive analysis",
    description:
      "We review your site, study your local competitors and map the keywords and pages that can actually bring in enquiries.",
  },
  {
    number: "2",
    title: "On-page SEO",
    description:
      "We improve titles, headings, internal links, structured data and content so every important page is clear to search engines.",
  },
  {
    number: "3",
    title: "Off-page SEO",
    description:
      "We earn relevant, authoritative links and keep your citations and profiles consistent so trust compounds over time.",
  },
  {
    number: "4",
    title: "Campaign report",
    description:
      "You get transparent reporting on rankings, traffic and leads, plus a clear plan for what we optimise next.",
  },
];

const TOGETHER = [
  {
    icon: "layers",
    title: "One team for web and search",
    description:
      "Design, development and SEO sit together, so your site is built to be found, not retrofitted for search after launch.",
  },
  {
    icon: "bolt",
    title: "Launch without losing rankings",
    description:
      "We plan migrations, redirects and URL structure carefully so new pages keep the visibility your old ones earned.",
  },
  {
    icon: "spark",
    title: "Optimise after launch",
    description:
      "Once a site is live we keep improving speed, structure and content based on how people actually search and convert.",
  },
];

const WHY = [
  {
    icon: "target",
    title: "Real, named results",
    description:
      "Local visibility grew by 550% for Flat Rock Cellars and 670% for Delta Energy Solutions after our SEO work.",
  },
  {
    icon: "users",
    title: "50+ clients helped",
    description:
      "Over 50 clients helped, ranking for hundreds of long-tail, high-buying-intent keywords, with more leads to show for it.",
  },
  {
    icon: "map-pin",
    title: "Local, not remote",
    description:
      "We are based in St. Catharines and work with businesses across the Niagara region face to face.",
  },
  {
    icon: "search",
    title: "Built for how people search now",
    description:
      "Alongside classic SEO we optimise for AI answers, so your business is the one assistants recommend.",
  },
];

const CITIES = [
  { name: "St. Catharines", href: "/seo/st-catharines" },
  { name: "Niagara Falls", href: "/seo/niagara-falls" },
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
  "Google Partner",
  "Niagara Chamber of Commerce",
  "Three Best Rated",
  "GoodFirms",
  "DesignRush",
  "Google Reviews",
];

const CLIENT_LOGOS = [
  { src: feat1, alt: "Suk Law" },
  { src: feat2, alt: "Flat Rock Cellars" },
  { src: feat3, alt: "Fred’s Concrete" },
  { src: feat4, alt: "UPHI Cannabis" },
  { src: feat5, alt: "KD Flowers" },
  { src: feat6, alt: "Delta Energy Solutions" },
  { src: feat7, alt: "Brandi May Psychotherapy" },
  { src: feat8, alt: "Jerry’s Insulating" },
];

const NUMBERED_GROUPS = (() => {
  let counter = 0;
  return GROUPS.map((group) => ({
    heading: group.heading,
    links: group.links.map((link) => {
      counter += 1;
      return { ...link, number: counter };
    }),
  }));
})();

const Home = () => {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(homeGraph({ faqs: HOME_FAQS })),
          }}
        />

        <title>SEO Niagara | Grow Traffic &amp; Local Leads</title>
        <meta
          name="description"
          content="SEO Niagara by Infused Agency. Grow your traffic and generate more local leads with proven SEO strategies. Serving St. Catharines, Niagara Falls and the Niagara region."
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
        <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 glow-radial opacity-70"
        />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge>Niagara SEO &amp; AI Search</Badge>
              <h1 className="mt-5 max-w-3xl text-balance font-display text-display font-bold leading-[1.04] tracking-[-0.03em] text-ink">
                Niagara SEO and{" "}
                <span className="text-gradient">AI SEO Services</span>
              </h1>
              <p className="mt-5 text-lead text-muted">
                Infused Agency helps Niagara businesses rank on Google and get
                recommended by AI assistants. We combine local SEO, technical
                SEO and content with fast, conversion-focused web design so more
                of the right people find you and get in touch.
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
              <Card glow className="lg:max-w-md">
                <h2 className="font-display text-h3 font-bold text-ink">
                  Start your project today
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Book a free, no-obligation consultation. Tell us where your
                  business is today and where you want it to be, and we will
                  show you the fastest way there.
                </p>
                <Button href="/get-a-quote" size="lg" className="mt-6 w-full">
                  Get your free quote
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Button>
                <p className="mt-6 border-t border-border pt-5 text-xs leading-relaxed text-muted">
                  Book in under two minutes. Free consultation, no tedious forms,
                  no obligation.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface/60 py-10">
        <Container>
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Recognised and affiliated
          </p>
          <ul className="grid grid-cols-2 items-center gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {AFFILIATES.map((name) => (
              <li key={name} className="flex justify-center">
                <span className="inline-flex items-center rounded-full border border-border bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-muted">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section
        id="how-search-works"
        eyebrow="Why it matters"
        heading="How people find your business has changed"
      >
        <div className="max-w-3xl space-y-4 text-lead text-muted">
          <p>
            A decade ago most local searches started with a keyword typed into
            Google. Today they start with a question spoken to a phone, a map
            opened on the road, or a prompt typed into an AI assistant. The
            businesses that show up are the ones whose information is clear,
            complete and structured in a way search engines and AI tools can
            trust.
          </p>
          <p>
            That is the work we do at Infused Agency. We make your site
            technically sound, make sure your pages answer the questions buyers
            actually ask, keep your Google Business Profile complete and
            consistent, and build the kind of content and authority that both
            Google and AI models look for when they decide who to recommend.
          </p>
          <p>
            For Niagara businesses this matters more than ever. Your customers
            are nearby and choosing between you and a short list of competitors
            on the same map. Being findable, credible and easy to contact is the
            difference between a busy month and a quiet one.
          </p>
          <p>
            Whether you are starting from scratch or fixing a site that has
            stopped growing, the goal is the same: earn visibility you can
            measure in rankings, traffic and, most importantly, enquiries and
            revenue.
          </p>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Local visibility: appear in the map pack for the searches that matter.",
            "Trust: reviews, citations and clear copy that reassure buyers.",
            "Technical health: a fast, crawlable site that search engines index correctly.",
            "AI answers: content structured so assistants cite your business.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm text-muted">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="results"
        className="border-t border-border"
        eyebrow="Proof"
        heading="Real results for Niagara businesses"
        subhead="We track rankings, traffic and leads, and we let the numbers do the talking. Here is a sample of what our SEO work has produced for local clients."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatBlock value="+550%" label="Local visibility, Flat Rock Cellars" />
          <StatBlock value="+670%" label="Local visibility, Delta Energy Solutions" />
          <StatBlock value="50+" label="Clients helped with SEO" />
          <StatBlock value="100s" label="High-intent keywords ranked" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <TestimonialCard
            showStars
            avatar={test1}
            avatarAlt="Lucas Folino"
            quote="Infused Agency got me a lot more visibility through Google in a short period of time. Which has led to a ton of leads for my business. Very knowledgeable and they walk you through every detail. Would definitely recommend!"
            person="Lucas Folino"
            role="Owner"
            company="Fred’s Concrete"
          />
          <TestimonialCard
            showStars
            avatar={test2}
            avatarAlt="Brandi May"
            quote="Infused Agency are not only clear professionals and expert in their fields, but are extremely personable to work with. I would definitely recommend Infused Agency to anyone looking to optimize SEO!"
            person="Brandi May"
            role="Owner"
            company="Brandi May Psychotherapy"
          />
          <TestimonialCard
            showStars
            avatar={test3}
            avatarAlt="Sandro Visca"
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
          <ul className="grid grid-cols-2 items-center gap-6 sm:grid-cols-4 lg:grid-cols-8">
            {CLIENT_LOGOS.map((item) => (
              <li key={item.alt} className="flex justify-center">
                <div className="relative h-8 w-20">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="80px"
                    className="object-contain opacity-75"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        id="where-to-start"
        className="border-y border-border bg-surface/40"
        eyebrow="Where to start"
        heading="Pick the problem you want to solve first"
        subhead="You do not have to buy everything at once. These are the four most common starting points for Niagara businesses, each with its own service page."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {START_PATHS.map((item) => (
            <ServiceCard
              key={item.href}
              number={item.number}
              title={item.title}
              description={item.description}
              href={item.href}
            />
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="text-sm font-semibold text-ink">
            Still deciding? Read the guides:
          </span>
          {BUYER_GUIDES.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-hover"
            >
              {guide.label}
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </Section>

      <Section
        id="services"
        eyebrow="Services"
        heading="Niagara SEO and AI search services"
        subhead="Everything we do is grouped into four areas. Each service links to a page with the detail, process and proof behind it."
      >
        <div className="space-y-12">
          {NUMBERED_GROUPS.map((group) => (
            <div key={group.heading}>
              <h3 className="font-display text-h3 font-bold text-ink">
                {group.heading}
              </h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {group.links.map((link) => (
                  <ServiceCard
                    key={link.url}
                    number={link.number}
                    title={link.name}
                    description={DESCRIPTIONS[link.url]}
                    href={link.url}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="paths"
        className="border-y border-border bg-surface/40"
        eyebrow="Choose your path"
        heading="Not sure what you need? Start from your goal"
        subhead="Most businesses arrive with one of three goals. Pick the closest one and we will map the work from there."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {INTENT_PATHS.map((item) => (
            <Card key={item.href} gradient className="flex h-full flex-col">
              <h3 className="font-display text-h3 font-bold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              <Button href={item.href} variant="secondary" className="mt-6 self-start">
                {item.cta}
                <Icon name="arrow-right" className="h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="process"
        eyebrow="Our process"
        heading="A process you can follow at every step"
        subhead="No black boxes. Here is the same four-step process we run for every SEO engagement."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <Card key={step.number} className="h-full">
              <span className="font-display text-2xl font-bold text-accent">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/services" variant="secondary">
            See our services
            <Icon name="arrow-right" className="h-4 w-4" />
          </Button>
        </div>
      </Section>

      <Section
        id="together"
        className="border-y border-border bg-surface/40"
        eyebrow="Web design + SEO"
        heading="A website and search strategy that work together"
        subhead="Search engines reward fast, well-structured sites. We build for people and search at the same time, so you are not choosing between a good-looking site and a findable one."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {TOGETHER.map((item) => (
            <Card key={item.title} className="h-full">
              <Icon name={item.icon} className="h-6 w-6 text-accent" />
              <h3 className="mt-4 text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="why"
        eyebrow="Why Infused"
        heading="Why Niagara businesses choose Infused Agency"
        subhead="You want a partner who shows their work and gets local search. Here is what sets us apart."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((item) => (
            <Card key={item.title} className="h-full">
              <Icon name={item.icon} className="h-6 w-6 text-accent" />
              <h3 className="mt-4 text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="industries"
        className="border-y border-border bg-surface/40"
        eyebrow="Industries"
        heading="SEO built around your industry"
        subhead="Some industries have their own search behaviour, competition and rules. Where we have published a dedicated programme, we link to it below."
      >
        <p className="max-w-3xl text-lead text-muted">
          Our first dedicated industry programme is for therapists and
          counsellors, who compete with directories like Psychology Today and
          rely on trust and fit more than price. We are building the same
          depth for contractor industries such as concrete, insulation,
          electrical, roofing, plumbing and HVAC, and will publish those
          programmes as they are ready.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {INDUSTRIES.map((industry) => (
            <Badge key={industry.url} as={Link} href={industry.url} tone="muted">
              {industry.name}
              <Icon name="arrow-right" className="h-4 w-4" />
            </Badge>
          ))}
        </div>
      </Section>

      <Section
        id="areas"
        eyebrow="Where we work"
        heading="Serving businesses across Niagara"
        subhead="We work with businesses throughout the Niagara region. Each city below has its own local SEO page."
      >
        <ul className="flex flex-wrap gap-3">
          {CITIES.map((city) => (
            <li key={city.href}>
              <Link
                href={city.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm text-ink transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Icon name="map-pin" className="h-4 w-4 text-accent" />
                {city.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-sm text-muted">
          Our vertical SEO programmes also run across Canada, province by
          province, so businesses outside Niagara can work with us remotely.
        </p>
      </Section>

      <Section
        id="faq"
        className="border-y border-border bg-surface/40"
        eyebrow="FAQ"
        heading="Frequently asked questions"
        subhead="The questions we hear most from Niagara business owners about SEO, AI search and how our engagements work."
      >
        <Accordion items={HOME_FAQS} />
      </Section>

      <Section id="contact">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-balance font-display text-h2 font-bold leading-[1.12] tracking-[-0.02em] text-ink">
            Ready to grow your{" "}
            <span className="text-gradient">business?</span>
          </h2>
          <p className="mt-4 text-lead text-muted">
            Tell us a little about your goals and we will get back to you to
            book a free consultation. No obligation, no jargon.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            On the call we review where your business shows up today, the
            searches your customers actually use, and the fastest path to more
            qualified enquiries. You will leave with a clear plan you can act
            on whether or not you work with us, plus straightforward pricing
            and timelines if you would like us to run it for you.
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
          <p className="mt-6 max-w-2xl text-sm text-muted">
            Free consultation — no obligation, no jargon. We reply within one
            business day, and every recommendation is tied to revenue, not
            vanity metrics. If we are not the right fit, we will point you to
            someone who is.
          </p>
        </div>
      </Section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
