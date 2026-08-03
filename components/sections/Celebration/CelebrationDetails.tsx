import { wedding } from "@/data/wedding";

export default function CelebrationDetails() {
  return (
    <div className="mx-auto mt-20 max-w-2xl text-center">

      <p className="uppercase tracking-[0.35em] text-[#C8A96A]">
        Wedding Ceremony
      </p>

      <h3 className="mt-10 font-heading text-6xl">
        21
      </h3>

      <p className="mt-2 text-2xl font-heading">
        August 2026
      </p>

      <p className="mt-2 uppercase tracking-[0.3em] text-neutral-500">
        Friday
      </p>

      <div className="mx-auto my-12 h-px w-20 bg-[#E8DFD5]" />

      <p className="text-lg">
        <strong>Time</strong>
      </p>

      <p className="mt-2 text-neutral-600">
        {wedding.time}
      </p>

      <div className="mx-auto my-12 h-px w-20 bg-[#E8DFD5]" />

      <p className="text-lg">
        <strong>Venue</strong>
      </p>

      <h3 className="mt-4 font-heading text-4xl">
        {wedding.venue}
      </h3>

      <p className="mt-2 text-neutral-600">
        {wedding.place}
      </p>

      <a
        href={wedding.map}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-block
          mt-12
          rounded-full
          border
          border-[#C8A96A]
          px-8
          py-4
          text-sm
          uppercase
          tracking-[0.25em]
          transition-all
          duration-300
          hover:bg-[#C8A96A]
          hover:text-white
        "
      >
        Get Directions
      </a>

    </div>
  );
}