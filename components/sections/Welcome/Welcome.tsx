import Section from "@/components/ui/Section";

import WelcomeHeading from "./WelcomeHeading";
import WelcomeContent from "./WelcomeContent";

export default function Welcome() {
  return (
    <Section
      id="welcome"
      className="paper relative overflow-hidden"
    >
      <WelcomeHeading />

      <WelcomeContent />
    </Section>
  );
}