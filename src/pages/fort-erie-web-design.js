import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";
import website from "../img/fort-erie-web-design-company.webp";
import treeImg from "../img/tree-reports.png";
import kdImg from "../img/niagara-web-design.png";
import cassImg from "../img/featured-seo.png";
import bgImage from "../img/inner-seo.jpg";
import about from "../img/about.jpg";
import About from "../../components/Home/About/about";

const addJsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Infused Agency",
    description:
      "Infused Agency provides expert web design services, including lead generation, development, and online marketing in Fort Erie, ON.",
    serviceArea: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Fort Erie",
        addressRegion: "ON",
        addressCountry: "Canada",
      },
    },
    url: "https://www.infused.agency",
    logo:
      "https://infused.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fniagara-web-design-infused-logo.446e8511.webp&w=256&q=75",
    sameAs: [
      "https://www.instagram.com/infusedweb",
      "https://www.facebook.com/infused.agency",
    ],
  };

  return {
    __html: JSON.stringify(schema),
  };
};

const SEO = () => {
  return (
    <>
      <Head>
        <title>Fort Erie Web Design | Custom Sites for Local Success</title>
        <meta
          name="description"
          content="Discover the top-rated Web Design Company in Fort Erie. Our expert team crafts websites dedicated to enhancing your brand's image and driving up sales. Get your complimentary quote now!"
        />
        <link
          rel="canonical"
          href="https://infused.agency/fort-erie-web-design"
        />
      </Head>
      <Nav />
      <InnerHero
        title="Fort Erie Web Design"
        description="Infused Agency, a distinguished web design company in Fort Erie, has garnered accolades for its exceptional services. We specialize in assisting businesses in boosting their revenue through expertly crafted websites."
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
                  alt="Fort Erie web design company, Fort Erie web design agency, Fort Erie web design services"
                />
              </Col>
              <Col lg={{ size: 7, offset: 1 }}>
                <p>
                  Our <strong>Fort Erie web design services</strong> at our{" "}
                  <strong>Fort Erie Web Design Company</strong> are
                  exceptionally high-quality. We consistently deliver
                  outstanding web design solutions to our clients, yielding
                  impressive results. The significance of web design services
                  for any local company cannot be overstated, offering numerous
                  advantages:
                </p>
                <ul>
                  <li>Enhances company branding.</li>
                  <li>
                    Elevates the reputation and trustworthiness of your Fort
                    Erie company.
                  </li>
                  <li>Generates more leads and increases company revenue.</li>
                </ul>
                <p>
                  Employing our web design services not only enhances your
                  company's reputation but also serves as an effective strategy
                  for attracting more customers.
                </p>
              </Col>
            </Row>
          </Container>
          <section className="results">
            <Container>
              <Row>
                <Col lg="12 text-center pd-btm-40">
                  <h2>
                    Achieve Results with Our Fort Erie Web Design Services
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
                      their company if you are thinking of needing their Fort
                      Erie web design services."
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
                      "Infused Agency drastically improved my online presence.
                      By using their web design services, my Fort Erie company
                      went from having no website at all to one that brings in
                      new customers every week."
                    </p>
                    <ul>
                      <li>
                        <strong>
                          <span>10,700 website views</span> per month
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span>20,000% increase</span> in new leads in the
                          first 6 months
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
                      "Great Job, WELL DONE. I'm very pleased with the SEO work
                      on my new web site. If you ever need a web design for your
                      Fort Erie business I do recommend Infused Agency for their
                      services. JD keep up the great work. Thank you."
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
          <section className="call-out">
            <Container>
              <Row>
                <Col lg="12 text-center">
                  <h3>
                    Ready to elevate your business with premier Fort Erie web
                    design services?
                  </h3>
                  <p>
                    Take the next step by clicking the button below to receive
                    your complimentary quote.
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
          </section>
          <section className="seo-services">
            <Container>
              <Row className="pd-top-80 pd-btm-40">
                <Col lg="12 text-center">
                  <h2>
                    Elevate Your Business with Fort Erie <span>Web Design</span>{" "}
                    Services
                  </h2>
                  <p>
                    Crafting Websites That Attract and Engage, Driving Customer
                    Growth for Your Company
                  </p>
                </Col>
              </Row>
              <Row>
                <Col lg="4">
                  <h5>
                    Enhance Visibility with Search Engine Optimization (SEO)
                  </h5>
                  <p>
                    Ensuring your websites are properly indexed and prominently
                    appear for targeted keywords on Google is a crucial aspect
                    of our Fort Erie web design services. Our focus on search
                    engine optimization is designed to ensure that your
                    customers can easily discover your website. By leveraging
                    the expertise of our Fort Erie web design professionals and
                    engaging our{" "}
                    <Link href="/fort-erie-seo-company/">
                      Fort Erie SEO services
                    </Link>
                    , your website becomes a powerful tool for attracting new
                    company revenue and customers.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>
                    Crafting Distinctive Web Design &amp; Development Solutions
                  </h5>
                  <p>
                    At Fort Erie Web Design Company, our team of skilled
                    designers goes beyond creating websites—they build digital
                    experiences that enhance your brand's standing and attract a
                    broader customer base. Our award-winning web designs not
                    only draw in customers but also integrate search engine
                    optimization and responsive web design best practices,
                    contributing to heightened brand awareness.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Tailored Solutions with Custom Web Design</h5>
                  <p>
                    Each website we design for our clients is uniquely crafted.
                    Our Fort Erie web designers specialize in creating modern
                    designs that align with your business objectives. We
                    prioritize incorporating your vision into the design
                    process, ensuring a personalized and thoughtful approach by
                    our Fort Erie web design experts.
                  </p>
                </Col>
              </Row>
              <Row className="pd-btm-80">
                <Col lg="4">
                  <h5>Optimized for All Devices with Responsive Web Design</h5>
                  <p>
                    As an integral component of our Fort Erie web design
                    services, we prioritize responsive web design to ensure
                    seamless navigation for your users across all devices. Our
                    Fort Erie web design experts employ custom coding techniques
                    to ensure that your website not only functions flawlessly
                    but also looks impressive on any device or computer.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Harnessing the Power of WordPress for Web Design</h5>
                  <p>
                    In Fort Erie Web Design Company, we exclusively employ
                    WordPress for projects requiring a content management system
                    (CMS). With WordPress commanding nearly 50% of the web, it
                    stands out as the preferred choice for CMS solutions. We opt
                    for WordPress due to its user-friendly development
                    environment and its ease of use for our clients.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Empower Your Business with E-Commerce Web Design</h5>
                  <p>
                    In the post-COVID era, establishing an online presence is
                    crucial, especially for product or subscription-based
                    businesses. Our Fort Erie web design agency specializes in
                    creating e-commerce websites that enable you to sell your
                    products online, significantly broadening your reach. Trust
                    our Fort Erie web designers to craft and develop a stunning,
                    modern online store tailored to your business needs.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="call-out">
            <Container>
              <Row>
                <Col lg="12 text-center">
                  <h3>
                    Get Assistance from Our Fort Erie Web Design Professionals
                    Today
                  </h3>
                  <p>
                    Take the first step by clicking the button below to receive
                    your complimentary quote.
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
          </section>
          <section className="seo-why pd-top-80">
            <Container>
              <Row>
                <Col lg="12 text-center pd-btm-40">
                  <h2>
                    Discover the Advantages of Selecting Infused Agency as Your{" "}
                    <span>Fort Erie</span> Web Design Partner
                  </h2>
                  <p>
                    Elevate Your Brand's Standing with the Expertise of Our Web
                    Design Professionals
                  </p>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <p>
                    Since 2013 we've been able to help countless local Fort Erie
                    businesses (and beyond!) with their{" "}
                    <Link href="/web-design">website design</Link>,{" "}
                    <Link href="/digital-marketing-niagara">
                      digital marketing
                    </Link>
                    ,{" "}
                    <Link href="/fort-Erie-seo-company/">
                      search engine optimization (SEO)
                    </Link>{" "}
                    ,{" "}
                    <Link href="/wordpress-developer-niagara">
                      WordPress development
                    </Link>{" "}
                    and e-commerce website development.
                  </p>
                  <p>
                    We've been able to help small, local businesses all the way
                    to large enterprise companies with increasing traffic to
                    their websites, build modern websites for them and
                    ultimately bringing them more revenue through digital
                    channels.
                  </p>
                </Col>
                <Col lg="6">
                  <Image
                    className="img-fluid"
                    src={about}
                    alt="business needs"
                  />
                </Col>
              </Row>
            </Container>
          </section>
          <Container>
            <Row className="pd-top-80 pd-btm-60">
              <Col lg="12">
                <h3>How much does a new website cost?</h3>
                <p>
                  There's no single answer to this question. It entirely depends
                  on the needs of the project. Every web design and development
                  project is unique in it's design, purpose, functionality and
                  more. In our free consultation sessions we'll ask lots of
                  questions, assess your needs and then give you a quote based
                  on our findings.
                </p>
                <h3>How long will it take to get a new website?</h3>
                <p>
                  Typically between 6 and 8 weeks. Keep in mind this completely
                  depends on the client, though. For example - if we need
                  content or approval from you and there are potential delays,
                  this could delay the launch. However if you send over content
                  / approval for things along the way quickly, the more quick
                  your website will launch.
                </p>
                <h3>Do you only create WordPress websites?</h3>
                <p>
                  No. WordPress is great for a lot of use cases. You can update
                  your website on your own without needing a developer (we teach
                  you). There's a rich ecosystem of plugins we utilize to speed
                  up development. However, sometimes a hand-coded website far
                  outperforms a WordPress site depending on the situation.
                </p>
                <h3>Do I have to be local to work with you?</h3>
                <p>
                  Nope! We have clients locally but have also served clients all
                  across the world.
                </p>
                <h3>
                  Will I be able to update the website when it's finished?
                </h3>
                <p>
                  If it's a WordPress website, yes. If it's not, our team of
                  developers can update the website for you.
                </p>
                <h3>Can you maintain my website for me?</h3>
                <p>
                  Absolutely. We understand that business owners are busy a lot
                  of the time. We can take that stress off of you by updating
                  your website for you.
                </p>
                <h3>Will my website be mobile-friendly?</h3>
                <p>
                  Of course. Responsive design, aka mobile websites, are a big
                  part of today's society. We make sure to adhere to that so
                  your customers have a pleasant experience on your website.
                </p>
                <h3>When do I pay?</h3>
                <p>
                  Equal payments are made at the start, midway through and at
                  the end of the project.However we can accomodate with smaller
                  monthly payments if need be. We accept e-transfer, cash or
                  credit card payments.
                </p>
                <h3>How much input do I have?</h3>
                <p>
                  Lots! We work with our clients very closely. We make sure that
                  based on our conversations, there are no surprises when it
                  comes to how your website looks or functions.
                </p>
                <h3>Do I provide the content for my website?</h3>
                <p>
                  Yes. You're the expert of your business so typically it's you
                  that provides it. If you don't want to or can't, we will
                  happily write the content at an additional cost.
                </p>
                <h3>What about website hosting?</h3>
                <p>
                  We have a list of favourites hosting providers that we use.
                  During our free consultation we can talk about these
                  providers.
                </p>
                <h3>What if I need help after my site is live?</h3>
                <p>
                  We're only an email away! Contact us any time and we can help
                  you with whatever you need.
                </p>
              </Col>
            </Row>
          </Container>
          <About
            city="Fort Erie"
            intro={[
              "The Regional Municipality of ",
              <a href="https://en.wikipedia.org/wiki/Fort_Erie,_Ontario">
                Fort Erie
              </a>,
              " is a town on the Niagara River in the Niagara Region, Ontario, Canada. It is straightforwardly across the waterway from Buffalo, New York and is the site of Old Fort Erie which assumed a conspicuous part in the War of 1812.",
            ]}
            area="166"
            population="30,710"
            topSights={[
              <a href="https://www.google.com/travel/things-to-do/see-all?g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4515404%2C4524133%2C4597339%2C4649665%2C4722900%2C4723331%2C4733969%2C4738545%2C4757164%2C4758493%2C4762561%2C4779393&hl=en-CA&gl=ca&ssta=1&dest_mid=%2Fm%2F01kzhs&dest_state_type=sattd&dest_src=ts&q=things%20to%20do%20in%20fort%20erie&sa=X&ved=2ahUKEwjriMzPi-73AhWOWc0KHQblCS8Q69EBKAB6BAgIEAc">
                Safari Niagara
              </a>,
              ", ",
              <a href="https://www.google.com/travel/things-to-do/see-all?g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4515404%2C4524133%2C4597339%2C4649665%2C4722900%2C4723331%2C4733969%2C4738545%2C4757164%2C4758493%2C4762561%2C4779393&hl=en-CA&gl=ca&ssta=1&dest_mid=%2Fm%2F01kzhs&dest_state_type=sattd&dest_src=ts&q=things%20to%20do%20in%20fort%20erie&sa=X&ved=2ahUKEwjriMzPi-73AhWOWc0KHQblCS8Q69EBKAB6BAgIEAc">
                Niagara Parkway
              </a>,
              ", ",
              <a href="https://www.google.com/travel/things-to-do/see-all?g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4515404%2C4524133%2C4597339%2C4649665%2C4722900%2C4723331%2C4733969%2C4738545%2C4757164%2C4758493%2C4762561%2C4779393&hl=en-CA&gl=ca&ssta=1&dest_mid=%2Fm%2F01kzhs&dest_state_type=sattd&dest_src=ts&q=things%20to%20do%20in%20fort%20erie&sa=X&ved=2ahUKEwjriMzPi-73AhWOWc0KHQblCS8Q69EBKAB6BAgIEAc">
                Old Fort Erie
              </a>,
            ]}
            qOne="Is Fort Erie a nice place to live?"
            qOneAns="Offering an intriguing blend of unassuming community esteems, a powerful workplace and simple admittance to large city conveniences and culture, Fort Erie gives a personal satisfaction unrivaled in the territory. No big surprise such countless individuals are making it their home!"
            qTwo="What is Fort Erie, Ontario known for?"
            qTwoAns="Fort Erie, the nearby site of the War of 1812, is one of the main notable milestones nearby. Post Erie saw significant activity in the War of 1812 including the catch of two American ships, the 'Ohio' and the 'Somers'."
            qThree="What happened in Fort Erie?"
            qThreeAns="The post, worked by the British in 1764, was caught by American soldiers during the War of 1812. English endeavors at recover were rebuffed, and the fortress was deserted (1814) and exploded. The post was reestablished (1937-39) and was integrated as a town in 1857."
            qFour="Is Fort Erie growing?"
            qFourAns="This is a 6.3% expansion over the last Census (2001), and makes Fort Erie the quickest developing region in the St. Catharines-Niagara CMA (Census Metropolitan Area), and the third quickest developing district in the Region of Niagara."
            mapURL="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187141.48056112576!2d-79.15433070551377!3d42.87103666280323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d33e24e7337d03%3A0x885d5008ef9ad9d1!2sFort%20Erie%2C%20ON!5e0!3m2!1sen!2sca!4v1653050333135!5m2!1sen!2sca"
          />
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  );
};

export default SEO;
