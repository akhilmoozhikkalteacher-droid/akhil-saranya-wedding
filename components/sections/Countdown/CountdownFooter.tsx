"use client";

import { wedding } from "@/data/wedding";

export default function CountdownFooter() {
  const ceremony = wedding.ceremony;

  return (
    <div className="mt-16 text-center">

      <p className="uppercase tracking-[0.35em] text-neutral-500">
        {ceremony.day}
      </p>

      <h3 className="mt-4 font-heading text-4xl">
        {ceremony.date}
      </h3>

      <p className="mt-6 text-xl text-[#355D50]">
        {ceremony.time}
      </p>

      <p className="mt-6 text-neutral-600">
        {ceremony.venue}
      </p>

      <p className="mt-2 text-neutral-500">
        {ceremony.place}
      </p>

    </div>
  );
}