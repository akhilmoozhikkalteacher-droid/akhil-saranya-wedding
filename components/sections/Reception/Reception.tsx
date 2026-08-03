"use client";

import { motion } from "framer-motion";

import Section from "@/components/ui/Section";
import { Couple } from "@/components/characters";

import ReceptionHeading from "./ReceptionHeading";
import ReceptionContent from "./ReceptionContent";

export default function Reception() {
  return (
    <Section
      id="reception"
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
            bg-[#C8A96A]/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            right-0
            bottom-0
            h-[260px]
            w-[260px]
            rounded-full
            bg-[#355D50]/6
            blur-[100px]
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
            <Couple
              pose="reception"
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
          <ReceptionHeading />
        </motion.div>

        {/* Content */}

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
          <ReceptionContent />
        </motion.div>

      </div>
    </Section>
  );
}