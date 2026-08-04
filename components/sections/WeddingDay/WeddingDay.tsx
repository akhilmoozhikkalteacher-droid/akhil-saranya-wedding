"use client";

import Section from "@/components/ui/Section";

import PaperTexture from "@/components/ui/PaperTexture";
import FloatingGlow from "@/components/ui/FloatingGlow";
import FloralDivider from "@/components/ui/FloralDivider";
import Reveal from "@/components/ui/Reveal";

import WeddingDayHeader from "./WeddingDayHeader";
import InvitationIntro from "./InvitationIntro";
import CoupleIllustration from "./CoupleIllustration";
import CeremonyPanel from "./CeremonyPanel";
import WeddingTimeline from "./WeddingTimeline";
import ReceptionPanel from "./ReceptionPanel";
import ClosingNote from "./ClosingNote";

export default function WeddingDay() {
  return (
    <Section
      id="wedding-day"
      className="relative overflow-hidden paper"
    >
      {/* Paper Texture */}

      <PaperTexture />

      {/* Floating Background Lights */}

      <FloatingGlow
        className="
          -top-44
          left-1/2
          -translate-x-1/2
        "
        size={700}
      />

      <FloatingGlow
        className="
          bottom-0
          right-0
        "
        color="#355D50"
        size={520}
      />

      <div className="relative z-10">

        {/* Chapter */}

        <Reveal>
          <WeddingDayHeader />
        </Reveal>

        {/* Invitation */}

        <Reveal delay={0.05}>
          <div className="mt-16">
            <InvitationIntro />
          </div>
        </Reveal>

        {/* Couple */}

        <Reveal delay={0.1}>
          <div className="-mt-16 flex justify-center">
            <CoupleIllustration />
          </div>
        </Reveal>

        <FloralDivider />

        {/* Ceremony */}

        <Reveal delay={0.15}>
          <div className="mx-auto max-w-3xl">
            <CeremonyPanel />
          </div>
        </Reveal>

        <FloralDivider />

        {/* Timeline */}

        <Reveal delay={0.2}>
          <div className="mx-auto mt-6 max-w-4xl">
            <WeddingTimeline />
          </div>
        </Reveal>

        <FloralDivider />

        {/* Reception */}

        <Reveal delay={0.25}>
          <div className="mx-auto max-w-4xl">
            <ReceptionPanel />
          </div>
        </Reveal>

        <FloralDivider />

        {/* Closing */}

        <Reveal delay={0.3}>
          <div className="mx-auto max-w-3xl">
            <ClosingNote />
          </div>
        </Reveal>

      </div>

    </Section>
  );
}