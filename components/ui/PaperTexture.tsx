"use client";

export default function PaperTexture() {
  return (
    <>
      {/* Paper Grain */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.04]
          mix-blend-multiply
        "
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(0,0,0,.18) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(0,0,0,.12) 1px, transparent 1px)
          `,
          backgroundSize: "18px 18px",
        }}
      />

      {/* Top Light */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,.75),transparent_70%)]
        "
      />
    </>
  );
}