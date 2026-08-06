"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Section from "@/components/ui/Section";
import PaperTexture from "@/components/ui/PaperTexture";
import FloatingGlow from "@/components/ui/FloatingGlow";
import FloralDivider from "@/components/ui/FloralDivider";
import Reveal from "@/components/ui/Reveal";

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
      className="relative overflow-hidden paper"
    >
      {/* Background */}

      <PaperTexture />

      <FloatingGlow
        className="
          -top-36
          left-1/2
          -translate-x-1/2
        "
        size={620}
      />

      <FloatingGlow
        className="
          bottom-0
          right-0
        "
        color="#355D50"
        size={340}
      />

      <div className="relative z-10">

        {/* Heading */}

        <Reveal delay={0.08}>
          <CountdownHeading />
        </Reveal>

        {/* Countdown */}

        <Reveal delay={0.16}>

          {!finished ? (

            <div className="mt-24">

              <CountdownGrid
                time={time}
              />

            </div>

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
                  leading-8
                  text-neutral-600
                "
              >
                Welcome to our wedding celebration.
              </p>

            </motion.div>

          )}

        </Reveal>

        <FloralDivider />

        {/* Details */}

        <Reveal delay={0.24}>

          <div className="mx-auto max-w-4xl">

            <CountdownDetails />

          </div>

        </Reveal>

      </div>

    </Section>
  );
}