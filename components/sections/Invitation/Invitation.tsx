import Section from "@/components/ui/Section";

import InvitationHeading from "./InvitationHeading";
import InvitationContent from "./InvitationContent";

export default function Invitation() {
  return (
    <Section
      id="invitation"
      className="paper"
    >
      <InvitationHeading />

      <InvitationContent />
    </Section>
  );
}