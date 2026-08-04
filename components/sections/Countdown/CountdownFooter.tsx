import { wedding } from "@/data/wedding";

export default function CountdownFooter() {
  return (
    <div className="mt-20 text-center">

      <div className="mx-auto mb-8 h-px w-32 bg-[#C8A96A]/30" />

      <p className="uppercase tracking-[0.35em] text-neutral-500">
        {wedding.day}
      </p>

      <h3 className="mt-4 font-heading text-4xl">
        {wedding.date}
      </h3>

      <p className="mt-6 text-[#355D50] text-lg">
        {wedding.time}
      </p>

      <p className="mt-2 text-neutral-500">
        {wedding.venue}, {wedding.place}
      </p>

    </div>
  );
}