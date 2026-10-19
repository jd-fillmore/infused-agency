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

import hero from "../../img/web-design-port-colborne-hero.webp";
import img1 from "../../img/port-colborne-website-design-ggs-niagara-landscaping.png";
import img2 from "../../img/web-design-company-port-colborne-lincoln-medical-centre.png";
import img3 from "../../img/port-colborne-web-design-company-plant-no-01.png";
import img4 from "../../img/custom-website-design-port-colborne-visca-electric.png";
import img5 from "../../img/web-design-port-colborne-flat-rock-cellars.png";
import img6 from "../../img/port-colborne-web-design-jerrys-insulating.png";
import test1 from "../../img/testimonial-lucas-folino-niagara.png";
import test2 from "../../img/testimonial-brandi-may-niagara.png";
import test3 from "../../img/testimonial-sandro-visca-niagara.png";

const URL_PATH = "/web-design/port-colborne";
const CANONICAL = "https://infused.agency/web-design/port-colborne";

const PROJECTS = [
  {
    src: img1,
    alt: "GGS Niagara Landscaping website by Infused Agency for a Niagara landscape and garden company",
    caption: "GGS Niagara Landscaping — landscaping company website",
  },
  {
    src: img2,
    alt: "Lincoln Medical Centre website by Infused Agency for family physicians in the Niagara region",
    caption: "Lincoln Medical Centre — family medical practice website",
  },
  {
    src: img3,
    alt: "Plant No.01 website by Infused Agency for a vegan food factory in the Niagara region",
    caption: "Plant No.01 — vegan food factory website",
  },
  {
    src: img4,
    alt: "VISCA Electric website built by Infused Agency for an electrical contractor serving Niagara",
    caption: "VISCA Electric — electrical contractor website",
  },
  {
    src: img5,
    alt: "Flat Rock Cellars website by Infused Agency for a winery in the Niagara Escarpment wine region",
    caption: "Flat Rock Cellars — winery website",
  },
  {
    src: img6,
    alt: "Jerry's Insulating website by Infused Agency for an insulation contractor in the Niagara region",
    caption: "Jerry's Insulating — insulation contractor website",
  },
];

const SERVICES = [
  {
    title: "Lake Erie businesses, shown honestly",
    body: "Port Colborne lives with Lake Erie at its doorstep — beaches, marinas, fishing, and the tourism that follows all three. Your website should show what the place is actually like: real photos of the water and the work, clear seasonal hours, and directions that make finding you simple from the highway or the canal.",
  },
  {
    title: "Sites for trades and marine services",
    body: "The contractors, marine services and repair shops here keep the south end of the canal working. Your site should lead with what you do, where you work, and a phone number that dials on tap. Short forms and service pages written for real searches round it out.",
  },
  {
    title: "Custom design around your brand",
    body: "Nothing we build comes adapted from a stock theme. Pages, layout and calls to action are planned for the customers you want — whether that is a family planning a beach weekend, a boat owner needing work done, or a local homeowner who found you through a search.",
  },
  {
    title: "WordPress you control",
    body: "When a site needs a CMS we build on WordPress and show you the ropes before launch. Updating hours, swapping photos and posting seasonal news stays in your hands, without a ticket or a phone call every time.",
  },
  {
    title: "Stores for products you ship or sell",
    body: "Product businesses get Shopify or WooCommerce stores with product pages, carts and checkout that work cleanly on a phone. You manage inventory and orders yourself through an admin built for people who do not do this every day.",
  },
  {
    title: "Search groundwork built in",
    body: "Fast load times, mobile optimization, clean structure and schema markup are part of every site we launch. That foundation is what search engines need to index your pages properly, and what AI search tools draw from when someone asks about businesses in Port Colborne.",
  },
];

const FAQS = [
  {
    q: "What does a website cost for a Port Colborne business?",
    a: "It varies with the project rather than following a fixed menu. What shapes the quote: how many pages you need, the features involved — a store, bookings, forms, galleries — how ready your content is, and whether you would like us to write it. A free consultation covers all of it, and the written quote that follows describes exactly what your project involves. No charge for the consultation, no obligation to continue.",
  },
  {
    q: "Do you meet Port Colborne clients in person?",
    a: "Yes. Our office is in St. Catharines, about forty minutes north along the highway, and we regularly meet business owners at their places across South Niagara and the lakeshore. Remote projects by phone, email and video call are equally common, with the same quote, design involvement and launch support either way.",
  },
  {
    q: "Can you handle SEO for my Port Colborne business as well?",
    a: "Yes. On-page search foundations — fast pages, clean structure, schema markup, mobile optimization — come standard in every website we build. Ongoing SEO work, the kind that improves rankings and map results over time, is offered as a dedicated service after launch. Many businesses begin with the website and continue into search work later.",
  },
  {
    q: "Can my current site be redesigned without losing its rankings?",
    a: "In most cases, yes — if the work is handled carefully. Before rebuilding we document what your existing site ranks for and why, keep the web addresses of pages that are doing their job, and set up redirects for any that must change. Specific rankings can never be promised by anyone, but this approach protects what you have earned, and the repairs a rebuild usually brings tend to help your visibility rather than harm it.",
  },
];

const RELATED = [
  { label: "Web design services", href: "/web-design" },
  { label: "Niagara web design", href: "/web-design/niagara" },
  { label: "Our work", href: "/work" },
  { label: "Get a quote", href: "/get-a-quote" },
  { label: "SEO in Port Colborne", href: "/seo/port-colborne" },
  { label: "Infused Agency home", href: "/" },
];

