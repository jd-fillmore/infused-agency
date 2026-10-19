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
import EmbeddedMap from "../../../components/maps/EmbeddedMap";
import PageJsonLd from "../../../components/seo/PageJsonLd";
import {
  organizationNode,
  breadcrumbList,
  serviceNode,
  faqPageNode,
  graph,
} from "../../lib/verticalSeoSchema";
import { WEB_DESIGN_CROSS_LINKS } from "../../lib/niagaraWebDesignCities";

import hero from "../../img/web-design-beamsville-hero.webp";
import img1 from "../../img/custom-website-design-beamsville-cass-a-bella-construction.png";
import img2 from "../../img/web-design-beamsville-canadian-mortgage-authority.png";
import img3 from "../../img/beamsville-web-design-donor-compass.png";
import img4 from "../../img/beamsville-website-design-ggs-niagara-landscaping.png";
import img5 from "../../img/web-design-company-beamsville-lincoln-medical-centre.png";
import img6 from "../../img/beamsville-web-design-company-plant-no-01.png";
import test1 from "../../img/testimonial-lucas-folino-niagara.png";
import test2 from "../../img/testimonial-brandi-may-niagara.png";
import test3 from "../../img/testimonial-sandro-visca-niagara.png";

const URL_PATH = "/web-design/beamsville";
const CANONICAL = "https://infused.agency/web-design/beamsville";

const PROJECTS = [
  {
    src: img1,
    alt: "Cass-A-Bella Construction website designed by Infused Agency for a Niagara custom home builder",
    caption: "Cass-A-Bella Construction — custom builder website",
  },
  {
    src: img2,
    alt: "Canadian Mortgage Authority website for a Niagara mortgage brokerage, built by Infused Agency",
    caption: "Canadian Mortgage Authority — mortgage brokerage website",
  },
  {
    src: img3,
    alt: "Donor Compass website by Infused Agency for a donor-data platform used by nonprofits",
    caption: "Donor Compass — donor-data platform website",
  },
  {
    src: img4,
    alt: "GGS Niagara Landscaping website showing garden and landscape work, built by Infused Agency",
    caption: "GGS Niagara Landscaping — landscape company website",
  },
  {
    src: img5,
    alt: "Lincoln Medical Centre website by Infused Agency for family physicians in the Niagara region",
    caption: "Lincoln Medical Centre — family practice website",
  },
  {
    src: img6,
    alt: "Plant No.01 website by Infused Agency for a vegan food factory in the Niagara region",
    caption: "Plant No.01 — food producer website",
  },
];

const SERVICES = [
  {
    title: "Sites for farm stands and wine-country shops",
    body: "Businesses on the Bench sell on season and scenery. Your website should show what you grow, pour or make, when you are open, and how to find the driveway — the questions a visitor halfway down the QEW is typing into a phone. Real photos and clear hours do the heavy lifting.",
  },
  {
    title: "Trades pages that get the call",
    body: "The contractors who keep vineyards, farms and homes working here need sites that put the work first: services described plainly, areas covered, and a phone number that dials the moment it is tapped. No hunting, no forms that swallow a message and never reply.",
  },
  {
    title: "Custom design, no template shortcuts",
    body: "We design every site from scratch around your brand and your customers — layout, pages and calls to action planned for how people actually search for what you sell in wine country.",
  },
  {
    title: "WordPress you can update yourself",
    body: "Content-managed sites are usually WordPress, and we walk you through them before launch. Seasonal hours, new vintages, fresh photos — changes like that should take minutes, not tickets.",
  },
  {
    title: "Stores for goods you ship or sell locally",
    body: "Product businesses get online stores on Shopify or WooCommerce — product pages, carts and checkout set up so customers move through easily and you can manage the whole thing yourself.",
  },
  {
    title: "Search foundations included",
    body: "Fast load times, mobile optimization, clean structure and schema markup are part of every build. That groundwork is what helps your pages surface on Google, and what AI search tools read when someone asks about businesses in Beamsville.",
  },
];

