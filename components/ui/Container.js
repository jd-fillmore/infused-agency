import React from "react";
import { cn } from "./cn";

export default function Container({
  as: Tag = "div",
  className,
  children,
  ...rest
}) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-content px-5 sm:px-6 lg:px-8", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
