import { Welcome } from "@/components/content/welcome";
import { OurClinic } from "@/components/content/our-clinic";
import { Clinicians } from "@/components/content/clinicians";
import { Services } from "@/components/content/services";
import { ContactUs } from "@/components/content/contact-us";

export default function Page() {
  return (
    <>
      <Welcome />
      <OurClinic />
      <Clinicians />
      <Services />
      <ContactUs />
    </>
  );
}
