"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface FloatingGlowProps {
  className?: string;
  color?: string;
  size?: number;
}

export default function FloatingGlow({
  className,
  color = "#D6B77C",
  size = 420,
}: FloatingGlowProps) {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={clsx(
        "pointer-events-none absolute rounded-full blur-[120px]",
        className
      )}
      style={{
        width: size,
        height: size,
        background: color,
        opacity: 0.08,
      }}
    />
  );
}