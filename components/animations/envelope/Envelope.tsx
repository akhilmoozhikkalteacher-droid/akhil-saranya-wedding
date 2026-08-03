"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import EnvelopeFront from "./EnvelopeFront";
import EnvelopeFlap from "./EnvelopeFlap";
import WaxSeal from "./WaxSeal";
import InvitationCard from "./InvitationCard";

interface Props {
  onFinished: () => void;
}

export default function Envelope({
  onFinished,
}: Props) {
  const [opened, setOpened] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [finished, setFinished] = useState(false);
  
  function handleOpen() {
  setOpened(true);

  setTimeout(() => {
    setShowCard(true);
  }, 700);

  setTimeout(() => {
    onFinished();
  }, 2600);
}

  return (
    <AnimatePresence>
      {!opened && (
        <motion.div
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
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
          <div
            className="
              relative
              h-[250px]
              w-[360px]
            "
          >
            <InvitationCard visible={showCard} />

            <EnvelopeFront />

            <EnvelopeFlap opened={opened} />

            <WaxSeal onOpen={handleOpen} />

            <p
              className="
                absolute
                bottom-8
                w-full
                text-center
                text-xs
                uppercase
                tracking-[0.35em]
                text-neutral-600
              "
            >
              Tap the Seal
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}