import "../styles/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import "../../src/pages/general.scss";
import "../../src/pages/variables.scss";
import "../../src/pages/breakpoints.scss";
import "../../src/pages/about.scss";
import "../../components/Button/button.scss";
import "../../components/CTA/cta.scss";
import "../../components/Home/ClientLogos/client-logos.scss";
import "../../components/Home/Clients/clients.scss";
import "../../components/Home/FAQ/faq.scss";
import "../../components/Home/Hero/hero.scss";
import "../../components/Home/Results/results.scss";
import "../../components/Home/WhatWeDo/what-we-do.scss";
import "../../components/Home/Intro/intro.scss";
import "../../components/innerContent/inner-content.scss";
import "../../components/innerHero/inner-hero.scss";
import "../../components/testimonialCard/testimonial-card.scss";
import "../../src/pages/home-services.scss";
import "../../src/pages/services.scss";
import "../../src/pages/grimsby.scss";
import "../../src/pages/web-design.scss";
import "../../components/Card/card.scss";
import "../pages/work.scss";
import "../pages/seo.scss";
import "../pages/work-specific.scss";
import "../pages/areas-served.scss";
import "../pages/digital-marketing.scss";
import "../../components/seoFAQ/seo-faq.scss";
import "../../components/ecommFAQ/ecomm-faq.scss";
import "../../components/Home/Clients/slider/slider.scss";
import "../../components/Home/FAQ/faq.scss";
import "../../components/Home/Featured/featured.scss";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../components/Home/Process/process.scss";
import "../../components/websiteFAQ/website-faq.scss";
import "../../components/GoogleReviews/google-reviews.scss";
import "../../components/verticalSeo/vertical-seo.scss";
import "../styles/rescue.css";
import "../styles/legacy-saas.css";
import Script from "next/script";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} font-body`}>
      <Script
        strategy="afterInteractive"
        src="https://googletagmanager.com/gtag/js?id=G-9R67WGJ9RB"
        async
      />

      <Script id="google-analytics" strategy="afterInteractive" async>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-9R67WGJ9RB');
    `}
      </Script>
      <Script id="microsoft-clarity-analytics">
        {`
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "o3vik3tnlf");
  `}
      </Script>

      <Component {...pageProps} />
    </div>
  );
}
