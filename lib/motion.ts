import type { Variants } from "framer-motion";

/* ==========================================================
 * Timing
 * ========================================================== */

export const duration = {
  fast: 0.45,
  normal: 0.75,
  slow: 1.1,
};

/* ==========================================================
 * Fade
 * ========================================================== */

export const fade: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      duration: duration.normal,
      ease: "easeOut",
    },
  },
};

/* ==========================================================
 * Fade Up
 * ========================================================== */

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: duration.normal,
      ease: "easeOut",
    },
  },
};

/* ==========================================================
 * Fade + Blur
 * ========================================================== */

export const fadeBlur: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: duration.slow,
      ease: "easeOut",
    },
  },
};

/* ==========================================================
 * Scale In
 * ========================================================== */

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: duration.normal,
      ease: "easeOut",
    },
  },
};

/* ==========================================================
 * Stagger Container
 * ========================================================== */

export const stagger: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

/* ==========================================================
 * Stagger Item
 * ========================================================== */

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: duration.normal,
      ease: "easeOut",
    },
  },
};

/* ==========================================================
 * Hero Image
 * ========================================================== */

export const heroImage: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.04,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

/* ==========================================================
 * Floating
 * ========================================================== */

export const floating = {
  animate: {
    y: [0, -6, 0],
  },

  transition: {
    duration: 5,
    repeat: Infinity,
    repeatType: "loop" as const,
    ease: "easeInOut",
  },
};