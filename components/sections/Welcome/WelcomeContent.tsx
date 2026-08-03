"use client";

import { motion } from "framer-motion";

import { Couple } from "@/components/characters";

export default function WelcomeContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 1,
      }}
      className="mt-20 flex flex-col items-center"
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Couple
          pose="welcome"
          size="hero"
          priority={false}
        />
      </motion.div>

      <p className="mt-12 max-w-3xl text-center leading-8 text-neutral-600">
        Every love story is unique, and ours is filled with
        cherished memories, laughter, dreams, and countless
        beautiful moments. We are grateful to have you as part
        of this special chapter and hope you enjoy exploring
        our story.
      </p>
    </motion.div>
  );
}