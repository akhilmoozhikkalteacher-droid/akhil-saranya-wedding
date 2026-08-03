import HeroImage from "./HeroImage";
import HeroOverlay from "./HeroOverlay";
import HeroContent from "./HeroContent";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <HeroImage />
      <HeroOverlay />
      <HeroContent />
      <ScrollIndicator />
    </section>
  );
}