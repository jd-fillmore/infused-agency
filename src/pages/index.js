import React from "react";
import Head from "next/head";
import Nav from "../../components/Nav/nav";
import Hero from "../../components/Home/Hero/hero";
import Fade from "react-reveal/Fade";
import WhatWeDo from "../../components/Home/WhatWeDo/whatWeDo";
import Clients from "../../components/Home/Clients/clients";
import FAQ from "../../components/Home/FAQ/faq";
import About from "../../components/Home/About/about";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";
import Button from "../../components/Button/button";

import { Helmet } from "react-helmet";
import Link from "next/link";
import Image from "next/image";

import webImg from "../../src/img/responsive.svg";
import seoImg from "../../src/img/seoo.svg";
import wpImg from "../../src/img/wordpress.png";
import clientLmc from "../../src/img/client-lmc.png";
import clientKd from "../../src/img/client-kd.png";
import clientTr from "../../src/img/client-tr.png";
import clientGgs from "../../src/img/client-ggs.png";
import clientVisca from "../../src/img/visca-electric.png";
import clientPrem from "../../src/img/prem-delivery.png";
import clientWind from "../../src/img/windrose.png";
import clientJerry from "../../src/img/jerry.png";
import introImg from "../../src/img/niagara-web-design.webp";
import featureImg from "../../src/img/visca.webp";
import treeImg from "../../src/img/tree-reports.png";
import kdImg from "../../src/img/niagara-web-design.png";
import cassImg from "../../src/img/featured-seo.png";
import google from "../../src/img/infused-reviews.jpg";
import viscaTestimonial from "../../src/img/visca-niagara-web-design-testimonial.png";
import check from "../../src/img/check.png";

import ClientLogos from "../../components/Home/ClientLogos/clientLogos";

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
      opens:
        "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
      closes:
        "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: {
        "@type": "DayOfWeek",
        name: "Tuesday",
      },
      opens:
        "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
      closes:
        "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: {
        "@type": "DayOfWeek",
        name: "Wednesday",
      },
      opens:
        "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
      closes:
        "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: {
        "@type": "DayOfWeek",
        name: "Thursday",
      },
      opens:
        "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
      closes:
        "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: {
        "@type": "DayOfWeek",
        name: "Friday",
      },
      opens:
        "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
      closes:
        "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: {
        "@type": "DayOfWeek",
        name: "Saturday",
      },
      closes:
        "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: {
        "@type": "DayOfWeek",
        name: "Sunday",
      },
      closes:
        "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
    },
  ],
};

