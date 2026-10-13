import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

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
import { GROUPS, DESCRIPTIONS } from "../../components/Nav/navData";
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
import test1 from "../../src/img/seo-company-niagara.png";
import test2 from "../../src/img/seo-niagara-experts.png";
import test3 from "../../src/img/seo-niagara-services.png";
import flatRock from "../../src/img/st-catharines-seo-results.jpg";
import delta from "../../src/img/niagara-seo-company-results.jpg";
import infused from "../../src/img/infused-agency-seo-niagara.png";
import reviews from "../../src/img/seo-niagara-reviews.png";

const TRUST = [
  { icon: "users", label: "50+ Niagara businesses helped" },
  { icon: "target", label: "Proven, named local results" },
  { icon: "map-pin", label: "Based in St. Catharines" },
  { icon: "clock", label: "Over 10 years of local SEO" },
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

const SEO_GROUP = GROUPS.find((group) => group.heading === "SEO") || {
  heading: "SEO",
  links: [],
};

const SEO_SERVICES = [
  {
    title: "Keyword Research & Strategy",
    href: "/seo",
    icon: "search",
    paragraphs: [
      "At Infused Agency, our search engine optimization specialists begin every campaign with detailed keyword research. We identify the most relevant and profitable search terms your customers are using in your local market and beyond. By analyzing your website, competitors, and industry trends, we craft a data-driven search engine optimization strategy designed to capture qualified traffic and deliver measurable results.",
      "Our research goes beyond basic keyword tools — we analyze search intent, seasonal trends, and local search patterns to ensure we're targeting terms that actually convert into customers for your business.",
    ],
  },
  {
    title: "Link Building",
    href: "/seo/link-building",
    icon: "link",
    paragraphs: [
      "A strong backlink profile is essential for higher rankings. Our search engine optimization services include ethical link-building strategies that earn high-quality links from reputable websites. These authoritative backlinks boost your domain authority, build trust with search engines, and strengthen your overall online credibility.",
      "We focus on earning links from relevant industry publications, local business directories, community organizations, and other high-authority websites that genuinely add value to your link profile. Every link we pursue follows Google's guidelines and contributes to long-term success.",
    ],
  },
  {
    title: "Content Writing",
    href: "/seo/content-writing",
    icon: "pencil",
    paragraphs: [
      "Content is the foundation of effective search engine optimization. Our content writing team creates engaging copy tailored to your business and industry. From optimized blog posts to service pages and landing pages, we develop content that reflects your brand's voice, establishes thought leadership, and improves rankings for your target keywords.",
      "Every piece of content we create serves dual purposes: providing genuine value to your website visitors while strategically targeting the search terms your potential customers use. We balance search optimization with readability to ensure your content performs well in search results and converts visitors into customers.",
    ],
  },
  {
    title: "On-Page SEO",
    href: "/seo",
    icon: "layout",
    paragraphs: [
      "Our search engine optimization experts optimize your website's structure, code, and content to ensure it performs at its best. We conduct in-depth audits, refine metadata, improve internal linking, and enhance site usability — all while aligning with Google's ranking factors. The result is a website that attracts both search engines and users.",
      "Our on-page optimization covers every detail, from title tags and meta descriptions to header structures, image optimization, and page loading speeds. We ensure each page on your website is fully optimized for both your target keywords and user experience.",
    ],
  },
  {
    title: "Local SEO",
    href: "/seo/local-seo",
    icon: "map-pin",
    paragraphs: [
      "For local businesses, regional visibility is crucial. Infused Agency ensures your business is optimized for local searches by improving your Google Business Profile, building local citations, and creating location-specific content. These strategies help you appear in Google's Local Pack, maps, and other high-visibility areas where potential customers are searching.",
      "Our local search engine optimization approach includes managing online reviews, optimizing for \"near me\" searches, and ensuring your business information is consistent across all online directories. We help you dominate local search results and attract customers in your immediate service area.",
    ],
  },
  {
    title: "Technical SEO",
    href: "/seo/technical-seo",
    icon: "code",
    paragraphs: [
      "Behind every successful campaign is a strong technical foundation. Our technical search engine optimization specialists enhance your site's speed, mobile performance, indexing, and security. From fixing crawl errors to optimizing site architecture, we make sure search engines can easily navigate and rank your website.",
      "We address issues like site speed optimization, mobile responsiveness, SSL certificates, structured data markup, and XML sitemaps. Our technical audits identify and resolve problems that could be preventing your website from reaching its full ranking potential.",
    ],
  },
];

const COMMITMENTS = [
  {
    icon: "users",
    title: "Client-Focused Services",
    body: "At Infused Agency, we treat your business like it's our own. Your success is the measure of our success, which is why we take the time to understand your goals and challenges. Each client works with a dedicated search engine optimization specialist who provides personalized attention and ongoing monitoring to deliver the best possible results.",
  },
  {
    icon: "clock",
    title: "Continuous Optimization",
    body: "Search engine optimization isn't a one-time project — it's an ongoing process. Our team of local search engine optimization experts constantly tracks your website's performance, adapting strategies to keep pace with Google's updates and industry changes. This ensures your business stays competitive and visible in local search results.",
  },
  {
    icon: "check",
    title: "Affordable SEO Solutions",
    body: "We believe in delivering exceptional value without unexpected costs. Infused Agency offers affordable local search engine optimization services with transparent pricing and no hidden fees. Whether you're a small business or a growing company, our solutions are designed to fit your budget while generating long-term results.",
  },
  {
    icon: "layers",
    title: "Transparent Reporting",
    body: "You'll never be left in the dark about your search engine optimization campaign. Our clear, detailed reports give you full visibility into how your website is performing and the steps we're taking to improve it. With Infused Agency, you can expect consistent updates and honest communication every step of the way.",
  },
  {
    icon: "search",
    title: "Backed by Google Expertise",
    body: "Our SEO specialists stay ahead of the curve with deep knowledge of Google's latest updates, best practices, and ethical search engine optimization strategies. By following proven, white-hat methods, we help your website achieve sustainable rankings and long-term growth.",
  },
  {
    icon: "target",
    title: "Free SEO Audit",
    body: "Not sure how your website is performing? Infused Agency offers a complimentary audit for local businesses. We'll review your website's current performance, highlight opportunities for improvement, and provide recommendations tailored to your business goals — with no obligation.",
  },
];

const RESULT_IMAGES = [
  {
    src: flatRock,
    alt: "Flat Rock Cellars Niagara SEO results",
    name: "Flat Rock Cellars",
    industry: "Winery",
    stat: "+550%",
    statLabel: "local visibility",
  },
  {
    src: delta,
    alt: "Delta Energy Solutions Niagara SEO results",
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
              <Badge>Niagara SEO Company</Badge>
              <h1 className="mt-5 max-w-3xl text-balance font-display text-display font-bold leading-[1.04] tracking-[-0.03em] text-ink">
                Niagara SEO{" "}
                <span className="text-gradient">Company</span>
              </h1>
              <p className="mt-5 text-lead text-muted">
                Infused Agency is a Niagara SEO company that helps businesses
                across the region rank on Google and get recommended by AI
                assistants. We combine local SEO, technical SEO, content and AI
                search so more of the right people find you and get in touch.
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
        id="results"
        className="border-t border-border"
        eyebrow="Proof"
        heading="Real results for Niagara businesses"
        subhead="We track rankings, traffic and leads, and we let the numbers do the talking. Here is a sample of what our SEO work has produced for local clients."
      >
        <div className="reveal relative overflow-hidden rounded-2xl bg-warm-gradient p-6 shadow-lift sm:p-8">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-grid opacity-20"
          />
          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatBlock value="+550%" label="Local visibility, Flat Rock Cellars" />
            <StatBlock value="+670%" label="Local visibility, Delta Energy Solutions" />
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
            avatarAlt="Lucas Folino"
            quote="Infused Agency got me a lot more visibility through Google in a short period of time. Which has led to a ton of leads for my business. Very knowledgeable and they walk you through every detail. Would definitely recommend!"
            person="Lucas Folino"
            role="Owner"
            company="Fred's Concrete"
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
              className="group inline-flex items-center gap-1 text-sm text-accent hover:text-accent-hover"
            >
              {guide.label}
              <Icon name="arrow-right" className="arrow-nudge h-4 w-4" />
            </Link>
          ))}
        </div>
      </Section>

      <Section
        id="services"
        eyebrow="Services"
        heading="Niagara SEO and AI search services"
        subhead="Everything we do for search is grouped into one place. Each service links to a page with the detail, process and proof behind it."
      >
        <div className="space-y-12">
          <div>
            <h3 className="font-display text-h3 font-bold text-ink">
              {SEO_GROUP.heading}
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SEO_GROUP.links.map((link, index) => (
                <ServiceCard
                  key={link.url}
                  number={index + 1}
                  title={link.name}
                  description={DESCRIPTIONS[link.url]}
                  href={link.url}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="seo-services-details"
        className="border-y border-border bg-surface/40"
        eyebrow="What’s included"
        heading="Niagara SEO services that drive results"
        subhead="Get more visibility on Google and in AI search. These are the services our Niagara clients rely on most, with the detail behind each one."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {SEO_SERVICES.map((service) => (
            <Card key={service.title} className="h-full" interactive>
              <div className="mb-5 flex items-center gap-4">
                <span className="icon-tile h-12 w-12 shrink-0">
                  <Icon name={service.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-display text-h3 font-bold text-ink">
                  <Link
                    href={service.href}
                    className="transition-colors hover:text-accent"
                  >
                    {service.title}
                  </Link>
                </h3>
              </div>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
                {service.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="ai-search"
        eyebrow="AI search"
        heading="AI search optimization for Niagara businesses"
        subhead="Get cited and recommended when customers ask AI assistants for local recommendations."
      >
        <div className="max-w-3xl space-y-4 text-lead text-muted">
          <p>
            More customers are asking AI assistants like ChatGPT, Gemini and
            Google's AI Overviews for recommendations instead of scrolling
            through pages of traditional results. When they do, the businesses
            that get named are the ones whose content, citations and digital
            footprint are structured in a way AI models can read and trust.
          </p>
          <p>
            We help Niagara businesses get cited and recommended in AI answers
            by writing content that responds to the exact questions buyers ask,
            keeping business information consistent and complete, and building
            the kind of authority both search engines and AI tools reward.
          </p>
        </div>
        <div className="mt-8">
          <Button href="/ai-search" variant="secondary">
            Explore AI search
            <Icon name="arrow-right" className="h-4 w-4" />
          </Button>
        </div>
      </Section>

      <Section
        id="paths"
        className="border-y border-border bg-brand-wash"
        eyebrow="Choose your path"
        heading="Not sure what you need? Start from your goal"
        subhead="Most businesses arrive with one of two goals. Pick the closest one and we will map the work from there."
      >
        <div className="grid gap-6 md:grid-cols-2">
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
        heading="How search engine optimization works at Infused Agency"
        subhead="When you work with us, your search engine optimization project is custom, yet streamlined. Over the last 12 years, and working with businesses of every size across Niagara, we've crafted local SEO and AI search strategies that have held up through every major algorithm update. Here is a look into our process."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <Card key={step.number} className="h-full">
              <span className="font-display text-2xl font-bold text-brand-gradient">
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
        id="why"
        eyebrow="Why Infused"
        heading="Why Niagara businesses choose Infused Agency"
        subhead="You want a partner who shows their work and gets local search. Here is what sets us apart."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((item) => (
            <Card key={item.title} className="h-full">
              <span className="icon-tile h-11 w-11">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
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
        id="choose-infused"
        className="border-y border-border bg-surface/40"
        eyebrow="Partner with us"
        heading="Choosing Infused Agency as your local SEO partner"
      >
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-lead text-muted">
            <p>
              In today's competitive market, you can't afford to partner with
              just any digital marketing firm. You need a team that takes the
              time to understand your business goals, your brand's message, and
              the customers you want to reach. At Infused Agency, we go beyond
              surface-level strategies — our focus is on delivering real results
              that generate the highest possible return on your investment.
            </p>
            <h3 className="pt-2 font-display text-h3 font-bold text-ink">
              Our Approach
            </h3>
            <p>
              Our comprehensive search engine optimization process — Discover,
              Analyze, Strategize, Execute, Measure, Report, and Refine —
              ensures that your campaign is continuously optimized for growth.
              This agile methodology allows us to adapt to industry changes
              quickly while keeping your business ahead of competitors in local
              search results.
            </p>
            <h3 className="pt-2 font-display text-h3 font-bold text-ink">
              Supporting Local Businesses in Niagara
            </h3>
            <p>
              We understand the challenges local businesses face when trying to
              stand out online. That's why we specialize in helping regional
              entrepreneurs gain the tools and strategies needed to attract
              qualified leads, improve their local search presence, and compete
              effectively in their markets.
            </p>
            <p>
              With Infused Agency, you get more than just a search engine
              optimization provider. You get a partner who's invested in your
              long-term success with tailored local search engine optimization
              services that build credibility, visibility, and sustainable
              growth.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-border shadow-lift lg:max-w-none">
            <Image
              src={infused}
              alt="Infused Agency Niagara SEO team"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMMITMENTS.map((item) => (
            <Card key={item.title} className="h-full">
              <span className="icon-tile h-11 w-11">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="trusted-results"
        eyebrow="Why us"
        heading="Trusted Local SEO Experts with Proven Results"
      >
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-lead text-muted">
            <p>
              At Infused Agency, results speak for themselves. With over 50 SEO
              clients served and 40+ five-star Google reviews, we've built a
              reputation as a leading local search engine optimization agency in
              the region. Our clients consistently see measurable improvements
              in search rankings, website traffic, and lead generation.
            </p>
            <p>
              We're proud to have helped businesses of all sizes — from small
              startups to established companies — achieve stronger online
              visibility and higher conversions. Every strategy we implement is
              backed by data, tailored to your goals, and focused on delivering
              a real return on investment. Our most requested services are{" "}
              <Link
                href="/seo/local-seo"
                className="font-semibold text-accent hover:text-accent-hover"
              >
                local SEO for Niagara businesses
              </Link>
              ,{" "}
              <Link
                href="/therapist-seo"
                className="font-semibold text-accent hover:text-accent-hover"
              >
                SEO for Therapists in Canada
              </Link>
              ,{" "}
              <Link
                href="/therapist-seo/usa"
                className="font-semibold text-accent hover:text-accent-hover"
              >
                SEO for Therapists in the USA
              </Link>{" "}
              , and many more.
            </p>
            <p>
              When you work with Infused Agency, you're partnering with a
              trusted team that combines local market expertise, technical SEO
              skills, and AI search optimization to help your business dominate
              local search results and get recommended by AI tools like ChatGPT
              and Gemini.
            </p>
          </div>
          <div className="relative mx-auto aspect-[16/9] w-full max-w-md overflow-hidden rounded-2xl border border-border shadow-lift lg:max-w-none">
            <Image
              src={reviews}
              alt="Google reviews for Infused Agency Niagara SEO"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      <Section
        id="blog"
        className="border-y border-border bg-brand-wash"
        eyebrow="Learn"
        heading="Latest Blog Posts"
        subhead="Practical guides on local SEO, AI search and digital marketing written for Niagara businesses."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map(({ id, date, title, excerpt, image }) => (
            <Card key={id} interactive className="flex h-full flex-col">
              {image && (
                <div className="relative mb-4 h-40 overflow-hidden rounded-lg border border-border">
                  <Image
                    src={image}
                    alt={`Preview image for ${title}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <small className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                {format(new Date(date), "eeee, MMMM d, yyyy")}
              </small>
              <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink">
                <Link
                  className="transition-colors hover:text-accent"
                  href={`/posts/${id}`}
                >
                  {title}
                </Link>
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {excerpt}
              </p>
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

      <Section
        id="industries"
        eyebrow="Industries"
        heading="SEO built around your industry"
        subhead="Some industries have their own search behaviour, competition and rules. We build search programmes around how a specific industry actually gets found, then drill into the provinces and cities we cover."
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
                View provinces
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
        id="areas"
        className="border-y border-border bg-surface/40"
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
        className="border-t border-border"
        eyebrow="FAQ"
        heading="Frequently asked questions"
        subhead="The questions we hear most from Niagara business owners about SEO, AI search and how our engagements work."
      >
        <Accordion items={HOME_FAQS} />
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
              Tell us a little about your goals and we will get back to you to
              book a free consultation. No obligation, no jargon.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-contrast-ink/80">
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
            <p className="mt-6 max-w-2xl text-sm text-contrast-ink/75">
              Free consultation — no obligation, no jargon. We reply within one
              business day, and every recommendation is tied to revenue, not
              vanity metrics. If we are not the right fit, we will point you to
              someone who is.
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
  const latestPosts = getLatestPosts(3).map(({ id, date, title, excerpt, image }) => ({
    id,
    date,
    title,
    excerpt,
    image,
  }));
  const { buildIndustriesProps } = require("../lib/verticalSeo");
  const industries = buildIndustriesProps().items.map((item) => ({
    ...item,
    coverage: `${item.provinceCount} provinces · ${item.cityCount} cities`,
  }));
  return {
    props: {
      latestPosts,
      industries,
    },
  };
}