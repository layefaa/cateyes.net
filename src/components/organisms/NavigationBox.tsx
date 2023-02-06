import React from 'react';
import {Links} from "@/components/molecules";
import styles from "@/styles";

const NavigationBox = () => {
  return (
      <div className={`filter fixed z-10 h-screen w-screen ${styles.containerPaddingX}`}>
        <Links/>
      </div>
  );
};

export default NavigationBox;
