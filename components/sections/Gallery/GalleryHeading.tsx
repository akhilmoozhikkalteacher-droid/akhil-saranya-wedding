export default function GalleryHeading() {
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
        Chapter VI
      </p>

      <h2
        className="
          mt-5
          font-heading
          text-5xl
          md:text-6xl
        "
      >
        Captured Moments
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
        Every photograph tells a story. These moments capture
        the laughter, love, and beautiful memories that have
        become part of our journey together.
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