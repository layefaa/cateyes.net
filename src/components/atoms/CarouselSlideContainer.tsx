'use client'
import React from 'react';
import Image from "next/image";

const CarouselSlideContainer = ({img}: { img: object }) => {
  return (
      <>
        {/*@ts-ignore*/}
        <Image src={img.url} alt={''} fill
               sizes="100vw"
               style={{
                 objectPosition: 'center',
                 objectFit: 'cover',
               }}/>
      </>


  );
};

export default CarouselSlideContainer;
