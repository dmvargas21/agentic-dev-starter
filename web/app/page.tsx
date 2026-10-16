import Hero from "@/components/Hero";
import TocNav from "@/components/TocNav";
import Intro from "@/components/Intro";
import Timeline from "@/components/Timeline";
import Comparison from "@/components/Comparison";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Risks from "@/components/Risks";
import Future from "@/components/Future";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <TocNav />
      <main>
        <Intro />
        <Timeline />
        <Comparison />
        <Stats />
        <Skills />
        <Risks />
        <Future />
      </main>
      <SiteFooter />
    </>
  );
}
