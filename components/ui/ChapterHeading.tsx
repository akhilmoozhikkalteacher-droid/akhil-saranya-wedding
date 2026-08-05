"use client";

import { motion } from "framer-motion";

import GoldDivider from "./GoldDivider";

interface Props {
  chapter: string;
  title: string;
  description?: string;
  subtitle?: string;
}

export default function ChapterHeading({
  chapter,
  title,
  description,
  subtitle,
}: Props) {
  const text = subtitle ?? description;

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
      className="mx-auto max-w-3xl text-center"
    >
      <p
        className="
          text-xs
          uppercase
          tracking-[0.5em]
          text-[#C8A96A]
        "
      >
        {chapter}
      </p>

      <h2
        className="
          mt-6
          font-heading
          text-5xl
          md:text-6xl
        "
      >
        {title}
      </h2>

      {text && (
        <>
          <GoldDivider className="mt-8" />

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-9
              text-neutral-600
            "
          >
            {text}
          </p>
        </>
      )}
    </motion.div>
  );
}