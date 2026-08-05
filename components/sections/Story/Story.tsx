"use client";

import Section from "@/components/ui/Section";

import PaperTexture from "@/components/ui/PaperTexture";
import FloatingGlow from "@/components/ui/FloatingGlow";
import Reveal from "@/components/ui/Reveal";
import Floating from "@/components/ui/Floating";

import { Couple } from "@/components/characters";

import StoryHeading from "./StoryHeading";
import StoryTimeline from "./StoryTimeline";
import StoryQuote from "./StoryQuote";

export default function Story() {
  return (
    <Section
      id="story"
      className="relative overflow-hidden paper"
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

      <div className="relative z-10">

        {/* Couple Illustration */}

        <Reveal>

          <div className="mb-20 flex justify-center">

            <Floating
              amplitude={8}
              duration={6}
            >
              <Couple
                pose="story"
                size="hero"
              />
            </Floating>

          </div>

        </Reveal>

        {/* Chapter Heading */}

        <Reveal delay={0.08}>

          <StoryHeading />

        </Reveal>

        {/* Story Book */}

        <Reveal delay={0.16}>

          <div className="mx-auto mt-24 max-w-5xl">

            <StoryTimeline />

          </div>

        </Reveal>

        {/* Closing */}

        <Reveal delay={0.24}>

          <div className="mx-auto mt-28 max-w-4xl">

            <StoryQuote />

          </div>

        </Reveal>

      </div>

    </Section>
  );
}