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
import kdImg from "../../img/niagara-web-design.png";
import cassImg from "../../img/featured-seo.png";
import about from "../../img/about.jpg";
import About from "../../../components/Home/About/about";
import clients from "../../img/seo-niagara-clients.png";
import hero from "../../img/seo-niagara.webp";

const SEO = () => {
  return (
    <>
      <Head>
        <title>SEO Niagara | Best SEO Company in Niagara, ON</title>
        <meta
          name="description"
          content="Top SEO Niagara services serving the Niagara Region since 2013. We help businesses of all sizes improve their SEO and get higher rankings. Grow your leads &amp; revenue today."
        />
        <link rel="canonical" href="https://infused.agency/seo/niagara" />
      </Head>
      <Nav />
      <InnerHeroCities
        title="SEO Niagara"
        subTitle="Your Local SEO Company in Niagara"
        description="We offer top Niagara SEO services, helping businesses appear in Google when people search. Get more traffic, and get more leads."
        image={hero}
        alt="seo niagara"
      />
      <InnerContent>
        <Container>
          <Row>
            <Col lg="6">
              <p>
                At Infused Agency, our SEO Niagara team is really dedicated to
                what we do. You won’t find a more passionate team of{" "}
                <Link href="/seo">search engine optimization (SEO)</Link>{" "}
                experts anywhere else in Niagara.
              </p>
              <p>
                We love SEO and link building so much that we joke with our
                clients, saying, “We are the coolest SEO nerds you’ll meet!” We
                enjoy our work, and it shows.
              </p>
              <p>
                We like to work with clients who care about their businesses and
                understand how{" "}
                <Link href="/posts/local-seo-tips-niagara">
                  important their Niagara SEO is
                </Link>
                . We take time to teach our clients and work closely with them
                to achieve great results together.
              </p>
              <p>
                We know we’re better than most Niagara SEO companies, and our
                success and{" "}
                <Link href="/reviews">growing list of happy clients</Link> prove
                it. Infused Agency was created to provide amazing SEO services
                in Niagara, led by our skilled team.
              </p>
              <p>
                Born in Niagara, founded in Niagara, our SEO Niagara team will
                help your business rank on Google!
              </p>
            </Col>
            <Col lg="6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d746188.552481925!2d-80.00600478031573!3d43.06669410655857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d34c9ec993deb7%3A0xef7f46930d192396!2sRegional%20Municipality%20of%20Niagara%2C%20ON!5e0!3m2!1sen!2sca!4v1727227849786!5m2!1sen!2sca"
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
                      many brands and businesses in Niagara and beyond.
                    </p>
                  </div>
                  <Col lg="6">
                    <Image
                      className="img-fluid"
                      src={clients}
                      alt="seo niagara clients"
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
                <h2>Niagara SEO Services</h2>
                <p>
                  Solutions That Bring In Qualified Leads And Boost Your Sales
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <h5>Keyword Research &amp; Strategy</h5>
                <p>
                  Infused Agency's SEO Niagara company conducts specific keyword
                  research that covers specifically what your users are
                  searching for. We look at keywords as the main foundation to
                  your SEO project. Beyond this, we dive into the technicalities
                  to further deliver value to your customers.
                </p>
              </Col>
              <Col lg="4">
                <h5>Link Building</h5>
                <p>
                  Off of your website, our SEO experts utilize efforts to build
                  links to your website, to help your site rise in search
                  rankings. When other websites link back to your own, you can
                  be seen as authoratative and rank for relevant keyword
                  searche. We can also help filter out certain backlinks that
                  Google may refer to as spammy.
                </p>
              </Col>
              <Col lg="4">
                <h5>Content Writing</h5>
                <p>
                  Our SEO services are conducted by a highly trained group of
                  marketers, which includes content writers. At Infused, you can
                  take advantage of our content writing skills to create content
                  that attracts highly qualified leads. We help mix keywords and
                  your brand voice together, to help bring in more leads to your
                  website.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <h5>On-Page SEO</h5>
                <p>
                  It's very important that your on-page work is done well, as it
                  can signal to Google that you may give your users a poor user
                  experience. This is why our SEO agency looks for and fixes
                  these issues for you. We conduct on-page SEO to help bolster
                  your online presence, amplify your lead generation and help
                  boost sales.
                </p>
              </Col>
              <Col lg="4">
                <h5>Local SEO</h5>
                <p>
                  For a more local approach, our SEO specialists can leverage
                  the power of local SEO. We help local customers find your
                  website in local search engine rankings. We do this by
                  employing on and off page search engine optimization best
                  practices, to help raise your local website in Google's
                  rankings.
                </p>
              </Col>
              <Col lg="4">
                <h5>Technical SEO</h5>
                <p>
                  If you find out about some technical mishaps on your website,
                  our SEO experts are here to help. We'll dive into your website
                  by conducting a site-wide audit to check for problems related
                  to website speed, content and optimization. Our team will fix
                  these issues, helping your website get back on the right
                  track.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="pd-top-120 pd-btm-120">
          <Container>
            <Row>
              <Col lg="12">
                <h2>100% Clear SEO</h2>
                <p>At Infused Agency, our team has one goal:</p>
                <p>
                  <strong>
                    To provide affordable, honest, and completely clear SEO
                    services in Niagara.
                  </strong>
                </p>
                <p>
                  As one of the top SEO companies in Niagara, we create and
                  manage custom plans that fit your business needs. Our skilled
                  team uses their expertise to help your business grow by
                  delivering great results.
                </p>
                <p>
                  SEO takes time—there's no way around it. It’s more like a
                  marathon than a sprint, and we are always honest with our
                  clients about this. We set realistic goals so that we can
                  surprise you with better results.
                </p>
                <p>
                  Our reports are simple and easy to understand. We provide
                  complete keyword tracking and link-building updates.
                  Everything we do during your SEO campaign will be clearly
                  explained, and our SEO experts are always here to answer any
                  questions.
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
                  Our SEO Clients <span>Get Results</span>
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
                    their SEO Niagara company if you are thinking of needing
                    their SEO services."
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
                    using their SEO services, my company went from not ranking
                    at all to the first page of Google for tons of keywords."
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
                    "Great Job, WELL DONE. I'm very pleased with the SEO work on
                    my new web site. If you ever need a SEO for your business I
                    do recommend Infused Agency for their services. JD keep up
                    the great work. Thank you."
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
                <h2>Why Choose Infused Agency As Your SEO Agency</h2>
                <p>Increase Your Website's Rankings With Our SEO Experts</p>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <p>
                  Since 2013 we've been able to help countless local businesses
                  (and beyond!) with their{" "}
                  <Link href="/web-design">website design</Link>,{" "}
                  <Link href="/digital-marketing-niagara">
                    digital marketing
                  </Link>
                  , search engine optimization (SEO) ,{" "}
                  <Link href="/wordpress-developer-niagara">
                    WordPress development
                  </Link>{" "}
                  and e-commerce website development.
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
        <section className="pricing pd-top-120">
          <Container>
            <Row className="text-center">
              <Col lg="12">
                <h2>
                  Affordable SEO Pricing For
                  <span>All Business Sizes</span>
                </h2>
              </Col>
            </Row>

            {/* SEO */}
            <Row className="pd-top-40">
              <Col lg="4" className="d-flex">
                <div className="card">
                  <h3>SEO Audit</h3>
                  <h4>
                    One time fee of <span>$1,000</span>
                  </h4>
                  <p>
                    Detailed analysis of your website’s SEO, highlighting areas
                    for improvement.
                  </p>
                  <div className="bg">
                    <ul>
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
                    </ul>
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
                    <span>$500</span> / month for 6 months
                  </h4>
                  <p>
                    Accelerated SEO package for enhanced rankings and traffic
                    over six months.
                  </p>
                  <div className="bg">
                    <ul>
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
                    </ul>
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
                    <span>$750</span> / month for 12 months
                  </h4>
                  <p>
                    Premium SEO service with comprehensive optimization over 12
                    months.
                  </p>
                  <div className="bg">
                    <ul>
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
                    </ul>
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
        <Container>
          <Row className="pd-top-80 pd-btm-60">
            <Col lg="12">
              <h3>What is SEO?</h3>
              <p>
                Search Engine Optimization (SEO) is the process of increasing
                your <Link href="/web-design">websites</Link> visibility within
                Google's search results. If your website is on the first page of
                Google with our SEO services versus your website being on the
                10th page, you will get a lot more customers.
              </p>
              <h3>Do I need SEO?</h3>
              <p>
                Does your business depend on attracting new customers? Then
                absolutely you need an SEO company to help you with SEO
                services. It's important that our SEO experts help your website
                rank where your customers are looking - on the first page of
                Google.
              </p>
              <h3>What's important when it comes to SEO?</h3>
              <p>
                There's about 200 ranking signals that Google evaluates a
                website on when it comes to SEO. The top factors here are domain
                authority (how old your website's domain is), the quality SEO
                content of your website, SEO backlinks going to your website,
                technical SEO coding on your site and more. We will clearly
                identify the strengths and weaknesses in terms of SEO that your
                current website has, and come up with a game plan to improve.
              </p>
              <h3>How long does SEO take?</h3>
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
                The Google Map Pack is great for local SEO. This is the area
                where when someone searches, local companies pop up with 5 star
                reviews. If you do local SEO and get in the top 3 of this map
                pack, you're golden. The best way to get there is to optimize
                your Google My Business profile. We specialize in doing so and
                can help you rise up in the local SEO map pack rankings.
              </p>
              <ul>
                <li>E-commerce company logo</li>
                <li>
                  All e-commerce product details - things like product titles,
                  images, descriptions, pricing, etc.
                </li>
                <li>Any shipping charges you'd like customers to pay.</li>
              </ul>
              <h3>Our SEO Niagara Company is ready to help.</h3>
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
      </InnerContent>
      <CTA />
      <Footer />
    </>
  );
};

export default SEO;
