import React from 'react';

const CarouselImageContainer = ({img}: { img: string }) => {
  return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={img} alt='' loading={'lazy'} className={'object-cover object-top h-full w-full'}/>
  );
};

export default CarouselImageContainer;
