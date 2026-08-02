"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [opened, setOpened] = useState(false);

  function openInvitation() {
    setOpened(true);

    setTimeout(() => {
      onOpen();
    }, 1700);
  }

  return (
    <AnimatePresence>
      {!opened && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#faf8f5]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            layout
            className="relative w-[340px] h-[230px] rounded-md shadow-2xl overflow-hidden bg-[#f8f3eb]"
          >
            {/* Envelope Body */}

            <div className="absolute inset-0 border border-[#d7c8af]" />

            {/* Flap */}

            <motion.div
              animate={{ rotateX: opened ? -180 : 0 }}
              transition={{ duration: 1.2 }}
              style={{ transformOrigin: "top" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-[#efe5d6]"
            />

            {/* Wax Seal */}

            <button
              onClick={openInvitation}
              className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="h-16 w-16 rounded-full bg-[#c8a96a] flex items-center justify-center shadow-xl"
              >
                <span className="font-serif text-white text-lg tracking-widest">
                  A • S
                </span>
              </motion.div>
            </button>

            {/* Address */}

            <div className="absolute bottom-8 left-0 w-full text-center">
              <p className="text-sm tracking-[0.3em] uppercase text-neutral-600">
                Tap the Seal
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}