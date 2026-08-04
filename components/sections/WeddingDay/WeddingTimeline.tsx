"use client";

import { motion } from "framer-motion";
import { wedding } from "@/data/wedding";

export default function WeddingTimeline() {
  const ceremony = wedding.ceremony;
  const reception = wedding.reception;

  return (
    <section className="mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="text-xs uppercase tracking-[0.45em] text-[#C8A96A]">
          The Celebration Timeline
        </p>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-[#D8BE87]/50" />

          {/* Ceremony */}

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative mb-20"
          >
            <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-[#C8A96A] ring-8 ring-[#FFFDF8]" />

            <div className="mx-auto mt-8 max-w-md rounded-[28px] border border-[#E8DFD5] bg-white p-8 shadow-lg">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
                {ceremony.time}
              </p>

              <h3 className="mt-4 font-heading text-3xl">
                {ceremony.title}
              </h3>

              <p className="mt-3 text-neutral-600">
                {ceremony.venue}
              </p>
            </div>
          </motion.div>

          {/* Reception */}

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative"
          >
            <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-[#355D50] ring-8 ring-[#FFFDF8]" />

            <div className="mx-auto mt-8 max-w-md rounded-[28px] border border-[#E8DFD5] bg-white p-8 shadow-lg">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
                {reception.time}
              </p>

              <h3 className="mt-4 font-heading text-3xl">
                {reception.title}
              </h3>

              <p className="mt-3 text-neutral-600">
                {reception.venue}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}