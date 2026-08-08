"use client";

import Image from "next/image";

import Reveal from "@/components/ui/Reveal";
import Floating from "@/components/ui/Floating";

export default function CoupleIllustration() {
  return (
    <Reveal
      variant="fade-up"
      duration={1}
    >
      <section className="relative mt-24 flex justify-center">
        <Floating
          amplitude={8}
          duration={6}
        >
          <div className="relative">

            {/* Ambient Glow */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[420px]
                w-[420px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#D6B77C]/15
                blur-[120px]
              "
            />

            {/* Couple Illustration */}

            <Image
              src="/images/couple.png"
              alt="Akhil and Saranya"
              width={520}
              height={620}
              priority
              className="
                relative
                z-10
                h-auto
                w-auto
                select-none
                pointer-events-none
              "
            />

          </div>
        </Floating>
      </section>
    </Reveal>
  );
}