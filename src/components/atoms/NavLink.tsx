import React from 'react';
import Link from "next/link";

interface Link {
  name: string,
  route: string
}

const NavLinks = ({route, name}: Link) => {
  return (
      <Link href={route}>
        {name}
      </Link>
  );
};

export default NavLinks;
