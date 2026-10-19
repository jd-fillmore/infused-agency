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

import hero from "../../img/web-design-grimsby-hero.webp";
import img1 from "../../img/web-design-grimsby-canadian-mortgage-authority.png";
import img2 from "../../img/grimsby-web-design-donor-compass.png";
import img3 from "../../img/grimsby-website-design-ggs-niagara-landscaping.png";
import img4 from "../../img/web-design-company-grimsby-lincoln-medical-centre.png";
import img5 from "../../img/grimsby-web-design-company-plant-no-01.png";
import img6 from "../../img/custom-website-design-grimsby-visca-electric.png";
import test1 from "../../img/testimonial-lucas-folino-niagara.png";
import test2 from "../../img/testimonial-brandi-may-niagara.png";
import test3 from "../../img/testimonial-sandro-visca-niagara.png";

const URL_PATH = "/web-design/grimsby";
const CANONICAL = "https://infused.agency/web-design/grimsby";

const PROJECTS = [
  {
    src: img1,
    alt: "Canadian Mortgage Authority website by Infused Agency for a team of Niagara mortgage brokers",
    caption: "Canadian Mortgage Authority — mortgage brokerage website",
  },
  {
    src: img2,
    alt: "Donor Compass website by Infused Agency for a donor-data platform serving nonprofits",
    caption: "Donor Compass — donor-data platform website",
  },
  {
    src: img3,
    alt: "GGS Niagara Landscaping website built by Infused Agency for a Niagara landscape company",
    caption: "GGS Niagara Landscaping — landscaping company website",
  },
  {
    src: img4,
    alt: "Lincoln Medical Centre website by Infused Agency for family physicians in Niagara",
    caption: "Lincoln Medical Centre — family medical practice website",
  },
  {
    src: img5,
    alt: "Plant No.01 website by Infused Agency for a vegan food factory in the Niagara region",
    caption: "Plant No.01 — vegan food factory website",
  },
  {
    src: img6,
    alt: "VISCA Electric website built by Infused Agency for an electrical contractor in Niagara",
    caption: "VISCA Electric — electrical contractor website",
  },
];

const SERVICES = [
  {
    title: "Lakeshore businesses, shown properly",
    body: "Grimsby shops, restaurants and services trade on location — the escarpment at your back, the lake at your front. Your site should carry that sense of place: real photos, clear hours, and an easy path from first glance to phone call or visit.",
  },
  {
    title: "Custom design around your brand",
    body: "Nothing we build is adapted from a stock theme. Pages, layout and calls to action are planned for the customers you want — whether that is a homeowner on the mountain, a family in town, or someone driving in from Hamilton.",
  },
  {
    title: "Contractor and trade sites that earn calls",
    body: "The trades here live off the phone. Your website should make what you do, where you work and how to reach you obvious within seconds — tap-to-call on mobile, short forms, service pages written for real searches.",
  },
  {
    title: "WordPress you can run yourself",
    body: "When a site needs a content management system we build on WordPress and show you the ropes before launch. Swapping photos, updating pages and posting news stays in your hands.",
  },
  {
    title: "Online stores on Shopify and WooCommerce",
    body: "Product businesses get stores with product pages, carts and checkout that are quick for customers and manageable for you — whether the goods leave by courier or across the counter.",
  },
  {
    title: "Search groundwork in every build",
    body: "Fast load times, mobile optimization, clean structure and schema markup come standard. That base is what lets your pages compete in Google — and what AI search tools draw from when people ask about businesses near the Grimsby lakeshore.",
  },
];

const FAQS = [
  {
    q: "What does a website cost for a Grimsby, Ontario business?",
    a: "It depends on the project rather than on a fixed menu. The size of the site, the features you need — a store, bookings, forms, galleries — how ready your content is, and whether you want us to write it: those are the things that shape the number. We discuss all of it during a free consultation, then send a written quote for exactly what your project involves. No charge for the consultation, no obligation.",
  },
  {
    q: "Will you meet me in Grimsby, or does everything happen remotely?",
    a: "We are happy to meet in Grimsby — our St. Catharines office is a short drive up the QEW, and visiting your business works well too. Remote projects by phone, email and video call are equally common. Whichever you choose, you get the same quote, the same design involvement and the same launch support.",
  },
  {
    q: "Do you handle SEO in addition to web design?",
    a: "Yes. On-page search foundations — fast pages, clean structure, schema markup, mobile optimization — are built into every website we create. For the ongoing work of improving rankings, holding map results and showing up in AI search tools, we offer dedicated SEO services after launch. Start with either piece; plenty of businesses do.",
  },
  {
    q: "Can my Grimsby site be redesigned without losing its rankings?",
    a: "In most cases, yes — and we plan for it. Before rebuilding we document what your current site ranks for and why, keep the web addresses of working pages, and set up redirects for any that must change. No one can promise specific rankings, but a careful redesign protects what you have earned and usually fixes the problems the old site carried.",
  },
];

const RELATED = [
  { label: "Web design services", href: "/web-design" },
  { label: "Niagara web design", href: "/web-design/niagara" },
  { label: "Our work", href: "/work" },
  { label: "Get a quote", href: "/get-a-quote" },
  { label: "SEO in Grimsby", href: "/seo/grimsby" },
  { label: "Infused Agency home", href: "/" },
];

