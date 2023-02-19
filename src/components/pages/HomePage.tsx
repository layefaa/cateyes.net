import React from 'react';
import {Hero, ShortAbout, ShortWorks} from "@/components/templates";

const HomePage = () => {
  return (
      <>
        <div className={'max-h-screen  bg-amber-200'}>
          <Hero/>
        </div>
        <div>
          <ShortAbout/>
        </div>
        <div>
          <ShortWorks/>
        </div>


      </>
  );
};

export default HomePage;
