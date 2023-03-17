'use client'
import React from 'react';
import Image from "next/image";

const CarouselSlideContainer = ({img}: { img: object }) => {
  return (
      <>
        {/*@ts-ignore*/}zz
        <Image className={'object-cover object-center'} src={img.url} alt={''} fill
               sizes="100vw"
               priority
        />
      </>


  );
};

export default CarouselSlideContainer;
