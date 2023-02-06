import React from 'react';
import cateyes from '../../../public/cateyes.svg'
import Image from "next/image";

const Logo: React.FC = () => {
  return (
      <div className={`relative w-[8rem] h-[4rem] md:w-[16.3rem] md:h-[5.2rem]`}>
        <Image src={cateyes} alt={'Cateyes'} fill priority/>
      </div>
  );
};

export default Logo;
