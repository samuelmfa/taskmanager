import { LandingFooter } from "@/features/home/components/LandingFooter";
import { LandingHero } from "@/features/home/components/LandingHero";
import { LandingNav } from "@/features/home/components/LandingNav";

export default function LandingPage() {
  return (
    <main className="landing-page">
      <LandingNav />
      <LandingHero />
      <LandingFooter />
    </main>
  );
}