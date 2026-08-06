"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{
        opacity: 0,
        scale: 1.06,
      }}
      animate={{
        opacity: 1,
        scale: [1.02, 1.04, 1.02],
      }}
      transition={{
        opacity: {
          duration: 1.6,
          ease: "easeOut",
        },

        scale: {
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
      }}
    >
      <Image
        src="/images/hero/landing.jpg"
        alt="Akhil and Saranya"
        fill
        priority
        quality={95}
        sizes="100vw"
        className="
          select-none
          object-cover
          object-center
        "
      />
    </motion.div>
  );
}