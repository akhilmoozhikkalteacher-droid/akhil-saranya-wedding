"use client";

import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";

export default function VenueMap() {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(
    wedding.mapEmbedQuery
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      whileHover={{
        y: -4,
      }}
      className="
        mx-auto
        mt-20
        max-w-5xl
        overflow-hidden
        rounded-[36px]
        border
        border-[#E8DFD5]
        bg-white/70
        backdrop-blur-lg
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
      "
    >
      <iframe
        src={src}
        title={`Map to ${wedding.venue}`}
        width="100%"
        height="420"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block w-full"
      />
    </motion.div>
  );
}