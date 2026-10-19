import React from "react";

export default function EmbeddedMap({
  place,
  zoom = 12,
  title = "Map",
  className = "",
}) {
  const q = encodeURIComponent(place || "");
  const src = "https://www.google.com/maps?q=" + q + "&z=" + zoom + "&output=embed";
  return (
    <div className={"relative aspect-video w-full overflow-hidden rounded-xl border border-border " + className}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
