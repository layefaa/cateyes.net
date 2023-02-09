'use client'
import React from 'react';
import Link from "next/link";
import {usePathname} from 'next/navigation';
import {MorvaText} from "./index";

interface Link {
  name: string,
  route: string
}

const NavLinks = ({route, name}: Link) => {
  const currentRoute = usePathname();

  return (
      <MorvaText>
        <Link
            className={` hover:text-ce-secondary-white text-32 md:text-36 lg:text-48 ${currentRoute === route ? "text-ce-secondary-white " : "text-ce-tertiary-white"}`}
            href={route}>
          {name}
        </Link>
      </MorvaText>
  );
};

export default NavLinks;
