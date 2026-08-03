"use client";

import { motion } from "framer-motion";

import Section from "@/components/ui/Section";
import { Couple } from "@/components/characters";

import StoryHeading from "./StoryHeading";
import StoryTimeline from "./StoryTimeline";

export default function Story() {
  return (
    <Section
      id="story"
      className="relative overflow-hidden paper"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div
          className="
            absolute
            right-0
            top-20
            h-[460px]
            w-[460px]
            rounded-full
            bg-[#355D50]/5
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            left-10
            bottom-10
            h-[240px]
            w-[240px]
            rounded-full
            bg-[#C8A96A]/8
            blur-[100px]
          "
        />

      </div>

      <div className="relative z-10">

        {/* Couple */}

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
            <Couple
              pose="story"
              size="lg"
              priority={false}
            />
          </motion.div>
        </motion.div>

        {/* Heading */}

        <StoryHeading />

        {/* Timeline */}

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
            delay: 0.2,
            duration: 0.8,
          }}
          className="mt-20"
        >
          <StoryTimeline />
        </motion.div>

      </div>
    </Section>
  );
}