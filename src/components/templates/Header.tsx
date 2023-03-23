import React, {lazy} from 'react';
import {Navbar} from "@/components/organisms";

const NavigationBox = lazy(() => import('@/components/organisms/NavigationBox'));

const Header = () => {
  return (
      <header className={`relative`}>
        <Navbar/>
        <NavigationBox/>
      </header>
  );
};

export default Header;
