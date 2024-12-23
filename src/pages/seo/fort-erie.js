import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import Nav from "../../../components/Nav/nav";
import InnerHeroCities from "../../../components/innerHero/innerHeroCIties";
import InnerContent from "../../../components/innerContent/innerContent";
import CTA from "../../../components/CTA/cta";
import Footer from "../../../components/Footer/footer";
import treeImg from "../../img/tree-reports.png";
import kdImg from "../../img/kd-flowers-city-page.png";
import cassImg from "../../img/featured-seo.png";
import about from "../../img/about.jpg";
import clients from "../../img/seo-clients.png";
import hero from "../../img/seo-crystal-beach.webp";

const SEO = () => {
  return (
    <>
      <Head>
        <title>SEO Fort Erie, ON | Best Local Search Engine Optimization</title>
        <meta
          name="description"
          content="Fort Erie's trusted SEO services since 2013. Enhance your rankings, attract more leads, and grow revenue with expert SEO solutions tailored to your business."
        />
        <link rel="canonical" href="https://infused.agency/seo/fort-erie" />
      </Head>
      <Nav />
      <InnerHeroCities
        title="SEO Fort Erie"
        subTitle="Your Local SEO Company in Fort Erie"
        description="We offer top Fort Erie SEO services, helping businesses appear in Google when people search. Get more traffic, and get more leads."
        image={hero}
        alt="seo fort erie"
      />
      <InnerContent>
        <Container>
          <Row>
            <Col lg="6">
              <p>
                At Infused Agency, our SEO Fort Erie team is really dedicated to
                what we do. You won’t find a more passionate team of{" "}
                <Link href="/seo">search engine optimization (SEO)</Link>{" "}
                experts anywhere else in Fort Erie.
              </p>

              <p>
                We like to work with clients who care about their businesses and
                understand how{" "}
                <Link href="/posts/local-seo-tips-niagara">
                  important their Fort Erie search engine optimization is
                </Link>
                . We take time to teach our clients and work closely with them
                to achieve great results together.
              </p>
              <p>
                We know we’re better than most Fort Erie SEO companies, and our
                success and{" "}
                <Link href="/reviews">growing list of happy clients</Link> prove
                it. Infused Agency was created to provide amazing SEO services
                in Fort Erie, led by our skilled team.
              </p>
              <p>
                Our SEO Fort Erie team will help your business rank on Google!
              </p>
            </Col>
            <Col lg="6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93570.65561983825!2d-79.09664707412894!3d42.87109250578419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d33e24e7337d03%3A0x885d5008ef9ad9d1!2sFort%20Erie%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1734964286820!5m2!1sen!2sus"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <section className="our-clients pd-top-120 pd-btm-120">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <h2>
                      Clients We've <span>Helped</span>
                    </h2>
                    <p>
                      For over ten years, we have built strong partnerships with
                      many brands and businesses in Fort Erie and beyond.
                    </p>
                  </div>
                  <Col lg="6">
                    <Image
                      className="img-fluid"
                      src={clients}
                      alt="seo fort erie clients"
                    />
                  </Col>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
        <section className="light pd-top-120 pd-btm-120">
          <Container>
            <Row className="pd-btm-40">
              <Col lg="12 text-center">
                <h2>Fort Erie SEO Services</h2>
                <p>
                  Solutions That Bring In Qualified Fort Erie Leads And Boost
                  Your Sales
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <h5>Keyword Research &amp; Strategy</h5>
                <p>
                  Infused Agency's company serving Fort Erie conducts specific
                  keyword research that covers specifically what your users are
                  searching for. We look at keywords as the main foundation to
                  your Fort Erie project. Beyond this, we dive into the
                  technicalities to further deliver value to your customers.
                </p>
              </Col>
              <Col lg="4">
                <h5>Link Building</h5>
                <p>
                  Off of your website, our Fort Erie experts utilize efforts to
                  build links to your website, to help your site rise in search
                  rankings. When other websites link back to your own, you can
                  be seen as authoratative and rank for relevant keyword
                  searche. We can also help filter out certain backlinks that
                  Google may refer to as spammy.
                </p>
              </Col>
              <Col lg="4">
                <h5>Content Writing</h5>
                <p>
                  Our Fort Erie services are conducted by a highly trained group
                  of marketers, which includes content writers. At Infused, you
                  can take advantage of our content writing skills to create
                  content that attracts highly qualified leads. We help mix
                  keywords and your brand voice together, to help bring in more
                  leads to your website.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <h5>On-Page Fort Erie Search Engine Optimization</h5>
                <p>
                  It's very important that your on-page work is done well, as it
                  can signal to Google that you may give your users a poor user
                  experience. This is why our Fort Erie agency looks for and
                  fixes these issues for you. We conduct on-page search engine
                  optimization to help bolster your online presence, amplify
                  your lead generation and help boost sales.
                </p>
              </Col>
              <Col lg="4">
                <h5>Local Fort Erie Search Engine Optimization</h5>
                <p>
                  For a more local approach, our Search Engine Optimization
                  specialists can leverage the power of local Search Engine
                  Optimization. We help local customers find your website in
                  local search engine rankings. We do this by employing on and
                  off page search engine optimization best practices, to help
                  raise your local website in Google's rankings.
                </p>
              </Col>
              <Col lg="4">
                <h5>Technical Fort Erie Search Engine Optimization</h5>
                <p>
                  If you find out about some technical mishaps on your website,
                  our Search Engine Optimization experts are here to help. We'll
                  dive into your website by conducting a site-wide audit to
                  check for problems related to website speed, content and
                  optimization. Our team will fix these issues, helping your
                  website get back on the right track.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="pd-top-120 pd-btm-120">
          <Container>
            <Row>
              <Col lg="12">
                <h2>100% Clear Fort Erie Search Engine Optimization</h2>
                <p>At Infused Agency, our team has one goal:</p>
                <p>
                  <strong>
                    To provide affordable, honest, and completely clear Search
                    Engine Optimization services in Fort Erie.
                  </strong>
                </p>
                <p>
                  As one of the top Search Engine Optimization companies in Fort
                  Erie, we create and manage custom plans that fit your business
                  needs. Our skilled team uses their expertise to help your
                  business grow by delivering great results.
                </p>
                <p>
                  Search Engine Optimization takes time—there's no way around
                  it. It’s more like a marathon than a sprint, and we are always
                  honest with our clients about this. We set realistic goals so
                  that we can surprise you with better results.
                </p>
                <p>
                  Our reports are simple and easy to understand. We provide
                  complete keyword tracking and link-building updates.
                  Everything we do during your Search Engine Optimization
                  campaign will be clearly explained, and our Search Engine
                  Optimization experts are always here to answer any questions.
                </p>
                <p>
                  You can review and approve all content, and we make any
                  necessary changes to ensure it matches your brand and voice
                  perfectly.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="light pd-top-120 pd-btm-120">
          <Container>
            <Row>
              <Col lg="12 text-center pd-btm-40">
                <h2>
                  Our Fort Erie Search Engine Optimization Clients{" "}
                  <span>Get Results</span>
                </h2>
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <div className="card">
                  <Image
                    className="img-fluid"
                    src={treeImg}
                    alt="treereports"
                  />
                  <h4>TreeReports</h4>
                  <p>
                    "Fantastic experience from start to end. Infused Agency is
                    organized, thorough and professional. I highly recommend
                    their Search Engine Optimization Fort Erie company if you
                    are thinking of needing their Search Engine Optimization
                    services."
                  </p>
                  <ul>
                    <li>
                      <strong>
                        <span>385% increase</span> in being found online
                      </strong>
                    </li>
                    <li>
                      <strong>
                        <span>4,000% increase</span> in new website visits
                      </strong>
                    </li>
                    <li>
                      <strong>
                        <span>1,500% increase</span> in Google rankings for
                        multiple keywords
                      </strong>
                    </li>
                  </ul>
                  <Link href="/tree-reports">
                    Learn More
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
                  </Link>
                </div>
              </Col>
              <Col lg="4">
                <div className="card">
                  <Image className="img-fluid" src={kdImg} alt="KD Flowers" />
                  <h4>KD Flowers</h4>
                  <p>
                    "Infused Agency drastically improved my online presence. By
                    using their Search Engine Optimization services, my company
                    went from not ranking at all to the first page of Google for
                    tons of keywords."
                  </p>
                  <ul>
                    <li>
                      <strong>
                        <span>10,700 website views</span> per month
                      </strong>
                    </li>
                    <li>
                      <strong>
                        <span>20,000% increase</span> in new leads in the first
                        6 months
                      </strong>
                    </li>
                    <li>
                      <strong>
                        <span>5,800 new people</span> discovering website per
                        month
                      </strong>
                    </li>
                  </ul>
                  <Link href="/kd-florist">
                    Learn More
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
                  </Link>
                </div>
              </Col>
              <Col lg="4">
                <div className="card">
                  <Image
                    className="img-fluid"
                    src={cassImg}
                    alt="Cass-A-Bella Construction"
                  />
                  <h4>Cass-A-Bella Construction</h4>
                  <p>
                    "Great Job, WELL DONE. I'm very pleased with the Search
                    Engine Optimization work on my new web site. If you ever
                    need a Search Engine Optimization for your business I do
                    recommend Infused Agency for their services. JD keep up the
                    great work. Thank you."
                  </p>
                  <ul>
                    <li>
                      <strong>
                        <span>12,000 photo views</span> per month
                      </strong>
                    </li>
                    <li>
                      <strong>
                        <span>13,000% increase</span> in new leads in first 6
                        months
                      </strong>
                    </li>
                    <li>
                      <strong>
                        <span>2,500 new people</span> discovering website per
                        month
                      </strong>
                    </li>
                  </ul>
                  <Link href="/cass-a-bella-construction">
                    Learn More
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
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="seo-why pd-top-80">
          <Container>
            <Row>
              <Col lg="12 text-center pd-btm-40">
                <h2>
                  Why Choose Infused Agency As Your Search Engine Optimization
                  Agency
                </h2>
                <p>
                  Increase Your Website's Rankings With Our Search Engine
                  Optimization Experts
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <p>
                  Since 2013 we've been able to help countless local businesses
                  (and beyond!) with their website design, digital marketing,
                  search engine optimization (SEO), WordPress development, and
                  e-commerce website development.
                </p>
                <p>
                  We've been able to help small, local businesses all the way to
                  large enterprise companies with increasing traffic to their
                  websites, build modern websites for them and ultimately
                  bringing them more revenue through digital channels.
                </p>
              </Col>
              <Col lg="6">
                <Image className="img-fluid" src={about} alt="business needs" />
              </Col>
            </Row>
          </Container>
        </section>
        <Container>
          <Row className="pd-top-80 pd-btm-60">
            <Col lg="12">
              <h3>What is Search Engine Optimization?</h3>
              <p>
                Fort Erie Search Engine Optimization (SEO) is the process of
                increasing your <Link href="/web-design">websites</Link>{" "}
                visibility within Google's search results. If your website is on
                the first page of Google with our Search Engine Optimization
                services versus your website being on the 10th page, you will
                get a lot more customers.
              </p>
              <h3>
                Do I need Search Engine Optimization for my Fort Erie Business?
              </h3>
              <p>
                Does your Fort Erie business depend on attracting new customers?
                Then absolutely you need a Fort Erie Search Engine Optimization
                company to help you with Search Engine Optimization services.
                It's important that our Fort Erie Search Engine Optimization
                experts help your website rank where your customers are looking
                - on the first page of Google.
              </p>
              <h3>
                What's important when it comes to Fort Erie Search Engine
                Optimization?
              </h3>
              <p>
                There's about 200 ranking signals that Google evaluates a
                website on when it comes to Fort Erie Search Engine
                Optimization. The top factors here are domain authority (how old
                your website's domain is), the quality SEO content of your
                website, Fort Erie SEO backlinks going to your website,
                technical SEO coding on your site and more. We will clearly
                identify the strengths and weaknesses in terms of Fort Erie SEO
                that your current website has, and come up with a game plan to
                improve.
              </p>
              <h3>How long does Fort Erie SEO take?</h3>
              <p>
                There are many variables and depends on the website. For example
                - a brand new website can take upwards to a year to start seeing
                any meaningful results. A website that has been around for a
                longer amount of time could start seeing movement within 2-3
                months. It all depends on your website's standing when it comes
                to SEO.
              </p>
              <h3>How do I get on the Google Map Pack?</h3>
              <p>
                The Google Map Pack is great for Fort Erie SEO. This is the area
                where when someone searches, local companies pop up with 5 star
                reviews. If you do local SEO and get in the top 3 of this map
                pack, you're golden. The best way to get there is to optimize
                your Google My Business profile. We specialize in doing so and
                can help you rise up in the local SEO map pack rankings.
              </p>

              <h3>Our SEO Fort Erie Company is ready to help.</h3>
              <p>
                If you need our SEO company to help your company rise in Google
                with our expert SEO services, click below to get your free SEO
                quote.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://calendly.com/infused-agency/project-discovery/"
              >
                <button>Get Free Quote</button>
              </a>
            </Col>
          </Row>
        </Container>
        <section className="home-areas pd-top-80">
          <Container>
            <Row>
              <Col lg="12">
                <h2>Cities We Service</h2>
                <Link href="/seo/beamsville">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  SEO in Beamsville, ON
                </Link>{" "}
                <Link href="/seo/crystal-beach">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  SEO in Crystal Beach, ON
                </Link>{" "}
                <Link href="/seo/fonthill">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  SEO in Fonthill, ON
                </Link>{" "}
                <Link href="/seo/fort-erie">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  SEO in Fort Erie, ON
                </Link>{" "}
                <Link href="/seo/grimsby">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  SEO in Grimsby, ON
                </Link>{" "}
                <Link href="/seo/niagara">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  SEO in Niagara Falls, ON
                </Link>{" "}
                <Link href="/seo/niagara">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  SEO in Niagara-on-the-Lake, ON
                </Link>{" "}
                <Link href="/seo/port-colborne">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  SEO in Port Colborne, ON
                </Link>{" "}
                <Link href="/seo/st-catharines">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  SEO in St. Catharines, ON
                </Link>{" "}
                <Link href="/seo/thorold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  SEO in Thorold, ON
                </Link>{" "}
                <Link href="/seo/wainfleet">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  SEO in Wainfleet, ON
                </Link>{" "}
                <Link href="/seo/welland">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  SEO in Welland, ON
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  );
};

export default SEO;
