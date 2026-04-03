import { GettingStarted } from "@/components/home/GettingStarted";
import { HeroSection } from "@/components/home/Hero";
import { OurServices } from "@/components/home/OurServices";
import { OurTools } from "@/components/home/OutTools";
import { PricingSection } from "@/components/home/PricingSection";
import { TrustedBy } from "@/components/home/TrustedBy";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedBy />
      <OurServices />
      <PricingSection />
      <OurTools />
      <GettingStarted />
    </main>
  );
}
