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
  const [phase, setPhase] = useState<Phase>("idle");

  const opened =
    phase === "opening" ||
    phase === "lifting" ||
    phase === "revealing";

  const showInvitation =
    phase === "lifting" ||
    phase === "revealing";

  function handleOpen() {
    if (phase !== "idle") return;

    setPhase("opening");
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
        }, 1400);
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
            y: 40,
            scale: 0.96,
          }}
          animate={{
            opacity: phase === "revealing" ? 0 : 1,
            scale: phase === "revealing" ? 1.03 : 1,
            y: 0,
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
            paper
          "
        >
          <motion.div
            initial={{
              y: 30,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-[min(360px,88vw)]"
            style={{
              aspectRatio: "360 / 250",
            }}
          >
            <InvitationCard
              visible={showInvitation}
            />

            <EnvelopeFront
              opened={opened}
            />

            <EnvelopeFlap
              opened={opened}
            />

            <WaxSeal
              onOpen={handleOpen}
            />

            <motion.p
              animate={{
                opacity: phase === "idle" ? 1 : 0,
                y: phase === "idle" ? 0 : 8,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                absolute
                bottom-8
                w-full
                text-center
                text-[11px]
                uppercase
                tracking-[0.45em]
                text-neutral-600
                select-none
              "
            >
              Open Invitation
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}