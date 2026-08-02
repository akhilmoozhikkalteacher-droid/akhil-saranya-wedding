import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen">
      <Image
        src="/images/hero/landing.jpg"
        alt="Akhil and Saranya"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-6">

          <p className="uppercase tracking-[0.45em] text-sm mb-6">
            Together with our families
          </p>

          <h1 className="text-7xl md:text-9xl font-light">
            Akhil
          </h1>

          <div className="text-3xl my-5 text-[#d9c08b]">
            ♥
          </div>

          <h2 className="text-6xl md:text-8xl font-light">
            Saranya
          </h2>

          <p className="mt-12 tracking-[0.35em] uppercase">
            21 August 2026
          </p>

        </div>
      </div>
    </section>
  );
}