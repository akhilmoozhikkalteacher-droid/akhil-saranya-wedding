"use client";

import { motion } from "framer-motion";

export default function HeroOverlay() {
  return (
    <motion.div
      className="absolute inset-0 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.4,
        delay: 0.2,
        ease: "easeOut",
      }}
    >
      {/* Overall soft darkening */}
      <div className="absolute inset-0 bg-black/18" />

      {/* Top gradient for monogram */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/60
          via-black/15
          to-black/55
        "
      />

      {/* Side vignette */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/18
          via-transparent
          to-black/18
        "
      />

      {/* Soft radial focus on the couple */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.18)_100%)]
        "
      />
    </motion.div>
  );
}