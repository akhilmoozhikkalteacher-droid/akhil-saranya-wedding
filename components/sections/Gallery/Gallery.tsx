"use client";

import Section from "@/components/ui/Section";

import PaperTexture from "@/components/ui/PaperTexture";
import FloatingGlow from "@/components/ui/FloatingGlow";
import FloralDivider from "@/components/ui/FloralDivider";
import Reveal from "@/components/ui/Reveal";

import GalleryHeading from "./GalleryHeading";
import GalleryGrid from "./GalleryGrid";

export default function Gallery() {
  return (
    <Section
      id="gallery"
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

      <FloatingGlow
        className="
          top-1/2
          left-0
        "
        color="#C8A96A"
        size={240}
      />

      <div className="relative z-10">

        {/* Heading */}

        <Reveal variant="fade">

          <GalleryHeading />

        </Reveal>

        <FloralDivider />

        {/* Gallery */}

        <Reveal
          variant="scale"
          delay={0.15}
        >

          <div className="mx-auto mt-24 max-w-7xl">

            <GalleryGrid />

          </div>

        </Reveal>

      </div>

    </Section>
  );
}