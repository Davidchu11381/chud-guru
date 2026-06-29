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
            <span className="text-ink-900">mental health</span>. One side is
            behavioral, a{" "}
            <span className="text-ink-900">black-box audit</span> of how
            conversational AI acts over many turns, and how those interactions
            can compound into harm: emotional dependency, belief spirals, and
            eating-disorder reinforcement, especially for teens and other
            vulnerable users. With clinicians and social scientists, I use
            concrete evaluation, red-teaming harnesses, and post-training
            safeguards for these risks.
          </p>
          <p>
            The other side is more fundamental, and the question I most want to
            answer: for AI to harm people less, to{" "}
            <span className="text-ink-900">actively mitigate harm</span>, and
            maybe even leave people better off, especially around{" "}
            <span className="text-ink-900">
              emotional manipulation and mental health
            </span>
            , it first has to understand the{" "}
            <span className="text-ink-900">
              complex psychological and social constructs
            </span>{" "}
            we live by, like emotions, intimacy, and mental health itself. I
            work toward this from several angles:{" "}
            <span className="text-ink-900">mechanistic interpretability</span>,{" "}
            <span className="text-ink-900">conceptual reasoning</span>,
            behavioral study, and collaboration with{" "}
            <span className="text-ink-900">psychologists and psychiatrists</span>.
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
