import React, {lazy} from 'react';
import {Hero} from "@/components/templates";

const ShortAbout = lazy(() => import('@/components/templates/ShortAbout'));
const ShortWorks = lazy(() => import('@/components/templates/ShortWorks'));

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
