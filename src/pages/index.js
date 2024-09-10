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

import rated from "../../src/img/niagara-website-design.png";

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
  const [open, setOpen] = useState('0');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
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
                Your Niagara Web Design, Your <span>Best Sales Manager</span>.
              </h2>
              <p>
                At Infused Agency, we make <strong>Niagara website designs</strong> that are{" "}
                <strong>easy to use and look great</strong>. From the first idea
                to the final product, we create custom <strong>Niagara web designs</strong> that show off
                your brand and use the latest designs.
              </p>
              <p>Our web design Niagara teams starts the process by working with your team to figure out your business and website goals. Once we know what you want, our team starts designing your new website. <strong>This is a team effort</strong>, so your ideas will help make your new website awesome!</p>

              <p>We know that our clients are not website designers or builders, so we make sure your site is very easy to update. We use <strong>content management systems</strong> (CMS) that are common and simple to use, even for people who aren't tech-savvy.</p>

              <p>
                We have helped Niagara businesses in St. Catharines, Niagara Falls,
                Welland, Fort Erie, Thorold, Niagara-on-the-Lake, Grimsby,
                Beamsville, Lincoln and beyond.
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
          <div className="row pd-top-80 align-items-center">
            <div className="col-lg-5">
              <Image
                className="img-fluid pd-btm-20"
                src={google}
                alt="web design niagara"
              />
            </div>
            <div className="col-lg-7">
            <h2>A Web Design Niagara Agency With Integrity</h2>
            <p>Whether it's a Niagara website design for a big company or a small local business, we handle the process the same way. Your website is often the first thing a potential customer sees, and it should <strong>show how great your business is</strong>. Our modern designs are beautiful, easy to navigate, and <strong>made to get you more customers.</strong></p>

<p>Our process goes beyond just designing websites. We make sure your website meets all of Google's Core Web Vitals standards. Plus, we give every CMS clients ongoing website backups and advanced security measures to <strong>keep your online presence safe</strong>.</p>

              <ul>
                <li>Making sure your web design Niagara works on all devices</li>
                <li>
                  Helping your website show up in Google with our <Link href="/niagara-seo-company">
                    Niagara SEO services
                  </Link>
                </li>
                <li>Awesome <Link href="/digital-marketing-agency-niagara">digital marketing Niagara</Link>{" "} services to reach more people
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
          </div>
          <div className="row pd-top-40 align-items-center">
            <div className="col-lg-6">
              <h2>Why Choose Infused Agency? The Niagara Advantage in Web Design</h2>
              <p>It's simple. We have been helping businesses with their Niagara web designs and SEO <strong>for over ten years</strong>. This means we know what works best for local companies. Our experience allows us to create websites that not only look amazing but also <strong>help businesses get more customers</strong>.</p>

<p>When you choose us, you're getting a team that <strong>understands the Niagara area</strong>. We know how to make your website stand out to both locals and tourists. Our goal is to help your business grow by <strong>attracting more visitors to your site</strong>.</p>

