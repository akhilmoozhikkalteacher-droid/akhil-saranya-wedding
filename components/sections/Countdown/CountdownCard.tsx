"use client";

import { motion } from "framer-motion";

import AnimatedNumber from "./AnimatedNumber";

interface CountdownCardProps {
  value: number;
  label: string;
}

export default function CountdownCard({
  value,
  label,
}: CountdownCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-[#E7D8C0]
        bg-[#FFFDF8]
        px-6
        py-8
        text-center
        shadow-[0_18px_45px_rgba(0,0,0,0.10)]
      "
    >
      {/* Paper Texture */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.80),transparent_65%)]
          opacity-80
        "
      />

      {/* Inner Gold Border */}

      <div
        className="
          pointer-events-none
          absolute
          inset-3
          rounded-[24px]
          border
          border-[#D8BE87]/35
        "
      />

      {/* Top Highlight */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-14
          bg-gradient-to-b
          from-white/70
          to-transparent
        "
      />

      <div className="relative z-10">

        <div
          className="
            font-heading
            text-6xl
            md:text-7xl
            gold-gradient
          "
        >
          <AnimatedNumber value={value} />
        </div>

        <div
          className="
            mx-auto
            mt-5
            h-px
            w-16
            bg-gradient-to-r
            from-transparent
            via-[#C8A96A]
            to-transparent
          "
        />

        <p
          className="
            mt-5
            text-xs
            uppercase
            tracking-[0.35em]
            text-neutral-500
          "
        >
          {label}
        </p>

      </div>
    </motion.div>
  );
}