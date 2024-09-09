import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import Nav from "../../components/Nav/nav";
import Footer from "../../components/Footer/footer";

import intro from "../img/digital-marketing-agency-niagara.webp";
import img1 from "../img/seo-keyword-research.webp";
import img2 from "../img/seo-link-building.webp";
import img3 from "../img/seo-content-writing.webp";
import Link from "next/link";

import results from "../img/digital-marketing-agency-niagara-results.png";

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

const SEO = () => {
  return (
    <>
      <Head>
        <title>
          Digital Marketing Agency in Niagara | Infused Agency | Social Media
          Marketing Niagara
        </title>
        <meta
          name="description"
          content="Boost your online presence with our Niagara-based digital marketing agency. We specialize in local SEO & social media marketing. Get your free consultation today!"
        />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Niagara" />
        <meta name="geo.position" content="43.0896;-79.0849" />
        <meta name="ICBM" content="43.0896, -79.0849" />
        <link
          rel="canonical"
          href="https://infused.agency/digital-marketing-agency-niagara"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd()}
          key="item-jsonld"
        />
      </Head>
      <Nav />
      <div className="niche-pages">
        <section className="hero">
          <Container>
            <Row>
              <Col lg="12">
                <h2 className="intro">Grow your brand with the</h2>
                <h1>Best Digital Marketing Agency in Niagara</h1>
                <h2 className="sub">
                  Boost revenue, drive leads and get more sales for your Niagara
                  company today!
                </h2>
                <Link href="/get-a-quote">
                  <button>Get Your Free Quote Now!</button>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="inner-content">
          <div className="intro">
            <Container>
              <Row>
                <Col lg="6">
                  <div className="card">
                    <h2>
                      Importance of Digital &amp; Social Media Marketing in
                      Niagara
                    </h2>
                    <p>
                      Digital marketing is really important for businesses in
                      Niagara. As more people shop and look for services online,
                      it’s essential for local companies to be visible on the
                      internet. With billions of people using the internet every
                      day, having a strong online presence helps businesses
                      connect with customers in their area.
                    </p>
                    <br />
                    <p>
                      By using tools like social media,{" "}
                      <Link href="/">web design for Niagara</Link> businesses,
                      and online ads and our{" "}
                      <Link href="/niagara-seo-company">
                        Niagara SEO services
                      </Link>
                      , businesses can reach more people and turn them into
                      loyal customers. This not only helps them grow but also
                      makes them a bigger part of the Niagara community. In
                      short, digital marketing helps businesses succeed by
                      making it easier for people to find and trust them online.
                    </p>
                  </div>
                </Col>
                <Col lg="6">
                  <Image
                    className="img-fluid"
                    src={intro}
                    alt="digital marketing agency niagara"
                  />
                </Col>
              </Row>
            </Container>
          </div>
          <div className="niche-services pd-top-80">
            <Container>
              <Row className="text-center">
                <Col lg="12">
                  <h2>
                    Our <span>Digital Marketing Services</span> in Niagara
                  </h2>
                </Col>
              </Row>
              <Row className="pd-top-40">
                <Col lg="4" className="d-flex">
                  <div className="card">
                    <Image src={img1} alt="social media marketing niagara" />
                    <h3>Social Media Ads Marketing</h3>
                    <p>
                      We offer social media ads marketing to help your business
                      get noticed on platforms like Facebook and Instagram. Our
                      team creates fun and eye-catching ads that target the
                      right people in your area. This way, we can make sure that
                      your ads reach potential customers who are interested in
                      what you offer. With our help, you can connect with more
                      people and grow your business through social media!
                    </p>
                  </div>
                </Col>
                <Col lg="4" className="d-flex">
                  <div className="card">
                    <Image src={img2} alt="local seo marketing niagara" />
                    <h3>Local SEO Marketing</h3>
                    <p>
                      Our local SEO marketing service is all about helping your
                      business show up when people in Niagara search for
                      services like yours. We make sure your website is
                      optimized so that it appears in local search results. This
                      means when someone looks for a restaurant, shop, or
                      service nearby, your business will be one of the first
                      they see. By improving your local visibility, we help you
                      attract more customers from your community.
                    </p>
                  </div>
                </Col>
                <Col lg="4" className="d-flex">
                  <div className="card">
                    <Image src={img3} alt="search engine marketing niagara" />
                    <h3>General SEO Marketing</h3>
                    <p>
                      With our general SEO marketing, we focus on improving your
                      website's visibility on search engines like Google. We use
                      special techniques to make your website more attractive to
                      search engines, which helps it rank higher in search
                      results. This means more people will find your site when
                      they search for products or services you offer. Our goal
                      is to drive more organic traffic to your website, helping
                      you reach more potential customers and grow your business!
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="niche-featured pd-top-80">
            <Container>
              <Row>
                <Col lg="6">
                  <h2 className="pd-btm-40">
                    Featured Client of Our{" "}
                    <span>Niagara Digital Marketing Agency</span>
                  </h2>
                  <div className="card">
                    <img
                      width="48"
                      height="48"
                      src="https://lh3.googleusercontent.com/a/ACg8ocIKt9X9LSKomYMvAkQn_0673Xwg0EBOP-QigGk1AaAVHdVIvA=w48-h48-p-rp-mo-ba3-br100"
                    />
                    <p className="author">KD Flowers</p>
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
                      In just one month, my business's website made it to the
                      first page of Google! I was so surprised! After that, I
                      started getting emails from people interested in my
                      services right away, and I've been busy ever since! Thanks
                      a lot to Infused Agency for helping my business grow!
                    </p>
                  </div>
                </Col>
                <Col lg="6">
                  <Image
                    className="img-fluid"
                    src={results}
                    alt="niagara digital marketing agency case study"
                  />{" "}
                </Col>
              </Row>
              <Row>
                <Col lg="4">
                  <div className="card">
                    <h3>10,700</h3>
                    <p>website views / month</p>
                  </div>
                </Col>
                <Col lg="4">
                  <div className="card">
                    <h3>20,000%</h3>
                    <p>increase in new leads in 6 months</p>
                  </div>
                </Col>
                <Col lg="4">
                  <div className="card">
                    <h3>5,800</h3>
                    <p>new users discovering website / month</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="niche-why pd-top-80">
            <Container>
              <Row className="text-center w-80">
                <Col lg="12">
                  <h2>
                    Why Choose <span>Infused Agency</span> As Your Niagara
                    Digital Marketing Agency
                  </h2>
                  <h3>
                    Increase Your Revenue With Our Niagara Digital Marketing
                    Experts
                  </h3>
                </Col>
              </Row>
              <Row className="pd-top-40 align-items-center">
                <Col lg="6">
                  <p>
                    Choosing Infused Agency as your Niagara digital marketing
                    agency is a smart decision for many reasons! First, we work
                    <strong>exclusively with businesses in Niagara</strong>, so
                    we really understand the local market and what it needs.
                    With <strong>over a decade of experience</strong>, our team
                    knows how to help businesses succeed online. We are proud to
                    say that every business we help grows, which shows how
                    effective our strategies are. In fact, we were named the
                    <strong>
                      best digital marketing business of 2024
                    </strong>{" "}
                    according to Three Best Rated, which is a big honor!
                    <br />
                    <br />
                    Plus, we have{" "}
                    <strong>over 30 five-star Google reviews</strong>, proving
                    that our clients are really happy with our work. With us,
                    you can trust that your business will be in great hands!
                  </p>
                  <Link href="/get-a-quote">
                    <button>Get Your Free Quote Now!</button>
                  </Link>
                </Col>
                <Col lg="6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d746188.552481925!2d-80.00600478031573!3d43.06669410655857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d34c9ec993deb7%3A0xef7f46930d192396!2sRegional%20Municipality%20of%20Niagara%2C%20ON!5e0!3m2!1sen!2sca!4v1725896468079!5m2!1sen!2sca"
                    width="100%"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="niche-cta">
          <Container>
            <Row className="text-center">
              <Col lg="12">
                <h2>Need Niagara Digital Marketing Services?</h2>
                <Link href="/get-a-quote">
                  <button>Get Your Free Quote Now!</button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SEO;
