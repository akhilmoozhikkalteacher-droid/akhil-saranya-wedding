"use client";

import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";

import LuxuryCard from "@/components/ui/LuxuryCard";
import GoldDivider from "@/components/ui/GoldDivider";

export default function ClosingNote() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 40,
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
      className="mx-auto max-w-3xl"
    >
      <LuxuryCard
        hover={false}
        className="px-12 py-20"
      >
        <div className="text-center">

          {/* Icon */}

          <div className="text-5xl">
            🤍
          </div>

          {/* Heading */}

          <p
            className="
              mt-8
              text-xs
              uppercase
              tracking-[0.45em]
              text-[#C8A96A]
            "
          >
            With Love
          </p>

          <h2
            className="
              mt-8
              font-script
              text-5xl
              gold-gradient
              md:text-6xl
            "
          >
            Thank You
          </h2>

          <GoldDivider className="mt-10" />

          {/* Message */}

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
            {wedding.reception.closing}
          </p>

          <GoldDivider
            className="mt-12"
            width="w-24"
          />

          {/* Couple Names */}

          <h3
            className="
              mt-12
              font-script
              text-5xl
              gold-gradient
            "
          >
            {wedding.groom.name}
          </h3>

          <p className="my-4 text-2xl text-[#C8A96A]">
            &
          </p>

          <h3
            className="
              font-script
              text-5xl
              gold-gradient
            "
          >
            {wedding.bride.name}
          </h3>

          {/* Final Blessing */}

          <p
            className="
              mx-auto
              mt-10
              max-w-xl
              italic
              leading-8
              text-neutral-500
            "
          >
            May your love, prayers, and blessings
            remain with us as we begin this beautiful
            new chapter together.
          </p>

        </div>
      </LuxuryCard>
    </motion.section>
  );
}