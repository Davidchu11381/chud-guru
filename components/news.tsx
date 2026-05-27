import { ExternalLink } from "lucide-react";
import { news } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function News() {
  return (
    <section id="news" className="relative py-20 border-t border-black/[0.06]">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading>News</SectionHeading>
        <ul className="stagger divide-y divide-black/[0.06] border-y border-black/[0.06]">
          {news.map((n) => (
            <li key={n.iso} className="py-4">
              <div className="grid grid-cols-[100px_1fr] gap-6 items-baseline">
                <time
                  dateTime={n.iso}
                  className="font-mono text-xs text-ink-500 uppercase tracking-wider"
                >
                  {n.date}
                </time>
                <div className="text-sm text-ink-700 leading-relaxed">
                  {n.body}{" "}
                  {n.href && (
                    <a
                      href={n.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-0.5 text-accent hover:underline"
                    >
                      [pdf]
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