<p>With our skills in SEO, we can <strong>help your website show up on Google</strong> when people search for services in Niagara. This means more people will find you, which can lead to more sales. We love <strong>seeing our clients succeed</strong>, and we work hard to make that happen!</p>
              <p>
                With our <Link href="/blog">great knowledge</Link>,{" "}
                <Link href="/work">high quality work</Link>, and{" "}
                <Link href="/reviews">friendly customer service</Link>, we've
                become a top web design company that Niagara businesses trust.
              </p>
              <Image
                className="img-fluid"
                src={best}
                alt="web design company niagara, web design agency niagara"
              />
            </div>
            <div className="col-lg-6">
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
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d746188.552481925!2d-80.00600478031573!3d43.06669410655857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d34c9ec993deb7%3A0xef7f46930d192396!2sRegional%20Municipality%20of%20Niagara%2C%20ON!5e0!3m2!1sen!2sca!4v1725930892210!5m2!1sen!2sca" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="home-services">
        <div className="container">
          <div className="row pd-btm-40">
            <div className="col-lg-12 text-center">
              <h2>
                Niagara Website Design That Makes An <span>Impact</span>
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
                    Is your Niagara website design not bringing you customers? We make responsive design websites
                    that turn visitors into customers.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 d-flex">
              <Link href="/digital-marketing-agency-niagara">
                <div className="card">
                  <h2>Digital Marketing</h2>
                  <p>
                    Is your Niagara web design not driving sales? We design and build effective digital marketing campaigns.
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
              <Link href="/digital-marketing-agency-niagara">
                <div className="card">
                  <h2>Digital Marketing</h2>
                  <p>
                    Is your website not driving sales? We design and build effective digital marketing campaigns.
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
                <span>Featured</span> Niagara Web Design Project
              </h2>
              <h3>Jerry's Insulating</h3>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg="6">
            <Image
                className="img-fluid"
                src={workJerrys}
                alt="web design niagara jerrys insulating"
              />
            </Col>
            <Col lg="6">
              <p>Jerry's Insulating approached us because there current website was not responsive mobile-friendly, and also had a very outdated website design.</p>
              <p>They wanted a modern Niagara web design that was fresh, fast, secure and grew their reputation.</p>
              <p>They also wanted a web design that would help their Niagara business bring in more sales.</p>
            </Col>
          </Row>
          <Row className="pd-top-40">
            <Col lg="12">
            <h2>The Challenge</h2>
<p>Jerry's Insulating had a problem: their website wasn't working well anymore. It was old, and even their customers didn't like it anymore.</p>

<h2>Our Niagara Website Design Solution</h2>
<p>We knew they wanted their customers to find things easily on their site. So, we made a modern website that looks good and works well on both phones and computers.</p>
<p>We added a lead form, made the site secure, and made sure it loads super fast.</p>

<h2>The Result</h2>
<p>Since we launched the new website, they've gotten a lot of new customers. This happened because the new design is better, the site is faster, and it's more secure.</p>

            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-client-results">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Featured Web Design Niagara Results</h2>
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

      <section className="home-faq">
        <Container>
          <Row className="text-center pd-btm-40">
            <Col lg="12">
              <h2>
                <span>Frequently Asked</span> Web Design Niagara Questions{" "}
              </h2>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                  <AccordionHeader targetId="1">
                    Why work with Infused Agency?
                  </AccordionHeader>
                  <AccordionBody accordionId="1">
                    <h2>Why Work with Infused Agency?</h2>
                    <p>
                    As a top web design company in Niagara, Infused Agency helps businesses in St. Catharines and nearby areas get more customers through their websites. With over ten years of experience, we are known for creating websites that not only look fantastic but also work really well to bring in sales and new leads.
                    </p>
                    <h2>Awesome Web Design for Niagara Businesses</h2>

<h3>Cool Websites That Work Great</h3>
<p>At Infused Agency, we create amazing websites for businesses in Niagara. Our sites look great on all devices and help you show up on Google, bringing more customers to you!</p>

<h3>Websites That Bring in Customers</h3>
<p>We design websites that not only look good but also help turn visitors into real customers.</p>

<h3>Clear Communication</h3>
<p>We keep you updated and make sure your website helps your business grow.</p>

<h3>Experienced Team</h3>
<p>With over 10 years of experience, we know how to get your website found on Google.</p>

<h3>Success in Niagara</h3>
<p>We've helped many businesses in St. Catharines and Niagara Falls look professional and attract more customers.</p>

<h3>Custom Solutions</h3>
<p>We create websites that fit your unique needs, whether simple or complex.</p>

<h3>Website Care</h3>
<p>We provide ongoing support to keep your website safe and running smoothly.</p>

<h3>Always Here to Help</h3>
<p>You’ll have a friendly team supporting you from start to finish.</p>

<h3>Boosting Local Visibility</h3>
<p>We help local customers find your business online with our special SEO strategies.</p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="2">
                    Where is your team based?
                  </AccordionHeader>
                  <AccordionBody accordionId="2">
                    <h2>Where is your team based?</h2>
                    <p>
  Our Niagara-based web design agency is successful because we know the area well. Our team, all from Niagara, understands the local market and its needs. This helps us create personalized and effective web designs for businesses in Niagara.
