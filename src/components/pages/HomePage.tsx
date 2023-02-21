import React from 'react';
import {Hero, ShortAbout, ShortWorks} from "@/components/templates";

const HomePage = () => {
  return (
      <>
        <section>
          <Hero/>
        </section>
        <section>
          <ShortAbout/>
        </section>
        <section>
          <ShortWorks/>
        </section>
        <section/>



      </>
  );
};

export default HomePage;
