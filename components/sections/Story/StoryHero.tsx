"use client";

import { motion } from "framer-motion";

import LuxuryCard from "@/components/ui/LuxuryCard";
import GoldDivider from "@/components/ui/GoldDivider";

export default function StoryHero() {
  return (
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
    >
      <LuxuryCard
        hover={false}
        className="px-10 py-14 md:px-16 md:py-16"
      >
        <div className="text-center">

          <p
            className="
              text-xs
              uppercase
              tracking-[0.45em]
              text-[#C8A96A]
            "
          >
            A Journey of Love
          </p>

          <h2
            className="
              mt-6
              font-script
              text-5xl
              gold-gradient
              md:text-6xl
            "
          >
            Every Forever
            <br />
            Begins With Hello
          </h2>

          <GoldDivider className="mt-10" />

          <p
            className="
              mx-auto
              mt-10
              max-w-3xl
              text-lg
              leading-9
              text-neutral-600
            "
          >
            Every unforgettable journey begins with a single
            moment. Ours started with a simple meeting that
            blossomed into friendship, deepened into love,
            and now leads us to a lifetime together.
          </p>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              leading-8
              text-neutral-500
            "
          >
            These cherished moments tell the story of how two
            hearts found each other and discovered that the
            greatest adventure is not found in distant places,
            but in walking through life hand in hand.
          </p>

          <GoldDivider className="mt-12" />

          <p
            className="
              mt-10
              font-script
              text-4xl
              gold-gradient
            "
          >
            "Every love story is beautiful,
            <br />
            but ours is our favourite."
          </p>

        </div>
      </LuxuryCard>
    </motion.div>
  );
}