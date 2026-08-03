import { wedding } from "@/data/wedding";

export default function VenueDetails() {
  return (
    <div className="mx-auto mt-16 grid max-w-4xl gap-10 sm:grid-cols-3">
      {wedding.arrival.map((item) => (
        <div key={item.label} className="text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-[#C8A96A]">
            {item.label}
          </p>
          <p className="mt-3 leading-7 text-neutral-600">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}
