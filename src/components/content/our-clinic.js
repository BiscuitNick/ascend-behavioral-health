import Image from "next/image";
import { divClass, h2Class, pClass } from "@/components/constant";

export const OurClinic = () => {
  return (
    <div className={divClass}>
      <h2 className={h2Class}>Our Clinic</h2>
      <Image src="/our-clinic.jpg" alt="our clinic" width={1280} height={851} />
      <p className={pClass}>
        Ascend Behavioral Health is a new outpatient clinic in Cincinnati for
        the treatment of mental and behavioral health conditions. We strive to
        provide the best quality of care to each and every patient. We strive to
        do so in the context of a quaint, historic building so that any patient
        who comes to us can be assured of comfortable and beautiful surroundings
        in the hope that he or she feels best able to open up and share their
        needs and goals. We strive to work as a team with each patient so that
        the patient is fully informed, involved and empowered. We strive to have
        each and every patient feel like a valued person and not just another
        number.
      </p>
      <p className={pClass}>
        Please allow us the opportunity to work with you. Call today to schedule
        an appointment so you might start on your own individualized journey
        toward health and wellness.
      </p>
    </div>
  );
};
