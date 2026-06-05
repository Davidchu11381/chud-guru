"use client";

import { useEffect, useState } from "react";
import { Mail, Linkedin, Github, GraduationCap, FileText } from "lucide-react";
import { profile } from "@/lib/data";

// The personal Gmail, stored split (no contiguous "@") so harvesters can't
// scrape it from the static HTML — same approach as <Email />.
const gmail = profile.emails.find((e) => e.domain.includes("gmail"));

type IconLink = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

export function SocialIcons({ className = "" }: { className?: string }) {
  // Assemble the mailto only after hydration; before then the icon points at
  // the Contact section so the raw address never appears in the page source.
  const [mailHref, setMailHref] = useState("#contact");
  useEffect(() => {
    if (gmail) setMailHref(`mailto:${gmail.user}@${gmail.domain}`);
  }, []);

  const links: IconLink[] = [
    { label: "Email", href: mailHref, icon: Mail },
    { label: "LinkedIn", href: profile.links.linkedin, icon: Linkedin },
    { label: "GitHub", href: profile.links.github, icon: Github },
    { label: "Google Scholar", href: profile.links.scholar, icon: GraduationCap },
    { label: "CV", href: profile.links.cv, icon: FileText },
  ];

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map(({ label, href, icon: Icon }) => {
        const external = href.startsWith("http");
        return (
          <a
            key={label}
            href={href}
            aria-label={label}
            title={label}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-900 bg-ink-900 text-paper shadow-[0_8px_24px_-14px_rgba(0,0,0,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-paper hover:text-ink-900 hover:shadow-[0_12px_28px_-14px_rgba(0,0,0,0.45)]"
          >
            <Icon className="h-[18px] w-[18px]" />
            <span className="sr-only">{label}</span>
          </a>
        );
      })}
    </div>
  );
}
