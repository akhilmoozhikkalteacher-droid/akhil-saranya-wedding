"use client";

import Section from "@/components/ui/Section";

import PaperTexture from "@/components/ui/PaperTexture";
import FloatingGlow from "@/components/ui/FloatingGlow";
import FloralDivider from "@/components/ui/FloralDivider";
import Reveal from "@/components/ui/Reveal";

import WishesHeading from "./WishesHeading";
import WishesIntro from "./WishesIntro";
import WishesForm from "./WishesForm";
import WishesWall from "./WishesWall";
import WishesQuote from "./WishesQuote";

export default function Wishes() {
  return (
    <Section
      id="wishes"
      className="relative overflow-hidden paper"
    >
      {/* Background */}

      <PaperTexture />

      <FloatingGlow
        className="
          -top-36
          left-1/2
          -translate-x-1/2
        "
        size={640}
      />

      <FloatingGlow
        className="
          bottom-0
          right-0
        "
        color="#355D50"
        size={340}
      />

      <div className="relative z-10">

        {/* Heading */}

        <Reveal delay={0.08}>
          <WishesHeading />
        </Reveal>

        {/* Introduction */}

        <Reveal delay={0.16}>

          <div className="mt-16">
            <WishesIntro />
          </div>

        </Reveal>

        <FloralDivider />

        {/* Form */}

        <Reveal delay={0.24}>

          <div className="mx-auto max-w-3xl">
            <WishesForm />
          </div>

        </Reveal>

        <FloralDivider />

        {/* Guestbook */}

        <Reveal delay={0.32}>

          <div className="mx-auto mt-6 max-w-5xl">
            <WishesWall />
          </div>

        </Reveal>

        <FloralDivider />

        {/* Closing */}

        <Reveal delay={0.40}>

          <div className="mx-auto max-w-3xl">
            <WishesQuote />
          </div>

        </Reveal>

      </div>

    </Section>
  );
}