import React from "react";
import Head from "next/head";
import Nav from "../../components/Nav/nav";
import Hero from "../../components/Home/Hero/hero";
import Fade from "react-reveal/Fade";
import Footer from "../../components/Footer/footer";
import Button from "../../components/Button/button";

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
import treeImg from "../../src/img/tree-reports.png";
import kdImg from "../../src/img/niagara-web-design.png";
import cassImg from "../../src/img/featured-seo.png";
import google from "../../src/img/infused-reviews.jpg";
import viscaTestimonial from "../../src/img/visca-niagara-web-design-testimonial.png";
import check from "../../src/img/check.png";

import ClientLogos from "../../components/Home/ClientLogos/clientLogos";

const addJsonLd = () => {
  const schema = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: "Infused Agency",
    image: "https://infused.agency/static/niagara-web-design-2f828e960c0871169524dbd5886ab097.png",
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
        <title>Best Niagara Web Design Company | Infused Agency</title>
        <meta
          name="description"
          content="An award-winning boutique Niagara Web Design Company in creating hand-made web design, custom WordPress development and SEO since 2013."
        />
        <meta name="google-site-verification" content="VK8okfPDhG2ziQHXaOAh2Nerc_pVe6vR9pcCp1WtSW8" />
        <link rel="canonical" href="https://infused.agency" />
        <script type="application/ld+json" dangerouslySetInnerHTML={addJsonLd()} key="item-jsonld" />
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
        <section className="home-top-web">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <h2>
                  Niagara's Top <span>Website Designers</span>
                </h2>
                <p>
                  Niagara's leading web design company. We design and build affordable and effective websites for local
                  Niagara & St. Catharines businesses.
                  <br />
                  <br />
                  Over the years with our Niagara web design services, we've helped countless local business in Niagara,
                  St. Catharines and beyond with crafting user-friendly, hand-coded and content management system
                  websites that actually help bring in new revenue and grow their businesses. Alongside our Niagara web
                  designers, our SEO specialists also offer seach engine optimization services that ensure your website
                  is easily discoverable by potential clients within Google Maps and Google Search.
                  <br />
                  <br />
                  We help local businesses by invigorating life into their online presence, get their websites to work{" "}
                  <em>for them</em> instead of <em>against them</em> and we can do the same for you.
                </p>
                <Image className="img-fluid" src={google} alt="niagara web design google reviews" />
              </div>
              <div className="col-lg-5">
                <Image className="img-fluid" src={introImg} alt="niagara web design" />
              </div>
            </div>
          </div>
        </section>
      </Fade>
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
                <Image className="img-fluid" src={treeImg} alt="web design niagara" />
                <h3>TreeReports</h3>
                <p className="testimonial">"Fantastic experience from start to end."</p>
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
                <Image className="img-fluid" src={kdImg} alt="web designers niagara" />
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
                <Image className="img-fluid" src={cassImg} alt="website design niagara" />
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
              <p className="testimonial">"The design and development process was smooth."</p>
              <p className="full-testimonial">
                "Working with Infused Agency was a pleasure. He was extremely responsive and informative from start to
                finish. Infused Agency is creative, efficient, and very knowledgeable in their field. They helped me and
                my team create a new website for my business: VISCA electric. Check it out! viscaelectric.ca. The design
                and development process was smooth and easy. I would absolutely recommend Infused Agency to anyone
                looking for a new or updated website for their business!"
              </p>
            </div>
            <div className="col-lg-4">
              <Image className="img-fluid" src={clientGgs} alt="ggs landscaping - website design niagara testimonial" />
              <h3>Graham Boaretti</h3>
              <p>Owner - GGS Landscaping</p>
              <p className="testimonial">"They did a fantastic job."</p>
              <p className="full-testimonial">
                "They did a fantastic job on my website. They were easy to work with, always very quick to respond and
                made designing the page very simple. I would highly recommend Infused Agency for all of your web design
                and development needs!"
              </p>
            </div>
            <div className="col-lg-4">
              <Image className="img-fluid" src={clientTr} alt="visca electric - web design niagara testimonial" />
              <h3>Harry Althorpe</h3>
              <p>Owner - TreeReports</p>
              <p className="testimonial">"Highly organized, thorough and professional."</p>
              <p className="full-testimonial">
                "Fantastic experience from start to end. They are highly organized, thorough and professional. I highly
                recommend his company and services if you are thinking of building a website."
              </p>
            </div>
          </div>
        </div>
      </section>
      <Fade>
        <section className="cta home-cta">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-12">
                <h2>
                  Ready to <span>Grow Your Business</span> With Our Niagara Web Design Services?
                </h2>
                <p>Click the button below for a free quote</p>
                <a href="https://calendly.com/infused-agency/project-discovery/" target="_blank" rel="noreferrer">
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
                  We Provide Custom Web Design &amp; SEO Solutions For Your Unique Business Needs
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            {/* Row One */}
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <Image className="img-fluid" src={webImg} alt="web designer niagara" />
                  <Link href="/web-design">
                    <h2>Web Design &amp; Development</h2>
                  </Link>
                  <p>
                    Your business and online image are reflected in your website. At Infused Agency, our Niagara web
                    design services elevate brands by creating responsive, user friendly websites that excel in turning
                    visitors into customers. Our skilled web designers and website developers deliver top-notch mockups
                    and websites, ensuring that your site aligns perfectly with your brand. With our versatile web
                    development team, we embrace the latest design trends to provide your customers with a smooth
                    browsing experience.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <Image className="img-fluid" src={wpImg} alt="niagara web design company" />
                  <Link href="/wordpress-developer-niagara">
                    <h2>WordPress Development</h2>
                  </Link>
                  <p>
                    Your business and online identity shine through your website, and at Infused Agency, we leverage the
                    unparalleled benefits of WordPress to elevate your brand. Our Niagara web design services specialize
                    in harnessing the power of the content management system WordPress, creating impactful websites that
                    not only reflect your brand essence but also offer exceptional advantages. With WordPress, you'll
                    have the ability to update your website without our help. Our skilled team of web designers and
                    developers ensures that your WordPress site is not just visually appealing but also fully optimized
                    for performance.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <Image className="img-fluid" src={seoImg} alt="best web designer niagara" />
                  <Link href="/niagara-seo-company">
                    <h2>SEO</h2>
                  </Link>
                  <p>
                    The #1 goal of SEO is to place your website at the top of the search engine results page (SERP).
                    Infused Agency's Niagara web design company is skilled in search engine optimization well-versed in
                    creating SEO strategies. We understand what it takes to move the needle, placing your website to the
                    top of the search results for relevant keyword. We start with a full SEO audit, extensive custom
                    keyword research and implement proper SEO strategies from there.
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
                  We Grow Businesses Through Lead-Generating Website Designs &amp; SEO Strategies
                </p>
                <p className="pd-top-40">
                  Infused Agency is a full-service web design company in St Catharines, Niagara Region. We specialize in
                  creating website designs that are actually effective, impacting your business' online credibility and
                  it's ability to generate new customers. Through our services - from web design and devlopment to
                  search engine optimization (SEO), we develop and sustain a variety of businesses every day.
                </p>
                <p>
                  Our web design experts in Niagara have a great track record. We know exactly how to build web designs
                  that are <em>actually effective</em>, improving your credibility and bringing you in more customers.
                </p>
                <p className="pd-btm-40">
                  Some key reasons why Infused Agency is different from other Niagara web design companies:
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <Image width="50" height="50" className="img-fluid" src={check} alt="performance focused" />
                <h3>Proven Track Record</h3>
                <p>
                  Why toss away your hard-earned capital on a website company that doesn't deliver results? When you
                  work with Infused Agency, you're choosing an agency that has a demonstrated history of success. Your
                  company will have a competitive advantage through the websites and search engine optimization work
                  that we do for you. We've helped many local clients grow their revenues, increase conversions and
                  boost profits through the work we've done for them. Our Niagara web design company uses proven methods
                  that help convert users into customers through the websites we build our clients. We've been in the
                  industry since 2013 and stand behind the work we do.
                </p>
              </div>
              <div className="col-lg-4">
                <Image width="50" height="50" className="img-fluid" src={check} alt="proven track record" />
                <h3>Web Design Experts</h3>
                <p>
                  There are a <em>lot</em> of web design services in Niagara that provide local businesses with website
                  design solutions. So - what makes us different? The answer is simple. The websites we build are built{" "}
                  <em>with care.</em> Most web designers in Niagara tend to use pre-made, drag and drop templates that
                  bloat website code and negatively affect your website's health and page speed. On the other hand, we
                  craft our websites by hand to ensure security, blazing fast speeds, and a custom website design you
                  won't get anywhere else. Not only that, but our websites are built with modern website frameworks - so
                  you know that the product you're getting is more than top-notch.
                </p>
              </div>
              <div className="col-lg-4">
                <Image width="50" height="50" className="img-fluid" src={check} alt="prompt delivery" />
                <h3>Prompt Delivery</h3>
                <p>
                  We understand that your Niagara business doesn't want to waste time - we get it. That's why our
                  Niagara web design agency makes sure that the website we build for you, is done promptly and
                  effectively. From our initial discovery call, to sending over the web design, to linking you to final
                  website design built and finally the website's launch, we make sure that our communication between us
                  and you is top priority. We will answer any questions that you may have along the way, and we will
                  ensure that you will have the best website that your business needs at the finish line. Making sure
                  your website is delivered on time is our main goal.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fade>
      <section className="home-faq">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>
                Niagara Website Design Services <span>Common Questions</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3>How much does a new website cost?</h3>
              <p>
                There's no single answer to this question. It entirely depends on the needs of the project. Every web
                design and development project is unique in it's design, purpose, functionality and more. However, visit
                our <Link href="/pricing">pricing page</Link> for a general ballpark figure of what you're looking for.
                In our free consultation sessions we'll ask lots of questions, assess your needs and then give you a
                quote based on our findings.
              </p>
              <h3>How long will it take to get a new website?</h3>
              <p>
                Typically between 6 and 8 weeks. Keep in mind this completely depends on the client, though. For example
                - if we need content or approval from you and there are potential delays, this could delay the launch.
                However if you send over content / approval for things along the way quickly, the more quick your
                website will launch.
              </p>
              <h3>Do you only create WordPress websites?</h3>
              <p>
                No! WordPress is great for a lot of use cases. You can update your website on your own without needing a
                developer (we teach you). There's a rich ecosystem of plugins we utilize to speed up development.
                However, sometimes a hand-coded website far outperforms a WordPress site depending on the situation,
                especially when you don't desire to update the website yourself.
              </p>
              <h3>Do I have to be local to work with you?</h3>
              <p>Nope! We have clients locally but have also served clients all across the world.</p>
              <h3>Will I be able to update the website when it's finished?</h3>
              <p>
                If it's a WordPress website, yes. If it's not, our team of developers can update the website for you.
              </p>
              <h3>Can you maintain my website for me?</h3>
              <p>
                Absolutely. We understand that business owners are busy a lot of the time. We can take that stress off
                of you by updating your website for you.
              </p>
            </div>
            <div className="col-lg-6">
              <h3>Will my website be mobile-friendly?</h3>
              <p>
                Of course. Responsive design, aka mobile websites, are a big part of today's society. We make sure to
                adhere to that so your customers have a pleasant experience on your website.
              </p>
              <h3>When do I pay?</h3>
              <p>
                Milestone payments are split throughout the project. Iniital deposit upfront, web design stage, web
                development stage and at the end of the project. We accept e-transfer, cash or credit card payments.
              </p>
              <h3>How much input do I have?</h3>
              <p>
                Lots! We work with our clients very closely. We make sure that based on our conversations, there are no
                surprises when it comes to how your website looks or functions.
              </p>
              <h3>Do I provide the content for my website?</h3>
              <p>
                Yes. You're the expert of your business so typically it's you that provides it. If you don't want to or
                can't, we will happily write the content at an additional cost.
              </p>
              <h3>What about website hosting?</h3>
              <p>
                We have a list of favourites hosting providers that we use. During our free consultation we can talk
                about these providers.
              </p>
              <h3>What if I need help after my site is live?</h3>
              <p>We're only an email away! Contact us any time and we can help you with whatever you need.</p>
            </div>
          </div>
        </div>
      </section>
      <Fade>
        <section className="cta home-cta">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-12">
                <h2>
                  Ready to <span>Expand Your Business</span> With Our Niagara Web Design Agency?
                </h2>
                <p>Click the button below for a free quote</p>
                <a href="https://calendly.com/infused-agency/project-discovery/" target="_blank" rel="noreferrer">
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
