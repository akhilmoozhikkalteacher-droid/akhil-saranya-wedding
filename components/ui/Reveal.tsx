"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

import {
  fade,
  fadeUp,
  fadeBlur,
  scaleIn,
} from "@/lib/motion";

type RevealVariant =
  | "fade"
  | "fade-up"
  | "fade-blur"
  | "scale";

interface RevealProps {
  children: ReactNode;

  delay?: number;

  duration?: number;

  variant?: RevealVariant;

  once?: boolean;
}

const variants: Record<RevealVariant, Variants> = {
  fade,

  "fade-up": fadeUp,

  "fade-blur": fadeBlur,

  scale: scaleIn,
};

export default function Reveal({
  children,

  delay = 0,

  duration,

  variant = "fade-up",

  once = true,
}: RevealProps) {
  const selected = variants[variant];

  return (
    <motion.div
      variants={selected}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: 0.2,
      }}
      transition={{
        delay,
        duration,
      }}
    >
      {children}
    </motion.div>
  );
}