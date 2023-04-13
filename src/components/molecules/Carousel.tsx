'use client'
import React from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay, Pagination} from "swiper";
import {CarouselSlideContainer} from "@/components/atoms";
import {CarouselPagination} from "@/utils/CarouselPagination";


const Carousel = ({images}: { images: Array<object> }) => {
      // const shouldSwiperUpdate = useCallback(() => false, []);
      SwiperCore.use([Pagination, Autoplay])
      // @ts-ignore
      return (
          <Swiper
              autoplay
              loop
              slidesPerView={1}
              pagination={CarouselPagination}
              modules={[Pagination]}
          >
            {
              images.map((img: any) => {
                    return (
                        <SwiperSlide key={img.url}>
                          <div className={'relative aspect-[1.5] lg:aspect-[2.0] 2xl:aspect-[2.5]'}>
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
