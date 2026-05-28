"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#news", label: "News" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-paper/90 backdrop-blur-md border-b border-black/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-3xl px-5 sm:px-6 h-14 flex items-center justify-between gap-3">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="font-serif italic text-lg text-ink-900 hover:text-accent transition-colors whitespace-nowrap"
        >
          Minh Duc (David) Chu
        </a>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-1 text-base">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 rounded text-ink-600 hover:text-ink-900 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="sm:hidden -mr-2 p-2 text-ink-700 hover:text-ink-900 transition-colors"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile dropdown panel */}
      <div
        className={`sm:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="px-5 pb-4 pt-1 divide-y divide-black/[0.06]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3.5 text-lg text-ink-700 hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
