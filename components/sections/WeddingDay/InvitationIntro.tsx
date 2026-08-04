"use client";

import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";

import Monogram from "@/components/ui/Monogram";
import LuxuryCard from "@/components/ui/LuxuryCard";
import GoldDivider from "@/components/ui/GoldDivider";

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
      <LuxuryCard className="px-10 py-16">

        <div className="text-center">

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
            &
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

          <GoldDivider className="mt-10" />

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

      </LuxuryCard>
    </motion.section>
  );
}