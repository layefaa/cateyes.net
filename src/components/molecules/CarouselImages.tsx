'use client'
import React from 'react';
import SwiperCore, {Autoplay, EffectFlip} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {CarouselSlideContainer} from "@/components/atoms";
// import {Carousel} from "@/components/molecules/index";


// @ts-ignore
const CarouselImages = ({images}) => {
  SwiperCore.use([EffectFlip, Autoplay])
  return (
      <Swiper
          autoplay
          loop
          slidesPerView={1}
      >
        {
          images.map((img: any) => {
                return (
                    <SwiperSlide key={img.url}>
                      <div className={'relative h-[100%] w-[100%] '}>
                        <CarouselSlideContainer img={img}/>
                      </div>

                    </SwiperSlide>
                )
              }
          )
        }
      </Swiper>
  )
};

export default CarouselImages;
