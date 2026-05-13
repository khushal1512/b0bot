import { FeaturesSection } from "@/components/FeaturesSection";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { LandingFooter } from "@/components/LandingFooter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <LandingFooter />
    </>
  );
}
