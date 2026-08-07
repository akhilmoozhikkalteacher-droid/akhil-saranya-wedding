"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

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

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function StoryPage({
  date,
  title,
  text,
  layout,
  image,
  delay = 0,
}: Props) {
  return (
    <motion.article
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mx-auto w-full max-w-6xl"
    >
      {/* TEXT PAGE */}

      {layout === "text" && (
        <div className="py-6 sm:py-10 md:py-16">

          <div className="mx-auto max-w-3xl text-center">

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-[#C8A96A]
                sm:text-xs
                sm:tracking-[0.55em]
              "
            >
              {date}
            </p>

            <h2
              className="
                mt-5
                font-heading
                text-4xl
                leading-tight
                sm:text-5xl
                md:mt-8
                md:text-7xl
              "
            >
              {title}
            </h2>

            <GoldDivider className="mt-8 md:mt-12" />

            <p
              className="
                mx-auto
                mt-8
                max-w-2xl
                text-base
                leading-8
                text-neutral-600
                sm:text-lg
                sm:leading-9
                md:mt-12
                md:text-xl
                md:leading-10
              "
            >
              {text}
            </p>

          </div>

        </div>
      )}

      {/* PHOTO PAGE */}

      {layout === "photo" && (
        <div className="space-y-8 sm:space-y-10 md:space-y-12">

          {/* Photograph */}

          {image && (
            <div
              className="
                overflow-hidden
                rounded-[24px]
                border
                border-[#E8DFD5]
                bg-white
                shadow-[0_20px_55px_rgba(0,0,0,0.10)]
                sm:rounded-[30px]
                md:rounded-[40px]
                md:shadow-[0_30px_80px_rgba(0,0,0,0.12)]
              "
            >
              <Image
                src={image}
                alt={title}
                width={1800}
                height={1200}
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 90vw,
                  1000px
                "
                className="
                  block
                  h-auto
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  md:hover:scale-[1.03]
                "
              />
            </div>
          )}

          {/* Story Card */}

          <LuxuryCard
            hover={false}
            className="
              px-6
              py-10
              sm:px-10
              sm:py-12
              md:px-20
              md:py-20
            "
          >
            <div className="mx-auto max-w-3xl text-center">

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.35em]
                  text-[#C8A96A]
                  sm:text-xs
                  sm:tracking-[0.55em]
                "
              >
                {date}
              </p>

              <h2
                className="
                  mt-5
                  font-heading
                  text-4xl
                  leading-tight
                  sm:text-5xl
                  md:mt-8
                  md:text-6xl
                "
              >
                {title}
              </h2>

              <GoldDivider className="mt-8 md:mt-12" />

              <p
                className="
                  mx-auto
                  mt-8
                  text-base
                  leading-8
                  text-neutral-600
                  sm:text-lg
                  sm:leading-9
                  md:mt-12
                "
              >
                {text}
              </p>

            </div>
          </LuxuryCard>

        </div>
      )}
    </motion.article>
  );
}
