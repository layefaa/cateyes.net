'use client'
import React from 'react';
import styles from "@/styles";
import {useMenuContext} from "@/context/MenuContext";
import {ContactUsButton, Links} from "@/components/molecules";
import {MorvaText} from "@/components/atoms";
import {email, menuHeader, menuSubHeader, phone} from "@/constants";

const NavigationBox = () => {
  const {isOpen} = useMenuContext()
  return (
      <div
          className={`filter fixed z-10 h-screen w-screen pt-[7.5rem] md:pt-[8rem] ${styles.containerPaddingX} ${isOpen ? 'flex flex-col' : 'hidden'}`}>
        <div className={'h-[55%] pt-[20%] md:px-[8rem] md:pt-0 md:h-[50%] md:flex md:items-centers'}>
          <Links/>
        </div>
        <div
            className={`h-[45%] pt-[25%] md:h-[50%] md:pt-[5%] text-12 md:text-20 flex flex-col items-center md:justify-start`}>
          <MorvaText>
            <p className={`text-20 sm:text-24 md:text-32 `}>{menuHeader}</p>
          </MorvaText>
          <p className={'font-light py-10 md:py-28 '}>{menuSubHeader}</p>
          <div className={`text-center text-ce-secondary-white font-semibold  pb-10 md:pb-28`}>
            <p>{email}</p>
            <p className={`mt-4 md:mt-6`}>{phone}</p>
          </div>

          <ContactUsButton/>
        </div>
      </div>
  );
};

export default NavigationBox;
