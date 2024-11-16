import Image from "next/image";
import { divClass, h2Class, pClass } from "@/components/constant";

export const Welcome = () => {
  return (
    <>
      <Image
        src="/therapy.jpg"
        alt="our clinic"
        width={1280}
        height={853}
        className="w-full max-w-[1024px] m-auto mt-5"
      />

      <div className={divClass}>
        <h2 className={h2Class}>Welcome to Ascend Behavioral Health</h2>

        <p className={pClass}>
          Ascend Behavioral Health provides traditional behavioral healthcare in
          a comfortable, confidential, non-judgmental setting. We want to
          provide services in a way that harkens back to a simpler time. Our
          offices are located in a beautiful, historic home converted to
          individual offices. We want our setting to be cozy and safe for
          patients to be able to truly open up about their needs. We also
          provide telepsychiatry services in the event that is needed.
        </p>
        <p className={pClass}>
          Our goal is to provide patient-centered services allowing the time
          necessary to fully understand the patient, his/her needs and how to
          create the most beneficial treatment plan so that the patient can live
          a fuller, more complete and happier life.
        </p>
        <Image src="/sunset.jpg" alt="our clinic" width={1280} height={848} />
      </div>
    </>
  );
};
