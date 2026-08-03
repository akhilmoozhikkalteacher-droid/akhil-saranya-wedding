"use client";

import { motion } from "framer-motion";

import HeroImage from "./HeroImage";
import HeroOverlay from "./HeroOverlay";
import HeroContent from "./HeroContent";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

interface HeroProps {
  envelopeOpen: boolean;
}

export default function Hero({
  envelopeOpen,
}: HeroProps) {
  return (
    <motion.section
      animate={{
        opacity: envelopeOpen ? 1 : 0,
        scale: envelopeOpen ? 1 : 1.03,
      }}
      transition={{
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative h-screen overflow-hidden"
    >
      <HeroImage />

      <HeroOverlay />

      <HeroContent />

      <ScrollIndicator />
    </motion.section>
  );
}