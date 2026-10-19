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

import hero from "../../img/web-design-fonthill-hero.webp";
import img1 from "../../img/web-design-company-fonthill-lincoln-medical-centre.png";
import img2 from "../../img/fonthill-web-design-company-plant-no-01.png";
import img3 from "../../img/custom-website-design-fonthill-visca-electric.png";
import img4 from "../../img/web-design-fonthill-flat-rock-cellars.png";
import img5 from "../../img/fonthill-web-design-jerrys-insulating.png";
import img6 from "../../img/fonthill-website-design-kd-flowers.png";
import test1 from "../../img/testimonial-lucas-folino-niagara.png";
import test2 from "../../img/testimonial-brandi-may-niagara.png";
import test3 from "../../img/testimonial-sandro-visca-niagara.png";

const URL_PATH = "/web-design/fonthill";
const CANONICAL = "https://infused.agency/web-design/fonthill";

const PROJECTS = [
  {
    src: img1,
    alt: "Lincoln Medical Centre website by Infused Agency for family physicians serving the Niagara region",
    caption: "Lincoln Medical Centre — family medical practice website",
  },
  {
    src: img2,
    alt: "Plant No.01 website by Infused Agency for a vegan food factory in the Niagara region",
    caption: "Plant No.01 — vegan food factory website",
  },
  {
    src: img3,
    alt: "VISCA Electric website built by Infused Agency for an electrical contractor in Niagara",
    caption: "VISCA Electric — electrical contractor website",
  },
  {
    src: img4,
    alt: "Flat Rock Cellars website by Infused Agency for a winery on the Niagara Escarpment",
    caption: "Flat Rock Cellars — winery website",
  },
  {
    src: img5,
    alt: "Jerry's Insulating website by Infused Agency for an insulation contractor in Niagara",
    caption: "Jerry's Insulating — insulation contractor website",
  },
  {
    src: img6,
    alt: "KD Flowers website by Infused Agency for a Niagara florist and garden centre",
    caption: "KD Flowers — florist and garden centre website",
  },
];

const SERVICES = [
  {
    title: "Village businesses with a wider reach",
    body: "Fonthill sits on the escarpment plateau above Welland, a village that draws people in from the farms and estates around it. Businesses here often serve a trade area larger than the village itself — your website should make that reach clear, describing where you work and drawing customers in from Pelham and beyond.",
  },
  {
    title: "Custom design, planned around your brand",
    body: "We design every site from scratch rather than starting from a stock template. The pages, the layout and the calls to action are planned for your customers — neighbours who have known the family for years, and newcomers searching for what you offer for the first time.",
  },
  {
    title: "Trades and home services pages that convert",
    body: "Contractors serving the houses, properties and farms around Fonthill need sites that put the work first: services described plainly, areas covered, and a phone number that dials the moment it is tapped. Gallery pages of real jobs do the rest.",
  },
  {
    title: "WordPress you can run yourself",
    body: "Sites needing a content management system are usually built on WordPress, and we walk you through it before launch. Seasonal hours, new photos, fresh offerings — changes like that take minutes, not a phone call to a developer.",
  },
  {
    title: "Stores for what you grow, make or sell",
    body: "Product businesses get Shopify or WooCommerce stores — product pages, carts and checkout set up so customers move through easily and you can manage everything yourself from a straightforward admin.",
  },
  {
    title: "Search foundations included",
    body: "Fast load times, mobile optimization, clean structure and schema markup are part of every build. That groundwork is what helps your pages surface on Google, and what AI search tools read when someone asks about businesses in Fonthill or Pelham.",
  },
];

const FAQS = [
  {
    q: "What does a website cost for a Fonthill business?",
    a: "There is no standard price, because every Fonthill business needs something a little different. What shapes the quote: the number of pages, whether you need a store, booking or forms, how ready your content is, and whether you would like us to write it. After a free consultation we send a written quote that spells out exactly what your project involves — no charge for the consultation, no obligation.",
  },
  {
    q: "Do you work with Fonthill businesses in person or remotely?",
    a: "Either. Fonthill is in the Town of Pelham, a short drive from our St. Catharines office, and we regularly meet owners at their shops, farms or job sites. If remote is easier, projects run smoothly by phone, email and video call — the quote and design process are the same.",
  },
  {
    q: "Can you handle SEO for my Fonthill business as well as the website?",
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
  { label: "SEO in Fonthill", href: "/seo/fonthill" },
  { label: "Infused Agency home", href: "/" },
];

const schema = graph([
  organizationNode(),
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Web Design", href: "/web-design" },
    { name: "Niagara", href: "/web-design/niagara" },
    { name: "Fonthill", href: URL_PATH },
  ]),
  serviceNode({
    name: "Web Design in Fonthill",
    serviceType: "Web Design",
    url: CANONICAL,
    areaServed: [
      { "@type": "Community", name: "Fonthill" },
      { "@type": "AdministrativeArea", name: "Town of Pelham, Ontario" },
      { "@type": "Country", name: "Canada" },
    ],
    hasMap: "https://www.google.com/maps/search/?api=1&query=Fonthill%2C%20Ontario%2C%20Canada",
  }),
  faqPageNode(FAQS, `${CANONICAL}#faq`),
]);

