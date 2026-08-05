"use client";

import { motion } from "framer-motion";

import LuxuryCard from "@/components/ui/LuxuryCard";
import GoldDivider from "@/components/ui/GoldDivider";

interface WishCardProps {
  name: string;
  message: string;
  delay?: number;
}

export default function WishCard({
  name,
  message,
  delay = 0,
}: WishCardProps) {
  return (
    <motion.article
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
      }}
      transition={{
        duration: 0.6,
        delay,
      }}
    >
      <LuxuryCard
        className="h-full px-8 py-10"
      >
        <div className="flex h-full flex-col">

          {/* Quote */}

          <div
            className="
              text-5xl
              leading-none
              text-[#C8A96A]/40
            "
          >
            “
          </div>

          <p
            className="
              mt-4
              flex-1
              leading-8
              text-neutral-600
            "
          >
            {message}
          </p>

          <GoldDivider className="mt-8" />

          <div className="mt-8">

            <p
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-neutral-400
              "
            >
              With Blessings
            </p>

            <h3
              className="
                mt-3
                font-heading
                text-2xl
              "
            >
              {name}
            </h3>

          </div>

        </div>
      </LuxuryCard>
    </motion.article>
  );
}