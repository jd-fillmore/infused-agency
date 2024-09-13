import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
import { Container, Row, Col } from "reactstrap";
import Nav from "../../components/Nav/nav";
import Footer from "../../components/Footer/footer";
import intro from "../img/web-design-beamsville.webp";
import img1 from "../img/web-design.webp";
import img2 from "../img/wordpress-web-design.webp";
import img3 from "../img/web-development.webp";
import best from "../../src/img/best-rated.png";

import results from "../img/web-design-beamsville-results.webp";
import integ from "../img/beamsville-web-design-agency.webp";

const SEO = () => {
  return (
    <>
      <Head>
        <title>
          Web Design Beamsville-Lincoln | Website Developer Beamsville | Award
          Winning | Affordable Beamsville Web Design | Infused Agency | Website
          Design Beamsville, Beamsville Web Design Company, Beamsville Web
          Designer, Web Design Beamsville Ontario
        </title>
        <meta
          name="description"
          content="Our web design Beamsville team makes websites to increase your company's sales. Click here for your free Beamsville web design quote!"
        />
        <link
          rel="canonical"
          href="https://infused.agency/beamsville-web-design"
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
                  <h1 className="intro">Web Design Beamsville</h1>
                  <h2 className="sub">
                    We create Beamsville web designs that attract visitors and
                    turn them into leads, helping your Beamsville business grow.
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
                      A Web Design Beamsville Agency That{" "}
                      <span>Gets Results</span>
                    </h2>
                    <p>
                      At Infused Agency, our web design Beamsville team helps
                      local businesses grow with amazing websites. We create
                      custom Beamsville web design websites to boost your brand
                      and increase sales using the latest web designs.
                    </p>
                    <ol>
                      <li>
                        <strong>Learning About Your Business</strong>: First, we
                        learn all about your business and your goals. Your ideas
                        are super important to us, and we make sure to include
                        them in our plan.
                      </li>
                      <li>
                        <strong>Making a Custom Web Design Plan</strong>: After
                        we know what you need, we work with you to make a
                        special web design plan just for you. We explain
                        everything clearly, so you don’t need to be a tech
                        expert.
                      </li>
                      <li>
                        <strong>Using Effective Web Design Tools:</strong>
                        {""} We use simple yet powerful tools to make your
                        website look great,{" "}
                        <Link href="/beamsville-seo-company">
                          rank higher on Google
                        </Link>
                        , and turn visitors into customers. Our goal is to
                        create websites that help you get more sales.
                      </li>
                    </ol>
                    <p>
                      We have helped many businesses in the Beamsville area with
                      their web design projects. Our goal is to create websites
                      that look good and help attract more customers.
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
                      alt="web design beamsville"
                    />
                    <br />
                    <br />
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23282.936303750226!2d-79.49941746955109!3d43.15981920227602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ca6a63bd9bd41%3A0x22e434fb6db3b5f!2sBeamsville%2C%20Lincoln%2C%20ON!5e0!3m2!1sen!2sca!4v1725980490735!5m2!1sen!2sca"
                      width="100%"
                      height="450"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </motion.div>
                </Col>
              </Row>
              <Row className="pd-top-80 align-items-center">
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
                      alt="beamsville web design"
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
                    <h2>A Beamsville Web Design Agency With Integrity</h2>
                    <p>
                      At Infused Agency, our Beamsville web design agency helps
                      all types of businesses, from big companies to small local
                      shops, create amazing websites. Your website is often the
                      first thing a potential customer sees, and it should show
                      how great your business is. Our web design strategies are
                      easy to understand and help you get more customers.
                    </p>

                    <p>
                      We focus on three key areas to help your Beamsville
                      business succeed:
                    </p>
                    <ul>
                      <li>
                        <strong>Custom Web Design</strong>: Our web design
                        Beamsville team makes great websites just for you. Our
                        custom web design makes sure your site stands out and
                        shows off what makes your business unique.
                      </li>
                      <li>
                        <strong>Responsive Mobile-Friendly Web Design</strong>:
                        We make sure your website looks awesome and works well
                        on all devices, like phones and tablets. Our responsive
                        design helps you reach more customers no matter how they
                        visit your site.
                      </li>
                      <li>
                        <strong>WordPress Web Design</strong>: We build websites
                        using WordPress, which is a popular and easy-to-use
                        platform. With our WordPress web design, you can easily
                        update and manage your site.
                      </li>
                    </ul>

                    <p>
                      These services help make your online presence strong and
                      easy to handle, helping you get more leads, increase
                      sales, and build trust with your customers. If you want to
                      grow your business online, Infused Agency is here to help!
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
                    <h3>Our Web Design Beamsville Team</h3>
                    <p>
                      Our web design Beamsville team has been helping businesses
                      in Beamsville with web design for{" "}
                      <strong>over ten years</strong>. We know what works best
                      to get more customers. Our main goal is to help your
                      business <strong>attract more people</strong> and
                      <strong>make more sales</strong> with our special web
                      design techniques.
                    </p>

                    <p>
                      When you choose us,{" "}
                      <strong>
                        you get a team that knows all about Beamsville
                      </strong>
                      . We make sure your website stands out to both locals and
                      visitors. We want to help your business grow by{" "}
                      <strong>getting more people to visit your site</strong>.
                    </p>

                    <p>
                      We use our SEO skills on your website design to help your
                      business show up on Google when people search for services
                      in Beamsville. This{" "}
                      <strong>helps more people find your business</strong>,
                      which can lead to more sales. We love seeing our clients
                      succeed and work hard to make it happen!
                    </p>

                    <p>
                      We also make sure your business appears in local search
                      results. If someone is looking for a restaurant, shop, or
                      service nearby, we make sure your business is one of the
                      first they see.{" "}
                      <strong>
                        This helps attract more customers from your area.
                      </strong>
                    </p>

                    <p>
                      With our great knowledge, top-quality work, and friendly
                      service, we’ve become a{" "}
                      <strong>trusted web design company</strong> for Beamsville
                      businesses. If you want to grow your business online,
                      we’re here to help!
                    </p>

                    <Image
                      className="img-fluid"
                      src={best}
                      alt="web design company beamsville-lincoln"
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
                        alt="web design agency beamsville client review"
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5821.424311572049!2d-79.21034682335578!3d43.15257338466515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3507111975161%3A0x18a1198be6280a70!2s%F0%9F%9A%80%20Infused%20Agency%20%7C%20Beamsville%20Web%20Design%20%26%20SEO%20Company!5e0!3m2!1sen!2sca!4v1725979720923!5m2!1sen!2sca"
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
                      Our Beamsville <span>Web Design Services</span>
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
                      <Image src={img1} alt="web design beamsville company" />
                      <h3>Web Design</h3>
                      <p>
                        Our Beamsville web designs make sure that visitors have
                        a great time exploring your site. We use smart ideas to
                        keep people interested and help them find what they need
                        quickly. This way, everyone can enjoy a smooth
                        experience, whether they’re on a phone, tablet, or
                        computer!
                      </p>
                    </div>
                  </Col>
                  <Col lg="4" className="d-flex">
                    <div className="card">
                      <Image src={img2} alt="wordpress web design beamsville" />
                      <h3>Custom WordPress Design</h3>
                      <p>
                        We create custom WordPress websites to help your
                        business use the best website system in the world. Our
                        special way of designing makes sure your website is
                        unique, easy to use, and just right for you.
                      </p>
                    </div>
                  </Col>
                  <Col lg="4" className="d-flex">
                    <div className="card">
                      <Image src={img3} alt="web development beamsville" />
                      <h3>Web Development</h3>
                      <p>
                        We build custom websites to help your business look
                        great online. Our special designs make sure your site is
                        unique, easy to use, and perfect for you. With our
                        custom websites, you can make a strong online presence
                        and give your visitors a great experience.
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
                      <span>Beamsville Web Design Agency</span>
                    </h2>
                    <div className="card">
                      <img
                        alt="beamsville web design agency client testimonial"
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
                      alt="beamsville web design agency case study"
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
                      KD Flowers didn't have a website, so people couldn't find
                      them online. They wanted to grow their business and get
                      new customers from Google searches.
                    </p>

                    <h2>How We Helped</h2>
                    <p>
                      We made a cool new website for KD Flowers that's easy for
                      people to use. It looks great and works on both phones and
                      computers.
                    </p>

                    <p>
                      After we finished the website, we helped more people find
                      it. We used something called "local SEO" to make sure KD
                      Flowers showed up when people in their area searched for
                      flower shops on Google.
                    </p>

                    <h2>What Happened Next</h2>
                    <p>
                      Since we put up the new website, KD Flowers has gotten
                      lots of new customers! Their website looks amazing, and
                      now they show up at the top of Google searches in their
                      area.
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
                      <span>Frequently Asked</span> Beamsville Web Design Agency
                      Questions{" "}
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
                      A new website can range from $250 a month (for one year)
                      for a basic one to $1,000 a month (for one year) or more
                      for a fancy one with lots of features. It's like choosing
                      between a basic car and a luxury one. Check our{" "}
                      <Link href="/pricing">pricing page</Link> to see what
                      works best for you!
                    </p>

                    <h3>How much does a custom web design cost?</h3>
                    <p>
                      A custom web design is like getting a suit made just for
                      you. It starts at $300 a month (for one year) for a simple
                      site and can go up to $1,000 a month (for one year) or
                      more if you want lots of special features. You can find
                      all the details on our pricing page.
                    </p>

                    <h3>How much does a templated web design cost?</h3>
                    <p>
                      A templated design is like buying clothes from a store. A
                      small site with 1-3 pages costs around $200 a month (for
                      one year), and bigger sites cost more. Check out our
                      pricing page for more info.
                    </p>

                    <h3>How long will it take to get a new website?</h3>
                    <p>
                      A simple website usually takes about 1-2 weeks. Fancier
                      websites can take 4-12 weeks, depending on how complicated
                      they are.
                    </p>

                    <h3>What are the pros and cons of a custom web design?</h3>
                    <p>
                      <strong>Pros:</strong>
                    </p>
                    <ul>
                      <li>It's made just for your business</li>
                      <li>It fits your needs perfectly</li>
                      <li>You can make it do exactly what you want</li>
                    </ul>
                    <p>
                      <strong>Cons:</strong>
                    </p>
                    <ul>
                      <li>It costs more money</li>
                      <li>It takes longer to create</li>
                      <li>You might need extra help to update it</li>
                    </ul>

                    <h3>
                      What are the pros and cons of a template web design?
                    </h3>
                    <p>
                      <strong>Pros:</strong>
                    </p>
                    <ul>
                      <li>It costs less money</li>
                      <li>It's quicker to set up</li>
                      <li>It's easier to update on your own</li>
                    </ul>
                    <p>
                      <strong>Cons:</strong>
                    </p>
                    <ul>
                      <li>It might look like other websites</li>
                      <li>It might not have all the features you want</li>
                      <li>You have less control over how it looks</li>
                    </ul>

                    <h3>Are your web designs responsive / mobile-friendly?</h3>
                    <p>
                      Yes! Our websites work well on phones, tablets, and
                      computers.
                    </p>

                    <h3>Can you build an e-commerce website?</h3>
                    <p>
                      Absolutely! We can create websites where you can sell
                      things online.
                    </p>

                    <h3>Can you build websites with extra functionalities?</h3>
                    <p>
                      Definitely! We can add features like member-only areas,
                      blogs, appointment booking, photo galleries, forms, social
                      media links, online stores, and payment options.
                    </p>

                    <h3>How do you approach website design?</h3>
                    <p>
                      We create websites that are simple, easy to use, modern,
                      and clean. We focus on making your business look great and
                      work well for your customers, not just on making it look
                      nice.
                    </p>

                    <h3>Do you do website redesigns?</h3>
                    <p>Yes, we can give your old website a fresh look!</p>

                    <h3>Can I update the website myself?</h3>
                    <p>
                      Yes, you can! We'll show you how, and it's pretty easy.
                    </p>

                    <h3>Are the websites you build accessible?</h3>
                    <p>
                      We make sure our websites are easy for everyone to use. If
                      you need special features for accessibility, we can add
                      those too.
                    </p>

                    <h3>Do you build mobile-friendly sites?</h3>
                    <p>Yes, all our sites work great on phones and tablets.</p>

                    <h3>Which website builder is best?</h3>
                    <p>
                      We like using WordPress. It’s like having a Swiss Army
                      knife for building websites.
                    </p>

                    <h3>Who hosts the website?</h3>
                    <p>
                      For simple websites, we handle it. For larger WordPress
                      sites, you’ll need to host it yourself, but we’ll help you
                      set it up.
                    </p>

                    <h3>Do you work with everyone?</h3>
                    <p>
                      We work with all kinds of businesses, especially those in
                      Niagara.
                    </p>

                    <h3>Do I provide the content for my website?</h3>
                    <p>
                      Yes, you know your business best! But if you need help, we
                      can assist for an extra fee.
                    </p>

                    <h3>How much input do I have?</h3>
                    <p>
                      A lot! It’s like building with Lego – we’ll work together
                      to make sure you love the final result.
                    </p>

                    <h3>What if I need help after my website is live?</h3>
                    <p>
                      Don’t worry, we’re here for you! We’ll help you out if you
                      need anything after your website is up and running.
                    </p>
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
                    Delivering Web Design Services surrounding Beamsville:
                  </h2>
                  <Link href="/beamsville-web-design">Beamsville, ON</Link> |{" "}
                  <Link href="/crystal-beach-web-design">
                    Crystal Beach, ON
                  </Link>{" "}
                  | <Link href="/fonthill-web-design">Fonthill, ON</Link> |{" "}
                  <Link href="/fort-erie-web-design">Fort Erie, ON</Link> |{" "}
                  <Link href="/grimsby-web-design">Grimsby, ON</Link> |{" "}
                  <Link href="/">Niagara Falls, ON</Link> |{" "}
                  <Link href="/">Niagara-on-the-Lake, ON</Link> |{" "}
                  <Link href="/port-colborne-web-design">
                    Port Colborne, ON
                  </Link>{" "}
                  | <Link href="/">St. Catharines, ON</Link> |{" "}
                  <Link href="/thorold-web-design">Thorold, ON</Link> |{" "}
                  <Link href="/wainfleet-web-design">Wainfleet, ON</Link> |{" "}
                  <Link href="/web-design-welland">Welland, ON</Link>
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
                  <h2>Need Beamsville Web Design Services?</h2>
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
