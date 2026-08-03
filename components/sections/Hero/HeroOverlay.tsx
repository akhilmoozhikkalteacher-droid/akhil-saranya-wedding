export default function HeroOverlay() {
  return (
    <>
      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 bg-gradient-to-b
                      from-black/55
                      via-black/10
                      to-black/65" />

      <div className="absolute inset-0 bg-gradient-to-r
                      from-black/20
                      via-transparent
                      to-black/20" />
    </>
  );
}