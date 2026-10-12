import React from "react";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Container from "../ui/Container";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.712155785956!2d-79.21034682429627!3d43.152573384666596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3507111975161%3A0x18a1198be6280a70!2s%F0%9F%9A%80%20Infused%20Agency%20%7C%20Niagara%20Web%20Design%20%26%20SEO%20Company!5e0!3m2!1sen!2sca!4v1725932520162!5m2!1sen!2sca";
const MAP_LINK =
  "https://maps.google.com/maps?ll=43.15257,-79.207772&z=15&t=m&hl=en&gl=CA&mapclient=embed&cid=1774727816813218416";
const ADDRESS = "73 Alexandra Blvd, St. Catharines, ON L2P 1K2";

const CTA = () => {
  return (
    <section className="redesign-root border-t border-border bg-base">
      <div
        className="pointer-events-none absolute inset-x-0 h-px"
        aria-hidden="true"
      />
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-balance font-display text-h2 font-bold leading-[1.12] tracking-[-0.02em] text-ink">
              Ready to Grow Your Business?
            </h2>
            <p className="mt-4 max-w-lg text-lead text-muted">
              Book a free, no-obligation consultation and we&rsquo;ll map out
              where your next customers come from.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/get-a-quote" size="lg">
                Get Free Quote
                <Icon name="arrow-right" className="h-4 w-4" />
              </Button>
              <Button href="/work" variant="secondary" size="lg">
                See our work
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
            <iframe
              title="Infused Agency office location map"
              src={MAP_EMBED}
              className="h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex items-start gap-3 p-5">
              <Icon
                name="map-pin"
                className="mt-0.5 h-5 w-5 shrink-0 text-accent"
              />
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noreferrer"
                className="text-sm leading-relaxed text-muted transition-colors hover:text-ink"
              >
                {ADDRESS}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
