import React from "react";
import { getLatestPosts } from "../../lib/posts";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Nav from "../../../components/Nav/nav";
import InnerHeroCities from "../../../components/innerHero/innerHeroCIties";
import CTA from "../../../components/CTA/cta";
import Footer from "../../../components/Footer/footer";
import hero from "../../img/seo-grimsby.webp";
import best from "../../img/awards.png";
import { Col, Container, Row } from "reactstrap";
import GoogleReviews from "../../../components/GoogleReviews/googleReviews";
import flatRock from "../../img/flat-rock-seo-results.png";
import kd from "../../img/kd-flowers-seo-results.png";

const SEO = ({ latestPosts }) => {
  return (
    <>
      <Head>
        <title>
          Grimsby SEO Company | Affordable SEO Services in Grimsby, Ontario
        </title>
        <meta
          name="description"
          content="Get results with affordable SEO services in Grimsby, Ontario. Our expert strategies help your business rank higher and attract more customers."
        />
        <link rel="canonical" href="https://infused.agency/seo/grimsby" />
      </Head>
      <Nav />
      <InnerHeroCities
        title="Grimsby SEO Company"
        subTitle="Enhance your business growth with expert SEO services in Grimsby, ON."
        image={hero}
        alt="SEO Services in Grimsby, Ontario"
      />
      <GoogleReviews />
      <section className="home-top-web pd-btm-0">
        <div className="container pd-btm-120">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>
                Our Grimsby SEO Clients{" "}
                <span>Get Real, Noticeable Results</span>
              </h2>
            </div>
          </div>
          <section className="work">
            <div className="row pd-top-40">
              <div className="col-lg-6">
                <h2 className="title">Recent Project</h2>
                <h2>Flat Rock Cellars</h2>
                <hr />
                <Image
                  className="img-fluid"
                  src={flatRock}
                  alt="Flat Rock Cellars SEO Results"
                />
                <div class="card">
                  <h3>After hiring us:</h3>
                  <ul>
                    <li>Local Google Search Visibility Increased by 300%</li>
                    <li>Page 1 Google Map Rankings for Multiple Keywords</li>
                    <li>Page 1 Google Rankings for Multiple Keywords</li>
                    <li>Increased User Experience</li>
                    <li>Increased Engagement and Conversions</li>
                    <li>Increased Brand Recognition</li>
                    <li>Streamlined collection of leads</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <h2 className="title">Recent Project</h2>
                <h2>KD Flowers</h2>
                <hr />
                <Image
                  className="img-fluid"
                  src={kd}
                  alt="KD Flowers SEO Results"
                />
                <div class="card">
                  <h3>After hiring us:</h3>
                  <ul>
                    <li>Website Page Speed Increased By 100%</li>
                    <li>Google Search Visibility Increased by 600%</li>
                    <li>Achieved first-page Google rankings within 3 months</li>
                    <li>
                      0 leads to massive growth in local leads from Google
                    </li>
                    <li>Page 1 Google Map Rankings for Multiple Keywords</li>
                    <li>Page 1 Google Rankings for Multiple Keywords</li>
                    <li>Increased User Experience</li>
                  </ul>
                </div>
              </div>
            </div>
            <Row className="pd-top-40 text-center">
              <Col lg="12">
                <Link href="/work">
                  <button>View More Results</button>
                </Link>
              </Col>
            </Row>
          </section>
        </div>
        <section className="light-bg text-center pd-top-80 pd-btm-80">
          <Container>
            <Row>
              <Col lg="12">
                <h2>
                  Looking to grow your business with our <br />
                  Grimsby SEO services?
                </h2>
                <p>Click the button below for your free quote!</p>
                <Link href="/get-a-quote">
                  <button>Get Your Free Quote</button>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <Container>
          <section className="services pd-top-120 pd-btm-120">
            <Row className="text-center pd-btm-40">
              <Col lg="12">
                <h2>
                  <span>Grimsby SEO Services</span> to Boost Your Local Presence
                </h2>
                <h3>Local SEO Solutions for Grimsby Companies</h3>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <p>
                  Are you a business owner in Grimsby, Ontario, looking to grow
                  your online presence and attract more local customers? Infused
                  Agency is here to help. Our team specializes in personalized{" "}
                  <Link href="/seo">SEO</Link> and{" "}
                  <Link href="/web-design">web design</Link> services for
                  businesses in Grimsby and nearby areas.
                </p>

                <p>
                  A key part of what we do is local SEO. By improving your
                  website and online listings for search engines, we help your
                  business show up higher in local search results. This includes
                  tasks like claiming your Google My Business listing and adding
                  schema markup to your website.
                </p>

                <p>
                  We also offer complete web design services, including
                  WordPress development. Our team can create a mobile-friendly
                  website that looks great and is optimized for search engines.
                  We know it’s important for your website to work well on all
                  devices, especially with more people using mobile phones.
                </p>

                <p>
                  Don’t let your competitors outrank you in local search
                  results. Contact us today for a{" "}
                  <Link href="/get-a-quote">free consultation</Link> and find
                  out how we can help your Grimsby business succeed online.
                </p>
                <p>
                  We provide services across Grimsby, ON, covering areas like{" "}
                  <a href="https://www.google.com/maps/place/Grimsby,+ON/@43.255706,-79.566614,13z/data=!4m6!3m5!1s0x882cd30e9fa388c7:0xd33b4783e9a0a61e!8m2!3d43.2543925!4d-79.5665982!16zL20vMDZxdG5s">
                    Grimsby Beach
                  </a>
                  ,{" "}
                  <a href="https://www.google.com/maps/place/Casablanca+Boulevard,+Grimsby,+ON/@43.234639,-79.566462,13z/data=!4m15!1m8!3m7!1s0x882cd303fd660047:0xd98135e2d44b12d8!2sCasablanca+Boulevard,+Grimsby,+ON!3b1!8m2!3d43.2348289!4d-79.5625508!16zL20vMDZxdG5s">
                    Casablanca Boulevard
                  </a>
                  , Main Street West, Livingston Avenue, and Cherry Hill.
                </p>

                <p>
                  <a href="https://www.grimsby.ca/" target="_blank">
                    Grimsby, ON
                  </a>{" "}
                  is a vibrant town located along the shores of Lake Ontario,
                  known for its scenic waterfront, welcoming community, and
                  excellent quality of life. Grimsby offers a mix of beautiful
                  parks, local wineries, and rich history, making it an ideal
                  place to live and do business.
                </p>

                <p>
                  Starting a business in Grimsby, ON can be exciting, but it's
                  important to think carefully about how to reach your
                  customers. Without a solid online presence, it can be tough to
                  grow your business. That's where Infused Agency's SEO
                  Company’s team comes in to help you get noticed online.
                </p>
              </Col>
            </Row>
            <div className="row pd-top-40">
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Keyword Research</h2>
                  <p>
                    Our Grimsby SEO experts begin by analyzing your website and
                    finding the best keywords. This helps us build a strong SEO
                    plan tailored just for you. With years of experience,
                    Infused Agency's team knows how to thrive even in
                    competitive industries, always achieving great results.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Link Building</h2>
                  <p>
                    We help boost your brand's presence on major search engines
                    like Google, Yahoo, and Bing by building quality links and
                    creating relevant business listings. At Infused Agency, we
                    follow the best SEO practices using white hat SEO
                    techniques. We create a plan based on your needs, whether
                    you're a new business or an established company.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Content Writing</h2>
                  <p>
                    Infused Agency's SEO team in Grimsby has a talented and
                    creative content team. We develop data-driven marketing
                    strategies for your digital campaigns, including SEO
                    content. Our goal is to create engaging content that grabs
                    your audience's attention and turns them into loyal
                    supporters of your brand.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>On-Page SEO</h2>
                  <p>
                    Attract more visitors and generate better leads with our
                    proven on-page SEO techniques. Our Grimsby SEO team studies
                    your competitors' keywords and analyzes them to improve your
                    website's traffic and rankings. We tailor your SEO campaigns
                    to make your site more visible and ensure the best results.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Local SEO</h2>
                  <p>
                    Our Grimsby local SEO services help your business get
                    noticed by the right people online. We choose the best local
                    keywords to ensure we reach your target audience. This helps
                    drive more visitors to both your website and physical store.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Technical SEO</h2>
                  <p>
                    Google and other search engines consider how well your
                    website functions when determining rankings. Our Grimsby SEO
                    company handles your technical{" "}
                    <Link href="/grimsby-web-design">web design</Link>{" "}
                    maintenance to ensure it’s SEO-friendly and performs well.
                    We fix backend errors and monitor your site’s performance to
                    keep it running smoothly, making it easier for visitors to
                    navigate and turn them into paying customers.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Container>
        <section className="light-bg text-center pd-top-80 pd-btm-80">
          <Container>
            <Row>
              <Col lg="12">
                <h2>
                  Ready to take your business to the next level with our <br />
                  Grimsby SEO services?
                </h2>
                <p>Click the button below for your free quote!</p>
                <Link href="/get-a-quote">
                  <button>Get Your Free Quote</button>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Container End*/}
        {/* Container Start*/}
        <div className="container">
          <div className="row pd-top-120 pd-btm-120">
            <div className="col-lg-7">
              <h2>Why Pick Infused Agency for Your Grimsby SEO Needs?</h2>
              <p>
                Our <strong>SEO Agency in Grimsby</strong> has been helping
                businesses grow online with expert search engine optimization
                for over ten years. Our experienced <strong>SEO Grimsby</strong>{" "}
                consultants know exactly what local businesses need to improve
                search rankings. We create personalized local SEO plans that not
                only look great but also help your business thrive.
              </p>
              <p>
                When you choose us, you're working with a team that truly
                understands the Grimsby area. We know how to help your business
                stand out to both locals and visitors. Our mission is to grow
                your business by driving more traffic to your website.
              </p>
              <p>
                Using our <strong>SEO Grimsby</strong> expertise, we make sure
                your website shows up on Google when people search for services
                in Grimsby and surrounding areas. This leads to more people
                finding your business and ultimately more sales. We're committed
                to helping our clients succeed and work hard to make that
                happen!
              </p>
              <p>
                Thanks to our <Link href="/blog">extensive knowledge</Link>,{" "}
                <Link href="/work">high-quality work</Link>, and excellent
                customer service, we've become a trusted top SEO agency for many
                businesses. Let us help you achieve your digital marketing
                goals.
              </p>

              <Image
                className="img-fluid"
                src={best}
                alt="seo agency in grimsby, ontario"
              />
            </div>
            <div className="col-lg-5">
              <div className="card">
                <img
                  alt="kd flowers seo testimonial"
                  width="48"
                  height="48"
                  src="https://lh3.googleusercontent.com/a/ACg8ocJ0eWch1hRWUGzVDCWLHHB4-5kucORKoBlJcD-KmOcfyBhD7Q=w48-h48-p-rp-mo-ba3-br100"
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
                  In just one month, my business's website made it to the first
                  page of Google! I was so surprised! After that, I started
                  getting emails from people interested in my services right
                  away, and I've been busy ever since! Thanks a lot to Infused
                  Agency for helping my business grow!
                </p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93092.63290802295!2d-79.66322367018574!3d43.18547293296224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882caf79ccfea3dd%3A0x9566109eba2a4656!2sGrimsby%2C%20ON!5e0!3m2!1sen!2sca!4v1735520219703!5m2!1sen!2sca"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <section className="services">
            <Row className="text-center">
              <Col lg="12">
                <h2>
                  Reasons to Partner with Us as Your <br />
                  <span>Grimsby SEO Experts</span>:
                </h2>
              </Col>
            </Row>
            <div className="row">
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>We Focus on Building Partnerships</h2>
                  <p>
                    At Infused Agency, we’re more than just an SEO service
                    provider; we become your trusted SEO partner. We treat every
                    client as a key part of our journey to success. By forming
                    strong connections, we ensure we understand your goals and
                    vision, and support you at every stage. When you team up
                    with us, you speak your mind, and we listen closely, with
                    our Grimsby SEO team delivering the results you expect!
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Focused on Results</h2>
                  <p>
                    Tired of strategies that don't lead to real results? We make
                    sure every approach we use brings solid outcomes. Our
                    digital marketing experts work hard to uncover growth
                    opportunities for your business. By carefully tracking your
                    campaigns and using data-driven strategies, we aim to boost
                    your leads and improve your conversion rate. At Infused
                    Agency, your success is our priority!
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Transparent Reporting</h2>
                  <p>
                    Unlike many SEO agencies, Infused Agency values
                    transparency. We keep you informed every step of the way.
                    You’ll get monthly summaries and real-time reports. Our
                    account managers are always ready to provide updates on your
                    campaigns. We make sure you’re never out of the loop,
                    sharing every step of progress along the way.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Strong Work Ethic</h2>
                  <p>
                    The reason Infused Agency is a leading Grimsby SEO agency is
                    because of our strong work ethic and constant drive to
                    improve. Our team has been passionate about SEO for over ten
                    years, helping our clients grow their online presence. We
                    work hard to stay at the top of our game, maintaining high
                    standards of honesty and integrity.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Expert SEO Knowledge</h2>
                  <p>
                    We don’t believe in “one-size-fits-all” solutions at Infused
                    Agency. We know every business has its own unique goals, so
                    our Grimsby SEO experts take the time to understand yours.
                    With years of experience, we tailor the best strategy for
                    your specific needs. Whether you run an eCommerce store, a
                    small business, or manage multiple locations, we have the
                    expertise to help.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Your Personal SEO Team</h2>
                  <p>
                    When you choose our Grimsby SEO services, you get a
                    dedicated team of skilled experts, each bringing their own
                    strengths to the table. We work together to place your brand
                    in front of the right audience and help you stay ahead of
                    the competition. Infused Agency has the experience to
                    succeed even in the toughest markets.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="light-bg text-center pd-top-80 pd-btm-80">
          <Container>
            <Row>
              <Col lg="12">
                <h2>
                  Increase Your Online Visibility with Our <br />
                  Grimsby SEO Services
                </h2>
                <p>Click the button below for your free quote!</p>
                <Link href="/get-a-quote">
                  <button>Get Your Free Quote</button>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="home-faq">
          <Container>
            <Row className="text-center pd-btm-40">
              <Col lg="12">
                <h2>Grimsby SEO Frequently Asked Questions</h2>
              </Col>
            </Row>

            <Row>
              <Col lg="12">
                <h3>What is SEO and Why is it Important for My Website?</h3>
                <p>
                  Local <strong>Grimsby SEO</strong> helps your site appear
                  higher in search results, making it easier for people nearby
                  to find you.
                </p>
                <h3>What Affects Local SEO Rankings?</h3>
                <p>
                  Key factors include selecting the right keywords, having a
                  fast website, and getting quality links from other websites.
                </p>
                <h3>How Much Do Local SEO Services Cost?</h3>
                <p>
                  The price of <strong>SEO Grimsby</strong> services varies
                  based on the duration of the campaign and the scope of work.{" "}
                  <a href="/get-a-quote">Reach out to us</a> for a free
                  consultation and an estimate.
                </p>
                <h3>How Do You Pick the Best Keywords to Target?</h3>
                <p>
                  We analyze the search terms potential customers use and choose
                  the most effective ones to attract more visitors to your site.
                </p>
                <h3>What’s the Difference Between On-Page and Off-Page SEO?</h3>
                <p>
                  On-page SEO focuses on improving the content and structure of
                  your website, while off-page SEO includes building links from
                  other sites to yours.
                </p>
                <h3>How Do You Fix SEO Problems on My Website?</h3>
                <p>
                  We address technical issues such as slow loading speeds,
                  broken links, and ensure your website is mobile-friendly for
                  better user experience.
                </p>
                <h3>Can You Promise My Website Will Rank #1 on Google?</h3>
                <p>
                  While no one can promise a #1 ranking, we can significantly
                  increase your chances with tailored{" "}
                  <strong>SEO Grimsby</strong> strategies.
                </p>
                <h3>How Do Backlinks Benefit My SEO?</h3>
                <p>
                  Backlinks, or links from other websites to yours, signal to
                  Google that your site is trustworthy and relevant.
                </p>
                <h3>
                  What SEO Tools Do You Use to Monitor My Site’s Performance?
                </h3>
                <p>
                  We use tools like Google Analytics, along with other advanced
                  software, to track your website’s performance and provide
                  detailed reports.
                </p>
                <h3>
                  Are There Any Risks in SEO, and How Do You Prevent Them?
                </h3>
                <p>
                  SEO risks include using poor practices that could lead to
                  penalties from Google. Our <strong>SEO Grimsby</strong> team
                  uses safe, industry-approved methods to avoid these risks.
                </p>
                <h3>
                  How Do You Handle Local SEO for Service-Based Businesses?
                </h3>
                <p>
                  We focus on using local keywords, listing your business on
                  Google Maps, and encouraging positive reviews to help your
                  business rank higher in local searches.
                </p>
                <h3>What’s Involved in Your Website Audit Process?</h3>
                <p>
                  We perform a full site audit to check for health issues,
                  evaluate keyword usage, analyze performance, and suggest
                  improvements.
                </p>
                <h3>How Do You Create Content That Google Loves?</h3>
                <p>
                  We craft engaging and valuable content that includes the right
                  keywords to draw in visitors and improve your SEO ranking.
                </p>
                <h3>How Do You Stay Current with SEO Changes?</h3>
                <p>
                  We stay up-to-date by following the latest SEO trends, reading
                  search engine updates, and experimenting with new strategies
                  to keep your site competitive.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="home-blog">
          <Container>
            <Row>
              <Col lg="12">
                <h2 className="title">Latest Blog Posts</h2>
                <Row>
                  {latestPosts.map(({ id, date, title, excerpt, image }) => (
                    <Col lg="4" md="6" sm="12" key={id} className="mb-4">
                      <Link href={`/posts/${id}`}>
                        {image && (
                          <Image
                            src={image}
                            className="img-fluid"
                            alt={`Preview image for ${title}`}
                            width={600}
                            height={400}
                          />
                        )}
                      </Link>
                      <div className="post-card card">
                        <h3>
                          <Link href={`/posts/${id}`}>{title}</Link>
                        </h3>
                        <small>
                          {format(new Date(date), "eeee, MMMM d, yyyy")}
                        </small>
                        <p>{excerpt}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </section>

      <CTA />
      <Footer />
    </>
  );
};

export default SEO;

export async function getStaticProps() {
  const latestPosts = getLatestPosts(3);
  return {
    props: {
      latestPosts,
    },
  };
}
