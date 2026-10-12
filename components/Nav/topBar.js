import React from "react";
import Link from "next/link";
import Container from "../ui/Container";
import Icon from "../ui/Icon";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getNextTwoMonths() {
  const current = new Date();
  const next = MONTHS[(current.getMonth() + 1) % 12];
  const after = MONTHS[(current.getMonth() + 2) % 12];
  return [next, after];
}

export default function TopBar() {
  const [nextMonth, monthAfterNext] = getNextTwoMonths();
  return (
    <div className="border-b border-accent-hover/40 bg-accent">
      <Container className="flex items-center justify-center py-1.5">
        <Link
          href="/get-a-quote"
          className="group inline-flex items-center gap-1.5 text-xs font-medium text-accent-contrast/90 transition-colors hover:text-accent-contrast sm:text-sm"
        >
          Now booking {nextMonth} &amp; {monthAfterNext} — get a quote
          <Icon
            name="arrow-right"
            className="arrow-nudge h-3.5 w-3.5"
          />
        </Link>
      </Container>
    </div>
  );
}
