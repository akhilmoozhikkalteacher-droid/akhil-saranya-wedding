import { wedding } from "@/data/wedding";

export default function InvitationContent() {
  return (
    <div className="mx-auto mt-16 max-w-3xl text-center">

      <p className="leading-9 text-neutral-600">

        Together with our beloved families,

      </p>

      <h3 className="font-script gold-gradient mt-12 text-6xl">
        {wedding.groom.name}
      </h3>

      <p className="mt-3 leading-8 text-neutral-600">
        Son of
        <br />
        {wedding.groom.parents}
      </p>

      <p className="mt-12 leading-9 text-neutral-600">

        joyfully invites you

        <br />

        to celebrate his wedding with

      </p>

      <h3 className="font-script gold-gradient mt-12 text-6xl">
        {wedding.bride.name}
      </h3>

      <p className="mt-3 leading-8 text-neutral-600">
        Daughter of
        <br />
        {wedding.bride.parents}
      </p>

      <p className="mt-16 text-lg italic text-[#355D50]">

        as they begin a beautiful new chapter together.

      </p>

    </div>
  );
}