const FAQS = [
  {
    q: "What does a website cost for a Beamsville business?",
    a: "There is no standard price, because no two Beamsville businesses need the same site. What shapes the quote: the number of pages, whether you need a store, booking or forms, how ready your content is, and whether you would like us to write it. After a free consultation we send a written quote that spells out exactly what your project involves — no charge for the consultation, no obligation.",
  },
  {
    q: "Do you work with Beamsville businesses in person or remotely?",
    a: "Either. Beamsville is in the Town of Lincoln, a short drive from our St. Catharines office, and we regularly meet owners at their farms, shops or job sites. If remote is easier, projects run smoothly by phone, email and video call — the quote and design process are the same.",
  },
  {
    q: "Can you handle SEO for my Beamsville business as well as the website?",
    a: "Yes. Every build includes on-page search foundations: fast pages, clean structure, schema markup, mobile optimization. Ongoing SEO — rankings, map results and AI search visibility — is a dedicated service after launch. Many businesses start with the website and continue with search work; others only need the site.",
  },
  {
    q: "Can my current site be redesigned without losing its search rankings?",
    a: "Usually, yes. Before rebuilding we study what your existing site ranks for and why, keep the web addresses of pages that work, and set up redirects for any that must change. Specific rankings can never be promised by anyone, but a redesign handled this way protects what you have earned while repairing what was holding the old site back.",
  },
];

const RELATED = [
  { label: "Web design services", href: "/web-design" },
  { label: "Niagara web design", href: "/web-design/niagara" },
  { label: "Our work", href: "/work" },
  { label: "Get a quote", href: "/get-a-quote" },
  { label: "SEO in Beamsville", href: "/seo/beamsville" },
  { label: "Infused Agency home", href: "/" },
];

const schema = graph([
  organizationNode(),
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Web Design", href: "/web-design" },
    { name: "Niagara", href: "/web-design/niagara" },
    { name: "Beamsville", href: URL_PATH },
  ]),
  serviceNode({
    name: "Web Design in Beamsville",
    serviceType: "Web Design",
    url: CANONICAL,
    areaServed: [
      { "@type": "Community", name: "Beamsville" },
      { "@type": "AdministrativeArea", name: "Town of Lincoln, Ontario" },
      { "@type": "Country", name: "Canada" },
    ],
    hasMap: "https://www.google.com/maps/search/?api=1&query=Beamsville%2C%20Ontario%2C%20Canada",
  }),
  faqPageNode(FAQS, `${CANONICAL}#faq`),
]);

