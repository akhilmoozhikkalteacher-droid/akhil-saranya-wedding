import { wedding } from "@/data/wedding";

export default function VenueMap() {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(
    wedding.mapEmbedQuery
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-[24px] border border-[#E8DFD5] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
      <iframe
        src={src}
        title={`Map to ${wedding.venue}`}
        width="100%"
        height="380"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
