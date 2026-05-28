"use client";

import { useEffect, useState } from "react";

// Renders a scrape-resistant email: the static HTML only ever contains
// "user [at] domain [dot] tld" (no "@", no mailto), which email harvesters
// can't regex out. After hydration it upgrades to a real clickable address.
export function Email({
  user,
  domain,
  className = "link-quiet text-ink-700",
}: {
  user: string;
  domain: string;
  className?: string;
}) {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => setRevealed(true), []);

  if (!revealed) {
    return (
      <span className="text-ink-700">
        {user} [at] {domain.split(".").join(" [dot] ")}
      </span>
    );
  }

  const address = `${user}@${domain}`;
  return (
    <a href={`mailto:${address}`} className={className}>
      {address}
    </a>
  );
}
