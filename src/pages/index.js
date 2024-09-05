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
    "@type": "Article",
    headline: "FAQs About Our Niagara Web Design and SEO Services",
    description:
      "Answers to common questions about our web design and SEO services in Niagara.",
    articleBody: "Here are some frequently asked questions about our services:",
    mainEntity: [
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where is your team based?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Our Niagara-based web design agency has thrived on our local expertise and commitment to the region. Our dedicated team, based exclusively in Niagara, is deeply familiar with the local market and its unique needs. This focused approach allows us to deliver highly personalized and effective web design solutions tailored to businesses right here in Niagara. Operating solely within Niagara enables us to provide exceptional support and attention to detail for our clients. We take pride in offering hands-on, localized service that ensures every project benefits from our in-depth understanding of the area. Our virtual model allows us to work flexibly and efficiently, making sure that your mobile-friendly website design project receives the dedication and care it deserves. Check out our web design portfolio to see the exceptional work we've done for businesses in Niagara.",
            },
          },
          {
            "@type": "Question",
            name: "What is your web design process like?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "At Infused Agency, our experienced website designers have honed a proven web strategy over nearly two decades. While we’ve streamlined our process to be efficient and effective, our commitment remains the same: we value your active involvement in the marketing strategy. Our goal is to ensure that the final product design is a shared success. No one knows your business and customers better than you do. The insights and experience you provide are crucial to our workflow, particularly during the discovery and strategy phases. We utilize Google Analytics and other data to guide our UX/UI design, ensuring that our approach aligns with your goals and enhances your online presence. Discover our process web design in Niagara to help Niagara businesses like yours thrive online.",
            },
          },
          {
            "@type": "Question",
            name: "What will my project cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Determining the cost of a website design project for a Niagara business can be challenging as each project is unique, involving various factors such as design complexity, functionality, and the range of services required. At Infused Agency, we offer a range of pricing options based on your needs:\n\nNiagara Website Design Pricing Tiers\n\nThree Page Website - $2,000\n- 3 pages\n- 1 round of revisions\n- Hosting included\n- SSL Certificate included\n- Mobile-Friendly\n- Google Sitemap\n\nFive Page Website - $3,000\n- 5 pages\n- SEO Optimized for Google\n- 1 round of revisions\n- Hosting included\n- SSL Certificate included\n- Mobile-Friendly\n- Google Sitemap\n\nFive Page CMS Website - $3,500\n- 5 pages\n- Content Management System (edit website on your own)\n- SEO Optimized for Google\n- 1 round of revisions\n- Mobile-Friendly\n- Google Sitemap\n\nTen Page CMS Website - $4,000\n- 10 pages\n- Content Management System (edit website on your own)\n- SEO Optimized for Google\n- 1 round of revisions\n- Mobile-Friendly\n- Google Sitemap\n\nE-Commerce / Advanced Functionality Website - $5,000 - $20,000+\n- 20 pages\n- Content Management System (edit website on your own)\n- E-Commerce Functionality\n- Chat Functionality\n- Member Section Functionality\n- Other Custom Functionality",
            },
          },
          {
            "@type": "Question",
            name: "How can I get a quote for my project?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "We’d love to chat if you’ve reviewed our Niagara website design portfolio and have questions about our Niagara web design services or development expertise. If you’re looking for professional marketing services or web design in Niagara, please inquire about a quote for your project. Feel free to contact the best web designers in Niagara by completing our online quote form for a free consultation.",
            },
          },
          {
            "@type": "Question",
            name: "Can you fix my existing website?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Our web developers no longer take on projects to fix website designs or software development created by Niagara web design agencies. While this decision was challenging and we regret having to turn potential clients away, it's essential for us to deliver the results our clients expect. We believe in following the entire process from strategy through development to ensure the highest quality of work. Accepting a project of this nature would involve significant discovery by our team to analyze the existing website, understand its functionality, and assess all connected components. For custom e-commerce sites, this often means dealing with multiple third-party integrations that require extra attention. Ultimately, the cost of fixing an existing site is often comparable to designing a new custom website, but with potentially limited improvements. This does not align with the level of customer service and quality we pride ourselves on. We’ve earned our reputation as one of the best web designers in Niagara by adhering to this guiding principle.",
            },
          },
          {
            "@type": "Question",
            name: "Who will be working on my project?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "In most cases, you will work directly with the owner, who brings over a decade of experience in digital marketing campaigns, website design in Niagara, and other web development services for small businesses. We avoid the 'broken telephone' game and strive to streamline our workflow and communication process as professional service providers. This approach ensures that your project progresses smoothly and efficiently, with minimal miscommunication.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer SEO (search engine optimization) services?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes, we offer comprehensive search engine optimization (SEO) services designed to enhance your online visibility and drive more traffic to your business. At Infused Agency, we specialize in both general and local SEO, focusing specifically on serving businesses in Niagara. As a leading web design company based in Niagara, we personally manage all aspects of SEO to ensure that our clients benefit from top-notch strategies. Our extensive expertise in SEO, combined with a deep understanding of search engines and their evolving algorithms, enables me to deliver high-performing web designs that increase your business’s online presence.",
            },
          },
          {
            "@type": "Question",
            name: "Do you use templates or custom web design?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "At Infused Agency, we specialize in custom web design in Niagara. We do not use pre-made templates for our projects. Every website we create is developed from scratch to ensure that it meets the unique needs and goals of our clients. Using templates can limit the creativity and functionality of a website, which is why we avoid them. Instead, we focus on delivering tailored solutions that fully utilize screen real estate and provide a seamless user experience. Our approach allows us to integrate advanced SEO strategies effectively, enhancing both your website's performance and visibility. For a website that stands out and performs well, you need a custom solution that reflects your business’s individuality. Our Niagara web design services are crafted to deliver outstanding results, without the constraints of templates.",
            },
          },
          {
            "@type": "Question",
            name: "What website platforms do you work with?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "We specialize in building high-quality websites using two primary platforms: WordPress and Next.js. As a leading Niagara web design agency, we choose these platforms to deliver exceptional performance and flexibility for your online presence. WordPress is ideal for clients who need a user-friendly content management system, allowing you to easily update and manage your website. It is also highly customizable, making it perfect for local SEO and enhancing your site's visibility in search results. On the other hand, Next.js is our go-to choice for clients looking for a modern, fast, and scalable web solution. This platform is particularly well-suited for building high-performance sites with advanced features and optimal SEO capabilities, aligning with our goal of providing top-notch web design in Niagara. Whether you need a custom WordPress site or a cutting-edge Next.js application, Infused Agency has the expertise to create a website that meets your needs and drives results.",
            },
          },
        ],
      },
    ],
  };

  return {
    __html: JSON.stringify(schema),
  };
};

