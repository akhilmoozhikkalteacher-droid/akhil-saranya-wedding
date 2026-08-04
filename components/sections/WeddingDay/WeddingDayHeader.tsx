"use client";

import { motion } from "framer-motion";

export default function WeddingDayHeader() {
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
      }}
      transition={{
        duration: 0.9,
      }}
      className="mx-auto max-w-4xl text-center"
    >
      {/* Chapter */}

      <p
        className="
          text-xs
          uppercase
          tracking-[0.55em]
          text-[#C8A96A]
        "
      >
        Chapter III
      </p>

      {/* Title */}

      <h2
        className="
          mt-6
          font-heading
          text-5xl
          md:text-7xl
          text-[#2D3A36]
        "
      >
        Wedding Day
      </h2>

      {/* Divider */}

      <div
        className="
          mx-auto
          mt-8
          h-px
          w-32
          bg-gradient-to-r
          from-transparent
          via-[#C8A96A]
          to-transparent
        "
      />

      {/* Description */}

      <p
        className="
          mx-auto
          mt-10
          max-w-2xl
          text-lg
          leading-9
          text-neutral-600
        "
      >
        Every beautiful moment of our special day has been thoughtfully
        arranged to celebrate love, family, togetherness and the beginning
        of our forever.
      </p>
    </motion.div>
  );
}