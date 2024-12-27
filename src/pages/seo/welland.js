import React from "react";
import { getLatestPosts } from "../../lib/posts";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Nav from "../../../components/Nav/nav";
import InnerHeroCities from "../../../components/innerHero/innerHeroCIties";
import InnerContent from "../../../components/innerContent/innerContent";
import CTA from "../../../components/CTA/cta";
import Footer from "../../../components/Footer/footer";
import flatImg from "../../img/flat-rock.webp";
import hero from "../../img/seo-welland.webp";
import best from "../../img/awards.png";
import { Col, Container, Row } from "reactstrap";

const SEO = ({ latestPosts }) => {
  return (
    <>
      <Head>
        <title>SEO Welland, ON | #1 Welland SEO Company</title>
        <meta
          name="description"
          content="Boost your business with the #1 Welland SEO company. Expert SEO services in Welland, ON to get you top search rankings and more traffic!"
        />
        <link rel="canonical" href="https://infused.agency/seo/welland" />
      </Head>
      <Nav />
      <InnerHeroCities
        title="SEO Welland"
        subTitle="Leading SEO Welland Company"
        image={hero}
        alt="seo welland"
      />
      <section className="home-top-web pd-btm-0">
        <div className="container pd-btm-120">
          <div className="row">
            <div className="col-lg-8">
              <h2>Local SEO Marketing Agency Serving Welland</h2>
              <p>
                {" "}
                At Infused Agency, we offer top-notch{" "}
                <strong>SEO Welland</strong> services to help local businesses
                stand out online. Our expert search engine optimization services
                make your website more visible when people search for what you
                offer. From planning to execution, we ensure your business gets
                noticed.{" "}
              </p>{" "}
              <p>
                {" "}
                We work closely with you to understand your local business
                goals. With this insight, we develop a customized local SEO
                strategy to help you rank higher in search results and attract
                more customers. Your input is crucial, and together, we ensure
                your business gains the online visibility it deserves!{" "}
              </p>
            </div>
          </div>
        </div>
        {/* Container End*/}
        {/* Container Start*/}
        <section className="dark pd-top-120">
          <div className="container">
            <section className="work pd-btm-120">
              <div className="row pd-top-40">
                <div className="col-lg-6">
                  <h2 className="title">Recent Project</h2>
                  <h2>Flat Rock Cellars</h2>
                  <hr />
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
                  <Image
                    width="503"
                    height="343"
                    priority={true}
                    className="img-fluid shadow"
                    src={flatImg}
                    alt="seo niagara agency"
                  />
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* Container End*/}
        {/* Container Start*/}
        <div className="container">
          <div className="row pd-top-120 pd-btm-120">
            <div className="col-lg-7">
              <h2>Why Choose Infused For Your Welland SEO Services?</h2>
              <p>
                {" "}
                Our <strong>SEO Agency in Welland</strong> has been enhancing
                businesses' online presence with expert search engine
                optimization for over a decade. Our seasoned{" "}
                <strong>SEO Welland</strong> consultants know exactly what local
                businesses need to excel in search rankings. We create tailored
                local SEO strategies that not only look impressive but also
                effectively drive customer growth.{" "}
              </p>{" "}
              <p>
                {" "}
                Choosing us means partnering with a team that truly understands
                the Niagara region. We know how to make your business stand out
                to both local residents and tourists. Our aim is to boost your
                business by increasing the number of visitors to your website.{" "}
              </p>{" "}
              <p>
                {" "}
                Utilizing our <strong>SEO Welland</strong> expertise, we ensure
                your website appears on Google when people search for services
                in St. Catharines and nearby areas. This increased visibility
                means more people will find your business, leading to higher
                sales. We are dedicated to seeing our clients thrive, and we put
                in the effort to ensure their success!{" "}
              </p>{" "}
              <p>
                {" "}
                Thanks to our <Link href="/blog">
                  extensive knowledge
                </Link>, <Link href="/work">high-quality work</Link>, and
                exceptional customer service, we've established ourselves as a
                top SEO agency trusted by many businesses. Let us help you
                achieve your digital marketing goals.{" "}
              </p>
              <Image
                className="img-fluid"
                src={best}
                alt="search engine optimization company welland"
              />
            </div>
            <div className="col-lg-5">
              <div className="card">
                <img
                  alt="ggs welland SEO landscaping testimonial"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93404.87627636254!2d-79.31218963146154!3d42.980329897140386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d349cb1aaf497d%3A0xb6a05855226db6e6!2sWelland%2C%20ON!5e0!3m2!1sen!2sca!4v1735323588732!5m2!1sen!2sca"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <section className="home-faq">
          <Container>
            <Row className="text-center pd-btm-40">
              <Col lg="12">
                <h2>Frequently Asked Local SEO Welland Questions</h2>
              </Col>
            </Row>

            <Row>
              <Col lg="12">
                <h3>
                  {" "}
                  What is search engine optimization, and why is it important
                  for my website?{" "}
                </h3>{" "}
                <p>
                  {" "}
                  Local <strong>SEO Welland</strong> services improve your
                  website so it shows up higher in local search results. This
                  helps more people find your site.{" "}
                </p>{" "}
                <h3>
                  {" "}
                  What are the main factors that influence Local search engine
                  optimization rankings?{" "}
                </h3>{" "}
                <p>
                  {" "}
                  Key factors include using the right keywords, having a fast
                  website, and getting other websites to link to yours.{" "}
                </p>{" "}
                <h3>
                  How much does Local search engine optimization cost?
                </h3>{" "}
                <p>
                  {" "}
                  The cost of <strong>SEO Welland</strong> services depends on
                  how long the campaign is and the amount of work needed.{" "}
                  <Link href="/get-a-quote">Contact us today</Link> for a free
                  consultation and quote.{" "}
                </p>{" "}
                <h3>
                  {" "}
                  How do you perform keyword research, and how do you determine
                  which keywords to target?{" "}
                </h3>{" "}
                <p>
                  {" "}
                  We find words people use to search for your type of business
                  and choose the ones that can bring you more visitors.{" "}
                </p>{" "}
                <h3>
                  {" "}
                  What is on-page local search engine optimization, and how does
                  it differ from off-page local search engine optimization?{" "}
                </h3>{" "}
                <p>
                  {" "}
                  On-page local SEO improves things on your website, like text
                  and images. Off-page local SEO involves getting other websites
                  to link to yours.{" "}
                </p>{" "}
                <h3>
                  {" "}
                  How do you handle technical search engine optimization issues
                  on a website?{" "}
                </h3>{" "}
                <p>
                  {" "}
                  We fix problems like slow loading times, broken links, and
                  mobile-friendliness to improve your site’s performance.{" "}
                </p>{" "}
                <h3>
                  Can you guarantee my website will rank #1 on Google?
                </h3>{" "}
                <p>
                  {" "}
                  No one can promise a #1 spot, but we can improve your chances
                  with good <strong>SEO Welland</strong> practices, as we have
                  for all our clients.{" "}
                </p>{" "}
                <h3>
                  {" "}
                  How do backlinks impact my website’s local search engine
                  optimization?{" "}
                </h3>{" "}
                <p>
                  {" "}
                  Backlinks are links from other websites to yours. They show
                  Google your site is trusted.{" "}
                </p>{" "}
                <h3>
                  {" "}
                  What tools or software do you use for analysis and reporting?{" "}
                </h3>{" "}
                <p>
                  {" "}
                  We use tools like Google Analytics and other software to check
                  your website’s performance and give you reports.{" "}
                </p>{" "}
                <h3>
                  {" "}
                  What are the potential risks of search engine optimization,
                  and how do you mitigate them?{" "}
                </h3>{" "}
                <p>
                  {" "}
                  Risks include using bad practices that can get your site
                  penalized by Google. Our <strong>SEO Welland</strong> experts
                  use safe, proven methods to avoid this.{" "}
                </p>{" "}
                <h3>
                  {" "}
                  How do you approach local search engine optimization,
                  especially for service-based businesses?{" "}
                </h3>{" "}
                <p>
                  {" "}
                  We focus on local keywords, get your business listed on Google
                  Maps, and gather positive reviews to improve local rankings.{" "}
                </p>{" "}
                <h3>What is your process for auditing a website?</h3>{" "}
                <p>
                  {" "}
                  We check your site’s health, look at keywords, see how it
                  performs, and find areas to improve.{" "}
                </p>{" "}
                <h3>How do you create Google-friendly content?</h3>{" "}
                <p>
                  {" "}
                  Content is key. We write helpful, interesting articles with
                  the right keywords to attract visitors.{" "}
                </p>{" "}
                <h3>
                  {" "}
                  How do you stay updated with the latest changes in search
                  engine algorithms?{" "}
                </h3>{" "}
                <p>
                  {" "}
                  We follow SEO news, read updates from search engines, and test
                  new strategies to keep up.{" "}
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
            <Row>
              <Col lg="12">
                <h3>About Welland, Ontario</h3>
                <p>
                  Welland, Ontario, is a small city in the Niagara Region. It's
                  known for the Welland Canal, which is a big part of the city's
                  history and helps ships travel between Lake Ontario and Lake
                  Erie. Welland has a friendly community and a mix of urban and
                  natural environments, making it a nice place for families and
                  businesses.
                </p>

                <h3>Welland's Local Economy</h3>
                <p>
                  The economy in Welland is diverse, with industries like
                  manufacturing, retail, and services. The Welland Canal and
                  local businesses are important to the city's growth. There are
                  many small businesses and shops that contribute to the local
                  economy. The city also supports business development, making
                  Welland a good place to start or grow a business.
                </p>

                <h3>Attractions and Activities in Welland</h3>
                <p>
                  There are lots of fun things to do in Welland. You can visit
                  the Welland Canal and watch the ships pass through. The city
                  has parks and trails, like Merritt Island Park, where you can
                  walk, bike, or have a picnic. Welland also has festivals and
                  events throughout the year that celebrate the community and
                  its history.
                </p>

                <h3>Education and Community Services in Welland</h3>
                <p>
                  Welland has good schools, including Welland Centennial
                  Secondary School and several elementary schools. The city also
                  offers community services like libraries, community centers,
                  and healthcare facilities. These services help ensure
                  residents have access to important resources and recreational
                  activities.
                </p>

                <h3>Living in Welland</h3>
                <p>
                  Living in Welland offers a mix of small-town charm and city
                  conveniences. It's a safe place with friendly people and good
                  schools, making it great for families. The city is also close
                  to major highways, so you can easily travel to nearby cities
                  like St. Catharines and Niagara Falls. The blend of urban and
                  natural settings makes Welland a wonderful place to live.
                </p>

                <h3>Local SEO Services for Welland Businesses</h3>
                <p>
                  If you own a business in Welland, having a strong online
                  presence is important to attract local customers. Our local
                  SEO services can help your business rank higher in search
                  results, bringing more visitors to your website and increasing
                  your customer base. We can optimize your Google My Business
                  listing and create content specific to Welland, helping you
                  get better results.
                </p>
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
