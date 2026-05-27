"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { profile } from "@/lib/data";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallax = Math.min(scrollY * 0.12, 40);

  return (
    <section id="top" className="relative pt-36 pb-20 sm:pt-44 sm:pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-10 items-center fade-up">
          <div className="order-2 sm:order-1">
            <h1 className="font-serif text-5xl sm:text-6xl text-ink-900 leading-[1.05] tracking-tight font-normal">
              Minh Duc <span className="italic font-medium">Chu</span>
            </h1>
            <p className="mt-5 text-base text-ink-700 leading-relaxed max-w-md">
              PhD candidate at the{" "}
              <span className="text-ink-900">USC Information Sciences Institute</span>
              , advised by{" "}
              <a
                href="https://www.luceriluc.it/"
                target="_blank"
                rel="noreferrer"
                className="link-quiet"
              >
                Luca Luceri
              </a>{" "}
              and <span className="text-ink-900">Kristina Lerman</span>.
            </p>
            <p className="mt-3 text-sm text-ink-500 leading-relaxed max-w-md">
              {profile.fellowship}
            </p>
            <p className="mt-3 text-sm text-ink-500 leading-relaxed max-w-md">
              From {profile.origin}. Based in {profile.location}.
            </p>
          </div>

          <div
            ref={portraitRef}
            className="order-1 sm:order-2 justify-self-start sm:justify-self-end"
            style={{ transform: `translateY(${parallax}px)` }}
          >
            <div className="group relative">
              <div
                className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                style={{
                  background:
                    "conic-gradient(from 0deg, #c7a47e, #e8d3b6, #c7a47e)",
                }}
              />
              <Image
                src="/portrait.jpg"
                alt="Minh Duc Chu"
                width={200}
                height={200}
                priority
                className="relative rounded-full object-cover w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] border border-black/10 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.25)] transition-transform duration-700 group-hover:scale-[1.03]"
                style={{ objectPosition: "center 20%" }}
              />
            </div>
          </div>
        </div>

        <a
          href="#research"
          className="mt-20 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-ink-500 hover:text-ink-900 transition-colors group"
        >
          Scroll
          <ArrowDown className="w-3 h-3 transition-transform group-hover:translate-y-0.5 animate-bounce-soft" />
        </a>
      </div>
      <style jsx>{`
        @keyframes bounce-soft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(3px); }
        }
        :global(.animate-bounce-soft) {
          animation: bounce-soft 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
