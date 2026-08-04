"use client";

import { motion } from "framer-motion";

interface EnvelopeFrontProps {
  opened: boolean;
}

export default function EnvelopeFront({
  opened,
}: EnvelopeFrontProps) {
  return (
    <motion.div
      initial={false}
      animate={{
        y: opened ? 4 : 0,
        scale: opened ? 0.995 : 1,
        boxShadow: opened
          ? "0 28px 65px rgba(0,0,0,0.22)"
          : "0 18px 40px rgba(0,0,0,0.16)",
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        absolute
        inset-0
        overflow-hidden
        rounded-[22px]
        border
        border-[#E6D7C2]
        bg-[#F8F3EB]
      "
    >
      {/* Soft paper lighting */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.75),transparent_65%)]
        "
      />

      {/* Top highlight */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-14
          bg-gradient-to-b
          from-white/65
          via-white/20
          to-transparent
        "
      />

      {/* Bottom depth */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-12
          bg-gradient-to-t
          from-black/[0.05]
          to-transparent
        "
      />

      {/* Center fold */}

      <div
        className="
          absolute
          left-0
          right-0
          top-1/2
          h-px
          bg-[#E2D3BC]
        "
      />

      {/* Left diagonal */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-full
          w-1/2
          origin-bottom-left
          rotate-[33deg]
          border-t
          border-[#E2D3BC]
        "
      />

      {/* Right diagonal */}

      <div
        className="
          absolute
          bottom-0
          right-0
          h-full
          w-1/2
          origin-bottom-right
          -rotate-[33deg]
          border-t
          border-[#E2D3BC]
        "
      />

      {/* Inner pocket shadow */}

      <motion.div
        animate={{
          opacity: opened ? 0.22 : 0.08,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/10
          via-transparent
          to-transparent
        "
      />
    </motion.div>
  );
}