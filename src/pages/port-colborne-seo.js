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
import website from "../img/port-colborne-seo-company.webp";
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
        <title>Port Colborne SEO Firm | Premier SEO Solutions - Infused Agency</title>
        <meta
          name="description"
          content="Top SEO Services in Port Colborne. We provide quantifiable results for our clients with our SEO services, generating increased leads for your business."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="Port Colborne SEO Services"
        description="Infused Agency, a recognized SEO company in Port Colborne, specializes in enhancing businesses' website performance to drive increased revenue."
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
                  alt="Port Colborne seo company, Port Colborne seo agency, Port Colborne seo services"
                />
              </Col>
              <Col lg={{ size: 7, offset: 1 }}>
                <p>
                  The SEO solutions provided by our Port Colborne-based company are exceptionally effective. We
                  consistently deliver outstanding SEO services to our clients, yielding remarkable results. There are
                  several advantages to highlight the importance of SEO for local businesses:
                </p>
                <ul>
                  <li>Attract more customers through organic search.</li>
                  <li>Create a trustworthy experience for potential customers.</li>
                  <li>Improve awareness of your Port Colborne brand.</li>
                  <li>Provide trackable outcomes.</li>
                </ul>
                <p>
                  Utilizing SEO services from our company and achieving a top-ranking on Google is a great strategy to
                  significantly increase your company's revenue."
                </p>
              </Col>
            </Row>
          </Container>
          <section className="results">
            <Container>
              <Row>
                <Col lg="12 text-center pd-btm-40">
                  <h2>
                    Our Port Colborne SEO Clients See <span>Real Results</span>
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
                      highly recommend their company if you are thinking of needing their Fort Erie SEO services."
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
                      "Infused Agency drastically improved my online presence. By using their SEO services, my Port
                      Colborne company went from not ranking at all to the first page of Google for tons of keywords."
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
                      SEO for your Fort Erie business I do recommend Infused Agency for their services. JD keep up the
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
                  <h3>Unlock Business Growth with Premier Port Colborne SEO Services</h3>
                  <p>
                    Take the first step toward success by clicking the button below to receive your complimentary quote.
                  </p>
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
                    Elevate Your Presence with Port Colborne <span>SEO</span> Services
                  </h2>
                  <p>Strategic Solutions That Attract Qualified Leads and Skyrocket Your Sales</p>
                </Col>
              </Row>
              <Row>
                <Col lg="4">
                  <h5>Strategic Keyword Research &amp; Planning</h5>
                  <p>
                    At Infused Agency, our Port Colborne SEO company specializes in meticulous keyword research, honing
                    in on precisely what your audience is actively searching for. We consider keywords as the
                    cornerstone of your SEO initiative. Going beyond the basics, we delve into the technical aspects to
                    enhance the overall value delivered to your customers.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Strategic Link Building</h5>
                  <p>
                    Our Port Colborne SEO experts at Infused Agency employ targeted efforts to establish valuable links
                    leading to your website, elevating your site's search rankings. By securing backlinks from other
                    reputable sites, you gain authority and visibility for relevant keyword searches. Additionally, we
                    excel at filtering out potentially spammy backlinks, ensuring a clean and reputable online presence
                    for your business.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Strategic Content Creation</h5>
                  <p>
                    Within our comprehensive Port Colborne SEO services, a team of highly skilled marketers, including
                    proficient content writers at Infused, is dedicated to delivering excellence. Leverage our content
                    writing expertise to craft compelling content that draws in highly qualified leads. We adeptly blend
                    targeted keywords with your brand voice, ensuring a harmonious mix that attracts more leads to your
                    website.
                  </p>
                </Col>
              </Row>
              <Row className="pd-btm-80">
                <Col lg="4">
                  <h5>Strategic On-Page SEO</h5>
                  <p>
                    Ensuring meticulous on-page optimization is crucial, as it signals to Google the quality of user
                    experience your site provides. Our Port Colborne SEO agency diligently identifies and addresses
                    these issues on your behalf. Through our expert on-page SEO efforts, we aim to strengthen your
                    online presence, enhance lead generation, and ultimately drive increased sales for your business.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Strategic Local SEO</h5>
                  <p>
                    For a localized strategy, our Port Colborne SEO specialists harness the potential of local SEO to
                    ensure your business is easily discoverable by local customers. Utilizing both on-page and off-page
                    search engine optimization best practices, we work to elevate your local website in Google's
                    rankings, making it more prominent in local search engine results.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Technical SEO</h5>
                  <p>
                    Should you discover technical issues on your website, our Port Colborne SEO experts stand ready to
                    assist. Conducting a comprehensive site-wide audit, we scrutinize aspects such as website speed,
                    content, and optimization. Our dedicated team swiftly addresses and rectifies these issues, ensuring
                    your website is optimized for peak performance and on the path to sustained success.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="call-out">
            <Container>
              <Row>
                <Col lg="12 text-center">
                  <h3>Empower Your Business with Assistance from Our Port Colborne SEO Experts</h3>
                  <p>
                    Take the first step toward success by clicking the button below to receive your complimentary quote.
                  </p>
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
                    Elevate Your Success with Infused Agency, Your Premier <span>Port Colborne</span> SEO Partner
                  </h2>
                  <p>Boost Your Website's Rankings with the Expertise of Our SEO Professionals</p>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <p>
                    Since 2013 we've been able to help countless local Port Colborne businesses (and beyond!) with their{" "}
                    <Link href="/web-design">website design</Link>,{" "}
                    <Link href="/digital-marketing-Port Colborne">digital marketing</Link>, search engine optimization
                    (SEO) , <Link href="/wordpress-developer-Port Colborne">WordPress development</Link> and{" "}
                    <Link href="/ecommerce-web-design-Port Colborne">e-commerce website development</Link>.
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
                <h3>What is SEO?</h3>
                <p>
                  Search Engine Optimization (SEO) is the process of increasing your{" "}
                  <Link href="/websites">websites</Link> visibility within Google's search results. If your website is
                  on the first page of Google with our SEO services versus your website being on the 10th page, you will
                  get a lot more customers.
                </p>
                <h3>Do I need SEO?</h3>
                <p>
                  Does your business depend on attracting new customers? Then absolutely you need a Port Colborne SEO
                  company to help you with SEO services. It's important that our Port Colborne SEO experts help your
                  website rank where your customers are looking - on the first page of Google.
                </p>
                <h3>What's important when it comes to SEO?</h3>
                <p>
                  There's about 200 ranking signals that Google evaluates a website on when it comes to SEO. The top
                  factors here are domain authority (how old your website's domain is), the quality SEO content of your
                  website, SEO backlinks going to your website, technical SEO coding on your site and more. We will
                  clearly identify the strengths and weaknesses in terms of SEO that your current website has, and come
                  up with a game plan to improve.
                </p>
                <h3>How long does SEO take?</h3>
                <p>
                  There are many variables and depends on the website. For example - a brand new website can take
                  upwards to a year to start seeing any meaningful results. A website that has been around for a longer
                  amount of time could start seeing movement within 2-3 months. It all depends on your website's
                  standing when it comes to SEO.
                </p>
                <h3>How do I get on the Google Map Pack?</h3>
                <p>
                  The Google Map Pack is great for local SEO. This is the area where when someone searches, local
                  companies pop up with 5 star reviews. If you do local SEO and get in the top 3 of this map pack,
                  you're golden. The best way to get there is to optimize your Google My Business profile. We specialize
                  in doing so and can help you rise up in the local SEO map pack rankings.
                </p>
                <ul>
                  <li>E-commerce company logo</li>
                  <li>
                    All e-commerce product details - things like product titles, images, descriptions, pricing, etc.
                  </li>
                  <li>Any shipping charges you'd like customers to pay.</li>
                </ul>
                <h3>Our Port Colborne SEO company is ready to help.</h3>
                <p>
                  If you need our Port Colborne SEO company to help your company rise in Google with our expert SEO
                  services, click below to get your free SEO quote.
                </p>
                <a target="_blank" rel="noreferrer" href="https://calendly.com/infused-agency/project-discovery/">
                  <button>Get Free Quote</button>
                </a>
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