const BeamsvilleWebDesign = () => {
  return (
    <>
      <Head>
        <title>Web Design Company in Beamsville | Infused Agency</title>
        <meta
          name="description"
          content="Beamsville web design company creating fast, mobile-friendly websites for wineries, farms, shops and trades in the Town of Lincoln. Book a free consultation."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:site_name" content="Infused Agency" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Web Design Company in Beamsville | Infused Agency"
        />
        <meta
          property="og:description"
          content="Beamsville web design company creating fast, mobile-friendly websites for wineries, farms, shops and trades in the Town of Lincoln. Book a free consultation."
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
                    { name: "Niagara", href: "/web-design/niagara" },
                    { name: "Beamsville" },
                  ]}
                  className="mb-8"
                />
                <h1 className="max-w-3xl text-balance font-display text-h1 font-bold leading-[1.08] tracking-[-0.02em] text-ink">
                  Beamsville Web Design Company
                </h1>
                <p className="mt-6 max-w-2xl text-lead text-muted">
                  Infused Agency builds websites for businesses in Beamsville
                  and the surrounding Town of Lincoln — wineries on the Bench,
                  farm-related businesses, local shops and the trades that
                  keep them running. Sites that are fast, easy to use on a
                  phone, and honest about what you do.
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
                    alt="Web design company serving Beamsville, Ontario by Infused Agency"
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
          eyebrow="Beamsville, Town of Lincoln"
          heading="Web design for Beamsville businesses"
        >
          <div className="max-w-3xl space-y-4 text-lead text-muted">
            <p>
              Beamsville sits in the middle of Niagara&rsquo;s wine and farm
              country, climbing the escarpment onto the Bench where vines run
              in rows past the orchards. The businesses here — tasting rooms,
              farm stands, garden centres, contractors working the properties
              on both sides of the ridge — share a rhythm set by the seasons
              and by visitors who plan trips around them. When someone decides
              to make that trip, the decision usually starts with a search on
              a phone, and the website either answers it or loses it.
            </p>
            <p>
              There is a quieter side to the local economy too: family-run
              operations, trades serving the houses and farms of the Town of
              Lincoln, and small offices that trade on reputation across a
              few generations of customers. Those businesses need a site that
              feels grounded — real work, real photos, plain descriptions of
              what you do and where — rather than something polished into
              anonymity.
            </p>
          </div>
        </Section>

        <Section
          className="border-y border-border bg-surface/40"
          eyebrow="Where we work"
          heading="Where we work in Beamsville"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
              <p>
                Our office is in St. Catharines, about fifteen minutes up the
                escarpment, and we work with Beamsville businesses throughout
                the year. We can meet in person at your farm, shop or job
                site, or run the whole project remotely by phone, email and
                video call — whichever fits the season you are in.
              </p>
            </div>
            <EmbeddedMap
              place="Beamsville, Ontario, Canada"
              zoom={13}
              title="Map of Beamsville, Ontario"
              className="shadow-card"
            />
          </div>
        </Section>

        <Section
          eyebrow="Recent projects"
          heading="Websites we have designed and built"
          subhead="Sites for Niagara businesses and organizations, from builders to food producers. Each image links to our work page."
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
          className="border-t border-border"
          eyebrow="What you get"
          heading="What a Beamsville website includes"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <Card key={service.title} className="flex h-full flex-col">
                <h3 className="font-display text-lg font-bold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.body}
                </p>
              </Card>
            ))}
          </div>
          <div className="max-w-3xl space-y-4 pt-10 text-base leading-relaxed text-muted">
            <p>
              Each project opens with a free consultation to understand your
              business, followed by a written quote for the work it actually
              needs. Design and build then move ahead together, with your
              feedback shaping the result before anything is finished. Pages
              are checked across every device before launch, and if writing
              the content is the part you would rather skip, we can write it
              for you at an additional cost. The full path from first call to
              launch day is written out on our{" "}
              <Link
                href="/web-design"
                className="font-semibold text-accent transition-colors hover:text-accent-hover"
              >
                web design services
              </Link>{" "}
              page.
            </p>
          </div>
        </Section>

        <Section
          className="border-y border-border bg-surface/40"
          eyebrow="Keeping your rankings"
          heading="Redesigning a Beamsville website without losing rankings"
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              A site that has quietly carried a Beamsville business for years
              — pulling in steady search traffic, turning strangers into
              customers — feels like something you cannot afford to break.
              That caution is reasonable. The trade-off it assumes, though, is
              mostly imaginary: a redesign can carry forward everything search
              engines value about your pages, because what they value is
              content and structure, not colours and layout.
            </p>
            <p>
              We work it out in advance. Before any rebuild we document what
              your current site ranks for and why, preserve the web addresses
              of pages that are earning their keep, and set up redirects for
              the ones that must change. After launch, we watch how search
              reacts and fix anything that slipped. Along the way the slow
              pages, buried services and hard-to-find contact details of the
              old site get repaired — repairs that usually help your
              visibility rather than hurt it.
            </p>
            <p>
              Before you commit to anything, a free consultation is a
              low-stakes way to find out what a redesign would actually mean
              for the rankings you hold today. Bring your current site; we
              will look it over and tell you what we see.
            </p>
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
          heading="Frequently asked questions"
        >
          <Accordion items={FAQS} className="max-w-3xl" />
        </Section>

        <Section
          className="border-y border-border bg-surface/40"
          eyebrow="Across the region"
          heading="Web design across Niagara"
        >
          <p className="max-w-3xl text-base leading-relaxed text-muted">
            Beamsville is one of the communities across Niagara we build for.
            Down the lakeshore road sits{" "}
            <Link
              href="/web-design/grimsby"
              className="font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Grimsby
            </Link>
            , and up the escarpment,{" "}
            <Link
              href="/web-design/niagara-falls"
              className="font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Niagara Falls
            </Link>{" "}
            and the rest of the region. Every web design page we keep for
            Niagara is linked below.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {WEB_DESIGN_CROSS_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
                >
                  <Icon name="map-pin" className="h-4 w-4 text-accent" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
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

        <Section id="contact">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-warm-gradient px-6 py-14 text-center shadow-lift sm:px-12 sm:py-16">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-grid opacity-20"
            />
            <div className="relative flex flex-col items-center">
              <h2 className="text-balance font-display text-h2 font-bold leading-[1.12] tracking-[-0.02em] text-white">
                Ready to talk about your{" "}
                <span className="text-gold-bright">website?</span>
              </h2>
              <p className="mt-4 text-lead text-contrast-ink/90">
                Tell us about your Beamsville business and what the website
                should be doing, and we will map out what the project needs.
                No obligation, no jargon.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/get-a-quote" size="lg">
                  Get your free quote
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Button>
              </div>
              <p className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-contrast-ink/80">
                <a
                  href="tel:+19059333115"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Icon name="phone" className="h-4 w-4" />
                  (905) 933-3115
                </a>
                <a
                  href="mailto:info@infused.agency"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Icon name="mail" className="h-4 w-4" />
                  info@infused.agency
                </a>
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default BeamsvilleWebDesign;
