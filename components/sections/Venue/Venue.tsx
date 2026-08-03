"use client";

import { motion } from "framer-motion";

import Section from "@/components/ui/Section";
import { Akhil } from "@/components/characters";

import VenueHeading from "./VenueHeading";
import VenueMap from "./VenueMap";
import VenueDetails from "./VenueDetails";

export default function Venue() {
  return (
    <Section
      id="venue"
      className="relative overflow-hidden paper"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div
          className="
            absolute
            left-1/2
            top-10
            h-[540px]
            w-[540px]
            -translate-x-1/2
            rounded-full
            bg-[#355D50]/6
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            left-0
            bottom-0
            h-[260px]
            w-[260px]
            rounded-full
            bg-[#C8A96A]/10
            blur-[110px]
          "
        />

      </div>

      <div className="relative z-10">

        {/* Character */}

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
          className="mb-14 flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 0.5, 0, -0.5, 0],
            }}
            transition={{
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <Akhil
              pose="point-left"
              size="lg"
            />
          </motion.div>
        </motion.div>

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.15,
            duration: 0.8,
          }}
        >
          <VenueHeading />
        </motion.div>

        {/* Map */}

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
            delay: 0.3,
            duration: 0.8,
          }}
          className="mt-20"
        >
          <VenueMap />
        </motion.div>

        {/* Venue Details */}

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
            delay: 0.45,
            duration: 0.8,
          }}
          className="mt-16"
        >
          <VenueDetails />
        </motion.div>

      </div>
    </Section>
  );
}