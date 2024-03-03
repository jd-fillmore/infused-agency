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
import website from "../img/port-colborne-web-design-company.webp";
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
        <title>Port Colborne Web Design Experts | Top-Tier Web Design Services - Infused Agency</title>
        <meta
          name="description"
          content="Discover the top-rated Web Design Company in Port Colborne. Our expert team crafts websites dedicated to enhancing your brand's image and driving up sales. Get your complimentary quote now!"
        />
        <link rel="canonical" href="https://infused.agency/port-colborne-web-design" />
      </Helmet>
      <Nav />
      <InnerHero
        title="Port Colborne Web Design Firm"
        description="Infused Agency, recognized with awards, excels as a web design company in Port Colborne. Our mission is to assist businesses in generating increased revenue through their websites."
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
                  alt="Port Colborne web design company, Port Colborne web design agency, Port Colborne web design services"
                />
              </Col>
              <Col lg={{ size: 7, offset: 1 }}>
                <p>
                  The <strong>Port Colborne web design services</strong> offered by our{" "}
                  <strong>Port Colborne web design firm</strong> are exceptionally commendable. We consistently deliver
                  outstanding web design solutions to our clients, yielding impressive results. The importance of web
                  design services for any local company is manifold:
                </p>
                <ul>
                  <li>Enhances company branding.</li>
                  <li>Elevates your Port Colborne company's reputation and trustworthiness.</li>
                  <li>Generates more leads and company revenue.</li>
                </ul>
                <p>
                  Opting for web design services from our company not only enhances your company's reputation but also
                  serves as an effective strategy for attracting more customers.
                </p>
              </Col>
            </Row>
          </Container>
          <section className="results">
            <Container>
              <Row>
                <Col lg="12 text-center pd-btm-40">
                  <h2>Achieve Results with Our Port Colborne Web Design Services</h2>
                </Col>
              </Row>
              <Row>
                <Col lg="4">
                  <div className="card">
                    <Image className="img-fluid" src={treeImg} alt="treereports" />
                    <h4>TreeReports</h4>
                    <p>
                      "Fantastic experience from start to end. Infused Agency is organized, thorough and professional. I
                      highly recommend their company if you are thinking of needing their Port Colborne web design
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
                      Port Colborne company went from having no website at all to one that brings in new customers every
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
                      web design for your Port Colborne business I do recommend Infused Agency for their services. JD
                      keep up the great work. Thank you."
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
                  <h3>Prepared to Expand Your Business with Premier Port Colborne Web Design Services?</h3>
                  <p>Simply click the button below to request your complimentary quote.</p>
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
                    Tailored Port Colborne <span>Web Design</span> Solutions
                  </h2>
                  <p>Creating Websites That Drive Customer Acquisition for Your Company</p>
                </Col>
              </Row>
              <Row>
                <Col lg="4">
                  <h5>Advanced Search Engine Optimization (SEO)</h5>
                  <p>
                    We prioritize the indexing and prominent visibility of your websites for targeted Google keywords.
                    Search engine optimization stands as a crucial element within our Port Colborne web design services,
                    guaranteeing the easy discovery of your website by your customers. With the expertise of our Port
                    Colborne web design specialists and engaging{" "}
                    <Link href="/port-colborne-seo">Port Colborne SEO services</Link>, your website transforms into a
                    driving force for acquiring new revenue and customers for your company.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Innovative Web Design &amp; Development</h5>
                  <p>
                    Crafting websites that enhance your brand's reputation and attract more customers is the forte of
                    our Port Colborne web designers. Our award-winning web designs go beyond customer attraction by
                    incorporating best practices in search engine optimization and responsive web design, contributing
                    to an amplified brand awareness.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Bespoke Web Design Solutions</h5>
                  <p>
                    Each website we design for our clients is tailored to their unique needs. Our Port Colborne web
                    designers specialize in creating modern website designs that align with your business goals. We
                    ensure to incorporate your vision seamlessly into the design process, guided by the expertise of our
                    Port Colborne web design professionals.
                  </p>
                </Col>
              </Row>
              <Row className="pd-btm-80">
                <Col lg="4">
                  <h5>Adaptive Web Design</h5>
                  <p>
                    As an integral element of our Port Colborne web design services, we prioritize responsive web design
                    to ensure seamless navigation for your users across any device. Our Port Colborne web design experts
                    employ custom coding techniques to guarantee your website looks exceptional on every device or
                    computer.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>WordPress-Centric Web Design</h5>
                  <p>
                    In our Port Colborne web design company, we exclusively utilize WordPress for all website projects
                    requiring a content management system (CMS). Given that WordPress powers nearly 50% of the web, it
                    unequivocally emerges as the preferred choice for a CMS. Our preference for WordPress stems from its
                    ease of development and user-friendly interface, ensuring a seamless experience for our clients.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Empowering E-Commerce Web Design</h5>
                  <p>
                    In the post-COVID era, establishing an online presence is paramount, particularly for product or
                    subscription-based businesses. Our Port Colborne web design agency specializes in creating
                    e-commerce websites that facilitate online product sales, significantly broadening your reach. Trust
                    our Port Colborne web designers to skillfully design and develop a beautiful, modern online store
                    tailored to your business needs.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="call-out">
            <Container>
              <Row>
                <Col lg="12 text-center">
                  <h3>Consult with Our Port Colborne Web Design Professionals Today</h3>
                  <p>Simply click the button below to receive your complimentary quote.</p>
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
                    Select Infused Agency as Your <span>Port Colborne</span> Web Design Partner
                  </h2>
                  <p>Elevate Your Brand's Standing with the Expertise of Our Web Design Professionals</p>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <p>
                    Since 2013 we've been able to help countless local Port Colborne businesses (and beyond!) with their{" "}
                    <Link href="/web-design">website design</Link>,{" "}
                    <Link href="/digital-marketing-niagara">digital marketing</Link>,{" "}
                    <Link href="/port-colborne-seo">search engine optimization (SEO)</Link> ,{" "}
                    <Link href="/wordpress-developer-niagara">WordPress development</Link> and e-commerce website
                    development.
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
            city="Port Colborne"
            intro={[
              "The Regional Municipality of ",
              <a href="https://en.wikipedia.org/wiki/Port_Colborne">Port Colborne</a>,
              " (the end of the Welland Canal, which in 2016 had a populace 18,306) is a city in Ontario, Canada. It is situated on Lake Erie, at the southern finish of the Welland Canal, in the Niagara Region of Southern Ontario.",
            ]}
            area="121"
            population="18,603"
            topSights={[
              <a href="https://www.google.com/travel/things-to-do/see-all?g2lb=2502548,2503771,2503781,4258168,4270442,4284970,4291517,4306835,4515404,4524133,4597339,4649665,4722900,4723331,4733969,4738545,4757164,4758493,4762561,4779393&hl=en-CA&gl=ca&ssta=1&dest_mid=/m/01kzjk&dest_state_type=sattd&dest_src=ts&q=things+to+do+in+Port Colborne+ontario&poi_mid=/g/1thxr8jc&sa=X&ved=2ahUKEwjnxaf6je73AhUWG80KHdB5CXoQ69EBKAB6BAgIEAc">
                Welland Canal in Port Colborne
              </a>,
              ", ",
              <a href="https://www.google.com/travel/things-to-do/see-all?g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4515404%2C4524133%2C4597339%2C4649665%2C4722900%2C4723331%2C4733969%2C4738545%2C4757164%2C4758493%2C4762561%2C4779393&hl=en-CA&gl=ca&ssta=1&dest_mid=%2Fm%2F01kzz6&dest_state_type=sattd&dest_src=ts&q=top%20things%20to%20do%20in%20port%20colborne&sa=X&ved=2ahUKEwj-hevkke73AhUMHM0KHRj6BBUQ69EBKAB6BAgIEAc">
                Nickel Beach in Port Colborne
              </a>,
              ", ",
              <a href="https://www.google.com/travel/things-to-do/see-all?g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4515404%2C4524133%2C4597339%2C4649665%2C4722900%2C4723331%2C4733969%2C4738545%2C4757164%2C4758493%2C4762561%2C4779393&hl=en-CA&gl=ca&ssta=1&dest_mid=%2Fm%2F01kzz6&dest_state_type=sattd&dest_src=ts&q=top%20things%20to%20do%20in%20port%20colborne&sa=X&ved=2ahUKEwj-hevkke73AhUMHM0KHRj6BBUQ69EBKAB6BAgIEAc">
                Friendship Beach in Port Colborne
              </a>,
            ]}
            qOne="Is Port Colborne a nice place to live?"
            qOneAns="The City of Port Colborne is an incredible spot to live, work and raise a family."
            qTwo="What is it like to live in Port Colborne?"
            qTwoAns="Port Colborne truly has a local area feel and this is a direct result of the extraordinary individuals of this city and how curious the midtown is and every one of the little exceptional, privately possessed shops. You will find WAY MORE mother and pop shops than enormous box stores in Port Colborne! There are likewise some truly incredible eating and eateries!"
            qThree="Where does the friendship trail start in Port Colborne?"
            qThreeAns="The path starts at Port Colborne Seaway Park and finishes at Historic Fort Erie where it gets together with the Niagara Parks Commission Recreation Trail."
            qFour="Where is the shrinking mill in Port Colborne?"
            qFourAns="Nearby us here in Port Colborne, Ontario, is a superb fascination that a great many people have hardly any familiarity with. It is known as the extraordinary contracting plant."
            mapURL="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187270.2721219696!2d-79.33834971138214!3d42.82854362231943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d33125c46ca209%3A0x8222e76e59ecba10!2sPort%20Colborne%2C%20ON!5e0!3m2!1sen!2sca!4v1653053896754!5m2!1sen!2sca"
          />
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  );
};

export default SEO;
