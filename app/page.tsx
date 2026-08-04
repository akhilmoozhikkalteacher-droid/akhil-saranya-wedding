"use client";

import { useState } from "react";

import Envelope from "@/components/animations/envelope/Envelope";
import Hero from "@/components/sections/Hero";
import Welcome from "@/components/sections/Welcome";
import Countdown from "@/components/sections/Countdown";
import WeddingDay from "@/components/sections/WeddingDay";
import Story from "@/components/sections/Story";
import Gallery from "@/components/sections/Gallery";
import RSVP from "@/components/sections/RSVP";
import Wishes from "@/components/sections/Wishes";

import Footer from "@/components/layout/Footer";

export default function Home() {
  const [invitationOpened, setInvitationOpened] = useState(false);

  return (
    <>
      {/* Opening Experience */}
      {!invitationOpened && (
        <Envelope
          onFinished={() => setInvitationOpened(true)}
        />
      )}

      <main className="relative">
        {/* Hero */}
        <Hero envelopeOpen={invitationOpened} />

        <Welcome /> 

        {/* Countdown */}
        <Countdown />

        {/* Wedding Day */}
        <WeddingDay />

        {/* Our Story */}
        <Story />

        {/* Gallery */}
        <Gallery />

        {/* RSVP */}
        <RSVP />

        {/* Wishes */}
        <Wishes />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}