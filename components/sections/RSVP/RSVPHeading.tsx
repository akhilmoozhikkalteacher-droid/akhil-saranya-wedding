export default function RSVPHeading() {
  return (
    <div className="mx-auto max-w-3xl text-center">

      <p
        className="
          uppercase
          tracking-[0.45em]
          text-sm
          text-[#C8A96A]
        "
      >
        Chapter VII
      </p>

      <h2
        className="
          mt-5
          font-heading
          text-5xl
          md:text-6xl
        "
      >
        Will You Join Us?
      </h2>

      <p
        className="
          mx-auto
          mt-6
          max-w-2xl
          leading-8
          text-neutral-600
        "
      >
        Your presence would mean the world to us.
        Kindly let us know whether you'll be joining us
        as we begin this beautiful new chapter together.
      </p>

      <div
        className="
          mx-auto
          mt-10
          h-px
          w-40
          bg-gradient-to-r
          from-transparent
          via-[#C8A96A]
          to-transparent
        "
      />

    </div>
  );
}