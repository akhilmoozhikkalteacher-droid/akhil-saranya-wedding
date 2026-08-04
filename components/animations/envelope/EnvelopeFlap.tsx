"use client";

import { motion } from "framer-motion";

interface EnvelopeFlapProps {
  opened: boolean;
}

export default function EnvelopeFlap({
  opened,
}: EnvelopeFlapProps) {
  return (
    <motion.div
      initial={false}
      animate={{
        rotateX: opened ? -178 : 0,
        z: opened ? -4 : 0,
      }}
      transition={{
        duration: 1.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "top center",
        perspective: 1600,
      }}
      className="
        absolute
        inset-x-0
        top-0
        z-30
        h-[126px]
      "
    >
      {/* Triangular Flap */}

      <svg
        viewBox="0 0 360 126"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="flapGradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#FCF8F2"
            />
            <stop
              offset="100%"
              stopColor="#ECE0CF"
            />
          </linearGradient>
        </defs>

        <path
          d="M0 0 L360 0 L180 126 Z"
          fill="url(#flapGradient)"
          stroke="#E4D5BF"
          strokeWidth="1.4"
        />
      </svg>

      {/* Top highlight */}

      <div
        className="
          absolute
          left-0
          top-0
          h-px
          w-full
          bg-white/70
        "
      />

      {/* Fold shadow */}

      <motion.div
        animate={{
          opacity: opened ? 0.18 : 0.08,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-black/10
        "
      />

      {/* Inner highlight */}

      <motion.div
        animate={{
          opacity: opened ? 0.45 : 0.2,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          absolute
          left-1/2
          top-4
          h-12
          w-32
          -translate-x-1/2
          rounded-full
          bg-white/20
          blur-xl
        "
      />
    </motion.div>
  );
}