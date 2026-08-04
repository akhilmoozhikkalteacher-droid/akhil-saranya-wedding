"use client";

import Section from "@/components/ui/Section";

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
      {/* Background Decorations */}

      <div className="pointer-events-none absolute inset-0">

        {/* Top Glow */}

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[700px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-[#D6B77C]/8
            blur-[140px]
          "
        />

        {/* Bottom Glow */}

        <div
          className="
            absolute
            right-0
            bottom-0
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#355D50]/5
            blur-[120px]
          "
        />

      </div>

      <div className="relative z-10">

        {/* Chapter Header */}

        <WeddingDayHeader />

        {/* Invitation */}

        <div className="mt-16">
          <InvitationIntro />
        </div>

        {/* Couple Illustration */}

        <div className="-mt-8 flex justify-center">
          <CoupleIllustration />
        </div>

        {/* Ceremony */}

        <div className="mx-auto mt-16 max-w-3xl">
          <CeremonyPanel />
        </div>

        {/* Timeline */}

        <div className="mx-auto mt-24 max-w-4xl">
          <WeddingTimeline />
        </div>

        {/* Reception */}

        <div className="mx-auto mt-24 max-w-4xl">
          <ReceptionPanel />
        </div>

        {/* Closing Blessing */}

        <div className="mx-auto mt-28 max-w-3xl">
          <ClosingNote />
        </div>

      </div>
    </Section>
  );
}