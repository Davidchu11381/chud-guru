import { profile } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="relative py-20 border-t border-black/[0.06]">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading>About</SectionHeading>
        <div className="text-base text-ink-700 leading-relaxed space-y-4 max-w-2xl">
          <p>
            I&apos;m a Computer Science PhD candidate at the{" "}
            <span className="text-ink-900">
              USC Information Sciences Institute
            </span>
            , advised by{" "}
            <a
              href="https://www.luceriluc.it/"
              target="_blank"
              rel="noreferrer"
              className="link-quiet"
            >
              Luca Luceri
            </a>{" "}
            and <span className="text-ink-900">Kristina Lerman</span>. This
            summer I&apos;m an{" "}
            <span className="text-ink-900">Anthropic AI Safety Fellow</span>,
            working on socio-technical alignment.
          </p>
          <p>
            I grew up in <span className="text-ink-900">Vũng Tàu</span>, a
            coastal city in southern Việt Nam, and now live in Los Angeles.
            Outside research I box, play tennis, and read more philosophy of
            mind than is probably healthy for an empiricist.
          </p>
          <p>
            My broader interest is in what happens when language models stop
            being tools and start being companions — what we should expect of
            them, what we should and shouldn&apos;t ask of them, and what (if
            anything) is owed to them in return.
          </p>
        </div>
      </div>
    </section>
  );
}
