"use client";

import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";
import Monogram from "@/components/ui/Monogram";

export default function InvitationIntro() {
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
        delay: 0.15,
      }}
      className="mx-auto mt-24 max-w-3xl"
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-[#E8DFD5]
          bg-white/70
          px-10
          py-16
          text-center
          backdrop-blur-lg
          shadow-[0_24px_60px_rgba(0,0,0,0.08)]
        "
      >
        {/* Soft Glow */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.75),transparent_70%)]
          "
        />

        {/* Inner Border */}

        <div
          className="
            absolute
            inset-3
            rounded-[34px]
            border
            border-[#D8BE87]/35
          "
        />

        <div className="relative z-10">

          <Monogram size="md" />

          <p
            className="
              mt-10
              text-[11px]
              uppercase
              tracking-[0.45em]
              text-neutral-500
            "
          >
            {wedding.invitation.opening}
          </p>

          <h3
            className="
              mt-10
              font-script
              text-5xl
              gold-gradient
              md:text-6xl
            "
          >
            {wedding.groom.name}
          </h3>

          <p className="my-4 text-2xl text-[#C8A96A]">
            &
          </p>

          <h3
            className="
              font-script
              text-5xl
              gold-gradient
              md:text-6xl
            "
          >
            {wedding.bride.name}
          </h3>

          <div
            className="
              mx-auto
              mt-10
              h-px
              w-28
              bg-gradient-to-r
              from-transparent
              via-[#C8A96A]
              to-transparent
            "
          />

          <p
            className="
              mx-auto
              mt-10
              max-w-2xl
              text-lg
              leading-9
              text-neutral-600
            "
          >
            {wedding.invitation.message}
          </p>

          <p
            className="
              mx-auto
              mt-10
              max-w-xl
              italic
              leading-8
              text-[#355D50]
            "
          >
            {wedding.invitation.closing}
          </p>

        </div>
      </div>
    </motion.section>
  );
}