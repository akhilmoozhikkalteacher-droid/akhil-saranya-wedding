"use client";

import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";
import Monogram from "@/components/ui/Monogram";

interface InvitationCardProps {
  visible: boolean;
}

export default function InvitationCard({
  visible,
}: InvitationCardProps) {
  const ceremony = wedding.ceremony;

  return (
    <motion.div
      initial={{
        y: 190,
        opacity: 0,
        rotate: 0,
        scale: 0.96,
      }}
      animate={{
        y: visible ? -86 : 190,
        opacity: visible ? 1 : 0,
        rotate: visible ? -1.4 : 0,
        scale: visible ? 1 : 0.96,
      }}
      transition={{
        duration: 1.45,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        absolute
        left-1/2
        top-[11%]
        z-10
        w-[86%]
        max-w-[305px]
        -translate-x-1/2
      "
    >
      {/* Shadow */}

      <motion.div
        animate={{
          opacity: visible ? 0.25 : 0.12,
          scale: visible ? 1 : 0.97,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          absolute
          inset-0
          rounded-[30px]
          bg-black/20
          blur-2xl
        "
      />

      {/* Card */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-[#E8DCC8]
          bg-[#FFFDF9]
          px-10
          py-12
          shadow-[0_22px_55px_rgba(0,0,0,0.15)]
        "
      >
        {/* Paper Glow */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),transparent_65%)]
          "
        />

        {/* Inner Border */}

        <div
          className="
            absolute
            inset-3
            rounded-[24px]
            border
            border-[#D8BE87]/35
          "
        />

        {/* Top Highlight */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-16
            bg-gradient-to-b
            from-white/70
            via-white/20
            to-transparent
          "
        />

        {/* Decorative Corners */}

        <div className="absolute left-6 top-6 h-7 w-7 rounded-tl-xl border-l border-t border-[#D8BE87]/45" />
        <div className="absolute right-6 top-6 h-7 w-7 rounded-tr-xl border-r border-t border-[#D8BE87]/45" />
        <div className="absolute bottom-6 left-6 h-7 w-7 rounded-bl-xl border-b border-l border-[#D8BE87]/45" />
        <div className="absolute bottom-6 right-6 h-7 w-7 rounded-br-xl border-b border-r border-[#D8BE87]/45" />

        <div className="relative z-10 flex flex-col items-center text-center">

          <Monogram size="sm" />

          <p
            className="
              mt-8
              text-[11px]
              uppercase
              tracking-[0.45em]
              text-neutral-500
            "
          >
            {wedding.invitation.opening}
          </p>

          <h2
            className="
              mt-10
              font-script
              text-5xl
              gold-gradient
              md:text-6xl
            "
          >
            {wedding.groom.name}
          </h2>

          <p className="my-4 text-2xl text-[#C8A96A]">
            ♥
          </p>

          <h2
            className="
              font-script
              text-5xl
              gold-gradient
              md:text-6xl
            "
          >
            {wedding.bride.name}
          </h2>

          <div
            className="
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
              mt-7
              text-[11px]
              uppercase
              tracking-[0.36em]
              text-neutral-500
            "
          >
            Request the Pleasure of Your Company
          </p>

          <p
            className="
              mt-9
              font-heading
              text-3xl
              text-[#355D50]
            "
          >
            {ceremony.date}
          </p>

          <p
            className="
              mt-2
              text-[11px]
              uppercase
              tracking-[0.35em]
              text-neutral-500
            "
          >
            {ceremony.day}
          </p>

          <div
            className="
              mt-8
              h-px
              w-20
              bg-gradient-to-r
              from-transparent
              via-[#C8A96A]
              to-transparent
            "
          />

          <p
            className="
              mt-8
              text-[10px]
              uppercase
              tracking-[0.40em]
              text-neutral-500
            "
          >
            {ceremony.title}
          </p>

          <p
            className="
              mt-4
              font-heading
              text-2xl
              text-[#355D50]
            "
          >
            {ceremony.time}
          </p>

          <p
            className="
              mt-6
              text-[10px]
              uppercase
              tracking-[0.36em]
              text-neutral-500
            "
          >
            {ceremony.venue}
          </p>

          <p
            className="
              mt-2
              text-sm
              tracking-[0.08em]
              text-neutral-500
            "
          >
            {ceremony.place}
          </p>

          <div
            className="
              mt-10
              h-px
              w-20
              bg-gradient-to-r
              from-transparent
              via-[#C8A96A]
              to-transparent
            "
          />

          <p
            className="
              mt-8
              text-sm
              leading-7
              text-neutral-600
            "
          >
            {wedding.invitation.closing}
          </p>

        </div>
      </div>
    </motion.div>
  );
}