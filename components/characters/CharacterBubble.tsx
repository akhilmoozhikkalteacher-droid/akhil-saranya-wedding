"use client";

interface Props {
  children: React.ReactNode;
}

export default function CharacterBubble({
  children,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        bg-white
        px-8
        py-6
        shadow-xl
        border
        border-[#E8DFD5]
      "
    >
      {children}
    </div>
  );
}