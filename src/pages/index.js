import React, { useState } from "react";
import { getLatestPosts } from "../lib/posts";
import {
  UncontrolledCollapse,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
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
import tech from "../../src/img/web-design-technologies.webp";
import process from "../../src/img/web-design-process.webp";
import clients from "../../src/img/web-design-niagara-clients.png";
import workVisca from "../../src/img/work-visca.webp";
import workJerrys from "../../src/img/work-jerrys.webp";
import workGGS from "../../src/img/work-ggs.webp";
import workKD from "../../src/img/work-kd.webp";
import workCass from "../../src/img/work-cass.webp";
import workTree from "../../src/img/work-tree.webp";

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
          Niagara Web Design | Trusted Website Design St. Catharines
        </title>
        <meta
          name="description"
          content="Award-winning Niagara web design in St. Catharines. We create custom, lead-generating websites for companies across Niagara. Get your free quote today!"
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
                Niagara Web Design Company That Makes Your Website Your{" "}
                <span>Best Sales Manager</span>.
              </h2>
              <p>
                Infused Agency is a renowned Niagara-based web design company,
                specializing in crafting user-friendly websites that seamlessly
                blend creativity and functionality. From concept to conversion,
                we craft bespoke digital experiences that merge your brand's
                essence with cutting-edge design. Our comprehensive suite of
                services - spanning responsive web development, strategic SEO,
                and targeted digital marketing - is engineered to transform your
                online presence into a powerful lead generation and sales
                acceleration engine.
                <br />
                <br />
                Our portfolio showcases a diverse array of success stories,
                including businesses in St. Catharines, Niagara Falls, Welland,
                Fort Erie, Thorold, and Niagara-on-the-Lake, with websites that
                are not only visually appealing and easy to use but also
                optimized to increase leads, boost sales, and enhance
                credibility.
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
              <Image
                className="img-fluid"
                src={google}
                alt="web design niagara"
              />
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <h2>
                    Powered by Infused Agency -{" "}
                    <span>Web Design &amp; Digital Marketing</span>
                  </h2>
                </div>
                <div className="col-lg-5">
                  <p>
                    With over a <Link href="/about">decade of experience</Link>{" "}
                    and a team of seasoned experts, we bring unparalleled
                    knowledge and skill to every project. Our team ensures your
                    site ranks well on Google, making it easy for potential
                    customers to find you and take action. We love creating
                    websites with effective elements that help local businesses
                    succeed online. Let our firm transform your website into a
                    powerful tool for driving sales and generating leads!
                  </p>
                </div>
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
                Our lead-generating web design, optimization and SEO solutions
                help bring you more leads through your website
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          {/* Row One */}
          <div className="row">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <Link href="/web-design">
                  <h2>Web Design</h2>
                </Link>
                <p>
                  Is your website not bringing you customers? We create
                  lead-generating websites, for the purpose of converting
                  visitors into customers.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <Link href="/website-conversion-optimization">
                  <h2>Conversion Optimization</h2>
                </Link>
                <p>
                  Is your website not bringing you leads? Our team will fix
                  conversion barriers, optimizing your website to convert more.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <Link href="/niagara-seo-company">
                  <h2>Search Engine Optimization</h2>
                </Link>
                <p>
                  Are your customers not finding your website in Google? Lets
                  help get your website found, and drive more leads to you.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <Link href="/web-design">
                  <h2>Website Development</h2>
                </Link>
                <p>
                  Is your website outdated or lacking functionality? We
                  specialize in building modern, fast, and responsive websites.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <Link href="/wordpress-developer-niagara">
                  <h2>WordPress Development</h2>
                </Link>
                <p>
                  Struggling with a generic or outdated WordPress site? We craft
                  custom WordPress solutions tailored to your business needs.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <Link href="/niagara-seo-company">
                  <h2>Local SEO</h2>
                </Link>
                <p>
                  Are local customers missing out on your services? We focus on
                  optimizing your site for local search, getting you more
                  visibility.
                </p>
              </div>
            </div>
          </div>
          <section className="our-clients pd-top-80">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2>
                  Clients We've Helped <span>Flourish</span>
                </h2>
                <p>
                  For over a decade, we've built valuable partnerships with
                  numerous brands and businesses throughout Niagara &amp;
                  beyond.
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

      {/* <section className="home-faq">
        <Container>
          <Row className="text-center pd-btm-40">
            <Col lg="12">
              <h2>
                <span>Frequently Asked</span> Web Design &amp; SEO Questions{" "}
              </h2>
            </Col>
          </Row>
        </Container>
      </section> */}

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
