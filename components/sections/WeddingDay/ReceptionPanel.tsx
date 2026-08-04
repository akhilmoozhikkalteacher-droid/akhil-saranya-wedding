"use client";

import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";

import LuxuryCard from "@/components/ui/LuxuryCard";
import GoldDivider from "@/components/ui/GoldDivider";

export default function ReceptionPanel() {
  const reception = wedding.reception;

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
            🎉
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
            {reception.subtitle}
          </p>

          <h2
            className="
              mt-6
              font-heading
              text-5xl
            "
          >
            {reception.title}
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              leading-8
              text-neutral-600
            "
          >
            {reception.invitation}
          </p>

          <GoldDivider className="mt-10" />

          {/* Reception Details */}

          <div className="mt-10 space-y-8">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
                Time
              </p>

              <h3 className="mt-3 font-heading text-3xl text-[#355D50]">
                {reception.time}
              </h3>

            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
                Venue
              </p>

              <h3 className="mt-3 font-heading text-4xl">
                {reception.venue}
              </h3>

              <p className="mt-3 text-neutral-600">
                {reception.place}
              </p>

            </div>

          </div>

          {/* Location Button */}

          <motion.a
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            href={reception.map}
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
            📍 Open Reception Location
          </motion.a>

          {/* Closing Message */}

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
            {reception.closing}
          </p>

        </div>

      </LuxuryCard>
    </motion.section>
  );
}