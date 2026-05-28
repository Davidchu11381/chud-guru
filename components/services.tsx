import { services } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen flex flex-col justify-center py-20 pb-12 border-t border-black/[0.06]"
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
                <span
                  key={venue}
                  className="text-sm text-ink-700 bg-paper-card border border-black/[0.08] rounded-md px-2.5 py-1"
                >
                  {venue}
                </span>
              ))}
            </div>
            <ul className="mt-5 space-y-1.5">
              {services.roles.map((role) => (
                <li
                  key={role}
                  className="text-base text-ink-700 flex items-baseline gap-2"
                >
                  <span className="text-accent">→</span>
                  {role}
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
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-mono text-xs text-ink-500">
                      {course.code}
                    </span>
                    <span className="font-mono text-xs text-ink-400 whitespace-nowrap">
                      {course.term}
                    </span>
                  </div>
                  <div className="mt-0.5 text-base text-ink-800 leading-snug">
                    {course.title}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <footer className="mt-20 pt-6 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-ink-400">
          <span>© {new Date().getFullYear()} Minh Duc (David) Chu</span>
          <span>Built with Next.js · Hosted on Vercel</span>
        </footer>
      </div>
    </section>
  );
}
