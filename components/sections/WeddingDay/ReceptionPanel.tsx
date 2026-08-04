"use client";

import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";

export default function ReceptionPanel() {

  const reception = wedding.reception;

  return (

    <motion.section

      initial={{
        opacity:0,
        y:40,
      }}

      whileInView={{
        opacity:1,
        y:0,
      }}

      viewport={{
        once:true,
      }}

      transition={{
        duration:.9,
      }}

      className="
        relative
        overflow-hidden
        rounded-[42px]
        border
        border-[#D8BE87]/40
        bg-[#FFFDF8]
        p-12
        shadow-[0_30px_80px_rgba(0,0,0,.10)]
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(53,93,80,.10),transparent_70%)]
        "
      />

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
          🎉
        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.45em] text-[#C8A96A]">
          {reception.subtitle}
        </p>

        <h2 className="mt-6 font-heading text-5xl">
          {reception.title}
        </h2>

        <p className="mx-auto mt-8 max-w-2xl leading-8 text-neutral-600">
          {reception.invitation}
        </p>

        <div className="mx-auto mt-10 h-px w-28 bg-gradient-to-r from-transparent via-[#C8A96A] to-transparent"/>

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

        <motion.a

          whileHover={{
            scale:1.05,
          }}

          whileTap={{
            scale:.98,
          }}

          href={reception.map}
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
            font-semibold
            text-white
            shadow-lg
            hover:bg-[#2E5146]
          "
        >
          📍 Open Reception Location
        </motion.a>

        <p className="mx-auto mt-10 max-w-xl italic leading-8 text-neutral-500">
          {reception.closing}
        </p>

      </div>

    </motion.section>

  );

}