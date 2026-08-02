interface HeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function Heading({
  eyebrow,
  title,
  subtitle,
}: HeadingProps) {
  return (
    <div className="mb-16 text-center">
      {eyebrow && (
        <p className="mb-4 uppercase tracking-[0.4em] text-sm text-[#C8A96A]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-5xl md:text-6xl font-light">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 max-w-2xl mx-auto text-neutral-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}