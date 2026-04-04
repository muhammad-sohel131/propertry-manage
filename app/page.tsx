import { ClientReviews } from "@/components/home/ClientReview";
import { FAQ } from "@/components/home/FAQ";
import { GettingStarted } from "@/components/home/GettingStarted";
import { HeroSection } from "@/components/home/Hero";
import { OurServices } from "@/components/home/OurServices";
import { OurTools } from "@/components/home/OutTools";
import { PricingSection } from "@/components/home/PricingSection";
import { TrustedBy } from "@/components/home/TrustedBy";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedBy />
      <OurServices />
      <PricingSection />
      <OurTools />
      <GettingStarted />
      <WhyChooseUs />
      <ClientReviews />
      <FAQ />
    </main>
  );
}
