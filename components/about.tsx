"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center py-20 border-t border-black/[0.06]"
    >
      <div className="mx-auto max-w-4xl w-full px-6">
        <SectionHeading>About</SectionHeading>
        <div className="text-lg sm:text-xl text-ink-700 leading-relaxed space-y-5 max-w-3xl">
          <p>
            I&apos;m a Computer Science PhD candidate at the{" "}
            <a
              href={profile.links.isi}
              target="_blank"
              rel="noreferrer"
              className="link-quiet text-ink-900"
            >
              USC Information Sciences Institute
            </a>
            , advised by{" "}
            <a
              href={profile.links.advisor}
              target="_blank"
              rel="noreferrer"
              className="link-quiet text-ink-900"
            >
              Luca Luceri
            </a>{" "}
            (
            <a
              href={profile.links.signalsLab}
              target="_blank"
              rel="noreferrer"
              className="link-quiet"
            >
              SIGNALS Lab
            </a>
            ) and <span className="text-ink-900">Kristina Lerman</span>. This
            summer I&apos;m an incoming{" "}
            <span className="text-ink-900">Anthropic AI Safety Fellow</span>,
            working on research that advances AI alignment and safety.
          </p>
          <p>
            I grew up in <span className="text-ink-900">Vũng Tàu</span>{" "}
            <span aria-label="Vietnam flag">🇻🇳</span>, a coastal city in
            southern Việt Nam, and now live in Los Angeles{" "}
            <span aria-label="US flag">🇺🇸</span>. Outside research I box, play
            tennis, and read more philosophy of mind than is probably healthy
            for an empiricist.
          </p>

          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            className="group inline-flex items-center gap-2 text-base text-ink-600 hover:text-accent transition-colors mt-2"
          >
            <span>{expanded ? "Read less" : "Read more"}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`grid transition-all duration-500 ease-out ${
              expanded
                ? "grid-rows-[1fr] opacity-100 mt-2"
                : "grid-rows-[0fr] opacity-0 mt-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="space-y-5 text-lg text-ink-700 leading-relaxed max-w-3xl border-l-2 border-black/10 pl-6">
                <p>
                  I&apos;m a Computer Science PhD candidate at the{" "}
                  <a
                    href={profile.links.isi}
                    target="_blank"
                    rel="noreferrer"
                    className="link-quiet text-ink-900"
                  >
                    USC Information Sciences Institute
                  </a>
                  , advised by{" "}
                  <a
                    href={profile.links.advisor}
                    target="_blank"
                    rel="noreferrer"
                    className="link-quiet text-ink-900"
                  >
                    Luca Luceri
                  </a>{" "}
                  (
                  <a
                    href={profile.links.signalsLab}
                    target="_blank"
                    rel="noreferrer"
                    className="link-quiet"
                  >
                    SIGNALS Lab
                  </a>
                  ) and <span className="text-ink-900">Kristina Lerman</span>{" "}
                  (Luddy School of Informatics, Computing and Engineering,
                  Indiana University).
                </p>
                <p>
                  My research sits at the intersection of{" "}
                  <span className="text-ink-900">
                    AI safety and alignment
                  </span>{" "}
                  and <span className="text-ink-900">mental health</span>. I
                  focus on how repeated interactions with conversational AI can
                  compound into harmful trajectories — emotional dependency,
                  belief spirals, and eating-disorder reinforcement — especially
                  for teens and other vulnerable users.
                </p>
                <p>
                  I translate these psychosocial risks into concrete rubrics,
                  red-teaming harnesses, and post-training recipes (SFT, RLHF,
                  preference optimization) in partnership with clinicians and
                  social scientists. My work bridges computational and clinical
                  communities, with publications at venues like{" "}
                  <em className="font-serif">NAACL</em> and{" "}
                  <em className="font-serif">EMNLP</em> as well as clinical
                  journals such as <em className="font-serif">Body Image</em>{" "}
                  and the{" "}
                  <em className="font-serif">
                    International Journal of Eating Disorders
                  </em>
                  .
                </p>
                <p>
                  I&apos;m an incoming{" "}
                  <span className="text-ink-900">Anthropic Fellow</span> (AI
                  Safety).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
