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

import hero from "../../img/web-design-welland-hero.webp";
import img1 from "../../img/web-design-company-welland-jerrys-insulating.png";
import img2 from "../../img/welland-web-design-company-kd-flowers.png";
import img3 from "../../img/custom-website-design-welland-cass-a-bella-construction.png";
import img4 from "../../img/web-design-welland-canadian-mortgage-authority.png";
import img5 from "../../img/welland-web-design-donor-compass.png";
import img6 from "../../img/welland-website-design-ggs-niagara-landscaping.png";
import test1 from "../../img/testimonial-lucas-folino-niagara.png";
import test2 from "../../img/testimonial-brandi-may-niagara.png";
import test3 from "../../img/testimonial-sandro-visca-niagara.png";

const URL_PATH = "/web-design/welland";
const CANONICAL = "https://infused.agency/web-design/welland";

const PROJECTS = [
  {
    src: img1,
    alt: "Website built by Infused Agency for Jerry's Insulating, serving Niagara and Hamilton-Burlington",
    caption: "Jerry's Insulating — insulation contractor website",
  },
  {
    src: img2,
    alt: "KD Flowers florist website designed by Infused Agency for a Niagara wedding florist",
    caption: "KD Flowers — boutique florist website",
  },
  {
    src: img3,
    alt: "Cass-A-Bella Construction website showing custom building work by a Niagara builder",
    caption: "Cass-A-Bella Construction — custom home builder website",
  },
  {
    src: img4,
    alt: "Canadian Mortgage Authority website by Infused Agency for mortgage brokers serving Niagara",
    caption: "Canadian Mortgage Authority — mortgage brokerage website",
  },
  {
    src: img5,
    alt: "Donor Compass website by Infused Agency for a nonprofit donor-data platform",
    caption: "Donor Compass — donor-data platform website",
  },
  {
    src: img6,
    alt: "GGS Niagara Landscaping website by Infused Agency for a Niagara landscape company",
    caption: "GGS Niagara Landscaping — landscaping company website",
  },
];

const SERVICES = [
  {
    title: "Trade-friendly sites that answer the phone call",
    body: "Electricians, plumbers, insulators and other contractors live off the calls that come in while a job is half-done. Your site should show what you do, where you work and how to reach you in seconds — a tap-to-call number, a short form, and service pages a homeowner in Welland can actually read on a phone.",
  },
  {
    title: "A site built around your brand, not a template",
    body: "Nothing here is poured into a pre-made theme. We design every page around your business — your colours, your work, the customers you are trying to reach — so the finished site looks like it belongs to you and nobody else.",
  },
  {
    title: "Pages for what you sell and where you sell it",
    body: "Family-run businesses here often serve more than one town. We plan the structure for that from the start: clear pages or sections for each service and each community you work in, so people searching in Welland, Thorold or anywhere between find their way to you.",
  },
  {
    title: "WordPress you control after launch",
    body: "When a content management system makes sense we build on WordPress, and we walk you through it before launch. Updating a page, swapping a photo or posting news should not require calling a developer.",
  },
  {
    title: "Stores on Shopify and WooCommerce",
    body: "If you sell products — parts, goods, anything you ship or hand over the counter — we set up online stores on Shopify or WooCommerce with product pages, carts and checkout that work properly and that you can manage yourself.",
  },
  {
    title: "Search groundwork included",
    body: "Fast pages, mobile optimization, clean structure and schema markup come with every build. That is the base your rankings grow from, and it is also what AI search tools read when someone asks about your trade in Welland.",
  },
];

const FAQS = [
  {
    q: "What should I expect to pay for a Welland business website?",
    a: "There is no fixed package price, and any company quoting one without understanding your business is guessing. What moves the cost: how many pages the site needs, whether you require a store, booking or forms, how ready your content is, and whether you want us to handle the writing. We look at all of that during a free consultation, then send a written quote — no charge, no obligation, no surprise line items later.",
  },
  {
    q: "Will you actually meet with me in Welland, or is this all remote?",
    a: "Both options are real. Our office is in St. Catharines, a short drive from Welland, and we are glad to meet at your business or ours. Just as many projects run by phone, email and video call from beginning to end — the quote, the design reviews and the launch work exactly the same way.",
  },
  {
    q: "Do you do SEO as well as web design?",
    a: "Yes, as two connected but separate things. The website itself comes with on-page search foundations — fast load times, mobile optimization, clean structure and schema markup. Ongoing SEO, meaning the work of climbing rankings, holding map results and showing up in AI assistants, is a dedicated service after launch. You can start with either piece.",
  },
  {
    q: "I have a Welland site that ranks already — can it be redesigned without losing that?",
    a: "Yes, and we plan for that from day one. Before rebuilding we document what your current site ranks for and why, preserve the purpose and URLs of pages that are working, and put redirects in place for any address that must change. Rankings are never something any company can promise, but a redesign done this way keeps what you have earned while fixing what was holding the site back.",
  },
];

const RELATED = [
  { label: "Web design services", href: "/web-design" },
  { label: "Our work", href: "/work" },
  { label: "Get a quote", href: "/get-a-quote" },
  { label: "SEO in Welland", href: "/seo/welland" },
  { label: "Infused Agency home", href: "/" },
];

