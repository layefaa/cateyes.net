'use client'
import React from 'react';
import {Carousel} from "@/components/molecules";
import {MorvaText, Overlay} from "@/components/atoms";
import {homeCarousel} from "@/constants";
import {m} from "framer-motion";
import {fadeIn, textVariant} from "@/utils/motion";
import styles from "@/styles";


const CarouselWithHeroText = () => {

  return (
      <div
          className={'flex flex-col items-center'}>
        <m.div
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            variants={textVariant(.5)}
            className={`${styles.contentTop} mb-[5rem] text-20 md:text-32 lg:text-40 leading-[165%] flex justify-center md:justify-self-center sm:w-[50%] md:w-[60%]`}>
          <div className={'flex flex-wrap justify-center w-full'}>
            <p>Transforming</p>
            <MorvaText>landscapes</MorvaText>
            <p>into lasting</p>
            <p className={'px-[0.5rem]'}> memories</p>
          </div>
        </m.div>
        <div className={'w-full'}>
          <m.div
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
              className={'w-full relative'}
              variants={fadeIn('left', 'spring', 1, .5)}
          >
            <Overlay/>
            <Carousel images={homeCarousel}/>
          </m.div>

        </div>

      </div>
  );
};

export default CarouselWithHeroText;
