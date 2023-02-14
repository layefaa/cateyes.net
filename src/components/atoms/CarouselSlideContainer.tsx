'use client'
import React from 'react';
import Image from "next/image";

const CarouselSlideContainer = ({img}: { img: object }) => {
  return (
      <div className={'relative w-full h-[48rem] md:h-[55rem]'}>
        {/*@ts-ignore*/}
        <Image src={img.url} alt={''} fill
               sizes="100vw"
               style={{
                 objectPosition: 'center',
                 objectFit: 'cover',
               }}/>
      </div>


  );
};

export default CarouselSlideContainer;
