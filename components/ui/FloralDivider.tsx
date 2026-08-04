"use client";

import { motion } from "framer-motion";

export default function FloralDivider() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="my-20 flex items-center justify-center"
    >
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D8BE87]/50 to-transparent" />

      <div
        className="
          mx-8
          text-2xl
          text-[#C8A96A]
          select-none
        "
      >
        ❦
      </div>

      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D8BE87]/50 to-transparent" />
    </motion.div>
  );
}