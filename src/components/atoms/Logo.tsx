import React from 'react';
import cateyes from '../../../public/cateyes.svg'
import Image from "next/image";

const Logo = () => {
  return (
      <Image src={cateyes} alt={'logo'} fill priority/>
  );
};

export default Logo;
