"use client";

import { motion } from "framer-motion";

interface Props {
  opened: boolean;
}

export default function EnvelopeFlap({ opened }: Props) {
  return (
    <motion.div
      initial={false}
      animate={{
        rotateX: opened ? -112 : 0,
        rotateZ: opened ? 0.4 : 0,
        y: opened ? -2 : 0,
      }}
      transition={{
        duration: 1.05,
        ease: [0.22, 1, 0.36, 1], // Luxury easing
      }}
      style={{
        transformOrigin: "top center",
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
      className="
        absolute
        left-0
        top-0
        h-1/2
        w-full
        overflow-hidden
      "
    >
      {/* Flap */}
      <div
        className="
          absolute
          inset-0
          rounded-t-xl
          border
          border-[#E6D6BE]
          bg-gradient-to-b
          from-[#F6EFE5]
          to-[#E8DDCC]
          shadow-md
        "
      />

      {/* Fold highlight */}
      <div
        className="
          absolute
          top-0
          left-0
          h-px
          w-full
          bg-white/70
        "
      />

      {/* Inner shadow */}
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