"use client";

import Section from "@/components/ui/Section";

import PaperTexture from "@/components/ui/PaperTexture";
import FloatingGlow from "@/components/ui/FloatingGlow";
import Reveal from "@/components/ui/Reveal";
import Floating from "@/components/ui/Floating";

import { Akhil } from "@/components/characters";

import RSVPHeading from "./RSVPHeading";
import RSVPForm from "./RSVPForm";

export default function RSVP() {
  return (
    <Section
      id="rsvp"
      className="relative overflow-hidden paper"
    >
      {/* Background */}

      <PaperTexture />

      <FloatingGlow
        className="
          -top-32
          left-1/2
          -translate-x-1/2
        "
        size={620}
      />

      <FloatingGlow
        className="
          bottom-0
          left-0
        "
        color="#355D50"
        size={300}
      />

      <div className="relative z-10">

        {/* Character */}

        <Reveal>
          <div className="mb-14 flex justify-center">

            <Floating
              amplitude={8}
              duration={6}
            >
              <Akhil
                pose="wave"
                size="lg"
              />
            </Floating>

          </div>
        </Reveal>

        {/* Heading */}

        <Reveal delay={0.1}>
          <RSVPHeading />
        </Reveal>

        {/* Form */}

        <Reveal delay={0.2}>
          <div className="mt-20">
            <RSVPForm />
          </div>
        </Reveal>

      </div>
    </Section>
  );
}