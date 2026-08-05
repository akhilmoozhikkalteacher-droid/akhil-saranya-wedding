"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import LuxuryCard from "@/components/ui/LuxuryCard";
import GoldDivider from "@/components/ui/GoldDivider";

interface Props {
  date: string;
  title: string;
  text: string;
  layout: "text" | "photo";
  image?: string;
  delay?: number;
}

export default function StoryPage({
  date,
  title,
  text,
  layout,
  image,
  delay = 0,
}: Props) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 60,
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
        duration: 0.9,
        delay,
      }}
      className="mx-auto max-w-6xl"
    >
      {/* =======================================================
          TEXT PAGE
      ======================================================= */}

      {layout === "text" && (
        <div className="py-12 md:py-20">

          <div className="mx-auto max-w-3xl text-center">

            <p
              className="
                text-xs
                uppercase
                tracking-[0.55em]
                text-[#C8A96A]
              "
            >
              {date}
            </p>

            <h2
              className="
                mt-8
                font-heading
                text-5xl
                md:text-7xl
              "
            >
              {title}
            </h2>

            <GoldDivider className="mt-12" />

            <p
              className="
                mx-auto
                mt-12
                max-w-2xl
                text-xl
                leading-10
                text-neutral-600
              "
            >
              {text}
            </p>

          </div>

        </div>
      )}

      {/* =======================================================
          PHOTO PAGE
      ======================================================= */}

      {layout === "photo" && (
        <div className="space-y-12">

          {image && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 1.08,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
              }}
              className="
                overflow-hidden
                rounded-[40px]
                border
                border-[#E8DFD5]
                bg-white
                shadow-[0_30px_80px_rgba(0,0,0,0.12)]
              "
            >
              <Image
                src={image}
                alt={title}
                width={1800}
                height={1200}
                className="
                  h-auto
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.03]
                "
              />
            </motion.div>
          )}

          <LuxuryCard
            hover={false}
            className="px-10 py-14 md:px-20 md:py-20"
          >
            <div className="mx-auto max-w-3xl text-center">

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.55em]
                  text-[#C8A96A]
                "
              >
                {date}
              </p>

              <h2
                className="
                  mt-8
                  font-heading
                  text-5xl
                  md:text-6xl
                "
              >
                {title}
              </h2>

              <GoldDivider className="mt-12" />

              <p
                className="
                  mx-auto
                  mt-12
                  text-lg
                  leading-9
                  text-neutral-600
                "
              >
                {text}
              </p>

            </div>
          </LuxuryCard>

        </div>
      )}
    </motion.section>
  );
}