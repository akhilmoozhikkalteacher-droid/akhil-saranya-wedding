"use client";

import Section from "@/components/ui/Section";

import PaperTexture from "@/components/ui/PaperTexture";
import FloatingGlow from "@/components/ui/FloatingGlow";
import FloralDivider from "@/components/ui/FloralDivider";

import GalleryHeading from "./GalleryHeading";
import GalleryGrid from "./GalleryGrid";

export default function Gallery() {
  return (
    <Section
      id="gallery"
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

      {/* Main ambient glow */}

      <FloatingGlow
        className="
          -top-24
          left-1/2
          -translate-x-1/2
          md:-top-36
        "
        size={320}
      />

      {/* Bottom accent */}

      <FloatingGlow
        className="
          bottom-0
          right-0
        "
        color="#355D50"
        size={220}
      />

      {/* Left accent */}

      <FloatingGlow
        className="
          top-1/2
          left-0
        "
        color="#C8A96A"
        size={160}
      />

      <div className="relative z-10">

        {/* Heading */}

        <div className="px-5 sm:px-6">
          <GalleryHeading />
        </div>

        {/* Decorative divider */}

        <div className="mt-12 md:mt-16">
          <FloralDivider />
        </div>

        {/* Gallery */}

        <div
          className="
            mx-auto
            mt-16
            w-full
            max-w-7xl
            px-5
            sm:px-6
            md:mt-24
          "
        >
          <GalleryGrid />
        </div>

      </div>
    </Section>
  );
}