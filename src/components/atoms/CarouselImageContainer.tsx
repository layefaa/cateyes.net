'use client'
import React, {useEffect} from 'react';
import { useRef } from 'react';

const CarouselImageContainer = ({img}: { img: string }) => {
  // const data_img = useRef(null)
  // useEffect(()=> {
  //   window.onload
  //   // @ts-ignore
  //   console.log(data_img.current?.dataset.src)
  // }, [])

  return (
      // eslint-disable-next-line @next/next/no-img-element
        <img data-src={img} alt='' loading='lazy' className={'images object-cover object-top h-full w-full'}/>
  );
};

export default CarouselImageContainer;
