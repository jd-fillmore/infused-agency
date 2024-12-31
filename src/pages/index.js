import React, { useState } from "react";
import { motion } from "framer-motion";
import { getLatestPosts } from "../lib/posts";
import {
  Col,
  Container,
  Row,
  Card,
  CardBody,
  Collapse,
  Button,
} from "reactstrap";
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
        <title>SEO Niagara | #1 SEO Services in Niagara, Ontario</title>
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
                Our Niagara SEO Partners <span>Achieve Great Results</span>
              </h2>
            </div>
          </div>
          <section className="work">
            <div className="row pd-top-40">
              <div className="col-lg-6">
                <h2 className="title">Recent Project</h2>
                <h2>Flat Rock Cellars</h2>
                <hr />
                <Image
                  className="img-fluid"
                  src={flatRock}
                  alt="Flat Rock Cellars SEO Results"
                />
                <div class="card">
                  <h3>After hiring us:</h3>
                  <ul>
                    <li>Local Google Search Visibility Increased by 300%</li>
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
                <h2 className="title">Recent Project</h2>
                <h2>KD Flowers</h2>
                <hr />
                <Image
                  className="img-fluid"
                  src={kd}
                  alt="KD Flowers SEO Results"
                />
                <div class="card">
                  <h3>After hiring us:</h3>
                  <ul>
                    <li>Website Page Speed Increased By 100%</li>
                    <li>Google Search Visibility Increased by 600%</li>
                    <li>Achieved first-page Google rankings within 3 months</li>
                    <li>
                      0 leads to massive growth in local leads from Google
                    </li>
                    <li>Page 1 Google Map Rankings for Multiple Keywords</li>
                    <li>Page 1 Google Rankings for Multiple Keywords</li>
                    <li>Increased User Experience</li>
                  </ul>
                </div>
              </div>
            </div>
            <Row className="pd-top-40 text-center">
              <Col lg="12">
                <Link href="/work">
                  <button>View More Results</button>
                </Link>
              </Col>
            </Row>
          </section>
        </div>

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
                  It's simple. Our <strong>SEO Agency in Niagara</strong> has
                  been helping businesses with their search engine optimization{" "}
                  for over ten years. This means our local{" "}
                  <strong>SEO Niagara</strong> expert consultants know what
                  works best for local companies when it comes to creating local
                  <a href="https://en.wikipedia.org/wiki/Search_engine_optimization">
                    SEO
                  </a>{" "}
                  strategies. Our experience allows us to create local SEO
                  strategies that not only look amazing but also help businesses
                  get more customers.
                </p>

                <p>
                  When you choose us, you're getting a team that understands the
                  area. We know how to make your online presence stand out to
                  both locals and tourists. Our goal is to help your business
                  grow by attracting more visitors to your site.
                </p>

                <p>
                  With our <strong>SEO Niagara</strong> skills, we can help your
                  website show up on Google when people search for services in
                  St. Catharines and beyond. This means more people will find
                  you, which can lead to more sales. We love seeing our clients
                  succeed, and we work hard to make that happen!
                </p>

                <p>
                  With our <Link href="/blog">great knowledge</Link>,{" "}
                  <Link href="/work">high-quality work</Link>, and friendly
                  customer service, we've become a top SEO agency that
                  businesses trust.
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
                  Leading Niagara SEO Company That <span>Makes An Impact</span>
                </h2>
                <p>
                  Our <strong>SEO Niagara</strong> services and lead-generating
                  website designs help grow your business.
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
            <Row>
              <Col lg="12">
                <p>
                  Are you a business owner in Niagara, Ontario, wanting to boost
                  your online presence and attract more local customers? Infused
                  Agency is here to assist you. Our team specializes in custom{" "}
                  <Link href="/seo">SEO</Link> and{" "}
                  <Link href="/web-design">web design</Link> services for
                  businesses in Niagara and surrounding areas.
                </p>

                <p>
                  One of the most important things we do is local SEO. By
                  improving your website and online listings for search engines,
                  we help your business appear higher in local search results.
                  This includes things like setting up your Google My Business
                  profile and adding special coding to your website to help
                  search engines understand it better.
                </p>

                <p>
                  We also offer complete web design services, including
                  WordPress development. Our team can build a website that works
                  well on any device and is optimized for search engines. We
                  understand that it’s essential for your website to look great
                  and function smoothly on phones, as many people use them to
                  search online.
                </p>

                <p>
                  Don’t let your competitors outrank you in local searches.
                  Reach out to us today for a{" "}
                  <Link href="/get-a-quote">free consultation</Link> and find
                  out how we can help your Niagara business succeed online.
                </p>
                <p>
                  We proudly serve Niagara, ON, including areas like{" "}
                  <a href="https://www.google.com/maps/place/Niagara+Falls,+ON/@43.089557,-79.066435,13z/data=!4m6!3m5!1s0x882cd695fdfd5e49:0xd7fd08a95b23bbd4!8m2!3d43.089577!4d-79.058923">
                    Niagara Falls
                  </a>
                  ,{" "}
                  <a href="https://www.google.com/maps/place/Niagara+on+the+Lake,+ON/@43.257835,-79.066229,13z/data=!4m6!3m5!1s0x8827b0ac14c3de73:0xb36734d7e1280be3!8m2!3d43.257722!4d-79.060721">
                    Niagara-on-the-Lake
                  </a>
                  , and{" "}
                  <a href="https://www.google.com/maps/place/Niagara+Region,+ON/@43.194624,-79.499932,13z/data=!4m6!3m5!1s0x882cc21f7d73e1b3:0xd1c8c5c4b2f836cc!8m2!3d43.194639!4d-79.493822">
                    Niagara Region
                  </a>
                  .
                </p>

                <p>
                  <a href="https://www.niagararegion.ca/" target="_blank">
                    Niagara Region, ON
                  </a>{" "}
                  is a beautiful place along the Niagara River, known for its
                  gorgeous parks, rich history, and thriving local businesses.
                  With its welcoming communities and popular attractions like
                  wineries and nature sites, it's a fantastic area to live and
                  work.
                </p>

                <p>
                  Starting a business in Niagara, ON is exciting, but getting
                  the word out is key. Without a strong online presence, it can
                  be tough to grow your business. That's where Infused Agency's
                  team can help—ensuring your business stands out online.
                </p>
              </Col>
            </Row>
            <div className="row pd-top-40">
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Keyword Research</h2>
                  <p>
                    Our Niagara SEO experts start by looking at your website and
                    finding the best words to help people find you. This helps
                    us make a strong SEO plan just for your business. With lots
                    of experience, the Infused Agency team knows how to do well,
                    even in tough competition, always getting great results.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Link Building</h2>
                  <p>
                    We help improve your brand’s presence on big search engines
                    like Google, Yahoo, and Bing by creating quality links and
                    adding your business to the right online listings. At
                    Infused Agency, we follow the best SEO rules using safe and
                    honest methods. We make a plan that fits your business,
                    whether you're just starting out or already have an
                    established company.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Content Writing</h2>
                  <p>
                    Infused Agency’s SEO team in Niagara has a creative content
                    team. We create smart marketing strategies for your online
                    campaigns, including SEO-friendly content. Our goal is to
                    write fun and interesting content that grabs people's
                    attention and gets them to support your brand.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>On-Page SEO</h2>
                  <p>
                    Bring more people to your website and get better leads with
                    our proven on-page SEO methods. Our Niagara SEO team looks
                    at what your competitors are doing and uses that information
                    to improve your website’s traffic and ranking. We create
                    custom SEO plans to make your site easier to find and get
                    the best results.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Local SEO</h2>
                  <p>
                    Our Niagara local SEO services help your business get
                    noticed by the right people online. We pick the best local
                    words to help us find your target audience. This drives more
                    people to your website and even to your physical store.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Technical SEO</h2>
                  <p>
                    Google and other search engines look at how well your
                    website works to decide how high it ranks. Our Niagara SEO
                    company takes care of your technical web design to make sure
                    it’s ready for SEO and works properly. We fix any errors on
                    the back end and keep track of your website’s performance to
                    make sure it runs smoothly, making it easier for visitors to
                    use and turn into customers.
                  </p>
                </div>
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
                <h2>FAQs for local Niagara SEO Clients</h2>
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
                <h3>
                  What is search engine optimization, and why is it important
                  for my website?
                </h3>
                <p>
                  Local <strong>SEO Niagara</strong> services means making your
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
                  This entirely depends on both the length of the local{" "}
                  <strong>SEO Niagara</strong> campaign, and the work involved.{" "}
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
                  What is on-page local search engine optimization, and how does
                  it differ from off-page local search engine optimization?
                </h3>
                <p>
                  On-page local search engine optimization means improving
                  things on your website, like text and images. Off-page local
                  search engine optimization means getting other websites to
                  link to yours.
                </p>

                <h3>
                  How do you handle technical search engine optimization issues
                  on a website?
                </h3>
                <p>
                  We fix problems like slow loading times, broken links, and
                  mobile-friendliness to improve your site’s performance.
                </p>

                <h3>Can you guarantee my website will rank #1 on Google?</h3>
                <p>
                  No one can promise a #1 spot, but we can improve your chances
                  with good <strong>SEO Niagara</strong> practices, as we have
                  for all of our clients.
                </p>

                <h3>
                  How do backlinks impact my website’s local search engine
                  optimization?
                </h3>
                <p>
                  Backlinks are links from other websites to yours. They show
                  Google your site is trusted.
                </p>

                <h3>
                  What tools or software do you use for analysis and reporting?
                </h3>
                <p>
                  We use tools like Google Analytics and software to check your
                  website’s performance and give you reports.
                </p>

                <h3>
                  What are the potential risks of search engine optimization,
                  and how do you mitigate them?
                </h3>
                <p>
                  Risks include using bad practices that can get your site
                  penalized by Google. Our <strong>SEO Niagara</strong> experts
                  use safe, proven methods to avoid this.
                </p>

                <h3>
                  How do you approach local search engine optimization,
                  especially for service-based businesses?
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

                <h3>How ow do you create Google-friendly content?</h3>
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
