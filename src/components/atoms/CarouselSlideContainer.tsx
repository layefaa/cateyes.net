'use client'
import React from 'react';
import Image from "next/image";

const CarouselSlideContainer = ({img, priority}: { img: object, priority: boolean }) => {
  return (
      <>
        {/*@ts-ignore*/}
        <Image className={'object-cover object-center'} src={img.url} alt={''} fill
               sizes="100vw"
               priority={priority}
        />
      </>


  );
};

export default CarouselSlideContainer;
