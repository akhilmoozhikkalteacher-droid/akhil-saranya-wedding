"use client";

import { motion } from "framer-motion";
import { wedding } from "@/data/wedding";

export default function InvitationContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
      className="mx-auto mt-20 max-w-3xl text-center"
    >
      <p className="text-lg leading-9 text-neutral-600">
        Together with our beloved families
      </p>

      <div className="my-10 text-[#C8A96A] text-xl">
        ✦
      </div>

      <h3 className="font-script gold-gradient text-6xl md:text-7xl">
        {wedding.groom.name}
      </h3>

      <p className="mt-4 leading-8 text-neutral-600">
        Son of
        <br />
        {wedding.groom.parents}
      </p>

      <p className="mt-14 leading-9 text-neutral-600">
        joyfully invites you
        <br />
        to celebrate his wedding with
      </p>

      <h3 className="mt-14 font-script gold-gradient text-6xl md:text-7xl">
        {wedding.bride.name}
      </h3>

      <p className="mt-4 leading-8 text-neutral-600">
        Daughter of
        <br />
        {wedding.bride.parents}
      </p>

      <div className="mx-auto my-14 h-px w-20 bg-[#C8A96A]/40" />

      <p className="text-xl italic text-[#355D50] leading-9">
        as they begin
        <br />
        their beautiful journey together.
      </p>
    </motion.div>
  );
}