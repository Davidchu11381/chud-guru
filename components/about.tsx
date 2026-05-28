import { profile } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function About() {
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
            <span className="text-ink-900">Luca Luceri</span> (
            <a
              href={profile.links.signalsLab}
              target="_blank"
              rel="noreferrer"
              className="link-quiet"
            >
              SIGNALS Lab
            </a>
            ) and <span className="text-ink-900">Kristina Lerman</span>. I&apos;m
            currently an{" "}
            <span className="text-ink-900">Anthropic AI Safety Fellow</span>.
          </p>
          <p>
            My research sits where{" "}
            <span className="text-ink-900">AI safety and alignment</span> meet{" "}
            <span className="text-ink-900">mental health</span>: how repeated
            interactions with conversational AI can compound into harmful
            trajectories — emotional dependency, belief spirals,
            eating-disorder reinforcement — especially for teens and other
            vulnerable users. I turn these risks into concrete rubrics,
            red-teaming harnesses, and post-training recipes, working with
            clinicians and social scientists.
          </p>
          <p>
            I&apos;m also drawn to{" "}
            <span className="text-ink-900">model psychology</span> and{" "}
            <span className="text-ink-900">model welfare</span>, and what they
            complicate for AI safety — what psychosocial traits, drives, and
            failure modes models develop, and what we may owe entities trained
            to feel like someone.
          </p>
          <p>
            I grew up in <span className="text-ink-900">Vũng Tàu</span>{" "}
            <span aria-label="Vietnam flag">🇻🇳</span> on the coast of southern
            Việt Nam, and now live in Los Angeles{" "}
            <span aria-label="US flag">🇺🇸</span>. Outside research I box and
            play tennis.
          </p>
        </div>
      </div>
    </section>
  );
}
