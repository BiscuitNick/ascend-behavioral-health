"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, XIcon } from "lucide-react";
import { navHeader, navFooter, hrClass } from "@/components/constant";

const pages = [
  { name: "Home", href: "/" },
  { name: "Our Clinic", href: "/our-clinic" },
  { name: "Clinicians", href: "/clinicians" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact-us" },
];

export const NavigationHeader = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  return (
    <div className={navHeader}>
      <Link href="/" className="uppercase text-xl">
        Ascend Behavioral Health
      </Link>
      <div className="hidden md:grid m-auto grid-flow-col gap-4">
        {pages.map((page, i) => (
          <Link key={i} href={page.href}>
            {page.name}
          </Link>
        ))}
      </div>
      {showNavMenu ? (
        <XIcon
          className="grid md:hidden cursor-pointer"
          onClick={() => setShowNavMenu(!showNavMenu)}
        />
      ) : (
        <Menu
          className="grid md:hidden cursor-pointer"
          onClick={() => setShowNavMenu(!showNavMenu)}
        />
      )}
      {showNavMenu && (
        <div className="absolute grid right-2 top-12 md:hidden p-4 border-2 select-none gap-2 rounded-md bg-white text-black ">
          {pages.map((page, i) => (
            <Link key={i} href={page.href}>
              {page.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export const NavigationFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <hr className={hrClass} />

      <div className={navFooter}>
        <div>
          <Link href="/" className="uppercase">
            Ascend Behavioral Health
          </Link>
          <div>&copy; {currentYear}. All rights reserved</div>
        </div>

        <div className="grid grid-flow-row gap-4">
          {pages.map((page, i) => (
            <Link key={i} href={page.href}>
              {page.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
