import React from 'react';
import LazyLoad from "react-lazyload";

const CarouselImageContainer = ({img}: { img: string }) => {
  return (
      // eslint-disable-next-line @next/next/no-img-element
      <LazyLoad once>
        <img src={img} alt='' loading={'lazy'} className={'object-cover object-top h-full w-full'}/>
      </LazyLoad>
  );
};

export default CarouselImageContainer;
