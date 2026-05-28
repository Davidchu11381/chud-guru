import { Background } from "@/components/background";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionDots } from "@/components/section-dots";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Research } from "@/components/research";
import { Skills } from "@/components/skills";
import { News } from "@/components/news";
import { Publications } from "@/components/publications";
import { Contact } from "@/components/contact";
import { Services } from "@/components/services";

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <ScrollProgress />
      <Background />
      <Nav />
      <SectionDots />
      <Hero />
      <About />
      <Research />
      <Skills />
      <News />
      <Publications />
      <Services />
      <Contact />
    </main>
  );
}
