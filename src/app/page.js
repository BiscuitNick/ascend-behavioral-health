// import Image from "next/image";
// import { divClass, h2Class, pClass } from "@/components/constant";

import { Welcome } from "@/components/content/welcome";
import { OurClinic } from "@/components/content/our-clinic";
import { Clinicians } from "@/components/content/clinicians";

export default function Page() {
  return (
    <>
      <Welcome />
      <OurClinic />
      <Clinicians />
    </>
  );
}
