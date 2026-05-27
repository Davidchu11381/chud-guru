import { ExternalLink } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionHeading } from "./section-heading";

const socials = [
  { label: "Google Scholar", href: profile.links.scholar },
  { label: "ACL Anthology", href: profile.links.acl },
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center py-20 pb-12 border-t border-black/[0.06]"
    >
      <div className="mx-auto max-w-3xl w-full px-6">
        <SectionHeading>Contact</SectionHeading>
        <p className="text-base text-ink-700 leading-relaxed max-w-2xl">
          Happy to hear from anyone working on AI alignment, model welfare, or
          social NLP — and from anyone in Los Angeles looking for a tennis
          partner.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 gap-x-12 gap-y-2 max-w-2xl">
          <div className="space-y-1.5">
            <div className="font-mono text-[11px] uppercase tracking-wider text-ink-500 mb-2">
              Email
            </div>
            {profile.emails.map((e) => (
              <div key={e.value} className="text-sm">
                <a
                  href={`mailto:${e.value}`}
                  className="link-quiet text-ink-700"
                >
                  {e.value}
                </a>
                <span className="ml-2 text-xs text-ink-400">({e.label})</span>
              </div>
            ))}
          </div>
          <div className="space-y-1.5 mt-6 sm:mt-0">
            <div className="font-mono text-[11px] uppercase tracking-wider text-ink-500 mb-2">
              Elsewhere
            </div>
            {socials.map((s) => (
              <div key={s.label} className="text-sm">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-quiet text-ink-700 inline-flex items-baseline gap-1"
                >
                  {s.label}
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-24 pt-6 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-ink-400">
          <span>© {new Date().getFullYear()} Minh Duc Chu</span>
          <span>Built with Next.js · Hosted on Vercel</span>
        </footer>
      </div>
    </section>
  );
}
