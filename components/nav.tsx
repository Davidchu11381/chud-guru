"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#research", label: "Research" },
  { href: "#news", label: "News" },
  { href: "#publications", label: "Publications" },
  { href: "#about", label: "About" },
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
      <nav className="mx-auto max-w-3xl px-6 h-14 flex items-center justify-between">
        <a
          href="#top"
          className="font-serif italic text-lg text-ink-900 hover:text-accent transition-colors"
        >
          Minh Duc Chu
        </a>
        <ul className="hidden sm:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-1.5 rounded text-ink-600 hover:text-ink-900 transition-colors"
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
