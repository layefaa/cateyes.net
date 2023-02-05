import React from 'react';
import {Logo} from "@/components/atoms";

const Navbar: React.FC = () => {
  return (
      <div className={'flex justify-between items-center w-full z-20 fixed w-screen top-0 '}>
        <div className={`w-[30%]`}>
          <p className={`hidden sm:block`}>Follow</p>
        </div>
        <Logo/>
        <div className={`w-[30%] flex justify-end`}>
          <p>Menu</p>
        </div>

      </div>
  );
};

export default Navbar;
