"use client";

import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";
import Paper from "@/components/animations/envelope/Paper";

export default function CountdownDetails() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.8,
        delay: 0.25,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mt-16 flex justify-center"
    >
      <Paper
        animated={false}
        className="
          w-full
          max-w-xl
          px-10
          py-10
        "
      >
        <div className="text-center">

          <p
            className="
              text-xs
              uppercase
              tracking-[0.4em]
              text-[#C8A96A]
            "
          >
            Wedding Ceremony
          </p>

          <h3
            className="
              mt-6
              font-heading
              text-4xl
            "
          >
            {wedding.date}
          </h3>

          <p
            className="
              mt-3
              uppercase
              tracking-[0.3em]
              text-neutral-500
            "
          >
            {wedding.day}
          </p>

          <div
            className="
              mx-auto
              mt-8
              h-px
              w-24
              bg-gradient-to-r
              from-transparent
              via-[#C8A96A]
              to-transparent
            "
          />

          <p
            className="
              mt-8
              text-2xl
              font-heading
              text-[#355D50]
            "
          >
            {wedding.time}
          </p>

          <p
            className="
              mt-6
              text-lg
              font-medium
              text-neutral-700
            "
          >
            {wedding.venue}
          </p>

          <p
            className="
              mt-2
              text-neutral-500
            "
          >
            {wedding.place}
          </p>

        </div>
      </Paper>
    </motion.div>
  );
}