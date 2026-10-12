import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Nav from "../../components/Nav/nav";
import PageHero from "../../components/ui/PageHero";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";
import about from "../img/about.jpeg";
import PageJsonLd from "../../components/seo/PageJsonLd";
import { aboutPageGraph } from "../lib/verticalSeoSchema";

const PROSE = "max-w-3xl text-base leading-relaxed text-muted";

const About = () => {
  return (
    <>
      <Head>
        <title>Infused Agency | About Our Company</title>
        <meta
          name="description"
          content="Learn more about the core values, the hardworking team and how we accomplish your business goals at Infused."
        />
        <link rel="canonical" href="https://infused.agency/about" />
        <PageJsonLd
          graph={aboutPageGraph({
            url: "/about",
            name: "Infused Agency | About Our Company",
            description:
              "Learn more about the core values, the hardworking team and how we accomplish your business goals at Infused.",
          })}
        />
      </Head>
      <Nav />
      <main className="redesign-root">
        <PageHero
          title="About Infused Agency"
          description="The best web design, development and SEO company in the Niagara region."
          breadcrumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
        />

        <Section>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <p className={PROSE}>
              Welcome to Infused Agency, the leading{" "}
              <Link className="text-accent hover:text-accent-hover" href="/">
                SEO services Niagara
              </Link>{" "}
              company in the Niagara region. With over a decade of experience,
              we&rsquo;ve established ourselves as the go-to digital partner for
              businesses looking to boost their online presence, generate leads,
              and drive sales through their websites.
            </p>
            <figure>
              <Image
                className="h-auto w-full rounded-xl border border-border"
                src={about}
                alt="business needs"
              />
              <figcaption className="mt-3 text-center text-sm text-muted">
                <em>
                  JD (Owner) and his daughter (side-kick) hiking in Banff
                </em>
              </figcaption>
            </figure>
          </div>
        </Section>

        <Section heading="Our Mission">
          <p className={PROSE}>
            At Infused Agency, our mission is simple yet powerful: to transform
            your website into your best sales manager. We believe that a
            well-designed, strategically crafted website is more than just a
            digital brochure - it&rsquo;s a powerful tool that can significantly
            impact your bottom line.
          </p>
        </Section>

        <Section heading="Who We Are">
          <p className={PROSE}>
            We are a team of seasoned experts passionate about blending
            creativity with functionality. Our diverse skill set spans across{" "}
            <Link className="text-accent hover:text-accent-hover" href="/web-design">
              web design
            </Link>
            ,{" "}
            <Link className="text-accent hover:text-accent-hover" href="/">
              search engine optimization (SEO)
            </Link>
            , and digital marketing. This comprehensive approach allows us to
            deliver holistic solutions that address all aspects of your online
            presence.
          </p>
        </Section>

        <Section heading="Our Approach">
          <p className={PROSE}>
            Our process is rooted in a deep understanding of your business goals
            and target audience. We begin with a thorough consultation, followed
            by meticulous planning and design. Our development phase leverages
            cutting-edge technologies like Next.js for static sites and
            WordPress for dynamic, content-rich websites. We prioritize
            responsive design to ensure your site performs flawlessly across all
            devices.
          </p>
        </Section>

        <Section heading="Why Choose Infused Agency?">
          <Card className="max-w-4xl">
            <ol className="grid gap-5 sm:grid-cols-2">
              <li className="text-sm leading-relaxed text-muted">
                <strong className="text-ink">Proven Results:</strong> Our
                portfolio showcases numerous success stories from businesses
                across St. Catharines, Niagara Falls, Welland, Fort Erie,
                Thorold, and Niagara-on-the-Lake. We&rsquo;ve helped clients
                achieve remarkable results, including a 20,000% increase in
                leads over 6 months and 5,800 new monthly visitors.
              </li>
              <li className="text-sm leading-relaxed text-muted">
                <strong className="text-ink">Local Expertise:</strong> As a
                Niagara-based company, we understand the unique needs and
                challenges of businesses in our region. Our local knowledge,
                combined with our digital expertise, gives you a competitive
                edge.
              </li>
              <li className="text-sm leading-relaxed text-muted">
                <strong className="text-ink">Comprehensive Solutions:</strong>{" "}
                From{" "}
                <Link className="text-accent hover:text-accent-hover" href="/">
                  digital marketing
                </Link>{" "}
                to{" "}
                <Link className="text-accent hover:text-accent-hover" href="/">
                  SEO
                </Link>{" "}
                and lead-generating web design, we offer end-to-end solutions to
                elevate your online presence.
              </li>
              <li className="text-sm leading-relaxed text-muted">
                <strong className="text-ink">Client-Centric Approach:</strong>{" "}
                We view our clients as partners. Your success is our success,
                and we&rsquo;re committed to delivering solutions that drive
                real business growth.
              </li>
              <li className="text-sm leading-relaxed text-muted">
                <strong className="text-ink">Cutting-Edge Technology:</strong>{" "}
                We stay ahead of the curve by employing the latest web
                technologies and best practices in our work.
              </li>
            </ol>
          </Card>
        </Section>
      </main>
      <CTA />
      <Footer />
    </>
  );
};

export default About;
