"use client";

import { motion } from "framer-motion";

interface Props {
  opened: boolean;
}

export default function EnvelopeFlap({
  opened,
}: Props) {
  return (
    <motion.div
      animate={{
        rotateX: opened ? -180 : 0,
      }}
      transition={{
        duration: 0.8,
      }}
      style={{
        transformOrigin: "top",
      }}
      className="
        absolute
        top-0
        left-0
        h-1/2
        w-full
        rounded-t-xl
        bg-[#EFE6D8]
        border-x
        border-t
        border-[#E6D6BE]
      "
    />
  );
}