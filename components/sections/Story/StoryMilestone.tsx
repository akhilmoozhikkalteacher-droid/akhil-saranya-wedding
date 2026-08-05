"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import LuxuryCard from "@/components/ui/LuxuryCard";
import GoldDivider from "@/components/ui/GoldDivider";

interface Props {
  date: string;
  title: string;
  text: string;
  image: string | null;
  reverse?: boolean;
  delay?: number;
}

export default function StoryMilestone({
  date,
  title,
  text,
  image,
  reverse = false,
  delay = 0,
}: Props) {
  return (
    <div
      className={`
        relative
        grid
        items-center
        gap-14
        lg:grid-cols-2
        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* Timeline Node */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          hidden
          h-5
          w-5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border-4
          border-white
          bg-[#C8A96A]
          shadow-lg
          lg:block
        "
      />

      {/* Image */}

      <motion.div
        initial={{
          opacity: 0,
          x: reverse ? 60 : -60,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay,
        }}
      >
        {image ? (
          <div
            className="
              overflow-hidden
              rounded-[34px]
              border
              border-[#E8DFD5]
              bg-white
              shadow-xl
            "
          >
            <Image
              src={image}
              alt={title}
              width={900}
              height={700}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </div>
        ) : (
          <LuxuryCard className="px-10 py-16 text-center">
            <p
              className="
                font-script
                text-5xl
                gold-gradient
              "
            >
              ♥
            </p>

            <p
              className="
                mt-8
                leading-8
                text-neutral-500
              "
            >
              A treasured memory
            </p>
          </LuxuryCard>
        )}
      </motion.div>

      {/* Content */}

      <motion.div
        initial={{
          opacity: 0,
          x: reverse ? -60 : 60,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: delay + 0.1,
        }}
      >
        <LuxuryCard className="px-10 py-12">

          <p
            className="
              text-xs
              uppercase
              tracking-[0.4em]
              text-[#C8A96A]
            "
          >
            {date}
          </p>

          <h3
            className="
              mt-6
              font-heading
              text-4xl
            "
          >
            {title}
          </h3>

          <GoldDivider className="mt-8" />

          <p
            className="
              mt-8
              leading-9
              text-neutral-600
            "
          >
            {text}
          </p>

        </LuxuryCard>
      </motion.div>

    </div>
  );
}