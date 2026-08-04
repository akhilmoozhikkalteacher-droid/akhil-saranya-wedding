"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CoupleIllustration() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        scale: 0.92,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mt-24 flex justify-center"
    >
      <div className="relative">

        {/* Glow */}

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

        <Image
          src="/images/couple.png"
          alt="Akhil and Saranya"
          width={520}
          height={620}
          priority
          className="relative z-10"
        />

      </div>
    </motion.section>
  );
}