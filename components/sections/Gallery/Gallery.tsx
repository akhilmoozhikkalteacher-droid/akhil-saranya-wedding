import Section from "@/components/ui/Section";

import GalleryHeading from "./GalleryHeading";
import GalleryGrid from "./GalleryGrid";

export default function Gallery() {
  return (
    <Section id="gallery" className="paper">
      <GalleryHeading />
      <GalleryGrid />
    </Section>
  );
}
