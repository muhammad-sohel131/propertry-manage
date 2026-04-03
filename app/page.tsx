import { HeroSection } from "@/components/home/Hero";
import { OurServices } from "@/components/home/OurServices";
import { PricingSection } from "@/components/home/PricingSection";
import { TrustedBy } from "@/components/home/TrustedBy";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedBy />
      <OurServices />
      <PricingSection />
    </main>
  );
}
