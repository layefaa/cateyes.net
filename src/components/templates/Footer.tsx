import React from 'react';
import styles from "@/styles";
import {Logo} from "@/components/atoms";
import {Socials} from "@/components/molecules";

const Footer = () => {
  return (
      <div className={`bg-ce-secondary-black ${styles.containerPaddingX} `}>
        <div>
          <div><Logo/></div>
          <div>Links</div>
        </div>
        <div>
          <p>Follow</p>
          <Socials strokeColor={'stroke-ce-tertiary-white'} strokeColor2={'stroke-ce-tertiary-white'}/>
        </div>
      </div>
  );
};

export default Footer;
