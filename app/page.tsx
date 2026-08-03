"use client";

import { useState } from "react";

import Envelope from "@/components/animations/envelope";
import Hero from "@/components/sections/Hero";
import Invitation from "@/components/sections/Invitation";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened && (
        <Envelope
          onFinished={() => setOpened(true)}
        />
      )}

      <main>

        <Hero />

        <Invitation />

      </main>
    </>
  );
}