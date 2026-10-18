import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Nav from "../../../components/Nav/nav";
import Footer from "../../../components/Footer/footer";
import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";
import Breadcrumb from "../../../components/ui/Breadcrumb";
import HeroAtmosphere from "../../../components/ui/HeroAtmosphere";
import TestimonialCard from "../../../components/ui/TestimonialCard";
import Accordion from "../../../components/ui/Accordion";
import Icon from "../../../components/ui/Icon";
import PageJsonLd from "../../../components/seo/PageJsonLd";
import {
  organizationNode,
  breadcrumbList,
  serviceNode,
  faqPageNode,
  graph,
} from "../../lib/verticalSeoSchema";

import hero from "../../img/web-design-niagara.webp";
import visca from "../../img/niagara-web-design-visca-electric.png";
import flat from "../../img/niagara-website-design-flat-rock-cellars.png";
import jerrys from "../../img/web-design-company-niagara-jerrys-insulating.png";
import kd from "../../img/custom-website-design-niagara-kd-flowers.png";
import cass from "../../img/niagara-web-design-cass-a-bella-construction.png";
import cma from "../../img/website-design-niagara-canadian-mortgage-authority.png";
import donor from "../../img/web-design-niagara-donor-compass.png";
import ggs from "../../img/niagara-custom-web-design-ggs-niagara-landscaping.png";
import med from "../../img/website-design-niagara-lincoln-medical-centre.png";
import plant from "../../img/web-design-niagara-plant-no-01.png";
import test1 from "../../img/testimonial-lucas-folino-niagara.png";
import test2 from "../../img/testimonial-brandi-may-niagara.png";
import test3 from "../../img/testimonial-sandro-visca-niagara.png";

const URL_PATH = "/web-design/niagara";
const CANONICAL = "https://infused.agency/web-design/niagara";

const PROJECTS = [
  {
    src: visca,
    alt: "Niagara web design project: the VISCA Electric contractor website",
    caption: "VISCA Electric — electrical contractor website",
  },
  {
    src: flat,
    alt: "Niagara web design project: the Flat Rock Cellars winery website on the Twenty Mile Bench",
    caption: "Flat Rock Cellars — winery estate website",
  },
  {
    src: jerrys,
    alt: "Niagara web design project: the Jerry's Insulating home services website",
    caption: "Jerry's Insulating — home services website",
  },
  {
    src: kd,
    alt: "Niagara web design project: the KD Flowers wedding florist website",
    caption: "KD Flowers — wedding florist website",
  },
  {
    src: cass,
    alt: "Niagara web design project: the Cass-A-Bella Construction custom builder website",
    caption: "Cass-A-Bella Construction — custom builder website",
  },
  {
    src: cma,
    alt: "Niagara web design project: the Canadian Mortgage Authority brokerage website",
    caption: "Canadian Mortgage Authority — mortgage brokerage website",
  },
  {
    src: donor,
    alt: "Niagara web design project: the Donor Compass nonprofit platform website",
    caption: "Donor Compass — donor-data platform website",
  },
  {
    src: ggs,
    alt: "Niagara web design project: the GGS Niagara Landscaping company website",
    caption: "GGS Niagara Landscaping — landscaping company website",
  },
  {
    src: med,
    alt: "Niagara web design project: the Lincoln Medical Centre family practice website",
    caption: "Lincoln Medical Centre — family practice website",
  },
  {
    src: plant,
    alt: "Niagara web design project: the Plant No.01 vegan food factory website",
    caption: "Plant No.01 — vegan food factory website",
  },
];

