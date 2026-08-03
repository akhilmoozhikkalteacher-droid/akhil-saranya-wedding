"use client";

import { motion } from "framer-motion";

interface Props {
  opened: boolean;
}

export default function EnvelopeFlap({
  opened,
}: Props) {
  return (
    <motion.div
      initial={false}
      animate={{
        rotateX: opened ? -118 : 0,
        rotateZ: opened ? 0.5 : 0,
        y: opened ? -3 : 0,
      }}
      transition={{
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        transformOrigin: "top center",
        transformStyle: "preserve-3d",
        perspective: 1600,
      }}
      className="
        absolute
        left-0
        top-0
        h-1/2
        w-full
        overflow-hidden
        z-30
      "
    >
      {/* Main Flap */}

      <div
        className="
          absolute
          inset-0
          rounded-t-[28px]
          border
          border-[#E6D7C1]
          bg-gradient-to-b
          from-[#FCF8F1]
          via-[#F6EDDF]
          to-[#ECE0CF]
          shadow-[0_8px_18px_rgba(0,0,0,0.12)]
        "
      />

      {/* Inner Gold Border */}

      <div
        className="
          absolute
          inset-3
          rounded-t-[22px]
          border
          border-[#D8BE87]/35
        "
      />

      {/* Premium Paper Texture */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.75),transparent_70%)]
          opacity-80
        "
      />

      {/* Top Highlight */}

      <div
        className="
          absolute
          left-0
          top-0
          h-px
          w-full
          bg-white/80
        "
      />

      {/* Fold Shadow */}

      <motion.div
        animate={{
          opacity: opened ? 0.22 : 0.08,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-10
          bg-gradient-to-t
          from-black/15
          via-black/5
          to-transparent
        "
      />

      {/* Side Lighting */}

      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-8
          bg-gradient-to-r
          from-white/20
          to-transparent
        "
      />

      <div
        className="
          absolute
          right-0
          top-0
          h-full
          w-8
          bg-gradient-to-l
          from-black/[0.03]
          to-transparent
        "
      />

      {/* Decorative Corner Details */}

      <div className="absolute left-5 top-5 h-6 w-6 rounded-tl-xl border-l border-t border-[#D8BE87]/40" />

      <div className="absolute right-5 top-5 h-6 w-6 rounded-tr-xl border-r border-t border-[#D8BE87]/40" />

      {/* Ambient Reflection */}

      <motion.div
        animate={{
          opacity: opened
            ? [0.08, 0.16, 0.08]
            : [0.04, 0.08, 0.04],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-0
          bg-white/10
          blur-[50px]
        "
      />

      {/* Inner Shadow */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-black/10
        "
      />
    </motion.div>
  );
}