import React from 'react';
import {Links} from "@/components/molecules";

const NavigationBox = () => {
  return (
      <div className={`filter fixed z-10 h-screen w-screen`}>
        <Links/>
      </div>
  );
};

export default NavigationBox;
