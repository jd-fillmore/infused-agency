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

        <title>SEO | Niagara, St. Catharines</title>
        <meta
          name="description"
          content="Expert SEO Niagara services that boost your businesses visibility. Leading SEO agency offering marketing, optimization, and consulting solutions."
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
                Our Clients <span>Get Great Results</span>
              </h2>
            </div>
          </div>
          <Row>
            <Col lg="12">
              <p>
                Google and other search engines use complicated formulas to
                decide which websites show up first in search results. How your
                website is made, what information it shows, and where it's
                listed online are important factors. At Infused Agency, our SEO
                services help your website be seen and trusted by Google for
                better rankings. We do search engine work for businesses in
                Niagara including: St. Catharines, Grimsby, Welland, Port
                Colborne, Beamsville, West Lincoln, Smithville, Wainfleet,
                Fonthill, Pelham, Thorold, Fort Erie and beyond.
                <br />
                <br />
                Want to learn more about SEO? Learn more{" "}
                <Link href="/posts/how-does-seo-help-your-business-grow">
                  here.
                </Link>
              </p>
            </Col>
          </Row>
          <section className="work">
            <Row className="pd-top-40">
              <Col lg="12">
                <h2 className="title">Recent Project</h2>
                <h2>Flat Rock Cellars</h2>
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
                    <li>Local Google Search Visibility Increased by 300%</li>
                    <li>Page 1 Google Map Rankings for Multiple Keywords</li>
                    <li>Page 1 Google Rankings for Multiple Keywords</li>
                  </ul>
                </div>
                <br />
                <Link href="/work">
                  <button>View More Results</button>
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
              <h2>Why Choose Infused Agency?</h2>
              <p>
                It's simple. Our{" "}
                <strong>
                  <a href="https://en.wikipedia.org/wiki/Search_engine_optimization">
                    SEO
                  </a>{" "}
                  Niagara
                </strong>{" "}
                agency has been helping businesses with their search engine
                optimization for over ten years. We know what works best for
                local companies when it comes to creating local search engine
                optimization strategies.
              </p>

              <p>
                We proudly areas including like{" "}
                <a href="https://www.google.com/maps/place/Niagara+Falls,+ON/@43.089557,-79.066435,13z/data=!4m6!3m5!1s0x882cd695fdfd5e49:0xd7fd08a95b23bbd4!8m2!3d43.089577!4d-79.058923">
                  Niagara Falls
                </a>
                ,{" "}
                <a href="https://www.google.com/maps/place/Niagara+on+the+Lake,+ON/@43.257835,-79.066229,13z/data=!4m6!3m5!1s0x8827b0ac14c3de73:0xb36734d7e1280be3!8m2!3d43.257722!4d-79.060721">
                  Niagara-on-the-Lake
                </a>
                and surrounding areas.
              </p>

              <p>
                The area is a beautiful place, known for its gorgeous parks,
                rich history, and thriving local businesses. With its welcoming
                communities and popular attractions like wineries and nature
                sites, it's a fantastic area to live and work.
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
                We Make An <span>Impact</span> For Our Clients
              </h2>
              <p>
                Our search engine optimization services and lead-generating
                website designs help grow your business.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pd-top-40">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Keyword Research</h2>
                <p>
                  Our SEO experts start by looking at your website and finding
                  the best words to help people find you.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Link Building</h2>
                <p>
                  We help improve your brand’s presence on big search engines
                  like Google by creating quality links and adding your business
                  to the right online listings.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Content Writing</h2>
                <p>
                  Infused Agency’s team has a creative content team. We create
                  smart marketing strategies for your online campaigns,
                  including Google-friendly content.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>On-Page</h2>
                <p>
                  Bring more people to your website and get better leads with
                  our proven on-page methods.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Local Search Engine Optimization</h2>
                <p>
                  Our search engine optimization services help your business get
                  noticed by the right people online.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Technical</h2>
                <p>
                  Our company takes care of your technical web design to make
                  sure it’s ready for Google and works properly.
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
              <h2>Frequently Asked Questions</h2>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <h3>
                What is search engine optimization, and why is it important for
                my website?
              </h3>
              <p>
                Local search engine optimization services means making your
                website better so it appears higher in local search engine
                results. This helps more people find your site.
              </p>

              <h3>
                What are the main factors that influence Local search engine
                optimization rankings?
              </h3>
              <p>
                Important factors include using the right keywords, having a
                fast website, and getting other websites to link to yours.
              </p>

              <h3>How much does Local search engine optimization cost?</h3>
              <p>
                This entirely depends on both the length of the project, and the
                work involved. <Link href="/get-a-quote">Contact us today</Link>{" "}
                for a free consult and free quote.
              </p>

              <h3>
                How do you perform keyword research, and how do you determine
                which keywords to target?
              </h3>
              <p>
                We find words people use to search for your type of business and
                choose ones that can bring you more visitors.
              </p>

              <h3>
                What is on-page local search engine optimization, and how does
                it differ from off-page local search engine optimization?
              </h3>
              <p>
                On-page local search engine optimization means improving things
                on your website, like text and images. Off-page local search
                engine optimization means getting other websites to link to
                yours.
              </p>

              <h3>
                How do you handle technical search engine optimization issues on
                a website?
              </h3>
              <p>
                We fix problems like slow loading times, broken links, and
                mobile-friendliness to improve your site’s performance.
              </p>

              <h3>Can you guarantee my website will rank #1 on Google?</h3>
              <p>
                No one can promise a #1 spot, but we can improve your chances
                with good search engine optimization practices, as we have for
                all of our clients.
              </p>

              <h3>
                How do backlinks impact my website’s local search engine
                optimization?
              </h3>
              <p>
                Backlinks are links from other websites to yours. They show
                Google your site is trusted.
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
