'use client'
import React from "react";
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay, EffectFlip, Pagination} from "swiper";
import {CarouselSlideContainer} from "@/components/atoms";
import {CarouselPagination} from "@/utils/CarouselPagination";

const Carousel = ({images}: { images: Array<object> }) => {
      SwiperCore.use([EffectFlip, Pagination, Autoplay])
      return (
          <Swiper
              autoplay
              loop
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
                          <div className={'relative w-full h-[48rem] md:h-[55rem]'}>
                            <CarouselSlideContainer img={img}/>
                          </div>

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
