import { Header } from "@/components/Header";
import { AboutWigetSection } from "@/sections/AboutWigetSection";
import { BenefitsCard } from "@/sections/BenefitsSection";
import { HeroSection } from "@/sections/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Descrição da Home",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutWigetSection />
        <BenefitsCard />
      </main>
    </>
  );
}
