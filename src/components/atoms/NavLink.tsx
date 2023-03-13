'use client'
import React from 'react';
import Link from "next/link";
import {usePathname} from 'next/navigation';
import {MorvaText} from "./index";
import {motion} from "framer-motion";
import {childVariants} from "@/utils/motion";
import {ILink} from "@/interfaces"


const NavLinks = ({route, name}: ILink) => {
  const currentRoute = usePathname();

  return (
      <MorvaText>
        <motion.div variants={childVariants}>
          <Link
              className={` leading-[165%] hover:text-ce-secondary-white text-32 md:text-36 lg:text-48 ${currentRoute === route ? "text-ce-secondary-white " : "text-ce-tertiary-white"}`}
              href={route}>
            {name}
          </Link>
        </motion.div>
      </MorvaText>
  );
};

export default NavLinks;
