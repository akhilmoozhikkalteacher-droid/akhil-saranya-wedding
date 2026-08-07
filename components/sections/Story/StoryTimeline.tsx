"use client";

import { story } from "@/data/wedding";
import StoryPage from "./StoryPage";

export default function StoryTimeline() {
  return (
    <div
      className="
        space-y-20
        sm:space-y-24
        md:space-y-36
        lg:space-y-44
      "
    >
      {story.map((item, index) => (
        <StoryPage
          key={`${item.date}-${item.title}`}
          date={item.date}
          title={item.title}
          text={item.text}
          layout={item.layout}
          image={item.image}
          delay={index * 0.06}
        />
      ))}
    </div>
  );
}
