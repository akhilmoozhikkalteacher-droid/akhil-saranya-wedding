"use client";

import { motion } from "framer-motion";

interface Props {
  opened: boolean;
}

export default function EnvelopeFront({
  opened,
}: Props) {
  return (
    <motion.div
      initial={false}
      animate={{
        boxShadow: opened
          ? "0 35px 90px rgba(0,0,0,0.28)"
          : "0 18px 45px rgba(0,0,0,0.18)",

        scale: opened ? 1.01 : 1,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        absolute
        inset-0
        overflow-hidden
        rounded-[28px]
        border
        border-[#E6D7C1]
        bg-gradient-to-b
        from-[#FCF8F1]
        via-[#F6EDDF]
        to-[#EEE2D0]
      "
    >
      {/* Premium Paper Texture */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_65%)]
          opacity-80
        "
      />

      {/* Gold Inner Border */}

      <div
        className="
          absolute
          inset-3
          rounded-[22px]
          border
          border-[#D8BE87]/35
        "
      />

      {/* Top Highlight */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-14
          bg-gradient-to-b
          from-white/70
          via-white/20
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
          w-10
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
          w-10
          bg-gradient-to-l
          from-black/[0.03]
          to-transparent
        "
      />

      {/* Center Fold */}

      <motion.div
        animate={{
          opacity: opened ? 0.25 : 0.12,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          absolute
          left-0
          right-0
          top-1/2
          h-px
          bg-[#DCC7A0]
        "
      />

      {/* Interior Shadow */}

      <motion.div
        animate={{
          opacity: opened ? 1 : 0,
        }}
        transition={{
          duration: 0.45,
        }}
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/15
          via-transparent
          to-transparent
        "
      />

      {/* Bottom Depth */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-14
          bg-gradient-to-t
          from-black/[0.05]
          via-black/[0.02]
          to-transparent
        "
      />

      {/* Decorative Corner Lines */}

      <div className="absolute left-5 top-5 h-7 w-7 border-l border-t border-[#D8BE87]/40 rounded-tl-xl" />

      <div className="absolute right-5 top-5 h-7 w-7 border-r border-t border-[#D8BE87]/40 rounded-tr-xl" />

      <div className="absolute left-5 bottom-5 h-7 w-7 border-l border-b border-[#D8BE87]/40 rounded-bl-xl" />

      <div className="absolute right-5 bottom-5 h-7 w-7 border-r border-b border-[#D8BE87]/40 rounded-br-xl" />

      {/* Soft Ambient Glow */}

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
          bg-[#C8A96A]
          blur-[80px]
        "
      />
    </motion.div>
  );
}