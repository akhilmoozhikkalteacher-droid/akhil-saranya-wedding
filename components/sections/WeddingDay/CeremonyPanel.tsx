"use client";

import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";

import LuxuryCard from "@/components/ui/LuxuryCard";
import GoldDivider from "@/components/ui/GoldDivider";

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
    >
      <LuxuryCard className="p-12">

        <div className="text-center">

          {/* Icon */}

          <div className="text-5xl">
            💍
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

          <GoldDivider className="mt-10" />

          {/* Event Details */}

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

          {/* Description */}

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

          {/* Location Button */}

          <motion.a
            whileHover={{
              scale: 1.04,
              y: -2,
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
              justify-center
              rounded-full
              bg-[#355D50]
              px-10
              py-5
              text-base
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:bg-[#2E5146]
            "
          >
            📍 View Ceremony Location
          </motion.a>

        </div>

      </LuxuryCard>
    </motion.section>
  );
}