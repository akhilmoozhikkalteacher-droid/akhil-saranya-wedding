"use client";

import { motion } from "framer-motion";

export default function InvitationHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="text-center"
    >
      <p
        className="
          text-xs
          uppercase
          tracking-[0.55em]
          text-[#C8A96A]
        "
      >
        Chapter I
      </p>

      <h2
        className="
          mt-6
          font-heading
          text-5xl
          md:text-6xl
          leading-none
        "
      >
        The Invitation
      </h2>

      <div
        className="
          mx-auto
          mt-8
          h-px
          w-24
          bg-[#C8A96A]/60
        "
      />
    </motion.div>
  );
}