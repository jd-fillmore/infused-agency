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

import hero from "../../img/web-design-crystal-beach-hero.webp";
import img1 from "../../img/crystal-beach-web-design-company-plant-no-01.png";
import img2 from "../../img/custom-website-design-crystal-beach-visca-electric.png";
import img3 from "../../img/web-design-crystal-beach-flat-rock-cellars.png";
import img4 from "../../img/crystal-beach-web-design-jerrys-insulating.png";
import img5 from "../../img/crystal-beach-website-design-kd-flowers.png";
import img6 from "../../img/web-design-company-crystal-beach-cass-a-bella-construction.png";
import test1 from "../../img/testimonial-lucas-folino-niagara.png";
import test2 from "../../img/testimonial-brandi-may-niagara.png";
import test3 from "../../img/testimonial-sandro-visca-niagara.png";

const URL_PATH = "/web-design/crystal-beach";
const CANONICAL = "https://infused.agency/web-design/crystal-beach";

const PROJECTS = [
  {
    src: img1,
    alt: "Plant No.01 website by Infused Agency for a vegan food factory in the Niagara region",
    caption: "Plant No.01 — vegan food factory website",
  },
  {
    src: img2,
    alt: "VISCA Electric website built by Infused Agency for an electrical contractor in Niagara",
    caption: "VISCA Electric — electrical contractor website",
  },
  {
    src: img3,
    alt: "Flat Rock Cellars website by Infused Agency for a winery in the Niagara Escarpment wine region",
    caption: "Flat Rock Cellars — winery website",
  },
  {
    src: img4,
    alt: "Jerry's Insulating website by Infused Agency for an insulation contractor serving Niagara",
    caption: "Jerry's Insulating — insulation contractor website",
  },
  {
    src: img5,
    alt: "KD Flowers website by Infused Agency for a Niagara florist and garden centre",
    caption: "KD Flowers — florist and garden centre website",
  },
  {
    src: img6,
    alt: "Cass-A-Bella Construction website by Infused Agency for a custom home builder in Niagara",
    caption: "Cass-A-Bella Construction — custom builder website",
  },
];

const SERVICES = [
  {
    title: "Beach businesses that work all year",
    body: "Crystal Beach runs on two seasons at once — the summer crowds on the sand and the year-round locals who keep the place running. Your website should serve both: seasonal hours kept current, real photos of the beach and the business, and menus, bookings or event listings that a phone can load on the pier without waiting.",
  },
  {
    title: "Cottages, rentals and stays",
    body: "Rental and hospitality businesses here need pages that answer the questions people actually ask: what does it look like, when is it available, what does it cost to book, and how do I reach you. Photo galleries that show the real property and calendars or enquiry forms that work on a phone do more than any amount of decoration.",
  },
  {
    title: "Custom design, built from scratch",
    body: "We design every site around your brand rather than adapting a stock theme. Pages, layout and calls to action are planned for the customers you want — whether they are day-trippers searching on a Friday afternoon or year-round residents who have driven past your storefront for years.",
  },
  {
    title: "WordPress you can update yourself",
    body: "Sites that need a content management system are usually built on WordPress, and we walk you through it before launch. Updating hours, posting events and swapping photos take minutes rather than a call to a developer every time the season turns.",
  },
  {
    title: "Stores for goods you ship or sell",
    body: "Product businesses get Shopify or WooCommerce stores with product pages, carts and checkout that work cleanly on a phone. You manage inventory and orders yourself through an admin built for people who have better things to do than wrestle with software.",
  },
  {
    title: "Search foundations in every build",
    body: "Fast load times, mobile optimization, clean structure and schema markup are part of every site we launch. That groundwork is what helps your pages surface on Google, and what AI search tools read when someone asks about restaurants, shops or rentals near Crystal Beach.",
  },
];

const FAQS = [
  {
    q: "What does a website cost for a Crystal Beach business?",
    a: "There is no standard figure, because every business here needs something a little different. What shapes the quote: the size of the site, the features you need — a store, booking calendar, forms, galleries — how ready your content is, and whether you want us to write it. We talk through all of it during a free consultation and follow with a written quote covering exactly what your project involves. The consultation itself is free, with no obligation.",
  },
  {
    q: "Do you meet Crystal Beach clients in person?",
    a: "Yes. Crystal Beach is in the Town of Fort Erie, about half an hour from our St. Catharines office, and we regularly meet business owners at their shops, cottages and job sites along the lakeshore. Remote projects by phone, email and video call work just as well. The quote, the design process and the launch support are the same either way.",
  },
  {
    q: "Can you handle SEO for my Crystal Beach business too?",
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
  { label: "SEO in Crystal Beach", href: "/seo/crystal-beach" },
  { label: "Infused Agency home", href: "/" },
];

const schema = graph([
  organizationNode(),
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Web Design", href: "/web-design" },
    { name: "Niagara", href: "/web-design/niagara" },
    { name: "Crystal Beach", href: URL_PATH },
  ]),
  serviceNode({
    name: "Web Design in Crystal Beach",
    serviceType: "Web Design",
    url: CANONICAL,
    areaServed: [
      { "@type": "Community", name: "Crystal Beach" },
      { "@type": "AdministrativeArea", name: "Town of Fort Erie, Ontario" },
      { "@type": "Country", name: "Canada" },
    ],
    hasMap: "https://www.google.com/maps/search/?api=1&query=Crystal%20Beach%2C%20Ontario%2C%20Canada",
  }),
  faqPageNode(FAQS, `${CANONICAL}#faq`),
]);

