import React from "react";
import Nav from "../../components/Nav/nav";
import Hero from "../../components/Home/Hero/hero";
import Fade from "react-reveal/Fade";
import WhatWeDo from "../../components/Home/WhatWeDo/whatWeDo";
import Clients from "../../components/Home/Clients/clients";
import FAQ from "../../components/Home/FAQ/faq";
import About from "../../components/Home/About/about";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";

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

import ClientLogos from "../../components/Home/ClientLogos/clientLogos";

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
      opens: "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
      closes: "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: {
        "@type": "DayOfWeek",
        name: "Tuesday",
      },
      opens: "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
      closes: "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: {
        "@type": "DayOfWeek",
        name: "Wednesday",
      },
      opens: "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
      closes: "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: {
        "@type": "DayOfWeek",
        name: "Thursday",
      },
      opens: "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
      closes: "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: {
        "@type": "DayOfWeek",
        name: "Friday",
      },
      opens: "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
      closes: "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: {
        "@type": "DayOfWeek",
        name: "Saturday",
      },
      closes: "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: {
        "@type": "DayOfWeek",
        name: "Sunday",
      },
      closes: "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
    },
  ],
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Best Niagara Web Design Company | Infused Agency</title>
        <meta
          name="description"
          content="Niagara's Best Web Design Company. We design and build affordable and effective websites for local Niagara & St. Catharines businesses."
        />
        <meta name="google-site-verification" content="VK8okfPDhG2ziQHXaOAh2Nerc_pVe6vR9pcCp1WtSW8" />
        <link rel="canonical" href="https://infused.agency" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Nav />
      <Hero
        title="Niagara Web Design Company"
        titleTwo="We build websites that help grow your business."
        subTitle="Infused Agency is a top Niagara web design agency hand-crafting beautiful website design since 2013."
      />
      <ClientLogos
        title="Featured Niagara Web Design Clients"
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
                Niagara's leading web design company. We design and build affordable and effective websites for local
                Niagara & St. Catharines businesses.
                <br />
                <br />
                Over the years with our Niagara web design services, we've helped countless local business in Niagara,
                St. Catharines and beyond with crafting user-friendly, hand-coded and content management system websites
                that actually help bring in new revenue and grow their businesses. Alongside our Niagara web designers,
                our SEO specialists also offer seach engine optimization services that ensure your website is easily
                discoverable by potential clients within Google Maps and Google Search.
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
        </section>
      </Fade>
      <section className="home-services">
        <div className="container">
          <div className="row pd-btm-80">
            <div className="col-lg-12 text-center">
              <h2>Our Web Design &amp; Marketing Services</h2>
              <p className="serv-intro">
                We design <Link href="/web-design">mobile-friendly websites</Link> that help grow your business. From
                our initial discovery meeting to post-launch support, we're always here to help.
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
                <h2>Web Design &amp; Development</h2>
                <p>We create websites to help attract more customers.</p>
                <Link href="/web-design">Hand-Coded Websites</Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <Image className="img-fluid" src={wpImg} alt="niagara web design company" />
                <h2>WordPress Development</h2>
                <p>Update your website without the need of a developer.</p>
                <Link href="/wordpress-developer-niagara/">WordPress Websites</Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <Image className="img-fluid" src={seoImg} alt="best web designer niagara" />
                <h2>SEO</h2>
                <p>We help rank your website on the first page of Google.</p>
                <Link href="/seo-niagara/">SEO Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-feat">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center pd-top-120 pd-btm-80">
                <Fade>
                  <h2>Featured Project</h2>
                  <p id="sub">
                    Take a look and see the huge difference we've made to our client's online existences, with our
                    Niagara web design services.
                  </p>
                  <br />
                  <Image className="img-fluid" src={featureImg} alt="web design niagara" />
                  <br />
                  <p className="text-center">
                    <strong>
                      Latest Launch -{" "}
                      <a target="_blank" href="https://viscaelectric.ca">
                        Visca Electric
                      </a>
                    </strong>
                  </p>
                  <em>
                    "Working with Infused Agency was a pleasure. They were extremely responsive and informative from
                    start to finish. They are creative, efficient, and very knowledgeable in their field."
                  </em>
                  <Link className="d-block text-center pd-top-40" href="/work">
                    <button>View More Work</button>
                  </Link>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatWeDo
        title="Web Design Services in Niagara"
        subTitle={[
          "As a small business ourselves, we understand that your small business cannot fork out upfront tens of thousands of dollars for a ",
          <Link href="/services">website</Link>,
          ". That's why we offer local and affordable ",
          <Link href="/work">website design</Link>,
          " solutions to fit your small business budget. Our websites are secure and modern, which helps bring in more local leads near you and revenue through your new website.",
        ]}
        boxOneTitle="Responsive"
        boxOneDesc="Your website will respond and adapt to any device - phone, tablet, desktop computer, you name it."
        boxOneImgAlt="web design"
        boxTwoTitle="Optimized"
        boxTwoDesc="Every website is hand-coded and optimized, which leads to much better security and website performance."
        boxTwoImgAlt="Optimized"
        boxThreeTitle="Secure"
        boxThreeDesc="Our websites are secure. You can sleep well at night knowing it won't be compromised."
        boxThreeImgAlt="Optimized"
        whatTitle="What Makes A Good Website?"
        whatText={[
          "Does your current ",
          <Link href="/services">website</Link>,
          " not bring in new leads? Sometimes website problems are obvious like when a website is not mobile-friendly or if a website doesn't have a modern design. Other times, a closer inspection into your website's practices are required in order to identify issues. Most issues relating to any website are that it doesn't rank on the first page of Google, which means it's SEO isn't up to par. A website's message that doesn't align with your customers, or a website that doesn't convert users into paying customers.",
        ]}
        servicesTitle="Why Is Hiring a Good Web Development Company Important?"
        servicesText={[
          "Your website acts as your brand's central hub on the internet. The fact that your website is the first stop to any new customers is absolutely vital to your business, in terms of gaining new revenue from your business. This means that you need the best local web development company to deliver great website results to your business. Infused Agency makes sure that we do a custom-tailored website job right from the start, to ensure your website is a success and is optimized.",
        ]}
        whatKindTitle="What Type of Services Do You Need?"
        whatKindText={[
          "Whether you want to update the look of your website or need to manage your current website, we can do it all. We strive to create a quality website that helps bring in new revenue to your business. You will have a highly professional and skilled web developer who can answer any website-related questions you may have when it comes to your new website. For the best local web development services, call on our trusted professionals. We're here to assess your current website and provide our own website solutions to help your business grow.",
        ]}
      />

      <Clients title="Our happy clients" />
      <FAQ />
      <About
        city="Niagara"
        intro={[
          "The Regional Municipality of ",
          <a href="https://www.niagararegion.ca/">Niagara</a>,
          " in Southern Ontario, Canada, lies on the west side of the Niagara River, between lakes Ontario and Erie. The Canadian section of Niagara Falls, including the dramatic Horseshoe Falls, is its most famous feature.",
        ]}
        area="1,854"
        population="447,888"
        topSights={[
          <a href="https://www.niagaraparks.com/visit-niagara-parks/plan-your-visit/niagara-falls-geology-facts-figures/">
            Niagara Falls
          </a>,
          ", ",
          <a href="https://www.niagaraparks.com/visit/attractions/journey-behind-the-falls/">
            Journey Behind The Falls
          </a>,
          ", ",
          <a href="https://www.skylon.com/">Skylon Tower</a>,
        ]}
        qOne="What is Niagara in Canada?"
        qOneAns="Niagara Falls is a city in Ontario. It's near the west bank of the Niagara River in the Golden Horseshoe region of Southern Ontario."
        qTwo="What is Niagara known for?"
        qTwoAns="Niagara is known for having one of the most famous waterfalls in the entire world. It's been a popular tourist attraction for over 200 years, and it's also a major source of electric power for the surrounding region."
        qThree="Is Niagara dangerous?"
        qThreeAns="Even though Niagara has the falls and it's beautiful, Niagara itself actually is not a very safe place. 91% of cities are safer than Niagara, but 9% of cities are more dangerous than the region."
        qFour="What is the best time of year to go to Niagara?"
        qFourAns="The best time to visit Niagara FAlls is between the months of June and August. Summer is the best time to go because the mist coming off of Niagara falls can make the area feel much cooler."
        mapURL="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d746182.1554938729!2d-79.90704906963097!3d43.06721961311654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d34c9ec993deb7%3A0xef7f46930d192396!2sRegional%20Municipality%20of%20Niagara%2C%20ON!5e0!3m2!1sen!2sca!4v1628642324816!5m2!1sen!2sca"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