const schema = graph([
  organizationNode(),
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Web Design", href: "/web-design" },
    { name: "Niagara", href: "/web-design/niagara" },
    { name: "Port Colborne", href: URL_PATH },
  ]),
  serviceNode({
    name: "Web Design in Port Colborne",
    serviceType: "Web Design",
    url: CANONICAL,
    areaServed: [
      { "@type": "City", name: "Port Colborne" },
      { "@type": "AdministrativeArea", name: "Niagara Region, Ontario" },
      { "@type": "Country", name: "Canada" },
    ],
    hasMap: "https://www.google.com/maps/search/?api=1&query=Port%20Colborne%2C%20Ontario%2C%20Canada",
  }),
  faqPageNode(FAQS, `${CANONICAL}#faq`),
]);

const PortColborneWebDesign = () => {
  return (
    <>
      <Head>
        <title>Web Design Company in Port Colborne | Infused Agency</title>
        <meta
          name="description"
          content="Port Colborne web design company building fast, mobile-friendly websites for Lake Erie businesses, marine services and South Niagara trades. Book a free consultation."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:site_name" content="Infused Agency" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Web Design Company in Port Colborne | Infused Agency"
        />
        <meta
          property="og:description"
          content="Port Colborne web design company building fast, mobile-friendly websites for Lake Erie businesses, marine services and South Niagara trades. Book a free consultation."
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
                    { name: "Port Colborne" },
                  ]}
                  className="mb-8"
                />
                <h1 className="max-w-3xl text-balance font-display text-h1 font-bold leading-[1.08] tracking-[-0.02em] text-ink">
                  Port Colborne Web Design Company
                </h1>
                <p className="mt-6 max-w-2xl text-lead text-muted">
                  Infused Agency designs and builds websites for businesses in
                  Port Colborne — the lakefront shops and restaurants, the
                  marine services and trades along the canal, and the local
                  businesses that have served South Niagara for years. Fast,
                  mobile-friendly sites that turn searches into visits and
                  calls.
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
                    alt="Web design company serving Port Colborne, Ontario by Infused Agency"
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
          eyebrow="Port Colborne, Lake Erie"
          heading="Web design for Port Colborne businesses"
        >
          <div className="max-w-3xl space-y-4 text-lead text-muted">
            <p>
              Port Colborne sits on the north shore of Lake Erie at the
              southern entrance to the Welland Canal, where Lock 8 raises and
              lowers ships within sight of downtown. The city runs on two
              rhythms: the steady one of trades, marine services and local
              shops that keep the south end of Niagara moving, and the
              seasonal one that arrives with warm weather — beachgoers,
              boaters, fishermen and festival crowds following the water. A
              website here has to serve both, making a local contractor
              easy to call in February and a beachside business easy to find
              in July.
            </p>
            <p>
              What makes that work online is the same set of basics done
              properly: pages that load quickly on a phone, honest photos of
              the place and the work, hours that reflect the season you are
              actually in, and contact details within reach of a thumb.
              Businesses that get those right tend to be the ones people find
              first and remember after.
            </p>
          </div>
        </Section>

        <Section
          className="border-y border-border bg-surface/40"
          eyebrow="Where we work"
          heading="Where we work in Port Colborne"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
              <p>
                Our office is in St. Catharines, north up the highway, and we
                work with Port Colborne businesses through the year — meeting
                in person at your shop, waterfront location or job site, or
                running the entire project remotely by phone, email and video
                call. Either way you get the same consultation, the same
                written quote, and the same support through launch.
              </p>
            </div>
            <EmbeddedMap
              place="Port Colborne, Ontario, Canada"
              zoom={13}
              title="Map of Port Colborne, Ontario"
              className="shadow-card"
            />
          </div>
        </Section>

        <Section
          eyebrow="Recent projects"
          heading="Websites we have designed and built"
          subhead="Sites for Niagara businesses and organizations, from landscapers to wineries. Each image links to our work page."
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
          heading="What a Port Colborne website includes"
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
              business and your customers, followed by a written quote for the
              work it actually needs — not a generic package with things you
              will never use. Design and build then proceed with your
              feedback shaping the work before anything is finished. Pages are
              tested across every device before launch, and if writing the
              content is the part you would rather hand off, we can write it
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
          heading="Redesigning a Port Colborne website without losing rankings"
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              An older website that has quietly carried a Port Colborne
              business through years of searches feels like something you
              cannot afford to break — and the fear is understandable, even
              if the trade-off it assumes is mostly imaginary. Search engines
              respond to what your pages say and how they are organized, not
              to the design layered over top. Content and structure both
              travel into a new site deliberately, on purpose, every time.
            </p>
            <p>
              We work it out before anything is rebuilt. We document what
              your current site ranks for and why, preserve the web addresses
              of pages that are doing their job, and set up redirects for any
              that must change — so visitors and search engines arrive where
              they expect. Along the way we repair what the old site got
              wrong: slow pages, services buried out of sight, contact
              details that took too much work to reach on a phone.
            </p>
            <p>
              If you would like to know what a redesign would mean for the
              rankings you hold today before committing to anything, book a
              free consultation. We will look at your current site and tell
              you what we see, with no obligation either way.
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
            Port Colborne is the southern end of the region we build for, with{" "}
            <Link
              href="/web-design/welland"
              className="font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Welland
            </Link>{" "}
            up the canal and{" "}
            <Link
              href="/web-design/crystal-beach"
              className="font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Crystal Beach
            </Link>{" "}
            along the lakeshore to the west. Every web design page we keep
            for Niagara is linked below.
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
                Tell us about your Port Colborne business and what the website
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

export default PortColborneWebDesign;
