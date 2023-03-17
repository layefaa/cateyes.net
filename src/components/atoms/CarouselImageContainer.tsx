import React from 'react';

const CarouselImageContainer = ({img}: { img: string }) => {
  return (
      <img src={img} alt='' loading={'lazy'} className={'object-cover h-full w-full'}/>
  );
};

export default CarouselImageContainer;
