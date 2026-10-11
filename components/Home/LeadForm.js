import React, { useState } from "react";
import Link from "next/link";
import { Field, inputClasses, Button, Icon } from "../ui";

const CONTACT_EMAIL = "info@infused.agency";

export default function LeadForm({ formId = "lead-form", compact = false }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Hidden honeypot: bots fill it, humans never see it.
    if (data.get("company_url")) return;

    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    if (!name || !email) {
      setError("Please add your name and email.");
      return;
    }
    setError("");

    // No form backend exists on the site today: the quote/contact path is the
    // public email (info@infused.agency) and the Calendly booking on
    // /get-a-quote. We reuse that channel rather than introduce a new endpoint.
    const subject = encodeURIComponent(`Quote request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-xl border border-border bg-card p-6 text-sm text-muted">
        <p className="flex items-center gap-2 font-semibold text-ink">
          <Icon name="check" className="h-5 w-5 text-accent" />
          Thanks, {""}
          your email is ready to send.
        </p>
        <p className="mt-2">
          If your mail app did not open, email us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-accent hover:text-accent-hover"
          >
            {CONTACT_EMAIL}
          </a>{" "}
          or book a call on our{" "}
          <Link href="/get-a-quote" className="text-accent hover:text-accent-hover">
            quote page
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-border bg-card p-5 shadow-card"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" id={`${formId}-name`}>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputClasses}
            placeholder="Jane Doe"
          />
        </Field>
        <Field label="Email" id={`${formId}-email`}>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClasses}
            placeholder="jane@example.com"
          />
        </Field>
      </div>
      <div className="mt-4">
        <Field label="What can we help with?" id={`${formId}-message`}>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={compact ? 2 : 3}
            className={inputClasses}
            placeholder="A short note about your goals"
          />
        </Field>
      </div>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor={`${formId}-company`}>Company website</label>
        <input
          id={`${formId}-company`}
          name="company_url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {error && <p className="mt-3 text-xs text-red-400">{error}</p>}

      <Button type="submit" className="mt-4 w-full sm:w-auto">
        Get my free quote
        <Icon name="arrow-right" className="h-4 w-4" />
      </Button>
    </form>
  );
}
