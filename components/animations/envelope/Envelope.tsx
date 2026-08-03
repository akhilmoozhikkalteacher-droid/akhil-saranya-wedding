"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import EnvelopeFront from "./EnvelopeFront";
import EnvelopeFlap from "./EnvelopeFlap";
import WaxSeal from "./WaxSeal";
import InvitationCard from "./InvitationCard";

type Phase =
  | "idle"
  | "opening"
  | "lifting"
  | "revealing"
  | "finished";

interface EnvelopeProps {
  onFinished: () => void;
}

export default function Envelope({
  onFinished,
}: EnvelopeProps) {

  const [phase, setPhase] =
    useState<Phase>("idle");

  const opened =
    phase === "opening" ||
    phase === "lifting" ||
    phase === "revealing";

  const showInvitation =
    phase === "lifting" ||
    phase === "revealing";

  function handleOpen() {
    if (phase !== "idle") return;

    setTimeout(() => {
      setPhase("opening");
    }, 220);
  }

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    switch (phase) {

      case "opening":
        timer = setTimeout(() => {
          setPhase("lifting");
        }, 950);
        break;

      case "lifting":
        timer = setTimeout(() => {
          setPhase("revealing");
        }, 1500);
        break;

      case "revealing":
        timer = setTimeout(() => {
          setPhase("finished");
          onFinished();
        }, 1200);
        break;
    }

    return () => clearTimeout(timer);

  }, [phase, onFinished]);

  return (

    <AnimatePresence>

      {phase !== "finished" && (

        <motion.div

          initial={{
            opacity: 0,
            scale: 0.96,
          }}

          animate={{
            opacity:
              phase === "revealing"
                ? 0
                : 1,

            scale:
              phase === "revealing"
                ? 1.06
                : 1,
          }}

          exit={{
            opacity: 0,
          }}

          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}

          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            overflow-hidden
            bg-[#F9F5EF]
          "
        >

          {/* Ambient Background */}

          <div className="absolute inset-0 overflow-hidden pointer-events-none">

            <motion.div

              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.12, 0.18, 0.12],
              }}

              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}

              className="
                absolute
                left-1/2
                top-1/2
                h-[700px]
                w-[700px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#C8A96A]
                blur-[180px]
              "
            />

            <div
              className="
                absolute
                bottom-0
                left-0
                h-[320px]
                w-[320px]
                rounded-full
                bg-[#355D50]/8
                blur-[150px]
              "
            />

          </div>

          {/* Floating Particles */}

          <div className="absolute inset-0 overflow-hidden pointer-events-none">

            {Array.from({ length: 10 }).map((_, index) => (

              <motion.span

                key={index}

                initial={{
                  opacity: 0.08,
                  y: 40,
                }}

                animate={{
                  opacity: [0.08, 0.3, 0.08],
                  y: [-20, -140],
                  x: [0, index % 2 === 0 ? 12 : -12],
                }}

                transition={{
                  duration: 8 + index,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.6,
                }}

                className="
                  absolute
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#C8A96A]
                "

                style={{
                  left: `${10 + index * 8}%`,
                  bottom: "8%",
                }}

              />

            ))}

          </div>

          {/* Wedding Title */}

          <motion.div

            initial={{
              opacity: 0,
              y: -20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.25,
              duration: 0.8,
            }}

            className="
              absolute
              top-16
              text-center
            "
          >

            <p
              className="
                uppercase
                tracking-[0.45em]
                text-xs
                text-[#C8A96A]
              "
            >
              Wedding Invitation
            </p>

            <h1
              className="
                mt-6
                font-script
                text-6xl
                gold-gradient
              "
            >
              Akhil
            </h1>

            <p className="my-2 text-2xl text-[#C8A96A]">
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
                    {/* Envelope */}

          <motion.div

            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y:
                phase === "idle"
                  ? [0, -8, 0]
                  : 0,

              rotate:
                phase === "idle"
                  ? [0, 0.4, 0, -0.4, 0]
                  : 0,
            }}

            whileHover={
              phase === "idle"
                ? {
                    y: -5,
                    scale: 1.02,
                  }
                : undefined
            }

            transition={{
              opacity: {
                duration: 0.8,
              },

              y: {
                duration: 5,
                repeat:
                  phase === "idle"
                    ? Infinity
                    : 0,
                ease: "easeInOut",
              },

              rotate: {
                duration: 6,
                repeat:
                  phase === "idle"
                    ? Infinity
                    : 0,
                ease: "easeInOut",
              },
            }}

            className="relative w-[min(360px,88vw)]"

            style={{
              aspectRatio: "360 / 250",
            }}
          >

            {/* Soft Halo */}

            <motion.div

              animate={{
                opacity: [0.12, 0.24, 0.12],
                scale: [1, 1.08, 1],
              }}

              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}

              className="
                absolute
                left-1/2
                top-1/2
                -z-10
                h-[420px]
                w-[420px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#C8A96A]
                blur-[90px]
              "
            />

            {/* Invitation */}

            <InvitationCard
              visible={showInvitation}
            />

            {/* Envelope */}

            <EnvelopeFront
              opened={opened}
            />

            {/* Flap */}

            <EnvelopeFlap
              opened={opened}
            />

            {/* Wax Seal */}

            <motion.div

              animate={{
                scale:
                  phase === "idle"
                    ? [1, 1.03, 1]
                    : 1,
              }}

              transition={{
                duration: 3,
                repeat:
                  phase === "idle"
                    ? Infinity
                    : 0,
                ease: "easeInOut",
              }}
            >

              <WaxSeal
                onOpen={handleOpen}
              />

            </motion.div>

                        {/* Open Prompt */}

            <motion.div

              animate={{
                opacity:
                  phase === "idle"
                    ? 1
                    : 0,

                y:
                  phase === "idle"
                    ? 0
                    : 8,
              }}

              transition={{
                duration: 0.35,
              }}

              className="
                absolute
                -bottom-20
                left-1/2
                w-full
                -translate-x-1/2
                text-center
                select-none
              "
            >

              <p
                className="
                  uppercase
                  tracking-[0.45em]
                  text-[11px]
                  text-[#355D50]
                "
              >
                Tap the Wax Seal
              </p>

              <p
                className="
                  mt-2
                  text-[11px]
                  tracking-[0.35em]
                  text-neutral-500
                "
              >
                to Open
              </p>

            </motion.div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  );
}