const CrystalBeachWebDesign = () => {
  return (
    <>
      <Head>
        <title>Web Design Company in Crystal Beach | Infused Agency</title>
        <meta
          name="description"
          content="Crystal Beach web design company creating fast, mobile-friendly websites for lakeshore shops, rentals and Fort Erie businesses. Book a free consultation."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:site_name" content="Infused Agency" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Web Design Company in Crystal Beach | Infused Agency"
        />
        <meta
          property="og:description"
          content="Crystal Beach web design company creating fast, mobile-friendly websites for lakeshore shops, rentals and Fort Erie businesses. Book a free consultation."
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
                    { name: "Crystal Beach" },
                  ]}
                  className="mb-8"
                />
                <h1 className="max-w-3xl text-balance font-display text-h1 font-bold leading-[1.08] tracking-[-0.02em] text-ink">
                  Crystal Beach Web Design Company
                </h1>
                <p className="mt-6 max-w-2xl text-lead text-muted">
                  Infused Agency designs and builds websites for businesses in
                  Crystal Beach and Fort Erie — the lakeshore shops and
                  restaurants, cottage and rental properties, and the trades
                  that keep the south end of Niagara running. Fast,
                  mobile-friendly sites that work as well on the pier as they
                  do at home.
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
                    alt="Web design company serving Crystal Beach, Ontario by Infused Agency"
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
          eyebrow="Crystal Beach, Fort Erie"
          heading="Web design for Crystal Beach businesses"
        >
          <div className="max-w-3xl space-y-4 text-lead text-muted">
            <p>
              Crystal Beach sits on the Lake Erie shore at the southern tip
              of Niagara, inside the Town of Fort Erie, where a long sandy
              beach has drawn summer visitors for more than a century. The
              businesses that serve them — restaurants, shops, rental
              properties, event spaces — live and die by the season, but the
              community underneath never closes. A website here has to carry
              both realities: menus and bookings that load on a crowded beach
              in July, and contact details, services and hours that still
              work for a local checking in on a grey Tuesday in January.
            </p>
            <p>
              What that looks like in practice is the same set of basics,
              done properly. Pages that load quickly on a phone with one bar
              of signal. Real photos of the water, the place and the work.
              Hours that reflect the season you are actually in. Contact
              details within reach of a thumb. Businesses that get those
              right are the ones people find first and remember after.
            </p>
          </div>
        </Section>

        <Section
          className="border-y border-border bg-surface/40"
          eyebrow="Where we work"
          heading="Where we work in Crystal Beach"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
              <p>
                Our office is in St. Catharines, about forty minutes north
                up the lakeshore, and we work with Crystal Beach and Fort
                Erie businesses through the year — meeting in person at your
                shop, cottage or job site, or running the entire project
                remotely by phone, email and video call. Either way you get
                the same consultation, the same written quote, and the same
                support through launch.
              </p>
            </div>
            <EmbeddedMap
              place="Crystal Beach, Ontario, Canada"
              zoom={13}
              title="Map of Crystal Beach, Ontario"
              className="shadow-card"
            />
          </div>
        </Section>

        <Section
          eyebrow="Recent projects"
          heading="Websites we have designed and built"
          subhead="Sites for Niagara businesses and organizations, from food producers to builders. Each image links to our work page."
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
          heading="What a Crystal Beach website includes"
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
              Each project opens with a free consultation — we learn what
              your business sells and who buys it, and you get a clear sense
              of the work before committing to anything. A written quote
              follows, built around what the site actually needs rather than
              a preset package. Design and build then proceed with your
              feedback shaping the result before anything is finished. Pages
              are tested across every device before launch, and if writing
              the content is the part you would rather hand off, we can
              write it for you at an additional cost. The full path from
              first call to launch day is written out on our{" "}
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
          heading="Redesigning a Crystal Beach website without losing rankings"
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              A site that has quietly carried a Crystal Beach business for
              years — pulling in steady search traffic, turning strangers into
              regulars — feels like something you cannot afford to break.
              That caution is reasonable. The trade-off it assumes, though, is
              mostly imaginary: a redesign can carry forward everything search
              engines value about your pages, because what they value is
              content and structure, not colours and layout.
            </p>
            <p>
              We work it out in advance. Before any rebuild we document what
              your current site ranks for and why, preserve the web addresses
              of pages that are earning their keep, and set up redirects for
              the ones that must change. That keeps visitors and search
              engines landing where they expect. Along the way the slow
              pages, buried services and hard-to-find contact details of the
              old site get repaired — repairs that usually help your
              visibility rather than hurt it.
            </p>
            <p>
              If you want to understand what a redesign would mean for your
              current rankings before you decide anything, book a free
              consultation. We will look at the site you have and tell you
              what we see, in plain terms and with no pressure either way.
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
            Crystal Beach is the southern lakeshore end of the region we
            build for, with{" "}
            <Link
              href="/web-design/fort-erie"
              className="font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Fort Erie
            </Link>{" "}
            just up the road and the rest of Niagara stretching north along
            the lake. Every web design page we keep for the region is linked
            below.
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
                Tell us about your Crystal Beach business and what the
                website should be doing, and we will map out what the project
                needs. No obligation, no jargon.
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

export default CrystalBeachWebDesign;
