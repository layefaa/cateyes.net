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
          className={`${styles.contentTop} flex flex-col items-center`}>
        <div className={'w-full'}>
          <m.div
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
              className={'w-full relative'}
              variants={fadeIn('left', 'spring', .5, .5)}
          >
            <div className={'absolute z-[3] h-full w-full flex items-center justify-center'}>
              <m.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{once: true}}
                  variants={textVariant(.6)}
                  className={` mb-[5rem] text-20 md:text-32 lg:text-40 leading-[165%] flex justify-center md:justify-self-center sm:w-[50%] md:w-[60%] `}>
                <h1 className={'flex flex-wrap justify-center w-full'}>
                  <p>Transforming</p>
                  <MorvaText>landscapes</MorvaText>
                  <p>into lasting</p>
                  <p className={'px-[0.5rem]'}> memories</p>
                </h1>
              </m.div>
            </div>

            <Overlay/>
            <Carousel images={homeCarousel}/>
          </m.div>

        </div>

      </div>
  );
};

export default CarouselWithHeroText;
