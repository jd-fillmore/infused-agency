import React, { useState } from "react";
import { getLatestPosts } from "../lib/posts";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Col,
  Container,
  Row,
} from "reactstrap";
import { format } from "date-fns";
import "react-accessible-accordion/dist/fancy-example.css";
import Head from "next/head";
import Nav from "../../components/Nav/nav";
import Hero from "../../components/Home/Hero/hero";
import Footer from "../../components/Footer/footer";

import Link from "next/link";
import Image from "next/image";

import treeImg from "../../src/img/tree-reports.png";
import kdImg from "../../src/img/kd-flowers.webp";
import cassImg from "../../src/img/featured-seo.png";
import google from "../../src/img/web-design-niagara.webp";
import heroImg from "../../src/img/niagara-web-design-marketing-agency.webp";
import clients from "../../src/img/web-design-niagara-clients.png";
import workVisca from "../../src/img/work-visca.webp";
import workJerrys from "../../src/img/work-jerrys.webp";
import workGGS from "../../src/img/work-ggs.webp";
import workKD from "../../src/img/work-kd.webp";
import workCass from "../../src/img/work-cass.webp";
import workTree from "../../src/img/work-tree.webp";
import best from "../../src/img/best-rated.png";

const addJsonLd = () => {
  const schema = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: "Infused Agency",
    image:
      "https://infused.agency/static/niagara-web-design-2f828e960c0871169524dbd5886ab097.png",
    telephone: "(905) 933-3115",
    address: {
      "@type": "PostalAddress",
      streetAddress: "73 Alexandra Blvd",
      addressLocality: "St. Catharines",
      addressRegion: "ON",
      postalCode: "L2P 1K2",
    },
    serviceArea: [
      {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "St. Catharines",
          addressRegion: "ON",
          addressCountry: "Canada",
        },
      },
      {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Niagara",
          addressRegion: "ON",
          addressCountry: "Canada",
        },
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: {
          "@type": "DayOfWeek",
          name: "Monday",
        },
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: {
          "@type": "DayOfWeek",
          name: "Tuesday",
        },
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: {
          "@type": "DayOfWeek",
          name: "Wednesday",
        },
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: {
          "@type": "DayOfWeek",
          name: "Thursday",
        },
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: {
          "@type": "DayOfWeek",
          name: "Friday",
        },
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: {
          "@type": "DayOfWeek",
          name: "Saturday",
        },
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: {
          "@type": "DayOfWeek",
          name: "Sunday",
        },
        closes: "15:00",
      },
    ],
  };

  return {
    __html: JSON.stringify(schema),
  };
};

