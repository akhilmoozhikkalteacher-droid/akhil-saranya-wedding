"use client";

import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";

export default function ReceptionContent() {
  return (
    <motion.div
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
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
      }}
      className="mx-auto mt-16 max-w-5xl"
    >
      {/* Introduction */}

      <div className="mx-auto max-w-2xl text-center">

        <p className="leading-9 text-neutral-600">
          Our wedding ceremony will be celebrated in the
          presence of close family and invited guests.
        </p>

        <p className="mt-8 leading-9 text-neutral-600">
          {wedding.reception.invitation}
        </p>

      </div>

      {/* Reception Card */}

      <motion.div
        whileHover={{
          y: -6,
          scale: 1.01,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          relative
          mx-auto
          mt-16
          max-w-4xl
          overflow-hidden
          rounded-[36px]
          border
          border-[#E8DFD5]
          bg-white/70
          px-8
          py-14
          backdrop-blur-lg
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          md:px-14
        "
      >
        {/* Decorative Glow */}

        <div
          className="
            absolute
            left-1/2
            top-0
            h-60
            w-60
            -translate-x-1/2
            rounded-full
            bg-[#C8A96A]/10
            blur-[90px]
          "
        />

        <div className="relative z-10">

          <p className="uppercase tracking-[0.45em] text-xs text-[#C8A96A]">
            Reception
          </p>

          <h3 className="mt-5 font-script text-6xl gold-gradient">
            You're Invited
          </h3>

          <div
            className="
              mx-auto
              mt-10
              h-px
              w-36
              bg-gradient-to-r
              from-transparent
              via-[#C8A96A]
              to-transparent
            "
          />

          {/* Reception Details */}

          <div
            className="
              mt-12
              grid
              gap-10
              md:grid-cols-3
            "
          >

            {/* Date */}

            <div className="text-center">

              <p className="uppercase tracking-[0.35em] text-xs text-neutral-500">
                Date
              </p>

              <h4 className="mt-4 font-heading text-3xl">
                {wedding.reception.date}
              </h4>

              <p className="mt-3 text-neutral-600">
                {wedding.reception.day}
              </p>

            </div>

            {/* Time */}

            <div className="text-center">

              <p className="uppercase tracking-[0.35em] text-xs text-neutral-500">
                Time
              </p>

              <h4 className="mt-4 font-heading text-3xl">
                {wedding.reception.time}
              </h4>

            </div>

            {/* Venue */}

            <div className="text-center">

              <p className="uppercase tracking-[0.35em] text-xs text-neutral-500">
                Venue
              </p>

              <h4 className="mt-4 font-heading text-3xl">
                {wedding.reception.venue}
              </h4>

              <p className="mt-3 text-neutral-600">
                {wedding.reception.subtitle}
              </p>

            </div>

          </div>

          {/* Action Button */}

          <div className="mt-14 flex justify-center">

            <motion.a
              href={wedding.reception.map}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
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
              Open in Google Maps
            </motion.a>

          </div>

        </div>

      </motion.div>

      {/* Closing */}

      <p
        className="
          mx-auto
          mt-14
          max-w-2xl
          text-center
          text-lg
          italic
          leading-8
          text-[#355D50]
        "
      >
        {wedding.reception.closing}
      </p>

    </motion.div>
  );
}