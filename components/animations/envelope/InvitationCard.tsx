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
        scale: 0.96,
      }}
      animate={{
        y: visible ? -72 : 170,
        opacity: visible ? 1 : 0,
        rotate: visible ? -1.8 : 0,
        scale: visible ? 1 : 0.96,
      }}
      transition={{
        duration: 1.35,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        absolute
        left-1/2
        top-[14%]
        z-10
        flex
        h-[110%]
        w-[85%]
        max-w-[300px]
        -translate-x-1/2
        flex-col
        items-center
        justify-center
        overflow-hidden
        rounded-[28px]
        border
        border-[#E8DCC8]
        bg-[#FFFDF8]
        shadow-[0_40px_90px_rgba(0,0,0,0.22)]
      "
    >
      {/* Paper Texture */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),transparent_60%)]
          opacity-80
        "
      />

      {/* Gold Border */}

      <div className="absolute inset-3 rounded-[22px] border border-[#D8BE87]/40" />

      {/* Decorative Corners */}

      <div className="absolute left-6 top-6 h-8 w-8 rounded-tl-2xl border-l border-t border-[#D8BE87]/50" />

      <div className="absolute right-6 top-6 h-8 w-8 rounded-tr-2xl border-r border-t border-[#D8BE87]/50" />

      <div className="absolute bottom-6 left-6 h-8 w-8 rounded-bl-2xl border-b border-l border-[#D8BE87]/50" />

      <div className="absolute bottom-6 right-6 h-8 w-8 rounded-br-2xl border-b border-r border-[#D8BE87]/50" />

      {/* Soft Highlight */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-white/70
          via-transparent
          to-black/[0.03]
        "
      />

      {/* Content */}

      <div className="relative z-10 flex flex-col items-center px-8 text-center">

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

        <div className="mt-10 h-px w-24 bg-gradient-to-r from-transparent via-[#C8A96A] to-transparent" />

        <p className="mt-6 text-[11px] uppercase tracking-[0.35em] text-neutral-500">
          Request the Pleasure of Your Company
        </p>

        <p className="mt-8 font-heading text-3xl text-[#355D50]">
          21 August 2026
        </p>

        <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-neutral-500">
          Friday
        </p>

      </div>
    </motion.div>
  );
}