const Home = () => {
  return (
    <>
      <Head>
        <title>Best Niagara Web Design Company | Infused Agency</title>
        <meta
          name="description"
          content="An award-winning boutique Niagara Web Design Company in creating hand-made web design, custom WordPress development and SEO since 2013."
        />
        <meta
          name="google-site-verification"
          content="VK8okfPDhG2ziQHXaOAh2Nerc_pVe6vR9pcCp1WtSW8"
        />
        <link rel="canonical" href="https://infused.agency" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>
      <Nav />
      <Hero />
      <ClientLogos
        title={[<span>Featured</span>, "Niagara Web Design Clients"]}
        logoOne={clientLmc}
        logoOneAlt="lincoln medical centre - web design"
        logoTwo={clientKd}
        logoTwoAlt="kd flowers - web design"
        logoThree={clientTr}
        logoThreeAlt="tree reports - web design"
        logoFour={clientGgs}
        logoFourAlt="ggs landscaping niagara - web design"
        logoFive={clientVisca}
        logoFiveAlt="visca electric - web design"
        logoSix={clientPrem}
        logoSixAlt="premium delivery - web design"
        logoSeven={clientWind}
        logoSevenAlt="windrose health centre - web design"
        logoEight={clientJerry}
        logoEightAlt="jerry's insulating - web design"
      />
      <Fade>
        <div className="container">
          <div className="row pd-top-120 pd-btm-120">
            <div className="col-lg-7">
              <h2>
                Niagara's Top <span>Website Designers</span>
              </h2>
              <p>
                Niagara's leading web design company. We design and build
                affordable and effective websites for local Niagara & St.
                Catharines businesses.
                <br />
                <br />
                Over the years with our Niagara web design services, we've
                helped countless local business in Niagara, St. Catharines and
                beyond with crafting user-friendly, hand-coded and content
                management system websites that actually help bring in new
                revenue and grow their businesses. Alongside our Niagara web
                designers, our SEO specialists also offer seach engine
                optimization services that ensure your website is easily
                discoverable by potential clients within Google Maps and Google
                Search.
                <br />
                <br />
                We help local businesses by invigorating life into their online
                presence, get their websites to work <em>for them</em> instead
                of <em>against them</em> and we can do the same for you.
              </p>
              <Image
                className="img-fluid"
                src={google}
                alt="niagara web design google reviews"
              />
            </div>
            <div className="col-lg-5">
              <Image
                className="img-fluid"
                src={introImg}
                alt="niagara web design"
              />
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <section className="home-client-results">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2>
                  Our Niagara Web Design Clients <span>Get Results</span>
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
                    alt="web design niagara"
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
              <div className="col-lg-4">
                <div className="card">
                  <Image
                    className="img-fluid"
                    src={kdImg}
                    alt="web designers niagara"
                  />
                  <h3>KD Flowers</h3>
                  <p className="testimonial">
                    "My business has grown so much!"
                  </p>
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
              <div className="col-lg-4">
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
          </div>
          <div className="container">
            <div className="row pd-top-40">
              <div className="col-lg-12 text-center">
                <h2>
                  Take <span>Their Word</span> For It
                </h2>
              </div>
            </div>
            <div className="row text-center pd-top-40 pd-btm-120">
              <div className="col-lg-4">
                <Image
                  className="img-fluid"
                  src={viscaTestimonial}
                  alt="visca electric - web design niagara testimonial"
                />
                <h3>Sandro Visca</h3>
                <p>Owner - VISCA electric</p>
                <p className="testimonial">
                  "The design and development process was smooth."
                </p>
                <p className="full-testimonial">
                  "Working with Infused Agency was a pleasure. He was extremely
                  responsive and informative from start to finish. Infused
                  Agency is creative, efficient, and very knowledgeable in their
                  field. They helped me and my team create a new website for my
                  business: VISCA electric. Check it out! viscaelectric.ca. The
                  design and development process was smooth and easy. I would
                  absolutely recommend Infused Agency to anyone looking for a
                  new or updated website for their business!"
                </p>
              </div>
              <div className="col-lg-4">
                <Image
                  className="img-fluid"
                  src={clientGgs}
                  alt="ggs landscaping - website design niagara testimonial"
                />
                <h3>Graham Boaretti</h3>
                <p>Owner - GGS Landscaping</p>
                <p className="testimonial">"They did a fantastic job."</p>
                <p className="full-testimonial">
                  "They did a fantastic job on my website. They were easy to
                  work with, always very quick to respond and made designing the
                  page very simple. I would highly recommend Infused Agency for
                  all of your web design and development needs!"
                </p>
              </div>
              <div className="col-lg-4">
                <Image
                  className="img-fluid"
                  src={clientTr}
                  alt="visca electric - web design niagara testimonial"
                />
                <h3>Harry Althorpe</h3>
                <p>Owner - TreeReports</p>
                <p className="testimonial">
                  "Highly organized, thorough and professional."
                </p>
                <p className="full-testimonial">
                  "Fantastic experience from start to end. They are highly
                  organized, thorough and professional. I highly recommend his
                  company and services if you are thinking of building a
                  website."
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fade>
      <Fade>
        <section className="cta home-cta">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-12">
                <h2>
                  Ready to <span>Grow Your Business</span> With Our Niagara Web
                  Design Services?
                </h2>
                <p>Click the button below for a free quote</p>
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
                      class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
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
      </Fade>
      <Fade>
        <section className="home-services">
          <div className="container">
            <div className="row pd-btm-80">
              <div className="col-lg-12 text-center">
                <h2>
                  Niagara Web Design &amp; SEO Services <span>That Work</span>
                </h2>
                <p className="serv-intro">
                  We Provide Custom Web Design &amp; SEO Solutions For Your
                  Unique Business Needs
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            {/* Row One */}
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <Image
                    className="img-fluid"
                    src={webImg}
                    alt="web designer niagara"
                  />
                  <Link href="/web-design">
                    <h2>Web Design &amp; Development</h2>
                  </Link>
                  <p>
                    Your business and online image are reflected in your
                    website. At Infused Agency, our Niagara web design services
                    elevate brands by creating responsive, user friendly
                    websites that excel in turning visitors into customers. Our
                    skilled web designers and website developers deliver
                    top-notch mockups and websites, ensuring that your site
                    aligns perfectly with your brand. With our versatile web
                    development team, we embrace the latest design trends to
                    provide your customers with a smooth browsing experience.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <Image
                    className="img-fluid"
                    src={wpImg}
                    alt="niagara web design company"
                  />
                  <Link href="/wordpress-developer-niagara">
                    <h2>WordPress Development</h2>
                  </Link>
                  <p>
                    Your business and online identity shine through your
                    website, and at Infused Agency, we leverage the unparalleled
                    benefits of WordPress to elevate your brand. Our Niagara web
                    design services specialize in harnessing the power of the
                    content management system WordPress, creating impactful
                    websites that not only reflect your brand essence but also
                    offer exceptional advantages. With WordPress, you'll have
                    the ability to update your website without our help. Our
                    skilled team of web designers and developers ensures that
                    your WordPress site is not just visually appealing but also
                    fully optimized for performance.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <Image
                    className="img-fluid"
                    src={seoImg}
                    alt="best web designer niagara"
                  />
                  <Link href="/niagara-seo-company">
                    <h2>SEO</h2>
                  </Link>
                  <p>
                    The #1 goal of SEO is to place your website at the top of
                    the search engine results page (SERP). Infused Agency's
                    Niagara web design company is skilled in search engine
                    optimization well-versed in creating SEO strategies. We
                    understand what it takes to move the needle, placing your
                    website to the top of the search results for relevant
                    keyword. We start with a full SEO audit, extensive custom
                    keyword research and implement proper SEO strategies from
                    there.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
      <Fade>
        <section className="why-infused">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="text-center">
                  Why <span>Choose Us</span> As Your Niagara Web Design Company
                </h2>
                <p className="text-center">
                  We Grow Businesses Through Lead-Generating Website Designs
                  &amp; SEO Strategies
                </p>
                <p className="pd-top-40">
                  Infused Agency is a full-service web design company in St
                  Catharines, Niagara Region. We specialize in creating website
                  designs that are actually effective, impacting your business'
                  online credibility and it's ability to generate new customers.
                  Through our services - from web design and devlopment to
                  search engine optimization (SEO), we develop and sustain a
                  variety of businesses every day.
                </p>
                <p>
                  Our web design experts in Niagara have a great track record.
                  We know exactly how to build web designs that are{" "}
                  <em>actually effective</em>, improving your credibility and
                  bringing you in more customers.
                </p>
                <p className="pd-btm-40">
                  Some key reasons why Infused Agency is different from other
                  Niagara web design companies:
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <Image
                  width="50"
                  height="50"
                  className="img-fluid"
                  src={check}
                  alt="performance focused"
                />
                <h4>Proven Track Record</h4>
                <p>
                  Why toss away your hard-earned capital on a website company
                  that doesn't deliver results? When you work with Infused
                  Agency, you're choosing an agency that has a demonstrated
                  history of success. Your company will have a competitive
                  advantage through the websites and search engine optimization
                  work that we do for you. We've helped many local clients grow
                  their revenues, increase conversions and boost profits through
                  the work we've done for them. Our Niagara web design company
                  uses proven methods that help convert users into customers
                  through the websites we build our clients. We've been in the
                  industry since 2013 and stand behind the work we do.
                </p>
              </div>
              <div className="col-lg-4">
                <Image
                  width="50"
                  height="50"
                  className="img-fluid"
                  src={check}
                  alt="proven track record"
                />
                <h4>Web Design Experts</h4>
                <p>
                  There are a <em>lot</em> of web design services in Niagara
                  that provide local businesses with website design solutions.
                  So - what makes us different? The answer is simple. The
                  websites we build are built <em>with care.</em> Most web
                  designers in Niagara tend to use pre-made, drag and drop
                  templates that bloat website code and negatively affect your
                  website's health and page speed. On the other hand, we craft
                  our websites by hand to ensure security, blazing fast speeds,
                  and a custom website design you won't get anywhere else. Not
                  only that, but our websites are built with modern website
                  frameworks - so you know that the product you're getting is
                  more than top-notch.
                </p>
              </div>
              <div className="col-lg-4">
                <Image
                  width="50"
                  height="50"
                  className="img-fluid"
                  src={check}
                  alt="prompt delivery"
                />
                <h4>Prompt Delivery</h4>
                <p>
                  We understand that your Niagara business doesn't want to waste
                  time - we get it. That's why our Niagara web design agency
                  makes sure that the website we build for you, is done promptly
                  and effectively. From our initial discovery call, to sending
                  over the web design, to linking you to final website design
                  built and finally the website's launch, we make sure that our
                  communication between us and you is top priority. We will
                  answer any questions that you may have along the way, and we
                  will ensure that you will have the best website that your
                  business needs at the finish line. Making sure your website is
                  delivered on time is our main goal.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fade>
      <Fade>
        <section className="cta home-cta">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-12">
                <h2>
                  Ready to <span>Expand Your Business</span> With Our Niagara
                  Web Design Agency?
                </h2>
                <p>Click the button below for a free quote</p>
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
                      class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
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
      </Fade>
      <Footer />
    </>
  );
};

export default Home;
