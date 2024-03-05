import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
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
          Niagara Web Design | St. Catharines Website Creation Company
        </title>
        <meta
          name="description"
          content="Niagara's top web design agency. As a leading website creation company in St. Catharines, we specialize in crafting stunning websites. Get a free quote now!"
        />
        <meta
          name="keywords"
          content="Niagara Web Design, Web Design St. Catharines, Web Designer Niagara, Web Designer St. Catharines, Website Developer Niagara, Website Developer St. Catharines"
        />
        <meta
          name="google-site-verification"
          content="VK8okfPDhG2ziQHXaOAh2Nerc_pVe6vR9pcCp1WtSW8"
        />
        <link rel="canonical" href="https://infused.agency" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd()}
          key="item-jsonld"
        />
      </Head>
      <Nav />
      <Hero />
      <Fade>
        <section className="home-top-web">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <h2>
                  Web Design Niagara - a website company{" "}
                  <span>businesses trust.</span>
                </h2>
                <p>
                  Our Niagara web design agency is really good at making
                  websites. Our web design Niagara company does website creation
                  that is good for local businesses and don't cost too much.
                  <br />
                  <br />
                  We've been offering Niagara website design to lots of nearby
                  businesses in the Niagara region like St. Catharines, Niagara
                  Falls and other areas with our website-making skills. Our
                  websites are easy to use and help businesses grow and make
                  more money. We also have experts who make sure your website
                  can be easily found on Google.
                  <br />
                  <br />
                  We love creating websites and helping local businesses do well
                  online. We can do that for you too!
                </p>
                <Image
                  className="img-fluid"
                  src={google}
                  alt="web design niagara"
                />
              </div>
              <div className="col-lg-5">
                <Image
                  className="img-fluid"
                  src={visca}
                  alt="web design st catharines"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="home-faq">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-12">
                <h2>
                  <span>Frequently Asked</span> Website Design Questions
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <Accordion>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Will you review my existing website prior to building my
                        new website?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      Absolutely! We'd be happy to review your existing website
                      as part of our initial consultation. Understanding your
                      current online presence helps us tailor our approach to
                      building a new website that aligns with your goals and
                      addresses any specific improvements or enhancements you're
                      looking for. Let's discuss your current site during our
                      free consultation to ensure we create a website that meets
                      your needs and exceeds your expectations.
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What do you need from me before we start my website
                        design project?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul>
                        <li>
                          Clear understanding of your specific requirements and
                          business needs. Don't worry, we'll go over this in our
                          discovery call!
                        </li>
                        <li>
                          Any specific preferences or design elements you'd like
                          us to incorporate.
                        </li>
                        <li>
                          Access to relevant content, such as images, logos, and
                          textual information.
                        </li>
                      </ul>
                      That's it! It's a pretty smooth process to get your
                      website design project going.
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How much does a new website cost?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      Every project is different, so there's no
                      one-size-fits-all answer. It depends on what your project
                      needs. You can check our pricing page for a general idea.
                      In our free consultation, we'll ask you lots of questions,
                      figure out what you need, and then tell you how much it
                      might cost.
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can you design a website that fits my budget?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      Absolutely! We can create a website that fits your budget
                      perfectly. We have different options, and we can customize
                      everything based on what you need and how much you want to
                      spend. Let's talk about your budget and what you're
                      looking for, and we'll find the perfect solution for you!
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How long will it take to get a new website?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      It usually takes about 6 to 8 weeks, but it can change
                      based on what you need. If we need stuff from you, like
                      content or approval, and there are delays, it might take
                      longer. But if you send things quickly, your website will
                      be ready faster.
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What is your website design process?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul>
                        <li>
                          We start with a discovery call to understand your
                          specific requirements and business needs.
                        </li>
                        <li>
                          Next, we design the home page based on the gathered
                          information and share it with you for review.
                        </li>
                        <li>
                          Once the home page design is approved, we proceed to
                          develop the full website and share it with you for
                          another review.
                        </li>
                        <li>
                          Finally, after making any necessary adjustments, we
                          launch your website for the world to see.
                        </li>
                      </ul>
                      Throughout the process, we value your input and
                      collaboration to ensure the final result aligns perfectly
                      with your vision and goals.
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Which content management system do you use?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      We exclusively use WordPress as our content management
                      system. It offers a user-friendly interface, robust
                      features, and flexibility to meet diverse website needs.
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Do you only create WordPress websites?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      No! WordPress is good for many things. You can change your
                      website by yourself, and we'll show you how. We use
                      special tools to make things faster. But sometimes, a
                      website made by hand works even better than a WordPress
                      one, especially if you don't want to change it yourself.
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Do I have to be local to work with you?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      No way! We help people nearby and also people from all
                      over the world.
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Will I be able to update the website when it's finished?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      Yes, if it's a WordPress website. If not, our team of
                      experts can update it for you.
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can you maintain my website for me?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      Of course! We know business owners are often busy. We can
                      help by updating your website for you.
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Do you follow SEO best practices when building the site?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      We prioritize basic SEO best practices in our website
                      development process to ensure optimal visibility and
                      performance. If you have advanced SEO goals or features
                      you'd like to emphasize, feel free to let us know, and we
                      can discuss incorporating them!
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="col-lg-6">
                <Accordion>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Do you build custom sites or use templates?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      We specialize in custom-built websites for greater
                      flexibility in functionality and design. This approach
                      allows us to tailor the site to your specific needs,
                      ensuring a unique and effective online presence. If you
                      have any specific preferences or features you'd like to
                      discuss, feel free to share, and we'll incorporate them
                      into the custom design!
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Do you work in-house or outsource your projects?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      We do all the work ourselves, right here in our own
                      office. So, you can be sure that the people you talk to
                      and the ones who build your website are all part of our
                      team. If you have any questions or want to know more about
                      our process, feel free to ask!
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Will I have a project manager or one central contact?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      Yes, you'll have a project manager who will work directly
                      with you. They will be your main point of contact
                      throughout the whole process, making sure everything runs
                      smoothly and addressing any questions or concerns you
                      might have.
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Will my website be mobile-friendly?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      Yep! We make sure our websites work nicely on phones so
                      that when people visit, it's fun and easy for them.
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>When do I pay?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      We get money in parts during the project. First, you give
                      us some money at the start. Then, more when we're
                      designing and building the website. The last bit comes at
                      the end. You can pay with e-transfer, cash, or a credit
                      card.
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How much input do I have?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      We talk a lot with you and make sure everything we do for
                      their website is just what you want. We don't want any
                      surprises, so we make sure it looks and works just the way
                      you like.
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Do I provide the content for my website?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      Yep! You know the most about your business, so usually,
                      you give us the words for the website. But if you don't
                      want to or can't, we can write it for you, but that might
                      cost a bit more.
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Should I provide the images for my website?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      While we can search for free relevant images, providing
                      specific ones aligned with your brand and vision is ideal.
                      If you can't, no worries – we have access to high-quality
                      stock photos and can guide you to websites where you can
                      choose images. Our goal is to create a visually stunning
                      and cohesive website that represents your brand
                      accurately.
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What about website hosting?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      We have some favourite places where we put websites so
                      they can be seen by everyone. We can chat about these
                      special places during our free talk.
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What if I need help after my site is live?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      Send us an email anytime! We're here to help you with
                      anything you need.
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Do you offer services other than web design?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      In addition to web design, we also offer SEO services to
                      enhance your online visibility and improve search engine
                      rankings. Our comprehensive approach ensures that your
                      website not only looks great but also performs well in
                      search results, attracting organic traffic to boost your
                      online presence.
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Will my website secure?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      Absolutely! For both non-CMS and WordPress websites, we
                      prioritize security. We implement HTTPS to secure data
                      transmission, and for WordPress sites, we go the extra
                      mile by installing additional security plugins. This
                      comprehensive approach ensures your website is
                      well-protected.
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
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
                  <span>Web Design Niagara</span> Services We Offer
                </h2>
                <p className="serv-intro">
                  We make great websites and help people find them on the
                  internet.
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
                    Our Niagara website designers create compelling web designs
                    that are fully responsive, effectively conveying your
                    message.
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
                    Our web design Niagara services offer WordPress to allow you
                    to update your website without knowledge of code.
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
                    Our Niagara web designers help make sure the best websites
                    are easy to find on Google and other search engines.
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
                    <h3>
                      What Makes a Website Effective for Attracting Customers?
                    </h3>
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
      </section>

      <Fade>
        <section className="why-infused">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="text-center">
                  Why <span>Choose Us</span>
                </h2>
                <p className="text-center">
                  We Grow Businesses Through Lead-Generating Website Designs
                  &amp; SEO Strategies
                </p>
              </div>
            </div>
            <div className="row pd-top-40">
              <div className="col-lg-4">
                <Image
                  width="50"
                  height="50"
                  className="img-fluid"
                  src={check}
                  alt="performance focused"
                />
                <h3>Proven Track Record</h3>
                <p>
                  Our skilled web design agency team has been making successful
                  websites since 2013, using tricks to help your business grow.
                  Trust us – we know what we're doing.
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
                <h3>Web Design Experts</h3>
                <p>
                  Our Niagara web designers create unique, handcrafted websites
                  for businesses, prioritizing safety, speed, and the latest
                  techniques.
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
                <h3>Prompt Delivery</h3>
                <p>
                  We understand your busy Niagara business. We build your
                  website quickly, communicate at every step, and ensure it's
                  ready on time.
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
                  Ready to <span>Grow Your Business</span>?
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
