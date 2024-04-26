import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AboutWigetSection } from "@/sections/AboutWigetSection";
import { BenefitsCard } from "@/sections/BenefitsSection";
import { HeroSection } from "@/sections/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback | Collect feedback in a simplified way",
  description:
    "Gain powerful insights with our personalized feedback. Drive your success with actionable, customer-driven data client.",
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
      <Footer />
    </>
  );
}
