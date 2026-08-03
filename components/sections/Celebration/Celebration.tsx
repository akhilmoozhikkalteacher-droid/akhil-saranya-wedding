import Section from "@/components/layout/Section";

import CelebrationHeading from "./CelebrationHeading";
import CelebrationDetails from "./CelebrationDetails";

export default function Celebration() {
  return (
    <Section id="celebration">
      <CelebrationHeading />
      <CelebrationDetails />
    </Section>
  );
}