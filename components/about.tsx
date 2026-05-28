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
            ) and <span className="text-ink-900">Kristina Lerman</span> (Luddy
            School of Informatics, Computing and Engineering, Indiana
            University). This summer I&apos;m an incoming{" "}
            <span className="text-ink-900">Anthropic AI Safety Fellow</span>,
            working on research that advances AI alignment and safety.
          </p>
          <p>
            My research sits at the intersection of{" "}
            <span className="text-ink-900">AI safety and alignment</span> and{" "}
            <span className="text-ink-900">mental health</span>. I focus on how
            repeated interactions with conversational AI can compound into
            harmful trajectories — emotional dependency, belief spirals, and
            eating-disorder reinforcement — especially for teens and other
            vulnerable users. I translate these psychosocial risks into
            concrete rubrics, red-teaming harnesses, and post-training recipes
            (SFT, RLHF, preference optimization), in partnership with
            clinicians and social scientists.
          </p>
          <p>
            I&apos;m also very interested in{" "}
            <span className="text-ink-900">model psychology</span> and{" "}
            <span className="text-ink-900">model welfare</span>, and what they
            complicate about AI safety and alignment — what psychosocial
            traits, drives, and failure modes models develop, and what we may owe
            entities trained to feel like someone.
          </p>
          <p>
            I grew up in <span className="text-ink-900">Vũng Tàu</span>{" "}
            <span aria-label="Vietnam flag">🇻🇳</span>, a coastal city in
            southern Việt Nam, and now live in Los Angeles{" "}
            <span aria-label="US flag">🇺🇸</span>. Outside research I box, play
            tennis, and read more philosophy of mind than is probably healthy
            for an empiricist.
          </p>
        </div>
      </div>
    </section>
  );
}
