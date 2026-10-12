import React from "react";
import Head from "next/head";
import {
  Container,
  Section,
  Button,
  Badge,
  Card,
  ServiceCard,
  StatBlock,
  Accordion,
  TestimonialCard,
  Breadcrumb,
  Icon,
  Field,
  inputClasses,
} from "../../../components/ui";

const SWATCHES = [
  ["base", "bg-base"],
  ["surface", "bg-surface"],
  ["card", "bg-card"],
  ["elevated", "bg-elevated"],
  ["accent", "bg-accent"],
  ["accent-deep", "bg-accent-deep"],
  ["gold", "bg-gold"],
  ["success", "bg-success"],
];

const ICONS = [
  "arrow-right",
  "chevron",
  "check",
  "search",
  "globe",
  "chat",
  "layers",
  "code",
  "bolt",
  "map-pin",
  "star",
  "users",
  "target",
  "mail",
  "phone",
  "clock",
  "spark",
];

const FAQS = [
  { q: "What is the accordion built with?", a: "A native details/summary element so it works without JavaScript and is keyboard operable." },
  { q: "Does it need a library?", a: "No. It is plain HTML plus Tailwind utilities and an inline SVG chevron." },
];

export default function Styleguide() {
  return (
    <>
      <Head>
        <title>Styleguide</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-base">
        <div className="glow-radial-deep">
          <Section
            eyebrow="Internal"
            heading="Design system styleguide"
            subhead="Tokens, typography, and components for the dark SaaS redesign. Dev only."
          >
            <Breadcrumb
              items={[
                { name: "Home", href: "/" },
                { name: "Dev" },
                { name: "Styleguide" },
              ]}
            />
          </Section>
        </div>

        <Section heading="Colour tokens" headingAs="h2">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {SWATCHES.map(([name, bg]) => (
              <div key={name} className="overflow-hidden rounded-lg border border-border">
                <div className={`h-16 ${bg}`} />
                <div className="bg-card px-3 py-2 text-xs text-muted">{name}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section heading="Typography" headingAs="h2">
          <div className="space-y-4">
            <p className="text-display font-display font-bold text-ink">
              Display — Inter
            </p>
            <h2 className="text-h1 font-display font-bold text-ink">
              Heading 1 — fluid clamp
            </h2>
            <h3 className="text-h2 font-display font-bold text-ink">
              Heading 2 — fluid clamp
            </h3>
            <h4 className="text-h3 font-display font-bold text-ink">
              Heading 3 — fluid clamp
            </h4>
            <p className="text-lead text-muted">
              Lead paragraph in Inter at the fluid lead size.
            </p>
            <p className="text-ink">
              Body copy in Inter. Accent{" "}
              <span className="text-accent">links use the brand blue</span> and
              muted text sits a step softer.
            </p>
          </div>
        </Section>

        <Section heading="Buttons" headingAs="h2">
          <div className="flex flex-wrap items-center gap-4">
            <Button href="#">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button size="lg">Primary large</Button>
          </div>
        </Section>

        <Section heading="Badges and chips" headingAs="h2">
          <div className="flex flex-wrap items-center gap-3">
            <Badge>Accent badge</Badge>
            <Badge tone="muted">Muted chip</Badge>
            <Badge tone="gold">Gold</Badge>
            <Badge tone="accent">
              <Icon name="check" className="h-3.5 w-3.5" /> With icon
            </Badge>
          </div>
        </Section>

        <Section heading="Cards" headingAs="h2">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <h3 className="text-lg font-semibold text-ink">Default card</h3>
              <p className="mt-2 text-sm text-muted">
                Subtle border, card surface, soft shadow.
              </p>
            </Card>
            <Card interactive>
              <h3 className="text-lg font-semibold text-ink">Interactive</h3>
              <p className="mt-2 text-sm text-muted">
                Lifts on hover with a stronger border.
              </p>
            </Card>
            <Card gradient>
              <h3 className="text-lg font-semibold text-ink">Gradient border</h3>
              <p className="mt-2 text-sm text-muted">
                Thin accent gradient border for featured cards.
              </p>
            </Card>
            <ServiceCard
              href="/seo/local-seo"
              number="01"
              title="Numbered service card"
              description="Links to the matching service page."
            />
            <StatBlock value="+670%" label="Delta Energy Solutions" />
            <StatBlock value="50+" label="Clients helped" />
          </div>
        </Section>

        <Section heading="Testimonial and accordion" headingAs="h2">
          <div className="grid gap-6 lg:grid-cols-2">
            <TestimonialCard
              showStars
              quote="Infused Agency are not only clear professionals and expert in their fields, but are extremely personable to work with."
              person="Brandi May"
              role="Owner"
              company="Brandi May Psychotherapy"
            />
            <Accordion items={FAQS} />
          </div>
        </Section>

        <Section heading="Form fields" headingAs="h2">
          <Card className="max-w-lg">
            <div className="space-y-4">
              <Field label="Name" id="sg-name">
                <input id="sg-name" className={inputClasses} placeholder="Jane Doe" />
              </Field>
              <Field label="Email" id="sg-email" hint="We never share your email.">
                <input id="sg-email" type="email" className={inputClasses} placeholder="jane@example.com" />
              </Field>
              <Field label="Message" id="sg-message">
                <textarea id="sg-message" rows={4} className={inputClasses} placeholder="Tell us about your goals" />
              </Field>
              <Button>Submit</Button>
            </div>
          </Card>
        </Section>

        <Section heading="Icons" headingAs="h2">
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 lg:grid-cols-9">
            {ICONS.map((name) => (
              <div
                key={name}
                className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-3 text-muted"
              >
                <Icon name={name} className="h-6 w-6 text-accent" />
                <span className="text-[10px]">{name}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section heading="Atmosphere" headingAs="h2">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="bg-grid h-40 rounded-xl border border-border" />
            <div className="glow-radial h-40 rounded-xl border border-border bg-card" />
          </div>
        </Section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === "production") {
    return { notFound: true };
  }
  return { props: {} };
}
