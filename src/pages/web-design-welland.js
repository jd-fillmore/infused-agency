import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import { Helmet } from "react-helmet";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";
import website from "../img/welland-web-design-company.webp";
import treeImg from "../img/tree-reports.png";
import kdImg from "../img/niagara-web-design.png";
import cassImg from "../img/featured-seo.png";
import bgImage from "../img/inner-seo.jpg";
import about from "../img/about.jpg";
import About from "../../components/Home/About/about";

const SEO = () => {
  return (
    <>
      <Helmet>
        <title>Welland Web Design | Infused Agency</title>
        <meta
          name="description"
          content="Discover Welland's Premier Web Design Company. Our expert team specializes in crafting websites designed to elevate your brand's reputation and drive increased sales for your business. Click here to get your free quote and take the first step toward a visually stunning and high-performing online presence!"
        />
        <link rel="canonical" href="https://infused.agency/welland-web-design" />
      </Helmet>
      <Nav />
      <InnerHero
        title="Welland Web Design Company"
        description="Discover Welland's Premier Web Design Company. Our expert team specializes in crafting websites designed to elevate your brand's reputation and drive increased sales for your business. Click here to get your free quote and take the first step toward a visually stunning and high-performing online presence!"
        bgImage={bgImage}
      />
      <InnerContent>
        <section className="seo-page">
          <Container>
            <Row className="web pd-btm-80">
              <Col md="4">
                <Image
                  className="img-fluid"
                  src={website}
                  alt="Welland web design company, Welland web design agency, Welland web design services"
                />
              </Col>
              <Col lg={{ size: 7, offset: 1 }}>
                <p>
                  Explore the exceptional <strong>Welland web design services</strong> offered by our dedicated{" "}
                  <strong>Welland web design company</strong>. We pride ourselves on consistently delivering outstanding
                  web design solutions that yield impressive results for our clients. Discover the myriad benefits of
                  investing in professional web design services for your local company:
                </p>
                <ul>
                  <li>Enhances and fortifies your company's branding</li>
                  <li>Elevates the reputation and credibility of your Welland-based business</li>
                  <li>Generates increased leads and revenue for your company</li>
                </ul>
                <p>
                  Partnering with our company for web design services not only strengthens your company's reputation but
                  also serves as a powerful catalyst for attracting a larger customer base.
                </p>
              </Col>
            </Row>
          </Container>
          <section className="results">
            <Container>
              <Row>
                <Col lg="12 text-center pd-btm-40">
                  <h2>
                    Unlock Success with Our Welland Web Design Services <span>See Real Results</span>
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col lg="4">
                  <div className="card">
                    <Image className="img-fluid" src={treeImg} alt="treereports" />
                    <h4>TreeReports</h4>
                    <p>
                      "Fantastic experience from start to end. Infused Agency is organized, thorough and professional. I
                      highly recommend their company if you are thinking of needing their Welland web design services."
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
                          <span>1,500% increase</span> in Google rankings for multiple keywords
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
                      "Infused Agency drastically improved my online presence. By using their web design services, my
                      Welland company went from having no website at all to one that brings in new customers every
                      week."
                    </p>
                    <ul>
                      <li>
                        <strong>
                          <span>10,700 website views</span> per month
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span>20,000% increase</span> in new leads in the first 6 months
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span>5,800 new people</span> discovering website per month
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
                    <Image className="img-fluid" src={cassImg} alt="Cass-A-Bella Construction" />
                    <h4>Cass-A-Bella Construction</h4>
                    <p>
                      "Great Job, WELL DONE. I'm very pleased with the SEO work on my new web site. If you ever need a
                      web design for your Welland business I do recommend Infused Agency for their services. JD keep up
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
                          <span>13,000% increase</span> in new leads in first 6 months
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span>2,500 new people</span> discovering website per month
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
          <section className="call-out">
            <Container>
              <Row>
                <Col lg="12 text-center">
                  <h3>Elevate Your Business with Premier Welland Web Design Services</h3>
                  <p>Take the first step towards growth. Click the button below to secure your free quote.</p>
                  <a target="_blank" rel="noreferrer" href="https://calendly.com/infused-agency/project-discovery/">
                    <button>Get Free Quote</button>
                  </a>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="seo-services">
            <Container>
              <Row className="pd-top-80 pd-btm-40">
                <Col lg="12 text-center">
                  <h2>
                    Leading Welland <span>Web Design</span> Services
                  </h2>
                  <p>Create websites that drive customer acquisition for your company.</p>
                </Col>
              </Row>
              <Row>
                <Col lg="4">
                  <h5>Enhance Visibility with Search Engine Optimization (SEO)</h5>
                  <p>
                    We ensure your websites are effectively indexed and prominently appear for targeted keywords on
                    Google. Search engine optimization is an integral aspect of our comprehensive Welland web design
                    services, ensuring that your website is easily discoverable by your potential customers.
                    Collaborating with our Welland web design experts and leveraging our dedicated{" "}
                    <Link href="/welland-seo-company/">Welland SEO services</Link>, your website becomes a powerful tool
                    for driving new company revenue and attracting customers.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Comprehensive Web Design &amp; Development in Welland</h5>
                  <p>
                    Experience the expertise of our Welland web designers who craft websites to enhance your brand's
                    reputation, ultimately driving customer acquisition. Our award-winning web designs not only attract
                    customers but also prioritize search engine optimization and responsive web design best practices,
                    contributing to increased brand awareness.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Tailored Excellence with Custom Web Design in Welland</h5>
                  <p>
                    Experience the uniqueness of our approach – every website we design is fully customized. Our Welland
                    web designers craft modern designs with a keen understanding of your business goals. Your vision is
                    at the heart of our process, seamlessly integrated by our expert Welland web design team.
                  </p>
                </Col>
              </Row>
              <Row className="pd-btm-80">
                <Col lg="4">
                  <h5>Seamless Experience with Responsive Web Design in Welland</h5>
                  <p>
                    As an integral part of our Welland web design services, we prioritize responsive web design to
                    ensure optimal user navigation on every device. Our dedicated Welland web design experts employ
                    custom coding, guaranteeing that your website not only looks great but functions seamlessly across
                    various devices and computers.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Empowering Your Online Presence with WordPress Web Design in Welland</h5>
                  <p>
                    Experience the versatility of our Welland web design company, where we exclusively leverage
                    WordPress for all projects requiring a content management system (CMS). Powering nearly 50% of the
                    web, WordPress stands out as the clear choice for its ease of development and user-friendly
                    interface. We choose WordPress to seamlessly develop websites that are not only technically robust
                    but also effortlessly manageable for our clients.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Thrive Online with E-Commerce Web Design in Welland</h5>
                  <p>
                    In the post-COVID era, establishing an online presence is crucial for product or subscription-based
                    businesses. Our Welland web design agency specializes in crafting e-commerce websites that serve as
                    powerful sales platforms, enabling you to reach a broader audience. Trust our Welland web designers
                    to create and develop a stunning, modern online store that showcases your products and expands your
                    market presence.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="call-out">
            <Container>
              <Row>
                <Col lg="12 text-center">
                  <h3>Elevate Your Online Presence with Welland Web Design Experts</h3>
                  <p>Take the first step towards success. Click the button below to secure your free quote today.</p>
                  <a target="_blank" rel="noreferrer" href="https://calendly.com/infused-agency/project-discovery/">
                    <button>Get Free Quote</button>
                  </a>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="seo-why pd-top-80">
            <Container>
              <Row>
                <Col lg="12 text-center pd-btm-40">
                  <h2>
                    Choose Excellence with Infused Agency - Your Premier <span>Welland</span> Web Design Partner
                  </h2>
                  <p>Elevate your brand's reputation with the expertise of our web design professionals.</p>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <p>
                    Since 2013 we've been able to help countless local Welland businesses (and beyond!) with their{" "}
                    <Link href="/web-design">website design</Link>,{" "}
                    <Link href="/digital-marketing-niagara">digital marketing</Link>,{" "}
                    <Link href="/Welland-seo-company/">search engine optimization (SEO)</Link> ,{" "}
                    <Link href="/wordpress-developer-niagara">WordPress development</Link> and e-commerce website
                    development .
                  </p>
                  <p>
                    We've been able to help small, local businesses all the way to large enterprise companies with
                    increasing traffic to their websites, build modern websites for them and ultimately bringing them
                    more revenue through digital channels.
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
                <h3>How much does a new website cost?</h3>
                <p>
                  There's no single answer to this question. It entirely depends on the needs of the project. Every web
                  design and development project is unique in it's design, purpose, functionality and more. In our free
                  consultation sessions we'll ask lots of questions, assess your needs and then give you a quote based
                  on our findings.
                </p>
                <h3>How long will it take to get a new website?</h3>
                <p>
                  Typically between 6 and 8 weeks. Keep in mind this completely depends on the client, though. For
                  example - if we need content or approval from you and there are potential delays, this could delay the
                  launch. However if you send over content / approval for things along the way quickly, the more quick
                  your website will launch.
                </p>
                <h3>Do you only create WordPress websites?</h3>
                <p>
                  No. WordPress is great for a lot of use cases. You can update your website on your own without needing
                  a developer (we teach you). There's a rich ecosystem of plugins we utilize to speed up development.
                  However, sometimes a hand-coded website far outperforms a WordPress site depending on the situation.
                </p>
                <h3>Do I have to be local to work with you?</h3>
                <p>Nope! We have clients locally but have also served clients all across the world.</p>
                <h3>Will I be able to update the website when it's finished?</h3>
                <p>
                  If it's a WordPress website, yes. If it's not, our team of developers can update the website for you.
                </p>
                <h3>Can you maintain my website for me?</h3>
                <p>
                  Absolutely. We understand that business owners are busy a lot of the time. We can take that stress off
                  of you by updating your website for you.
                </p>
                <h3>Will my website be mobile-friendly?</h3>
                <p>
                  Of course. Responsive design, aka mobile websites, are a big part of today's society. We make sure to
                  adhere to that so your customers have a pleasant experience on your website.
                </p>
                <h3>When do I pay?</h3>
                <p>
                  Equal payments are made at the start, midway through and at the end of the project.However we can
                  accomodate with smaller monthly payments if need be. We accept e-transfer, cash or credit card
                  payments.
                </p>
                <h3>How much input do I have?</h3>
                <p>
                  Lots! We work with our clients very closely. We make sure that based on our conversations, there are
                  no surprises when it comes to how your website looks or functions.
                </p>
                <h3>Do I provide the content for my website?</h3>
                <p>
                  Yes. You're the expert of your business so typically it's you that provides it. If you don't want to
                  or can't, we will happily write the content at an additional cost.
                </p>
                <h3>What about website hosting?</h3>
                <p>
                  We have a list of favourites hosting providers that we use. During our free consultation we can talk
                  about these providers.
                </p>
                <h3>What if I need help after my site is live?</h3>
                <p>We're only an email away! Contact us any time and we can help you with whatever you need.</p>
              </Col>
            </Row>
          </Container>
          <About
            city="Welland"
            intro={[
              "The Regional Municipality of ",
              <a href="https://www.welland.ca/">Welland</a>,
              " is located directly in the centre of the heart of the Niagara region, within a half-hour distance of driving to Niagara Falls. Traditionally it's known to be the place 'where rails and water meet'. This is referring toe the waterways of the Welland Canal and the Welland River.",
            ]}
            area="81.04"
            population="52,293"
            topSights={[
              <a href="http://www.niagarawellandcanal.com/">Welland Canal</a>,
              ", ",
              <a href="https://www.wellandmuseum.ca/">Welland Museum</a>,
              ", ",
              <a href="https://www.tripadvisor.ca/Attraction_Review-g181735-d11753746-Reviews-Chippawa_Park-Welland_Ontario.html">
                Welland Park
              </a>,
            ]}
            qOne="What is Welland known for?"
            qOneAns="It's been historically known as the place where rails and water meet, which refers to the railways from Buffalo to Toronto and the waterways of Welland Canal the Welland River."
            qTwo="Is Welland a good place to live?"
            qTwoAns="Welland had made MacLean's 2021 list of the best places to live in Canada. The ability to work from home was heavily taken into account."
            qThree="Is Welland poor?"
            qThreeAns="Although it's stereotypical, most people that live in Welland are above the low-income cut off area. The majority of people living in Welland are above the 2016 national median income."
            qFour="Why is Welland called the Rose City?"
            qFourAns="There's an abunance of roses grown locally within the Welland area. This is the reason why Welland is referred to as the Rose City."
            mapURL="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93404.86381712716!2d-79.29982875026296!3d42.980338098531114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d349cb1aaf497d%3A0xb6a05855226db6e6!2sWelland%2C%20ON!5e0!3m2!1sen!2sca!4v1652793794737!5m2!1sen!2sca"
          />
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  );
};

export default SEO;
