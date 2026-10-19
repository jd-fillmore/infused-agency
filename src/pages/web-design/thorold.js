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

import hero from "../../img/web-design-thorold-hero.webp";
import img1 from "../../img/thorold-web-design-donor-compass.png";
import img2 from "../../img/thorold-website-design-ggs-niagara-landscaping.png";
import img3 from "../../img/web-design-company-thorold-lincoln-medical-centre.png";
import img4 from "../../img/thorold-web-design-company-plant-no-01.png";
import img5 from "../../img/custom-website-design-thorold-visca-electric.png";
import img6 from "../../img/web-design-thorold-flat-rock-cellars.png";
import test1 from "../../img/testimonial-lucas-folino-niagara.png";
import test2 from "../../img/testimonial-brandi-may-niagara.png";
import test3 from "../../img/testimonial-sandro-visca-niagara.png";

const URL_PATH = "/web-design/thorold";
const CANONICAL = "https://infused.agency/web-design/thorold";

const PROJECTS = [
  {
    src: img1,
    alt: "Donor Compass website by Infused Agency for a donor-data platform used by Canadian nonprofits",
    caption: "Donor Compass — donor-data platform website",
  },
  {
    src: img2,
    alt: "GGS Niagara Landscaping website built by Infused Agency for a Niagara landscape company",
    caption: "GGS Niagara Landscaping — landscaping company website",
  },
  {
    src: img3,
    alt: "Lincoln Medical Centre website by Infused Agency for family physicians in the Niagara region",
    caption: "Lincoln Medical Centre — family medical practice website",
  },
  {
    src: img4,
    alt: "Plant No.01 website by Infused Agency for a vegan food factory in Niagara",
    caption: "Plant No.01 — vegan food factory website",
  },
  {
    src: img5,
    alt: "VISCA Electric website built by Infused Agency for an electrical contractor in Niagara",
    caption: "VISCA Electric — electrical contractor website",
  },
  {
    src: img6,
    alt: "Flat Rock Cellars website by Infused Agency for a winery in the Niagara Escarpment wine region",
    caption: "Flat Rock Cellars — winery website",
  },
];

const SERVICES = [
  {
    title: "Canal-city businesses, easy to find",
    body: "Thorold sits astride the Welland Canal, and plenty of businesses here serve people arriving from the water or working alongside it. Your website should say what you do, where you are, and how to get there — the questions marina visitors, canal workers and local customers all ask in their own way.",
  },
  {
    title: "Trades and service businesses",
    body: "The contractors, repair shops and service providers of South Niagara live off the phone. Sites built here lead with the work you do, the areas you cover, and a phone number that dials the second it is tapped. No hunting through menus for a contact page.",
  },
  {
    title: "Custom design, nothing stock",
    body: "Every site is designed around your brand rather than adapted from a theme. Pages, colours and calls to action are planned for the customers you want — whether they are homeowners on the Burgoyne side, businesses downtown, or visitors passing through on the canal route.",
  },
  {
    title: "WordPress you can update",
    body: "Sites that need a CMS run on WordPress, and we walk you through it before anything goes live. New photos, updated hours, seasonal announcements — the small changes should take minutes rather than a call to a developer every time.",
  },
  {
    title: "Stores for goods you sell and ship",
    body: "Product businesses get Shopify or WooCommerce stores with product pages, carts and checkout that work smoothly on a phone. Inventory and orders stay in your hands through an admin you can run yourself.",
  },
  {
    title: "Search foundations from day one",
    body: "Fast load times, mobile optimization, clean markup and schema come with every build. Those are the pieces search engines need to understand your pages, and the same groundwork AI search tools read when someone asks about businesses in Thorold.",
  },
];

const FAQS = [
  {
    q: "What does a website cost for a Thorold business?",
    a: "There is no standard figure, because each Thorold business needs something different. What shapes the quote: the size of the site, the features you need — a store, booking system, forms, galleries — how ready your content is, and whether you want us to write it. We talk through all of it during a free consultation and follow with a written quote covering exactly what your project involves. The consultation itself is free, with no obligation.",
  },
  {
    q: "Do you meet Thorold clients in person?",
    a: "Yes. Our office is in St. Catharines, minutes from Thorold, and we regularly meet business owners across South Niagara — downtown, in the newer neighbourhoods, or out at their job sites. Remote projects by phone, email and video call work just as well. The quote, the design process and the launch support are the same either way.",
  },
  {
    q: "Can you do SEO for my Thorold business too?",
    a: "Yes. Every website we build includes on-page search foundations — fast pages, clean structure, schema markup, mobile optimization. The ongoing work of improving rankings, holding map results and appearing in AI search answers is a dedicated SEO service after launch. Plenty of businesses start with a website and add search work later.",
  },
  {
    q: "Can my current site be redesigned without losing rankings?",
    a: "Usually, yes, if it is handled carefully. Before rebuilding we study what your existing site ranks for and why, keep the web addresses of pages that are working, and set up redirects for any that must change. No one can promise specific rankings, but this approach protects what you have earned — and the fixes a rebuild usually brings, like faster pages and clearer service descriptions, tend to help rather than hurt.",
  },
];

const RELATED = [
  { label: "Web design services", href: "/web-design" },
  { label: "Niagara web design", href: "/web-design/niagara" },
  { label: "Our work", href: "/work" },
  { label: "Get a quote", href: "/get-a-quote" },
  { label: "SEO in Thorold", href: "/seo/thorold" },
  { label: "Infused Agency home", href: "/" },
];

