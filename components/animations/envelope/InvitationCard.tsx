"use client";

import { motion } from "framer-motion";
import Monogram from "@/components/ui/Monogram";

interface Props {
  visible: boolean;
}

export default function InvitationCard({
  visible,
}: Props) {
  return (
    <motion.div
      initial={{
        y: 170,
        opacity: 0,
        rotate: 0,
        scale: 0.98,
      }}
      animate={{
        y: visible ? -65 : 170,
        opacity: visible ? 1 : 0,
        rotate: visible ? -1.5 : 0,
        scale: visible ? 1 : 0.98,
      }}
      transition={{
        duration: 1.25,
        delay: 0.18,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        absolute
        left-1/2
        top-[15%]
        z-10
        h-[108%]
        w-[85%]
        max-w-[300px]
        -translate-x-1/2
        rounded-2xl
        border
        border-[#E8DFD5]
        bg-[#FFFDF9]
        shadow-[0_40px_90px_rgba(0,0,0,0.22)]
        flex
        flex-col
        items-center
        justify-center
        px-8
      "
    >
      {/* Paper highlight */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/70 via-transparent to-black/[0.03]" />

      <div className="relative z-10 flex flex-col items-center">
        <Monogram size="sm" />

        <p className="mt-8 text-[11px] uppercase tracking-[0.45em] text-neutral-500">
          Together with our families
        </p>

        <h2 className="mt-10 font-script text-5xl gold-gradient md:text-6xl">
          Akhil
        </h2>

        <p className="my-3 text-xl text-[#C8A96A]">
          ♥
        </p>

        <h2 className="font-script text-5xl gold-gradient md:text-6xl">
          Saranya
        </h2>

        <div className="mt-10 h-px w-20 bg-[#C8A96A]/40" />

        <p className="mt-6 text-xs uppercase tracking-[0.35em] text-neutral-500">
          21 August 2026
        </p>
      </div>
    </motion.div>
  );
}