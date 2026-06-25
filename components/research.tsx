"use client";

import { useState } from "react";
import { SectionHeading } from "./section-heading";
import { profile } from "@/lib/data";

const themes = [
  {
    n: "01",
    title: "Assistant → Companion",
    desc: "What changes about safety when people stop using LLMs and start confiding in them.",
  },
  {
    n: "02",
    title: "Psychology, Welfare & Interpretability",
    desc: "Raising a model's EQ: the traits, drives, and failure modes models develop, how complex constructs get encoded as directions inside them, and how the way we treat models may carry downstream weight.",
  },
  {
    n: "03",
    title: "Character Training",
    desc: "How voice, values, and refusals get baked in at scale.",
  },
  {
    n: "04",
    title: "Aligning to Communities",
    desc: "Tuning LLMs to specific online communities without flattening their language or norms.",
  },
  {
    n: "05",
    title: "Computational Social Science",
    desc: "Surfacing harm patterns — body image, eating disorders — across Twitter, Reddit, TikTok.",
  },
  {
    n: "06",
    title: "LLM-Agent Info Ops",
    desc: "Emergent coordinated behaviour in networked LLM agents and its strategic dynamics.",
  },
];

export function Research() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section
      id="research"
      className="relative min-h-screen flex flex-col justify-center py-20"
    >
      <div className="mx-auto max-w-4xl w-full px-6">
        <SectionHeading>Research</SectionHeading>
        <p className="text-lg sm:text-xl text-ink-700 leading-relaxed max-w-2xl">
          I work on <span className="text-ink-900">AI alignment and safety</span>,
          with a current focus on the shift from AI-as-
          <em className="font-serif">assistant</em> to AI-as-
          <em className="font-serif">companion</em>.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {profile.interests.map((interest) => (
            <span
              key={interest}
              className="font-mono text-xs uppercase tracking-wider text-ink-600 border border-black/10 rounded-full px-3 py-1.5 hover:border-ink-900 hover:text-ink-900 transition-colors cursor-default"
            >
              {interest}
            </span>
          ))}
        </div>

        <ol className="mt-12 grid sm:grid-cols-2 gap-x-12 gap-y-8 stagger">
          {themes.map((t) => (
            <li
              key={t.n}
              onMouseEnter={() => setActive(t.n)}
              onMouseLeave={() => setActive(null)}
              className="group cursor-default"
            >
              <div className="flex items-baseline gap-4">
                <span
                  className={`font-mono text-sm transition-colors ${
                    active === t.n ? "text-accent" : "text-ink-400"
                  }`}
                >
                  {t.n}
                </span>
                <h3 className="font-serif text-2xl text-ink-900 tracking-tight">
                  {t.title}
                </h3>
              </div>
              <p className="mt-2 ml-9 text-base text-ink-600 leading-relaxed">
                {t.desc}
              </p>
              <div
                className="ml-9 mt-2.5 h-px bg-ink-900 transition-all duration-500 origin-left"
                style={{ transform: `scaleX(${active === t.n ? 1 : 0})` }}
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
