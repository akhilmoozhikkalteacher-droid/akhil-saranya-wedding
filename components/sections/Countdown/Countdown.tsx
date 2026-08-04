"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Section from "@/components/ui/Section";
import { Couple } from "@/components/characters";

import CountdownHeading from "./CountdownHeading";
import CountdownGrid from "./CountdownGrid";
import CountdownDetails from "./CountdownDetails";

import {
  CountdownTime,
  getTimeRemaining,
  isCountdownFinished,
} from "./utils";

export default function Countdown() {

  const [mounted, setMounted] =
    useState(false);

  const [time, setTime] =
    useState<CountdownTime>({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

  useEffect(() => {

    setMounted(true);

    setTime(getTimeRemaining());

    const timer = setInterval(() => {
      setTime(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  if (!mounted) {
    return null;
  }

  const finished =
    isCountdownFinished(time);

  return (

    <Section
      id="countdown"
      className="
        relative
        overflow-hidden
        paper
      "
    >

      {/* Background */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[420px]
            w-[420px]
            -translate-x-1/2
            rounded-full
            bg-[#C8A96A]/8
            blur-[90px]
          "
        />

        <div
          className="
            absolute
            right-0
            top-40
            h-[180px]
            w-[180px]
            rounded-full
            bg-[#C8A96A]/6
            blur-[70px]
          "
        />

      </div>

      <div className="relative z-10">

        {/* Couple */}

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

          className="
            mb-16
            flex
            justify-center
          "
        >

          <motion.div

            animate={{
              y: [0, -6, 0],
            }}

            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}

          >

            <Couple
              pose="countdown"
              size="lg"
              priority
            />

          </motion.div>

        </motion.div>

        <CountdownHeading />

                {!finished ? (

          <CountdownGrid
            time={time}
          />

        ) : (

          <motion.div

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.8,
            }}

            className="
              mt-24
              text-center
            "
          >

            <h3
              className="
                font-script
                text-7xl
                gold-gradient
              "
            >
              Today is the Day!
            </h3>

            <p
              className="
                mt-8
                text-lg
                text-neutral-600
              "
            >
              Welcome to our wedding celebration.
            </p>

          </motion.div>

        )}

        {/* Divider */}

        <div
          className="
            mx-auto
            mt-20
            h-px
            w-48
            bg-gradient-to-r
            from-transparent
            via-[#C8A96A]
            to-transparent
          "
        />

        <CountdownDetails />

      </div>

    </Section>

  );

}