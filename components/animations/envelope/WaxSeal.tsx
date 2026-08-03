"use client";

import { motion } from "framer-motion";
import Monogram from "@/components/ui/Monogram";

interface WaxSealProps {
  onOpen: () => void;
}

export default function WaxSeal({
  onOpen,
}: WaxSealProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.92,
      }}
      transition={{
        duration: 0.2,
      }}
      onClick={onOpen}
      className="
        absolute
        left-1/2
        top-1/2
        z-40
        flex
        h-20
        w-20
        -translate-x-1/2
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        bg-[#C8A96A]
        shadow-2xl
      "
    >
      <Monogram size="sm" />
    </motion.button>
  );
}