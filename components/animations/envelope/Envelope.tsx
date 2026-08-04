"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

import InvitationCard from "./InvitationCard";
import EnvelopeFront from "./EnvelopeFront";
import EnvelopeFlap from "./EnvelopeFlap";
import WaxSeal from "./WaxSeal";

type Phase =
  | "intro"
  | "idle"
  | "opening"
  | "lifting"
  | "pause"
  | "fade"
  | "finished";

interface EnvelopeProps {
  onFinished: () => void;
}

export default function Envelope({
  onFinished,
}: EnvelopeProps) {

  const [phase, setPhase] =
    useState<Phase>("intro");

  const opened =
    phase === "opening" ||
    phase === "lifting" ||
    phase === "pause" ||
    phase === "fade";

  const showInvitation =
    phase === "lifting" ||
    phase === "pause" ||
    phase === "fade";

  function handleOpen() {

    if (phase !== "idle")
      return;

    setPhase("opening");

  }

  /* ---------- Intro ---------- */

  useEffect(() => {

    const timer = setTimeout(() => {
      setPhase("idle");
    }, 900);

    return () => clearTimeout(timer);

  }, []);

  /* ---------- Timeline ---------- */

  useEffect(() => {

    let timer: ReturnType<typeof setTimeout>;

    switch (phase) {

      case "opening":

        timer = setTimeout(() => {
          setPhase("lifting");
        }, 850);

        break;

      case "lifting":

        timer = setTimeout(() => {
          setPhase("pause");
        }, 1400);

        break;

      case "pause":

        timer = setTimeout(() => {
          setPhase("fade");
        }, 600);

        break;

      case "fade":

        timer = setTimeout(() => {

          setPhase("finished");

          onFinished();

        }, 900);

        break;

    }

    return () => {

      if (timer)
        clearTimeout(timer);

    };

  }, [phase, onFinished]);

  return (

    <AnimatePresence>

      {phase !== "finished" && (

        <motion.div

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity:
              phase === "fade"
                ? 0
                : 1,
          }}

          exit={{
            opacity: 0,
          }}

          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}

          className="
            fixed
            inset-0
            z-50
            overflow-hidden
            bg-[#F8F5EF]
          "
        >

          {/* Ambient Light */}

          <div className="absolute inset-0">

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[520px]
                w-[520px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#D6B77C]/10
                blur-[120px]
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),transparent_65%)]
              "
            />

          </div>

          {/* Heading */}

          <motion.div

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity:
                phase === "intro"
                  ? 0
                  : 1,
              y: 0,
            }}

            transition={{
              duration: 0.8,
            }}

            className="
              absolute
              left-1/2
              top-20
              -translate-x-1/2
              text-center
            "
          >

            <p
              className="
                text-xs
                uppercase
                tracking-[0.5em]
                text-[#C8A96A]
              "
            >
              Wedding Invitation
            </p>

            <h1
              className="
                mt-8
                font-script
                text-6xl
                gold-gradient
              "
            >
              Akhil
            </h1>

            <p className="my-3 text-[#C8A96A]">
              ♥
            </p>

            <h1
              className="
                font-script
                text-6xl
                gold-gradient
              "
            >
              Saranya
            </h1>

          </motion.div>

          {/* Envelope Stage */}

          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              pt-20
            "
          >

            <motion.div

              animate={{
                y:
                  phase === "idle"
                    ? [0, -5, 0]
                    : 0,
              }}

              transition={{
                duration: 5,
                repeat:
                  phase === "idle"
                    ? Infinity
                    : 0,
                ease: "easeInOut",
              }}

              className="relative"
            >

              {/* Shadow */}

              <motion.div

                animate={{
                  opacity:
                    phase === "idle"
                      ? [0.18, 0.24, 0.18]
                      : 0.18,

                  scale:
                    phase === "idle"
                      ? [1, 0.95, 1]
                      : 1,
                }}

                transition={{
                  duration: 5,
                  repeat:
                    phase === "idle"
                      ? Infinity
                    : 0,
                }}

                className="
                  absolute
                  left-1/2
                  top-[96%]
                  h-10
                  w-[270px]
                  -translate-x-1/2
                  rounded-full
                  bg-black/15
                  blur-xl
                "
              />

              <div
                className="relative w-[360px]"
                style={{
                  aspectRatio: "360 / 250",
                }}
              >

                                {/* Invitation Card */}

                <InvitationCard
                  visible={showInvitation}
                />

                {/* Envelope Body */}

                <EnvelopeFront
                  opened={opened}
                />

                {/* Envelope Flap */}

                <EnvelopeFlap
                  opened={opened}
                />

                {/* Wax Seal */}

                <WaxSeal
                  onOpen={handleOpen}
                />

              </div>

            </motion.div>

          </div>

          {/* Open Prompt */}

          <motion.div

            animate={{
              opacity:
                phase === "idle"
                  ? 1
                  : 0,

              y:
                phase === "idle"
                  ? [0, -3, 0]
                  : 10,
            }}

            transition={{

              opacity: {
                duration: 0.35,
              },

              y: {
                duration: 2,
                repeat:
                  phase === "idle"
                    ? Infinity
                    : 0,
                ease: "easeInOut",
              },

            }}

            className="
              absolute
              bottom-14
              left-1/2
              -translate-x-1/2
              text-center
              select-none
            "
          >

            <p
              className="
                text-[11px]
                uppercase
                tracking-[0.45em]
                text-[#355D50]
              "
            >
              Click the Wax Seal
            </p>

            <motion.div

              animate={{
                opacity:
                  phase === "idle"
                    ? [0.35, 1, 0.35]
                    : 0,

                scale:
                  phase === "idle"
                    ? [1, 1.25, 1]
                    : 1,
              }}

              transition={{
                duration: 1.8,
                repeat:
                  phase === "idle"
                    ? Infinity
                    : 0,
              }}

              className="
                mx-auto
                mt-3
                h-2
                w-2
                rounded-full
                bg-[#C8A96A]
              "
            />

          </motion.div>

          {/* Final Fade */}

          <motion.div

            animate={{
              opacity:
                phase === "fade"
                  ? 1
                  : 0,
            }}

            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}

            className="
              pointer-events-none
              absolute
              inset-0
              bg-[#F8F5EF]
            "
          />

        </motion.div>

      )}

    </AnimatePresence>

  );

}