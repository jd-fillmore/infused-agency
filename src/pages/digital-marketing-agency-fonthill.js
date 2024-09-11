import React, { useState } from "react";
import Head from "next/head";
import best from "../../src/img/best-rated.png";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Container,
  Row,
  Col,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import Nav from "../../components/Nav/nav";
import Footer from "../../components/Footer/footer";

import intro from "../img/digital-marketing-agency-fonthill.webp";
import img1 from "../img/seo-keyword-research.webp";
import img2 from "../img/seo-link-building.webp";
import img3 from "../img/seo-content-writing.webp";
import Link from "next/link";

import results from "../img/digital-marketing-agency-fonthill-results.webp";
import integ from "../img/fonthill-digital-marketing-agency.webp";

const SEO = () => {
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
        <title>Digital Marketing Agency Fonthill | Infused Agency</title>
        <meta
          name="description"
          content="Our digital marketing agency Fonthill team can help your business boost sales, leads and revenue. Get your free consultation today!"
        />
        <link
          rel="canonical"
          href="https://infused.agency/digital-marketing-agency-fonthill"
        />
      </Head>
      <Nav />
      <div className="niche-pages">
        <section className="hero">
          <Container>
            <Row>
              <Col lg="12">
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <h1 className="intro">Digital Marketing Agency Fonthill</h1>
                  <h2 className="sub">
                    Boost revenue, drive leads and get more sales for your
                    Fonthill company today!
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <Link href="/get-a-quote">
                    <button>Get Your Free Quote Now!</button>
                  </Link>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="inner-content">
          <div className="intro">
            <Container>
              <Row>
                <Col lg="7">
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2>
                      A Digital Marketing Agency Fonthill Team That <br />
                      <span>Gets Results</span>
                    </h2>
                    <p>
                      At Infused Agency, our digital marketing agency Fonthill
                      team helps businesses in Fonthill grow through digital
                      marketing. Our team creates custom plans to improve your
                      brand using the latest marketing strategies.
                    </p>
                    <ol>
                      <li>
                        <strong>Understanding Your Business</strong>: We start
                        by learning about your business and what you want to
                        achieve. Your ideas are important to us!
                      </li>
                      <li>
                        <strong>Creating a Marketing Plan</strong>: After
                        understanding your needs, we work together to develop a
                        new marketing plan. We make everything easy to
                        understand, so you don’t need to be a marketing expert.
                      </li>
                      <li>
                        <strong>Using Simple Tools</strong>: We use easy tools
                        for things like{" "}
                        <Link href="/niagara-seo-company">SEO</Link> (making
                        your website show up on Google), local SEO, and ads on
                        Instagram and Facebook. This way, anyone can use them.
                      </li>
                    </ol>
                    <p>
                      We have helped many businesses in places like St.
                      Catharines, Fonthill Falls, Welland, and more. Our goal is
                      to create websites that look good and help attract more
                      customers.
                    </p>

                    <p>
                      If you want to grow your business online, Infused Agency
                      is here to help!
                    </p>
                  </motion.div>
                </Col>
                <Col lg="5">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      className="img-fluid"
                      src={intro}
                      alt="digital marketing agency fonthill"
                    />
                    <br />
                    <br />
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23329.80817169622!2d-79.30626191996562!3d43.03667575280389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3495b85ab330f%3A0xa66b7f6644047a01!2sFonthill%2C%20Pelham%2C%20ON!5e0!3m2!1sen!2sca!4v1726013756167!5m2!1sen!2sca"
                      width="100%"
                      height="450"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </motion.div>
                </Col>
              </Row>
              <Row className="pd-top-80">
                <div className="col-lg-5">
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      className="img-fluid"
                      src={integ}
                      alt="fonthill digital marketing agency"
                    />
                  </motion.div>
                </div>
                <div className="col-lg-7">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2>A Fonthill Digital Marketing Agency With Integrity</h2>
                    <p>
                      At Infused Agency, our Fonthill digital marketing agency
                      helps all kinds of businesses with digital marketing,
                      whether they’re big companies or small local shops. Your
                      online presence is often the first thing a potential
                      customer sees, and it should show how great your business
                      is. Our modern Fonthill digital marketing strategies are
                      designed to get you more customers and are easy to
                      understand.
                    </p>

                    <p>
                      We focus on three key areas to help your Fonthill business
                      succeed:
                    </p>
                    <ul>
                      <li>
                        <strong>SEO and Local SEO</strong>: We make sure your
                        Fonthill website shows up in search results so more
                        people can find you.
                      </li>
                      <li>
                        <strong>Social Media Ads</strong>: We create ads for
                        Instagram and Facebook to reach more people and attract
                        new customers in Fonthill.
                      </li>
                      <li>
                        <strong>Digital Marketing</strong>: We use smart
                        strategies to boost your online presence and turn your
                        website into a strong tool for getting Fonthill leads
                        and sales.
                      </li>
                    </ul>

                    <p>
                      These services help make your online presence effective
                      and easy to manage, helping you get more leads, increase
                      sales, and build trust with your customers.
                    </p>
                  </motion.div>
                </div>
              </Row>
              <div className="row pd-top-80 align-items-center">
                <div className="col-lg-6">
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2>Why Choose Infused?</h2>
                    <h3>Our Digital Marketing Agency Fonthill Team</h3>
                    <p>
                      We have been helping businesses in Fonthill with our
                      digital marketing and SEO services{" "}
                      <strong>for over ten years</strong>. This experience means
                      we know what works best for local companies. Our goal is
                      to help businesses <strong>attract more customers</strong>{" "}
                      through effective marketing strategies.
                    </p>

                    <p>
                      When you choose us, you get a team that{" "}
                      <strong>understands the Fonthill area</strong>. We know
                      how to make your marketing efforts stand out to both
                      locals and tourists. Our mission is to help your business
                      grow by{" "}
                      <strong>bringing more visitors to your site</strong>.
                    </p>

                    <p>
                      With our skills in SEO, we can{" "}
                      <strong>help your business appear on Google</strong> when
                      people search for services in Fonthill. This means more
                      people will discover your business, which can lead to more
                      sales. We love <strong>seeing our clients succeed</strong>
                      , and we work hard to make that happen!
                    </p>

                    <p>
                      We also focus on social media marketing, creating
                      eye-catching ads for platforms like Facebook and
                      Instagram. Our team targets the right audience in your
                      area, ensuring your ads reach potential customers
                      interested in what you offer.
                    </p>

                    <p>
                      By using our local SEO services, we ensure your business
                      shows up in local search results. When someone looks for a
                      restaurant, shop, or service nearby, we make sure your
                      business is one of the first they see. This helps attract
                      more customers from your community.
                    </p>

                    <p>
                      With our <a href="/blog">great knowledge</a>,{" "}
                      <a href="/work">high-quality work</a>, and{" "}
                      <a href="/reviews">friendly customer service</a>, we've
                      become a trusted digital marketing company for Fonthill
                      businesses. If you're looking to grow your business
                      online, we're here to help!
                    </p>
                    <Image
                      className="img-fluid"
                      src={best}
                      alt="digital marketing company fonthill"
                    />
                  </motion.div>
                </div>
                <div className="col-lg-6">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="card">
                      <img
                        alt="digital marketing agency fonthill client review"
                        width="48"
                        height="48"
                        src="https://lh3.googleusercontent.com/a/ACg8ocIKt9X9LSKomYMvAkQn_0673Xwg0EBOP-QigGk1AaAVHdVIvA=w48-h48-p-rp-mo-ba3-br100"
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
                        started getting emails from people interested in my
                        services right away, and I've been busy ever since!
                        Thanks a lot to Infused Agency for helping my business
                        grow!
                      </p>
                    </div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5821.424311572049!2d-79.21034682335578!3d43.15257338466515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3507111975161%3A0x18a1198be6280a70!2s%F0%9F%9A%80%20Infused%20Agency%20%7C%20Fonthill%20Web%20Design%20%26%20SEO%20Company!5e0!3m2!1sen!2sca!4v1725979720923!5m2!1sen!2sca"
                      width="100%"
                      height="450"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </motion.div>
                </div>
              </div>
            </Container>
          </div>
          <div className="niche-services pd-top-80">
            <Container>
              <Row className="text-center">
                <Col lg="12">
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2>
                      Our <span>Digital Marketing Services</span> in Fonthill
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
                <Row className="pd-top-40">
                  <Col lg="4" className="d-flex">
                    <div className="card">
                      <Image src={img1} alt="social media marketing fonthill" />
                      <h3>Social Media Ads Marketing</h3>
                      <p>
                        Our digital marketing agency Fonthill team offers social
                        media ads marketing to help your business get noticed on
                        platforms like Facebook and Instagram. Our team creates
                        fun and eye-catching ads that target the right people in
                        your area. This way, we can make sure that your ads
                        reach potential customers who are interested in what you
                        offer. With our help, you can connect with more people
                        and grow your business through social media!
                      </p>
                    </div>
                  </Col>
                  <Col lg="4" className="d-flex">
                    <div className="card">
                      <Image src={img2} alt="local seo marketing fonthill" />
                      <h3>Local SEO Marketing</h3>
                      <p>
                        Our local SEO marketing service is all about helping
                        your business show up when people in Fonthill search for
                        services like yours. Our digital marketing agency
                        Fonthill team makes sure your website is optimized so
                        that it appears in local search results. This means when
                        someone looks for a restaurant, shop, or service nearby,
                        your business will be one of the first they see. By
                        improving your local visibility, we help you attract
                        more customers from your community.
                      </p>
                    </div>
                  </Col>
                  <Col lg="4" className="d-flex">
                    <div className="card">
                      <Image
                        src={img3}
                        alt="search engine marketing fonthill"
                      />
                      <h3>General SEO Marketing</h3>
                      <p>
                        With our general SEO marketing, we focus on improving
                        your website's visibility on search engines like Google.
                        Our digital marketing agency Fonthill team uses special
                        techniques to make your website more attractive to
                        search engines, which helps it rank higher in search
                        results. This means more people will find your site when
                        they search for products or services you offer. Our goal
                        is to drive more organic traffic to your website,
                        helping you reach more potential customers and grow your
                        business!
                      </p>
                    </div>
                  </Col>
                </Row>
              </motion.div>
            </Container>
          </div>
          <div className="niche-featured pd-top-80">
            <Container>
              <Row>
                <Col lg="6">
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="pd-btm-40">
                      Featured Client of Our{" "}
                      <span>Fonthill Digital Marketing Agency</span>
                    </h2>
                    <div className="card">
                      <img
                        alt="fonthill digital marketing agency client testimonial"
                        width="48"
                        height="48"
                        src="https://lh3.googleusercontent.com/a/ACg8ocIKt9X9LSKomYMvAkQn_0673Xwg0EBOP-QigGk1AaAVHdVIvA=w48-h48-p-rp-mo-ba3-br100"
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
                        started getting emails from people interested in my
                        services right away, and I've been busy ever since!
                        Thanks a lot to Infused Agency for helping my business
                        grow!
                      </p>
                    </div>
                  </motion.div>
                </Col>
                <Col lg="6">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      className="img-fluid"
                      src={results}
                      alt="fonthill digital marketing agency case study"
                    />
                  </motion.div>
                </Col>
              </Row>
              <Row>
                <Col lg="12">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2>The Problem</h2>
                    <p>
                      KD Flowers didn't have a website or any way for people to
                      find them online. They wanted to grow their business and
                      get new customers from Google searches.
                    </p>

                    <h2>How We Helped</h2>
                    <p>
                      We built KD Flowers a cool new website that's easy for
                      people to use. We made sure it looked modern and worked
                      well on phones and computers.
                    </p>

                    <p>
                      After we finished the website, we helped more people find
                      it. We used something called "local SEO" to make sure KD
                      Flowers showed up when people in their area searched for
                      flower shops on Google.
                    </p>

                    <h2>What Happened Next</h2>
                    <p>
                      Since we launched the new website, KD Flowers has gotten
                      lots of new customers! This is because their new website
                      looks great, and they now appear at the top of Google
                      searches in their area.
                    </p>
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
                  <Col lg="4">
                    <div className="card">
                      <h3>10,700</h3>
                      <p>website views / month</p>
                    </div>
                  </Col>
                  <Col lg="4">
                    <div className="card">
                      <h3>20,000%</h3>
                      <p>increase in new leads in 6 months</p>
                    </div>
                  </Col>
                  <Col lg="4">
                    <div className="card">
                      <h3>5,800</h3>
                      <p>new users discovering website / month</p>
                    </div>
                  </Col>
                </Row>
              </motion.div>
              <Row className="text-center pd-top-80">
                <Col lg="12">
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2>
                      <span>Frequently Asked</span> Fonthill Digital Marketing
                      Agency Questions{" "}
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
                    <Accordion open={open} toggle={toggle}>
                      <AccordionItem>
                        <AccordionHeader targetId="1">
                          What is digital marketing?
                        </AccordionHeader>
                        <AccordionBody accordionId="1">
                          <h2>What is digital marketing?</h2>
                          <p>
                            Digital marketing is how businesses promote
                            themselves online. This includes things like social
                            media, websites, and ads on Google. It helps people
                            find and learn about a business on the internet.
                          </p>
                        </AccordionBody>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionHeader targetId="2">
                          How can your Fonthill digital marketing services help
                          my Fonthill business?
                        </AccordionHeader>
                        <AccordionBody accordionId="2">
                          <h2>
                            How can your Fonthill digital marketing services
                            help my Fonthill business?
                          </h2>
                          <p>
                            Digital marketing can help your business by reaching
                            more people. It can attract new customers and keep
                            existing ones interested. With the right strategies,
                            you can get more visitors to your website and
                            increase sales.
                          </p>
                        </AccordionBody>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionHeader targetId="3">
                          What is SEO, and why is it important?
                        </AccordionHeader>
                        <AccordionBody accordionId="3">
                          <h2>What is SEO, and why is it important?</h2>
                          <p>
                            SEO stands for Search Engine Optimization. It helps
                            your website show up higher in Google searches. This
                            is important because the higher your website
                            appears, the more people will see it and visit your
                            site.
                          </p>
                        </AccordionBody>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionHeader targetId="4">
                          How long does it take to see results from digital
                          marketing?
                        </AccordionHeader>
                        <AccordionBody accordionId="4">
                          <h2>
                            How long does it take to see results from digital
                            marketing?
                          </h2>
                          <p>
                            Seeing results can take time. Some people might
                            notice changes in a few weeks, while others might
                            take a few months. It depends on what strategies we
                            use and how competitive your market is.
                          </p>
                        </AccordionBody>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionHeader targetId="5">
                          How will I know if my digital marketing is working?
                        </AccordionHeader>
                        <AccordionBody accordionId="5">
                          <h2>
                            How will I know if my digital marketing is working?
                          </h2>
                          <p>
                            You can know if your digital marketing is working by
                            looking at the number of visitors to your website,
                            how many people are contacting you, and if your
                            sales are increasing. We can provide reports to show
                            you how well things are going!
                          </p>
                        </AccordionBody>
                      </AccordionItem>
                    </Accordion>
                  </Col>
                </Row>
              </motion.div>
            </Container>
          </div>
        </div>
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
                  <h2>
                    Delivering Digital Marketing Services surrounding Fonthill:
                  </h2>
                  <Link href="/digital-marketing-agency-beamsville">
                    Beamsville, ON
                  </Link>{" "}
                  |{" "}
                  <Link href="/digital-marketing-agency-crystal-beach">
                    Crystal Beach, ON
                  </Link>{" "}
                  |{" "}
                  <Link href="/digital-marketing-agency-fonthill">
                    Fonthill, ON
                  </Link>{" "}
                  |{" "}
                  <Link href="/digital-marketing-agency-fort-erie">
                    Fort Erie, ON
                  </Link>{" "}
                  |{" "}
                  <Link href="/digital-marketing-agency-grimsby">
                    Grimsby, ON
                  </Link>{" "}
                  |{" "}
                  <Link href="/digital-marketing-agency-niagara">
                    Niagara Falls, ON
                  </Link>{" "}
                  |{" "}
                  <Link href="/digital-marketing-agency-niagara">
                    Niagara-on-the-Lake, ON
                  </Link>{" "}
                  |{" "}
                  <Link href="/digital-marketing-agency-port-colborne">
                    Port Colborne, ON
                  </Link>{" "}
                  |{" "}
                  <Link href="/digital-marketing-agency-st-catharines">
                    St. Catharines, ON
                  </Link>{" "}
                  |{" "}
                  <Link href="/digital-marketing-agency-thorold">
                    Thorold, ON
                  </Link>{" "}
                  |{" "}
                  <Link href="/digital-marketing-agency-wainfleet">
                    Wainfleet, ON
                  </Link>{" "}
                  |{" "}
                  <Link href="/digital-marketing-agency-welland">
                    Welland, ON
                  </Link>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="niche-cta">
          <Container>
            <Row className="text-center">
              <Col lg="12">
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2>Need Fonthill Digital Marketing Services?</h2>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Link href="/get-a-quote">
                    <button>Get Your Free Quote Now!</button>
                  </Link>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SEO;
