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
            <span className="text-ink-900">Anthropic AI Safety Fellow</span>, and
            this fall I&apos;ll join{" "}
            <a
              href={profile.links.characterai}
              target="_blank"
              rel="noreferrer"
              className="link-quiet text-ink-900"
            >
              Character.AI
            </a>{" "}
            as a Research Engineer Intern on the AI Safety &amp; Alignment team.
          </p>
          <p>
            I started at USC in 2023 and expect to defend in late 2027. Before
            that, I earned my B.A. with Distinction in{" "}
            <span className="text-ink-900">
              Computer Science &amp; Statistics
            </span>{" "}
            from <span className="text-ink-900">Carleton College</span> in
            Minnesota.
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
            <span className="text-ink-900">model psychology</span>,{" "}
            <span className="text-ink-900">interpretability</span>, and{" "}
            <span className="text-ink-900">model welfare</span>. What ties them
            together is a model&apos;s <span className="text-ink-900">EQ</span> —
            how well it understands people, aligns with human values, and avoids
            causing harm. One way to raise it is to help models grasp complex
            constructs like emotions, values, and persona, studying the traits,
            drives, and failure modes they develop and how those constructs get
            encoded as directions in their representations, through
            interpretability, reasoning, and evaluation. That structure feels
            central to a lot of AI safety; and so, increasingly, does the way we
            treat models, which may carry real downstream consequences.
          </p>
          <p>
            I grew up in <span className="text-ink-900">Vũng Tàu</span> on the
            coast of southern Việt Nam, and now live in Los Angeles. Outside
            research I box and play tennis.
          </p>
        </div>
      </div>
    </section>
  );
}
