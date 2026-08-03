"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
      }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
    >
      <p className="text-xs tracking-[0.35em] uppercase text-white">
        Scroll
      </p>

      <div className="mx-auto mt-3 h-10 w-px bg-white/70" />
    </motion.div>
  );
}