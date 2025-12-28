import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Features from "@/components/sections/Features";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Features />
      <FAQ />
      <FinalCTA />
    </>
  );
}
