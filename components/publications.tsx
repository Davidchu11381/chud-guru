"use client";

import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { publications, type Publication } from "@/lib/data";
import { SectionHeading } from "./section-heading";

function highlightAuthor(authors: string) {
  const patterns = ["Minh Duc Chu", "Minh Duc H Chu", "Minh Duc Hoang Chu", "David Chu"];
  let result: (string | { bold: string })[] = [authors];
  for (const p of patterns) {
    const next: (string | { bold: string })[] = [];
    for (const chunk of result) {
      if (typeof chunk !== "string") {
        next.push(chunk);
        continue;
      }
      const parts = chunk.split(p);
      parts.forEach((part, i) => {
        if (i > 0) next.push({ bold: p });
        if (part) next.push(part);
      });
    }
    result = next;
  }
  return result;
}

export function Publications() {
  const [showAll, setShowAll] = useState(false);

  const featured = publications.filter((p) => p.featured);
  const visible = (showAll ? publications : featured).sort(
    (a, b) => b.year - a.year
  );

  return (
    <section
      id="publications"
      className="relative min-h-screen flex flex-col justify-center py-20 border-t border-black/[0.06]"
    >
      <div className="mx-auto max-w-3xl w-full px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-6">
          <SectionHeading>Publications</SectionHeading>
          <a
            href="https://scholar.google.com/citations?user=mVCqi_kAAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-ink-500 hover:text-accent transition-colors inline-flex items-center gap-1 mb-2"
          >
            Google Scholar
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <ol className="stagger space-y-7">
          {visible.map((pub, idx) => (
            <li key={pub.title}>
              <PubEntry pub={pub} index={idx + 1} />
            </li>
          ))}
        </ol>

        <div className="mt-10 flex">
          <button
            type="button"
            onClick={() => setShowAll((s) => !s)}
            className="group text-sm text-ink-600 hover:text-accent transition-colors inline-flex items-center gap-1.5"
          >
            <span className="font-mono text-xs">
              {showAll ? "←" : "→"}
            </span>
            {showAll
              ? "Show featured only"
              : `Show all ${publications.length} papers`}
          </button>
        </div>
      </div>
    </section>
  );
}

function PubEntry({ pub, index }: { pub: Publication; index: number }) {
  return (
    <article className="group grid grid-cols-[36px_1fr] gap-5 transition-transform duration-300 hover:translate-x-1">
      <div className="pt-1">
        <div className="font-mono text-[11px] text-ink-400 group-hover:text-ink-900 transition-colors">
          {String(index).padStart(2, "0")}
        </div>
        <div className="font-mono text-[10px] text-ink-400 mt-1">
          {pub.year}
        </div>
      </div>
      <div>
        <h3 className="text-[15px] font-medium text-ink-900 leading-snug tracking-tight">
          {pub.pdf ? (
            <a
              href={pub.pdf}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors inline-flex items-baseline gap-1.5"
            >
              <span>{pub.title}</span>
              <ExternalLink className="w-3 h-3 shrink-0 opacity-40 group-hover:opacity-100 translate-y-0.5 transition-opacity" />
            </a>
          ) : (
            pub.title
          )}
        </h3>
        <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">
          {highlightAuthor(pub.authors).map((chunk, i) =>
            typeof chunk === "string" ? (
              <span key={i}>{chunk}</span>
            ) : (
              <span key={i} className="text-ink-900 font-medium">
                {chunk.bold}
              </span>
            )
          )}
        </p>
        <p className="mt-1 text-xs text-ink-500 italic font-serif">
          {pub.venue}
        </p>
      </div>
    </article>
  );
}
