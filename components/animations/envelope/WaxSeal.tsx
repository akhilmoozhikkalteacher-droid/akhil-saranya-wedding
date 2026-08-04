"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

    setTimeout(() => {
      onOpen();
    }, 350);
  }

  return (
    <AnimatePresence>
      {!broken && (
        <motion.button
          type="button"
          onClick={handleClick}
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: [1, 1.03, 1],
          }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.88,
          }}
          exit={{
            opacity: 0,
            scale: 0.45,
            rotate: 15,
            filter: "blur(2px)",
          }}
          transition={{
            scale: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
            default: {
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="
            absolute
            left-1/2
            top-[48%]
            z-40
            flex
            h-20
            w-20
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            overflow-hidden
            cursor-pointer
            select-none
          "
        >
          {/* Glow */}

          <div
            className="
              absolute
              inset-0
              rounded-full
              bg-[#C8A96A]/25
              blur-xl
            "
          />

          {/* Wax */}

          <div
            className="
              absolute
              inset-0
              rounded-full
              border
              border-[#A87433]
              bg-gradient-to-br
              from-[#E3C17A]
              via-[#C8944B]
              to-[#98652D]
              shadow-[0_12px_28px_rgba(0,0,0,0.25)]
            "
          />

          {/* Inner Ring */}

          <div
            className="
              absolute
              inset-[7px]
              rounded-full
              border
              border-[#F6E4BB]/35
            "
          />

          {/* Highlight */}

          <div
            className="
              absolute
              left-4
              top-4
              h-5
              w-5
              rounded-full
              bg-white/35
              blur-sm
            "
          />

          {/* Emboss */}

          <div
            className="
              relative
              z-10
              flex
              items-center
              justify-center
            "
          >
            <Monogram size="sm" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}