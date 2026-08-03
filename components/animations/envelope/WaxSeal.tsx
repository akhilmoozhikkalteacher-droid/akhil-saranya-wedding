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
    }, 420);
  }

  return (
    <AnimatePresence>

      {!broken && (

        <motion.button
          type="button"
          onClick={handleClick}

          initial={{
            scale: 1,
          }}

          animate={{
            scale: [1, 1.03, 1],
            rotate: [0, 0.4, 0, -0.4, 0],
          }}

          whileHover={{
            scale: 1.08,
            y: -3,
          }}

          whileTap={{
            scale: 0.88,
            rotate: -6,
          }}

          exit={{
            opacity: 0,
            scale: 0.45,
            rotate: 18,
            filter: "blur(3px)",
          }}

          transition={{
            scale: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },

            rotate: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },

            opacity: {
              duration: 0.35,
            },

            default: {
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            },
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
            overflow-hidden
            rounded-full
            cursor-pointer
            select-none
          "
        >

          {/* Ambient Glow */}

          <motion.div

            animate={{
              opacity: [0.12, 0.25, 0.12],
              scale: [1, 1.08, 1],
            }}

            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            className="
              absolute
              inset-0
              rounded-full
              bg-[#C8A96A]
              blur-xl
            "
          />

          {/* Seal */}

          <div
            className="
              absolute
              inset-0
              rounded-full
              border
              border-[#B88E45]
              bg-gradient-to-br
              from-[#E5C686]
              via-[#C89A56]
              to-[#9C6A32]
              shadow-[0_14px_30px_rgba(0,0,0,0.25)]
            "
          />

          {/* Inner Ring */}

          <div
            className="
              absolute
              inset-[6px]
              rounded-full
              border
              border-[#F5D89A]/35
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

          {/* Bottom Shadow */}

          <div
            className="
              absolute
              bottom-2
              left-1/2
              h-3
              w-10
              -translate-x-1/2
              rounded-full
              bg-black/10
              blur-md
            "
          />

          {/* Wax Texture */}

          <div
            className="
              absolute
              inset-2
              rounded-full
              bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_70%)]
            "
          />

          {/* Monogram */}

          <div className="relative z-10">

            <Monogram size="sm" />

          </div>

        </motion.button>

      )}

    </AnimatePresence>
  );
}