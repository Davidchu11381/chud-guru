"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#news", label: "News" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-black/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-3xl px-4 sm:px-6 h-14 flex items-center justify-between gap-2 sm:gap-4">
        <a
          href="#top"
          className="hidden sm:inline font-serif italic text-lg text-ink-900 hover:text-accent transition-colors whitespace-nowrap"
        >
          Minh Duc (David) Chu
        </a>
        <a
          href="#top"
          className="sm:hidden font-serif italic text-base text-ink-900 hover:text-accent transition-colors whitespace-nowrap"
          aria-label="Minh Duc (David) Chu — top"
        >
          MDC
        </a>
        <ul className="flex items-center gap-0 sm:gap-1 text-[11px] sm:text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-1.5 sm:px-3 py-1.5 rounded text-ink-600 hover:text-ink-900 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
