import React from 'react';
import Link from "next/link";
import {Logo} from "@/components/atoms";
import {FooterLinks} from "@/components/molecules";

const FooterLinksWithLogo = () => {
  return (
      <div className={'flex flex-col'}>
        <Link href={'/'} className={`relative w-[8rem] h-[4rem]`}>
          <Logo/>
        </Link>
        <div className={`w-fit`}><FooterLinks/></div>
      </div>
  );
};

export default FooterLinksWithLogo;
