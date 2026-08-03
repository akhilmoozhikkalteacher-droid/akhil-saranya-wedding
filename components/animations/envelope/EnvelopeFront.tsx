"use client";

import { motion } from "framer-motion";

interface Props {
  opened: boolean;
}

export default function EnvelopeFront({
  opened,
}: Props) {
  return (
    <motion.div
      animate={{
        boxShadow: opened
          ? "0 30px 70px rgba(0,0,0,0.25)"
          : "0 15px 35px rgba(0,0,0,0.15)",
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        absolute
        inset-0
        overflow-hidden
        rounded-2xl
        border
        border-[#E4D4BC]
        bg-gradient-to-b
        from-[#FAF5EE]
        via-[#F5ECDD]
        to-[#EEE1CC]
      "
    >
      {/* Paper Highlight */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-12
          bg-gradient-to-b
          from-white/60
          to-transparent
        "
      />

      {/* Interior shadow */}
      <motion.div
        animate={{
          opacity: opened ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/15
          via-transparent
          to-transparent
        "
      />

      {/* Fold */}
      <div
        className="
          absolute
          left-0
          right-0
          top-1/2
          h-px
          bg-[#E4D4BC]
        "
      />

      {/* Bottom Shadow */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-10
          bg-gradient-to-t
          from-black/5
          to-transparent
        "
      />
    </motion.div>
  );
}