'use client'
import {MorvaText} from "@/components/atoms";
import styles from "@/styles";
import {myWork, myWorkParagraph, workSlides1, workSlides2, workSlides3} from "@/constants";
import { WorksButton} from "@/components/molecules";
import {m} from "framer-motion";
import {fadeIn, textVariant} from "@/utils/motion";
import {lazy} from "react";

const CarouselImages = lazy(() => import('@/components/molecules/CarouselImages'));

const ShortWorks = () => {
  return (
      <div className={`h-full flex flex-col`}>
        <m.div
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            variants={textVariant(.5)}
            className={'w-full sm:w-7/12 sm:text-center pb-[1rem] sm:pb-[2rem] xl:pb-[4rem]'}>
          <MorvaText>
            <h1 className={`${styles.sectionHeader}`}>{myWork}</h1>
          </MorvaText>
          <p className={`${styles.sectionParagraph} ${styles.sectionMarginBetweenContent}  sm:-ml-[2rem]`}> {myWorkParagraph}</p>
        </m.div>
        <div
            className={`w-full flex flex-col h-full  md:h-[90rem] xl:h-[100rem]  sm:grid gap-24 grid-cols-12 grid-rows-6`}>
          <m.div initial="hidden"
                 whileInView="show"
                 viewport={{once: true}}
                 variants={fadeIn('right', 'tween', .6, .5)}
                 className=" w-full sm:col-span-7 sm:row-span-3 flex h-full">
            {/*<CarouselImages images={workSlides2}/>*/}
          </m.div>
          <m.div initial="hidden"
                 whileInView="show"
                 viewport={{once: true}}
                 variants={fadeIn('right', 'tween', .75, .5)}
                 className=" w-full sm:col-span-7 sm:row-span-3  flex h-full ">
            {/*<CarouselImages images={workSlides3}/>*/}
          </m.div>
          <m.div initial="hidden"
                 whileInView="show"
                 viewport={{once: true}}
                 variants={fadeIn('left', 'tween', 1, .5)}
                 className=" w-full sm:col-span-5 sm:row-span-4 sm:col-start-8 sm:row-start-1 flex h-full">
            {/*<CarouselImages images={workSlides1}/>*/}
          </m.div>
          <m.div
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
              variants={fadeIn('left', 'tween', 1, .5)}
              className={` w-full sm:col-span-5 sm:row-span-2 sm:col-start-8 sm:row-start-5 flex justify-center sm:justify-start items-center aboutLInnerPadding mt-[1rem] sm:mt-0 `}>
            <WorksButton label={'See All'}/>
          </m.div>
        </div>
      </div>
  );
};

export default ShortWorks;
