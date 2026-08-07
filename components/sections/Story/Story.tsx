"use client";

import Section from "@/components/ui/Section";
import PaperTexture from "@/components/ui/PaperTexture";
import FloatingGlow from "@/components/ui/FloatingGlow";
import StoryHeading from "./StoryHeading";
import StoryTimeline from "./StoryTimeline";
import StoryQuote from "./StoryQuote";

export default function Story() {
  return (
    <Section
      id="story"
      className="
        relative
        overflow-hidden
        paper
        py-24
        md:py-32
      "
    >
      {/* Background */}

      <PaperTexture />

      <FloatingGlow
        className="
          -top-40
          left-1/2
          -translate-x-1/2
        "
        size={680}
      />

      <FloatingGlow
        className="
          bottom-0
          right-0
        "
        color="#355D50"
        size={360}
      />

      <FloatingGlow
        className="
          top-1/2
          left-0
        "
        color="#C8A96A"
        size={260}
      />

      {/* Content */}

      <div className="relative z-10">

        {/* Heading */}

        <div className="px-5 sm:px-6">
          <StoryHeading />
        </div>

        {/* Story Timeline */}

        <div
          className="
            mx-auto
            mt-16
            w-full
            max-w-5xl
            px-5
            sm:px-6
            md:mt-24
          "
        >
          <StoryTimeline />
        </div>

        {/* Closing Quote */}

        <div
          className="
            mx-auto
            mt-20
            w-full
            max-w-4xl
            px-5
            sm:px-6
            md:mt-28
          "
        >
          <StoryQuote />
        </div>

      </div>
    </Section>
  );
}
