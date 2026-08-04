"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

import DecorativeCorner from "./DecorativeCorner";

interface LuxuryCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function LuxuryCard({
  children,
  className,
  hover = true,
}: LuxuryCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.015,
              boxShadow:
                "0 40px 100px rgba(0,0,0,0.12)",
            }
          : undefined
      }
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 18,
      }}
      className={clsx(
        `
        relative
        overflow-hidden
        rounded-[42px]
        border
        border-[#D8BE87]/35
        bg-[#FFFDF9]
        shadow-[0_30px_80px_rgba(0,0,0,0.08)]
        `,
        className
      )}
    >
      {/* Ambient Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(200,169,106,0.12),transparent_70%)]
        "
      />

      {/* Top Highlight */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-20
          bg-gradient-to-b
          from-white/70
          via-white/20
          to-transparent
        "
      />

      {/* Inner Border */}

      <div
        className="
          pointer-events-none
          absolute
          inset-3
          rounded-[34px]
          border
          border-[#D8BE87]/30
        "
      />

      {/* Decorative Corners */}

      <DecorativeCorner position="top-left" />
      <DecorativeCorner position="top-right" />
      <DecorativeCorner position="bottom-left" />
      <DecorativeCorner position="bottom-right" />

      {/* Content */}

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}