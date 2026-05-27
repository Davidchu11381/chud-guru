import { Background } from "@/components/background";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionDots } from "@/components/section-dots";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Research } from "@/components/research";
import { News } from "@/components/news";
import { Publications } from "@/components/publications";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <ScrollProgress />
      <Background />
      <Nav />
      <SectionDots />
      <Hero />
      <Research />
      <News />
      <Publications />
      <About />
      <Contact />
    </main>
  );
}
