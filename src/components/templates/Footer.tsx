import React from 'react';
import styles from "@/styles";
import {Socials} from "@/components/molecules";
import {FooterLinksWithLogo} from "@/components/organisms";

const Footer = () => {
  return (
      <div
          className={`bg-ce-secondary-black ${styles.containerPaddingX} flex flex-col md:flex-row md:justify-between `}>
        <FooterLinksWithLogo/>
        <div>
          <p className={'text-ce-secondary-white text-20 font-[400] h-[4rem] bg-red-400'}>
            <span  className={'inline-block align-middle'}>
            Follow
          </span>
          </p>
          <Socials strokeColor={'stroke-ce-tertiary-white'}/>
        </div>
      </div>
  );
};

export default Footer;
