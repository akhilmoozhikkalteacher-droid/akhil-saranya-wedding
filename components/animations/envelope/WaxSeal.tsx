"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Monogram from "@/components/ui/Monogram";

interface WaxSealProps {
  onOpen: () => void;
}

export default function WaxSeal({
  onOpen,
}: WaxSealProps) {
  const [broken, setBroken] = useState(false);

  function handleClick() {
    if (broken) return;

    setBroken(true);

    // Wait for the seal animation to finish
    setTimeout(() => {
      onOpen();
    }, 420);
  }

  return (
    <AnimatePresence>
      {!broken && (
        <motion.button
          type="button"
          onClick={handleClick}
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.88,
            rotate: -4,
          }}
          exit={{
            opacity: 0,
            scale: 0.55,
            rotate: 10,
            filter: "blur(2px)",
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
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
            border
            border-[#B88E45]
            bg-gradient-to-br
            from-[#D8B16F]
            via-[#C89A56]
            to-[#A8783B]
            shadow-[0_10px_25px_rgba(0,0,0,0.25)]
            cursor-pointer
            select-none
          "
        >
          {/* Soft highlight */}
          <div
            className="
              absolute
              left-3
              top-3
              h-4
              w-4
              rounded-full
              bg-white/30
              blur-sm
            "
          />

          <Monogram size="sm" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}