const Home = ({ latestPosts }) => {
  return (
    <>
      <Head>
        <title>
          Niagara Web Design | Website Developer St. Catharines | Award Winning
          | Affordable | Infused Agency Web Design Niagara, Website Design
          Niagara, Niagara Falls Web Design Company, Niagara Web Designer, Web
          Design Niagara Falls Ontario, Web Design St. Catharines, Website
          Design St. Catharines
        </title>
        <meta
          name="description"
          content="Award-winning Niagara web design in St. Catharines. Our website developers create modern websites for companies across Niagara. Get your free quote today!"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd()}
          key="item-jsonld"
        />
      </Head>
      <Nav />
      <Hero />

      <section className="home-top-web">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h2>
                Your Website, Your <span>Best Sales Manager</span>.
              </h2>
              <p>
                At Infused Agency, we make websites that are{" "}
                <strong>easy to use and look great</strong>. From the first idea
                to the final product, we create custom websites that show off
                your brand and use the latest designs.
              </p>
              <p>
                We have helped businesses in St. Catharines, Niagara Falls,
                Welland, Fort Erie, Thorold, Niagara-on-the-Lake, Grimsby,
                Beamsville, Lincoln and beyond.
              </p>
              <h2>Our Services Include:</h2>
              <ul>
                <li>Making websites that work on all devices</li>
                <li>
                  Helping Your Website{" "}
                  <Link href="/niagara-seo-company">
                    Show Up on Search Engines
                  </Link>
                </li>
                <li>
                  <Link href="/digital-marketing-agency-niagara">
                    Digital marketing
                  </Link>{" "}
                  to reach more people
                </li>
              </ul>
              <p>
                These services help turn your website into a strong tool to{" "}
                <strong>get more leads and sales</strong>. We make websites that
                are not only nice to look at and easy to use but also help
                increase leads, boost sales, and{" "}
                <strong>build trust in your business</strong>.
              </p>
            </div>
            <div className="col-lg-5">
              <Image
                width="503"
                height="343"
                priority={true}
                className="img-fluid"
                src={heroImg}
                alt="niagara web design"
              />
            </div>
          </div>
          <div className="row pd-top-40 align-items-center">
            <div className="col-lg-6">
              <h2>Why Choose Infused Agency?</h2>
              <p>
                It's simple. We have been helping Niagara businesses with their
                websites and SEO for over ten years.
              </p>
              <p>
                With our <Link href="/blog">great knowledge</Link>,{" "}
                <Link href="/work">high quality work</Link>, and{" "}
                <Link href="/reviews">friendly customer service</Link>, we've
                become a top web design company that Niagara businesses trust.
              </p>
            </div>
            <div className="col-lg-6">
              <Image
                className="img-fluid"
                src={google}
                alt="web design niagara"
              />
              <Image
                className="img-fluid"
                src={best}
                alt="web design company niagara, web design agency niagara"
              />
              <div className="card">
                <img
                  alt="ggs niagara landscaping testimonial"
                  width="48"
                  height="48"
                  src="https://lh3.googleusercontent.com/a/ACg8ocJ0eWch1hRWUGzVDCWLHHB4-5kucORKoBlJcD-KmOcfyBhD7Q=w48-h48-p-rp-mo-ba3-br100"
                />
                <p className="author">GGS Niagara Landscaping</p>
                <div className="d-flex">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"
                      fill="#FFD700"
                    />
                  </svg>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"
                      fill="#FFD700"
                    />
                  </svg>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"
                      fill="#FFD700"
                    />
                  </svg>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"
                      fill="#FFD700"
                    />
                  </svg>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"
                      fill="#FFD700"
                    />
                  </svg>
                </div>
                <p className="desc">
                  JD did a fantastic job on my website. He was easy to work
                  with, always very quick to respond and made designing the page
                  very simple. I would highly recommend JD for all of your web
                  design and development needs!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-services">
        <div className="container">
          <div className="row pd-btm-40">
            <div className="col-lg-12 text-center">
              <h2>
                Web Design That Makes An <span>Impact</span>
              </h2>
              <p>
                Our web design, optimization, and SEO solutions help bring you
                more leads through your website.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          {/* Row One */}
          <div className="row">
            <div className="col-lg-4 d-flex">
              <Link href="/web-design">
                <div className="card">
                  <h2>Web Design</h2>
                  <p>
                    Is your website not bringing you customers? We make websites
                    that turn visitors into customers.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 d-flex">
              <Link href="/website-conversion-optimization">
                <div className="card">
                  <h2>Conversion Optimization</h2>
                  <p>
                    Is your website not bringing you leads? Our team will fix
                    problems so your website can get more leads.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 d-flex">
              <Link href="/niagara-seo-company">
                <div className="card">
                  <h2>Search Engine Optimization</h2>
                  <p>
                    Are your customers not finding your website on Google? We
                    can help your website get found and bring you more leads.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex">
              <Link href="/web-design">
                <div className="card">
                  <h2>Website Development</h2>
                  <p>
                    Is your website old or not working well? We build modern,
                    fast, and responsive websites.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 d-flex">
              <Link href="/wordpress-developer-niagara">
                <div className="card">
                  <h2>WordPress Development</h2>
                  <p>
                    Is your WordPress site outdated or not good enough? We
                    create custom WordPress sites just for your business needs.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 d-flex">
              <Link href="/niagara-seo-company">
                <div className="card">
                  <h2>Local SEO</h2>
                  <p>
                    Are local customers not finding your services? We optimize
                    your site for local searches to get you more visibility.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <section className="our-clients pd-top-80">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2>
                  Clients We've <span>Helped</span>
                </h2>
                <p>
                  For over ten years, we have built strong partnerships with
                  many brands and businesses in Niagara and beyond.
                </p>
              </div>
              <Col lg="6">
                <Image
                  className="img-fluid"
                  src={clients}
                  alt="web design niagara clients"
                />
              </Col>
            </div>
          </section>
        </div>
      </section>

      <section className="home-work">
        <Container>
          <Row className="text-center pd-btm-40">
            <Col lg="12">
              <h2>
                Featured Web Design <span>Projects</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Image
                className="img-fluid"
                src={workVisca}
                alt="website design niagara visca electric"
              />
            </Col>
            <Col lg="6">
              <Image
                className="img-fluid"
                src={workJerrys}
                alt="web design niagara jerrys insulating"
              />
            </Col>
          </Row>
          <Row className="pd-top-40">
            <Col lg="6">
              <Image
                className="img-fluid"
                src={workGGS}
                alt="niagara website design ggs landscaping"
              />
            </Col>
            <Col lg="6">
              <Image
                className="img-fluid"
                src={workKD}
                alt="niagara web design kd flowers"
              />
            </Col>
          </Row>
          <Row className="pd-top-40">
            <Col lg="6">
              <Image
                className="img-fluid"
                src={workCass}
                alt="st catharines website design cass construction"
              />
            </Col>
            <Col lg="6">
              <Image
                className="img-fluid"
                src={workTree}
                alt="st catharines web design treereports"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-client-results">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Featured Results</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <Image
                  className="img-fluid"
                  src={treeImg}
                  alt="website design st catharines"
                />
                <h3>TreeReports</h3>
                <p className="testimonial">
                  "Fantastic experience from start to end."
                </p>
                <div className="highlight">
                  <h3>385%</h3>
                  <p>increase in being found online</p>
                </div>
                <Link href="/tree-reports">
                  <button>
                    Case Study
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                      height="20px"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <Image
                  className="img-fluid"
                  src={kdImg}
                  alt="web designers niagara"
                />
                <h3>KD Flowers</h3>
                <p className="testimonial">"My business has grown so much!"</p>
                <div className="highlight">
                  <h3>5,800</h3>
                  <p>new people discovering website per month</p>
                </div>
                <Link href="/kd-florist">
                  <button>
                    Case Study
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                      height="20px"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <Image
                  className="img-fluid"
                  src={cassImg}
                  alt="website design niagara"
                />
                <h3>Cass-A-Bella Construction</h3>
                <p className="testimonial">"Great job, WELL DONE!"</p>
                <div className="highlight">
                  <h3>13,000%</h3>
                  <p>increase in new leads in first 6 months</p>
                </div>
                <Link href="/cass-a-bella-construction">
                  <button>
                    Case Study
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                      height="20px"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-blog">
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="title">Latest Blog Posts</h2>
              <Row>
                {latestPosts.map(({ id, date, title, excerpt, image }) => (
                  <Col lg="4" md="6" sm="12" key={id} className="mb-4">
                    <Link href={`/posts/${id}`}>
                      {image && (
                        <Image
                          src={image}
                          className="img-fluid"
                          alt={`Preview image for ${title}`}
                          width={600}
                          height={400}
                        />
                      )}
                    </Link>
                    <div className="post-card card">
                      <h3>
                        <Link href={`/posts/${id}`}>{title}</Link>
                      </h3>
                      <small>
                        {format(new Date(date), "eeee, MMMM d, yyyy")}
                      </small>
                      <p>{excerpt}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta home-cta">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>
                Ready to <span>Grow Your Business</span>?
              </h2>
              <p>Get your free quote below!</p>
              <Link href="/get-a-quote" rel="noreferrer">
                <button>
                  Get Started
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const latestPosts = getLatestPosts(3);
  return {
    props: {
      latestPosts,
    },
  };
}
