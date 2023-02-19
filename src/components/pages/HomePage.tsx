import React from 'react';
import {Hero, ShortAbout, ShortWorks} from "@/components/templates";
import styles from "@/styles";

const HomePage = () => {
  return (
      <>
        <div>
          <Hero/>
        </div>
        <div className={`${styles.sectionPaddingY}`}>
          <ShortAbout/>
        </div>
        <div>
          <ShortWorks/>
        </div>


      </>
  );
};

export default HomePage;
