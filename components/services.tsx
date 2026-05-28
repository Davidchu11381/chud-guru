import { ExternalLink } from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen flex flex-col justify-center py-20 border-t border-black/[0.06]"
    >
      <div className="mx-auto max-w-4xl w-full px-6">
        <SectionHeading>Services</SectionHeading>
        <p className="text-lg sm:text-xl text-ink-700 leading-relaxed max-w-2xl">
          Reviewing, organizing, and teaching across the NLP and computational
          social science communities.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-x-14 gap-y-10 max-w-3xl">
          {/* Reviewing + roles */}
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink-500 mb-4">
              Program Committee / Reviewer
            </div>
            <div className="flex flex-wrap gap-2">
              {services.reviewing.map((venue) => (
                <a
                  key={venue.name}
                  href={venue.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-ink-700 bg-paper-card border border-black/[0.08] rounded-md px-2.5 py-1 transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {venue.name}
                </a>
              ))}
            </div>
            <ul className="mt-5 space-y-1.5">
              {services.roles.map((role) => (
                <li key={role.label}>
                  <a
                    href={role.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group text-base text-ink-700 inline-flex items-baseline gap-2 hover:text-accent transition-colors"
                  >
                    <span className="text-accent">→</span>
                    <span className="inline-flex items-baseline gap-1.5">
                      {role.label}
                      <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Teaching */}
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink-500 mb-4">
              Teaching
            </div>
            <ul className="space-y-4">
              {services.teaching.map((course) => (
                <li key={course.code}>
                  <a
                    href={course.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-mono text-xs text-ink-500 group-hover:text-accent transition-colors">
                        {course.code}
                      </span>
                      <span className="font-mono text-xs text-ink-400 whitespace-nowrap">
                        {course.term}
                      </span>
                    </div>
                    <div className="mt-0.5 text-base text-ink-800 leading-snug inline-flex items-baseline gap-1.5 group-hover:text-accent transition-colors">
                      {course.title}
                      <ExternalLink className="w-3 h-3 shrink-0 opacity-40 group-hover:opacity-100" />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