const schema = graph([
  organizationNode(),
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Web Design", href: "/web-design" },
    { name: "Niagara", href: "/web-design/niagara" },
    { name: "Grimsby", href: URL_PATH },
  ]),
  serviceNode({
    name: "Web Design in Grimsby, Ontario",
    serviceType: "Web Design",
    url: CANONICAL,
    areaServed: [
      { "@type": "Town", name: "Grimsby, Ontario" },
      { "@type": "AdministrativeArea", name: "Niagara Region, Ontario" },
      { "@type": "Country", name: "Canada" },
    ],
    hasMap: "https://www.google.com/maps/search/?api=1&query=Grimsby%2C%20Ontario%2C%20Canada",
  }),
  faqPageNode(FAQS, `${CANONICAL}#faq`),
]);

const GrimsbyWebDesign = () => {
  return (
    <>
      <Head>
        <title>Web Design Company in Grimsby, Ontario | Infused Agency</title>
        <meta
          name="description"
          content="Grimsby, Ontario web design company building fast, mobile-friendly websites for lakeshore shops, trades and wine-country businesses. Book a free consultation."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:site_name" content="Infused Agency" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Web Design Company in Grimsby, Ontario | Infused Agency"
        />
        <meta
          property="og:description"
          content="Grimsby, Ontario web design company building fast, mobile-friendly websites for lakeshore shops, trades and wine-country businesses. Book a free consultation."
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
                    { name: "Grimsby" },
                  ]}
                  className="mb-8"
                />
                <h1 className="max-w-3xl text-balance font-display text-h1 font-bold leading-[1.08] tracking-[-0.02em] text-ink">
                  Grimsby, Ontario Web Design Company
                </h1>
                <p className="mt-6 max-w-2xl text-lead text-muted">
                  Infused Agency designs and builds websites for businesses in
                  Grimsby, Ontario — the lakeshore shops and restaurants, the
                  trades working the town and the escarpment, and the
                  wine-country businesses a few minutes up the hill. Fast,
                  mobile-friendly sites that make a good first impression and
                  an easy phone call.
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
                    alt="Web design company in Grimsby, Ontario by Infused Agency"
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
          eyebrow="Grimsby, Ontario"
          heading="Web design for Grimsby businesses"
        >
          <div className="max-w-3xl space-y-4 text-lead text-muted">
            <p>
              Grimsby, Ontario sits in a narrow strip of land between the
              Niagara Escarpment and Lake Ontario, at the western gateway to
              the Niagara Region. That geography shapes the town: downtown
              near the shore, neighbourhoods climbing the mountain, and wine
              country at the crest of the hill. Businesses here serve a mix that
              few places match — locals running everyday errands, visitors
              passing through on the way to wine country, and homeowners on
              either side of the escarpment who all search on their phones
              before they call.
            </p>
            <p>
              What works for a Grimsby business online is refreshingly plain:
              a site that says what you do, shows real photos of the work or
              the place, keeps hours and contact details current, and loads
              fast on a phone. Whether you run a shop on the lakeshore, a
              trade that works the mountain, or a service with customers
              across the region, that same foundation is what turns a search
              into a conversation.
            </p>
          </div>
        </Section>

        <Section
          className="border-y border-border bg-surface/40"
          eyebrow="Where we work"
          heading="Where we work in Grimsby"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
              <p>
                Our office is in St. Catharines, half an hour along the
                lakeshore, and we work with Grimsby businesses year-round —
                meeting in person at your place or ours, or running the whole
                project remotely by phone, email and video call. Either way,
                the process is the same: consultation, written quote, design
                you help shape, launch.
              </p>
            </div>
            <EmbeddedMap
              place="Grimsby, Ontario, Canada"
              zoom={13}
              title="Map of Grimsby, Ontario"
              className="shadow-card"
            />
          </div>
        </Section>

        <Section
          eyebrow="Recent projects"
          heading="Websites we have designed and built"
          subhead="Sites for Niagara businesses and organizations, from contractors to medical practices. Each image links to our work page."
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
          heading="What a Grimsby website includes"
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
              Projects open with a free consultation — in person or over a
              call — where we learn what your business sells and who buys it.
              We follow it with a written quote built around what the site
              actually needs, then design and build with you involved at every
              stage rather than behind a curtain. Content normally comes from
              you, and if writing it is the part you dread, we can write it
              for you at an additional cost. Pages are checked across every
              device before launch, and the whole process is laid out on our{" "}
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
          heading="Redesigning a Grimsby website without losing rankings"
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              If your current Grimsby site already brings in calls, the idea
              of rebuilding it can feel like volunteering for risk. It does
              not have to work that way. Search engines respond to what your
              pages say and how they are organized — content and structure,
              not the visual design layered over it. Both of those travel into
              a new site deliberately, on purpose, every time.
            </p>
            <p>
              Before anything is rebuilt we map what your existing site ranks
              for and why, keep the addresses of pages that are doing their
              job, and set up redirects for any that must move. That keeps
              visitors and search engines arriving where they expect. We also
              take the opportunity to repair what the old site got wrong —
              slow pages, services buried three clicks deep, contact details
              that were harder to find on a phone than they should have been.
            </p>
            <p>
              If you want to know what a redesign would mean for your current
              rankings before you decide anything, book a free consultation.
              We will look at the site you have and explain what we see, in
              plain terms and with no pressure either way.
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
            Grimsby marks the western edge of the region we build for, with{" "}
            <Link
              href="/web-design/beamsville"
              className="font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Beamsville
            </Link>{" "}
            just up the escarpment and the rest of Niagara stretching east.
            Every web design page we keep for the region is linked below.
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
                Let&rsquo;s build something for{" "}
                <span className="text-gold-bright">your business</span>
              </h2>
              <p className="mt-4 text-lead text-contrast-ink/90">
                Tell us what your Grimsby business sells and what the website
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

export default GrimsbyWebDesign;
