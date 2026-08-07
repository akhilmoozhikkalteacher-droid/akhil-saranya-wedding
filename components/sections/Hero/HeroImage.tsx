"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroImage() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
      }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{
          scale: reducedMotion ? 1 : 1.015,
        }}
        animate={{
          scale: reducedMotion ? 1 : 1.035,
        }}
        transition={
          reducedMotion
            ? undefined
            : {
                duration: 24,
                ease: "easeInOut",
              }
        }
      >
        <Image
          src="/images/hero/landing.webp"
          alt="Akhil and Saranya"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="
            select-none
            object-cover
            object-center
          "
        />
      </motion.div>
    </motion.div>
  );
}