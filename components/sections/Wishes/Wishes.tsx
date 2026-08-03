import Section from "@/components/ui/Section";

import WishesHeading from "./WishesHeading";
import WishesWall from "./WishesWall";

export default function Wishes() {
  return (
    <Section id="wishes" className="paper">
      <WishesHeading />
      <WishesWall />
    </Section>
  );
}
