"use client";

import { AnimatePresence, motion } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
}

export default function AnimatedNumber({
  value,
}: AnimatedNumberProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={value}
        initial={{
          y: 20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: -20,
          opacity: 0,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          inline-block
          min-w-[2ch]
          text-center
          tabular-nums
        "
      >
        {value.toString().padStart(2, "0")}
      </motion.span>
    </AnimatePresence>
  );
}