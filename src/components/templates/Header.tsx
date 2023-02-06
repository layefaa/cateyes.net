import React from 'react';
import {Navbar} from "@/components/organisms";

const Header: React.FC = () => {
  return (
      <div className={`relative `}>
        <Navbar/>
        {/*<NavigationBox/>*/}
      </div>
  );
};

export default Header;
