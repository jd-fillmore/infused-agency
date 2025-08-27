import React from "react";
import { getLatestPosts } from "../lib/posts";
import { Col, Container, Row } from "reactstrap";
import { format } from "date-fns";
import "react-accessible-accordion/dist/fancy-example.css";
import Head from "next/head";
import Nav from "../../components/Nav/nav";
import Hero from "../../components/Home/Hero/hero";
import Footer from "../../components/Footer/footer";

import Link from "next/link";
import Image from "next/image";
import best from "../../src/img/awards.png";
import flatRock from "../../src/img/st-catharines-seo-results.jpg";
import test1 from "../../src/img/seo-company-niagara.png";
import test2 from "../../src/img/seo-niagara-experts.png";
import test3 from "../../src/img/seo-niagara-services.png";
import delta from "../../src/img/niagara-seo-company-results.jpg";
import infused from "../../src/img/infused-agency-seo-niagara.png";
import check from "../../src/img/check.png";
import results from "../../src/img/seo-agency-st-catharines.png";
import reviews from "../../src/img/seo-niagara-reviews.png";
import affiliate1 from "../../src/img/aff-google-partner.jpg";
import affiliate2 from "../../src/img/aff-niagara-chamber.jpg";
import affiliate3 from "../../src/img/aff-three-best-rated.jpg";
import affiliate4 from "../../src/img/aff-good-firms.jpg";
import affiliate5 from "../../src/img/aff-design-rush.png";
import affiliate6 from "../../src/img/aff-google-reviews.jpg";
import feat1 from "../../src/img/feat-suk-law.png";
import feat2 from "../../src/img/feat-flat-rock.png";
import feat3 from "../../src/img/feat-fred.png";
import feat4 from "../../src/img/feat-uphi.png";
import feat5 from "../../src/img/feat-kd.png";
import feat6 from "../../src/img/feat-delta.png";
import feat7 from "../../src/img/feat-brandi.png";
import feat8 from "../../src/img/feat-jerry.png";
import data1 from "../../src/img/gsc-flat.png";
import data2 from "../../src/img/gsc-freds.png";

