"use client";

import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";

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
      className="mx-auto mt-32 max-w-3xl text-center"
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[42px]
          border
          border-[#D8BE87]/35
          bg-[#FFFDF9]
          px-12
          py-20
          shadow-[0_25px_70px_rgba(0,0,0,0.08)]
        "
      >
        {/* Glow */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top,rgba(200,169,106,0.12),transparent_70%)]
          "
        />

        {/* Inner Border */}

        <div
          className="
            absolute
            inset-3
            rounded-[34px]
            border
            border-[#D8BE87]/30
          "
        />

        <div className="relative z-10">

          <div className="text-5xl">
            🤍
          </div>

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

          <div
            className="
              mx-auto
              mt-12
              h-px
              w-28
              bg-gradient-to-r
              from-transparent
              via-[#C8A96A]
              to-transparent
            "
          />

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

        </div>
      </div>
    </motion.section>
  );
}