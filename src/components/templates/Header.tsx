import React from 'react';
import {Navbar, NavigationBox} from "@/components/organisms";

const Header = () => {
  return (
      <header className={`relative `}>
        <Navbar/>
        <NavigationBox/>
      </header>
  );
};

export default Header;