const AUDIENCES = [
  {
    title: "Wineries, food and drink",
    body: "The Niagara wine country runs from Beamsville through St. Catharines to Niagara-on-the-Lake, and businesses along that stretch sell to visitors planning a tasting drive as much as to locals. We built the site for Flat Rock Cellars on the Twenty Mile Bench and for Plant No.01, a vegan food factory in the region. A website in this world needs to show the place, explain the products, and make ordering or planning a visit simple.",
    links: [{ label: "SEO for wineries", href: "/seo/for-wineries-niagara" }],
  },
  {
    title: "Tourism and seasonal businesses",
    body: "Niagara Falls brings visitors year-round, and summer pulls people out to Crystal Beach and along the lakefront. Seasonal businesses often see most of their traffic in a few busy months — which is exactly when a website needs to work hardest, answering hours, prices and directions before someone chooses a competitor. An off-season presence in search keeps you in mind for next year's planning too.",
    links: [],
  },
  {
    title: "Trades and home services",
    body: "When a homeowner in Welland searches for a plumber, or a property owner in Port Colborne needs an electrician, the phone comes out before anyone asks a neighbour. Contractors we have built for — VISCA Electric, Jerry's Insulating and others — live on that kind of local search, and their sites are built to turn a quick look into a call.",
    links: [
      { label: "SEO for electricians", href: "/seo/for-electricians-niagara" },
      { label: "SEO for plumbers", href: "/seo/for-plumbers-niagara" },
      { label: "SEO for roofers", href: "/seo/for-roofers-niagara" },
    ],
  },
  {
    title: "Builders and renovators",
    body: "Custom home builders, renovators and specialty contractors across Niagara sell on the strength of finished work. A site that lays out real projects, explains the process behind them and makes starting a conversation easy does more for this trade than any amount of advertising language.",
    links: [
      { label: "SEO for home builders", href: "/seo/for-home-builders-niagara" },
      { label: "SEO for general contractors", href: "/seo/for-general-contractors-niagara" },
    ],
  },
  {
    title: "Medical and professional practices",
    body: "Family practices, dental clinics, mortgage brokers and similar offices across the region need a website that answers practical questions quickly — services, hours, how to book — while giving patients and clients a sense of the people behind the name. Our work with Lincoln Medical Centre and Canadian Mortgage Authority covers both ends of that spectrum.",
    links: [
      { label: "SEO for dentists", href: "/seo/for-dentists-niagara" },
      { label: "SEO for mortgage brokers", href: "/seo/for-mortgage-brokers-niagara" },
    ],
  },
  {
    title: "Multi-location businesses",
    body: "Some Niagara businesses serve more than one town at a time — a landscaper working from Grimsby to Thorold, a retailer with shops in two cities, a service company covering the whole region. Those sites need structure: pages or sections for each area you serve, so people in every town find their way in and search engines understand where you work.",
    links: [],
  },
];

const AREAS = [
  { label: "Niagara-on-the-Lake", href: "/seo/niagara-on-the-lake" },
  { label: "Welland", href: "/seo/welland" },
  { label: "Thorold", href: "/seo/thorold" },
  { label: "Grimsby", href: "/seo/grimsby" },
  { label: "Port Colborne", href: "/seo/port-colborne" },
  { label: "Fort Erie", href: "/seo/fort-erie" },
  { label: "Beamsville", href: "/seo/beamsville" },
  { label: "Crystal Beach", href: "/seo/crystal-beach" },
  { label: "Fonthill", href: "/seo/fonthill" },
  { label: "St. Catharines web design", href: "/web-design/st-catharines" },
];

