import React from 'react';

const CarouselImageContainer = ({img}: { img: string }) => {
  return (
      <img src={img} alt='' className={'object-cover h-full w-full'}/>
  );
};

export default CarouselImageContainer;
