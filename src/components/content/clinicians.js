import Image from "next/image";

import { divClass, h2Class, pClass, h3Class } from "@/components/constant";

export const Clinicians = () => {
  return (
    <div className={divClass}>
      <h2 className={h2Class}>Clinicians</h2>
      {/* <Image src="/our-clinic.jpg" alt="our clinic" width={1280} height={851} /> */}

      <div className="grid grid-auto-col">
        <Image
          src="/martha-lee.jpg"
          alt="Martha Lee"
          width={1024}
          height={1173}
          className="max-w-[400px]"
          // className="max-w-[400px]"
        />
        <h3 className={h3Class}>Dr. MarthaLee Walden</h3>
        <span>Psychiatrist</span>
        <p className={pClass}>
          Dr. Walden is a board-certified Psychiatrist who has been practicing
          in the tri-state area for 18 years. She attended Wellesley College
          where she obtained her BA in Molecular Biology. She went on to obtain
          her MD from The University of Louisville School of Medicine in 1989.
          Dr. Walden completed her Internship and Residency programs at the
          prestigious Karl Menninger School of Psychiatry. in 1993.
        </p>
        <p className={pClass}>
          Dr. Walden provides both medication management and individual
          psychodynamic/supportive psychotherapy. She believes that the two go
          hand in hand to heal the whole person. She is also able to collaborate
          with therapists who treat the patients for whom she provides
          medication management. Dr. Walden values her family, her three dogs
          and tries to live the balanced, healthy life she hopes to help her
          patients achieve.
        </p>
      </div>

      <br />

      <div className="grid grid-auto-col">
        <Image
          src="/denise-heyob.jpg"
          alt="Denise Heyob"
          width={209}
          height={351}
          // className="max-w-[400px]"
        />
        <h3 className={h3Class}>Denise Heyob, APRN, PMHNP, BC</h3>
        <span>Psychiatric Nurse Practitioner</span>
        <p className={pClass}>
          Denise Heyob is a board certified psychiatric mental health nurse
          practitioner and a graduate of Northern Kentucky University. She has
          served the mental health population in various roles as caregiver,
          educator and leader for more than 18 years. She attended University of
          Cincinnati where she obtained her Bachelor of Science in Nursing in
          2010. She then obtained her Masters Degree in Nursing Education. Ms.
          Heyob has enjoyed working as a professor for Xavier University in
          Cincinnati, Ohio, and Gateway Technical and Community college in
          Northern Kentucky. Her students, and peers consider her to a great
          mentor and teacher ushering in new generations of nurses.
        </p>
        <p className={pClass}>
          Ms. Heyob&apos;s philosophy in caring for her patients focuses on
          restorative healing from whatever wounds might be uncovered. Ms. Heyob
          believes the mind, body and soul are all interconnected, each
          affecting the other. Maintaining a balance with her clients through
          individualized care planning, psychotherapy and medication management
          for optimal holistic health. We welcome Ms. Heyob to Ascend Behavioral
          Health.
        </p>
      </div>
    </div>
  );
};