const FAQS = [
  {
    q: "Do you work with businesses outside of St. Catharines?",
    a: "Yes — most of our clients are elsewhere in Niagara. We build for businesses in Niagara Falls, Niagara-on-the-Lake, Welland, Thorold, Grimsby, Fort Erie, Port Colborne, Beamsville, Crystal Beach, Fonthill and everywhere between. Our office is in St. Catharines, but plenty of projects run entirely by phone, email and video call, so distance is not a barrier.",
  },
  {
    q: "My business is seasonal — is a website still worth it?",
    a: "Often it is worth more, not less. Seasonal businesses concentrate their sales into a few months, and that is when a fast, clear website earns its keep — visitors decide between you and the next name in seconds. Through the quieter months the site keeps working too: people researching next summer's trip or next year's project still find you, and off-season content keeps your name in front of them.",
  },
  {
    q: "Can the website handle online sales or bookings?",
    a: "Yes. We build online stores on Shopify and WooCommerce for product businesses — bottles, goods, anything you ship or hand over — and we set up enquiry and booking flows for service businesses. During your free consultation we can talk through which setup fits how you actually sell, rather than bolting on features you will never use.",
  },
  {
    q: "Do you build websites for tourism and hospitality businesses?",
    a: "We do. Tourism and hospitality sites live and die on imagery and clarity: what you offer, when you are open, what it costs, and how to book or buy — all easy to find on a phone, because that is where most visitors check. If you run an attraction, lodging, tour or food business in Niagara, we can build a site that carries that workload.",
  },
  {
    q: "How do we get started if we are not in St. Catharines?",
    a: "The same way anyone does: book a free consultation. We can meet in person at your place of business or ours, or talk by phone or video call — whichever suits you. After understanding what you need, we send a written quote. No charge for the consultation, no obligation, and no pressure to decide on the spot.",
  },
];

const RELATED = [
  { label: "Web design services", href: "/web-design" },
  { label: "St. Catharines web design", href: "/web-design/st-catharines" },
  { label: "Our work", href: "/work" },
  { label: "Get a quote", href: "/get-a-quote" },
  { label: "SEO services", href: "/seo" },
  { label: "Local SEO", href: "/seo/local-seo" },
];

const schema = graph([
  organizationNode(),
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Web Design", href: "/web-design" },
    { name: "Niagara", href: URL_PATH },
  ]),
  serviceNode({
    name: "Web Design in Niagara",
    serviceType: "Web Design",
    url: CANONICAL,
    areaServed: [
      { "@type": "AdministrativeArea", name: "Niagara Region, Ontario" },
      { "@type": "City", name: "Niagara Falls" },
      { "@type": "Country", name: "Canada" },
    ],
  }),
  faqPageNode(FAQS, `${CANONICAL}#faq`),
]);

