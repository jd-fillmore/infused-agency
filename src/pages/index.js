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
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https:/infused.agency/#organization",
        name: "Infused Agency",
        legalName: "Infused Agency",
        url: "https:/infused.agency/",
        description:
          "Infused Agency is a web design agency based in St. Catharines, Niagara that utilizes SEO, content creation, and conversion tactics to help businesses succeed online. Contact us today for affordable web design that drives results.",
        disambiguatingDescription:
          "Infused Agency, a leading website designer and SEO agency based in St. Catharines, Niagara, offers affordable web design services for businesses of all sizes across Ontario and nationwide. With over 10 years of experience helping local and national brands expand their digital presence, we provide custom web design, SEO, digital marketing, and more to drive results for our clients. Our services include website design where we create stunning, conversion-focused websites tailored to your brand and goals, starting at just $499. Our design process emphasizes critical SEO best practices to boost organic traffic. We also offer search engine optimization SEO provided by our experts who develop targeted keyword strategies and on-page optimization to improve your rankings on Google and other search engines. We specialize in local SEO to help St. Catharines and Niagara businesses reach more nearby customers by providing services like listing optimization, review generation, citation building, and other location-based tactics. Additionally, our talented team of writers and designers produce engaging blogs, videos, graphics and more as part of our content creation services which aim to answer customer questions and establish your brand as an industry authority. Finally, we manage and optimize Google Ads and Facebook ad campaigns through our paid ads services which are designed to cost-effectively drive conversions and sales for our clients. Contact us today to schedule a strategy call to discuss how our web design and digital marketing services can help grow your business online. With customized solutions for any budget, Infused Agency is your partner for affordable and effective web design in Niagara!",
        mainEntityOfPage: "https://en.wikipedia.org/wiki/Web_design",
        foundingDate: "2013",
        foundingLocation: {
          "@type": "Place",
          geo: {
            "@type": "GeoCoordinates",
            latitude: "43.159537950696716",
            longitude: "-79.21376319632402",
          },
          name: "Infused Agency",
        },
        actionableFeedbackPolicy: "https://infused.agency/privacy-policy/",
        areaServed: [
          "St. Catharines, ON",
          "Niagara, ON",
          "Niagara Region, ON",
          "Beamsville, ON",
          "Crystal Beach, ON",
          "Fonthill, ON",
          "Fort Erie, ON",
          "Grimsby, ON",
          "Niagara Falls, ON",
          "Niagara-on-the-Lake, ON",
          "Port Colborne, ON",
          "St. Catharines, ON",
          "Thorold, ON",
          "Wainfleet, ON",
          "Welland, ON",
        ],
        award: [
          "2024 Best Web Design in St. Catharines",
          "2024 Best Web Design in Niagara",
          "2024 Best Website Design",
          "2024 Best Local Business Web Design",
          "2024 Best Web Design Agency",
          "2024 Best Cheap Web Design",
          "2024 Best SEO Agency",
          "2024 Best SEO in Niagara",
          "2024 Best SEO in St. Catharines",
        ],
        brand: ["Web Design", "Infused Agency"],
        knowsAbout: [
          "web design",
          "website design",
          "Wordpress",
          "local websites",
          "SEO",
          "digital marketing",
          "local SEO",
        ],
        founder: {
          "@type": "Person",
          name: "JD Fillmore",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "73 Alexandra Blvd",
          addressLocality: "St. Catharines",
          addressRegion: "ON",
          postalCode: "L2P 1K2",
          addressCountry: "CAD",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: "[905-933-3115]",
          availableLanguage: ["English", "ASL"],
          email: "hello@infused.agency",
        },
        sameAs: [
          "https://www.facebook.com/infused.agency",
          "https://www.hotfrog.ca/company/9a5d8745ba57d4499b16df3d144dae56/infused-agency/st-catharines/web-design",
          "https://x.com/infusedagency",
          "https://www.instagram.com/infusedweb/",
          "https://digitalmainstreet.ca/vendor/infused-agency/",
          "https://about.me/infused0",
          "https://www.crunchbase.com/organization/infused-agency",
          "https://www.yellowpages.ca/bus/Ontario/St-Catharines/Infused-Agency/101902875.html",
          "https://www.mapquest.com/ca/ontario/infused-agency-456469990",
          "https://www.google.com/maps/place/Infused+Agency+%7C+Digital+Marketing,+SEO,+Niagara+Web+Design/@43.1525695,-79.2103468,17z/data=!3m1!4b1!4m6!3m5!1s0x89d3507111975161:0x18a1198be6280a70!8m2!3d43.1525695!4d-79.2077719!16s%2Fg%2F11gfndyfvl?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D",
          "https://www.bing.com/maps?q=infused+agency&FORM=HDRSC6&cp=43.152616%7E-79.207799&lvl=16.0",
          "https://professionelle.ca/1774727816813218416/",
          "https://www.goodfirms.co/company/infused-agency",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://infused.agency/#localbusiness",
        name: "Infused Agency",
        description:
          "Infused Agency is a web design agency based in St. Catharines, Niagara that utilizes SEO, content creation, and conversion tactics to help businesses succeed online. Call us today for affordable web design that drives results.",
        disambiguatingDescription:
          "Infused Agency, a leading website designer and SEO agency based in Novi, MI, offers affordable web design services for businesses of all sizes across Michigan and nationwide. With over 10 years of experience helping local and national brands expand their digital presence, we provide custom web design, SEO, digital marketing, and more to drive results for our clients. Our services include website design where we create stunning, conversion-focused websites tailored to your brand and goals, starting at just $499. Our design process emphasizes critical SEO best practices to boost organic traffic. We also offer search engine optimization SEO provided by our experts who develop targeted keyword strategies and on-page optimization to improve your rankings on Google and other search engines. We specialize in local SEO to help Michigan businesses reach more nearby customers by providing services like listing optimization, review generation, citation building, and other location-based tactics. Additionally, our talented team of writers and designers produce engaging blogs, videos, graphics and more as part of our content creation services which aim to answer customer questions and establish your brand as an industry authority. Finally, we manage and optimize Google Ads and Facebook ad campaigns through our paid ads services which are designed to cost-effectively drive conversions and sales for our clients. Contact us today to schedule a strategy call to discuss how our web design and digital marketing services can help grow your business online. With customized solutions for any budget, Infused Agency is your partner for affordable and effective web design in Michigan!",
        mainEntityOfPage: "https://infused.agency/",
        sameAs: [
          "https://www.facebook.com/infused.agency",
          "https://www.hotfrog.ca/company/9a5d8745ba57d4499b16df3d144dae56/infused-agency/st-catharines/web-design",
          "https://x.com/infusedagency",
          "https://www.instagram.com/infusedweb/",
          "https://digitalmainstreet.ca/vendor/infused-agency/",
          "https://about.me/infused0",
          "https://www.crunchbase.com/organization/infused-agency",
          "https://www.yellowpages.ca/bus/Ontario/St-Catharines/Infused-Agency/101902875.html",
          "https://www.mapquest.com/ca/ontario/infused-agency-456469990",
          "https://www.google.com/maps/place/Infused+Agency+%7C+Digital+Marketing,+SEO,+Niagara+Web+Design/@43.1525695,-79.2103468,17z/data=!3m1!4b1!4m6!3m5!1s0x89d3507111975161:0x18a1198be6280a70!8m2!3d43.1525695!4d-79.2077719!16s%2Fg%2F11gfndyfvl?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D",
          "https://www.bing.com/maps?q=infused+agency&FORM=HDRSC6&cp=43.152616%7E-79.207799&lvl=16.0",
          "https://professionelle.ca/1774727816813218416/",
          "https://www.goodfirms.co/company/infused-agency",
        ],
        logo:
          "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
        address: {
          "@type": "PostalAddress",
          streetAddress: "73 Alexandra Blvd",
          addressLocality: "St. Catharines",
          addressRegion: "ON",
          postalCode: "L2P 1K2",
          addressCountry: "CAD",
        },
        image:
          "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
        currenciesAccepted: "CAD",
        telePhone: "905-933-3115",
        url: "https://infused.agency/",
        email: "hello@infused.agency",
        knowsLanguage: ["English", "ASL"],
        knowsAbout: [
          "web design near me",
          "website designer near me",
          "web design niagara",
          "website designer niagara",
          "web developer niagara",
          "SEO agency niagara",
          "web design st. catharines",
          "website designer st. catharines",
          "web developer st. catharines",
          "SEO agency st. catharines",
          "SEO agency near me",
          "SEO agency",
          "marketing agency in niagara",
          "marketing agency",
          "digital marketing",
          "internet marketing",
        ],
        paymentAccepted: ["cash", "credit card"],
        location: "Niagara",
        slogan: "Web Design just got a whole lot better",
        hasMap:
          "https://maps.google.com/maps?ll=43.15257,-79.207772&z=16&t=m&hl=en&gl=CA&mapclient=embed&cid=1774727816813218416",
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
        geo: {
          "@type": "GeoCoordinates",
          latitude: "43.159537950696716",
          longitude: "-79.21376319632402",
        },
        priceRange: "$",
      },
      {
        "@type": "WebSite",
        "@id": "https://infused.agency/#website",
        url: "https://infused.agency/",
        name: "Infused Agency",
        alternateName: "Infused Agency Niagara",
        description:
          "Infused Agency is a web design agency based in St. Catharines, Niagara that utilizes SEO, content creation, and conversion tactics to help businesses succeed online. Call us today for affordable web design that drives results.",
        identifier: "https://www.wikidata.org/wiki/Q66783449",
        image:
          "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
        mainEntityOfPage: "https://en.wikipedia.org/wiki/Web_design",
        publisher: {
          "@type": "Organization",
          "@id": "https://infused.agency/#organization",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ImageObject",
        "@id":
          "https://infused.agency/_next/static/media/infused-logo.6971b904.png#image",
        inLanguage: "en-US",
        url:
          "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
        width: 82,
        height: 17,
        caption: "Best Web Design in Niagara",
      },
      {
        "@type": "WebPage",
        "@id": "https://infused.agency/#webpage",
        headline: "Infused Agency | Web Designer in Novi, MI",
        url: "https://infused.agency/",
        lastReviewed: "2023/11/12",
        relatedLink: [
          "https://www.wikidata.org/wiki/Q190637",
          "https://www.wikidata.org/wiki/Q113499206",
          "https://www.wikidata.org/wiki/Q66783449",
          "https://www.wikidata.org/wiki/Q180711",
          "https://en.wikipedia.org/wiki/Web_design",
        ],
      },
      {
        "@type": ["Person"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "73 Alexandra Blvd",
          addressLocality: "St. Catharines",
          addressRegion: "ON",
          postalCode: "L2P 1K2",
          addressCountry: "CAD",
        },
        colleague: [
          "https://www.instagram.com/jfillmore97/",
          "https://www.facebook.com/jarryd.douglas0988",
          "https://www.linkedin.com/in/jd-fillmore/",
        ],
        email: "hello@infused.agency",
        image:
          "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
        jobTitle: "Website designer",
        name: "JD Fillmore",
        description:
          "Expert Internet Marketer and Strategist, fluent in SEM, SEO, Local Business Optimization, Competitor Research, and creative Web Design.",
        disambiguatingDescription:
          "Infused Agency is owned by website designer JD Fillmore, who founded the company over 10 years ago in St. Catharines, Niagara. JD draws on his decades of experience crafting custom websites and implementing targeted SEO strategies to help businesses small and large expand their online presence. Through Infused Agency, Plotts offers his expertise in crafting stunning, conversion-driven websites that effectively showcase brands and capture leads. He keeps his finger on the pulse of the latest SEO best practices to maximize organic visibility for his client sites. Beyond web design and SEO, Plotts heads a talented in-house team that produces engaging content across media formats and manages ROI-focused paid advertising campaigns on platforms like Google and Facebook. His personalized approach, coupled with Blue Lake's affordable and customized web solutions catered to each client's unique needs and budget, has fueled the company's expansion beyond Michigan to serve clients nationwide. Business owners can schedule a complimentary web strategy consultation with JD himself to discuss leveraging Infused Agency's full suite of website design, SEO, content production, and digital advertising services to maximize their online growth potential. JD's passion is helping brands harness the power of a well-designed web presence to drive real business results.",
        alumniOf: "Durham College",
        birthPlace: "Grimsby",
        birthDate: "1988-08-11",
        height: "69 inches",
        gender: "Male",
        memberOf: "Web Design",
        nationality: "Canadian",
        award: "Voted Top Website Designer in Niagara",
        callSign: "Digital Marketer",
        knowsAbout: [
          "web design near me",
          "website designer near me",
          "web design niagara",
          "website designer niagara",
          "web developer niagara",
          "SEO agency niagara",
          "web design st. catharines",
          "website designer st. catharines",
          "web developer st. catharines",
          "SEO agency st. catharines",
          "SEO agency near me",
          "SEO agency",
          "marketing agency in niagara",
          "marketing agency",
          "digital marketing",
          "internet marketing",
        ],
        telephone: "(905) 933-3115",
        url: "https://infused.agency",
        sameAs: [
          "https://www.instagram.com/jfillmore97/",
          "https://www.facebook.com/jarryd.douglas0988",
          "https://www.linkedin.com/in/jd-fillmore/",
        ],
      },
      {
        "@type": "Service",
        name: "Web Design",
        description:
          "Web design services expertly crafted to create visually stunning, user-friendly websites that effectively represent your brand online. Our team specializes in designing custom websites that not only look great but are also optimized for performance and user experience. We understand that a website is a crucial touchpoint for your business, and our approach is to blend aesthetics with functionality, ensuring your site not only captures attention but also facilitates smooth navigation and user engagement. With a focus on responsive design, we ensure your website looks impeccable on all devices, from desktops to smartphones. Our web design process involves a deep understanding of your business goals, target audience, and industry trends, allowing us to create a unique online presence that stands out in the digital landscape. Whether you're a small local business or a large corporation, our web design services are tailored to meet your specific needs, ensuring your website not only drives traffic but also converts visitors into loyal customers. At Infused Agency, we're committed to delivering web solutions that are not just visually appealing but also strategically designed to boost your online visibility and enhance your brand's digital footprint.",
        url: "https://infused.agency/",
      },
      {
        "@type": "Service",
        name: "SEO",
        description:
          "As an SEO agency, we offer a holistic approach to elevate your website's visibility across major search engines including Google and Bing. Our meticulous SEO or search engine optimization strategies encompass both technical on-page optimization as well as off-page optimization techniques to not only boost your rankings but drive qualified traffic that converts. We start with extensive keyword research and topic clustering to align your pages with high-traffic search terms and buyer intent. This allows us to map out a content plan focused on ranking you for the queries that capture quality visitors in your industry. Our team then optimizes all critical on-page elements - from page titles and meta descriptions to image alt text and internal linking structure - ensuring search engines clearly interpret your pages. Additionally, we execute proven link-building tactics to organically earn placements on reputable, high-authority websites within your sector. This establishes greater trust and authority signals that search algorithms rely on for favorable rankings. On top of this, our local SEO strategies such as optimizing Google My Business listings, citations and reviews build a strong presence to capture nearby traffic. With a keen eye on the latest search algorithm and ranking factor updates, our sustainable strategies even withstand Google shake-ups. Our experts regularly review reports, shifting approaches to maintain optimal rankings long-term. The end goal is not just fleeting wins, but converting search visibility into tangible ROI in the form of leads, sales and long-term success. Backed by data-driven insights, we elevate beyond the expected.",
        url: "https://infused.agency/seo/niagara",
      },
      {
        "@type": "Service",
        name: "Website Design",
        description:
          "As an award-winning web design agency, we create high-converting custom websites focused on exceptional user experiences with budget-friendly pricing. Our experienced team of designers build websites optimized to effectively represent your brand online and drive measurable results. We immerse ourselves in your industry to develop sites with engaging copy, striking graphics, and easy navigation - appealing to your target demographics. Our mobile-friendly and mobile-responsive design ensures seamless functionality across all devices. We utilize the latest website design trends like parallax scrolling, flat design, and video backgrounds. Our web development expertise includes incorporating website speed optimizations, SSL encryption, and search engine optimization best practices. With on-page SEO including meta tags, schema markup, ALT text we boost organic visibility. Conversion-centric design, calls-to-action, trust signals like testimonials and security badges maximize lead generation. Trusted by startups and Fortune 500 companies alike, we design custom websites that capture attention and drive measurable growth. With solutions scaling from informational sites to advanced platforms offering eCommerce, reservations, and member portals, we deliver stunning websites converting visitors into customers.",
        url: "https://infused.agency/web-design",
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
          Best Digital Marketing & SEO Agency in Niagara | Infused Agency
        </title>
        <meta
          name="description"
          content="Award-winning Digital Marketing & SEO Niagara Company, based in St. Catharines. Skyrocket your business' revenue. Get your free quote today!"
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
              <Col lg="4">
                <div className="card dark">
                  <h2>10+</h2>
                  <p>Years in Business</p>
                </div>
              </Col>
              <Col lg="4">
                <div className="card dark">
                  <h2>50+</h2>
                  <p>Clients</p>
                </div>
              </Col>
              <Col lg="4">
                <div className="card dark">
                  <h2>30+</h2>
                  <p>5-Star Reviews</p>
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
                  Taking Your Digital Marketing &amp; SEO{" "}
                  <span>To The Next Level</span>
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
                  <Image src={traffic} alt="increase niagara SEO traffic" />
                  <h3>Increase Traffic</h3>
                </div>
              </Col>
              <Col lg="4">
                <div className="card">
                  <Image
                    src={leads}
                    alt="digital marketing agency niagara generate leads"
                  />
                  <h3>Generate Leads</h3>
                </div>
              </Col>
              <Col lg="4">
                <div className="card">
                  <Image src={convert} alt="SEO Niagara convert customers" />
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
            <div className="col-lg-8">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h2>
                  Your Niagara Digital Marketing &amp;{" "}
                  <span>Growth Partner</span>.
                </h2>
                <p>
                  At Infused Agency, we are a top digital marketing agency in
                  Niagara. We help businesses get noticed online with our expert
                  SEO Niagara services. From creating a plan to making it
                  happen, we show off your brand and use the latest marketing
                  tricks.
                </p>

                <p>
                  Our team works with you to understand your business goals.
                  Then, we create a custom marketing plan just for you. Your
                  ideas are important, and together, we make sure your marketing
                  is awesome!
                </p>
              </motion.div>
            </div>
          </div>
          <section className="work">
            <div className="row pd-top-40">
              <div className="col-lg-6">
                <h2 className="title">
                  Recent Digital Marketing & SEO Project
                </h2>
                <h2>Cass-A-Bella Construction</h2>
                <hr />
                <div class="card">
                  <h3>After working with us:</h3>
                  <ul>
                    <li>Website Page Speed Increased By 90%</li>
                    <li>Google Search Visibility Increased by 200%</li>
                    <li>Page 1 Google Map Rankings for Multiple Keywords</li>
                    <li>Page 1 Google Rankings for Multiple Keywords</li>
                    <li>Leads Increased From 2 to 10 per month in 3 months</li>
                    <li>Increased User Experience</li>
                    <li>Increased Engagement and Conversions</li>
                    <li>Increased Brand Recognition</li>
                    <li>Faster Load Times</li>
                    <li>Streamlined collection of leads</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
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
                    alt="digital marketing agency niagara"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          <div className="row pd-top-120">
            <div className="col-lg-8">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h2>
                  A SEO Niagara Agency That
                  <br />
                  <span>Knows What They're Doing</span>.
                </h2>
                <p>
                  At Infused Agency, we are the leading SEO Niagara agency,
                  helping local businesses get found online. Our expert SEO
                  Niagara services boost your visibility and attract more
                  customers from the Niagara region.
                </p>

                <p>
                  We start by understanding your business and local market.
                  Then, we create a custom SEO strategy tailored to your needs.
                  Your input is key, and together, we make sure your online
                  presence is strong.
                </p>
              </motion.div>
            </div>
          </div>

          <section className="work">
            <div className="row pd-top-40">
              <div className="col-lg-6">
                <h2 className="title">Recent SEO Project</h2>
                <h2>Flat Rock Cellars</h2>
                <hr />
                <div class="card">
                  <h3>After working with us:</h3>
                  <ul>
                    <li>Google Search Visibility Increased by 300%</li>
                    <li>Page 1 Google Map Rankings for Multiple Keywords</li>
                    <li>Page 1 Google Rankings for Multiple Keywords</li>
                    <li>Increased User Experience</li>
                    <li>Increased Engagement and Conversions</li>
                    <li>Increased Brand Recognition</li>
                    <li>Streamlined collection of leads</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
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
                    alt="digital marketing agency niagara"
                  />
                </motion.div>
              </div>
            </div>
          </section>

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
                  Niagara digital marketing and SEO{" "}
                  <strong>for over ten years</strong>. This means we know what
                  works best for local companies. Our experience allows us to
                  create strategies that not only look amazing but also{" "}
                  <strong>help businesses get more customers</strong>.
                </p>

                <p>
                  When you choose us, you're getting a team that{" "}
                  <strong>understands the Niagara area</strong>. We know how to
                  make your online presence stand out to both locals and
                  tourists. Our goal is to help your business grow by{" "}
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
                  <Link href="/work">high-quality work</Link>, and{" "}
                  <Link href="/reviews">friendly customer service</Link>, we've
                  become a top digital marketing and SEO agency that Niagara
                  businesses trust.
                </p>

                <Image
                  className="img-fluid"
                  src={best}
                  alt="digital marketing agency niagara, SEO agency niagara"
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
                <Link href="/seo">
                  <div className="card">
                    <h2>Search Engine Optimization (SEO)</h2>
                    <p>
                      Are your customers not finding your website on Google? We
                      can help your website get found and bring you more leads.
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
                  <span>Frequently Asked</span>
                  <br />
                  Niagara Digital Marketing & SEO Questions{" "}
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
