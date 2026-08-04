"use client";

import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";

export default function CeremonyPanel() {
  const ceremony = wedding.ceremony;

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
      className="
        relative
        overflow-hidden
        rounded-[42px]
        border
        border-[#D8BE87]/40
        bg-[#FFFDF8]
        p-12
        shadow-[0_30px_80px_rgba(0,0,0,0.10)]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(200,169,106,0.15),transparent_70%)]
        "
      />

      {/* Border */}

      <div
        className="
          absolute
          inset-3
          rounded-[34px]
          border
          border-[#D8BE87]/30
        "
      />

      <div className="relative z-10 text-center">

        <div className="text-5xl">
          💍
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
          {ceremony.title}
        </p>

        <h2
          className="
            mt-6
            font-heading
            text-5xl
          "
        >
          {ceremony.date}
        </h2>

        <p
          className="
            mt-2
            uppercase
            tracking-[0.35em]
            text-neutral-500
          "
        >
          {ceremony.day}
        </p>

        <div
          className="
            mx-auto
            mt-10
            h-px
            w-28
            bg-gradient-to-r
            from-transparent
            via-[#C8A96A]
            to-transparent
          "
        />

        <div className="mt-10 space-y-8">

          <div>

            <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
              Time
            </p>

            <h3 className="mt-3 font-heading text-3xl text-[#355D50]">
              {ceremony.time}
            </h3>

          </div>

          <div>

            <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
              Venue
            </p>

            <h3 className="mt-3 font-heading text-4xl">
              {ceremony.venue}
            </h3>

            <p className="mt-3 text-neutral-600">
              {ceremony.place}
            </p>

          </div>

        </div>

        <p
          className="
            mx-auto
            mt-10
            max-w-xl
            leading-8
            text-neutral-600
          "
        >
          {ceremony.note}
        </p>

        <motion.a
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.98,
          }}
          href={ceremony.map}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-12
            inline-flex
            items-center
            rounded-full
            bg-[#355D50]
            px-10
            py-5
            text-white
            font-semibold
            shadow-lg
            transition-colors
            hover:bg-[#2E5146]
          "
        >
          📍 View Ceremony Location
        </motion.a>

      </div>
    </motion.section>
  );
}