const Home = ({ latestPosts }) => {
  const [open, setOpen] = useState("0");
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
        <title>Niagara Web Design | Website Developer St. Catharines</title>
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
                Our Niagara Website Developers Make Your Website Your{" "}
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
            <div className="container pd-top-40">
              <div className="row text-center">
                <div className="col-lg-12">
                  <h2>Powered by Infused Agency</h2>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="card">
                    <img
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
                      They did a fantastic job on my website. They were easy to
                      work with, always very quick to respond and made designing
                      the page very simple. I would highly recommend them for
                      all of your web design and development needs!
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
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
                Web Design That Makes An <span>Impact</span>
              </h2>
              <p>
                Our lead-generating web design, optimization and SEO solutions
                help bring you more leads through your website
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
                    Is your website not bringing you customers? We create
                    lead-generating websites, for the purpose of converting
                    visitors into customers.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 d-flex">
              <Link href="/website-conversion-optimization">
                <div className="card">
                  <h2>Conversion Optimization</h2>
                  <p>
                    Is your website not bringing you leads? Our team will fix
                    conversion barriers, optimizing your website to convert
                    more.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 d-flex">
              <Link href="/niagara-seo-company">
                <div className="card">
                  <h2>Search Engine Optimization</h2>
                  <p>
                    Are your customers not finding your website in Google? Lets
                    help get your website found, and drive more leads to you.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex">
              <Link href="/web-design">
                <div className="card">
                  <h2>Website Development</h2>
                  <p>
                    Is your website outdated or lacking functionality? We
                    specialize in building modern, fast, and responsive
                    websites.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 d-flex">
              <Link href="/wordpress-developer-niagara">
                <div className="card">
                  <h2>WordPress Development</h2>
                  <p>
                    Struggling with a generic or outdated WordPress site? We
                    craft custom WordPress solutions tailored to your business
                    needs.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 d-flex">
              <Link href="/niagara-seo-company">
                <div className="card">
                  <h2>Local SEO</h2>
                  <p>
                    Are local customers missing out on your services? We focus
                    on optimizing your site for local search, getting you more
                    visibility.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <section className="our-clients pd-top-80">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2>
                  Clients We've Helped <span>Flourish</span>
                </h2>
                <p>
                  For over a decade, we've built valuable partnerships with
                  numerous brands and businesses throughout Niagara &amp;
                  beyond.
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
                Featured Web Design <span>Projects</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Image
                className="img-fluid"
                src={workVisca}
                alt="website design niagara visca electric"
              />
            </Col>
            <Col lg="6">
              <Image
                className="img-fluid"
                src={workJerrys}
                alt="web design niagara jerrys insulating"
              />
            </Col>
          </Row>
          <Row className="pd-top-40">
            <Col lg="6">
              <Image
                className="img-fluid"
                src={workGGS}
                alt="niagara website design ggs landscaping"
              />
            </Col>
            <Col lg="6">
              <Image
                className="img-fluid"
                src={workKD}
                alt="niagara web design kd flowers"
              />
            </Col>
          </Row>
          <Row className="pd-top-40">
            <Col lg="6">
              <Image
                className="img-fluid"
                src={workCass}
                alt="st catharines website design cass construction"
              />
            </Col>
            <Col lg="6">
              <Image
                className="img-fluid"
                src={workTree}
                alt="st catharines web design treereports"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-client-results">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Featured Results</h2>
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

      <section className="pricing pd-top-120">
        <Container>
          <Row className="text-center">
            <Col lg="12">
              <h2>
                Website Design &amp; SEO Pricing For{" "}
                <span>All Business Sizes</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <p className="w-75 text-center">
                High-quality web design shouldn't be reserved for large
                companies. We help small to medium businesses and alike build a
                strong online presence at an affordable price.
              </p>
              <h3 className="w-75 pd-top-40 text-center">
                <strong>
                  <span>These prices are a general guideline only.</span> <br />
                  <br />
                  Depending on your specific project scope, whether it's
                  reducing or adding to the scope, the prices may fluctuate.
                </strong>
              </h3>
            </Col>
          </Row>
          {/* Websites */}
          <Row className="pd-top-40 text-center">
            <Col lg="12">
              <h2>
                <span>Website Design</span> Pricing
              </h2>
            </Col>
          </Row>
          <Row>
            <Col lg="4" className="d-flex">
              <div className="card">
                <h3>Starter</h3>
                <h4>
                  Starting at <span>$3,499</span>
                </h4>
                <p>
                  For small businesses and startups seeking to build or refresh
                  their online presence.
                </p>
                <div className="bg">
                  <li className="check">5 Pages</li>
                  <li className="check">1 Round of Revisions</li>
                  <li className="check">Custom, Template-Free Design</li>
                  <li className="check">Mobile-Friendly Design</li>
                  <li className="check">SSL Certificate Included</li>
                  <li className="xmark">Edit Content On Your Own</li>
                  <li className="xmark">Blog</li>
                  <li className="xmark">Photo Galleries</li>
                  <li className="xmark">Memberships</li>
                  <li className="xmark">Appointment Booking</li>
                  <li className="xmark">Lead Form</li>
                  <li className="xmark">Social Media Integration</li>
                  <li className="xmark">Quote/Fee Calculator</li>
                  <li className="xmark">SEO-Indexable Pages</li>
                  <li className="xmark">Google Analytics Setup</li>
                  <li className="xmark">Google Search Console Setup</li>
                  <li className="xmark">Product Purchase (E-Commerce)</li>
                  <li className="xmark">Payment Integration</li>
                </div>
                <Link href="/get-a-quote">
                  <button>
                    Choose Package
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
            </Col>
            <Col lg="4" className="d-flex">
              <div className="card">
                <div className="d-flex align-items-center">
                  <h3>Business</h3>
                  <p className="popular">Popular</p>
                </div>
                <h4>
                  Starting at <span>$6,999</span>
                </h4>
                <p>
                  For small businesses seeking to upgrade and improve their
                  online presence.
                </p>
                <div className="bg">
                  <li className="check">10 Pages</li>
                  <li className="check">1 Round of Revisions</li>
                  <li className="check">Custom, Template-Free Design</li>
                  <li className="check">Mobile-Friendly Design</li>
                  <li className="check">SSL Certificate Included</li>
                  <li className="check">Edit Content On Your Own</li>
                  <li className="check">Blog</li>
                  <li className="check">Photo Galleries</li>
                  <li className="check">Memberships</li>
                  <li className="check">Appointment Booking</li>
                  <li className="check">Lead Form</li>
                  <li className="check">Social Media Integration</li>
                  <li className="check">Quote/Fee Calculator</li>
                  <li className="check">SEO-Indexable Pages</li>
                  <li className="check">Google Analytics Setup</li>
                  <li className="check">Google Search Console Setup</li>
                  <li className="xmark">Product Purchase (E-Commerce)</li>
                  <li className="xmark">Payment Integration</li>
                </div>
                <Link href="/get-a-quote">
                  <button>
                    Choose Package
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
            </Col>
            <Col lg="4" className="d-flex">
              <div className="card">
                <h3>Commerce</h3>
                <h4>
                  Starting at <span>$12,999</span>
                </h4>
                <p>
                  For growing businesses seeking to sell products and expand
                  their brand online.
                </p>
                <div className="bg">
                  <li className="check">15 Pages</li>
                  <li className="check">1 Round of Revisions</li>
                  <li className="check">Custom, Template-Free Design</li>
                  <li className="check">Mobile-Friendly Design</li>
                  <li className="check">SSL Certificate Included</li>
                  <li className="check">Edit Content On Your Own</li>
                  <li className="check">Blog</li>
                  <li className="check">Photo Galleries</li>
                  <li className="check">Memberships</li>
                  <li className="check">Appointment Booking</li>
                  <li className="check">Lead Form</li>
                  <li className="check">Social Media Integration</li>
                  <li className="check">Quote/Fee Calculator</li>
                  <li className="check">SEO-Indexable Pages</li>
                  <li className="check">Google Analytics Setup</li>
                  <li className="check">Google Search Console Setup</li>
                  <li className="check">Product Purchase (E-Commerce)</li>
                  <li className="check">Payment Integration</li>
                </div>
                <Link href="/get-a-quote">
                  <button>
                    Choose Package
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
            </Col>
          </Row>
          {/* SEO*/}
          <Row className="pd-top-40 text-center">
            <Col lg="12">
              <h2>
                <span>SEO (Search Engine Optimization)</span> Pricing
              </h2>
            </Col>
          </Row>

          {/* SEO */}
          <Row className="pd-top-40 pd-btm-120">
            <Col lg="4" className="d-flex">
              <div className="card">
                <h3>SEO Audit</h3>
                <h4>
                  One time fee of <span>$999</span>
                </h4>
                <p>
                  Detailed analysis of your website’s SEO, highlighting areas
                  for improvement.
                </p>
                <div className="bg">
                  <li className="check">SEO Website Audit</li>
                  <li className="check">SEO Audit Report</li>
                  <li className="xmark">3 month SEO Campaign</li>
                  <li className="xmark">Custom SEO Strategy</li>
                  <li className="xmark">In-Depth Keyword Research</li>
                  <li className="xmark">SEO Content Optimization</li>
                  <li className="xmark">Optimize Image Alt Tags</li>
                  <li className="xmark">Optimize Google Sitemap</li>
                  <li className="xmark">Optimize Meta Descriptions</li>
                  <li className="xmark">Optimize Meta Titles</li>
                  <li className="xmark">On-page SEO Optimization</li>
                  <li className="xmark">Optimize Google Map Listing</li>
                  <li className="xmark">Link Building</li>
                  <li className="xmark">2 SEO Blog Posts / Month</li>
                </div>
                <Link href="/get-a-quote">
                  <button>
                    Choose Package
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
            </Col>
            <Col lg="4">
              <div className="card">
                <div className="d-flex align-items-center">
                  <h3>SEO Boost</h3>
                  <p className="popular">Popular</p>
                </div>
                <h4>
                  <span>$1,499</span> / month for 3 months
                </h4>
                <p>
                  Accelerated SEO package for enhanced rankings and traffic over
                  four months.
                </p>
                <div className="bg">
                  <li className="check">SEO Website Audit</li>
                  <li className="check">SEO Audit Report</li>
                  <li className="check">3 month SEO Campaign</li>
                  <li className="check">Custom SEO Strategy</li>
                  <li className="check">In-Depth Keyword Research</li>
                  <li className="check">SEO Content Optimization</li>
                  <li className="check">Optimize Image Alt Tags</li>
                  <li className="check">Optimize Google Sitemap</li>
                  <li className="check">Optimize Meta Descriptions</li>
                  <li className="check">Optimize Meta Titles</li>
                  <li className="check">On-page SEO Optimization</li>
                  <li className="check">Optimize Google Map Listing</li>
                  <li className="check">Link Building</li>
                  <li className="xmark">2 SEO Blog Posts / Month</li>
                </div>
                <Link href="/get-a-quote">
                  <button>
                    Choose Package
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
            </Col>
            <Col lg="4">
              <div className="card">
                <h3>SEO Elite</h3>
                <h4>
                  <span>$2,499</span> per month for 6 months
                </h4>
                <p>
                  Premium SEO service with comprehensive optimization over six
                  months.
                </p>
                <div className="bg">
                  <li className="check">SEO Website Audit</li>
                  <li className="check">SEO Audit Report</li>
                  <li className="check">6 month SEO Campaign</li>
                  <li className="check">Custom SEO Strategy</li>
                  <li className="check">In-Depth Keyword Research</li>
                  <li className="check">SEO Content Optimization</li>
                  <li className="check">Optimize Image Alt Tags</li>
                  <li className="check">Optimize Google Sitemap</li>
                  <li className="check">Optimize Meta Descriptions</li>
                  <li className="check">Optimize Meta Titles</li>
                  <li className="check">On-page SEO Optimization</li>
                  <li className="check">Optimize Google Map Listing</li>
                  <li className="check">Link Building</li>
                  <li className="check">2 SEO Blog Posts / Month</li>
                </div>
                <Link href="/get-a-quote">
                  <button>
                    Choose Package
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
            <Col lg="12">
              <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                  <AccordionHeader targetId="1">
                    Why work with Infused Agency?
                  </AccordionHeader>
                  <AccordionBody accordionId="1">
                    <h2>Why Work with Infused Agency?</h2>
                    <p>
                      As a leading Niagara web design company, Infused Agency is
                      dedicated to helping businesses in St. Catharines and
                      beyond boost leads and drive sales through their websites.
                      With over a decade of experience, we’ve become known for
                      creating websites that not only look great but also
                      function as powerful sales and lead generation tools.
                    </p>

                    <h3>Top Reasons to Choose Infused Agency</h3>
                    <br />
                    <h4>Comprehensive Niagara Web Design Services</h4>
                    <p>
                      We offer a full suite of services, including responsive
                      web development, strategic SEO, and targeted digital
                      marketing. Our team crafts bespoke digital experiences
                      that merge your brand’s essence with cutting-edge design,
                      turning your website into a powerful lead generation and
                      sales acceleration engine.
                    </p>

                    <h4>Results-Driven Design</h4>
                    <p>
                      We specialize in creating lead-generating websites that
                      convert visitors into customers. By blending creativity
                      with functionality, we ensure that your website not only
                      stands out visually but also performs effectively to grow
                      your business.
                    </p>

                    <h4>Clear Communication</h4>
                    <p>
                      We prioritize clear communication and responsiveness,
                      setting realistic expectations and delivering on our
                      promises. Our strategic approach to web design ensures
                      that every project aligns with your business goals.
                    </p>

                    <h4>Experienced Team</h4>
                    <p>
                      With over a decade of experience and a team of seasoned
                      experts, we bring unparalleled knowledge and skill to
                      every project. Our team is dedicated to ensuring your site
                      ranks well on Google, making it easy for potential
                      customers to find you and take action.
                    </p>

                    <h4>Proven Success Across Niagara</h4>
                    <p>
                      Our portfolio includes a diverse array of success stories
                      from businesses in St. Catharines, Niagara Falls, Welland,
                      Fort Erie, Thorold, and Niagara-on-the-Lake. We have
                      helped local businesses enhance their credibility,
                      increase leads, and drive sales through well-optimized and
                      visually appealing websites.
                    </p>

                    <h4>Tailored Solutions for Your Business</h4>
                    <p>
                      From custom web design and development to conversion
                      optimization and local SEO, we offer solutions that are
                      specifically tailored to meet the needs of your business.
                      Whether you need a modern, fast, and responsive website or
                      a custom WordPress solution, we’ve got you covered.
                    </p>

                    <h4>Hosting and Maintenance</h4>
                    <p>
                      We offer managed web hosting and ongoing maintenance
                      services to ensure your website remains up-to-date,
                      secure, and performing at its best. Let us handle the
                      technical details so you can focus on running your
                      business.
                    </p>

                    <h4>Consistent Partnership</h4>
                    <p>
                      When you work with us, you’ll have a dedicated project
                      manager and designer from start to finish, ensuring a
                      seamless and consistent experience. We’re here to support
                      you every step of the way.
                    </p>

                    <h4>Customer Support</h4>
                    <p>
                      Our clients consistently praise our commitment to
                      excellent customer support. We make your experience with
                      us smooth and stress-free, so you can focus on what
                      matters most—growing your business.
                    </p>

                    <h4>Local SEO Expertise</h4>
                    <p>
                      Are local customers missing out on your services? We
                      specialize in optimizing your website for local search,
                      increasing your visibility and driving more leads to your
                      business.
                    </p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="2">
                    Where is your team based?
                  </AccordionHeader>
                  <AccordionBody accordionId="2">
                    <h2>Where is your team based?</h2>
                    <p>
                      Our Niagara-based web design agency has thrived on our
                      local expertise and commitment to the region. Our
                      dedicated team, based exclusively in Niagara, is deeply
                      familiar with the local market and its unique needs. This
                      focused approach allows us to deliver highly personalized
                      and effective web design solutions tailored to businesses
                      right here in Niagara.
                    </p>
                    <p>
                      Operating solely within Niagara enables us to provide
                      exceptional support and attention to detail for our
                      clients. We take pride in offering hands-on, localized
                      service that ensures every project benefits from our
                      in-depth understanding of the area. Our virtual model
                      allows us to work flexibly and efficiently, making sure
                      that your mobile-friendly website design project receives
                      the dedication and care it deserves.
                    </p>
                    <p>
                      Check out our{" "}
                      <Link href="/work">web design portfolio</Link> to see the
                      exceptional work we've done for businesses in Niagara.
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
                      At Infused Agency, our experienced website designers have
                      honed a proven web strategy over nearly two decades. While
                      we’ve streamlined our process to be efficient and
                      effective, our commitment remains the same: we value your
                      active involvement in the marketing strategy. Our goal is
                      to ensure that the final product design is a shared
                      success.
                    </p>
                    <p>
                      No one knows your business and customers better than you
                      do. The insights and experience you provide are crucial to
                      our workflow, particularly during the discovery and
                      strategy phases. We utilize Google Analytics and other
                      data to guide our UX/UI design, ensuring that our approach
                      aligns with your goals and enhances your online presence.
                    </p>
                    <p>
                      Discover our <Link href="/process">process</Link> web
                      design in Niagara to help Niagara businesses like yours
                      thrive online.
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
                      Determining the cost of a website design project for a
                      Niagara business can be challenging as each project is
                      unique, involving various factors such as design
                      complexity, functionality, and the range of services
                      required.
                    </p>
                    <p>
                      <Link href="/pricing">View our pricing</Link> for both
                      website design and SEO services within the Niagara region.
                    </p>
                    <p>
                      <Link href="/get-a-quote">Book a call today</Link> to
                      discuss your goals, learn more about our experience, and
                      get detailed information about website prices, timelines,
                      and budget ranges.
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
                <AccordionItem>
                  <AccordionHeader targetId="6">
                    Can you fix my existing website?
                  </AccordionHeader>
                  <AccordionBody accordionId="6">
                    <h2>Can you fix my existing website?</h2>
                    <p>
                      Our web developers no longer take on projects to fix
                      website designs or software development created by Niagara
                      web design agency.
                    </p>

                    <p>
                      While this decision was challenging and we regret having
                      to turn potential clients away, it's essential for us to
                      deliver the results our clients expect. We believe in
                      following the entire process from strategy through
                      development to ensure the highest quality of work.
                    </p>

                    <p>
                      Accepting a project of this nature would involve
                      significant discovery by our team to analyze the existing
                      website, understand its functionality, and assess all
                      connected components. For custom e-commerce sites, this
                      often means dealing with multiple third-party integrations
                      that require extra attention.
                    </p>

                    <p>
                      Ultimately, the cost of fixing an existing site is often
                      comparable to designing a new custom website, but with
                      potentially limited improvements. This does not align with
                      the level of customer service and quality we pride
                      ourselves on. We’ve earned our reputation as one of the
                      best web designers in Niagara by adhering to this guiding
                      principle.
                    </p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="7">
                    Who will be working on my project?
                  </AccordionHeader>
                  <AccordionBody accordionId="7">
                    <h2>Who will be working on my project?</h2>
                    <p>
                      In most cases, you will work directly with the owner, who
                      brings over a decade of experience in digital marketing
                      campaigns, website design in Niagara, and other web
                      development services for small businesses.
                    </p>

                    <p>
                      We avoid the "broken telephone" game and strive to
                      streamline our workflow and communication process as
                      professional service providers. This approach ensures that
                      your project progresses smoothly and efficiently, with
                      minimal miscommunication.
                    </p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="8">
                    Do you offer SEO (search engine optimization) services?
                  </AccordionHeader>
                  <AccordionBody accordionId="8">
                    <h2>
                      Do you offer SEO (search engine optimization) services?
                    </h2>
                    <p>
                      Yes, we offer comprehensive search engine optimization
                      (SEO) services designed to enhance your online visibility
                      and drive more traffic to your business. At Infused
                      Agency, we specialize in both general and local SEO,
                      focusing specifically on serving businesses in Niagara.
                    </p>

                    <p>
                      As a leading web design company based in Niagara, we
                      personally manage all aspects of SEO to ensure that our
                      clients benefit from top-notch strategies. Our extensive
                      expertise in SEO, combined with a deep understanding of
                      search engines and their evolving algorithms, enables me
                      to deliver high-performing web designs that increase your
                      business’s online presence.
                    </p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="9">
                    Do you use templates or custom web design?
                  </AccordionHeader>
                  <AccordionBody accordionId="9">
                    <h2>Do you use templates or custom web design?</h2>
                    <p>
                      At Infused Agency, we specialize in custom web design in
                      Niagara. We do not use pre-made templates for our
                      projects. Every website we create is developed from
                      scratch to ensure that it meets the unique needs and goals
                      of our clients.
                    </p>

                    <p>
                      Using templates can limit the creativity and functionality
                      of a website, which is why we avoid them. Instead, we
                      focus on delivering tailored solutions that fully utilize
                      screen real estate and provide a seamless user experience.
                      Our approach allows us to integrate advanced SEO
                      strategies effectively, enhancing both your website's
                      performance and visibility.
                    </p>

                    <p>
                      For a website that stands out and performs well, you need
                      a custom solution that reflects your business’s
                      individuality. Our Niagara web design services are crafted
                      to deliver outstanding results, without the constraints of
                      templates.
                    </p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="10">
                    What website platforms do you work with?
                  </AccordionHeader>
                  <AccordionBody accordionId="10">
                    <h2>What website platforms do you work with?</h2>
                    <p>
                      We specialize in building high-quality websites using two
                      primary platforms: WordPress and Next.js . As a leading
                      Niagara web design agency, we choose these platforms to
                      deliver exceptional performance and flexibility for your
                      online presence.
                    </p>

                    <p>
                      WordPress is ideal for clients who need a user-friendly
                      content management system, allowing you to easily update
                      and manage your website. It is also highly customizable,
                      making it perfect for local SEO and enhancing your site's
                      visibility in search results.
                    </p>

                    <p>
                      On the other hand, Next.js is our go-to choice for clients
                      looking for a modern, fast, and scalable web solution.
                      This platform is particularly well-suited for building
                      high-performance sites with advanced features and optimal
                      SEO capabilities, aligning with our goal of providing
                      top-notch web design in Niagara.
                    </p>

                    <p>
                      Whether you need a custom WordPress site or a cutting-edge
                      Next.js application, Infused Agency has the expertise to
                      create a website that meets your needs and drives results.
                    </p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="11">
                    What website platforms do you work with?
                  </AccordionHeader>
                  <AccordionBody accordionId="11">
                    <h2>What website platforms do you work with?</h2>
                    <p>
                      We specialize in building high-quality websites using two
                      primary platforms: WordPress and Next.js . As a leading
                      Niagara web design agency, we choose these platforms to
                      deliver exceptional performance and flexibility for your
                      online presence.
                    </p>

                    <p>
                      WordPress is ideal for clients who need a user-friendly
                      content management system, allowing you to easily update
                      and manage your website. It is also highly customizable,
                      making it perfect for local SEO and enhancing your site's
                      visibility in search results.
                    </p>

                    <p>
                      On the other hand, Next.js is our go-to choice for clients
                      looking for a modern, fast, and scalable web solution.
                      This platform is particularly well-suited for building
                      high-performance sites with advanced features and optimal
                      SEO capabilities, aligning with our goal of providing
                      top-notch web design in Niagara.
                    </p>

                    <p>
                      Whether you need a custom WordPress site or a cutting-edge
                      Next.js application, Infused Agency has the expertise to
                      create a website that meets your needs and drives results.
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
