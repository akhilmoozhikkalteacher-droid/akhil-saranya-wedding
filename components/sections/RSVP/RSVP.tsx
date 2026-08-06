"use client";

import Section from "@/components/ui/Section";

import PaperTexture from "@/components/ui/PaperTexture";
import FloatingGlow from "@/components/ui/FloatingGlow";
import FloralDivider from "@/components/ui/FloralDivider";
import Reveal from "@/components/ui/Reveal";

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

        {/* Heading */}

        <Reveal delay={0.08}>

          <RSVPHeading />

        </Reveal>

        {/* RSVP Form */}

        <Reveal delay={0.16}>

          <div className="mx-auto mt-20 max-w-3xl">

            <RSVPForm />

          </div>

        </Reveal>

        <FloralDivider />

      </div>

    </Section>
  );
}