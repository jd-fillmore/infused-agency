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
import hero from "../../img/seo-beamsville.webp";
import best from "../../img/awards.png";
import { Col, Container, Row } from "reactstrap";
import GoogleReviews from "../../../components/GoogleReviews/googleReviews";
import flatRock from "../../img/flat-rock-seo-results.png";
import kd from "../../img/kd-flowers-seo-results.png";

const SEO = ({ latestPosts }) => {
  return (
    <>
      <Head>
        <title>SEO Beamsville, ON | SEO Services in Beamsville, Ontario</title>
        <meta
          name="description"
          content="Award-winning Beamsville SEO Company boosts your online visibility with expert SEO services. Drive traffic, leads, and sales with our proven strategies."
        />
        <link rel="canonical" href="https://infused.agency/seo/beamsville" />
      </Head>
      <Nav />
      <InnerHeroCities
        title="SEO Beamsville"
        subTitle="Grow Your Business With Our SEO Services in Beamsville, ON"
        image={hero}
        alt="SEO Company in Beamsville, Ontario"
      />
      <GoogleReviews />
      <section className="home-top-web pd-btm-0">
        <div className="container pd-btm-120">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>
                Our Beamsville SEO Clients <span>Get Results</span>
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
                  Ready to Grow Your Business with our <br />
                  Beamsville SEO Services?
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
                  Beamsville <span>SEO</span> Services to Improve Local
                  Visibility
                </h2>
                <h3>Local SEO for Beamsville Businesses</h3>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <p>
                  Are you a business owner in Beamsville, Ontario, looking to
                  grow your online presence and attract more local customers?
                  Infused Agency is here to help. Our team specializes in
                  personalized <Link href="/seo">SEO</Link> and{" "}
                  <Link href="/web-design">web design</Link> services for
                  businesses in Beamsville and nearby areas.
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
                  out how we can help your Beamsville business succeed online.
                </p>
                <p>
                  We provide services across Beamsville, ON, covering areas like{" "}
                  <a href="https://www.google.com/maps/place/Kinsmen+Park/@43.1611284,-79.517786,13z/data=!4m15!1m8!3m7!1s0x882ca6a63bd9bd41:0x22e434fb6db3b5f!2sBeamsville,+Lincoln,+ON!3b1!8m2!3d43.1570948!4d-79.4760133!16zL20vMDZxdG5s!3m5!1s0x882cb1fbd5449701:0xd78126f70d79d742!8m2!3d43.14534!4d-79.47595!16s%2Fg%2F1tf4fp5r?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                    Kinsmen Park
                  </a>
                  ,{" "}
                  <a href="https://www.google.com/maps/place/Albright+Manor/@43.1507457,-79.4973951,13.93z/data=!4m15!1m8!3m7!1s0x882ca6a63bd9bd41:0x22e434fb6db3b5f!2sBeamsville,+Lincoln,+ON!3b1!8m2!3d43.1570948!4d-79.4760133!16zL20vMDZxdG5s!3m5!1s0x882cb1fdfaf02a1b:0x85601de8cf1e8306!8m2!3d43.1518682!4d-79.4765943!16s%2Fg%2F1t_wp_br?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                    Albright Manor
                  </a>
                  , Vine Avenue, Mountainview, and Cherry Heights.
                </p>

                <p>
                  <a href="https://www.lincoln.ca/" target="_blank">
                    Beamsville, ON
                  </a>{" "}
                  is a beautiful town located in the heart of the Niagara
                  Region, known for its charming small-town atmosphere and rich
                  agricultural roots. It is home to local attractions such as
                  the Beamsville Heritage Trail, the beautiful vineyards, and
                  the famous Beamsville Lions Park. With its close proximity to
                  the Niagara Escarpment, Beamsville offers breathtaking views,
                  hiking trails, and a friendly, vibrant community.
                </p>

                <p>
                  Starting a business in Beamsville, ON can be exciting, but
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
                    Our Beamsville SEO experts start by looking closely at your
                    website and finding the best keywords. This helps us create
                    a strong SEO plan just for you. With many years of
                    experience, Infused Agency's team knows how to succeed even
                    in tough industries, always achieving great results.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Link Building</h2>
                  <p>
                    We help get your brand noticed on top search engines like
                    Google, Yahoo, and Bing by building quality links and
                    creating relevant business listings. At Infused Agency, we
                    use the best SEO practices that follow white hat SEO rules.
                    We look at what you need and create a plan just for your
                    business, whether you’re a new startup or a big company.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Content Writing</h2>
                  <p>
                    Infused Agency's SEO company in Beamsville has a creative
                    and skilled editorial team. Our content team creates smart,
                    data-based marketing strategies for your digital campaigns.
                    We include content for <Link href="/seo">SEO</Link>{" "}
                    strategies. Our goal is to capture your audience’s attention
                    with content that makes them loyal supporters of your brand.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>On-Page SEO</h2>
                  <p>
                    Get more visitors and generate better leads with our proven
                    on-page SEO methods. Our Beamsville SEO team researches
                    competitor keywords and analyzes them to improve your
                    traffic and rankings. We work to make your site more visible
                    and customize your SEO campaigns to get the best results.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Local SEO</h2>
                  <p>
                    Our Beamsville local SEO solutions help your business get
                    noticed by the right people online. We pick the best local
                    keywords to make sure we reach your target audience. This
                    helps bring more visitors to both your website and your
                    physical store.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Technical SEO</h2>
                  <p>
                    Google and other search engines look at how well your
                    website works when deciding your rankings. Our Beamsville
                    SEO company takes care of your technical{" "}
                    <Link href="/beamsville-web-design">web design</Link>{" "}
                    maintenance to make sure it’s SEO-friendly and ranks well.
                    We fix backend errors and track your site’s performance to
                    keep it running smoothly. This also makes the site easier
                    for users, helping turn visitors into paying customers.
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
                  Want to grow your business with our <br />
                  Beamsville SEO services?
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
              <h2>Why Choose Infused For Your Beamsville SEO Services?</h2>
              <p>
                Our <strong>SEO Agency in Beamsville</strong> has been helping
                businesses shine online with expert search engine optimization
                for over ten years. Our experienced{" "}
                <strong>SEO Beamsville</strong> consultants know just what local
                businesses need to climb search rankings. We create custom local
                SEO plans that not only look great but also help your business
                grow.
              </p>
              <p>
                Choosing us means teaming up with people who truly understand
                the Niagara region. We know how to make your business stand out
                to both local folks and visitors. Our goal is to boost your
                business by getting more people to visit your website.
              </p>
              <p>
                Using our <strong>SEO Beamsville</strong> skills, we make sure
                your website shows up on Google when people search for services
                in St. Catharines and nearby areas. This means more people will
                find your business, leading to more sales. We are dedicated to
                seeing our clients succeed and work hard to make that happen!
              </p>
              <p>
                Thanks to our <Link href="/blog">extensive knowledge</Link>,{" "}
                <Link href="/work">high-quality work</Link>, and outstanding
                customer service, we've become a trusted top SEO agency for many
                businesses. Let us help you reach your digital marketing goals.
              </p>
              <Image
                className="img-fluid"
                src={best}
                alt="search engine optimization company beamsville"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23282.936303750226!2d-79.49941746955109!3d43.15981920227602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ca6a63bd9bd41%3A0x22e434fb6db3b5f!2sBeamsville%2C%20Lincoln%2C%20ON!5e0!3m2!1sen!2sca!4v1735048861536!5m2!1sen!2sca"
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
                  Reasons To Choose Us As Your <br />
                  <span>Beamsville SEO Company</span>:
                </h2>
              </Col>
            </Row>
            <div className="row">
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>We Believe in Partnerships</h2>
                  <p>
                    At Infused Agency, we believe in being more than just a
                    service provider; we are your all-in-one SEO partner. We
                    treat every client as a partner in success! We build strong
                    relationships because we truly care about our clients' goals
                    and vision. We respect what you want to achieve and help you
                    every step of the way. When you choose to work with us, you
                    do the talking, we do the listening, and our Beamsville SEO
                    team delivers the results!
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Results-Oriented</h2>
                  <p>
                    Are you still using solutions that don't give you steady
                    results? If you said "yes," it's time to change things up.
                    We make sure every solution we use brings great results for
                    our clients. Our digital marketers work hard to find new
                    growth opportunities for your business. We keep a close eye
                    on your campaigns and create a strategy based on data to get
                    more qualified leads and boost your conversion rate. At
                    Infused Agency, your success is our main goal!
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Key Reporting</h2>
                  <p>
                    <p>
                      Unlike many SEO agencies, Infused Agency believes in being
                      completely transparent. We show you exactly what we're
                      doing and explain why we're doing it. We provide a monthly
                      executive summary and on-demand reporting. Our account
                      managers are always ready to update you on the success of
                      your campaigns. We make sure you're always in the loop by
                      communicating every update.
                    </p>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Work Ethic</h2>
                  <p>
                    <p>
                      Our culture is a big reason why Infused Agency is a
                      leading Beamsville SEO agency. Over the years, our team
                      has shown a strong work ethic and a drive to keep
                      improving our solutions. We are passionate about SEO and
                      have been helping our clients grow their businesses online
                      for more than ten years. We always aim to be the best at
                      what we do and keep a high standard of honesty and
                      integrity.
                    </p>
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>In-Depth SEO Knowledge</h2>
                  <p>
                    <p>
                      At Infused Agency, we don't believe in one-size-fits-all
                      solutions. We understand that every business is unique
                      with its own goals. That's why our Beamsville SEO experts
                      take the time to understand your needs and match them with
                      your objectives. With years of experience in SEO, we
                      create the best approach for your custom SEO campaigns.
                      Whether you need optimization for your eCommerce store,
                      small business, multiple locations, or a large business,
                      Infused Agency has the right solution for you!
                    </p>
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <h2>Personal SEO Team</h2>
                  <p>
                    <p>
                      When you choose our SEO company in Beamsville, you get to
                      work with a group of talented individuals, each with their
                      own special skills. Our SEO team collaborates to put your
                      brand in front of your customers and beat the competition.
                      Infused Agency has years of experience succeeding in the
                      toughest industries.
                    </p>
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
                <h2>Get More Visibility With Our Beamsville SEO Company</h2>
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
                <h2>SEO Beamsville FAQs</h2>
              </Col>
            </Row>

            <Row>
              <Col lg="12">
                <h3>What is SEO and Why Does My Website Need It?</h3>
                <p>
                  Local <strong>SEO Beamsville</strong> helps your website rank
                  higher in local search results, making it easier for people to
                  find you.
                </p>
                <h3>What Factors Affect Local SEO Rankings?</h3>
                <p>
                  Important factors include using the right keywords, having a
                  fast website, and getting other sites to link to yours.
                </p>
                <h3>How Much Does Local SEO Cost?</h3>
                <p>
                  The cost of <strong>SEO Beamsville</strong> services depends
                  on the campaign length and the work required.{" "}
                  <a href="/get-a-quote">Contact us today</a> for a free
                  consultation and quote.
                </p>
                <h3>How Do You Choose Which Keywords to Target?</h3>
                <p>
                  We research the words people use to find businesses like yours
                  and select the ones that will bring the most visitors.
                </p>
                <h3>What is On-Page SEO vs. Off-Page SEO?</h3>
                <p>
                  On-page SEO improves your website’s text and images. Off-page
                  SEO involves getting links from other websites to yours.
                </p>
                <h3>How Do You Fix Technical SEO Problems?</h3>
                <p>
                  We resolve issues like slow load times, broken links, and make
                  sure your site is mobile-friendly to enhance its performance.
                </p>
                <h3>Can You Guarantee a #1 Google Ranking?</h3>
                <p>
                  No one can guarantee a #1 ranking, but we can improve your
                  chances with effective <strong>SEO Beamsville</strong>{" "}
                  strategies.
                </p>
                <h3>How Do Backlinks Help My SEO?</h3>
                <p>
                  Backlinks are links from other sites to yours, showing Google
                  that your site is trustworthy.
                </p>
                <h3>What Tools Do You Use for SEO Analysis?</h3>
                <p>
                  We use tools like Google Analytics and other software to
                  monitor your website’s performance and provide reports.
                </p>
                <h3>What Are the Risks of SEO and How Do You Avoid Them?</h3>
                <p>
                  Risks include bad practices that can get your site penalized
                  by Google. Our <strong>SEO Beamsville</strong> team uses safe,
                  proven methods.
                </p>
                <h3>
                  How Do You Approach Local SEO for Service-Based Businesses?
                </h3>
                <p>
                  We use local keywords, list your business on Google Maps, and
                  collect positive reviews to boost local rankings.
                </p>
                <h3>What is Your Website Audit Process?</h3>
                <p>
                  We examine your site’s health, analyze keywords, assess
                  performance, and find areas for improvement.
                </p>
                <h3>How Do You Create Content That Google Likes?</h3>
                <p>
                  We write helpful, interesting articles with the right keywords
                  to attract visitors.
                </p>
                <h3>How Do You Keep Up with SEO Changes?</h3>
                <p>
                  We stay updated by following SEO news, reading search engine
                  updates, and testing new strategies.
                </p>
              </Col>
            </Row>
          </Container>
          <section className="home-areas pd-top-80">
            <Container>
              <Row>
                <Col lg="12">
                  <h2>Other Areas We Serve for SEO</h2>
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
