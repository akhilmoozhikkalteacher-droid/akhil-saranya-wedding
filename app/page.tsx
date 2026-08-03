"use client";

import { useState } from "react";

import Envelope from "@/components/animations/envelope";
import Hero from "@/components/sections/Hero";
import Invitation from "@/components/sections/Invitation";
import Story from "@/components/sections/Story";
import Celebration from "@/components/sections/Celebration";
import Venue from "@/components/sections/Venue";
import Gallery from "@/components/sections/Gallery";
import RSVP from "@/components/sections/RSVP";
import Wishes from "@/components/sections/Wishes";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <main>
        <Hero envelopeOpen={opened} />

        <Invitation />
        <Story />
        <Celebration />
        <Venue />
        <Gallery />
        <RSVP />
        <Wishes />
      </main>

      <Footer />

      {!opened && (
        <Envelope
          onFinished={() => setOpened(true)}
        />
      )}
    </>
  );
}