"use client";

import { motion } from "framer-motion";
import Monogram from "@/components/ui/Monogram";

interface Props {
  visible: boolean;
}

export default function InvitationCard({
  visible,
}: Props) {
  return (
    <motion.div
      initial={{
        y: 170,
        opacity: 0,
      }}
      animate={{
        y: visible ? -40 : 170,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.9,
        ease: "easeInOut",
      }}
      className="
        absolute
        left-1/2
        top-10
        z-10
        h-[270px]
        w-[300px]
        -translate-x-1/2
        rounded-xl
        border
        border-[#E8DFD5]
        bg-[#FFFDF9]
        shadow-2xl
        flex
        flex-col
        items-center
        justify-center
        px-8
      "
    >
      <Monogram size="sm" />

      <p className="mt-8 text-xs uppercase tracking-[0.4em] text-neutral-500">
        Together with our families
      </p>

      <h2 className="mt-8 font-script text-5xl gold-gradient">
        Akhil
      </h2>

      <p className="my-2 text-[#C8A96A]">♥</p>

      <h2 className="font-script text-5xl gold-gradient">
        Saranya
      </h2>
    </motion.div>
  );
}