const FonthillWebDesign = () => {
  return (
    <>
      <Head>
        <title>Web Design Company in Fonthill | Infused Agency</title>
        <meta
          name="description"
          content="Fonthill web design company creating fast, mobile-friendly websites for village businesses, farms, trades and services in the Town of Pelham. Book a free consultation."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:site_name" content="Infused Agency" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Web Design Company in Fonthill | Infused Agency"
        />
        <meta
          property="og:description"
          content="Fonthill web design company creating fast, mobile-friendly websites for village businesses, farms, trades and services in the Town of Pelham. Book a free consultation."
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
                    { name: "Fonthill" },
                  ]}
                  className="mb-8"
                />
                <h1 className="max-w-3xl text-balance font-display text-h1 font-bold leading-[1.08] tracking-[-0.02em] text-ink">
                  Fonthill Web Design Company
                </h1>
                <p className="mt-6 max-w-2xl text-lead text-muted">
                  Infused Agency builds websites for businesses in Fonthill
                  and the Town of Pelham — village shops and services, farms
                  and garden businesses on the plateau, and the trades that
                  serve the properties and homes around them. Sites that load
                  quickly and make calling easy.
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
                    alt="Web design company serving Fonthill, Ontario by Infused Agency"
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
          eyebrow="Fonthill, Town of Pelham"
          heading="Web design for Fonthill businesses"
        >
          <div className="max-w-3xl space-y-4 text-lead text-muted">
            <p>
              Fonthill sits on the plateau of the Niagara Escarpment above
              Welland, a village with a small-town core and a trade area that
              reaches well past its edges — farms, estates and newer
              subdivisions spread through the Town of Pelham, all within a
              short drive. Businesses here tend to earn their customers twice:
              once through reputation among people who have lived nearby for
              years, and again through the searches of newer residents and
              visitors who find the village for the first time online.
            </p>
            <p>
              Serving both well takes the basics, done properly. A site that
              loads fast on a phone, describes what you do in plain language,
              shows real photos of the work or the storefront, and keeps
              hours and contact details current will outperform anything
              clever built atop a weak foundation. That is the work we
              do for Fonthill businesses.
            </p>
          </div>
        </Section>

        <Section
          className="border-y border-border bg-surface/40"
          eyebrow="Where we work"
          heading="Where we work in Fonthill"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
              <p>
                Our office is in St. Catharines, twenty minutes north across
                the escarpment, and we work with Fonthill and Pelham
                businesses throughout the year — meeting in person at your
                shop, farm or job site, or running the whole project remotely
                by phone, email and video call. Either way, the process stays
                the same: consultation, written quote, design you help shape,
                launch.
              </p>
            </div>
            <EmbeddedMap
              place="Fonthill, Ontario, Canada"
              zoom={13}
              title="Map of Fonthill, Ontario"
              className="shadow-card"
            />
          </div>
        </Section>

        <Section
          eyebrow="Recent projects"
          heading="Websites we have designed and built"
          subhead="Sites for Niagara businesses and organizations, from medical practices to trades. Each image links to our work page."
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
          heading="What a Fonthill website includes"
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
              your business sells and who buys it, and you get a clear sense
              of the work before committing. A written quote follows, built
              around what the site actually needs rather than a preset
              package. Design and build then move ahead together, with your
              feedback shaping the work rather than a surprise at the end.
              Pages are checked across every device before launch, and if
              writing content is the part you would rather skip, we can write
              it for you at an additional cost. The whole path from first
              call to launch day is laid out on our{" "}
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
          heading="Redesigning a Fonthill website without losing rankings"
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              If your current site has carried the business quietly for years,
              pulling in steady traffic and turning searches into customers,
              the idea of rebuilding it can feel like volunteering for risk.
              It does not have to work that way. Search engines care about
              what your pages say and how they are structured — content and
              structure, not the visual design layered over it. Both travel
              into a new build deliberately, on purpose, every time.
            </p>
            <p>
              Before anything is rebuilt, we map what your existing site
              ranks for and why, keep the addresses of pages that are doing
              their job, and set up redirects for any that must move. That
              keeps visitors and search engines arriving where they expect.
              We also take the chance to repair what the old site got wrong —
              slow pages, services buried three clicks deep, contact details
              that were harder to find on a phone than they should have been.
            </p>
            <p>
              Want to know what a redesign would mean for your current
              rankings before you decide anything? Book a free consultation.
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
            Fonthill is one of the communities across Niagara we build for,
            sitting between{" "}
            <Link
              href="/web-design/welland"
              className="font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Welland
            </Link>{" "}
            and{" "}
            <Link
              href="/web-design/thorold"
              className="font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Thorold
            </Link>{" "}
            at the crest of the escarpment. Every web design page we keep for
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
                Let&rsquo;s build something for{" "}
                <span className="text-gold-bright">your business</span>
              </h2>
              <p className="mt-4 text-lead text-contrast-ink/90">
                Tell us what your Fonthill business sells and what the website
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

export default FonthillWebDesign;
