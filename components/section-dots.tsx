"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "top", label: "Top" },
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "news", label: "News" },
  { id: "publications", label: "Publications" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export function SectionDots() {
  const [active, setActive] = useState<string>("top");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visible = new Map<string, number>();

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            visible.set(s.id, e.intersectionRatio);
          });
          let bestId = "top";
          let best = 0;
          visible.forEach((ratio, id) => {
            if (ratio > best) {
              best = ratio;
              bestId = id;
            }
          });
          if (best > 0) setActive(bestId);
        },
        { threshold: [0, 0.25, 0.5, 0.75, 1] }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-3"
    >
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="group relative flex items-center justify-end h-3"
          aria-label={`Jump to ${s.label}`}
        >
          <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[10px] uppercase tracking-[0.18em] text-ink-700 whitespace-nowrap pointer-events-none">
            {s.label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === s.id
                ? "w-2.5 h-2.5 bg-ink-900"
                : "w-1.5 h-1.5 bg-ink-300 group-hover:bg-ink-600"
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
