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
import website from "../img/grimsby-web-design-company.webp";
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
        <title>Grimsby Web Design Firm | Local Web Designers - Infused Agency</title>
        <meta
          name="description"
          content="Discover the excellence of Grimsby's premier web design company. Our website designs are crafted to enhance your brand's standing and drive increased sales for your company. Click here to request your free quote!"
        />

        <link rel="canonical" href="https://infused.agency/grimsby-web-design" />
      </Helmet>
      <Nav />
      <InnerHero
        title="Leading Grimsby Web Design Experts"
        description="Experience excellence with Infused Agency, an acclaimed web design company in Grimsby. We specialize in assisting businesses in generating increased revenue through expertly crafted websites."
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
                  alt="Grimsby web design company, Grimsby web design agency, Grimsby web design services"
                />
              </Col>
              <Col lg={{ size: 7, offset: 1 }}>
                <p>
                  Discover the exceptional <strong>Grimsby web design services</strong> provided by our{" "}
                  <strong>Grimsby web design firm</strong>. We consistently deliver outstanding web design solutions,
                  producing remarkable results for our clients. The significance of web design services for any local
                  company is profound:
                </p>
                <ul>
                  <li>Enhances company branding.</li>
                  <li>Elevates your Grimsby company's reputation and trustworthiness.</li>
                  <li>Generates more leads and company revenue.</li>
                </ul>
                <p>
                  Embracing web design services from our company not only enhances your company's reputation but also
                  serves as an effective strategy for attracting more customers.
                </p>
              </Col>
            </Row>
          </Container>
          <section className="results">
            <Container>
              <Row>
                <Col lg="12 text-center pd-btm-40">
                  <h2>
                    Achieve Results with Our <span>Grimsby Web Design Services</span>
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
                      highly recommend their company if you are thinking of needing their Grimsby web design services."
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
                      Grimsby company went from having no website at all to one that brings in new customers every
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
                      web design for your Grimsby business I do recommend Infused Agency for their services. JD keep up
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
                  <h3>Ready to Elevate Your Business with Premier Grimsby Web Design Services?</h3>
                  <p>Take the next step by clicking the button below to receive your complimentary quote.</p>
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
                    Tailored Grimsby <span>Web Design</span> Solutions
                  </h2>
                  <p>Crafting Websites That Drive Customer Acquisition for Your Company</p>
                </Col>
              </Row>
              <Row>
                <Col lg="4">
                  <h5>Elevated Search Engine Optimization (SEO)</h5>
                  <p>
                    We meticulously ensure that your websites are not only indexed but prominently displayed for
                    specific Google keywords. In our Grimsby web design services, search engine optimization plays a
                    pivotal role in ensuring your customers easily discover your website. By harnessing the expertise of
                    our Grimsby web design professionals and engaging in our{" "}
                    <Link href="/grimsby-seo-company/">Grimsby SEO services</Link>, your website becomes a catalyst for
                    attracting new revenue and customers to your company.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Innovative Web Design &amp; Development</h5>
                  <p>
                    Crafting websites that not only enhance your brand's reputation but also attract more customers is
                    the expertise of our Grimsby web designers. Our award-winning web designs go beyond customer
                    attraction by incorporating best practices in search engine optimization and responsive web design,
                    contributing to an amplified brand awareness.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Bespoke Web Design Solutions</h5>
                  <p>
                    Tailoring every client website to be unique is our commitment. Our Grimsby web designers specialize
                    in creating modern website designs tailored to your business goals. We ensure to integrate your
                    vision seamlessly into the design process, guided by the expertise of our Grimsby web design
                    professionals.
                  </p>
                </Col>
              </Row>
              <Row className="pd-btm-80">
                <Col lg="4">
                  <h5>Adaptive Web Design Excellence</h5>
                  <p>
                    Implementing responsive web design is a core component of our Grimsby web design services, ensuring
                    seamless navigation for your users across any device. Our Grimsby web design experts employ custom
                    coding techniques to guarantee that your website not only functions flawlessly but also looks
                    exceptional on any device or computer.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Harnessing the Power of WordPress in Web Design</h5>
                  <p>
                    Within our Grimsby web design company, we exclusively employ WordPress for all website projects
                    demanding a content management system (CMS). With WordPress commanding nearly 50% of the web, it
                    undeniably emerges as the top choice for a CMS. We opt for WordPress due to its user-friendly
                    development environment and its ease of use for our clients.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Empowering Your Business with E-Commerce Web Design</h5>
                  <p>
                    In the post-COVID era, establishing an online presence is paramount, particularly for product or
                    subscription-based businesses. Our Grimsby web design agency specializes in creating e-commerce
                    websites that facilitate online product sales, significantly expanding your reach. Trust our Grimsby
                    web designers to expertly design and develop a beautiful, modern online store tailored to your
                    business needs.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="call-out">
            <Container>
              <Row>
                <Col lg="12 text-center">
                  <h3>Consult with Our Grimsby Web Design Professionals Today</h3>
                  <p>Click the button below to receive your complimentary quote.</p>

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
                    Opt for Infused Agency as Your <span>Grimsby</span> Web Design Partner
                  </h2>
                  <p>Elevate Your Brand's Standing with Our Expert Web Design Services</p>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <p>
                    Since 2013 we've been able to help countless local Grimsby businesses (and beyond!) with their{" "}
                    <Link href="/web-design">website design</Link>,{" "}
                    <Link href="/digital-marketing-niagara">digital marketing</Link>,{" "}
                    <Link href="/Grimsby-seo-company/">search engine optimization (SEO)</Link> ,{" "}
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
            city="Grimsby"
            intro={[
              "The Regional Municipality of ",
              <a href="https://en.wikipedia.org/wiki/Grimsby,_Ontario">Grimsby</a>,
              " is a town on Lake Ontario in the Niagara Region, Ontario, Canada. Grimsby is a piece of the Hamilton Census Metropolitan Area.It is named after the English fishing town of Grimsby in north-east Lincolnshire. Most of occupants live in the space limited by Lake Ontario and the Niagara Escarpment, home to a part of the Bruce Trail.",
            ]}
            area="68.93"
            population="27,693"
            topSights={[
              <a href="https://www.google.com/travel/things-to-do/see-all?g2lb=2502548,2503771,2503781,4258168,4270442,4284970,4291517,4306835,4515404,4524133,4597339,4649665,4722900,4723331,4733969,4738545,4757164,4758493,4762561,4779393&hl=en-CA&gl=ca&ssta=1&dest_mid=/m/01kzjk&dest_state_type=sattd&dest_src=ts&q=things+to+do+in+grimsby+ontario&poi_mid=/g/1thxr8jc&sa=X&ved=2ahUKEwjnxaf6je73AhUWG80KHdB5CXoQ69EBKAB6BAgIEAc">
                Fielding Estate Winery
              </a>,
              ", ",
              <a href="https://www.google.com/travel/things-to-do/see-all?g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4515404%2C4524133%2C4597339%2C4649665%2C4722900%2C4723331%2C4733969%2C4738545%2C4757164%2C4758493%2C4762561%2C4779393&hl=en-CA&gl=ca&ssta=1&dest_mid=%2Fm%2F01kzjk&dest_state_type=sattd&dest_src=ts&q=things%20to%20do%20in%20grimsby%20ontario&sa=X&ved=2ahUKEwjnxaf6je73AhUWG80KHdB5CXoQ69EBKAB6BAgIEAc">
                Rosewood Estates Winery
              </a>,
              ", ",
              <a href="https://www.google.com/travel/things-to-do/see-all?g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4515404%2C4524133%2C4597339%2C4649665%2C4722900%2C4723331%2C4733969%2C4738545%2C4757164%2C4758493%2C4762561%2C4779393&hl=en-CA&gl=ca&ssta=1&dest_mid=%2Fm%2F01kzjk&dest_state_type=sattd&dest_src=ts&q=things%20to%20do%20in%20grimsby%20ontario&sa=X&ved=2ahUKEwjnxaf6je73AhUWG80KHdB5CXoQ69EBKAB6BAgIEAc">
                Angels Gate Winery
              </a>,
            ]}
            qOne="Is Grimsby a nice place to live?"
            qOneAns="Inhabitants of Grimsby appreciate admittance to the locale's solid economy and fast driving times to the line as well as the advantages of life in a more modest town on the waterfront. Ottawa sits at No. 3, because of its steady, government-fuelled economy and reasonable cost for many everyday items."
            qTwo="What is Grimsby, Ontario known for?"
            qTwoAns="Grimsby is known as the entryway among Hamilton and Niagara. In the mid 1900's, Grimsby was known as an event congregation, with a thrill ride, a cinema, and lodges on the lake. One of Grimsby's grade schools, Grand Avenue Public School, used to be the carnival for the entertainment mecca."
            qThree="What are some top things to do in Grimsby?"
            qThreeAns="Grimsby, Ontario is known mostly for it's wineries. Some of the best Grimsby wineries include thirty bench, vieni estates, bench brewing, fielding estates and more."
            qFour="How is living in Grimsby, Ontario?"
            qFourAns="The town positions in the main quarter of Canadian urban areas with excellent of the wellbeing and school system. This is something to remember whether and when you choose to move to Grimsby. It is a phenomenal decision for both you and your family, assuming you have one."
            mapURL="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93092.62039499919!2d-79.65086279333853!3d43.18548113828605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882caf79ccfea3dd%3A0x9566109eba2a4656!2sGrimsby%2C%20ON!5e0!3m2!1sen!2sca!4v1653051039062!5m2!1sen!2sca"
          />
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  );
};

export default SEO;
