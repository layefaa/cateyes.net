'use client'
import React from 'react';
import {Carousel} from "@/components/molecules";
import {MorvaText} from "@/components/atoms";
import {homeCarousel} from "@/constants";


const CarouselWithHeroText = () => {

  return (
      <div className={'flex flex-col items-center'}>
        <div
            className={'mt-[6rem] md:mt-[7rem] mb-[5rem] text-20 sm:text-32 md:text-40 leading-[165%] flex justify-center md:justify-self-center sm:w-[50%] md:w-[60%]'}>
          <div className={'flex flex-wrap justify-center w-full'}>
            <p>Transforming</p>
            <MorvaText>landscapes</MorvaText>
            <p>into lasting
            </p><p className={'px-[0.5rem]'}> memories</p>
          </div>
        </div>
        <div className={'w-full'}>
          {/*@ts-ignore*/}
          <Carousel images={homeCarousel}/>
        </div>

      </div>
  );
};

export default CarouselWithHeroText;
