"use client";

import { useState } from "react";

import { Envelope } from "@/components/animations/envelope";
import Hero from "@/components/sections/Hero";
import Welcome from "@/components/sections/Welcome";
import Countdown from "@/components/sections/Countdown";
import Invitation from "@/components/sections/Invitation";
import Story from "@/components/sections/Story";
import Celebration from "@/components/sections/Celebration";
import Reception from "@/components/sections/Reception";
import Venue from "@/components/sections/Venue";
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

        {/* Invitation */}
        <Invitation />

        {/* Our Story */}
        <Story />

        {/* Wedding Celebration */}
        <Celebration />

        <Reception />

        {/* Venue */}
        <Venue />

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