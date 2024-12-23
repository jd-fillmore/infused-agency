import React from "react";
import { motion } from "framer-motion";
import { getLatestPosts } from "../lib/posts";
import {
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
import flatImg from "../../src/img/seo-niagara-agency.webp";
import best from "../../src/img/awards.png";

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
          "Infused Agency is a digital marketing and SEO agency based in St. Catharines, Niagara that utilizes SEO, content creation, and conversion tactics to help businesses succeed online. Contact us today for affordable web design that drives results.",
        disambiguatingDescription:
          "Infused Agency, a leading website designer and SEO agency based in St. Catharines, Niagara, offers affordable web design services for businesses of all sizes across Ontario and nationwide. With over 10 years of experience helping local and national brands expand their digital presence, we provide custom web design, SEO, digital marketing, and more to drive results for our clients. Our services include website design where we create stunning, conversion-focused websites tailored to your brand and goals, starting at just $499. Our design process emphasizes critical SEO best practices to boost organic traffic. We also offer search engine optimization SEO provided by our experts who develop targeted keyword strategies and on-page optimization to improve your rankings on Google and other search engines. We specialize in local SEO to help St. Catharines and Niagara businesses reach more nearby customers by providing services like listing optimization, review generation, citation building, and other location-based tactics. Additionally, our talented team of writers and designers produce engaging blogs, videos, graphics and more as part of our content creation services which aim to answer customer questions and establish your brand as an industry authority. Finally, we manage and optimize Google Ads and Facebook ad campaigns through our paid ads services which are designed to cost-effectively drive conversions and sales for our clients. Contact us today to schedule a strategy call to discuss how our web design and digital marketing services can help grow your business online. With customized solutions for any budget, Infused Agency is your partner for affordable and effective web design in Niagara!",
        mainEntityOfPage: "https://en.wikipedia.org/wiki/Digital_marketing",
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
          "2024 Best Digital Marketing in St. Catharines",
          "2024 Best Digital Marketing in Niagara",
          "2024 Best Digital Marketing",
          "2024 Best Local Business Digital Marketing",
          "2024 Best Digital Marketing Agency",
          "2024 Best Cheap Digital Marketing",
          "2024 Best SEO in St. Catharines",
          "2024 Best SEO in Niagara",
          "2024 Best SEO",
          "2024 Best Local Business SEO",
          "2024 Best SEO Agency",
          "2024 Best Cheap SEO",
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
          "Infused Agency is a digital marketing and SEO agency based in St. Catharines, Niagara that utilizes SEO, content creation, and conversion tactics to help businesses succeed online. Call us today for affordable web design that drives results.",
        disambiguatingDescription:
          "Infused Agency, a leading website designer and SEO agency based in St. Catharines, Niagara, offers affordable web design services for businesses of all sizes across Michigan and nationwide. With over 10 years of experience helping local and national brands expand their digital presence, we provide custom web design, SEO, digital marketing, and more to drive results for our clients. Our services include website design where we create stunning, conversion-focused websites tailored to your brand and goals, starting at just $499. Our design process emphasizes critical SEO best practices to boost organic traffic. We also offer search engine optimization SEO provided by our experts who develop targeted keyword strategies and on-page optimization to improve your rankings on Google and other search engines. We specialize in local SEO to help Michigan businesses reach more nearby customers by providing services like listing optimization, review generation, citation building, and other location-based tactics. Additionally, our talented team of writers and designers produce engaging blogs, videos, graphics and more as part of our content creation services which aim to answer customer questions and establish your brand as an industry authority. Finally, we manage and optimize Google Ads and Facebook ad campaigns through our paid ads services which are designed to cost-effectively drive conversions and sales for our clients. Contact us today to schedule a strategy call to discuss how our web design and digital marketing services can help grow your business online. With customized solutions for any budget, Infused Agency is your partner for affordable and effective web design in Michigan!",
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
          "https://www.google.com/maps/place/Infused+Agency+%7C+Local+SEO+%26+Web+Design/@43.1525734,-79.2103468,16z/data=!3m1!4b1!4m6!3m5!1s0x89d3507111975161:0x18a1198be6280a70!8m2!3d43.1525695!4d-79.2077719!16s%2Fg%2F11gfndyfvl?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
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
          "SEO near me",
          "SEO specialist near me",
          "SEO Niagara",
          "SEO expert Niagara",
          "digital marketing Niagara",
          "SEO agency Niagara",
          "SEO St. Catharines",
          "SEO expert St. Catharines",
          "digital marketing St. Catharines",
          "SEO agency St. Catharines",
          "SEO agency near me",
          "SEO agency",
          "marketing agency in Niagara",
          "marketing agency",
          "digital marketing",
          "internet marketing",
        ],
        paymentAccepted: ["cash", "credit card"],
        location: "Niagara",
        slogan: "Digital marketing and SEO just got a whole lot better",
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
          "Infused Agency is a digital marketing and SEO agency based in St. Catharines, Niagara that utilizes SEO, content creation, and conversion tactics to help businesses succeed online. Call us today for affordable web design that drives results.",
        identifier: "https://www.wikidata.org/wiki/Q180711",
        image:
          "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
        mainEntityOfPage:
          "https://en.wikipedia.org/wiki/Search_engine_optimization",
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
        caption: "Best Digital Marketing and SEO in Niagara",
      },
      {
        "@type": "WebPage",
        "@id": "https://infused.agency/#webpage",
        headline:
          "Infused Agency | Digital Marketing and SEO Agency in St. Catharines, Niagara",
        url: "https://infused.agency/",
        lastReviewed: "2023/11/12",
        relatedLink: [
          "https://www.wikidata.org/wiki/Q180711",
          "https://www.wikidata.org/wiki/Q1323528",
          "https://www.wikidata.org/wiki/Q56279965",
          "https://www.wikidata.org/wiki/Q91038239",
          "https://www.wikidata.org/wiki/Q1369723",
          "https://www.wikidata.org/wiki/Q189507",
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
          "Infused Agency is owned by digital marketing expert JD Fillmore, who founded the company over 10 years ago in St. Catharines, Niagara. JD draws on his decades of experience crafting custom websites and implementing targeted SEO strategies to help businesses small and large expand their online presence. Through Infused Agency, Plotts offers his expertise in crafting stunning, conversion-driven websites that effectively showcase brands and capture leads. He keeps his finger on the pulse of the latest SEO best practices to maximize organic visibility for his client sites. Beyond web design and SEO, Plotts heads a talented in-house team that produces engaging content across media formats and manages ROI-focused paid advertising campaigns on platforms like Google and Facebook. His personalized approach, coupled with Blue Lake's affordable and customized web solutions catered to each client's unique needs and budget, has fueled the company's expansion beyond Michigan to serve clients nationwide. Business owners can schedule a complimentary web strategy consultation with JD himself to discuss leveraging Infused Agency's full suite of website design, SEO, content production, and digital advertising services to maximize their online growth potential. JD's passion is helping brands harness the power of a well-designed web presence to drive real business results.",
        alumniOf: "Durham College",
        birthPlace: "Grimsby",
        birthDate: "1988-08-11",
        height: "69 inches",
        gender: "Male",
        memberOf: "Web Design",
        nationality: "Canadian",
        award: "Voted Top Digital Marketing and SEO Agency in Niagara",
        callSign: "Digital Marketer",
        knowsAbout: [
          "SEO near me",
          "SEO specialist near me",
          "SEO Niagara",
          "SEO expert Niagara",
          "digital marketing Niagara",
          "SEO agency Niagara",
          "SEO St. Catharines",
          "SEO expert St. Catharines",
          "digital marketing St. Catharines",
          "SEO agency St. Catharines",
          "SEO agency near me",
          "SEO agency",
          "marketing agency in Niagara",
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
            name: "What are social media ads?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "They are paid promotions on social media that help your business reach more people.",
            },
          },
          {
            "@type": "Question",
            name: "Why should I use social media ads?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "These ads help you reach a larger audience, target specific groups of people, and get more customers quickly.",
            },
          },
          {
            "@type": "Question",
            name: "How much do social media ads cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "The cost varies based on your budget. Contact us today for a free consult and free quote.",
            },
          },
          {
            "@type": "Question",
            name: "How do you create effective ads?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "We use eye-catching images or videos, write clear and engaging text, and target the right audience to create effective ads.",
            },
          },
          {
            "@type": "Question",
            name: "How do you target the right audience with these ads?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "We use targeting options like age, location, interests, and behaviors to show your ads to people who are most likely to be interested in your business.",
            },
          },
          {
            "@type": "Question",
            name: "How long does it take to see results from these ads?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "You can start seeing results within a few days, but it often takes a few weeks to see the full impact.",
            },
          },
          {
            "@type": "Question",
            name: "What should I expect in terms of results?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Results can include more website visits, more leads or sales, and increased brand awareness.",
            },
          },
          {
            "@type": "Question",
            name: "How do you measure the success of the ads?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "We look at metrics like clicks, conversions, cost per click, and return on ad spend to measure success.",
            },
          },
          {
            "@type": "Question",
            name: "What is SEO, and why is it important for my website?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "SEO means making your website better so it appears higher in search engine results. This helps more people find your site.",
            },
          },
          {
            "@type": "Question",
            name: "What are the main factors that influence SEO rankings?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Important factors include using the right keywords, having a fast website, and getting other websites to link to yours.",
            },
          },
          {
            "@type": "Question",
            name: "How much does SEO cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "This entirely depends on both the length of the SEO campaign, and the work involved. Contact us today for a free consult and free quote.",
            },
          },
          {
            "@type": "Question",
            name:
              "How do you perform keyword research, and how do you determine which keywords to target?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "We find words people use to search for your type of business and choose ones that can bring you more visitors.",
            },
          },
          {
            "@type": "Question",
            name:
              "What is on-page SEO, and how does it differ from off-page SEO?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "On-page SEO means improving things on your website, like text and images. Off-page SEO means getting other websites to link to yours.",
            },
          },
          {
            "@type": "Question",
            name: "How do you handle technical SEO issues on a website?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "We fix problems like slow loading times, broken links, and mobile-friendliness to improve your site’s performance.",
            },
          },
          {
            "@type": "Question",
            name: "Can you guarantee my website will rank #1 on Google?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "No one can promise a #1 spot, but we can improve your chances with good SEO practices.",
            },
          },
          {
            "@type": "Question",
            name: "How do backlinks impact my website’s SEO?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Backlinks are links from other websites to yours. They show Google your site is trusted.",
            },
          },
          {
            "@type": "Question",
            name:
              "What tools or software do you use for SEO analysis and reporting?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "We use tools like Google Analytics and SEO software to check your website’s performance and give you reports.",
            },
          },
          {
            "@type": "Question",
            name:
              "What are the potential risks of SEO, and how do you mitigate them?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Risks include using bad practices that can get your site penalized by Google. We use safe, proven methods to avoid this.",
            },
          },
          {
            "@type": "Question",
            name:
              "How do you approach local SEO, especially for service-based businesses?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "We focus on local keywords, get your business listed on Google Maps, and gather positive reviews to improve local rankings.",
            },
          },
          {
            "@type": "Question",
            name: "What is your process for auditing a website's SEO?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "We check your site’s health, look at keywords, see how it performs, and find areas to improve.",
            },
          },
          {
            "@type": "Question",
            name:
              "What is the role of content in SEO, and how do you create SEO-friendly content?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Content is key. We write helpful, interesting articles with the right keywords to attract visitors.",
            },
          },
          {
            "@type": "Question",
            name:
              "How do you stay updated with the latest changes in search engine algorithms?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "We follow SEO news, read updates from search engines, and test new strategies to keep up.",
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
        SEO Niagara, ON | St. Catharines Search Engine Optimization
        </title>
        <meta
          name="description"
          content="Expert SEO Niagara services that boost your businesses visibility. Leading St. Catharines SEO agency offering marketing, optimization, and consulting solutions."
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
        <div className="container pd-btm-120">
          <div className="row">
            <div className="col-lg-8">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h2>
                  Local SEO Marketing Services based in St. Catharines
                </h2>
                <p>
                  At Infused Agency, we provide top <strong>SEO Niagara</strong> services hailing from St. Catharines. We help businesses get noticed online with our expert
                  search engine optimization services. From creating a plan to making it
                  happen, our SEO marketing services can make your website more visible, when people search for what you offer.
                </p>
                <p>
                Our team works closely with you to understand your local business goals. We then develop a customized local search engine optimization strategy to help you rank higher in search results and attract more customers in your area. Your input is essential, and together, we ensure your business gets the online visibility it deserves!
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        {/* Container End*/}
        {/* Container Start*/}
        <section className="dark pd-top-120">
          <div className="container">
            <section className="work pd-btm-120">
              <div className="row pd-top-40">
                <div className="col-lg-6">
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="title">Recent Project</h2>
                    <h2>Flat Rock Cellars</h2>
                    <hr />
                    <div class="card">
                      <h3>After hiring us:</h3>
                      <ul>
                        <li>Local Google Search Visibility Increased by 300%</li>
                        <li>
                          Page 1 Google Map Rankings for Multiple Keywords
                        </li>
                        <li>Page 1 Google Rankings for Multiple Keywords</li>
                        <li>Increased User Experience</li>
                        <li>Increased Engagement and Conversions</li>
                        <li>Increased Brand Recognition</li>
                        <li>Streamlined collection of leads</li>
                      </ul>
                    </div>
                  </motion.div>
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
                      src={flatImg}
                      alt="seo niagara agency"
                    />
                  </motion.div>
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* Container End*/}
        {/* Container Start*/}
        <div className="container">
          <div className="row pd-top-120">
            <div className="col-lg-7">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h2>Why Choose Infused As Your Niagara SEO Agency?</h2>
                <p>
                  It's simple. Our <strong>SEO Agency in Niagara</strong> has been helping businesses with their
                  search engine optimization{" "}
                  for over ten years. This means our local <strong>SEO Niagara</strong> expert consultants know what
                  works best for local companies when it comes to creating local SEO strategies. Our experience allows us to
                  create local SEO strategies that not only look amazing but also{" "}
                  help businesses get more customers.
                </p>

                <p>
                  When you choose us, you're getting a team that{" "}
                  understands the area. We know how to
                  make your online presence stand out to both locals and
                  tourists. Our goal is to help your business grow by{" "}
                  attracting more visitors to your site.
                </p>

                <p>
                  With our <strong>SEO Niagara</strong> skills, we can{" "}
                  help your website show up on Google when
                  people search for services in St. Catharines and beyond. This means more people
                  will find you, which can lead to more sales. We love{" "}
                  seeing our clients succeed, and we work hard
                  to make that happen!
                </p>

                <p>
                  With our <Link href="/blog">great knowledge</Link>,{" "}
                  <Link href="/work">high-quality work</Link>, and friendly
                  customer service, we've become a top SEO
                  agency that businesses trust.
                </p>

                <Image
                  className="img-fluid"
                  src={best}
                  alt="search engine optimization company niagara"
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
                    alt="ggs niagara SEO landscaping testimonial"
                    width="48"
                    height="48"
                    src="https://lh3.googleusercontent.com/a/ACg8ocJ0eWch1hRWUGzVDCWLHHB4-5kucORKoBlJcD-KmOcfyBhD7Q=w48-h48-p-rp-mo-ba3-br100"
                  />
                  <p className="author">KD Flowers</p>
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
                    In just one month, my business's website made it to the
                    first page of Google! I was so surprised! After that, I
                    started getting emails from people interested in my services
                    right away, and I've been busy ever since! Thanks a lot to
                    Infused Agency for helping my business grow!
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
                  Leading Search Engine Optimization Company That <span>Makes An Impact</span>
                </h2>
                <p>
                  Our <strong>SEO Niagara</strong> services and lead-generating website designs help grow your business.
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
              <div className="col-lg-6 d-flex">
                <Link href="/seo">
                  <div className="card">
                    <h2>Search Engine Optimization (SEO)</h2>
                    <p>
                      Are your customers not finding your website on Google? Our
                      <strong>SEO Niagara</strong> services help your website be visible to your
                      customers.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6 d-flex">
                <Link href="/web-design">
                  <div className="card">
                    <h2>Lead-Generating Web Design</h2>
                    <p>
                      Is your website design not bringing you customers?
                      We make lead-generating websites that turn visitors into
                      customers.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
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
                <h2>Frequently Asked Local SEO Questions</h2>
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
                <h3>What is search engine optimization, and why is it important for my website?</h3>
                <p>
                  Local <strong>SEO Niagara</strong> services means making your website better so it appears higher in
                  local search engine results. This helps more people find your site.
                </p>

                <h3>What are the main factors that influence Local search engine optimization rankings?</h3>
                <p>
                  Important factors include using the right keywords, having a
                  fast website, and getting other websites to link to yours.
                </p>

                <h3>How much does Local search engine optimization cost?</h3>
                <p>
                  This entirely depends on both the length of the local <strong>SEO Niagara</strong> campaign,
                  and the work involved.{" "}
                  <Link href="/get-a-quote">Contact us today</Link> for a free
                  consult and free quote.
                </p>

                <h3>
                  How do you perform keyword research, and how do you determine
                  which keywords to target?
                </h3>
                <p>
                  We find words people use to search for your type of business
                  and choose ones that can bring you more visitors.
                </p>

                <h3>
                  What is on-page local search engine optimization, and how does it differ from off-page local search engine optimization?
                </h3>
                <p>
                  On-page local search engine optimization means improving things on your website, like text
                  and images. Off-page local search engine optimization means getting other websites to link
                  to yours.
                </p>

                <h3>How do you handle technical search engine optimization issues on a website?</h3>
                <p>
                  We fix problems like slow loading times, broken links, and
                  mobile-friendliness to improve your site’s performance.
                </p>

                <h3>Can you guarantee my website will rank #1 on Google?</h3>
                <p>
                  No one can promise a #1 spot, but we can improve your chances
                  with good <strong>SEO Niagara</strong> practices, as we have for all of our clients.
                </p>

                <h3>How do backlinks impact my website’s local search engine optimization?</h3>
                <p>
                  Backlinks are links from other websites to yours. They show
                  Google your site is trusted.
                </p>

                <h3>
                  What tools or software do you use for analysis and
                  reporting?
                </h3>
                <p>
                  We use tools like Google Analytics and software to check
                  your website’s performance and give you reports.
                </p>

                <h3>
                  What are the potential risks of search engine optimization, and how do you mitigate
                  them?
                </h3>
                <p>
                  Risks include using bad practices that can get your site
                  penalized by Google. Our <strong>SEO Niagara</strong> experts use safe, proven methods to avoid
                  this.
                </p>

                <h3>
                  How do you approach local Ssearch engine optimization, especially for service-based
                  businesses?
                </h3>
                <p>
                  We focus on local keywords, get your business listed on Google
                  Maps, and gather positive reviews to improve local rankings.
                </p>

                <h3>What is your process for auditing a website?</h3>
                <p>
                  We check your site’s health, look at keywords, see how it
                  performs, and find areas to improve.
                </p>

                <h3>
                  How ow do you create Google-friendly content?
                </h3>
                <p>
                  Content is key. We write helpful, interesting articles with
                  the right keywords to attract visitors.
                </p>

                <h3>
                  How do you stay updated with the latest changes in search
                  engine algorithms?
                </h3>
                <p>
                  We follow SEO news, read updates from search engines, and test
                  new strategies to keep up.
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
                  Ready to <span>Grow Your Business</span>?
                </h2>
                <p>Get your free quote below!</p>
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
