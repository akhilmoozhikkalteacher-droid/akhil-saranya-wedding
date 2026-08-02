export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="Akhil and Saranya"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
        <div className="max-w-3xl">
          <p className="mb-6 text-lg tracking-[0.35em] uppercase">
            Together with our families
          </p>

          <h1 className="mb-8 text-6xl md:text-8xl font-light">
            Akhil
          </h1>

          <p className="mb-6 text-xl">
            requests the honour of your presence
          </p>

          <p className="mb-10 text-lg">
            at his wedding ceremony with
          </p>

          <h2 className="mb-10 text-5xl md:text-7xl">
            Saranya
          </h2>

          <p className="tracking-[0.3em] uppercase">
            21 August 2026
          </p>
        </div>
      </div>
    </section>
  );
}