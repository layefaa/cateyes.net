'use client'
import React from "react";
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay, EffectFlip, Pagination} from "swiper";
import {CarouselSlideContainer} from "@/components/atoms";
import {CarouselPagination} from "@/utils/CarouselPagination";

// @ts-ignore
const Carousel = ({images}) => {
      SwiperCore.use([EffectFlip, Pagination, Autoplay])
      return (
          <Swiper
              autoplay
              loop
              spaceBetween={50}
              slidesPerView={1}
              pagination={CarouselPagination}
              modules={[Pagination]}
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}
          >
            {
              images.map((img: any) => {
                    return (
                        <SwiperSlide key={img.url}>
                          <CarouselSlideContainer img={img}/>
                        </SwiperSlide>
                    )
                  }
              )
            }
          </Swiper>
      );
    }
;

export default Carousel;
