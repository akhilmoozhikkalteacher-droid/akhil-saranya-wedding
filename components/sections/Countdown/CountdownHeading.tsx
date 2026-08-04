"use client";

import { motion } from "framer-motion";

export default function CountdownHeading() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
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
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="text-center"
    >
      {/* Chapter */}

      <p
        className="
          text-sm
          uppercase
          tracking-[0.45em]
          text-[#C8A96A]
        "
      >
        Chapter I
      </p>

      {/* Title */}

      <h2
        className="
          mt-5
          font-heading
          text-5xl
          md:text-6xl
        "
      >
        Our Forever Begins In
      </h2>

      {/* Divider */}

      <div
        className="
          mx-auto
          mt-8
          h-px
          w-28
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
          mt-8
          max-w-2xl
          text-lg
          leading-8
          text-neutral-600
        "
      >
        Every passing moment brings us one step closer to
        the beginning of our forever. We can't wait to
        celebrate this beautiful day with you.
      </p>
    </motion.div>
  );
}