const Home = ({ latestPosts }) => {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Place",
                  "@id": "https://infused.agency/#place",
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: "43.197109",
                    longitude: "-79.243362",
                  },
                  hasMap: "https://maps.app.goo.gl/efsLRm9sTqUN7HhG7",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "73 Alexandra Blvd",
                    addressLocality: "St. Catharines",
                    addressRegion: "ON",
                    postalCode: "L2P1K2",
                    addressCountry: "CA",
                  },
                },
                {
                  "@type": ["LocalBusiness", "Organization"],
                  "@id": "https://infused.agency/#organization",
                  name: "Infused Agency",
                  url: "https://infused.agency",
                  sameAs: [
                    "https://www.facebook.com/infused.agency",
                    "https://twitter.com/InfusedAgency",
                    "https://linkedin.com/company/infused-agency",
                    "https://instagram.com/infusedagency",
                    "https://www.mapquest.com/ca/ontario/infused-agency-456469990",
                    "https://www.yellowpages.ca/bus/Ontario/St-Catharines/Infused-Agency/101902875.html",
                    "https://gncc.ca/members-and-benefits/member-directory/#/action/Listing/value/41026/cid/1185/id/1002901/Infused-Agency",
                    "https://www.goodfirms.co/company/infused-agency",
                    "https://www.pagesjaunes.ca/bus/Ontario/St-Catharines/Infused-Agency/101902875.html",
                    "https://about.me/infused0",
                    "https://www.zoominfo.com/c/infused-agency/447274660",
                    "https://www.hotfrog.ca/company/9a5d8745ba57d4499b16df3d144dae56/infused-agency/st-catharines/web-design",
                    "https://www.localhomeservicepros.com/ontario/st-catharines/website-design/infused-agency",
                    "https://www.getlisteduae.com/listings/infused-agency",
                    "https://www.canadianplanet.net/infused-agency-niagara-F1109C6001ED043",
                  ],
                  email: "info@infused.agency",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "73 Alexandra Blvd",
                    addressLocality: "St. Catharines",
                    addressRegion: "ON",
                    postalCode: "L2P1K2",
                    addressCountry: "CA",
                  },
                  logo: {
                    "@type": "ImageObject",
                    "@id": "https://infused.agency/#logo",
                    url:
                      "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
                    contentUrl:
                      "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
                    caption: "Infused Agency",
                    inLanguage: "en-US",
                    width: "300",
                    height: "100",
                  },
                  priceRange: "$$",
                  openingHours: ["Mo-Fr 09:00-17:00", "Sa 10:00-14:00"],
                  location: {
                    "@id": "https://infused.agency/#place",
                  },
                  image: {
                    "@id": "https://infused.agency/#logo",
                  },
                  telephone: "+1-905-933-3115",
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "33",
                  },
                  review: [
                    {
                      "@type": "Review",
                      reviewRating: {
                        "@type": "Rating",
                        ratingValue: "5",
                      },
                      author: {
                        "@type": "Person",
                        name: "JD Fillmore",
                      },
                      reviewBody:
                        "Excellent SEO service that helped improve our local visibility significantly.",
                    },
                    {
                      "@type": "Review",
                      reviewRating: {
                        "@type": "Rating",
                        ratingValue: "5",
                      },
                      author: {
                        "@type": "Person",
                        name: "Alice Smith",
                      },
                      reviewBody:
                        "Professional and effective SEO services. Highly recommended!",
                    },
                    {
                      "@type": "Review",
                      reviewRating: {
                        "@type": "Rating",
                        ratingValue: "4",
                      },
                      author: {
                        "@type": "Person",
                        name: "John Doe",
                      },
                      reviewBody:
                        "Great service and support throughout our SEO campaign.",
                    },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://infused.agency/#website",
                  url: "https://infused.agency",
                  name: "Infused Agency",
                  alternateName: "Infused",
                  publisher: {
                    "@id": "https://infused.agency/#organization",
                  },
                  inLanguage: "en-US",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://infused.agency/?s={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "WebPage",
                  "@id": "https://infused.agency/#webpage",
                  url: "https://infused.agency/",
                  name:
                    "SEO Company Niagara Falls, St. Catharines | Infused Agency",
                  datePublished: "2023-01-01T09:00:00+00:00",
                  dateModified: "2025-08-27T10:00:00+00:00",
                  about: {
                    "@id": "https://infused.agency/#organization",
                  },
                  isPartOf: {
                    "@id": "https://infused.agency/#website",
                  },
                  primaryImageOfPage: {
                    "@id":
                      "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
                  },
                  inLanguage: "en-US",
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://infused.agency/about/",
                  name: "Infused Agency",
                  description:
                    "Infused Agency is a premier SEO company serving Niagara, St. Catharines, Niagara Falls, and Niagara-on-the-Lake. We specialize in local SEO services that help businesses improve their online visibility and attract more customers. Our expert team provides comprehensive digital marketing solutions including search engine optimization, web design, and local search marketing to grow your business in the Niagara region.",
                  telephone: "+1-905-933-3115",
                  url: "https://infused.agency",
                  logo:
                    "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
                  hasMap: "https://maps.app.goo.gl/efsLRm9sTqUN7HhG7",
                  currenciesAccepted: "CAD, USD",
                  paymentAccepted:
                    "Cash, Credit Card, Debit Card, Visa, MC, Amex",
                  additionalProperty:
                    "https://en.wikipedia.org/wiki/Search_engine_optimization",
                  priceRange: "$$",
                  openingHours:
                    "Mo 0900-1700 Tu 0900-1700 We 0900-1700 Th 0900-1700 Fr 0900-1700 Sa 1000-1400",
                  disambiguatingDescription:
                    "Founded in St. Catharines, ON, Infused Agency specializes in local SEO services for businesses throughout the Niagara region. We help companies in Niagara Falls, St. Catharines, and Niagara-on-the-Lake improve their online presence through proven SEO strategies and digital marketing solutions.",
                  alternateName:
                    "Infused SEO Agency, Infused Digital Marketing",
                  foundingDate: "2019",
                  address: {
                    "@type": "PostalAddress",
                    postalCode: "L2P1K2",
                    addressRegion: "ON",
                    addressCountry: "CA",
                    streetAddress: "73 Alexandra Blvd",
                    addressLocality: "St. Catharines",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "Customer Service",
                    telephone: "+1-905-933-3115",
                    email: "info@infused.agency",
                    areaServed: ["ON", "CA"],
                  },
                  image: {
                    "@type": "ImageObject",
                    name: "Infused Agency",
                    creator: "Infused Agency",
                    contentLocation: "St. Catharines, ON",
                    description:
                      "Premier SEO company serving Niagara region with local search optimization services",
                    url:
                      "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    name: "Infused Agency",
                    postalCode: "L2P1K2",
                    latitude: "43.197109",
                    longitude: "-79.243362",
                    description:
                      "Our office location in St. Catharines serving the Niagara region.",
                  },
                  areaServed: [
                    {
                      "@type": "City",
                      name: "St. Catharines",
                    },
                    {
                      "@type": "City",
                      name: "Niagara Falls",
                    },
                    {
                      "@type": "City",
                      name: "Niagara-on-the-Lake",
                    },
                    {
                      "@type": "City",
                      name: "Welland",
                    },
                    {
                      "@type": "City",
                      name: "Fort Erie",
                    },
                    {
                      "@type": "AdministrativeArea",
                      name: "Niagara Region, Ontario",
                    },
                  ],
                  serviceArea: {
                    "@type": "GeoCircle",
                    geoMidpoint: {
                      "@type": "GeoCoordinates",
                      latitude: "43.197109",
                      longitude: "-79.243362",
                    },
                    geoRadius: "50000",
                  },
                  additionalType: [
                    "https://en.wikipedia.org/wiki/Search_engine_optimization",
                    "http://productontology.org/id/Search_engine_optimization",
                    "https://en.wikipedia.org/wiki/Digital_marketing",
                    "http://productontology.org/id/Digital_marketing",
                    "https://en.wikipedia.org/wiki/Web_design",
                    "http://productontology.org/id/Web_design",
                  ],
                  mainEntityOfPage: {
                    "@id": "https://infused.agency/#webpage",
                  },
                  knowsAbout: [
                    "SEO Niagara",
                    "SEO St. Catharines",
                    "SEO Niagara Falls",
                    "Local SEO Services",
                    "Search Engine Optimization",
                    "Digital Marketing Niagara",
                    "Web Design Niagara",
                    "Local Search Marketing",
                  ],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Infused Agency Services",
                    "@id": "https://infused.agency",
                    additionalType: "http://www.productontology.org/id/website",
                    url: "https://infused.agency",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: [
                          {
                            "@type": "Service",
                            name: "Local SEO Services",
                            "@id": "https://infused.agency/seo/",
                            url: "https://infused.agency/seo/",
                            description:
                              "Comprehensive local SEO services for businesses in Niagara, St. Catharines, and Niagara Falls. We help improve your search engine rankings and local visibility to attract more customers.",
                          },
                          {
                            "@type": "Service",
                            name: "SEO Niagara",
                            "@id": "https://infused.agency/seo-niagara/",
                            url: "https://infused.agency/seo-niagara/",
                            description:
                              "Specialized SEO services for Niagara region businesses. Our proven strategies help companies rank higher in local search results.",
                          },
                          {
                            "@type": "Service",
                            name: "Web Design & Development",
                            "@id": "https://infused.agency/web-design/",
                            url: "https://infused.agency/web-design/",
                            description:
                              "Professional web design and development services creating SEO-optimized websites that convert visitors into customers.",
                          },
                          {
                            "@type": "Service",
                            name: "Digital Marketing",
                            "@id": "https://infused.agency/digital-marketing/",
                            url: "https://infused.agency/digital-marketing/",
                            description:
                              "Complete digital marketing solutions including SEO, social media marketing, and online advertising for Niagara businesses.",
                          },
                        ],
                      },
                    ],
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "33",
                  },
                },
              ],
            }),
          }}
        />

        <title>SEO Niagara Falls | SEO Company St. Catharines</title>
        <meta
          name="description"
          content="Top-rated SEO agency in Niagara & St. Catharines. Expert search engine optimization, local SEO, and digital marketing services. Boost your rankings today!"
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
      </Head>
      <Nav />
      <Hero />
      <section className="affilliates text-center pd-top-40 pd-btm-40">
        <Container>
          <Row>
            <Col lg="2">
              <Image unoptimized src={affiliate1} alt="google partner" />
            </Col>
            <Col lg="2">
              <Image
                unoptimized
                src={affiliate2}
                alt="niagara chamber of commerce"
              />
            </Col>
            <Col lg="2">
              <Image unoptimized src={affiliate3} alt="three best rated" />
            </Col>
            <Col lg="2">
              <Image unoptimized src={affiliate4} alt="good firms" />
            </Col>
            <Col lg="2">
              <a
                href="https://www.designrush.com/agency/profile/infused-agency"
                target="_blank"
              >
                <Image
                  unoptimized
                  src={affiliate5}
                  alt="Infused Agency's rating on SEO Agency Listing by DesignRush, the industry-leading B2B Marketplace connecting brands with agencies"
                />
              </a>
            </Col>
            <Col lg="2">
              <Image unoptimized src={affiliate6} alt="google reviews" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="trusted pd-top-80 pd-btm-80">
        <Container>
          <Row className="text-center pd-btm-20">
            <Col lg="12">
              <h2>
                Trusted By <span>Niagara Businesses</span>
              </h2>
              <p>For over 10 years</p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col lg="3">
              <Image unoptimized src={feat1} alt="suk law" />
            </Col>
            <Col lg="3">
              <Image unoptimized src={feat2} alt="flat rock" />
            </Col>
            <Col lg="3">
              <Image unoptimized src={feat3} alt="fred's concrete" />
            </Col>
            <Col lg="3">
              <Image unoptimized src={feat4} alt="uphi cannabis" />
            </Col>
          </Row>
          <Row className="text-center pd-top-40">
            <Col lg="3">
              <Image unoptimized src={feat5} alt="kd flowers" />
            </Col>
            <Col lg="3">
              <Image unoptimized src={feat6} alt="delta energy solutions" />
            </Col>
            <Col lg="3">
              <Image unoptimized src={feat7} alt="brandi may psychotherapy" />
            </Col>
            <Col lg="3">
              <Image unoptimized src={feat8} alt="jerry's insulating" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-top-web">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>
                Our Niagara SEO Clients <span>Get Results</span>
              </h2>
            </div>
          </div>
          <section className="work">
            <Row className="pd-top-40">
              <Col lg="6">
                <h3>Flat Rock Cellars</h3>
                <hr />
                <Image
                  className="img-fluid"
                  src={flatRock}
                  alt="Flat Rock Cellars SEO Results"
                />
                <div className="card">
                  <div className="text-center pd-btm-20">
                    <svg
                      width="125"
                      height="25"
                      viewBox="0 0 125 25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <symbol id="star" viewBox="0 0 100 100">
                          <polygon
                            fill="#e2c044"
                            points="50,8 61,38 94,38 66,58 76,90 50,71 24,90 34,58 6,38 39,38"
                          />
                        </symbol>
                      </defs>

                      <use href="#star" x="0" y="0" width="25" height="25" />
                      <use href="#star" x="25" y="0" width="25" height="25" />
                      <use href="#star" x="50" y="0" width="25" height="25" />
                      <use href="#star" x="75" y="0" width="25" height="25" />
                      <use href="#star" x="100" y="0" width="25" height="25" />
                    </svg>
                  </div>
                  <h3 class="text-center">After working with us:</h3>
                  <div className="text-center stats">
                    <h3>+550%</h3>
                    <p>Local Visibility</p>
                  </div>
                  <Image
                    className="img-fluid"
                    unoptimized
                    src={data1}
                    alt="flat rock cellars niagara seo"
                  />
                </div>
              </Col>
              <Col lg="6">
                <h3>Delta Energy Solutions</h3>
                <hr />
                <Image
                  className="img-fluid"
                  src={delta}
                  alt="Delta Energy Solutions SEO Results"
                />
                <div className="card">
                  <div className="text-center pd-btm-20">
                    <svg
                      width="125"
                      height="25"
                      viewBox="0 0 125 25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <symbol id="star" viewBox="0 0 100 100">
                          <polygon
                            fill="#e2c044"
                            points="50,8 61,38 94,38 66,58 76,90 50,71 24,90 34,58 6,38 39,38"
                          />
                        </symbol>
                      </defs>

                      <use href="#star" x="0" y="0" width="25" height="25" />
                      <use href="#star" x="25" y="0" width="25" height="25" />
                      <use href="#star" x="50" y="0" width="25" height="25" />
                      <use href="#star" x="75" y="0" width="25" height="25" />
                      <use href="#star" x="100" y="0" width="25" height="25" />
                    </svg>
                  </div>
                  <h3 class="text-center">After working with us:</h3>
                  <div className="text-center stats">
                    <h3>+670%</h3>
                    <p>Local Visibility</p>
                  </div>
                  <Image
                    className="img-fluid"
                    unoptimized
                    src={data1}
                    alt="delta energy solutions niagara seo"
                  />
                </div>
              </Col>
            </Row>
            <Row className="pd-top-40 text-center">
              <Col lg="12">
                <h2>
                  But Don't Take <span>Our Word For It</span>
                </h2>
              </Col>
            </Row>
            <Row className="pd-top-40 text-center testimonials">
              <Col lg="4">
                <Image src={test1} alt="seo company niagara" />
                <p className="owner">Lucas Folino</p>
                <em>Owner - Fred's Concrete</em>
                <p className="desc">
                  "Infused Agency got me a lot more visibility through Google in
                  a short period of time. Which has led to a ton of leads for my
                  business. Very knowledgeable and they walk you through every
                  detail. Would definitely recommend!""
                </p>
              </Col>
              <Col lg="4">
                <Image src={test2} alt="seo niagara experts" />
                <p className="owner">Brandi May</p>
                <em>Owner - Brandi May Psychotherapy</em>
                <p className="desc">
                  "Infused Agency are not only clear professionals and expert in
                  their fields, but are extremely personable to work with. I
                  would definitely recommend Infused Agency to anyone looking to
                  optimize SEO!"
                </p>
              </Col>
              <Col lg="4">
                <Image src={test3} alt="seo niagara services" />
                <p className="owner">Sandro Visca</p>
                <em>Owner - VISCA Electric</em>
                <p className="desc">
                  "Working with Infused Agency was a pleasure. They were
                  extremely responsive and informative from start to finish.
                  Infused Agency is creative, efficient, and very knowledgeable
                  in their field. "
                </p>
              </Col>
            </Row>
            <Row className="pd-top-40 text-center">
              <Col lg="12">
                <Link href="/work">
                  <button>View More SEO Results</button>
                </Link>
              </Col>
            </Row>
          </section>
        </div>
      </section>

      {/* <section className="process pd-top-80">
        <Container>
          <Row className="text-center">
            <Col lg="12">
              <h2>
                How Search Engine Optimization Works <br />
                At Infused Agency
              </h2>
            </Col>
          </Row>
        </Container>
      </section> */}

      <section className="home-services">
        <div className="container">
          <div className="row pd-btm-40">
            <div className="col-lg-12 text-center">
              <h2>Niagara SEO Services</h2>
              <p>Get More Visibility</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pd-top-40">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Keyword Research & Strategy</h2>
                <p>
                  At Infused Agency, our SEO Niagara specialists begin every
                  campaign with detailed keyword research. We identify the most
                  relevant and profitable search terms your customers are using
                  in St. Catharines, Niagara Falls, and across the Niagara
                  Region. By analyzing your website and competitors, we craft a
                  data-driven SEO strategy designed to capture qualified traffic
                  and deliver measurable results.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Link Building</h2>
                <p>
                  A strong backlink profile is essential for higher rankings.
                  Our Niagara SEO services include ethical link-building
                  strategies that earn high-quality links from reputable
                  websites. These authoritative backlinks boost your domain
                  authority, build trust with search engines, and strengthen
                  your overall online credibility.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Content Writing</h2>
                <p>
                  Content is the foundation of effective SEO. Our Niagara
                  content writing team creates engaging, SEO-friendly copy
                  tailored to your business and industry. From optimized blog
                  posts to landing pages, we develop content that reflects your
                  brand’s voice, establishes thought leadership, and improves
                  rankings for keywords like SEO St. Catharines and SEO Niagara
                  Falls.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>On-Page SEO</h2>
                <p>
                  Our SEO Niagara experts optimize your website’s structure,
                  code, and content to ensure it performs at its best. We
                  conduct in-depth audits, refine metadata, improve internal
                  linking, and enhance site usability — all while aligning with
                  Google’s ranking factors. The result is a website that
                  attracts both search engines and users.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Local SEO</h2>
                <p>
                  For businesses in St. Catharines and Niagara Falls, local
                  visibility is key. Infused Agency ensures your business is
                  optimized for local searches by improving your Google Business
                  Profile, building local citations, and creating
                  location-specific content. These strategies help you appear in
                  Google’s Local Pack, maps, and other high-visibility areas
                  where potential customers are searching.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Technical SEO</h2>
                <p>
                  Behind every successful SEO campaign is a strong technical
                  foundation. Our technical SEO Niagara specialists enhance your
                  site’s speed, mobile performance, indexing, and security. From
                  fixing crawl errors to optimizing site architecture, we make
                  sure search engines can easily navigate and rank your website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why pd-top-80">
        <Container>
          <Row className="text-center">
            <Col lg="12">
              <h2>Choosing Infused Agency as Your SEO Niagara Partner</h2>
            </Col>
          </Row>
          <Row className="align-items-center pd-top-40 pd-btm-40">
            <Col lg="6">
              <p>
                In today’s competitive market, you can’t afford to partner with
                just any digital marketing firm. You need a team that takes the
                time to understand your business goals, your brand’s message,
                and the customers you want to reach. At Infused Agency, we go
                beyond surface-level strategies — our focus is on delivering
                real results that generate the highest possible return on your
                investment.
              </p>
            </Col>
            <Col lg="6">
              <Image
                className="img-fluid"
                src={infused}
                alt="infused agency seo niagara"
              />
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <h3>Our Approach</h3>

              <p>
                Our comprehensive SEO process — Discover, Analyze, Strategize,
                Execute, Measure, Report, and Refine — ensures that your
                campaign is continuously optimized for growth. This agile
                methodology allows us to adapt to industry changes quickly while
                keeping your business ahead of competitors in local search
                results.
              </p>

              <h3>Supporting Local Businesses in Niagara</h3>

              <p>
                We understand the challenges local businesses face when trying
                to stand out online. That’s why we specialize in small business
                SEO in Niagara, St. Catharines, and Niagara Falls — giving
                entrepreneurs the tools and strategies needed to gain traction
                in local search, attract qualified leads, and compete
                effectively in their markets.
              </p>

              <p>
                With Infused Agency, you get more than just an SEO provider. You
                get a partner who’s invested in your long-term success with
                tailored SEO Niagara services that build credibility,
                visibility, and growth.
              </p>
            </Col>
          </Row>
          <Row className="text-center pd-top-40">
            <Col lg="4">
              <Image height="50" src={check} alt="client focused seo" />
              <h3 className="pd-top-20">Client-Focused SEO Services</h3>
              <p>
                At Infused Agency, we treat your business like it’s our own.
                Your success is the measure of our success, which is why we take
                the time to understand your goals and challenges. Each client
                works with a dedicated SEO Niagara specialist who provides
                personalized attention and ongoing monitoring to deliver the
                best possible results.
              </p>
            </Col>
            <Col lg="4">
              <Image height="50" src={check} alt="seo optimization niagara" />
              <h3 className="pd-top-20">Continuous Optimization</h3>
              <p>
                SEO isn’t a one-time project — it’s an ongoing process. Our team
                of Niagara SEO experts constantly tracks your website’s
                performance, adapting strategies to keep pace with Google’s
                updates and industry changes. This ensures your business stays
                competitive in St. Catharines, Niagara Falls, and across
                Niagara.
              </p>
            </Col>
            <Col lg="4">
              <Image height="50" src={check} alt="affordable seo niagara" />
              <h3 className="pd-top-20">Affordable SEO Solutions</h3>
              <p>
                We believe in delivering exceptional value without unexpected
                costs. Infused Agency offers affordable SEO Niagara services
                with transparent pricing and no hidden fees. Whether you’re a
                small business or a growing company, our solutions are designed
                to fit your budget while generating long-term results.
              </p>
            </Col>
          </Row>
          <Row className="text-center pd-top-40">
            <Col lg="4">
              <Image height="50" src={check} alt="seo niagara reporting" />
              <h3 className="pd-top-20">Transparent Reporting</h3>
              <p>
                You’ll never be left in the dark about your SEO campaign. Our
                clear, detailed reports give you full visibility into how your
                website is performing and the steps we’re taking to improve it.
                With Infused Agency, you can expect consistent updates and
                honest communication every step of the way.
              </p>
            </Col>
            <Col lg="4">
              <Image
                height="50"
                src={check}
                alt="seo optimization st. catharines"
              />
              <h3 className="pd-top-20">Backed by Google Expertise</h3>
              <p>
                Our Niagara SEO specialists stay ahead of the curve with deep
                knowledge of Google’s latest updates, best practices, and
                ethical SEO strategies. By following proven, white-hat methods,
                we help your website achieve sustainable rankings and long-term
                growth.
              </p>
            </Col>
            <Col lg="4">
              <Image height="50" src={check} alt="seo niagara audit" />
              <h3 className="pd-top-20">Free SEO Audit</h3>
              <p>
                Not sure how your website is performing? Infused Agency offers a
                complimentary SEO audit for Niagara businesses. We’ll review
                your website’s current performance, highlight opportunities for
                improvement, and provide recommendations tailored to your
                business goals — with no obligation.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="reviews">
        <Container>
          <Row className="text-center pd-top-40">
            <Col lg="12">
              <h2>Trusted SEO Niagara Experts with Proven Results</h2>
            </Col>
          </Row>
          <Row className="align-items-center pd-top-20">
            <Col lg="6">
              <p>
                At Infused Agency, results speak for themselves. With over{" "}
                <span>
                  50 SEO clients served and 40+ five-star Google reviews
                </span>
                , we’ve built a reputation as a leading SEO agency in Niagara,
                St. Catharines, and Niagara Falls. Our clients consistently see
                measurable improvements in search rankings, website traffic, and
                lead generation.
                <br />
                <br />
                We’re proud to have helped businesses of all sizes — from small
                startups to established companies — achieve stronger online
                visibility and higher conversions. Every strategy we implement
                is backed by data, tailored to your goals, and focused on
                delivering a real return on investment. When you work with
                Infused Agency, you’re partnering with a trusted team that
                combines local market expertise, technical SEO skills, and
                creative content strategies to help your business dominate
                search results across Niagara.
              </p>
            </Col>
            <Col lg="6">
              <Image
                className="img-fluid"
                src={reviews}
                alt="seo niagara reviews"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-faq">
        <Container>
          <Row className="text-center pd-btm-40">
            <Col lg="12">
              <h2>Frequently Asked Questions For Niagara SEO Services</h2>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <h3>
                What makes SEO Niagara services different from general SEO?
              </h3>
              <p>
                SEO Niagara services are specifically tailored to help local
                businesses in St. Catharines, Niagara Falls, and across the
                Niagara Region rank higher in local search results. We
                understand the unique market dynamics, local competition, and
                search patterns specific to the Niagara area. Our SEO strategies
                include local citation building, Google Business Profile
                optimization, and location-specific content that helps your
                business appear when customers search for services in your area.
              </p>

              <h3>
                How long does it take to see results from SEO St. Catharines
                campaigns?
              </h3>
              <p>
                Most SEO St. Catharines clients start seeing initial
                improvements in search visibility within 3-6 months, with
                significant results typically appearing by 6-12 months. The
                timeline depends on factors like your current website
                performance, competition level, and the keywords you're
                targeting. Our proven SEO process includes continuous
                optimization and transparent reporting, so you'll see steady
                progress as we work to improve your rankings in St. Catharines
                and surrounding areas.
              </p>

              <h3>
                Can small businesses in Niagara Falls compete with larger
                companies through SEO?
              </h3>
              <p>
                Absolutely! SEO Niagara Falls strategies are particularly
                effective for small businesses because they focus on local
                search optimization where you can outrank larger competitors. By
                targeting location-specific keywords like "services near Niagara
                Falls" and optimizing for local search intent, small businesses
                often achieve better visibility than big corporations. Our
                affordable SEO solutions are designed specifically to help small
                businesses compete effectively in their local markets.
              </p>

              <h3>
                What's included in your SEO Niagara audit and strategy
                development?
              </h3>
              <p>
                Our comprehensive SEO Niagara audit includes technical website
                analysis, keyword research for St. Catharines and Niagara Falls
                markets, competitor analysis, content evaluation, and local SEO
                assessment. We examine your current Google Business Profile,
                local citations, backlink profile, and site performance. Based
                on these findings, we develop a customized SEO strategy that
                addresses your specific challenges and opportunities in the
                Niagara Region.
              </p>

              <h3>
                How do you measure the success of SEO St. Catharines campaigns?
              </h3>
              <p>
                We track multiple metrics to measure SEO St. Catharines success,
                including search rankings for targeted keywords, organic website
                traffic growth, local visibility improvements, and most
                importantly, lead generation and conversions. Our transparent
                reporting shows you exactly how your website is performing,
                which keywords are driving traffic, and how many potential
                customers are finding your business through search. We provide
                detailed monthly reports with clear ROI measurements.
              </p>

              <h3>
                Do you guarantee first-page rankings for SEO Niagara Falls
                keywords?
              </h3>
              <p>
                While we can't guarantee specific rankings (as search engines
                constantly update their algorithms), we do guarantee our
                commitment to improving your visibility through proven SEO
                Niagara Falls strategies. Our track record shows consistent
                success helping businesses achieve first-page rankings for their
                target keywords. We focus on sustainable, white-hat SEO
                techniques that build long-term visibility rather than quick
                fixes that might get penalized by Google.
              </p>

              <h3>
                What's the difference between SEO and local SEO for Niagara
                businesses?
              </h3>
              <p>
                Traditional SEO focuses on ranking for broad keywords nationally
                or globally, while local SEO Niagara targets location-specific
                searches like "SEO company near me" or "St. Catharines SEO
                services." Local SEO includes optimizing your Google Business
                Profile, building local citations, managing online reviews, and
                creating location-based content. For Niagara businesses serving
                local customers, local SEO is typically more valuable as it
                helps you appear in Google's Local Pack and Maps results.
              </p>

              <h3>
                How much do SEO services cost for businesses in St. Catharines
                and Niagara Falls?
              </h3>
              <p>
                SEO St. Catharines and SEO Niagara Falls pricing varies based on
                your business size, competition level, and specific goals. We
                offer affordable SEO packages starting from basic local
                optimization to comprehensive enterprise solutions. Our
                transparent pricing includes no hidden fees, and we provide
                customized quotes based on your specific needs. We believe in
                delivering exceptional value, and many of our clients see a
                positive ROI within the first year of their SEO investment.
              </p>
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
      <section className="map-cta">
        <Container>
          <Row>
            <Col lg="12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.712155785956!2d-79.21034682429627!3d43.152573384666596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3507111975161%3A0x18a1198be6280a70!2s%F0%9F%9A%80%20Infused%20Agency%20%7C%20Niagara%20Web%20Design%20%26%20SEO%20Company!5e0!3m2!1sen!2sca!4v1725932520162!5m2!1sen!2sca"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="infused agency"
              ></iframe>
              <p>
                <a
                  href="https://maps.google.com/maps?ll=43.15257,-79.207772&z=15&t=m&hl=en&gl=CA&mapclient=embed&cid=1774727816813218416"
                  target="_blank"
                >
                  73 Alexandra Blvd, St. Catharines, ON L2P 1K2
                </a>
              </p>
            </Col>
          </Row>
        </Container>
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