const schema = graph([
  organizationNode(),
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Web Design", href: "/web-design" },
    { name: "Niagara", href: "/web-design/niagara" },
    { name: "Thorold", href: URL_PATH },
  ]),
  serviceNode({
    name: "Web Design in Thorold",
    serviceType: "Web Design",
    url: CANONICAL,
    areaServed: [
      { "@type": "City", name: "Thorold" },
      { "@type": "AdministrativeArea", name: "Niagara Region, Ontario" },
      { "@type": "Country", name: "Canada" },
    ],
    hasMap: "https://www.google.com/maps/search/?api=1&query=Thorold%2C%20Ontario%2C%20Canada",
  }),
  faqPageNode(FAQS, `${CANONICAL}#faq`),
]);

const ThoroldWebDesign = () => {
  return (
    <>
      <Head>
        <title>Web Design Company in Thorold | Infused Agency</title>
        <meta
          name="description"
          content="Thorold web design company creating fast, mobile-friendly websites for South Niagara businesses, trades and services near the Welland Canal. Book a free consultation."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:site_name" content="Infused Agency" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Web Design Company in Thorold | Infused Agency"
        />
        <meta
          property="og:description"
          content="Thorold web design company creating fast, mobile-friendly websites for South Niagara businesses, trades and services near the Welland Canal. Book a free consultation."
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
                    { name: "Thorold" },
                  ]}
                  className="mb-8"
                />
                <h1 className="max-w-3xl text-balance font-display text-h1 font-bold leading-[1.08] tracking-[-0.02em] text-ink">
                  Thorold Web Design Company
                </h1>
                <p className="mt-6 max-w-2xl text-lead text-muted">
                  Infused Agency builds websites for businesses in Thorold and
                  South Niagara — the trades and services that work the canal
                  corridor, the shops and offices downtown, and the families
                  running businesses from the neighbourhoods on either side of
                  the locks. Fast sites that are easy to use on a phone.
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
                    alt="Web design company serving Thorold, Ontario by Infused Agency"
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
          eyebrow="Thorold, South Niagara"
          heading="Web design for Thorold businesses"
        >
          <div className="max-w-3xl space-y-4 text-lead text-muted">
            <p>
              Thorold is defined by the Welland Canal, which cuts through the
              middle of the city past locks that draw visitors from around the
              world. Around that spine sits a working city: trades and marine
              services along the canal, shops and offices in the downtown core
              and along the streets climbing toward the escarpment, and quiet
              residential areas where home-based businesses have been serving
              South Niagara for decades. Businesses here have always earned
              their work through reputation — the website simply needs to
              carry that reputation to whoever is searching.
            </p>
            <p>
              What works online in Thorold is straightforward: a site that
              loads quickly, describes what you do in plain language, shows
              real photos of your work or your place, and puts your phone
              number where a thumb can reach it. Whether you serve marina
              customers, canal workers, or homeowners from Burgoyne to the
              downtown core, those basics turn a search into a call.
            </p>
          </div>
        </Section>

        <Section
          className="border-y border-border bg-surface/40"
          eyebrow="Where we work"
          heading="Where we work in Thorold"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
              <p>
                Our office is in St. Catharines, a few minutes north of
                Thorold, and we work with businesses across South Niagara
                throughout the year. Meeting in person works well — we visit
                shops, job sites and offices across the city — and so do
                projects run remotely by phone, email and video call. Either
                way, you get the same consultation, quote and launch support.
              </p>
            </div>
            <EmbeddedMap
              place="Thorold, Ontario, Canada"
              zoom={13}
              title="Map of Thorold, Ontario"
              className="shadow-card"
            />
          </div>
        </Section>

        <Section
          eyebrow="Recent projects"
          heading="Websites we have designed and built"
          subhead="Sites for Niagara businesses and organizations, from wineries to trades. Each image links to our work page."
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
          heading="What a Thorold website includes"
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
              Every project begins with a free consultation — we learn what
              your business sells and who buys it, and you get a sense of how
              we work before committing to anything. A written quote follows,
              built around what the site actually needs rather than a generic
              package. Design and build then move ahead together, with your
              feedback shaping the work at each stage. Pages are checked
              across every device before launch, and if writing content is
              the part you would rather skip, we can write it for you at an
              additional cost. The full process is described on our{" "}
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
          heading="Redesigning a Thorold website without losing rankings"
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              A Thorold site that has quietly done its job for years — steady
              traffic, regular calls — is worth protecting, and redesigning it
              does not have to mean starting over where search is concerned.
              Search engines care about what your pages say and how they are
              structured, not about the colours layered over it. Both of those
              carry forward into a new build on purpose, every time.
            </p>
            <p>
              Before any rebuild, we document what your existing site ranks
              for and why, keep the web addresses of pages that are earning
              their keep, and set up redirects for any that must move. That
              keeps visitors and search engines landing where they expect. We
              also fix what the old site got wrong — slow pages, services
              buried where nobody finds them, contact details that were too
              much work on a phone.
            </p>
            <p>
              If you want to understand what a redesign would mean for your
              current rankings before deciding anything, a free consultation
              is the low-stakes way to find out. Bring the site you have; we
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
            Thorold sits between{" "}
            <Link
              href="/web-design/st-catharines"
              className="font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              St. Catharines
            </Link>{" "}
            and{" "}
            <Link
              href="/web-design/welland"
              className="font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Welland
            </Link>
            , and we build for businesses across the whole region. Every web
            design page we keep for Niagara is linked below.
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
                Tell us what your Thorold business sells and what the website
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

export default ThoroldWebDesign;
