"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{
        opacity: 0,
        scale: 1.05,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1], // Smooth luxury easing
      }}
    >
      <Image
        src="/images/hero/landing.jpg"
        alt="Akhil and Saranya"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center select-none"
      />
    </motion.div>
  );
}