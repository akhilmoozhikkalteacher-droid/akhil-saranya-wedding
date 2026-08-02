"use client";

import { useState } from "react";

import Envelope from "@/components/animations/Envelope";
import Hero from "@/components/sections/Hero";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened && <Envelope onOpen={() => setOpened(true)} />}

      <main>
        <Hero />
      </main>
    </>
  );
}