import Image from "next/image";
import { ArrowDown, FileText } from "lucide-react";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-20"
    >
      <div className="mx-auto max-w-4xl w-full px-6">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-8 sm:gap-12 items-center fade-up">
          <div className="order-2 sm:order-1">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-ink-900 leading-[1.02] tracking-tight font-normal break-words">
              Minh Duc{" "}
              <span className="text-ink-400 italic">(</span>
              <span className="italic font-medium">David</span>
              <span className="text-ink-400 italic">)</span>{" "}
              <span className="italic font-medium">Chu</span>
            </h1>
            <p className="mt-6 sm:mt-7 text-lg sm:text-xl text-ink-700 leading-relaxed max-w-xl">
              PhD candidate at the{" "}
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
              ) and <span className="text-ink-900">Kristina Lerman</span>.
            </p>
            <p className="mt-4 text-base text-ink-500 leading-relaxed max-w-xl">
              {profile.fellowship}
            </p>
            <p className="mt-1.5 text-base text-ink-500 leading-relaxed max-w-xl">
              {profile.internship}
            </p>
            <p className="mt-3 text-base text-ink-500 leading-relaxed max-w-xl">
              From {profile.origin} <span aria-label="Vietnam flag">🇻🇳</span>.
              Based in {profile.location}{" "}
              <span aria-label="US flag">🇺🇸</span>.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={profile.links.cv}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-md border border-ink-900 bg-ink-900 px-4 py-2.5 text-sm font-medium text-paper shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)] transition-colors hover:bg-accent hover:border-accent"
              >
                <FileText className="w-4 h-4" />
                View CV
              </a>
            </div>
          </div>

          <div className="order-1 sm:order-2 justify-self-start sm:justify-self-end">
            <div className="group relative">
              <div
                className="absolute -inset-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                style={{
                  background:
                    "conic-gradient(from 0deg, #c7a47e, #e8d3b6, #c7a47e)",
                }}
              />
              <Image
                src="/portrait.jpg"
                alt="Minh Duc (David) Chu"
                width={320}
                height={320}
                priority
                className="relative rounded-full object-cover w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] border border-black/10 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.3)] transition-transform duration-700 group-hover:scale-[1.03]"
                style={{ objectPosition: "center 20%" }}
              />
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 inline-flex flex-col items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-ink-500 hover:text-ink-900 transition-colors group"
        >
          <span>Scroll</span>
          <ArrowDown className="w-3 h-3 animate-bounce-soft" />
        </a>
      </div>
      <style>{`
        @keyframes bounce-soft {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(4px); opacity: 1; }
        }
        .animate-bounce-soft {
          animation: bounce-soft 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