</p>
<p>
  By working only in Niagara, we provide excellent support and pay close attention to our clients. We are proud to offer local service that benefits from our deep knowledge of the area. Our virtual model allows us to work flexibly and efficiently, ensuring your mobile-friendly website design gets the care it deserves.
</p>
<p>
  Check out our <Link href="/work">web design portfolio</Link> to see the great work we've done for businesses in Niagara.
</p>

                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="3">
                    What is your web design process like?
                  </AccordionHeader>
                  <AccordionBody accordionId="3">
                    <h2>What is your web design process like?</h2>
                    <p>
  At Infused Agency, we've been making awesome websites for almost 20 years! We're really good at it now, but we still want you to be part of the process. We think it's important that you love your new website as much as we do.
</p>
<p>
  You know your business and customers best. That's why we need your help, especially when we're first learning about your business and planning your website. We use cool tools like Google Analytics to see how people use websites. This helps us make your website easy to use and great for getting new customers.
</p>
<p>
  Want to see how we make websites? Check out our <Link href="/process">process</Link> to learn how we help businesses in Niagara get more customers online.
</p>


                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="4">
                    What will my project cost?
                  </AccordionHeader>
                  <AccordionBody accordionId="4">
                    <h2>What will my project cost?</h2>
                    <p>
  Figuring out the cost of a website design project for a Niagara business can be tricky because each project is different. The price depends on things like design complexity, features, and the range of services needed.
</p>
<p>
  <Link href="/pricing">View our pricing</Link> for both website design and SEO services in the Niagara region.
</p>
<p>
  <Link href="/get-a-quote">Book a call today</Link> to discuss your goals, learn more about our experience, and get detailed information about website prices, timelines, and budget ranges.
</p>

                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="5">
                    How can I get a quote for my project?
                  </AccordionHeader>
                  <AccordionBody accordionId="5">
                    <h2>How can I get a quote for my project?</h2>
                    <p>
                      We’d love to chat if you’ve reviewed our Niagara website
                      design portfolio and have questions about our Niagara web
                      design services or development expertise.
                    </p>

                    <p>
                      If you’re looking for professional marketing services or
                      web design in Niagara, please inquire about a quote for
                      your project. Feel free to contact the best web designers
                      in Niagara by completing our{" "}
                      <Link href="/get-a-quote">online quote form</Link> for a
                      free consultation.
                    </p>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </Col>
          </Row>
        </Container>
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

      <section className="home-areas pd-top-120 pd-btm-120">
        <Container>
        <Row>
          <Col lg="12">
            <h2>Delivering Web Design Services in Niagara To:</h2>
            <Link href="/beamsville-web-design">Beamsville, ON</Link> | <Link href="/crystal-beach-web-design">Crystal Beach, ON</Link> | <Link href="/fonthill-web-design">Fonthill, ON</Link> <Link href="/fort-erie-web-design">Fort Erie, ON</Link> | <Link href="/grimsby-web-design">Grimsby, ON</Link> | <Link href="/">Niagara Falls, ON</Link> | <Link href="/">Niagara-on-the-Lake, ON</Link> | <Link href="/port-colbone-web-design">Port Colborne, ON</Link> | <Link href="/">St. Catharines, ON</Link> | <Link href="/thorold-web-design">Thorold, ON</Link> | <Link href="/wainfleet-web-design">Wainfleet, ON</Link> | <Link href="/welland-web-design">Welland, ON</Link>
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
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.712155785956!2d-79.21034682429627!3d43.152573384666596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3507111975161%3A0x18a1198be6280a70!2s%F0%9F%9A%80%20Infused%20Agency%20%7C%20Niagara%20Web%20Design%20%26%20SEO%20Company!5e0!3m2!1sen!2sca!4v1725932520162!5m2!1sen!2sca" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
