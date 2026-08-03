"use client";

import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";

export default function CelebrationDetails() {
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
        duration: 0.8,
      }}
      className="mx-auto mt-20 max-w-3xl"
    >
      <motion.div
        whileHover={{
          y: -6,
          scale: 1.01,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          rounded-[36px]
          border
          border-[#E8DFD5]
          bg-white/70
          px-10
          py-12
          text-center
          backdrop-blur-lg
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        "
      >
        <p
          className="
            uppercase
            tracking-[0.35em]
            text-sm
            text-[#C8A96A]
          "
        >
          Wedding Ceremony
        </p>

        <h3 className="mt-8 font-heading text-7xl gold-gradient">
          21
        </h3>

        <p className="mt-2 font-heading text-3xl">
          August 2026
        </p>

        <p
          className="
            mt-3
            uppercase
            tracking-[0.35em]
            text-neutral-500
          "
        >
          Friday
        </p>

        <div
          className="
            mx-auto
            my-10
            h-px
            w-32
            bg-gradient-to-r
            from-transparent
            via-[#C8A96A]
            to-transparent
          "
        />

        <div className="space-y-8">

          <div>
            <p
              className="
                uppercase
                tracking-[0.3em]
                text-xs
                text-neutral-500
              "
            >
              Time
            </p>

            <p className="mt-3 text-xl font-medium text-[#355D50]">
              {wedding.time}
            </p>
          </div>

          <div>
            <p
              className="
                uppercase
                tracking-[0.3em]
                text-xs
                text-neutral-500
              "
            >
              Venue
            </p>

            <h4 className="mt-3 font-heading text-4xl">
              {wedding.venue}
            </h4>

            <p className="mt-3 text-neutral-600">
              {wedding.place}
            </p>
          </div>

        </div>

        <motion.a
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.98,
          }}
          href={wedding.map}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-12
            inline-flex
            items-center
            justify-center
            rounded-full
            border
            border-[#C8A96A]
            px-10
            py-4
            text-sm
            uppercase
            tracking-[0.3em]
            transition-all
            duration-300
            hover:bg-[#C8A96A]
            hover:text-white
          "
        >
          View Location
        </motion.a>

      </motion.div>
    </motion.div>
  );
}