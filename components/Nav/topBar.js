import React from "react";
import Link from "next/link"; // Adjust import if not using Next.js

const getNextTwoMonths = () => {
  const currentDate = new Date();
  const monthNames = [
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

  const nextMonthIndex = (currentDate.getMonth() + 1) % 12;
  const monthAfterNextIndex = (currentDate.getMonth() + 2) % 12;

  const nextMonth = monthNames[nextMonthIndex];
  const monthAfterNext = monthNames[monthAfterNextIndex];

  return [nextMonth, monthAfterNext];
};

const TopBar = () => {
  const [nextMonth, monthAfterNext] = getNextTwoMonths();

  return (
    <div className="top-bar">
      <Link href="/get-a-quote">
        Now Booking {nextMonth} & {monthAfterNext} - Get A Quote{" "}
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
          height="20px"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
        </svg>
      </Link>
    </div>
  );
};

export default TopBar;
