'use client'
import React from 'react';
import SwiperCore, {Autoplay, EffectFlip, Lazy} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {CarouselImageContainer} from "@/components/atoms";
import 'swiper/css/effect-fade';
// import {Carousel} from "@/components/molecules/index";


// @ts-ignore
const CarouselImages = ({images}) => {
  SwiperCore.use([EffectFlip, Autoplay, Lazy])
  return (
      <Swiper
          autoplay
          effect="fade"
          loop
          slidesPerView={1}
      >
        {
          images.map((img: any) => {
                return (
                    <SwiperSlide key={img.url}>
                      {/*<div className={'h-[100%] w-[100%]'}>*/}
                      <CarouselImageContainer img={img.url}/>
                      {/*</div>*/}

                    </SwiperSlide>
                )
              }
          )
        }
      </Swiper>
  )
};

export default CarouselImages;
