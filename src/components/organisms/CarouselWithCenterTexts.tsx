'use client'
import React from 'react';
import {m} from "framer-motion";
import {fadeIn} from "@/utils/motion";
import {Carousel} from "@/components/molecules";
import {homeCarousel, preciousMoments, worksHeader, worksSubHeader} from "@/constants";
import styles from "@/styles";
import {MorvaText, Overlay} from "@/components/atoms";

const CarouselWithCenterTexts = () => {
  return (
      <div className={`${styles.contentTop} w-full relative`}>
        <m.div
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            className={'w-full relative'}
            variants={fadeIn('left', 'spring', 1, .5)}
        >

          <div className={`absolute w-full h-full z-[3] flex flex-col items-center justify-center `}>
            <MorvaText>
              <p className={`${styles.headerText} ${styles.headerBottom} leading-[165%] text-center`}>{worksHeader}</p>
            </MorvaText>
            <p className={'ce-primary-white'}>{worksSubHeader}</p>
          </div>
          <Overlay/>
          <Carousel images={preciousMoments}/>
        </m.div>

      </div>
  );
};

export default CarouselWithCenterTexts;
