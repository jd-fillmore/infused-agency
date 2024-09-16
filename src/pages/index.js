import React, { useState } from "react";
import { motion } from "framer-motion";
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
import google from "../../src/img/niagara-web-design-client-two.webp";
import heroImg from "../../src/img/niagara-web-design-client-one.webp";
import clients from "../../src/img/web-design-niagara-clients.png";
import workJerrys from "../../src/img/portfolio-kd.png";
import best from "../../src/img/awards.png";
import traffic from "../../src/img/increase-niagara-web-design-traffic.png";
import leads from "../../src/img/web-design-niagara-generate-leads.png";
import convert from "../../src/img/web-design-niagara-convert-customers.png";

const addJsonLd = () => {
  const schema = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: "Infused Agency",
    image:
      "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
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
        dayOfWeek: "http://schema.org/Monday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "http://schema.org/Tuesday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "http://schema.org/Wednesday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "http://schema.org/Thursday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "http://schema.org/Friday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "http://schema.org/Saturday",
        opens: "09:00",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "http://schema.org/Sunday",
        opens: "10:00",
        closes: "15:00",
      },
    ],
    mainEntity: [
      {
        "@type": "Organization",
        name: "Infused Agency",
        url: "https://infused.agency",
        logo:
          "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-905-933-3115",
          contactType: "Customer Service",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does a new website cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "We make high-quality web designs affordable for Niagara businesses. That's why we offer websites at a monthly price for only one year, instead of a big, expensive fee all at once. A new website can cost from $250 a month (for one year) for a simple site to $1,000 a month (for one year) for a fancy one with lots of cool features. It's like buying a car - you can get a basic model or a luxury one with all the extras. Check out our pricing page to see what fits your needs!",
            },
          },
          {
            "@type": "Question",
            name: "How much does a custom web design cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "A custom web design is like getting a tailor-made suit. It starts at $300 a month (for one year) for a simple site and can go up to $1,000 a month (for one year) or more if you want all the bells and whistles. Our pricing page has all the details.",
            },
          },
          {
            "@type": "Question",
            name: "How much does a templated web design cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Think of a templated design like buying clothes off the rack. For a small website with 1-3 pages, it's about $200 a month. Bigger sites will cost more. Take a look at our pricing page to get a better idea.",
            },
          },
          {
            "@type": "Question",
            name: "How long will it take to get a new website?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "For simple websites, about 1-2 weeks. For fancier sites, 4-12 weeks. It all depends on how complicated your website needs to be.",
            },
          },
          {
            "@type": "Question",
            name: "What are the pros and cons of a custom web design?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Pros:\n\nIt's unique, for your business only\nIt fits your needs perfectly\nYou can make it do exactly what you want\nCons:\n\nIt costs more money\nIt takes longer to make\nYou might need more help to update it",
            },
          },
          {
            "@type": "Question",
            name: "What are the pros and cons of a template web design?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Pros:\n\nIt costs less money\nIt's faster to set up\nIt's easier to update yourself\nCons:\n\nIt might look similar to other websites\nIt might not have all the features you want\nYou have less control over how it looks",
            },
          },
          {
            "@type": "Question",
            name: "Are your web designs responsive / mobile-friendly?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes! Our websites work great on phones and tablets, just like they do on computers.",
            },
          },
          {
            "@type": "Question",
            name: "Can you build an e-commerce website?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Absolutely! We can make websites where you can sell stuff online.",
            },
          },
          {
            "@type": "Question",
            name: "Can you build websites with extra functionalities?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "You bet! We can add cool stuff like member-only areas, blogs, appointment booking, photo galleries, forms, social media connections, online stores, and ways to accept payments.",
            },
          },
          {
            "@type": "Question",
            name: "How do you approach website design?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "We make websites that are simple, easy to use, modern, and clean. We focus on making your business look great and work well for your customers, not just on making it look pretty.",
            },
          },
          {
            "@type": "Question",
            name: "Do you do website redesigns?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we can give your old website a makeover!",
            },
          },
          {
            "@type": "Question",
            name: "Can I update the website myself?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Definitely! We'll teach you how to do it, it's pretty easy.",
            },
          },
          {
            "@type": "Question",
            name: "Are the websites you build accessible?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "We make sure our websites are easy for everyone to use. If you need extra special features for accessibility, we can add those too.",
            },
          },
          {
            "@type": "Question",
            name: "Do you build mobile-friendly sites?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, all our sites work great on phones and tablets.",
            },
          },
          {
            "@type": "Question",
            name: "Which website builder is best?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "We like to use WordPress. It's like the Swiss Army knife of website builders.",
            },
          },
          {
            "@type": "Question",
            name: "Who hosts the website?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "For simple websites, we take care of it. For bigger sites with WordPress, you'll need to host it yourself, but we'll help you set it up.",
            },
          },
          {
            "@type": "Question",
            name: "Do you work with everyone?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "We work with all kinds of businesses, especially those in Niagara.",
            },
          },
          {
            "@type": "Question",
            name: "Do I provide the content for my website?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes, you know your business best! But if you need help, we can lend a hand for an extra fee.",
            },
          },
          {
            "@type": "Question",
            name: "How much input do I have?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Lots! It's like building with Lego - we'll work together to make sure you love the final product.",
            },
          },
          {
            "@type": "Question",
            name: "What if I need help after my website is live?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Don't worry, we've got your back! We'll be here to help you if you need us.",
            },
          },
        ],
      },
      {
        "@type": "Product",
        name: "Web Design Services",
        description:
          "Professional Niagara web design services to help your business stand out online.",
        image:
          "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
        brand: {
          "@type": "Brand",
          name: "Infused Agency",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "CAD",
          price: "300",
          url: "https://infused.agency/pricing",
        },
      },
      {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "35",
        itemReviewed: {
          "@type": "LocalBusiness",
          name: "Infused Agency",
          image:
            "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
          telephone: "(905) 933-3115",
          address: {
            "@type": "PostalAddress",
            streetAddress: "73 Alexandra Blvd",
            addressLocality: "St. Catharines",
            addressRegion: "ON",
            postalCode: "L2P 1K2",
          },
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sam Visca",
        },
        datePublished: "2024-01-01",
        reviewBody:
          "Working with JD was a pleasure. He was extremely responsive and informative from start to finish. JD is creative, efficient, and very knowledgeable in his field.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        itemReviewed: {
          "@type": "LocalBusiness",
          name: "Infused Agency",
          image:
            "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
          telephone: "(905) 933-3115",
          address: {
            "@type": "PostalAddress",
            streetAddress: "73 Alexandra Blvd",
            addressLocality: "St. Catharines",
            addressRegion: "ON",
            postalCode: "L2P 1K2",
          },
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Bianca Brews",
        },
        datePublished: "2024-01-01",
        reviewBody:
          "Working with JD is an absolute pleasure. As well as being highly knowledgable in the fields of web design and SEO, he is also a great communicator and always ready to answer any questions you might have about the process. If you are looking for an expert web designer for your business, I couldn’t recommend JD more highly.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        itemReviewed: {
          "@type": "LocalBusiness",
          name: "Infused Agency",
          image:
            "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
          telephone: "(905) 933-3115",
          address: {
            "@type": "PostalAddress",
            streetAddress: "73 Alexandra Blvd",
            addressLocality: "St. Catharines",
            addressRegion: "ON",
            postalCode: "L2P 1K2",
          },
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Kaitlin Jamieson",
        },
        datePublished: "2024-01-01",
        reviewBody:
          "JD and the Infused Agency is masterful with his web designs and SEO services. He's professional, knowledgeable, and always there to answer any questions. After working with him, I'd highly recommend him to anyone needing a new or updated site, or wanting to rank up on google searches.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        itemReviewed: {
          "@type": "LocalBusiness",
          name: "Infused Agency",
          image:
            "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
          telephone: "(905) 933-3115",
          address: {
            "@type": "PostalAddress",
            streetAddress: "73 Alexandra Blvd",
            addressLocality: "St. Catharines",
            addressRegion: "ON",
            postalCode: "L2P 1K2",
          },
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Graham Boaretti",
        },
        datePublished: "2024-01-01",
        reviewBody:
          "JD did a fantastic job on my website. He was easy to work with, always very quick to respond and made designing the page very simple. I would highly recommend JD for all of your web design and development needs!",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        itemReviewed: {
          "@type": "LocalBusiness",
          name: "Infused Agency",
          image:
            "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
          telephone: "(905) 933-3115",
          address: {
            "@type": "PostalAddress",
            streetAddress: "73 Alexandra Blvd",
            addressLocality: "St. Catharines",
            addressRegion: "ON",
            postalCode: "L2P 1K2",
          },
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Melissa Cundell",
        },
        datePublished: "2024-01-01",
        reviewBody:
          "JD did an amazing job creating a seamless website for my aesthetics clinic. He thoroughly went through each aspect of the web design and was extremely easy to talk to about small tweaks and changes I wanted to see. I felt like I had complete control over my content and design and would highly recommend his services to anyone looking for web design and SEO optimization.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        itemReviewed: {
          "@type": "LocalBusiness",
          name: "Infused Agency",
          image:
            "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
          telephone: "(905) 933-3115",
          address: {
            "@type": "PostalAddress",
            streetAddress: "73 Alexandra Blvd",
            addressLocality: "St. Catharines",
            addressRegion: "ON",
            postalCode: "L2P 1K2",
          },
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Larry Chartier",
        },
        datePublished: "2024-01-01",
        reviewBody:
          "JD is a talented designer and all around good guy. As an industry colleague, I've had the chance to observe and review JD's methods from a different perspective than that of a client. He brings fresh ideas to the table and helps his clients reach their goals by implementing a well thought through strategy. If you're looking for someone that is reliable, honest and focused on helping you grow your business, definitely give Infused Agency a call.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        itemReviewed: {
          "@type": "LocalBusiness",
          name: "Infused Agency",
          image:
            "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
          telephone: "(905) 933-3115",
          address: {
            "@type": "PostalAddress",
            streetAddress: "73 Alexandra Blvd",
            addressLocality: "St. Catharines",
            addressRegion: "ON",
            postalCode: "L2P 1K2",
          },
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Shruti Tangirala",
        },
        datePublished: "2024-01-01",
        reviewBody:
          "JD is a pleasure to work with! He is very prompt with his responses and takes feedback extremely well. I definitely recommend working with Infused Agency.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        itemReviewed: {
          "@type": "LocalBusiness",
          name: "Infused Agency",
          image:
            "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
          telephone: "(905) 933-3115",
          address: {
            "@type": "PostalAddress",
            streetAddress: "73 Alexandra Blvd",
            addressLocality: "St. Catharines",
            addressRegion: "ON",
            postalCode: "L2P 1K2",
          },
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Gordie Scott",
        },
        datePublished: "2024-01-01",
        reviewBody:
          "I've had the pleasure of meeting up and working with JD in the past. He knows his stuff, is very reliable and is committed to quality. If you're based in Niagara and need any web design or SEO work done, he's your guy.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        itemReviewed: {
          "@type": "LocalBusiness",
          name: "Infused Agency",
          image:
            "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
          telephone: "(905) 933-3115",
          address: {
            "@type": "PostalAddress",
            streetAddress: "73 Alexandra Blvd",
            addressLocality: "St. Catharines",
            addressRegion: "ON",
            postalCode: "L2P 1K2",
          },
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Stephen White",
        },
        datePublished: "2024-01-01",
        reviewBody:
          "After searching for some time for someone to help me revise my website and improve the SEO ranking I connected with JD.  He responded very promptly to my initial query, and was extremely professional in his dealings with me.  I especially appreciated the details in his contract around how the work would be completed, and what he could and couldn’t do for me.  Being offered different pricing options was unique and helped in prioritizing my requirements within a tight timeframe.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        itemReviewed: {
          "@type": "LocalBusiness",
          name: "Infused Agency",
          image:
            "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
          telephone: "(905) 933-3115",
          address: {
            "@type": "PostalAddress",
            streetAddress: "73 Alexandra Blvd",
            addressLocality: "St. Catharines",
            addressRegion: "ON",
            postalCode: "L2P 1K2",
          },
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Marlena Riddell",
        },
        datePublished: "2024-01-01",
        reviewBody:
          "JD and I have worked alongside together for years. As a web designer and developer, he brings innovative ideas to his clients, that ultimately help them prosper in the long run. He's the only Niagara web designer I'd recommend!",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        itemReviewed: {
          "@type": "LocalBusiness",
          name: "Infused Agency",
          image:
            "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
          telephone: "(905) 933-3115",
          address: {
            "@type": "PostalAddress",
            streetAddress: "73 Alexandra Blvd",
            addressLocality: "St. Catharines",
            addressRegion: "ON",
            postalCode: "L2P 1K2",
          },
        },
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
          Web Design Niagara | Affordable Pay Monthly Websites | Infused Agency
          | Website Developer St. Catharines | Niagara Web Design | Website
          Design Niagara, Niagara Falls Web Design Company, Niagara Web
          Designer, Web Design Niagara Falls Ontario, Web Design St. Catharines,
          Website Design St. Catharines
        </title>
        <meta
          name="description"
          content="Award-winning web design Niagara company in St. Catharines. Our Niagara web design agency creates modern websites for companies across Niagara. Get your free quote today!"
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

      <section className="home-gen-leads">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Row className="text-center stats">
              <Col lg="3">
                <div className="card dark">
                  <h2>10+</h2>
                  <p>Years in Business</p>
                </div>
              </Col>
              <Col lg="3">
                <div className="card dark">
                  <h2>50+</h2>
                  <p>Clients</p>
                </div>
              </Col>
              <Col lg="3">
                <div className="card dark">
                  <h2>30+</h2>
                  <p>5-Star Reviews</p>
                </div>
              </Col>
              <Col lg="3">
                <div className="card dark">
                  <h2>50+</h2>
                  <p>Websites Created</p>
                </div>
              </Col>
            </Row>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Row className="text-center">
              <Col lg="12 pd-top-80 pd-btm-40">
                <h2>
                  We'll Take Your Website <span>To The Next Level</span>
                </h2>
              </Col>
            </Row>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Row className="text-center just-work">
              <Col lg="4">
                <div className="card">
                  <Image
                    src={traffic}
                    alt="increase niagara web design traffic"
                  />
                  <h3>Increase Traffic</h3>
                </div>
              </Col>
              <Col lg="4">
                <div className="card">
                  <Image src={leads} alt="web design niagara generate leads" />
                  <h3>Generate Leads</h3>
                </div>
              </Col>
              <Col lg="4">
                <div className="card">
                  <Image
                    src={convert}
                    alt="website design niagara convert customers"
                  />
                  <h3>Convert Customers</h3>
                </div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      <section className="home-top-web">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h2>
                  Your Niagara Web Design, Your <span>Best Sales Manager</span>.
                </h2>
                <p>
                  At Infused Agency, we make{" "}
                  <strong>Niagara website designs</strong> that are{" "}
                  <strong>easy to use and look great</strong>. From the first
                  idea to the final product, we create custom{" "}
                  <strong>Niagara web designs</strong> that show off your brand
                  and use the latest designs.
                </p>
                <p>
                  Our web design Niagara teams starts the process by working
                  with your team to figure out your business and website goals.
                  Once we know what you want, our team starts designing your new
                  website. <strong>This is a team effort</strong>, so your ideas
                  will help make your new website awesome!
                </p>

                <p>
                  We know that our clients are not website designers or
                  builders, so we make sure your site is very easy to update. We
                  use <strong>content management systems</strong> (CMS) that are
                  common and simple to use, even for people who aren't
                  tech-savvy.
                </p>

                <p>
                  We have helped Niagara businesses in St. Catharines, Niagara
                  Falls, Welland, Fort Erie, Thorold, Niagara-on-the-Lake,
                  Grimsby, Beamsville, Lincoln and beyond.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-5">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Image
                  width="503"
                  height="343"
                  priority={true}
                  className="img-fluid shadow"
                  src={heroImg}
                  alt="niagara web design"
                />
              </motion.div>
            </div>
          </div>
          <div className="row pd-top-80 align-items-center">
            <div className="col-lg-5">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  className="img-fluid shadow trust"
                  src={google}
                  alt="web design niagara"
                />
              </motion.div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h2>
                  A Web Design Niagara Agency <span>You Can Trust</span>
                </h2>
                <p>
                  Whether it's a Niagara website design for a big company or a
                  small local business, we handle the process the same way. Your
                  website is often the first thing a potential customer sees,
                  and it should <strong>show how great your business is</strong>
                  . Our modern designs are beautiful, easy to navigate, and{" "}
                  <strong>made to get you more customers.</strong>
                </p>

                <p>
                  Our process goes beyond just designing websites. We make sure
                  your website meets all of Google's Core Web Vitals standards.
                  Plus, we give every CMS clients ongoing website backups and
                  advanced security measures to{" "}
                  <strong>keep your online presence safe</strong>.
                </p>

                <ul>
                  <li>
                    Making sure your web design Niagara works on all devices
                  </li>
                  <li>
                    Helping your website show up in Google with our{" "}
                    <Link href="/niagara-seo-company">
                      Niagara SEO services
                    </Link>
                  </li>
                  <li>
                    Awesome{" "}
                    <Link href="/digital-marketing-agency-niagara">
                      digital marketing Niagara
                    </Link>{" "}
                    services to reach more people
                  </li>
                </ul>
                <p>
                  These services help turn your website into a strong tool to{" "}
                  <strong>get more leads and sales</strong>. We make websites
                  that are not only nice to look at and easy to use but also
                  help increase leads, boost sales, and{" "}
                  <strong>build trust in your business</strong>.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="row pd-top-80">
            <div className="col-lg-7">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h2>Why Choose Infused?</h2>
                <p>
                  It's simple. We have been helping businesses with their
                  Niagara web designs and SEO{" "}
                  <strong>for over ten years</strong>. This means we know what
                  works best for local companies. Our experience allows us to
                  create websites that not only look amazing but also{" "}
                  <strong>help businesses get more customers</strong>.
                </p>

                <p>
                  When you choose us, you're getting a team that{" "}
                  <strong>understands the Niagara area</strong>. We know how to
                  make your website stand out to both locals and tourists. Our
                  goal is to help your business grow by{" "}
                  <strong>attracting more visitors to your site</strong>.
                </p>

                <p>
                  With our skills in SEO, we can{" "}
                  <strong>help your website show up on Google</strong> when
                  people search for services in Niagara. This means more people
                  will find you, which can lead to more sales. We love{" "}
                  <strong>seeing our clients succeed</strong>, and we work hard
                  to make that happen!
                </p>
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
              </motion.div>
            </div>
            <div className="col-lg-5">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
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
                    Infused did a fantastic job on my website. They were easy to
                    work with, always very quick to respond and made designing
                    the page very simple. I would highly recommend them for all
                    of your web design and development needs!
                  </p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d746188.552481925!2d-80.00600478031573!3d43.06669410655857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d34c9ec993deb7%3A0xef7f46930d192396!2sRegional%20Municipality%20of%20Niagara%2C%20ON!5e0!3m2!1sen!2sca!4v1725930892210!5m2!1sen!2sca"
                  width="100%"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-services">
        <div className="container">
          <div className="row pd-btm-40">
            <div className="col-lg-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h2>
                  Niagara Website Design That Makes An <span>Impact</span>
                </h2>
                <p>
                  Our web design, optimization, and SEO solutions help bring you
                  more leads through your website.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Row One */}
            <div className="row">
              <div className="col-lg-4 d-flex">
                <Link href="/web-design">
                  <div className="card">
                    <h2>Web Design</h2>
                    <p>
                      Is your Niagara website design not bringing you customers?
                      We make responsive design websites that turn visitors into
                      customers.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 d-flex">
                <Link
                  href="/digital-marketing-agency-niagara"
                  className="d-flex"
                >
                  <div className="card">
                    <h2>Digital Marketing</h2>
                    <p>
                      Is your Niagara web design not driving sales? We design
                      and build effective digital marketing campaigns.
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
                <Link href="/website-conversion-optimization">
                  <div className="card">
                    <h2>Conversion Optimization</h2>
                    <p>
                      Is your website not getting you new customers? Our team
                      will fix the problems and make your website better at
                      turning visitors into customers.
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
                      create custom WordPress sites just for your business
                      needs.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 d-flex">
                <Link href="/services" className="d-flex">
                  <div className="card">
                    <h2>Shopify &amp; WordPress E-Commerce</h2>
                    <p>
                      Is your website not able to sell your products? We can
                      help you get more sales by setting up online selling for
                      you.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="home-work">
        <Container>
          <Row className="text-center pd-btm-40">
            <Col lg="12">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h2>
                  <span>Featured</span> Niagara Web Design & SEO Project
                </h2>
                <h3>KD Flowers</h3>
              </motion.div>
            </Col>
          </Row>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Row className="align-items-center">
              <Col lg="6">
                <Image
                  className="img-fluid"
                  src={workJerrys}
                  alt="web design niagara kd flowers"
                />
              </Col>
              <Col lg="6">
                <p>
                  KD Flowers approached us because they did not have a website.
                  They wanted a sleek, modern design for their wedding floral
                  business, and to also rank well enough in Google where they
                  were start booking weddings.
                </p>
              </Col>
            </Row>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Row className="pd-top-40">
              <Col lg="12">
                <h2>The Challenge</h2>
                <p>
                  KD Flowers had a problem: they had no website, no online
                  presence, and when people were looking for a wedding florist
                  in Niagara through Google, their website was nowhere to be
                  found.
                </p>

                <h2>Our Niagara Website Design Solution</h2>
                <p>
                  We knew they wanted their customers to find things easily on
                  their site. We also knew that they wanted more customers from
                  Google. So, we made a modern website that looks great and
                  ranks well in Google.
                </p>
                <p>
                  We added a lead form, made the site secure, and made sure it
                  loads super fast.
                </p>

                <h2>The Result</h2>
                <p>
                  Since we launched their new website, their business has taken
                  off. This happened because the new design is better, the site
                  is faster, and it ranks on the first page of Google for many
                  keyword searches.
                </p>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      <section className="home-faq">
        <Container>
          <Row className="text-center pd-btm-40">
            <Col lg="12">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h2>
                  <span>Frequently Asked</span> Web Design Niagara Questions{" "}
                </h2>
              </motion.div>
            </Col>
          </Row>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Row>
              <Col lg="12">
                <h3>How much does a new website cost?</h3>
                <p>
                  We make high-quality web designs affordable for Niagara
                  businesses. That's why we offer websites at a{" "}
                  <strong>monthly price for only one year</strong>, instead of a
                  big, expensive fee all at once. A new website can cost from
                  $250 a month (for one year) for a simple site to $1,000 a
                  month (for one year) for a fancy one with lots of cool
                  features. It's like buying a car - you can get a basic model
                  or a luxury one with all the extras. Check out our{" "}
                  <Link href="/pricing">pricing page</Link> to see what fits
                  your needs!
                </p>

                <h3>How much does a custom web design cost?</h3>
                <p>
                  A custom web design is like getting a tailor-made suit. It
                  starts at $300 a month (for one year) for a simple site and
                  can go up to $1,000 a month (for one year) or more if you want
                  all the bells and whistles. Our{" "}
                  <Link href="/pricing">pricing page</Link> has all the details.
                </p>

                <h3>How much does a templated web design cost?</h3>
                <p>
                  Think of a templated design like buying clothes off the rack.
                  For a small website with 1-3 pages, it's about $200 a month.
                  Bigger sites will cost more. Take a look at our{" "}
                  <Link href="/pricing">pricing page</Link> to get a better
                  idea.
                </p>

                <h3>How long will it take to get a new website?</h3>
                <p>
                  For simple websites, about 1-2 weeks. For fancier sites, 4-12
                  weeks. It all depends on how complicated your website needs to
                  be.
                </p>

                <h3>What are the pros and cons of a custom web design?</h3>
                <p>
                  <strong>Pros:</strong>
                </p>
                <ul>
                  <li>It's unique, for your business only</li>
                  <li>It fits your needs perfectly</li>
                  <li>You can make it do exactly what you want</li>
                </ul>
                <p>
                  <strong>Cons:</strong>
                </p>
                <ul>
                  <li>It costs more money</li>
                  <li>It takes longer to make</li>
                  <li>You might need more help to update it</li>
                </ul>

                <h3>What are the pros and cons of a template web design?</h3>
                <p>
                  <strong>Pros:</strong>
                </p>
                <ul>
                  <li>It costs less money</li>
                  <li>It's faster to set up</li>
                  <li>It's easier to update yourself</li>
                </ul>
                <p>
                  <strong>Cons:</strong>
                </p>
                <ul>
                  <li>It might look similar to other websites</li>
                  <li>It might not have all the features you want</li>
                  <li>You have less control over how it looks</li>
                </ul>

                <h3>Are your web designs responsive / mobile-friendly?</h3>
                <p>
                  Yes! Our websites work great on phones and tablets, just like
                  they do on computers.
                </p>

                <h3>Can you build an e-commerce website?</h3>
                <p>
                  Absolutely! We can make websites where you can sell stuff
                  online.
                </p>

                <h3>Can you build websites with extra functionalities?</h3>
                <p>
                  You bet! We can add cool stuff like member-only areas, blogs,
                  appointment booking, photo galleries, forms, social media
                  connections, online stores, and ways to accept payments.
                </p>

                <h3>How do you approach website design?</h3>
                <p>
                  We make websites that are simple, easy to use, modern, and
                  clean. We focus on making your business look great and work
                  well for your customers, not just on making it look pretty.
                </p>

                <h3>Do you do website redesigns?</h3>
                <p>Yes, we can give your old website a makeover!</p>

                <h3>Can I update the website myself?</h3>
                <p>
                  Definitely! We'll teach you how to do it, it's pretty easy.
                </p>

                <h3>Are the websites you build accessible?</h3>
                <p>
                  We make sure our websites are easy for everyone to use. If you
                  need extra special features for accessibility, we can add
                  those too.
                </p>

                <h3>Do you build mobile-friendly sites?</h3>
                <p>Yes, all our sites work great on phones and tablets.</p>

                <h3>Which website builder is best?</h3>
                <p>
                  We like to use WordPress. It's like the Swiss Army knife of
                  website builders.
                </p>

                <h3>Who hosts the website?</h3>
                <p>
                  For simple websites, we take care of it. For bigger sites with
                  WordPress, you'll need to host it yourself, but we'll help you
                  set it up.
                </p>

                <h3>Do you work with everyone?</h3>
                <p>
                  We work with all kinds of businesses, especially those in
                  Niagara.
                </p>

                <h3>Do I provide the content for my website?</h3>
                <p>
                  Yes, you know your business best! But if you need help, we can
                  lend a hand for an extra fee.
                </p>

                <h3>How much input do I have?</h3>
                <p>
                  Lots! It's like building with Lego - we'll work together to
                  make sure you love the final product.
                </p>

                <h3>What if I need help after my website is live?</h3>
                <p>
                  Don't worry, we've got your back! We'll be here to help you if
                  you need us.
                </p>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      <section className="home-blog">
        <Container>
          <Row>
            <Col lg="12">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="title">Latest Blog Posts</h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-areas pd-top-120 pd-btm-120">
        <Container>
          <Row>
            <Col lg="12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h2>Delivering Web Design Services in Niagara To:</h2>
                <Link href="/beamsville-web-design">Beamsville, ON</Link>{" "}
                <span>|</span>{" "}
                <Link href="/crystal-beach-web-design">Crystal Beach, ON</Link>{" "}
                <span>|</span>{" "}
                <Link href="/fonthill-web-design">Fonthill, ON</Link>{" "}
                <span>|</span>{" "}
                <Link href="/fort-erie-web-design">Fort Erie, ON</Link>{" "}
                <span>|</span>{" "}
                <Link href="/grimsby-web-design">Grimsby, ON</Link>{" "}
                <span>|</span> <Link href="/">Niagara Falls, ON</Link>{" "}
                <span>|</span> <Link href="/">Niagara-on-the-Lake, ON</Link>{" "}
                <span>|</span>{" "}
                <Link href="/port-colborne-web-design">Port Colborne, ON</Link>{" "}
                <span>|</span> <Link href="/">St. Catharines, ON</Link>{" "}
                <span>|</span>{" "}
                <Link href="/thorold-web-design">Thorold, ON</Link>{" "}
                <span>|</span>{" "}
                <Link href="/wainfleet-web-design">Wainfleet, ON</Link>{" "}
                <span>|</span>{" "}
                <Link href="/web-design-welland">Welland, ON</Link>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta home-cta">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h2>
                  Ready to <span>Grow Your Niagara Business</span>?
                </h2>
                <p>Get your free Niagara web design quote below!</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
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