const NiagaraWebDesign = () => {
  return (
    <>
      <Head>
        <title>Niagara Web Design Company | Infused Agency</title>
        <meta
          name="description"
          content="Niagara web design company creating fast, mobile-friendly websites for businesses across the region. See recent local projects and book a free consultation."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:site_name" content="Infused Agency" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Niagara Web Design Company | Infused Agency"
        />
        <meta
          property="og:description"
          content="Niagara web design company creating fast, mobile-friendly websites for businesses across the region. See recent local projects and book a free consultation."
        />
        <meta property="og:url" content={CANONICAL} />
        <meta name="twitter:card" content="summary" />
        <PageJsonLd graph={schema} />
      </Head>
      <Nav />
      <main className="redesign-root">
        <section className="relative overflow-hidden border-b border-border bg-surface pb-16 pt-28 sm:pt-32 lg:pt-36">
          <HeroAtmosphere />
          <Container className="relative">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <Breadcrumb
                  items={[
                    { name: "Home", href: "/" },
                    { name: "Web Design", href: "/web-design" },
                    { name: "Niagara" },
                  ]}
                  className="mb-8"
                />
                <h1 className="max-w-3xl text-balance font-display text-h1 font-bold leading-[1.08] tracking-[-0.02em] text-ink">
                  Niagara Web Design Company
                </h1>
                <p className="mt-6 max-w-2xl text-lead text-muted">
                  Infused Agency designs and builds websites for businesses
                  across the Niagara region — from Niagara Falls and
                  Niagara-on-the-Lake to Welland, Grimsby and the smaller towns
                  in between. We work from St. Catharines and build sites that
                  load quickly, work on any device, and turn local searches
                  into real enquiries.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/get-a-quote" size="lg">
                    Book a free consultation
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </Button>
                  <Button href="/work" variant="secondary" size="lg">
                    See our work
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-5">
                <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                  <Image
                    src={hero}
                    alt="Web design across the Niagara region by Infused Agency"
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

        <Section
          eyebrow="Across the region"
          heading="Web design for Niagara businesses"
        >
          <div className="max-w-3xl space-y-4 text-lead text-muted">
            <p>
              Niagara is not one market — it is a patchwork of very different
              ones sitting side by side. A winery on the Twenty Mile Bench
              sells to visitors planning a tasting weekend; a contractor in
              Welland lives off emergency calls; a family practice in Thorold
              needs patients to find hours and booking details in under a
              minute; a shop in Niagara Falls counts on foot traffic that
              starts with someone typing the business category into a phone.
              The businesses that win here are the ones whose website answers
              what their particular customers are actually searching for.
            </p>
            <p>
              We have been building for this region for years, and the range
              of it shows in our portfolio: winery estates, food producers,
              contractors, builders, medical offices, florists, landscapers,
              mortgage brokerages and even a nonprofit data platform that
              happened to land in Niagara. That variety is deliberate — it
              means when you describe your business, we have almost certainly
              built for something adjacent, and we understand how your site
              fits into the way this region actually works.
            </p>
          </div>
        </Section>

        <Section
          className="border-y border-border bg-surface/40"
          eyebrow="Recent projects"
          heading="Websites we have designed and built"
          subhead="A sample of sites for Niagara businesses and organizations. Each one links to our work page for the full story."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <Link
                key={project.caption}
                href="/work"
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-card card-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-300 ease-smooth group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <p className="border-t border-border px-5 py-4 text-sm text-muted">
                  {project.caption}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/work" variant="secondary">
              See more of our work
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </div>
        </Section>

        <Section
          eyebrow="The process"
          heading="How a Niagara web design project runs"
          subhead="Whether we meet in person or work remotely, the shape of a project stays consistent."
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              Projects start the same way whether you are down the road from
              us in St. Catharines or across the region in Fort Erie: a free
              consultation, in person or over a call, where we learn what your
              business sells, who buys it, and what your current web presence —
              if you have one — fails to do. From that conversation we prepare
              a written quote built around what your project actually needs,
              rather than a fixed package you either stretch to fit or pay for
              more than you require.
            </p>
            <p>
              Once the quote is approved, design and build move ahead
              together, with you in the loop at every stage. You see the
              direction of the design before it is finished, feedback is
              expected rather than tolerated, and changes get folded in as the
              site takes shape. Content is normally yours to supply — you know
              your business inside out — and if writing it is the part you dread, we
              can write it for you at an additional cost.
            </p>
            <p>
              Every page is checked across phones, tablets and desktops before
              launch, because so much of the region&rsquo;s searching happens
              on a phone in a parking lot, not at a desk. When the site is
              live, we walk you through updating it if it runs on WordPress,
              and we stay reachable afterwards. Hosting, maintenance and
              ongoing SEO are available after launch for businesses that want
              to keep growing in Google and the map results; for businesses
              that only needed the site itself, that is where our involvement
              can end.
            </p>
          </div>
        </Section>

        <Section
          className="border-t border-border"
          eyebrow="Who we build for"
          heading="Business types across Niagara"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {AUDIENCES.map((audience) => (
              <Card key={audience.title} className="flex h-full flex-col">
                <h3 className="font-display text-lg font-bold text-ink">
                  {audience.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {audience.body}
                </p>
                {audience.links.length ? (
                  <ul className="mt-4 space-y-2 border-t border-border pt-4">
                    {audience.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                        >
                          {link.label}
                          <Icon name="arrow-right" className="h-4 w-4" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Card>
            ))}
          </div>
        </Section>

        <Section
          className="border-y border-border bg-surface/40"
          eyebrow="Where we work"
          heading="Communities we build for"
          subhead="Websites for businesses in these Niagara communities, plus local SEO pages for many of them."
        >
          <ul className="flex flex-wrap gap-3">
            {AREAS.map((area) => (
              <li key={area.label}>
                <Link
                  href={area.href}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
                >
                  <Icon name="map-pin" className="h-4 w-4 text-accent" />
                  {area.label}
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          eyebrow="What you get"
          heading="What a Niagara website includes"
          subhead="The same standards on every build, whether the site is three pages or thirty."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Card className="flex h-full flex-col">
              <h3 className="font-display text-lg font-bold text-ink">
                Custom design, not a template
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Your site is designed around your brand and your customers,
                not adapted from a theme someone else built for a different
                trade. Layout, pages and calls to action are planned for the
                people you want reaching out.
              </p>
            </Card>
            <Card className="flex h-full flex-col">
              <h3 className="font-display text-lg font-bold text-ink">
                Fast on every device
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Pages are built to load quickly and adapt to phones, tablets
                and desktops. For a region where a large share of searches
                happen on a phone — often while someone is out and about —
                that speed is not a nicety, it is the whole game.
              </p>
            </Card>
            <Card className="flex h-full flex-col">
              <h3 className="font-display text-lg font-bold text-ink">
                Stores and booking when you need them
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Product businesses get online stores on Shopify or WooCommerce
                with carts and checkout set up properly. Service businesses
                get enquiry and booking flows that route leads to you without
                friction.
              </p>
            </Card>
            <Card className="flex h-full flex-col">
              <h3 className="font-display text-lg font-bold text-ink">
                Built for search from day one
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Clean structure, fast load times, mobile optimization and
                schema markup come standard. That groundwork is what lets your
                pages show up on Google — and what AI search tools draw from
                when they answer questions about your trade in your area.
              </p>
            </Card>
          </div>
        </Section>

        <Section
          heading="What it is like to work with us"
          subhead="A few words from businesses we have worked with, in their own words."
        >
          <div className="grid gap-6 md:grid-cols-3">
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
        </Section>

        <Section
          className="border-t border-border"
          eyebrow="Beyond launch"
          heading="Showing up across Niagara, not just in one town"
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              A website is where a visitor lands; getting them there is a
              separate job. Once your site is live, appearing in Google for the
              searches that matter — the ones typed in Grimsby, Thorold,
              Niagara Falls, wherever your customers actually are — takes
              ongoing work: content that answers real questions, listings and
              map results kept consistent, and a site structure that search
              engines can read without guesswork. We offer SEO services built
              for exactly that, including the growing share of searches that
              AI assistants answer directly.
            </p>
            <p>
              Businesses that serve several towns need this work to cover every
              area they sell into, not only their head-office postal code. We
              plan for that from the start: pages or sections for the
              communities you serve, so a search in Fort Erie leads somewhere
              different — and useful — compared to a search in Fonthill. This
              is also why we maintain local SEO pages for towns across the
              region; they are a window into how we think about
              geography-specific visibility, and a resource of their own.
            </p>
            <p>
              If a new website, ongoing search work, or both sound relevant to
              where your business is heading, a free consultation is the
              simplest way to sort out which piece you actually need. We will
              tell you honestly if the website is enough on its own for now.
            </p>
          </div>
        </Section>

        <Section
          className="border-y border-border bg-surface/40"
          heading="Frequently asked questions"
        >
          <Accordion items={FAQS} className="max-w-3xl" />
        </Section>

        <Section id="contact">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-warm-gradient px-6 py-14 text-center shadow-lift sm:px-12 sm:py-16">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-grid opacity-20"
            />
            <div className="relative flex flex-col items-center">
              <h2 className="text-balance font-display text-h2 font-bold leading-[1.12] tracking-[-0.02em] text-white">
                Let&rsquo;s build something for{" "}
                <span className="text-gold-bright">your business</span>
              </h2>
              <p className="mt-4 text-lead text-contrast-ink/90">
                Wherever you are in Niagara, tell us what you sell and what
                your website should be doing, and we will map out what the
                project needs. No obligation, no jargon.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/get-a-quote" size="lg">
                  Get your free quote
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Section>

        <Section eyebrow="Keep exploring" heading="Related pages">
          <ul className="flex flex-wrap gap-3">
            {RELATED.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
                >
                  {link.label}
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default NiagaraWebDesign;
