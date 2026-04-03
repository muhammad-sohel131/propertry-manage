import { HeroSection } from "@/components/home/Hero";
import { OurServices } from "@/components/home/OurServices";
import { TrustedBy } from "@/components/home/TrustedBy";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedBy />
      <OurServices />
    </main>
  );
}
