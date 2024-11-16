import Image from "next/image";
import {
  divClass,
  h2Class,
  pClass,
  phone1,
  phone2,
  email1,
} from "@/components/constant";

export const ContactUs = () => {
  return (
    <div className={divClass}>
      <h2 className={h2Class}>Contact Us</h2>
      <Image src="/contact-us.jpg" alt="our clinic" width={1280} height={851} />
      <p className={`${pClass} text-center`}>
        Let us help you start your journey toward wellness...
      </p>
      <p className={`${pClass} text-center`}>
        Call {phone1} to Make an Appointment
      </p>
      <p className={`${pClass} text-center`}>
        Call, Fax, or Text {phone2} to Initiate Contact
      </p>
      <p className={`${pClass} text-center`}>Or</p>
      <p className={`${pClass} text-center`}>
        Email <a href={`mainto:${email1}`}>{email1}</a> to Make an Appointment
      </p>
    </div>
  );
};
