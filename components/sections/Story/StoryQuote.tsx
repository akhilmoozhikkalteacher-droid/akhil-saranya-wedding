"use client";

import { motion } from "framer-motion";

import GoldDivider from "@/components/ui/GoldDivider";

export default function StoryQuote() {
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
      <GoldDivider />

      <p
        className="
          mt-14
          font-script
          text-5xl
          leading-relaxed
          gold-gradient
          md:text-6xl
        "
      >
        "Every chapter of our journey
        <br />
        has led us to this beautiful beginning."
      </p>

      <p
        className="
          mx-auto
          mt-12
          max-w-2xl
          text-lg
          leading-9
          text-neutral-600
        "
      >
        As we step into a new beginning,
        we carry with us every smile,
        every memory,
        every blessing,
        and every moment that brought us here.
      </p>

      <GoldDivider className="mt-14" />

      <p
        className="
          mt-14
          font-script
          text-4xl
          gold-gradient
        "
      >
        With Love,
      </p>

      <p
        className="
          mt-3
          font-script
          text-5xl
          gold-gradient
        "
      >
        Akhil &amp; Saranya
      </p>

    </motion.div>
  );
}