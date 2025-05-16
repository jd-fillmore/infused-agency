import React from "react";
import { getLatestPosts } from "../lib/posts";
import { Col, Container, Row } from "reactstrap";
import { format } from "date-fns";
import "react-accessible-accordion/dist/fancy-example.css";
import Head from "next/head";
import Nav from "../../components/Nav/nav";
import Hero from "../../components/Home/Hero/hero";
import Footer from "../../components/Footer/footer";

import Link from "next/link";
import Image from "next/image";
import best from "../../src/img/awards.png";
import flatRock from "../../src/img/flat-rock-seo-results.png";
import kd from "../../src/img/kd-flowers-seo-results.png";

const Home = ({ latestPosts }) => {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Infused Agency",
              url: "https://infused.agency",
              image:
                "https://infused.agency/_next/static/media/infused-logo.6971b904.png",
              description:
                "Infused Agency is an SEO company in Niagara, Ontario. We specialize in Local SEO for companies in Niagara, Niagara-on-the-Lake, Niagara Falls, and St. Catharines.",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "73 Alexandra Blvd",
                addressLocality: "St. Catharines",
                addressRegion: "ON",
                postalCode: "L2P1K2",
                addressCountry: "CA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "43.197109",
                longitude: "-79.243362",
              },
              telephone: "(905) 933-3115",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "33",
              },
              review: [
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "JD Fillmore",
                  },
                  reviewBody:
                    "Excellent SEO service that helped improve our local visibility significantly.",
                },
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Alice Smith",
                  },
                  reviewBody:
                    "Professional and effective SEO services. Highly recommended!",
                },
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "4",
                  },
                  author: {
                    "@type": "Person",
                    name: "John Doe",
                  },
                  reviewBody:
                    "Great service and support throughout our SEO campaign.",
                },
              ],
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "43.197109",
                  longitude: "-79.243362",
                },
                geoRadius: "50000",
              },
              hasMap: "https://maps.app.goo.gl/efsLRm9sTqUN7HhG7",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "43.197109",
                  longitude: "-79.243362",
                },
                geoRadius: "50000",
              },
              openingHours: ["Mo-Fr 09:00-17:00", "Sa 10:00-14:00"],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+1-905-933-3115",
                email: "info@infused.agency",
              },
              sameAs: [
                "https://www.facebook.com/infused.agency",
                "https://twitter.com/InfusedAgency",
                "https://linkedin.com/company/infused-agency",
                "https://instagram.com/infusedagency",
                "https://www.mapquest.com/ca/ontario/infused-agency-456469990",
                "https://www.yellowpages.ca/bus/Ontario/St-Catharines/Infused-Agency/101902875.html",
                "https://gncc.ca/members-and-benefits/member-directory/#/action/Listing/value/41026/cid/1185/id/1002901/Infused-Agency",
                "https://www.goodfirms.co/company/infused-agency",
                "https://www.pagesjaunes.ca/bus/Ontario/St-Catharines/Infused-Agency/101902875.html?what=Web+Design+%26+Development&where=Beamsville+ON&useContext=true",
                "https://about.me/infused0",
                "https://www.zoominfo.com/c/infused-agency/447274660",
                "https://www.hotfrog.ca/company/9a5d8745ba57d4499b16df3d144dae56/infused-agency/st-catharines/web-design",
                "https://www.localhomeservicepros.com/ontario/st-catharines/website-design/infused-agency",
                "https://www.getlisteduae.com/listings/infused-agency",
                "https://www.canadianplanet.net/infused-agency-niagara-F1109C6001ED043",
              ],
              paymentAccepted: ["Cash", "Credit Card", "Debit Card"],
              makesOffer: [
                {
                  "@type": "Service",
                  name: "Local SEO",
                  description:
                    "Improve your local search visibility and attract more customers.",
                },
                {
                  "@type": "Service",
                  name: "Web Design",
                  description:
                    "Custom web design services to create a unique online presence.",
                },
                {
                  "@type": "Service",
                  name: "Conversion Optimization",
                  description:
                    "Optimize your website to convert visitors into customers.",
                },
              ],
            }),
          }}
        />

        <title>SEO Niagara | St. Catharines, Niagara Falls</title>
        <meta
          name="description"
          content="Our SEO Niagara company specializes in local SEO services for businesses in Niagara Falls, St. Catharines, and surrounding areas. Drive more traffic, improve rankings, and increase leads with expert SEO strategies."
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
      </Head>
      <Nav />
      <Hero />
      <section className="home-top-web">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>
                <span>Proven SEO Results</span> for Businesses in Niagara
              </h2>
            </div>
          </div>
          <Row>
            <Col lg="12">
              <p>
                Search engines like Google use complex algorithms to determine
                which websites rank at the top. Factors such as website
                structure, content quality, and online visibility all play a
                role. At Infused Agency, our SEO services in Niagara help
                businesses increase rankings, drive traffic, and generate leads.
                <br />
                <br />
                We provide expert search engine optimization for businesses
                across Niagara, including St. Catharines, Grimsby, Welland, Port
                Colborne, Beamsville, West Lincoln, Smithville, Wainfleet,
                Fonthill, Pelham, Thorold, Fort Erie, and beyond.
              </p>
            </Col>
          </Row>
          <section className="work">
            <Row className="pd-top-40">
              <Col lg="12">
                <h2 className="title">
                  Recent SEO Results for Niagara Businesses
                </h2>
                <h2>Flat Rock Cellars - SEO Success Story</h2>
                <hr />
              </Col>
            </Row>
            <div className="row">
              <div className="col-lg-6">
                <Image
                  className="img-fluid"
                  src={flatRock}
                  alt="Flat Rock Cellars SEO Results"
                />
              </div>
              <div className="col-lg-6">
                <div class="card">
                  <h3>After hiring us:</h3>
                  <ul>
                    <li>300% Increase in Local Google Search Visibility</li>
                    <li>
                      Page 1 Google Map Rankings for SEO Keywords in Niagara
                    </li>
                    <li>
                      Page 1 Organic Google Rankings for Multiple Niagara SEO
                      Keywords
                    </li>
                  </ul>
                </div>
                <br />
                <Link href="/work">
                  <button>View More SEO Results</button>
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* Container End*/}
        {/* Container Start*/}
        <div className="container">
          <div className="row pd-top-120">
            <div className="col-lg-7">
              <h2>Why Choose Infused Agency for SEO in Niagara?</h2>
              <p>
                It’s simple. Infused Agency is a top-rated Niagara SEO company
                that has been helping businesses increase their online
                visibility with expert search engine optimization for over a
                decade. Our SEO services in Niagara are designed to help local
                businesses improve their Google rankings, attract targeted
                traffic, and generate more qualified leads.
                <br />
                <br />
                We specialize in local SEO strategies that ensure your business
                stands out in Niagara’s competitive digital landscape. From
                optimizing your Google Business Profile to implementing on-page
                and technical SEO best practices, we know what it takes to rank
                higher in local search results.
                <br />
                <br />
                Whether you’re a small business or an established company, our
                Niagara SEO agency is committed to delivering measurable results
                that help you grow.
              </p>

              <Image
                className="img-fluid"
                src={best}
                alt="search engine optimization company niagara"
              />
            </div>
            <div className="col-lg-5">
              <div className="card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d373093.06470999256!2d-79.970371954853!3d43.066893159426954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d34c9ec993deb7%3A0xef7f46930d192396!2sRegional%20Municipality%20of%20Niagara%2C%20ON!5e0!3m2!1sen!2sca!4v1735651985056!5m2!1sen!2sca"
                  width="100%"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
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
                We Drive <span>Real Results</span> with SEO in Niagara
              </h2>
              <p>
                At Infused Agency, our Niagara SEO services are designed to
                increase your visibility, drive targeted traffic, and generate
                high-quality leads. Through expert search engine optimization
                strategies, we help local businesses dominate Google rankings
                and grow their online presence.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pd-top-40">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Keyword Research for SEO in Niagara</h2>
                <p>
                  Our SEO experts analyze your website and identify high-impact
                  keywords that help local customers find your business on
                  Google. We focus on search terms with strong commercial
                  intent, ensuring your website ranks for Niagara SEO searches
                  that drive real revenue.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>High-Quality Link Building & Online Listings</h2>
                <p>
                  Our Niagara SEO agency strengthens your brand authority
                  through quality backlinks and strategic local business
                  citations. We help place your business in the right online
                  directories, improving your search engine rankings and
                  trustworthiness.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>SEO Content Writing That Ranks</h2>
                <p>
                  Our SEO content team creates Google-friendly,
                  conversion-focused content that boosts your website’s
                  authority and rankings. Whether it’s blog posts, service
                  pages, or landing pages, we craft engaging, keyword-rich
                  content that attracts and converts visitors.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>On-Page SEO for Better Visibility & Leads</h2>
                <p>
                  We use proven on-page SEO strategies to optimize your meta
                  tags, headings, URL structure, and internal links, ensuring
                  your website is search engine-friendly and highly relevant for
                  Niagara-based searches.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Local SEO – Rank in Google’s Local Pack</h2>
                <p>
                  Our local SEO services in Niagara ensure your business is
                  found in Google’s Local Pack and Google Maps rankings. We
                  optimize your Google Business Profile, manage NAP consistency,
                  and enhance local citations to increase local search
                  visibility.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Technical SEO – Optimize for Google’s Algorithms</h2>
                <p>
                  We handle all technical SEO aspects, ensuring your website
                  loads fast, is mobile-friendly, and meets Google’s best
                  practices. From site speed improvements to structured data
                  implementation, we make sure your website is optimized for
                  search engine success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-faq">
        <Container>
          <Row className="text-center pd-btm-40">
            <Col lg="12">
              <h2>Frequently Asked Questions For Niagara SEO Services</h2>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <h3>
                What is search engine optimization, and why is it important for
                my website?
              </h3>
              <p>
                Search engine optimization (SEO) is the process of improving
                your website to appear higher in local search engine results.
                For Niagara businesses, ranking higher means increased online
                visibility, which helps more local customers find your website.
                Effective local SEO not only boosts your rankings but also
                enhances the user experience, driving more qualified leads to
                your site.
              </p>

              <h3>
                What are the main factors that influence Local search engine
                optimization rankings?
              </h3>
              <p>The main factors influencing local SEO rankings include:</p>
              <ul>
                <li>
                  <strong>Keyword targeting</strong>: Using the right{" "}
                  <strong>local keywords</strong> relevant to your business.
                </li>
                <li>
                  <strong>Website performance</strong>: A{" "}
                  <strong>fast-loading website</strong> is crucial for both user
                  experience and rankings.
                </li>
                <li>
                  <strong>Backlinks</strong>: Getting reputable websites to{" "}
                  <strong>link back to your site</strong> signals trust and
                  authority to search engines.
                </li>
                <li>
                  <strong>Google Business Profile optimization</strong>: A{" "}
                  <strong>complete and accurate profile</strong> improves your
                  chances of appearing in local searches and{" "}
                  <strong>Google Maps</strong>.
                </li>
              </ul>

              <h3>How much does Local search engine optimization cost?</h3>
              <p>
                The cost of local SEO varies depending on your business goals,
                the competition in your area, and the scope of work required.
                Each business is unique, so we recommend reaching out for a free
                consultation and customized quote to determine what will work
                best for your specific needs and SEO strategy.
              </p>

              <h3>
                How do you perform keyword research, and how do you determine
                which keywords to target?
              </h3>
              <p>
                Our Niagara SEO experts perform in-depth keyword research to
                identify the terms your potential customers are searching for.
                We focus on long-tail local keywords and high-intent search
                terms that can bring more qualified traffic to your site. By
                targeting low-competition, high-traffic keywords, we help
                increase your chances of ranking higher in local search results.
              </p>

              <h3>
                What is on-page local search engine optimization, and how does
                it differ from off-page local search engine optimization?
              </h3>
              <p>
                <ul>
                  <li>
                    <strong>On-page local SEO</strong>: Refers to optimizing
                    elements on your website such as meta tags, headings,
                    content, and images to ensure they are search
                    engine-friendly and contain the right local keywords.
                  </li>
                  <li>
                    <strong>Off-page local SEO</strong>: Focuses on improving
                    your website’s authority by acquiring backlinks from trusted
                    sources and being listed in local business directories.
                  </li>
                  <li>
                    Both <strong>on-page</strong> and{" "}
                    <strong>off-page SEO</strong> are critical for improving
                    local search rankings and driving more local traffic.
                  </li>
                </ul>
              </p>

              <h3>
                How do you handle technical search engine optimization issues on
                a website?
              </h3>
              <p>
                Our Niagara SEO agency specializes in addressing technical SEO
                issues such as:
              </p>
              <ul>
                <li>
                  <strong>Site speed optimization</strong>: Ensuring your
                  website loads quickly, which is crucial for both rankings and
                  user experience.
                </li>
                <li>
                  <strong>Mobile-friendliness</strong>: Ensuring your site is
                  responsive and easy to navigate on all devices.
                </li>
                <li>
                  <strong>Fixing broken links</strong>: Repairing any internal
                  or external links that could harm your SEO efforts.
                </li>
                <li>
                  These technical improvements help make your website more
                  Google-friendly and improve your overall search engine
                  optimization.
                </li>
              </ul>

              <h3>Can you guarantee my website will rank #1 on Google?</h3>
              <p>
                While no one can guarantee a #1 ranking, we specialize in local
                SEO best practices that increase your chances of ranking higher
                for competitive keywords. Through proven SEO strategies, we’ve
                helped businesses in Niagara improve their rankings and drive
                more local traffic to their websites.
              </p>

              <h3>
                How do backlinks impact my website’s local search engine
                optimization?
              </h3>
              <p>
                Backlinks are links from other reputable websites that point to
                yours. They serve as votes of confidence for your site,
                signaling to Google that your website is trustworthy and
                authoritative. By acquiring high-quality backlinks, we help your
                site gain more visibility in local search results, ultimately
                improving your rankings and online presence.
              </p>
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
                title="infused agency"
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
