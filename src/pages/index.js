import React from "react";
import { Container, Row, Col } from "reactstrap";
import Button from "../../components/Button/button";
import "react-accessible-accordion/dist/fancy-example.css";
import Head from "next/head";
import Nav from "../../components/Nav/nav";
import Hero from "../../components/Home/Hero/hero";
import Footer from "../../components/Footer/footer";

import Link from "next/link";
import Image from "next/image";

import leadGenImg from "../../src/img/lead-generating-web-design-niagara.png";
import webConvImg from "../../src/img/website-conversion-optimization-niagara.png";
import seoImg from "../../src/img/search-engine-optimization-niagara.png";
import treeImg from "../../src/img/tree-reports.png";
import kdImg from "../../src/img/kd-flowers.webp";
import cassImg from "../../src/img/featured-seo.png";
import google from "../../src/img/web-design-niagara.webp";
import heroImg from "../../src/img/niagara-web-design-marketing-agency.png";
import intro from "../../src/img/web-design-niagara-website.webp";
import img1 from "../../src/img/lead-capture.png";
import img2 from "../../src/img/mb-friend.png";
import img3 from "../../src/img/inc.png";
import img4 from "../../src/img/easy.png";
import img5 from "../../src/img/anal.png";
import img6 from "../../src/img/sec.png";
import design from "../../src/img/1-design.webp";
import growth from "../../src/img/lead-gen-website-design.webp";
import funnel from "../../src/img/lead-gen-convert.jpg";
import convert from "../../src/img/conversion-web.jpg";
import discover from "../../src/img/1-discover.webp";
import realdesign from "../../src/img/3-design.webp";
import dev from "../../src/img/4-develop.webp";
import launch from "../../src/img/5-launch.webp";
import promote from "../../src/img/5-promote.webp";

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

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Niagara Web Design | Affordable Website Design in St. Catharines
        </title>
        <meta
          name="description"
          content="Niagara web design company specializing in affordable, lead-generating websites to boost sales and leads. Located in St. Catharines. Get a free quote now!"
        />
        <meta
          name="keywords"
          content="Niagara Web Design, Web Design St. Catharines, Web Designer Niagara, Web Designer St. Catharines, Website Developer Niagara, Website Developer St. Catharines"
        />
        <meta
          name="google-site-verification"
          content="VK8okfPDhG2ziQHXaOAh2Nerc_pVe6vR9pcCp1WtSW8"
        />
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
      <section className="home-services" title="web design niagara">
        <div className="container">
          <div className="row pd-btm-40">
            <div className="col-lg-12 text-center">
              <h2>
                Our <span>Strategic</span> Niagara Business Solutions
              </h2>
              <p>
                Our lead-generating web design, optimiziation and SEO solutions
                help bring you more Niagara leads through your website
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          {/* Row One */}
          <div className="row">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <Image src={leadGenImg} alt="web designer niagara" />
                <h2>Lead-Generating Web Design</h2>
                <p>
                  Is your Niagara website design not bringing you customers? We
                  create lead-generating websites, for the purpose of converting
                  visitors into customers.
                </p>
                <Link href="/web-design">
                  <button>
                    Boost Your Leads
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
                  src={webConvImg}
                  alt="website conversion optimization niagara"
                />
                <h2>Website Conversion Optimization</h2>
                <p>
                  Is your Niagara web design not bringing you leads? Our team
                  will fix conversion barriers, optimizing your web design to
                  convert more.
                </p>
                <Link href="/web-design">
                  <button>
                    Increase Conversions
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
                  src={seoImg}
                  alt="best web designer niagara"
                />
                <h2>Search Engine Optimization</h2>
                <p>
                  Are your customers not finding your web design in Google? Lets
                  help get your web design found, and drive more leads to you.
                </p>
                <Link href="/niagara-seo-company">
                  <button>
                    Drive Sales
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
      <section className="home-top-web">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h2>
                Leading Niagara Website Design Company That Makes Your Website
                Your <span>Best Sales Manager</span>.
              </h2>
              <p>
                As a leading Niagara web design company, we specialize in
                crafting user-friendly web designs that seamlessly blend
                creativity and functionality. From branding-aligned designs and
                mobile-responsive interfaces to targeted SEO and digital
                marketing, our digital growth services are designed to drive
                sales and generate leads through an incorporated modern web
                design.
                <br />
                <br />
                We've empowered numerous businesses in the Niagara region and
                beyond, including St. Catharines and Niagara Falls, with web
                designs that are not only visually appealing and easy to use but
                also optimized to increase leads, boost sales, and enhance
                credibility. Our team ensures your site ranks well on Google,
                making it easy for potential customers to find you and take
                action.
                <br />
                <br />
                We love creating websites with effective web design elements
                that help local businesses succeed online. Let our firm
                transform your website into a powerful tool for driving sales
                and generating leads!
              </p>

              <Image
                className="img-fluid"
                src={google}
                alt="web design niagara"
              />
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
              <br />
              <br />
              <div className="card">
                <h3>10,700</h3>
                <p>monthly website views</p>
              </div>
              <div className="card">
                <h3>20,000%</h3>
                <p>increase in leads over 6 months</p>
              </div>
              <div className="card">
                <h3>5,800</h3>
                <p>new monthly visitors</p>
              </div>
              <p className="phone">
                73 Alexandra Blvd, St. Catharines, ON L2P 1K2
              </p>
              <a className="phone" href="tel:(905) 933-3115">
                (905) 933-3115
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="home-client-results">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>
                Our Local Niagara Web Design Clients <span>Get Results</span>
              </h2>
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
                <p>Niagara-based, Serving Niagara</p>
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
                <p>Niagara-based, Serving Niagara</p>
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
                <p>Serving Niagara &amp; Beyond</p>
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
      <Container>
        <Row className="pd-top-120">
          <Col md="6">
            <h2>
              Website design in Niagara crafted to <span>engage</span>,{" "}
              <span>capture</span> and <span>convert</span>.
            </h2>
          </Col>
          <Col md="6">&nbsp;</Col>
        </Row>
        <Row className="pd-top-80 pd-btm-80">
          <Col lg="6">
            <Image
              className="img-fluid"
              src={intro}
              alt="web design Niagara conversion"
            />
          </Col>
          <Col lg="6">
            <p>
              At Infused Agency, our Niagara web design services are designed to{" "}
              <span>engage</span>, <span>capture</span>, and{" "}
              <span>convert</span>. We excel in crafting visually stunning,
              user-friendly websites that are specifically tailored for
              Niagara-based businesses. Our team of expert designers is
              dedicated to creating high-performing sites that not only attract
              visitors but also foster meaningful interactions and drive
              conversions. Whether you’re seeking a brand-new design or a
              strategic update, our goal is to elevate your online presence and
              help your business thrive in the competitive Niagara market.
              Choose Infused Agency for cutting-edge web design solutions that
              truly deliver results
            </p>
          </Col>
        </Row>
        <div className="niche-services pd-top-40">
          <Row className="text-center w-80">
            <Col lg="12">
              <h2>
                Our Niagara Website Design Agency Will
                <br />
                <span>Get You Results</span>.
              </h2>
              <br />
              <h3>
                Your web design will be equipped with everything needed to
                attract attention and generate more leads.
              </h3>
            </Col>
          </Row>
          <section className="home-cards">
            <Row className="pd-top-40">
              <Col lg="4" className="d-flex">
                <div className="card">
                  <Image src={img1} alt="lead capture" />
                  <h3>Lead Capture</h3>
                  <p>
                    Leverage pre-built web forms to attract, capture, and
                    nurture leads from different sections of your web design.
                  </p>
                </div>
              </Col>
              <Col lg="4">
                <div className="card">
                  <Image src={img2} alt="mobile friendly" />
                  <h3>Mobile-Friendly</h3>
                  <p>
                    Our web designs are built to be fully compatible with the
                    latest browsers and mobile devices, ensuring you always
                    present a polished and professional appearance.
                  </p>
                </div>
              </Col>
              <Col lg="4" className="d-flex">
                <div className="card">
                  <Image src={img3} alt="increase conversions" />
                  <h3>Increase Conversions</h3>
                  <p>
                    Foster trust and create interest in your services. We assist
                    in setting you apart from the competition.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <div className="card">
                  <Image src={img4} alt="Easily Update Content" />
                  <h3>Easily Update Content</h3>
                  <p>
                    Effortlessly update your web design content, add new pages,
                    upload images, adjust meta-tags, and incorporate new team
                    members, among other tasks.
                  </p>
                </div>
              </Col>
              <Col lg="4" className="d-flex">
                <div className="card">
                  <Image src={img5} alt="Website Analytics" />
                  <h3>Website Analytics</h3>
                  <p>
                    Track monthly website traffic, page visits, leads, and more.
                    Need Google Analytics? We can install that on your website
                    design too.
                  </p>
                </div>
              </Col>
              <Col lg="4" className="d-flex">
                <div className="card">
                  <Image src={img6} alt="security built in" />
                  <h3>Security Built In</h3>
                  <p>
                    We set up SSL for your web design from day one, ensuring the
                    green lock icon in browsers that your clients expect.
                  </p>
                </div>
              </Col>
            </Row>
          </section>
        </div>
        <Row className="pd-top-120 d-flex align-items-center">
          <Col lg="6" className="d-none d-sm-block">
            <Image
              className="img-fluid"
              src={growth}
              alt="web design Niagara"
            />
          </Col>
          <Col lg="6" className="order-1 order-lg-2">
            <h2>
              <span>Lead-Generating</span> <br />
              Web Design in Niagara
            </h2>
            <p>
              At Infused Agency, we're dedicated to fueling business growth in
              Niagara through our outstanding lead-generation web design
              services. From initial concept to final launch, our Niagara web
              design experts create custom digital experiences that yield
              remarkable results. Utilizing advanced web design platforms such
              as NextJS, WordPress, React, and Shopify, we ensure your
              Niagara-based website is not only visually appealing but also
              highly functional. Our team blends strategic web design with
              cutting-edge technology to develop high-converting websites that
              engage your audience and drive your business forward. Choose
              Infused Agency for superior lead-generation website design and
              Niagara web design solutions, and watch your online presence
              flourish.
            </p>
            <a
              href="https://calendly.com/infused-agency/project-discovery/"
              target="_blank"
              rel="noreferrer"
            >
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
            </a>
          </Col>
          <Col lg="6" className="d-block d-sm-none">
            <Image
              className="img-fluid"
              src={growth}
              alt="website design company in Niagara"
            />
          </Col>
        </Row>

        <Row className="pd-top-120 d-flex align-items-center">
          <Col lg="6" className="d-block d-lg-none">
            <Image
              className="img-fluid pd-btm-40"
              src={funnel}
              alt="Niagara web designers"
            />
          </Col>
          <Col lg="6">
            <h2>
              <span>Sales Funnels</span> <br />
              That Convert
            </h2>
            <p>
              Ready to convert your website design visitors into loyal
              customers? At Infused Agency, we specialize in designing sales
              funnels that achieve this goal. Our expertly crafted funnels guide
              your prospects seamlessly from initial interest to decisive
              action. By combining engaging web design, persuasive copy, and
              effective calls-to-action, we create funnels that not only capture
              leads but also deliver significant, measurable results.
            </p>
            <a
              href="https://calendly.com/infused-agency/project-discovery/"
              target="_blank"
              rel="noreferrer"
            >
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
            </a>
          </Col>
          <Col lg="6" className="d-none d-lg-block">
            <Image
              className="img-fluid"
              src={funnel}
              alt="website design Niagara"
            />
          </Col>
        </Row>
        <Row className="pd-top-120 d-flex align-items-center">
          <Col lg="6">
            <Image
              className="img-fluid pd-btm-40"
              src={convert}
              alt="web designers Niagara"
            />
          </Col>
          <Col lg="6">
            <h2>
              <span>Conversion-Driven</span> <br />
              Web Design
            </h2>
            <p>
              Ready to transform your Niagara web design into a conversion
              powerhouse? Our Conversion-Driven Web Design is expertly crafted
              to do just that. At Infused Agency, we develop stunning Niagara
              web design solutions that not only captivate your audience but
              also deliver real, measurable results. By strategically focusing
              on user experience, engaging visuals, and optimized design
              elements, we ensure your web design becomes a powerful tool for
              converting visitors into loyal customers. From intuitive
              navigation to compelling calls-to-action, our Niagara web design
              experts create designs that smoothly guide your prospects from
              interest to action.
            </p>
            <a
              href="https://calendly.com/infused-agency/project-discovery/"
              target="_blank"
              rel="noreferrer"
            >
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
            </a>
          </Col>
        </Row>
        <section className="home-process">
          <Row className="pd-top-80">
            <Col md="6">
              <h2>
                Our <span>Creative</span> &amp; <span>Reliable</span> Web Design
                Process.
              </h2>
              <h3>
                Our Niagara web design process is designed to be smooth, fast
                and reliable.
              </h3>
            </Col>
            <Col md="6">&nbsp;</Col>
          </Row>
          <Row className="pd-top-40">
            <Col lg="12">
              <div className="card">
                <Image
                  className="img-fluid"
                  src={discover}
                  alt="website design discovery Niagara"
                />
                <h2>
                  1. <span>Discover</span>
                </h2>
                <p>
                  At Infused Agency, we believe that achieving your ultimate
                  goal starts with finding the right path. Our process begins by
                  thoroughly understanding every intricate detail about your
                  business, allowing us to pave the way to success. Our team at
                  Infused Agency follows a meticulous methodology, ensuring each
                  step is executed with precision. We dive deep into your
                  business to comprehend the purpose behind your website design,
                  your expectations, ultimate goals, and target audience.
                  Additionally, we analyze your competitors, their web designs,
                  and your budget plan. These detailed insights enable us to
                  craft a robust strategy that ensures your business's success.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="pd-top-20">
            <Col lg="12">
              <div className="card">
                <Image
                  className="img-fluid"
                  src={design}
                  alt="website design process Niagara"
                />
                <h2>
                  2. <span>Plan</span>
                </h2>
                <p>
                  We excel at planning. At Infused Agency, our professional team
                  knows that a well-executed master plan is essential for
                  success. We begin by thoroughly researching your vision for
                  the web design, ensuring we fully understand your plan and
                  respect your time. During the planning phase, we create
                  wireframe sketches, draft content layouts, design the
                  website's graphical structure, and develop detailed
                  flowcharts. This comprehensive approach gives us a clear
                  roadmap to build the web design, manage its content, and
                  implement effective hyperlinking.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="pd-top-20">
            <Col lg="12">
              <div className="card">
                <Image
                  className="img-fluid"
                  src={realdesign}
                  alt="website design agency Niagara"
                />
                <h2>
                  3. <span>Design</span>
                </h2>
                <p>
                  We are innovative and adaptable. Our exceptional team of
                  Niagara web designers at Infused Agency has been
                  internationally recognized for their excellence and adheres to
                  high-quality standards in every project. After thoroughly
                  investigating current trends and conducting brainstorming
                  sessions with your team, we select the most captivating color
                  combinations, typography, videos, animations, images, and
                  content layouts. We guarantee an outstanding UX design that is
                  user-centered, easy to navigate, and developed to the highest
                  standards.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="pd-top-20">
            <Col lg="12">
              <div className="card">
                <Image
                  className="img-fluid"
                  src={dev}
                  alt="website development Niagara"
                />
                <h2>
                  4. <span>Develop</span>
                </h2>
                <p>
                  We excel in both planning and design. Our renowned team at
                  Infused Agency, with extensive experience in developing
                  top-tier Niagara website designs, creates flawless projects
                  for our clients. They go above and beyond, utilizing their
                  skills efficiently. By leveraging cutting-edge technology and
                  innovative techniques, we ensure our tasks are completed with
                  precision. Once the design phase is finished, our highly
                  skilled content writers populate the web design pages with
                  fresh content and refine existing material. Adding new videos,
                  slideshows, and other media elements makes the website
                  captivating. We then develop a prototype, testing it across
                  major web browsers and obtaining your approval before the
                  official launch.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="pd-top-20">
            <Col lg="12">
              <div className="card">
                <Image
                  className="img-fluid"
                  src={launch}
                  alt="website development launch Niagara"
                />
                <h2>
                  5. <span>Launch</span>
                </h2>
                <p>
                  Your approval of the prototype is essential to us. Once we
                  have your go-ahead, we move forward with search engine
                  optimization. Our Niagara web design team ensures that all
                  content is unique and meticulously proofread for grammar,
                  spelling, and punctuation errors. We also handle Google
                  Analytics and search engine rankings from the outset. Our
                  experts rigorously test the website’s functionality. The
                  Infused Agency team guarantees exceptional web designs that
                  create a direct path to your company’s growth.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="pd-top-20">
            <Col lg="12">
              <div className="card">
                <Image
                  className="img-fluid"
                  src={promote}
                  alt="website design promotion Niagara"
                />
                <h2>
                  6. <span>Promote</span>
                </h2>
                <p>
                  Our top-tier Niagara digital marketing experts ensure your web
                  design is effectively promoted online. At Infused Agency, our
                  services go beyond just launching your website. Our
                  world-class team includes seasoned specialists in SEO and
                  digital marketing. We have a dedicated team that thoroughly
                  assesses your needs and implements premium digital strategies
                  to help your business excel in today's competitive landscape.
                  We believe that your success is our success as well.
                </p>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      <section className="home-reviews">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>
                Take Our Niagara <span>Client's Word</span> For It
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <img
                  alt="visca electric niagara web design"
                  width="48"
                  height="48"
                  src="https://lh3.googleusercontent.com/a-/ALV-UjXrE-pCVt85f0WVdkwxJavD--mFf6VwkCGbIVkEjYt98Qt5ukDYqw=w48-h48-p-rp-mo-ba3-br100"
                />
                <p className="author">VISCA Electric</p>
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
                  Working with Infused Agency was a pleasure. He was extremely
                  responsive and informative from start to finish. Infused
                  Agency is creative, efficient, and very knowledgeable in his
                  field. He helped me and my team create a new website for my
                  business. The design and development process was smooth and
                  easy. I would absolutely recommend Infused Agency to anyone
                  looking for a new or updated website for their business!
                </p>
              </div>
            </div>
            <div className="col-lg-6  d-flex">
              <div className="card">
                <img
                  alt="ggs website design niagara"
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
                  Infused Agency did a fantastic job on my website. He was easy
                  to work with, always very quick to respond and made designing
                  the page very simple. I would highly recommend Infused Agency
                  for all of your web design and development needs!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <img
                  alt="cassabella web design st catharines"
                  width="48"
                  height="48"
                  src="https://lh3.googleusercontent.com/a/ACg8ocK7n2huRETLbFAnVB-Yq-Mt4VECcxfE9PfP_dzle024Afradg=w48-h48-p-rp-mo-br100"
                />
                <p className="author">Cass-A-Bella Construction</p>
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
                  Great Job, WELL DONE! I'm very pleased with the service and
                  the design of my new website. If you ever need a new website I
                  do recommend INFUSED AGENCY for there services. Infused Agency
                  keep up the great work. Thank you.
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="card">
                <img
                  alt="treereports website design niagara"
                  width="48"
                  height="48"
                  src="https://lh3.googleusercontent.com/a/ACg8ocIKt9X9LSKomYMvAkQn_0673Xwg0EBOP-QigGk1AaAVHdVIvA=w48-h48-p-rp-mo-ba3-br100"
                />
                <p className="author">TreeReports</p>
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
                  Fantastic experience from start to end. Infused Agency is
                  organized, thorough and professional. I highly recommend his
                  company and services if you are thinking of building a
                  website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta home-cta">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>
                Ready to <span>Grow Your Business</span>?
              </h2>
              <p>Get your free quote below!</p>
              <a
                href="https://calendly.com/infused-agency/project-discovery/"
                target="_blank"
                rel="noreferrer"
              >
                <Button>
                  Get Free Quote
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
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
