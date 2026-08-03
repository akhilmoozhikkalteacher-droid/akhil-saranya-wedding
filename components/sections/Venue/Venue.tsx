import Section from "@/components/ui/Section";

import VenueHeading from "./VenueHeading";
import VenueMap from "./VenueMap";
import VenueDetails from "./VenueDetails";

export default function Venue() {
  return (
    <Section id="venue">
      <VenueHeading />
      <VenueMap />
      <VenueDetails />
    </Section>
  );
}
