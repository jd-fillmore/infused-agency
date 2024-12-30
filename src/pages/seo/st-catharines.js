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
import hero from "../../img/seo-st-catharines.webp";
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
          SEO St. Catharines | Top SEO Services in St. Catharines, Ontario
        </title>
        <meta
          name="description"
          content="Enhance your online visibility with expert SEO services in St. Catharines. Drive traffic, leads, and growth with our tailored strategies. Get started today!"
        />
        <link rel="canonical" href="https://infused.agency/seo/st-catharines" />
      </Head>
      <Nav />
      <InnerHeroCities
        title="SEO St. Catharines"
        subTitle="Expand Your Business with Our SEO Services in St. Catharines, Ontario"
        image={hero}
        alt="SEO Company in St. Catharines"
      />
      <GoogleReviews />
      <section className="home-top-web pd-btm-0">
        <div className="container pd-btm-120">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>
                Our SEO Clients near St. Catharines <span>Get Results</span>
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
                  Excited to Boost Your Business with Our <br />
                  St. Catharines SEO Services?
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
                  St. Catharines <span>SEO</span> Services to Boost Local
                  Presence
                </h2>
                <h3>Local SEO for St. Catharines Companies</h3>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <p>
                  Are you a business owner in St. Catharines, Ontario, aiming to
                  grow your online presence and attract more local customers?
                  Infused Agency is here to help. Our team specializes in
                  personalized <Link href="/seo">SEO</Link> and{" "}
                  <Link href="/web-design">web design</Link> services for
                  businesses in St. Catharines and nearby areas.
                </p>

                <p>
                  One of our main focuses is local SEO. By enhancing your
                  website and online listings for search engines, we help your
                  business appear higher in local search results. This includes
                  tasks like claiming your Google My Business listing and adding
                  schema markup to your website.
                </p>

                <p>
                  We also offer comprehensive web design services, including
                  WordPress development. Our team can create a mobile-friendly
                  website that looks great and is optimized for search engines.
                  We know it’s crucial for your website to work well on all
                  devices, especially with more people using mobile phones.
                </p>

                <p>
                  Don’t let your competitors outrank you in local search
                  results. Contact us today for a{" "}
                  <Link href="/get-a-quote">free consultation</Link> and find
                  out how we can help your St. Catharines business succeed
                  online.
                </p>
                <p>
                  We provide services across St. Catharines, ON, covering areas
                  like{" "}
                  <a href="https://www.google.com/maps/place/Malcolmson+Eco+Park/@43.215042,-79.2196233,16z/data=!3m1!4b1!4m6!3m5!1s0x89d35745d8a5669b:0x619264a3366f7c0e!8m2!3d43.2150381!4d-79.2170484!16s%2Fg%2F11c2k39hs4?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                    Malcolmson Eco-Park
                  </a>
                  ,{" "}
                  <a href="https://www.google.com/maps/place/Lakeside+Park+Beach/@43.2045277,-79.2682229,17z/data=!3m1!4b1!4m6!3m5!1s0x89d35166140baedd:0x8a7653874e975200!8m2!3d43.2045238!4d-79.265648!16s%2Fg%2F11k05nbd6q?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                    Lakeside Park
                  </a>
                  , Downtown, Merritton, and Port Dalhousie.
                </p>

                <p>
                  <a href="https://www.stcatharines.ca/" target="_blank">
                    St. Catharines, ON
                  </a>{" "}
                  is a beautiful city located in the heart of the Niagara
                  Region, known for its vibrant community and rich cultural
                  heritage. It is home to local attractions such as the St.
                  Catharines Museum and Welland Canals Centre, the stunning
                  Montebello Park, and the famous Meridian Centre. With its
                  close proximity to the Niagara Escarpment, St. Catharines
                  offers breathtaking views, hiking trails, and a friendly,
                  lively atmosphere.
                </p>

                <p>
                  Starting a business in St. Catharines, ON can be exciting, but
                  it's important to think carefully about how to reach your
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
                    Our SEO specialists in St. Catharines begin by diving deep
                    into your website to discover the best keywords for your
                    business. This allows us to build a custom SEO strategy that
                    works just for you. With years of experience, the Infused
                    Agency team excels at achieving great results, even in
                    competitive industries.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Link Building</h2>
                  <p>
                    We boost your online presence by getting quality backlinks
                    and relevant business listings across top search engines
                    like Google, Yahoo, and Bing. At Infused Agency, we follow
                    best SEO practices and stick to white-hat SEO techniques. We
                    tailor a strategy that fits your business, whether you're a
                    new startup or an established company.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Content Writing</h2>
                  <p>
                    The Infused Agency team in St. Catharines is made up of
                    creative and skilled writers who craft smart, data-driven
                    marketing strategies for your digital campaigns. Our content
                    includes SEO-focused material to enhance your online
                    presence. We aim to engage your audience and build a loyal
                    following for your brand.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>On-Page SEO</h2>
                  <p>
                    Increase your site traffic and attract better leads with our
                    proven on-page SEO techniques. Our team in St. Catharines
                    analyzes competitor keywords and strategies to help improve
                    your website’s rankings. We focus on making your site more
                    visible and optimizing your SEO efforts for the best
                    outcomes.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Local SEO</h2>
                  <p>
                    Our St. Catharines local SEO services ensure your business
                    reaches the right audience online. We carefully select the
                    best local keywords to make sure your business stands out.
                    This drives more traffic to your website and attracts
                    customers to your physical location.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Technical SEO</h2>
                  <p>
                    Search engines like Google evaluate your website’s
                    performance when determining rankings. Our SEO team in St.
                    Catharines ensures your web design is SEO-friendly and runs
                    smoothly. We address technical errors and monitor your
                    site’s performance, which helps improve user experience and
                    convert visitors into paying customers.
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
                  St. Catharines SEO services?
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
              <h2>Why Choose Infused for Your St. Catharines SEO Needs?</h2>
              <p>
                Our <strong>St. Catharines SEO agency</strong> has been helping
                businesses stand out online for over ten years. Our skilled{" "}
                <strong>St. Catharines SEO experts</strong> know exactly what
                local businesses need to rise in search rankings. We create
                tailored local SEO strategies that not only look great but also
                help your business thrive.
              </p>
              <p>
                By choosing us, you're working with a team that truly
                understands the Niagara region. We know how to make your
                business shine for both locals and visitors. Our mission is to
                help you grow by bringing more people to your website.
              </p>
              <p>
                With our <strong>St. Catharines SEO</strong> expertise, we
                ensure your website shows up on Google when people search for
                services in St. Catharines and the surrounding areas. This means
                more people will discover your business, leading to more sales.
                We're committed to our clients' success and work hard to help
                you reach your goals.
              </p>
              <p>
                Thanks to our <Link href="/blog">deep expertise</Link>,{" "}
                <Link href="/work">top-notch work</Link>, and excellent customer
                service, we've earned a reputation as a trusted SEO agency for
                many businesses. Let us help you achieve your digital marketing
                goals.
              </p>

              <Image
                className="img-fluid"
                src={best}
                alt="search engine optimization company st catharines"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93099.00261265786!2d-79.33160072041576!3d43.18129588323582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d35054bb6a5a4b%3A0x37563636c082837!2sSt.%20Catharines%2C%20ON!5e0!3m2!1sen!2sca!4v1735571647158!5m2!1sen!2sca"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <section className="services pd-btm-120">
            <Row className="text-center">
              <Col lg="12">
                <h2>
                  Why Choose Us as Your <br />
                  <span>St. Catharines SEO Partner</span>:
                </h2>
              </Col>
            </Row>

            <div className="row">
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>We See Ourselves as Partners</h2>
                  <p>
                    At Infused Agency, we’re not just here to offer a service –
                    we’re here to be your partner in success. We treat every
                    client like a true partner. By building strong
                    relationships, we ensure that we truly understand your goals
                    and vision. We listen carefully to your needs and help you
                    at every stage. When you work with us, you do the talking,
                    we do the listening, and our Beamsville SEO team delivers
                    the results you want!
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Focused on Results</h2>
                  <p>
                    If you’re still using strategies that aren't working, it’s
                    time for a change. We focus on getting you results that
                    truly matter. Our team of digital marketers is always
                    looking for fresh opportunities to grow your business. We
                    monitor your campaigns closely, adjust strategies based on
                    data, and work hard to bring in qualified leads that help
                    increase your conversion rate. Your success is our top
                    priority!
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Clear Reporting</h2>
                  <p>
                    At Infused Agency, transparency is key. Unlike many SEO
                    companies, we make sure you know exactly what’s going on
                    with your campaigns. You’ll receive monthly executive
                    summaries and on-demand reports. Our account managers keep
                    you updated on your campaign’s progress, and we always
                    communicate new developments so you're never left in the
                    dark.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Strong Work Ethic</h2>
                  <p>
                    The success of Infused Agency is built on a culture of hard
                    work. Our team is dedicated to constantly improving our SEO
                    solutions. We have helped businesses grow online for over a
                    decade, and we’re committed to being the best. Our passion
                    for SEO is matched only by our dedication to honesty and
                    integrity in everything we do.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Deep SEO Expertise</h2>
                  <p>
                    At Infused Agency, we don’t believe in one-size-fits-all
                    SEO. We understand that every business is different. That’s
                    why our Beamsville SEO team takes the time to learn about
                    your goals and align them with our strategies. With years of
                    experience, we create customized SEO campaigns tailored to
                    your needs. Whether you’re running an eCommerce site, a
                    small business, or a large company, we have the right
                    solution for you!
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Your Personal SEO Team</h2>
                  <p>
                    When you choose us, you’ll have a team of SEO experts
                    dedicated to your business. Each member brings their unique
                    skill set to help grow your brand and outshine the
                    competition. With years of experience in challenging
                    industries, Infused Agency knows how to succeed and help you
                    thrive online.
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
                <h2>Get Noticed More with Our St. Catharines SEO Services</h2>
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
                <h2>SEO Beamsville Frequently Asked Questions</h2>
              </Col>
            </Row>

            <Row>
              <Col lg="12">
                <h3>What is SEO and Why Does My Website Need It?</h3>
                <p>
                  Local <strong>SEO Beamsville</strong> helps your website show
                  up higher in local search results, making it easier for people
                  to find your business.
                </p>
                <h3>What Affects Local SEO Rankings?</h3>
                <p>
                  Key factors include using the right keywords, having a fast
                  website, and getting links from other websites to yours.
                </p>
                <h3>How Much Does Local SEO Cost?</h3>
                <p>
                  The price for <strong>SEO Beamsville</strong> services depends
                  on how long the campaign lasts and the work needed.{" "}
                  <a href="/get-a-quote">Get in touch with us</a> for a free
                  consultation and estimate.
                </p>
                <h3>How Do You Choose Which Keywords to Use?</h3>
                <p>
                  We research the most common words people use to search for
                  businesses like yours and pick the best ones to bring in more
                  visitors.
                </p>
                <h3>
                  What’s the Difference Between On-Page SEO and Off-Page SEO?
                </h3>
                <p>
                  On-page SEO focuses on improving things like your website’s
                  text and images. Off-page SEO is about getting other websites
                  to link to yours.
                </p>
                <h3>How Do You Fix Technical SEO Problems?</h3>
                <p>
                  We fix issues like slow page loading, broken links, and ensure
                  your site works well on mobile to improve its performance.
                </p>
                <h3>Can You Promise a #1 Google Ranking?</h3>
                <p>
                  While no one can guarantee a #1 ranking, we can improve your
                  chances with effective <strong>SEO Beamsville</strong>{" "}
                  strategies.
                </p>
                <h3>How Do Backlinks Help My SEO?</h3>
                <p>
                  Backlinks are links from other websites to yours, showing
                  Google that your site is trustworthy.
                </p>
                <h3>What Tools Do You Use for SEO Analysis?</h3>
                <p>
                  We use tools like Google Analytics and other software to track
                  your website’s performance and provide reports.
                </p>
                <h3>What Are the Risks of SEO and How Do You Avoid Them?</h3>
                <p>
                  Risks can include bad practices that could get your site
                  penalized by Google. Our <strong>SEO Beamsville</strong> team
                  uses safe and proven methods.
                </p>
                <h3>How Do You Handle Local SEO for Service Businesses?</h3>
                <p>
                  We use local keywords, list your business on Google Maps, and
                  gather positive reviews to boost your local rankings.
                </p>
                <h3>What is Your Website Audit Process?</h3>
                <p>
                  We check your site’s health, analyze keywords, assess its
                  performance, and find areas for improvement.
                </p>
                <h3>How Do You Create Content That Google Loves?</h3>
                <p>
                  We write helpful, interesting articles with the right keywords
                  that attract visitors to your site.
                </p>
                <h3>How Do You Keep Up with SEO Changes?</h3>
                <p>
                  We stay updated by following SEO news, reading search engine
                  updates, and testing new strategies.
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
