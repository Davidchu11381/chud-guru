"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { news } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function News() {
  const containerRef = useRef<HTMLUListElement>(null);
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll("[data-news-index]");
    if (!items) return;
    const obs = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          const next = new Set(prev);
          entries.forEach((e) => {
            if (e.isIntersecting) {
              const idx = Number(
                (e.target as HTMLElement).dataset.newsIndex || -1
              );
              if (idx >= 0) next.add(idx);
            }
          });
          return next;
        });
      },
      { threshold: 0.4, rootMargin: "0px 0px -10% 0px" }
    );
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="news"
      className="relative min-h-screen flex flex-col justify-center py-20 border-t border-black/[0.06]"
    >
      <div className="mx-auto max-w-4xl w-full px-6">
        <SectionHeading>News</SectionHeading>
        <ul
          ref={containerRef}
          className="relative divide-y divide-black/[0.06] border-y border-black/[0.06]"
        >
          {news.map((n, idx) => {
            const isVisible = visible.has(idx);
            const isHovered = hovered === idx;
            return (
              <li
                key={`${n.iso}-${idx}`}
                data-news-index={idx}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className="relative group"
              >
                <a
                  href={n.href || "#"}
                  target={n.href ? "_blank" : undefined}
                  rel={n.href ? "noreferrer" : undefined}
                  className="block py-5 transition-all duration-300"
                  style={{
                    transform: isVisible
                      ? "translateY(0)"
                      : "translateY(20px)",
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: `${idx * 60}ms`,
                  }}
                >
                  {/* Accent bar that grows from left on hover */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-accent transition-all duration-300 ease-out"
                    style={{
                      height: isHovered ? "60%" : "0%",
                      opacity: isHovered ? 1 : 0,
                    }}
                  />
                  <div className="grid grid-cols-[1fr_auto] gap-x-3 gap-y-1 sm:grid-cols-[110px_1fr_auto] sm:gap-6 items-start sm:items-center pl-3 sm:pl-6">
                    <time
                      dateTime={n.iso}
                      className={`col-span-2 sm:col-span-1 font-mono text-xs sm:text-sm uppercase tracking-wider transition-colors duration-300 ${
                        isHovered ? "text-accent" : "text-ink-500"
                      }`}
                    >
                      {n.date}
                    </time>
                    <div
                      className={`text-base sm:text-lg leading-relaxed transition-colors duration-300 ${
                        isHovered ? "text-ink-900" : "text-ink-700"
                      }`}
                    >
                      {n.body}
                    </div>
                    {n.href && (
                      <ArrowUpRight
                        className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                          isHovered
                            ? "text-accent translate-x-0.5 -translate-y-0.5"
                            : "text-ink-400"
                        }`}
                      />
                    )}
                  </div>
                </a>
              </li>
            );
          })}
        </ul>

        <p className="mt-6 text-sm text-ink-400 font-mono">
          Last updated · {new Date().toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
    </section>
  );
}
