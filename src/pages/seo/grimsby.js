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
import hero from "../../img/seo-grimsby.webp";
import best from "../../img/awards.png";
import { Col, Container, Row } from "reactstrap";

const SEO = ({ latestPosts }) => {
  return (
    <>
      <Head>
        <title>
          SEO Marketing Grimsby, ON | Best Search Engine Optimization
        </title>
        <meta
          name="description"
          content="Boost your online presence with top-notch SEO marketing in Grimsby, ON. Get the best search engine optimization services tailored to your business needs."
        />
        <link rel="canonical" href="https://infused.agency/seo/grimsby" />
      </Head>
      <Nav />
      <InnerHeroCities
        title="SEO Services in Grimsby"
        subTitle="Top Search Engine Optimization Agency in Grimsby, ON"
        image={hero}
        alt="seo grimsby, ontario"
      />
      <section className="home-top-web pd-btm-0">
        <div className="container pd-btm-120">
          <div className="row">
            <div className="col-lg-8">
              <h2>Local SEO Company Serving Grimsby, ON</h2>
              <p>
                At Infused Agency, we provide excellent{" "}
                <strong>SEO Grimsby</strong> services to help local businesses
                shine online. Our expert search engine optimization services
                boost your website's visibility when people search for your
                products or services. From planning to execution, we make sure
                your business gets the attention it deserves.{" "}
              </p>{" "}
              <p>
                {" "}
                We collaborate with you to understand your local business goals.
                Using this insight, we create a tailored local SEO strategy to
                help you rank higher in search results and draw in more
                customers. Your input is essential, and together, we ensure your
                business gains the online visibility it needs!{" "}
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
                    <h3>What They Got After Hiring Us:</h3>
                    <ul>
                      <li>Boosted Local Google Search Visibility by 300%</li>
                      <li>
                        Ranked on Page 1 of Google Maps for Multiple Keywords
                      </li>
                      <li>Page 1 Google Rankings for Various Keywords</li>
                      <li>Improved User Experience</li>
                      <li>More Engagement and Conversions</li>
                      <li>Increased Brand Recognition</li>
                      <li>Streamlined Lead Collection</li>
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
                    alt="seo grimsby agency"
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
              <h2>Why Choose Infused for Your Grimsby SEO Services?</h2>
              <p>
                Our <strong>SEO Agency in Grimsby</strong> has been boosting
                businesses' online visibility with expert search engine
                optimization for over a decade. Our skilled{" "}
                <strong>SEO Grimsby</strong> consultants know exactly what local
                businesses need to improve their search rankings. We craft
                custom local SEO strategies that not only look great but also
                drive real customer growth.
              </p>
              <p>
                Choosing us means working with a team that truly understands the
                Niagara region. We know how to make your business stand out to
                both locals and tourists. Our goal is to increase the number of
                visitors to your website and help your business grow.
              </p>
              <p>
                With our <strong>SEO Grimsby</strong> expertise, we make sure
                your website shows up on Google when people search for services
                in St. Catharines and the surrounding areas. This greater
                visibility brings more people to your site, leading to more
                sales. We're committed to helping our clients succeed, and we
                work hard to make it happen!
              </p>
              <p>
                Thanks to our <Link href="/blog">extensive knowledge</Link>,{" "}
                <Link href="/work">top-quality work</Link>, and outstanding
                customer service, we’ve earned the trust of many businesses as a
                leading SEO agency. Let us help you reach your digital marketing
                goals.
              </p>
              <Image
                className="img-fluid"
                src={best}
                alt="search engine optimization company Grimsby"
              />
            </div>
            <div className="col-lg-5">
              <div className="card">
                <img
                  alt="ggs Grimsby SEO landscaping testimonial"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93092.63290802295!2d-79.66322367018574!3d43.18547293296224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882caf79ccfea3dd%3A0x9566109eba2a4656!2sGrimsby%2C%20ON!5e0!3m2!1sen!2sca!4v1735151573046!5m2!1sen!2sca"
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
                <h2>Frequently Asked Local SEO Grimsby Questions</h2>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <h3>
                  What is search engine optimization, and why is it important
                  for my website?
                </h3>
                <p>
                  Local <strong>SEO Grimsby</strong> helps your website show up
                  higher in search results, making it easier for people to find
                  your business online.
                </p>

                <h3>
                  What are the main factors that influence Local search engine
                  optimization rankings?
                </h3>
                <p>
                  Things like using the right words (keywords), having a fast
                  website, and getting other websites to link to yours can help
                  you rank better.
                </p>

                <h3>How much does Local search engine optimization cost?</h3>
                <p>
                  The cost of <strong>SEO Grimsby</strong> depends on how much
                  work is needed. <Link href="/get-a-quote">Contact us</Link>{" "}
                  for a free quote.
                </p>

                <h3>
                  How do you perform keyword research, and how do you choose the
                  best ones?
                </h3>
                <p>
                  We find out what words people are using to search for
                  businesses like yours and pick the ones that will help bring
                  more visitors to your site.
                </p>

                <h3>
                  What is on-page local search engine optimization, and how does
                  it differ from off-page local search engine optimization?
                </h3>
                <p>
                  On-page SEO makes your website better by improving things like
                  text and images. Off-page SEO helps by getting other websites
                  to link back to yours.
                </p>

                <h3>How do you fix technical SEO problems on a website?</h3>
                <p>
                  We take care of issues like slow page loading, broken links,
                  and making sure your website works well on phones and tablets.
                </p>

                <h3>Can you guarantee my website will rank #1 on Google?</h3>
                <p>
                  We can’t promise the #1 spot, but we can improve your chances
                  with good <strong>SEO Grimsby</strong> strategies, like we’ve
                  done for many other businesses.
                </p>

                <h3>How do backlinks affect my website’s SEO?</h3>
                <p>
                  Backlinks are links from other websites to yours. Google sees
                  these as votes of trust, which can help your website rank
                  higher.
                </p>

                <h3>
                  What tools or software do you use to track SEO progress?
                </h3>
                <p>
                  We use tools like Google Analytics to check how well your
                  website is doing and to give you reports on how it’s
                  performing.
                </p>

                <h3>What are the risks of SEO, and how do you prevent them?</h3>
                <p>
                  Bad SEO practices can get your website in trouble with Google.
                  We only use safe methods that help you avoid penalties.
                </p>

                <h3>How do you do local SEO for service businesses?</h3>
                <p>
                  We focus on local keywords, get your business listed on Google
                  Maps, and work on getting positive reviews to help improve
                  your rankings.
                </p>

                <h3>What do you check during a website audit?</h3>
                <p>
                  We check how healthy your website is, see if you’re using the
                  right keywords, check your website’s performance, and find
                  ways to improve it.
                </p>

                <h3>How do you create content that Google likes?</h3>
                <p>
                  We write helpful and interesting content with the right
                  keywords to attract people who are looking for your services.
                </p>

                <h3>
                  How do you stay updated with changes in search engine rules?
                </h3>
                <p>
                  We keep up with the latest news in SEO, read updates from
                  Google, and try new techniques to stay ahead of the game.
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
