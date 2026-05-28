import { skills, llmSkills } from "@/lib/data";
import { SectionHeading } from "./section-heading";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-sm text-ink-700 bg-paper-card border border-black/[0.08] rounded-md px-2.5 py-1 transition-colors hover:border-accent/40 hover:text-ink-900">
      {children}
    </span>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center py-20 border-t border-black/[0.06]"
    >
      <div className="mx-auto max-w-4xl w-full px-6">
        <SectionHeading>Skills</SectionHeading>
        <p className="text-lg sm:text-xl text-ink-700 leading-relaxed max-w-2xl">
          The tools I reach for — and, for language models, the four phases I
          actually work across.
        </p>

        {/* General toolkit — labelled rows of tags */}
        <div className="mt-10 space-y-5">
          {skills.map((group) => (
            <div
              key={group.label}
              className="grid grid-cols-1 sm:grid-cols-[170px_1fr] gap-2 sm:gap-6 items-start"
            >
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink-500 pt-1.5">
                {group.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Language models — the focus, split into four phases */}
        <div className="mt-14">
          <div className="flex items-center gap-4 mb-7">
            <h3 className="font-serif italic text-2xl text-ink-900 tracking-tight whitespace-nowrap">
              Language Models
            </h3>
            <div className="h-px flex-1 bg-black/[0.08]" />
          </div>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-9 stagger">
            {llmSkills.map((group, i) => (
              <div key={group.label}>
                <div className="flex items-baseline gap-3 mb-3.5">
                  <span className="font-mono text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-800">
                    {group.label}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