const schema = graph([
  organizationNode(),
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Web Design", href: "/web-design" },
    { name: "Welland", href: URL_PATH },
  ]),
  serviceNode({
    name: "Web Design in Welland",
    serviceType: "Web Design",
    url: CANONICAL,
    areaServed: [
      { "@type": "City", name: "Welland" },
      { "@type": "AdministrativeArea", name: "Niagara Region, Ontario" },
      { "@type": "Country", name: "Canada" },
    ],
    hasMap: "https://www.google.com/maps/search/?api=1&query=Welland%2C%20Ontario%2C%20Canada",
  }),
  faqPageNode(FAQS, `${CANONICAL}#faq`),
]);

const WellandWebDesign = () => {
  return (
    <>
      <Head>
        <title>Web Design Company in Welland | Infused Agency</title>
        <meta
          name="description"
          content="Welland web design company creating fast, mobile-friendly websites for trades, manufacturers, shops and family businesses. Book a free consultation."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:site_name" content="Infused Agency" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Web Design Company in Welland | Infused Agency"
        />
        <meta
          property="og:description"
          content="Welland web design company creating fast, mobile-friendly websites for trades, manufacturers, shops and family businesses. Book a free consultation."
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
                    { name: "Welland" },
                  ]}
                  className="mb-8"
                />
                <h1 className="max-w-3xl text-balance font-display text-h1 font-bold leading-[1.08] tracking-[-0.02em] text-ink">
                  Welland Web Design Company
                </h1>
                <p className="mt-6 max-w-2xl text-lead text-muted">
                  Infused Agency designs and builds websites for Welland
                  businesses — the trades and manufacturers along the canal,
                  the family-run shops downtown, and the offices that serve
                  this city every day. Fast, mobile-friendly sites that make
                  it obvious who you are and how to reach you.
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
                    alt="Web design company for Welland, Ontario businesses by Infused Agency"
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
          eyebrow="Welland"
          heading="Web design for Welland businesses"
        >
          <div className="max-w-3xl space-y-4 text-lead text-muted">
            <p>
              The canal runs through Welland the way industry once ran the
              city — and the businesses along it still set the tone here.
              Contractors who work out of a truck, manufacturers with a shop
              floor behind the office, family-run storefronts that have been
              on Main Street longer than most websites have existed: all of
              them now compete in the same place, a search result on someone&rsquo;s
              phone, usually at the moment that person needs something fixed,
              built or bought.
            </p>
            <p>
              A website for a Welland business has to earn trust fast and
              stay out of the way. Clear service lists, honest hours, real
              photos of real work, and a phone number that dials the moment
              it is tapped. That is the core of what we build — and when a
              business serves customers in the surrounding towns as well, the
              site needs the structure to welcome those people too, not just
              the ones inside city limits.
            </p>
          </div>
        </Section>

        <Section
          className="border-y border-border bg-surface/40"
          eyebrow="Where we work"
          heading="Where we work in Welland"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
              <p>
                Our office sits in St. Catharines, a short drive from
                Welland, and we work with businesses on both sides of the
                canal. Meet us in person at your shop or ours, or let the
                whole project run by phone, email and video call — the
                process is identical either way.
              </p>
            </div>
            <EmbeddedMap
              place="Welland, Ontario, Canada"
              zoom={13}
              title="Map of Welland, Ontario"
              className="shadow-card"
            />
          </div>
        </Section>

        <Section
          eyebrow="Recent projects"
          heading="Websites we have designed and built"
          subhead="A sample of sites for Niagara businesses, including contractors, a florist and a landscaping company. Each one links to our work page."
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
          heading="What a Welland website includes"
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
              Projects begin the same way here as anywhere else: a free
              consultation to understand your business, followed by a written
              quote for what the work actually requires. Design and build
              move ahead with you involved at every stage — you see the
              design&rsquo;s direction before it is finished, and your
              feedback is folded in as the site takes shape. Content usually
              comes from you, though writing it is a service we offer at an
              additional cost. The full sequence is described on our{" "}
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
          heading="Redesigning a Welland website without losing rankings"
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              Older Welland sites sometimes rank for exactly the words their
              owners hope new customers are typing. Replacing that site with
              something better should not mean gambling those results away.
              Search engines respond to what your pages contain and how they
              are organized — both of which we carry into a redesign with
              care rather than by accident.
            </p>
            <p>
              The process is concrete: we review what your current site is
              found for, keep the URLs of pages that are doing their job, and
              set up redirects for any that must change. After launch we
              watch how the site performs in search and fix whatever slipped.
              Most redesigns end up repairing the very issues — slow pages,
              thin service descriptions, contact details buried out of
              thumb&rsquo;s reach — that were capping the old site anyway.
            </p>
            <p>
              If the idea of touching a working site makes you nervous, that
              is a sensible instinct, and it is worth a conversation before
              any commitment. Bring your current site to a free consultation
              and we will explain, in plain terms, what a rebuild would mean
              for the rankings you have now.
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
            Welland is the middle of a region we build for constantly — with
            neighbouring communities like{" "}
            <Link
              href="/web-design/thorold"
              className="font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Thorold
            </Link>{" "}
            and{" "}
            <Link
              href="/web-design/fonthill"
              className="font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Fonthill
            </Link>{" "}
            a few minutes away in either direction. Every web design page we
            keep for Niagara is linked below.
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
                Tell us what your Welland business sells and what the site
                should be doing, and we will map out what the project needs.
                No obligation, no jargon.
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
      </main>
      <Footer />
    </>
  );
};

export default WellandWebDesign;
