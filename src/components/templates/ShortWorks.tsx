import React from 'react';
import {MorvaText} from "@/components/atoms";
import styles from "@/styles";
import {homeCarousel, myWork, myWorkParagraph} from "@/constants";
import {CarouselImages, WorksButton} from "@/components/molecules";

const ShortWorks = () => {
  return (
      <div className={` h-full flex flex-col`}>
        <div className={'w-full sm:w-7/12 sm:text-center '}>
          <MorvaText>
            <h1 className={`${styles.sectionHeader}`}>{myWork}</h1>
          </MorvaText>
          <p className={`${styles.sectionParagraph} ${styles.sectionMarginBetweenContent}`}> {myWorkParagraph}</p>
        </div>
        <div
            className={`h-full w-full flex flex-col  sm:grid sm:h-[50vh] md:h-[65vh] lg:h-[75vh] gap-24 grid-cols-12 grid-rows-6`}>
          <div className=" w-full sm:col-span-7 sm:row-span-3 flex h-full">
            <CarouselImages images={homeCarousel}/>
          </div>
          <div className=" w-full sm:col-span-7 sm:row-span-3  flex h-full ">
            <CarouselImages images={homeCarousel}/>
          </div>
          <div className=" w-full sm:col-span-5 sm:row-span-4 sm:col-start-8 sm:row-start-1 flex h-full">
            <CarouselImages images={homeCarousel}/>
          </div>
          <div
              className={` w-full sm:col-span-5 sm:row-span-2 sm:col-start-8 sm:row-start-5 flex items-center aboutLInnerPadding`}>
            <WorksButton label={'See All'}/>
          </div>
        </div>
      </div>
  );
};

export default ShortWorks;
