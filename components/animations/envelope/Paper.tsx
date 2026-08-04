"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface PaperProps {
  children: ReactNode;
  className?: string;
  animated?: boolean;
}

export default function Paper({
  children,
  className,
  animated = true,
}: PaperProps) {
  const Component = animated ? motion.div : "div";

  return (
    <Component
      {...(animated && {
        initial: {
          opacity: 0,
          y: 20,
        },
        whileInView: {
          opacity: 1,
          y: 0,
        },
        viewport: {
          once: true,
          amount: 0.25,
        },
        transition: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        },
      })}
      className={clsx(
        `
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-[#E7D8C0]
        bg-[#FFFDF8]
        shadow-[0_18px_45px_rgba(0,0,0,0.12)]
        `,
        className
      )}
    >
      {/* Premium Paper Texture */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-70
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.75),transparent_65%)]
        "
      />

      {/* Inner Gold Border */}

      <div
        className="
          pointer-events-none
          absolute
          inset-3
          rounded-[22px]
          border
          border-[#D8BE87]/35
        "
      />

      {/* Top Highlight */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-16
          bg-gradient-to-b
          from-white/70
          via-white/25
          to-transparent
        "
      />

      {/* Side Lighting */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-full
          w-10
          bg-gradient-to-r
          from-white/20
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-full
          w-10
          bg-gradient-to-l
          from-black/[0.03]
          to-transparent
        "
      />

      {/* Decorative Corners */}

      <div className="pointer-events-none absolute left-5 top-5 h-7 w-7 rounded-tl-xl border-l border-t border-[#D8BE87]/40" />

      <div className="pointer-events-none absolute right-5 top-5 h-7 w-7 rounded-tr-xl border-r border-t border-[#D8BE87]/40" />

      <div className="pointer-events-none absolute left-5 bottom-5 h-7 w-7 rounded-bl-xl border-l border-b border-[#D8BE87]/40" />

      <div className="pointer-events-none absolute right-5 bottom-5 h-7 w-7 rounded-br-xl border-r border-b border-[#D8BE87]/40" />

      {/* Bottom Depth */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-14
          bg-gradient-to-t
          from-black/[0.05]
          via-black/[0.02]
          to-transparent
        "
      />

      {/* Paper Content */}

      <div className="relative z-10">
        {children}
      </div>
    </Component>
  );
}