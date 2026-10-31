// Content for the US therapist SEO landing pages.
//
// These pages reuse the shared TherapistSeoCityPage template so the section
// order, headings, cards, pricing block, testimonials, FAQs, related links and
// closing CTA stay identical to the Los Angeles reference page
// (src/pages/seo/for-therapists-los-angeles.astro). Only the city reference in
// each heading changes. Every paragraph below is written for its own market.
//
// `province` and `provinceAbbr` are the template's region fields; on these US
// pages they hold the state name and abbreviation.

export const THERAPIST_SEO_US_CITY_PAGES = {
  chicago: {
    city: "Chicago",
    province: "Illinois",
    provinceAbbr: "IL",
    pathname: "/seo-for-therapists-chicago",
    title: "SEO for Therapists Chicago | AI Search Optimization",
    description:
      "SEO for Chicago therapists, with AI search optimization, AEO and GEO. Help your practice get found in Google and AI answers. Request a free quote.",
    image: "/img/seo-for-therapists-chicago-illinois.webp",
    imageAlt: "Downtown Chicago skyline at night",
    heroDescription:
      "Infused Agency helps Chicago therapists and group practices get found in Google and in AI search tools by people looking for a specialty, a neighborhood, or an Illinois-licensed clinician who offers online sessions. We build the pages, profile details and technical foundation that make a practice easy to understand and contact.",
    marketEyebrow: "The Chicago market",
    marketHeading:
      "How AI search is changing the way Chicago clients find a therapist",
    marketParagraphs: [
      "A Chicago therapy search usually carries more than a city name. Someone may be looking for a trauma therapist in Logan Square, couples counseling in Hyde Park, a Spanish-speaking clinician in Pilsen, or an LCSW who sees clients online anywhere in Illinois. Insurance, evening availability and whether the office sits near a train line often matter as much as the therapeutic approach. A page that stops at \u201ctherapy in Chicago\u201d leaves most of that search unanswered.",
      "We build around the way those clients search: a clear homepage, separate pages for the concerns a practice actually treats, and an office or service-area page that explains where sessions happen and whether telehealth reaches the rest of Illinois. Internal links connect the specialty, the clinician and the intake details so someone can move from recognition to booking.",
      "The technical work follows the same logic. Crawlable navigation, titles and headings that name Chicago or a neighborhood only where it is true, mobile pages that load quickly and metadata that matches the visible content all help. This page supports the practice website we improve; it does not replace it.",
    ],
    servicesHeading:
      "AI search optimization services for a Chicago therapy practice",
    servicesDescription:
      "Six connected services, scoped to the practice rather than sold as a set of duplicate neighborhood pages.",
    services: [
      {
        title: "Chicago search intent and on-page SEO",
        body: "We study how people across Chicago describe what they need, from trauma therapy near the lakefront to couples counseling in Lakeview or an online clinician licensed in Illinois. Titles, headings and page copy then speak to those concerns and places without repeating keywords. A practice serving families in Hyde Park and one working with young professionals in the Loop should not be forced into the same page.",
      },
      {
        title: "Local SEO for the practice",
        body: "We refine the Google Business Profile, choose categories and service areas that reflect the practice, and create an office or service-area page that matches how sessions actually work. Consistent name, address and phone details, along with relevant Illinois professional directories, help Chicago clients confirm they have found a legitimate local practice.",
      },
      {
        title: "AI search optimization (AI SEO, AEO and GEO)",
        body: "AI assistants and AI Overviews need facts they can extract: the clients you support, your Illinois license, the specialties you offer and how someone requests an appointment. We organize the site and its structured data so those details are explicit and consistent, then review how assistants describe the practice. No agency can guarantee an AI citation. Answer engine optimization (AEO) and generative engine optimization (GEO) are the labels used for this work.",
      },
      {
        title: "Content that answers client questions",
        body: "Specialty pages and short articles can answer what people ask before they call: what a first session looks like, how insurance panels and superbills work in Illinois, whether online sessions are available, and how to choose a therapist for a particular concern. The writing stays practical and avoids clinical promises. Direct, well-organized answers serve readers and the search and AI systems that summarize them.",
      },
      {
        title: "Technical fixes",
        body: "We review indexing, page speed, mobile layout, broken links, duplicate titles and crawl paths. Practice sites often carry pages for services that ended years ago, leftover plugins and contact forms that no longer submit. Those faults sit between a good page and the person trying to reach it, so they are worth fixing early.",
      },
      {
        title: "Credible mentions and monthly upkeep",
        body: "Trust grows through believable references: professional directories, Illinois association profiles, community and business listings, local publications, training details and genuine reviews. Each month we refresh availability, sharpen content, watch the searches that produce inquiries and correct anything that has drifted. Visibility is maintained rather than switched on once.",
      },
    ],
    aiHeading:
      "What an AI search optimization agency does for Chicago therapists",
    aiParagraphs: [
      "When someone asks ChatGPT, Google\u2019s AI Overviews or another assistant to recommend a trauma therapist in Chicago, or a couples counselor near Lincoln Park or Oak Park, the answer is assembled from sites the tool can read and trust. Those systems favor clear, consistent pages: who the clinician helps, where they are licensed in Illinois, what they specialize in and how to get in touch.",
      "AI search optimization, often shortened to AI SEO, is the work of getting a practice understood and cited by those tools. Answer engine optimization (AEO) is the related craft of writing pages that give direct, extractable answers. Generative engine optimization (GEO) is about keeping the practice described accurately across the sources AI systems draw from. Our <a href=\"/ai-search\">AI search optimization services</a> explain the wider approach.",
      "The labels overlap and each describes part of the same SEO work rather than a separate magic service. No one can guarantee a citation or a placement in AI answers. As an AI search optimization agency, what we can do is make the facts about your Chicago practice easy to find, quote and repeat.",
    ],
    pricingHeading:
      "AI SEO optimization pricing for Chicago therapy practices",
    whoHeading:
      "An AI SEO agency built for Chicago therapists, however you practice",
    whoParagraphs: [
      "Infused Agency works with licensed clinical social workers, licensed clinical professional counselors, licensed marriage and family therapists, psychologists and counselors across Illinois. Some are building a solo practice; others are expanding a group, adding associates or seeing clients online throughout the state.",
      "We also work with online-only practices that need Illinois licensure and telehealth explained plainly, and with groups that need a coherent structure for several clinicians, specialties and locations. The scope changes with the practice; the standard does not: accurate information, a clear next step and no unsupported claims.",
    ],
    fitItems: [
      "Solo and building a credible first impression",
      "Online-only and licensed in Illinois",
      "Growing a group with several clinicians or specialties",
      "Serving Chicago, Evanston, Oak Park, Naperville and the surrounding area",
      "Looking for inquiries without publishing clinical outcomes",
    ],
    whyHeading:
      "Why Chicago therapists choose Infused for AI search optimization",
    whyParagraph:
      "An SEO partner carries your professional reputation alongside its own. Therapy marketing in Illinois has to meet advertising standards and preserve the confidence a client places in a clinician. We keep claims accurate and reviewable, avoid guarantees and never promise clinical outcomes. The aim is to make your specialties easier to find and your practice easier to understand.",
    whyCards: [
      {
        title: "Claims kept accurate and verifiable",
        body: "We start from verifiable facts about your Chicago practice: the clients you support, your Illinois license, the specialties you offer and how someone requests an appointment. Nothing is published as a ranking claim, credential or result we cannot support.",
      },
      {
        title: "No guarantees or clinical promises",
        body: "No agency controls Google\u2019s rankings, and SEO should not be sold as a guaranteed outcome. We also avoid language that implies a clinical result or recovery. The focus stays on visibility, clarity and inquiries.",
      },
      {
        title: "Pages built around specialties and real searches",
        body: "We build around the concerns Chicago clients search for \u2014 trauma, anxiety, couples work, teens, EMDR, substance use or another focus \u2014 and tie them to the neighborhoods and session formats your practice actually offers. Each page has a clear job without inventing demand.",
      },
      {
        title: "Ethics-first marketing for a regulated practice",
        body: "Illinois licensing rules and professional codes set the boundaries. We keep copy clear and non-misleading, flag anything that may need a closer review, and leave compliance decisions with the practice and its own advisers.",
      },
    ],
    testimonialHeading:
      "What Chicago therapists say about working with an AI SEO agency",
    faqHeading:
      "AI search optimization and GEO questions from Chicago therapists",
    faqs: [
      {
        q: "Can a solo practice rank for \u201ctherapist Chicago\u201d?",
        a: "A solo practice can compete for Chicago searches when the site is clear about the work it does and the parts of the city it serves. Google rewards focused specialty pages, a complete Google Business Profile, genuine reviews and a fast mobile site. We aim at realistic searches rather than promising a position.",
      },
      {
        q: "Is SEO useful if all sessions are online?",
        a: "Yes. People still search for an Illinois-licensed therapist, a particular specialty or a clinician who offers telehealth from Chicago. The site should say plainly that sessions are online, which parts of Illinois you serve and how the first appointment works.",
      },
      {
        q: "Should the site mention Evanston, Oak Park or Naperville?",
        a: "Name the places the practice genuinely serves on the office or service-area page. A clear service-area section is more useful than a thin duplicate page for every suburb or neighborhood. If a nearby community produces real demand, it may deserve its own page later, but not one that repeats the same copy.",
      },
      {
        q: "When will I see results?",
        a: "There is no promised timeline. Google sets the pace, and rankings depend on the starting site, the competition, the review profile and how consistently the work is maintained. The first visible progress is the work itself \u2014 fixes, new pages and rewritten titles \u2014 followed by reports on which searches the pages appear for.",
      },
      {
        q: "How much does it cost?",
        a: "SEO is delivered as a 3-month implementation project with three packages: Starter ($329.99/month), Professional ($379.99/month) and Premium ($429.99/month), spread across a 12-month payment plan. The monthly amount is an installment toward the project, not an ongoing retainer. A group practice with several clinicians may need a larger scope, which we confirm in a written quote after a free review.",
      },
      {
        q: "Do you work with group practices?",
        a: "Yes. Group practices usually need a clearer structure: who each clinician is, which specialties and populations they serve, where sessions happen and how inquiries are routed. We can plan the site around the group as a whole without losing the individual clinicians a client may be looking for.",
      },
      {
        q: "Does your marketing respect Illinois licensing board and professional ethics rules?",
        a: "We avoid guarantees, clinical claims and misleading wording. Marketing should describe the practice accurately, not promise a ranking or an outcome. The practice remains responsible for its own compliance with Illinois regulators and professional obligations, and we flag anything that may need a closer review.",
      },
      {
        q: "What is AI search optimization (AI SEO, AEO, GEO) for therapists?",
        a: "It means making a practice easy for AI tools to understand and cite: accurate details about specialties, licensure, location and how to book, written clearly and kept consistent. AEO (answer engine optimization) and generative engine optimization (GEO) are common labels for parts of that work. No one can promise a citation or a position in an AI answer.",
      },
    ],
    ctaHeading:
      "Grow your Chicago therapy practice with AI search optimization",
    ctaDescription:
      "Send us your website and the parts of Chicago your practice serves. We will review your local visibility and the searches worth pursuing, then follow up with a clear quote.",
    areaServed: [
      {
        "@type": "City",
        name: "Chicago",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Illinois",
        },
      },
      { "@type": "Place", name: "The Loop" },
      { "@type": "Place", name: "Lincoln Park" },
      { "@type": "Place", name: "Lakeview" },
      { "@type": "Place", name: "Logan Square" },
      { "@type": "Place", name: "Hyde Park" },
      { "@type": "Place", name: "Pilsen" },
      { "@type": "City", name: "Evanston" },
      { "@type": "City", name: "Oak Park" },
      { "@type": "Country", name: "United States" },
    ],
  },

  dallas: {
    city: "Dallas",
    province: "Texas",
    provinceAbbr: "TX",
    pathname: "/seo-for-therapists-dallas",
    title: "SEO for Therapists Dallas | AI Search Optimization",
    description:
      "SEO and AI search optimization for Dallas therapists. Improve your visibility in Google and AI answers across Dallas\u2013Fort Worth. Get a free quote.",
    image: "/img/seo-for-therapists-dallas-texas.webp",
    imageAlt: "Downtown Dallas skyline at night",
    heroDescription:
      "Infused Agency helps Dallas therapists and counseling practices appear in Google and in AI search tools when people search by concern, by suburb or by Texas license. We build the pages, profile details and technical foundation that turn a practice\u2019s online presence into a first appointment.",
    marketEyebrow: "The Dallas market",
    marketHeading:
      "How AI search is changing the way Dallas clients find a therapist",
    marketParagraphs: [
      "Therapy searches across Dallas rarely stay inside the city limits. Someone might look for a trauma therapist in Uptown, couples counseling in Plano, teen counseling in Richardson, or a Texas-licensed clinician who offers telehealth anywhere in the Metroplex. They may narrow by insurance, evening hours, a faith-based approach or experience with a particular population. A homepage that says only \u201ctherapy in Dallas\u201d gives the reader and the search engine too little to work with.",
      "We build pages for those routes: a clear homepage, focused specialty pages, and an office or service-area page covering the communities the practice actually serves, with plain details about in-person and online sessions across Texas. Links between specialty, location and intake make the next step easy to find.",
      "We also make the site easy to crawl and read: sensible navigation, descriptive titles and headings, quick mobile layouts and metadata that reflects each page. Dallas and the surrounding Metroplex are named where they are accurate, not repeated as keywords.",
    ],
    servicesHeading:
      "AI search optimization services for a Dallas therapy practice",
    servicesDescription:
      "Six connected pieces, planned around the practice rather than sold as separate suburb pages.",
    services: [
      {
        title: "Dallas search intent and on-page SEO",
        body: "We map how people in Dallas and the wider Metroplex describe what they need, then shape titles, headings and page copy around those concerns. A practice near SMU and a group in Frisco may serve different clients, even when both offer anxiety therapy. The writing names the specialty and the area without stuffing.",
      },
      {
        title: "Local SEO for the practice",
        body: "We tighten the Google Business Profile, choose honest categories and service areas, and build an office or service-area page that reflects how the practice operates. Consistent contact details and relevant Texas professional directories help Dallas clients verify they have found a genuine local practice.",
      },
      {
        title: "AI search optimization (AI SEO, AEO and GEO)",
        body: "AI tools need extractable facts: who you help, where you are licensed in Texas, which specialties you offer and how a client books. We make those details explicit in the site and structured data, then check how assistants describe the practice. Citations cannot be guaranteed. AEO and GEO are the common labels for this part of the work.",
      },
      {
        title: "Content that answers client questions",
        body: "Useful pages answer the questions that come before a first call: what intake involves, how insurance and superbills work in Texas, whether online sessions are available across the state, and how to choose a therapist for a specific issue. We keep the language practical and avoid promising clinical outcomes while giving search engines and AI assistants clear answers to quote.",
      },
      {
        title: "Technical fixes",
        body: "We look at how search engines reach and render the site: indexing, speed, mobile behavior, broken links, repeated titles and crawl paths. Practice sites often gather outdated pages, leftover plugins and forms that silently fail. Clearing those problems supports every new page and shortens the distance between a search result and an inquiry.",
      },
      {
        title: "Credible mentions and monthly upkeep",
        body: "Credibility depends on real references: professional directories, Texas association profiles, community listings, local media, training details and honest reviews. We review availability, improve content, monitor the searches that lead to inquiries and correct drift each month. Local visibility is a practice, not a one-time switch.",
      },
    ],
    aiHeading:
      "What an AI search optimization agency does for Dallas therapists",
    aiParagraphs: [
      "Ask an AI assistant for a trauma therapist in Dallas, a couples counselor near Oak Lawn or a bilingual clinician in Arlington, and the reply is assembled from sources the tool can read and trust. Clear, consistent pages give it the material it needs: who the clinician helps, where they are licensed in Texas, what they specialize in and how to arrange a first session.",
      "AI search optimization, often shortened to AI SEO, is the work of making a practice understood and cited by those systems. AEO, answer engine optimization, focuses on direct answers that can be lifted from a page. GEO, generative engine optimization, is about accurate, consistent descriptions across the sources AI tools consult. Our <a href=\"/ai-search\">AI search optimization services</a> explain the wider approach.",
      "These labels describe overlapping parts of the same SEO discipline, not a separate product with a different guarantee. Nobody can promise a citation or a position in an AI answer. What we can do is make the facts about your Dallas practice easy to find, quote and repeat.",
    ],
    pricingHeading:
      "AI SEO optimization pricing for Dallas therapy practices",
    whoHeading:
      "An AI SEO agency built for Dallas therapists, however you practice",
    whoParagraphs: [
      "Infused Agency works with licensed professional counselors, licensed clinical social workers, licensed marriage and family therapists, psychologists and counselors throughout Texas. Some are establishing a solo practice; others are growing a group, bringing on associates or seeing clients online across the state.",
      "Online-only practices need Texas licensure and telehealth explained clearly. Groups need a structure that makes sense of several clinicians, specialties and locations. The scope follows the practice; the standard stays the same: accurate information, an obvious next step and no unsupported claims.",
    ],
    fitItems: [
      "Solo and building a credible first impression",
      "Online-only and licensed in Texas",
      "Growing a group with several clinicians or specialties",
      "Serving Dallas, Plano, Frisco, Arlington and the Dallas\u2013Fort Worth area",
      "Looking for inquiries without publishing clinical outcomes",
    ],
    whyHeading:
      "Why Dallas therapists choose Infused for AI search optimization",
    whyParagraph:
      "Your professional reputation travels with every marketing decision, so the partner you choose matters. Counseling advertising in Texas has to be honest, and the tone has to respect the trust clients place in a clinician. We keep claims accurate and reviewable, avoid guarantees and never promise clinical outcomes. The work is to make your specialties easier to find and your practice easier to understand.",
    whyCards: [
      {
        title: "Claims kept accurate and verifiable",
        body: "We work from verified facts about your Dallas practice: the clients you support, your Texas license, the specialties you offer and how to start. Nothing is published as a ranking claim, credential or result we cannot support.",
      },
      {
        title: "No guarantees or clinical promises",
        body: "Google\u2019s rankings are outside any agency\u2019s control, and SEO should not be sold as a guaranteed outcome. We also avoid wording that suggests a clinical result or recovery. The focus stays on visibility, clarity and inquiries.",
      },
      {
        title: "Pages built around specialties and real searches",
        body: "We build pages around the concerns people search for in Dallas \u2014 trauma, anxiety, couples work, teens, EMDR or another specialty \u2014 and connect them to the communities and session formats your practice really serves. Each page has a clear job without manufacturing demand.",
      },
      {
        title: "Ethics-first marketing for a regulated practice",
        body: "Texas licensing boards and professional codes set the boundaries. We keep marketing language clear and non-misleading, flag anything that may need closer review, and leave compliance decisions with the practice and its advisers.",
      },
    ],
    testimonialHeading:
      "What Dallas therapists say about working with an AI SEO agency",
    faqHeading:
      "AI search optimization and GEO questions from Dallas therapists",
    faqs: [
      {
        q: "Can a solo practice rank for \u201ctherapist Dallas\u201d?",
        a: "A solo practice can compete for Dallas searches when the site clearly explains its work and the communities it serves. Google rewards focused specialty pages, a complete Google Business Profile, genuine reviews and a fast mobile site. We target realistic searches rather than promising a position.",
      },
      {
        q: "Is SEO useful if all sessions are online?",
        a: "Yes. People still search for a Texas-licensed therapist, a specific specialty or a clinician who offers telehealth from Dallas. The site should state that sessions are online, which parts of Texas you serve and how the first appointment works.",
      },
      {
        q: "Should the site mention Plano, Frisco or Arlington?",
        a: "Name the places the practice genuinely serves on the office or service-area page. A clear service-area section is more useful than a thin duplicate page for every suburb in the Metroplex. If a community produces real demand, it may deserve its own page later, but not one that repeats the same copy.",
      },
      {
        q: "When will I see results?",
        a: "No specific timeline is promised. Google sets the pace, and rankings depend on the starting site, the competition, the review profile and how consistently the work is maintained. The first visible progress is the work itself \u2014 fixes, new pages and rewritten titles \u2014 followed by reports on which searches the pages appear for.",
      },
      {
        q: "How much does it cost?",
        a: "The engagement is a 3-month implementation project with three packages \u2014 Starter ($329.99/month), Professional ($379.99/month) and Premium ($429.99/month) \u2014 paid over 12 monthly installments. The monthly amount is a payment toward the project, not an ongoing retainer. A group practice with several clinicians may need a larger scope, confirmed in writing after a free review.",
      },
      {
        q: "Do you work with group practices?",
        a: "Yes. A group practice often needs a clearer structure: who each clinician is, which specialties and populations they serve, where sessions happen and how inquiries are routed. We can plan the site around the group as a whole without losing the individual clinicians a client may be looking for.",
      },
      {
        q: "Does your marketing respect Texas licensing boards and professional ethics rules?",
        a: "We avoid guarantees, clinical claims and misleading wording. Marketing should describe the practice accurately, not promise a ranking or an outcome. The practice remains responsible for its own compliance with Texas regulators and professional obligations, and we flag anything that may need a closer review.",
      },
      {
        q: "What is AI search optimization (AI SEO, AEO, GEO) for therapists?",
        a: "It is the work of making a practice understandable to AI tools: accurate, consistent details about specialties, Texas licensure, location and booking, written clearly on the site and across profiles. AEO (answer engine optimization) and GEO (generative engine optimization) describe parts of the same effort. Nobody can promise a citation or a position in an AI answer.",
      },
    ],
    ctaHeading:
      "Grow your Dallas therapy practice with AI search optimization",
    ctaDescription:
      "Share your website and the Dallas\u2013Fort Worth communities you serve. We will review your local visibility and the searches worth pursuing, then send a clear quote.",
    areaServed: [
      {
        "@type": "City",
        name: "Dallas",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Texas",
        },
      },
      { "@type": "Place", name: "Downtown Dallas" },
      { "@type": "Place", name: "Uptown" },
      { "@type": "Place", name: "Deep Ellum" },
      { "@type": "Place", name: "Bishop Arts District" },
      { "@type": "Place", name: "Oak Lawn" },
      { "@type": "Place", name: "Lake Highlands" },
      { "@type": "City", name: "Plano" },
      { "@type": "City", name: "Frisco" },
      { "@type": "City", name: "Arlington" },
      { "@type": "City", name: "Irving" },
      { "@type": "Country", name: "United States" },
    ],
  },

  houston: {
    city: "Houston",
    province: "Texas",
    provinceAbbr: "TX",
    pathname: "/seo-for-therapists-houston",
    title: "SEO for Therapists Houston | AI Search Optimization",
    description:
      "SEO for Houston therapists plus AI search optimization, AEO and GEO, so clients find your practice in Google and AI answers. Get a free quote.",
    image: "/img/seo-for-therapists-houston-texas.webp",
    imageAlt: "Downtown Houston skyline at night",
    heroDescription:
      "Infused Agency helps Houston therapists and group practices become easier to find in Google and in AI answers when people search by concern, neighborhood or Texas licensure. We shape the pages, profile details and technical groundwork that support real inquiries.",
    marketEyebrow: "The Houston market",
    marketHeading:
      "How AI search is changing the way Houston clients find a therapist",
    marketParagraphs: [
      "Houston therapy searches often pair a concern with a place: a trauma therapist in Montrose, couples counseling in The Woodlands, bilingual counseling in Spring Branch, or a Texas-licensed clinician who works online across the metro. Distance and traffic make proximity and telehealth practical considerations, and people also filter by insurance, cost and availability. A page that offers only \u201ctherapy in Houston\u201d answers very little of that.",
      "We organize the site around those searches: a plain-spoken homepage, specialty pages, and an office or service-area page covering the neighborhoods and suburbs the practice genuinely serves. Internal links connect the concern, the clinician and the practical steps to book, including whether sessions are in person or online.",
      "We then fix the foundations that let those pages perform: crawlable navigation, descriptive titles and headings, fast mobile layouts and metadata that reflects the content. Houston and its neighborhoods are named where they are accurate, not sprinkled through the copy.",
    ],
    servicesHeading:
      "AI search optimization services for a Houston therapy practice",
    servicesDescription:
      "Six connected services, scoped to the practice rather than sold as separate location pages.",
    services: [
      {
        title: "Houston search intent and on-page SEO",
        body: "We study the searches Houston clients use, from a psychologist in the Heights to counseling near the Museum District or an online therapist licensed in Texas. Then we write titles, headings and page copy that name the concern and the community without repeating keywords. A practice in Katy and one in Pearland may need different pages, even when they offer similar specialties.",
      },
      {
        title: "Local SEO for the practice",
        body: "We improve the Google Business Profile, choose categories and service areas honestly, and build an office or service-area page that reflects how the practice works. Consistent name, address and phone details, plus relevant Texas professional directories, help Houston clients confirm they have found a real local practice.",
      },
      {
        title: "AI search optimization (AI SEO, AEO and GEO)",
        body: "AI assistants need facts they can extract: who you help, where you are licensed in Texas, which specialties you offer and how someone books. We organize the site and structured data so those details are explicit and consistent, then review how assistants describe the practice. No agency can guarantee an AI citation. Answer engine optimization (AEO) and generative engine optimization (GEO) are the labels for this work.",
      },
      {
        title: "Content that answers client questions",
        body: "Specialty pages and short articles can answer the questions people ask before they call: what a first session involves, how insurance and superbills work in Texas, whether telehealth is available across the metro, and how to choose a therapist for a particular concern. The writing stays practical and avoids clinical promises. Clear question-and-answer content helps both Google and AI assistants.",
      },
      {
        title: "Technical fixes",
        body: "We audit indexing, speed, mobile layout, broken links, duplicate titles, structured data and crawl paths. Practice sites often accumulate retired pages, leftover plugins and forms that quietly stop working. Fixing these basics makes every page easier to find and the path to an appointment easier to follow.",
      },
      {
        title: "Credible mentions and monthly upkeep",
        body: "Believable references do the trust work: professional directories, Texas association profiles, community and business listings, local publications, training profiles and genuine reviews. We refresh availability, refine pages, track the queries that lead to inquiries and correct what has slipped each month. Visibility is maintained, not installed.",
      },
    ],
    aiHeading:
      "What an AI search optimization agency does for Houston therapists",
    aiParagraphs: [
      "When someone asks an AI assistant for a trauma therapist in Houston, a counselor near Montrose or an online psychologist licensed in Texas, the response is built from sources the tool can read and trust. Clear, consistent pages give it the facts: who the clinician helps, where they are licensed, what they specialize in and how to arrange a first appointment.",
      "AI search optimization, or AI SEO, is the work of getting a practice understood and cited by those tools. Answer engine optimization (AEO) is the related practice of writing pages that provide direct, extractable answers. Generative engine optimization (GEO) is about keeping the practice described accurately across the sources AI systems consult. Our <a href=\"/ai-search\">AI search optimization services</a> explain the wider program.",
      "The labels overlap, and each describes part of the same SEO work rather than a separate magic service. No agency can guarantee a citation or a placement in AI answers. As an AI search optimization agency, what we can do is make the facts about your Houston practice easy to find, quote and repeat.",
    ],
    pricingHeading:
      "AI SEO optimization pricing for Houston therapy practices",
    whoHeading:
      "An AI SEO agency built for Houston therapists, however you practice",
    whoParagraphs: [
      "Infused Agency works with Texas licensed professional counselors, clinical social workers, marriage and family therapists, psychologists and counselors, from solo clinicians to established groups. Some practices serve a single Houston neighborhood; others see clients online across the metro and beyond.",
      "Online-only practices need Texas licensure and telehealth set out clearly. Groups need a structure that makes sense of several clinicians, specialties and locations. The scope follows the practice; the standard stays the same: accurate information, an obvious next step and no unsupported claims.",
    ],
    fitItems: [
      "Solo and building a credible first impression",
      "Online-only and licensed in Texas",
      "Growing a group with several clinicians or specialties",
      "Serving Houston, Sugar Land, Katy, Pearland and the surrounding area",
      "Looking for inquiries without publishing clinical outcomes",
    ],
    whyHeading:
      "Why Houston therapists choose Infused for AI search optimization",
    whyParagraph:
      "Choosing who handles your search visibility means trusting them with your professional reputation. Therapy marketing in Texas has to meet advertising standards and preserve the confidence clients place in a clinician. We keep every claim accurate and reviewable, avoid guarantees and never promise clinical outcomes. The work is to make your specialties easier to find and your practice easier to understand.",
    whyCards: [
      {
        title: "Claims kept accurate and verifiable",
        body: "We begin with facts about your Houston practice: the clients you support, your Texas license, the specialties you offer and how to book. Nothing goes live as a ranking claim, credential or result we cannot support.",
      },
      {
        title: "No guarantees or clinical promises",
        body: "No agency controls Google\u2019s rankings, and SEO should not be presented as a guaranteed outcome. We also avoid language that implies a clinical result or recovery. The focus stays on visibility, clarity and inquiries.",
      },
      {
        title: "Pages built around specialties and real searches",
        body: "We organize the site around the concerns people search for in Houston \u2014 trauma, anxiety, couples work, teens, EMDR or another specialty \u2014 and tie them to the neighborhoods and session formats your practice actually offers. Each page gets a clear job without inventing demand.",
      },
      {
        title: "Ethics-first marketing for a regulated practice",
        body: "Texas regulatory bodies and professional codes set the boundaries. We keep marketing language clear and non-misleading, flag anything that may need a closer look, and leave compliance decisions with the practice and its own advisers.",
      },
    ],
    testimonialHeading:
      "What Houston therapists say about working with an AI SEO agency",
    faqHeading:
      "AI search optimization and GEO questions from Houston therapists",
    faqs: [
      {
        q: "Can a solo practice rank for \u201ctherapist Houston\u201d?",
        a: "A solo practice can compete for Houston searches when the site is clear about its work and the neighborhoods it serves. Google rewards focused specialty pages, a complete Google Business Profile, genuine reviews and a fast mobile site. We aim at realistic searches rather than promising a position.",
      },
      {
        q: "Is SEO useful if all sessions are online?",
        a: "Yes. People still search for a Texas-licensed therapist, a specific specialty or a clinician who offers telehealth from Houston. The site should explain that sessions are online, which parts of the metro and state you serve and how the first appointment works.",
      },
      {
        q: "Should the site mention Sugar Land, Katy or The Woodlands?",
        a: "Name the places the practice genuinely serves on the office or service-area page. A clear service-area section is more useful than a thin duplicate page for every suburb. If a community produces real demand, it may deserve its own page later, but not one that repeats the same copy.",
      },
      {
        q: "When will I see results?",
        a: "There is no guaranteed schedule. Google sets the pace, and rankings depend on the starting site, the competition, the review profile and how consistently the work is maintained. The first visible progress is the work itself \u2014 fixes, new pages and rewritten titles \u2014 followed by reports on which searches the pages appear for.",
      },
      {
        q: "How much does it cost?",
        a: "SEO is sold as a 3-month implementation project, with Starter ($329.99/month), Professional ($379.99/month) and Premium ($429.99/month) packages spread across a 12-month payment plan. The monthly amount is an installment toward the project rather than an ongoing retainer. A larger group practice may need a wider scope, which we confirm in a written quote after a free review.",
      },
      {
        q: "Do you work with group practices?",
        a: "Yes. Group practices usually need a clearer structure: who each clinician is, which specialties, populations and languages they serve, where sessions happen and how inquiries are routed. We can plan the site around the group as a whole without losing the individual clinicians a client may be looking for.",
      },
      {
        q: "Does your marketing respect Texas licensing boards and professional ethics rules?",
        a: "We avoid guarantees, clinical claims and misleading wording. Marketing should describe the practice accurately, not promise a ranking or an outcome. The practice remains responsible for its own compliance with Texas regulators and professional obligations, and we flag anything that may need a closer review.",
      },
      {
        q: "What is AI search optimization (AI SEO, AEO, GEO) for therapists?",
        a: "It means making a practice easy for AI tools to understand and cite: accurate details about specialties, licensure, location and how to book, written clearly and kept consistent. AEO (answer engine optimization) and generative engine optimization (GEO) are common labels for parts of that work. No one can promise a citation or a position in an AI answer.",
      },
    ],
    ctaHeading:
      "Grow your Houston therapy practice with AI search optimization",
    ctaDescription:
      "Tell us about your practice and the Houston communities you serve. We will review your website, local visibility and the searches worth pursuing, then send a clear quote.",
    areaServed: [
      {
        "@type": "City",
        name: "Houston",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Texas",
        },
      },
      { "@type": "Place", name: "Downtown Houston" },
      { "@type": "Place", name: "Montrose" },
      { "@type": "Place", name: "The Heights" },
      { "@type": "Place", name: "Midtown" },
      { "@type": "Place", name: "Museum District" },
      { "@type": "Place", name: "Spring Branch" },
      { "@type": "Place", name: "Clear Lake" },
      { "@type": "City", name: "Sugar Land" },
      { "@type": "City", name: "Katy" },
      { "@type": "City", name: "Pearland" },
      { "@type": "City", name: "The Woodlands" },
      { "@type": "Country", name: "United States" },
    ],
  },
};
