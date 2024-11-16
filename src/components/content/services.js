import Image from "next/image";
import { divClass, h2Class, pClass, listClass } from "@/components/constant";

export const Services = () => {
  return (
    <div className={divClass}>
      <h2 className={h2Class}>Services</h2>
      <Image src="/services.jpg" alt="Services" width={1279} height={854} />
      <ul className={listClass}>
        <li>Psychiatric Evaluation</li>
        <li>
          One Hour Medication Management and Psychodynamic/Supportive
          Psychotherapy
        </li>
        <li>Half Hour Medication Management and Supportive Psychotherapy</li>
        <li>Psychopharmacology and Medication Management</li>
      </ul>

      <br />

      <h2 className={h2Class}>Fees and Insurance</h2>
      <p className={pClass}>
        At this time, we do not accept insurance at ABH. This allows for more
        discretion and privacy as your personal information is not mandated to
        be reported to any insurance company. This policy also allows for
        treatment to proceed in the way that you and your treater deem necessary
        without imposed restrictions and requirements by an insurance company.
        In the future, we intend to take insurance for those patients who prefer
        this method of payment.
      </p>
    </div>
  );
};
