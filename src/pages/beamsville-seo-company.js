import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import Nav from "../../components/Nav/nav";
import InnerContent from "../../components/innerContent/innerContent";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";
import website from "../img/beamsville-seo-company.webp";
import treeImg from "../img/tree-reports.png";
import kdImg from "../img/niagara-web-design.png";
import cassImg from "../img/featured-seo.png";
import about from "../img/about.jpg";
import CityHeroSEO from "../../components/Home/Hero/cities-hero-seo";
import speed from "../img/website-speed.webp";
import ux from "../img/ux.webp";
import opt from "../img/landing-page.webp";
import testing from "../img/testing.webp";
import social from "../img/social.webp";

const addJsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Infused Agency",
    description:
      "Infused Agency provides expert SEO services, including lead generation, search engine optimization, and online marketing in Beamsville, ON.",
    serviceArea: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Beamsville",
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
        <title>Beamsville SEO 🥇 Best SEO Company in Beamsville, ON | Infused Agency</title>
        <meta
          name="description"
          content="Beamsville SEO Company that will amplify your online visibility. Get more traffic, leads and sales. Get a free quote!"
        />
        <meta property="og:title" content="Beamsville SEO | Infused Agency" />
        <meta name="twitter:title" content="Beamsville SEO | Infused Agency" />
        <link
          rel="canonical"
          href="https://infused.agency/beamsville-seo-company"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd()}
          key="item-jsonld"
        />
      </Head>
      <Nav />
      <CityHeroSEO
        city="Beamsville"
        alt="Beamsville SEO Agency"
        desc="From attracting visitors to converting leads and boosting sales, we are your go-to digital partner for achieving outstanding success."
      />
      <InnerContent>
        <section className="seo-page">
          <Container>
            <Row>
              <Col md="6">
                <h2>
                  Beamsville SEO crafted to <span>engage</span>,{" "}
                  <span>capture</span> and <span>convert</span>.
                </h2>
              </Col>
              <Col md="6">&nbsp;</Col>
            </Row>
            <Row className="web pd-btm-80">
              <Col md="4">
                <Image
                  className="img-fluid"
                  src={website}
                  alt="Beamsville seo company, Beamsville seo services"
                />
              </Col>
              <Col lg={{ size: 7, offset: 1 }}>
                <p>
                  The <strong>Beamsville SEO services</strong> that our{" "}
                  <strong>Beamsville SEO company</strong> provides are pretty
                  impeccable. We consistently provide great SEO &amp; digital
                  marketing services to our clients with pretty awesome results.
                  There are a lot of benefits as to why SEO services are so
                  important for any local company:
                </p>
                <ul>
                  <li>Bring in more customers through organic search.</li>
                  <li>
                    Creates a trustworthy experience for potential customers.
                  </li>
                  <li>Improves your Beamsville brand's awareness.</li>
                  <li>It's trackable.</li>
                </ul>
                <p>
                  When you utilize SEO services from our company or use our{" "}
                  <Link href="/beamsville-web-design">
                    Beamsville web design
                  </Link>{" "}
                  services and end up ranking on the first of Google, it's a
                  great way to increase your company's revenue.
                </p>
              </Col>
            </Row>
          </Container>
          <section className="home-client-results">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2>
                    Our Local Clients <span>Get Results</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card">
                    <Image
                      className="img-fluid"
                      src={treeImg}
                      alt="website design st catharines"
                    />
                    <h3>TreeReports</h3>
                    <p className="testimonial">
                      "Fantastic experience from start to end."
                    </p>
                    <div className="highlight">
                      <h3>385%</h3>
                      <p>increase in being found online</p>
                    </div>
                    <Link href="/tree-reports">
                      <button>
                        Case Study
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
                </div>

                <div className="col-lg-4">
                  <div className="card">
                    <Image
                      className="img-fluid"
                      src={kdImg}
                      alt="seo services in Beamsville"
                    />
                    <h3>KD Flowers</h3>
                    <p className="testimonial">
                      "My business has grown so much!"
                    </p>
                    <div className="highlight">
                      <h3>5,800</h3>
                      <p>new people discovering website per month</p>
                    </div>
                    <Link href="/kd-florist">
                      <button>
                        Case Study
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
                </div>
                <div className="col-lg-4 d-flex">
                  <div className="card">
                    <Image
                      className="img-fluid"
                      src={cassImg}
                      alt="Beamsville seo agency firm"
                    />
                    <h3>Cass-A-Bella Construction</h3>
                    <p className="testimonial">"Great job, WELL DONE!"</p>
                    <div className="highlight">
                      <h3>13,000%</h3>
                      <p>increase in new leads in first 6 months</p>
                    </div>
                    <Link href="/cass-a-bella-construction">
                      <button>
                        Case Study
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
                </div>
              </div>
            </div>
          </section>
          <section className="call-out">
            <Container>
              <Row>
                <Col lg="12 text-center">
                  <h3>
                    Ready to grow your business with our Beamsville SEO Firm?
                  </h3>
                  <p>Click the button below to get your free quote.</p>
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
                  <h2>Beamsville SEO Services</h2>
                  <p>
                    Solutions That Bring In Qualified Leads And Boost Your Sales
                  </p>
                </Col>
              </Row>
              <Row>
                <Col lg="4">
                  <h5>Keyword Research &amp; Strategy</h5>
                  <p>
                    Infused Agency's Beamsville SEO services conducts specific
                    keyword research that covers specifically what your users
                    are searching for. We look at keywords as the main
                    foundation to your SEO project. Beyond this, we dive into
                    the technicalities to further deliver value to your
                    customers.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Link Building</h5>
                  <p>
                    Off of your website, our Beamsville SEO experts utilize
                    efforts to build links to your website, to help your site
                    rise in search rankings. When other websites link back to
                    your own, you can be seen as authoratative and rank for
                    relevant keyword searche. We can also help filter out
                    certain backlinks that Google may refer to as spammy.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Content Writing</h5>
                  <p>
                    Our Beamsville SEO services are conducted by a highly
                    trained group of marketers, which includes content writers.
                    At Infused, you can take advantage of our content writing
                    skills to create content that attracts highly qualified
                    leads. We help mix keywords and your brand voice together,
                    to help bring in more leads to your website.
                  </p>
                </Col>
              </Row>
              <Row className="pd-btm-80">
                <Col lg="4">
                  <h5>On-Page SEO</h5>
                  <p>
                    It's very important that your on-page work is done well, as
                    it can signal to Google that you may give your users a poor
                    user experience. This is why our Beamsville SEO agency looks
                    for and fixes these issues for you. We conduct on-page SEO
                    to help bolster your online presence, amplify your lead
                    generation and help boost sales.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Local SEO</h5>
                  <p>
                    For a more local approach, our Beamsville SEO specialists
                    can leverage the power of local SEO. We help local customers
                    find your website in local search engine rankings. We do
                    this by employing on and off page search engine optimization
                    best practices, to help raise your local website in Google's
                    rankings.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Technical SEO</h5>
                  <p>
                    If you find out about some technical mishaps on your
                    website, our Beamsville SEO experts are here to help. We'll
                    dive into your website by conducting a site-wide audit to
                    check for problems related to website speed, content and
                    optimization. Our team will fix these issues, helping your
                    website get back on the right track.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="call-out">
            <Container>
              <Row>
                <Col lg="12 text-center">
                  <h3>Have Our Beamsville SEO Company Help Today</h3>
                  <p>Click the button below to get your free quote.</p>
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
                    Why Choose Infused Agency As Your <span>Beamsville</span>{" "}
                    SEO Agency
                  </h2>
                  <p>Increase Your Website's Rankings With Our SEO Experts</p>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <p>
                    Since 2013 we've been able to help countless local
                    businesses (and beyond!) with their{" "}
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
                <h3>What is SEO?</h3>
                <p>
                  Search Engine Optimization (SEO) is the process of increasing
                  your <Link href="/web-design">websites</Link> visibility
                  within Google's search results. If your website is on the
                  first page of Google with our SEO services versus your website
                  being on the 10th page, you will get a lot more customers.
                </p>
                <h3>Do I need SEO?</h3>
                <p>
                  Does your business depend on attracting new customers? Then
                  absolutely you need a Beamsville SEO company to help you with
                  SEO services. It's important that our Beamsville SEO experts
                  help your website rank where your customers are looking - on
                  the first page of Google.
                </p>
                <h3>What's important when it comes to SEO?</h3>
                <p>
                  There's about 200 ranking signals that Google evaluates a
                  website on when it comes to SEO. The top factors here are
                  domain authority (how old your website's domain is), the
                  quality SEO content of your website, SEO backlinks going to
                  your website, technical SEO coding on your site and more. We
                  will clearly identify the strengths and weaknesses in terms of
                  SEO that your current website has, and come up with a game
                  plan to improve.
                </p>
                <h3>How long does SEO take?</h3>
                <p>
                  There are many variables and depends on the website. For
                  example - a brand new website can take upwards to a year to
                  start seeing any meaningful results. A website that has been
                  around for a longer amount of time could start seeing movement
                  within 2-3 months. It all depends on your website's standing
                  when it comes to SEO.
                </p>
                <h3>How do I get on the Google Map Pack?</h3>
                <p>
                  The Google Map Pack is great for local SEO. This is the area
                  where when someone searches, local companies pop up with 5
                  star reviews. If you do local SEO and get in the top 3 of this
                  map pack, you're golden. The best way to get there is to
                  optimize your Google My Business profile. We specialize in
                  doing so and can help you rise up in the local SEO map pack
                  rankings.
                </p>

                <h3>Our Beamsville SEO company is ready to help.</h3>
                <p>
                  If you need our Beamsville SEO company to help your company
                  rise in Google with our expert SEO services, click below to
                  get your free SEO quote.
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
            <Row className="pd-top-40">
              <Col md="6">
                <h2>
                  How to <span>increase conversions</span> using our Beamsville
                  SEO Company.
                </h2>
              </Col>
              <Col md="6">&nbsp;</Col>
            </Row>

            <section className="seo-conversions">
              <Row className="pd-top-40">
                <Col lg="12">
                  <div className="card">
                    <Image
                      className="img-fluid"
                      src={speed}
                      alt="Beamsville seo agency speed"
                    />
                    <h2>
                      1. <span>Improve Website Speed</span>
                    </h2>
                    <p>
                      Website speed significantly impacts user experience and
                      conversion rates. A slow-loading site can frustrate
                      visitors, leading to higher bounce rates and fewer
                      conversions. To boost your website’s speed, start by
                      optimizing images, which are often the largest files on a
                      page. Use image compression tools to reduce file sizes
                      without sacrificing quality. Also, cut down on HTTP
                      requests by minimizing the number of elements on your
                      page, such as scripts and stylesheets. Implement browser
                      caching to store static resources, so they don’t need to
                      be reloaded with every visit. Utilize tools like Google
                      PageSpeed Insights to gain valuable insights and
                      recommendations for enhancing page speed, ensuring a
                      smoother, faster experience for your users.
                    </p>
                  </div>
                </Col>
              </Row>

              <Row className="pd-top-20">
                <Col lg="12">
                  <div className="card">
                    <Image
                      className="img-fluid"
                      src={ux}
                      alt="Beamsville seo firm"
                    />
                    <h2>
                      2. <span>Enhance User Experience (UX)</span>
                    </h2>
                    <p>
                      A well-crafted user experience is key to converting
                      visitors into customers. Start by ensuring your website is
                      mobile-friendly, as more users browse and shop on
                      smartphones. Simplify your site’s navigation to help users
                      find information quickly and intuitively. Use clear,
                      prominent call-to-action (CTA) buttons to direct users
                      toward actions like making a purchase or subscribing to a
                      newsletter. Employ contrasting colors and compelling text
                      to make CTAs stand out. Additionally, focus on a clean,
                      visually appealing design that reflects your brand and
                      caters to your target audience. By prioritizing user
                      experience, you’ll create a more engaging and effective
                      website that drives conversions.
                    </p>
                  </div>
                </Col>
              </Row>

              <Row className="pd-top-20">
                <Col lg="12">
                  <div className="card">
                    <Image
                      className="img-fluid"
                      src={opt}
                      alt="seo in Beamsville"
                    />
                    <h2>
                      3. <span>Optimize Landing Pages</span>
                    </h2>
                    <p>
                      Landing pages are crucial for converting visitors into
                      leads or customers. To optimize these pages, ensure the
                      content is highly relevant to the traffic source, whether
                      it's an ad, email, or social media post. The messaging and
                      offers should match users' expectations when they arrive.
                      Reduce distractions by eliminating unnecessary elements
                      that could divert attention from the main objective, such
                      as signing up for a service or making a purchase. Employ
                      compelling headlines, persuasive copy, and strong CTAs to
                      encourage action. Also, incorporate trust signals, like
                      customer testimonials or security badges, to build
                      credibility and reassure visitors. An optimized landing
                      page can greatly enhance conversion rates by delivering a
                      focused and convincing user experience.
                    </p>
                  </div>
                </Col>
              </Row>

              <Row className="pd-top-20">
                <Col lg="12">
                  <div className="card">
                    <Image
                      className="img-fluid"
                      src={testing}
                      alt="Beamsville seo company services"
                    />
                    <h2>
                      4. <span>Implement A/B Testing</span>
                    </h2>
                    <p>
                      A/B testing, also known as split testing, is a powerful
                      technique for enhancing website elements to boost
                      conversion rates. This method involves creating two or
                      more versions of a webpage and comparing their performance
                      to determine which one delivers the best results. You can
                      test various elements, such as headlines, images, CTAs, or
                      overall design, to see what resonates most with your
                      audience. By analyzing user behavior and engagement
                      metrics, you can pinpoint which version of a page is more
                      effective in meeting your conversion goals. Tools like
                      Google Optimize or Optimizely assist in setting up and
                      managing A/B tests, offering insights that drive
                      data-informed decisions. Ongoing A/B testing allows your
                      website to adapt based on real user feedback, leading to
                      improved conversion rates over time.
                    </p>
                  </div>
                </Col>
              </Row>

              <Row className="pd-top-20">
                <Col lg="12">
                  <div className="card">
                    <Image
                      className="img-fluid"
                      src={social}
                      alt="search engine optimization Beamsville"
                    />
                    <h2>
                      5. <span>Leverage Social Proof</span>
                    </h2>
                    <p>
                      Social proof is a psychological concept where individuals
                      look to others’ actions and opinions to guide their own
                      decisions. By integrating social proof elements into your
                      website, you can build trust and credibility, which are
                      essential for boosting conversions. Feature customer
                      testimonials prominently, showcasing positive feedback and
                      experiences from past clients. Adding case studies with
                      detailed success stories can further illustrate the value
                      of your products or services. Reviews and ratings
                      significantly influence potential customers by providing
                      evidence of your business’s reputation and reliability.
                      Additionally, highlight any awards or certifications your
                      company has received to strengthen your credibility.
                      Leveraging social proof helps create a more persuasive and
                      trustworthy website that motivates visitors to take
                      action.
                    </p>
                  </div>
                </Col>
              </Row>
            </section>

            <Row>
              <Col lg="12">
                <div className="card">
                  <img
                    alt="Beamsville seo client"
                    width="48"
                    height="48"
                    src="https://lh3.googleusercontent.com/a-/ALV-UjXrE-pCVt85f0WVdkwxJavD--mFf6VwkCGbIVkEjYt98Qt5ukDYqw=w48-h48-p-rp-mo-ba3-br100"
                  />
                  <p className="author">VISCA Electric</p>
                  <div className="d-flex">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"
                        fill="#FFD700"
                      />
                    </svg>
                  </div>
                  <p className="desc">
                    Working with Infused Agency was a pleasure. They were
                    extremely responsive and informative from start to finish.
                    Infused Agency is creative, efficient, and very
                    knowledgeable in their field. They helped me and my team
                    create a new website for my business. The design and
                    development process was smooth and easy. I would absolutely
                    recommend Infused Agency to anyone looking for a new or
                    updated website for their business!
                  </p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23282.936303750226!2d-79.49941746955109!3d43.15981920227602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ca6a63bd9bd41%3A0x22e434fb6db3b5f!2sBeamsville%2C%20Lincoln%2C%20ON!5e0!3m2!1sen!2sca!4v1723567950102!5m2!1sen!2sca"
                  width="100%"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
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
