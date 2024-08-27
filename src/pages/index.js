import React from "react";
import { getLatestPosts } from "../lib/posts";
import { Container, Row, Col } from "reactstrap";
import { format } from "date-fns";
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
import tech from "../../src/img/web-design-technologies.webp";
import process from "../../src/img/web-design-process.webp";

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
          Niagara Web Design | Website Design St. Catharines - Infused Agency
        </title>
        <meta
          name="description"
          content="Award-winning Niagara web design in St. Catharines. We create custom, lead-generating websites for companies across Niagara. Get your free quote today!"
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
                Our <span>Strategic</span> Niagara Web Design Business Solutions
              </h2>
              <p>
                Our lead-generating web design, optimiziation and SEO solutions
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
                <Image src={leadGenImg} alt="website design niagara" />
                <h2>Lead-Generating Web Design</h2>
                <p>
                  Is your website not bringing you customers? We create
                  lead-generating websites, for the purpose of converting
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
                  Is your website not bringing you leads? Our team will fix
                  conversion barriers, optimizing your website to convert more.
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
                  Are your customers not finding your website in Google? Lets
                  help get your website found, and drive more leads to you.
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

      <section className="home-client-results">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>
                Our Local Niagara Clients <span>Get Results</span>
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
      <section class="home-process">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>
                Our Niagara <span>Web Design</span> Process &amp; Technologies
              </h2>
              <p>
                We blend advanced tech with proven methods to build websites
                that grow your business.
              </p>
            </div>
          </div>
          <Row className="pd-top-40">
            <Col lg="6">
              <p>
                At Infused Agency, we leverage cutting-edge technologies to
                deliver high-performance websites tailored to your business
                needs. For static sites, we utilize Next.js, a powerful React
                framework that ensures lightning-fast load times and excellent
                SEO performance. For content-rich, dynamic websites, we harness
                the flexibility of WordPress, the world's most popular content
                management system.
              </p>
            </Col>
            <Col lg="6">
              <div className="card">
                <Image
                  className="img-fluid"
                  src={tech}
                  alt="web design technologies"
                />
              </div>
            </Col>
          </Row>
          <Row className="pd-top-40 align-items-center">
            <Col lg="6">
              <div className="card">
                <Image
                  className="img-fluid"
                  src={process}
                  alt="web design process"
                />
              </div>
            </Col>
            <Col lg="6">
              <p>
                Our process begins with a thorough consultation to understand
                your goals, followed by meticulous planning and design. We then
                move to development, where our expert team brings your vision to
                life using these advanced technologies. Throughout the process,
                we prioritize responsive design, ensuring your site looks and
                functions flawlessly across all devices. Before launch, we
                conduct rigorous testing and optimization to guarantee a smooth
                user experience and strong search engine performance.
              </p>
            </Col>
          </Row>
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

      <section className="home-faq">
        <Container>
          <Row className="text-center pd-btm-40">
            <Col lg="12">
              <h2>
                <span>Frequently Asked</span> Web Design &amp; SEO Questions{" "}
              </h2>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <div className="card">
                <h3>
                  Why does my Niagara business need a professionally designed
                  website?
                </h3>
                <p>
                  In today's digital age, your website is often the first point
                  of contact between your business and potential customers. A
                  professionally designed website not only creates a strong
                  first impression but also helps convert visitors into
                  customers. For Niagara businesses, this means standing out in
                  a competitive local market and effectively reaching both
                  residents and tourists.
                </p>

                <h3>
                  How long does it take to design and launch a new website?
                </h3>
                <p>
                  The timeline can vary depending on the complexity of your
                  project. Typically, for Niagara businesses, we can design and
                  launch a new website in 6-8 weeks. This includes our thorough
                  process of consultation, design, development, and testing to
                  ensure your site perfectly represents your brand and meets
                  your business goals.
                </p>

                <h3>Will my website work on mobile devices?</h3>
                <p>
                  Absolutely! All our websites are fully responsive, meaning
                  they adapt seamlessly to all devices - desktops, tablets, and
                  smartphones. This is crucial for Niagara businesses, as many
                  potential customers, especially tourists, often search for
                  local services on their mobile devices.
                </p>
              </div>
            </Col>
            <Col lg="6 d-flex">
              <div className="card">
                <h3>How can SEO benefit my Niagara-based business?</h3>
                <p>
                  SEO can significantly increase your visibility in local search
                  results. This means when potential customers in Niagara search
                  for products or services you offer, your business is more
                  likely to appear at the top of the results. This increased
                  visibility can lead to more website traffic, phone calls, and
                  ultimately, more customers for your local business.
                </p>

                <h3>How long does it take to see results from SEO?</h3>
                <p>
                  SEO is a long-term strategy. While you may start seeing some
                  improvements within a few months, significant results
                  typically become apparent after 4-6 months. For Niagara
                  businesses, this means steadily increasing your online
                  presence and gradually outranking local competitors.
                </p>

                <h3>Do you offer local SEO services for Niagara businesses?</h3>
                <p>
                  Yes, we specialize in{" "}
                  <Link href="/niagara-seo-company">
                    local SEO for Niagara businesses
                  </Link>
                  . This includes optimizing your Google My Business listing,
                  creating local content, and building local citations. These
                  strategies help your business appear in local search results,
                  Google Maps, and the local 3-pack, which is crucial for
                  attracting nearby customers.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-niagara-info">
        <Container>
          <Row>
            <Col lg="12">
              <h2>Web Design in the Niagara Region</h2>

              <p>
                At Infused Agency, we're proud to offer top-notch{" "}
                <Link href="/web-design">web design services</Link> and{" "}
                <Link href="/niagara-seo-company">SEO services</Link> to
                businesses throughout the Niagara Region. Our deep understanding
                of the local market helps us create websites that resonate with
                the diverse audience in this vibrant area.
              </p>

              <h2>About the Niagara Region</h2>

              <p>
                The Niagara Region, home to our web design agency, is a dynamic
                area in Southern Ontario known for its natural beauty, thriving
                businesses, and unique blend of urban and rural communities.
              </p>

              <h3>Key Facts about Niagara Region:</h3>
              <ul>
                <li>
                  <strong>Population:</strong> Approximately 480,000
                </li>
                <li>
                  <strong>Major Cities:</strong> St. Catharines, Niagara Falls,
                  Welland
                </li>
                <li>
                  <strong>Key Industries:</strong> Tourism, Agriculture,
                  Manufacturing, Technology
                </li>
              </ul>

              <h3>Why Web Design Matters in Niagara</h3>
              <p>
                In a region that attracts millions of visitors annually and
                hosts a diverse range of businesses, having a strong online
                presence is crucial. Our web design services help Niagara
                businesses:
              </p>
              <ul>
                <li>Stand out in a competitive market</li>
                <li>Attract both local customers and tourists</li>
                <li>
                  Showcase the unique aspects of their Niagara-based business
                </li>
                <li>Compete on a global scale while maintaining local charm</li>
              </ul>

              <h3>Web Design for Niagara's Key Sectors</h3>
              <p>
                We specialize in creating websites for various industries
                prominent in Niagara:
              </p>
              <ul>
                <li>
                  <strong>Tourism and Hospitality:</strong> Engaging sites for
                  hotels, restaurants, and attractions
                </li>
                <li>
                  <strong>Wineries and Agriculture:</strong> Showcasing
                  Niagara's renowned wines and produce
                </li>
                <li>
                  <strong>Manufacturing:</strong> Professional sites for
                  Niagara's diverse manufacturing sector
                </li>
                <li>
                  <strong>Education:</strong> User-friendly sites for schools
                  and educational programs
                </li>
                <li>
                  <strong>Small Businesses:</strong> Affordable, high-quality
                  sites for local entrepreneurs
                </li>
              </ul>

              <h3>Local SEO for Niagara Businesses</h3>
              <p>
                Our web design services include local SEO strategies to help
                your business rank higher in local search results. We understand
                the importance of being found by both residents and visitors in
                key areas like:
              </p>
              <ul>
                <li>
                  <a target="_blank" href="https://www.stcatharines.ca/">
                    St. Catharines
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://niagarafalls.ca/">
                    Niagara Falls
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.welland.ca/">
                    Welland
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.niagaraonthelake.com/">
                    Niagara-on-the-Lake
                  </a>
                </li>
                <li>And other Niagara communities</li>
              </ul>

              <h3>Why Choose a Local Niagara Web Design Agency?</h3>
              <p>
                Choosing a local web design agency like Infused Agency offers
                several advantages:
              </p>
              <ul>
                <li>In-depth understanding of the local market and audience</li>
                <li>Ability to meet face-to-face for personalized service</li>
                <li>Support for the local economy</li>
                <li>Familiarity with local business networks and resources</li>
              </ul>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d746188.552481925!2d-80.00600478031573!3d43.06669410655857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d34c9ec993deb7%3A0xef7f46930d192396!2sRegional%20Municipality%20of%20Niagara%2C%20ON!5e0!3m2!1sen!2sca!4v1724095482601!5m2!1sen!2sca"
                width="100%"
                height="600"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
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
