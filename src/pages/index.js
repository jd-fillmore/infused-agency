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
import kdImg from "../../src/img/kd-flowers.webp";
import cassImg from "../../src/img/featured-seo.png";
import google from "../../src/img/web-design-niagara.webp";
import viscaTestimonial from "../../src/img/visca-niagara-web-design-testimonial.png";
import check from "../../src/img/check.png";
import visca from "../../src/img/web-design-st-catharines-visca.webp";

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
        <title>Niagara Web Design | St. Catharines Web Development Agency</title>
        <meta
          name="description"
          content="Leading Niagara Web Design & Website Developer company located in St. Catharines. Specializing in web design &amp; website development. Get your free quote now!"
        />
        <meta
          name="keywords"
          content="Niagara Web Design, Web Design St. Catharines, Web Designer Niagara, Web Designer St. Catharines, Website Developer Niagara, Website Developer St. Catharines"
        />
        <meta name="google-site-verification" content="VK8okfPDhG2ziQHXaOAh2Nerc_pVe6vR9pcCp1WtSW8" />
        <link rel="canonical" href="https://infused.agency" />
        <script type="application/ld+json" dangerouslySetInnerHTML={addJsonLd()} key="item-jsonld" />
      </Head>
      <Nav />
      <Hero />
      <Fade>
        <section className="home-top-web">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <h2>
                  Leading Niagara web design company <span>businesses trust.</span>
                </h2>
                <p>
                  Hi there! Our Niagara web design agency is really good at making websites. We create websites that are
                  good for local businesses and don't cost too much.
                  <br />
                  <br />
                  We've been helping lots of nearby businesses in the Niagara region like St. Catharines, Niagara Falls
                  and other areas with our website-making skills. Our websites are easy to use and help businesses grow
                  and make more money. We also have experts who make sure your website can be easily found on Google.
                  <br />
                  <br />
                  We love making websites and helping local businesses do well online. We can do that for you too!
                </p>
                <Image className="img-fluid" src={google} alt="web design niagara" />
              </div>
              <div className="col-lg-5">
                <Image className="img-fluid" src={visca} alt="web design st catharines" />
              </div>
            </div>
          </div>
        </section>
      </Fade>
      <ClientLogos
        title={[<span>Featured</span>, "Niagara Web Design Clients"]}
        logoOne={clientLmc}
        logoOneAlt="website designers st catharines"
        logoTwo={clientKd}
        logoTwoAlt="website designers niagara"
        logoThree={clientTr}
        logoThreeAlt="niagara website design"
        logoFour={clientGgs}
        logoFourAlt="st catharines website design"
        logoFive={clientVisca}
        logoFiveAlt="web developers st catharines"
        logoSix={clientPrem}
        logoSixAlt="web developers niagara"
        logoSeven={clientWind}
        logoSevenAlt="st catharines website developers"
        logoEight={clientJerry}
        logoEightAlt="niagara website developers"
      />
      <Fade>
        <section className="home-services">
          <div className="container">
            <div className="row pd-btm-80">
              <div className="col-lg-12 text-center">
                <h2>
                  <span>Web Design Services</span> We Offer To Niagara Businesses
                </h2>
                <p className="serv-intro">We make great websites and help people find them on the internet.</p>
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
                    Your business and how it looks online are shown on your website. At Infused Agency, we help make
                    brands stand out with our special Niagara web design services. We create websites that are easy for
                    people to use and make them want to become customers. Our talented designers and developers create
                    great designs and websites that match your brand perfectly. Our team keeps up with the latest styles
                    to make sure your customers have a really nice time when they visit your site.
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
                    Your business and how it looks online are all seen on your website. At Infused Agency, we use
                    something called WordPress to make your brand really special. Our web design services focus on using
                    WordPress, which is like a super tool for making websites. We create awesome websites that show off
                    what your brand is all about and give you some really cool benefits. With WordPress, you can even
                    change your website by yourself, you don't need our help! Our talented team of designers and
                    developers makes sure your WordPress website looks great and works really well.
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
                    The main aim of SEO is to put your website at the very top when people search on the internet. At
                    Infused Agency, our web design company is really good at this search engine stuff and knows how to
                    make your website show up first. We have special skills in making plans for SEO. We know how to make
                    sure your website comes up first when people search for certain words. We begin by checking
                    everything about SEO, doing special research for the best words, and then using smart plans to make
                    your website the first one people see.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
      <Fade>
        <section className="feat-articles">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2>
                  <span>Featured Articles</span> On Web Design & More
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <Link href="/website-speed-seo-impact">
                    <h3>How much does website speed affect SEO?</h3>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card">
                  <Link href="/website-effectiveness-customer-attraction">
                    <h3>What Makes a Website Effective for Attracting Customers?</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <Link href="/effective-web-design-steps">
                    <h3>Your Friendly 7-Step Guide to Effective Web Design</h3>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card">
                  <Link href="/cost-canada-website">
                    <h3>How much does a website cost in 2024 in Canada?</h3>
                  </Link>
                </div>
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
                Our Clients <span>Get Results</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <Image className="img-fluid" src={treeImg} alt="website design st catharines" />
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
                  Ready to <span>Grow Your Business</span>?
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
        <section className="why-infused">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="text-center">
                  Why <span>Choose Us</span>
                </h2>
                <p className="text-center">
                  We Grow Businesses Through Lead-Generating Website Designs &amp; SEO Strategies
                </p>
                <p className="pd-top-40">
                  We are a web design company in St. Catharines, Niagara called Infused Agency. We make websites that
                  really work and help businesses get more customers. Our team is awesome at web design, and we do cool
                  things like making sure your website shows up when people search on the internet. We've helped lots of
                  businesses in Niagara, and here are some reasons why we're different from other web design companies:
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <Image width="50" height="50" className="img-fluid" src={check} alt="performance focused" />
                <h3>Proven Track Record</h3>
                <p>
                  Why spend money on a website company that doesn't make things better for your business? Choose Infused
                  Agency, and we'll make your company stand out. Our web design agency is really good at making websites
                  and using tricks to help your business grow. We've been doing this since 2013, and we've made lots of
                  businesses successful. Trust us, we know what we're doing.
                </p>
              </div>
              <div className="col-lg-4">
                <Image width="50" height="50" className="img-fluid" src={check} alt="proven track record" />
                <h3>Web Design Experts</h3>
                <p>
                  There are a lot of web designers in Niagara that make websites for businesses. But we're special
                  because we make our websites with care. Some other places use ready-made templates, but not us! We
                  make our websites by hand to make sure they're safe, super fast, and look really unique. Our websites
                  are made with the newest techniques, so you know they're the best!
                </p>
              </div>
              <div className="col-lg-4">
                <Image width="50" height="50" className="img-fluid" src={check} alt="prompt delivery" />
                <h3>Prompt Delivery</h3>
                <p>
                  We know your Niagara business is busy, so we make sure to build your website quickly and well. From
                  our first talk to showing you the design and then launching the website, we keep talking with you to
                  make sure everything is just right. We'll answer your questions and make sure your website is ready
                  when you need it. Getting your website done on time is what we aim for!
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
                <span>Frequently Asked</span>Questions
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3>How much does a new website cost?</h3>
              <p>
                Every project is different, so there's no one-size-fits-all answer. It depends on what your project
                needs. You can check our
                <Link href="/pricing">pricing page</Link> for a general idea. In our free talks, we'll ask you lots of
                questions, figure out what you need, and then tell you how much it might cost.
              </p>
              <h3>How long will it take to get a new website?</h3>
              <p>
                It usually takes about 6 to 8 weeks, but it can change based on what you need. If we need stuff from
                you, like content or approval, and there are delays, it might take longer. But if you send things
                quickly, your website will be ready faster.
              </p>
              <h3>Do you only create WordPress websites?</h3>
              <p>
                No! WordPress is good for many things. You can change your website by yourself, and we'll show you how.
                We use special tools to make things faster. But sometimes, a website made by hand works even better than
                a WordPress one, especially if you don't want to change it yourself.
              </p>
              <h3>Do I have to be local to work with you?</h3>
              <p>No way! We help people nearby and also people from all over the world.</p>
              <h3>Will I be able to update the website when it's finished?</h3>
              <p>Yes, if it's a WordPress website. If not, our team of experts can update it for you.</p>
              <h3>Can you maintain my website for me?</h3>
              <p>Of course! We know business owners are often busy. We can help by updating your website for you.</p>
            </div>
            <div className="col-lg-6">
              <h3>Will my website be mobile-friendly?</h3>
              <p>
                Yep! We make sure our websites work nicely on phones so that when people visit, it's fun and easy for
                them.
              </p>
              <h3>When do I pay?</h3>
              <p>
                We get money in parts during the project. First, you give us some money at the start. Then, more when
                we're designing and building the website. The last bit comes at the end. You can pay with e-transfer,
                cash, or a credit card.
              </p>
              <h3>How much input do I have?</h3>
              <p>
                We talk a lot with you and make sure everything we do for their website is just what you want. We don't
                want any surprises, so we make sure it looks and works just the way you like.
              </p>
              <h3>Do I provide the content for my website?</h3>
              <p>
                ep! You know the most about your business, so usually, you give us the words for the website. But if you
                don't want to or can't, we can write it for you, but that might cost a bit more.
              </p>
              <h3>What about website hosting?</h3>
              <p>
                We have some favourite places where we put websites so they can be seen by everyone. We can chat about
                these special places during our free talk.
              </p>
              <h3>What if I need help after my site is live?</h3>
              <p>Send us an email anytime! We're here to help you with anything you need.</p>
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
                  Ready to <span>Grow Your Business</span>?
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
