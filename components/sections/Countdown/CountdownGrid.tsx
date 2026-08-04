"use client";

import { motion } from "framer-motion";

import CountdownCard from "./CountdownCard";
import {
  CountdownTime,
  countdownLabels,
} from "./utils";

interface CountdownGridProps {
  time: CountdownTime;
}

export default function CountdownGrid({
  time,
}: CountdownGridProps) {
  const values = {
    days: time.days,
    hours: time.hours,
    minutes: time.minutes,
    seconds: time.seconds,
  };

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
        amount: 0.25,
      }}
      transition={{
        duration: 0.8,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        mx-auto
        mt-20
        grid
        max-w-5xl
        grid-cols-2
        gap-6
        md:grid-cols-4
      "
    >
      {countdownLabels.map(({ key, label }) => (
        <CountdownCard
          key={key}
          value={values[key]}
          label={label}
        />
      ))}
    </motion.div>
  );
}