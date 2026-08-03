import Section from "@/components/ui/Section";

import StoryHeading from "./StoryHeading";
import StoryTimeline from "./StoryTimeline";

export default function Story() {
  return (
    <Section id="story" className="paper">
      <StoryHeading />
      <StoryTimeline />
    </Section>
  );
}
