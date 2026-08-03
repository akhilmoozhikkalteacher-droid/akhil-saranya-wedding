"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 2.8,
        duration: 0.8,
        ease: "easeOut",
      }}
      className="
        absolute
        bottom-10
        left-1/2
        z-30
        -translate-x-1/2
        flex
        flex-col
        items-center
        gap-3
        text-white/80
      "
    >
      <span
        className="
          text-[11px]
          uppercase
          tracking-[0.45em]
          font-light
        "
      >
        Scroll
      </span>

      <div
        className="
          relative
          h-10
          w-6
          rounded-full
          border
          border-white/40
        "
      >
        <motion.div
          animate={{
            y: [4, 18, 4],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1
            h-2
            w-2
            -translate-x-1/2
            rounded-full
            bg-white
          "
        />
      </div>
    </motion.div>
  );
}