'use client'
import {MorvaText} from "@/components/atoms";
import styles from "@/styles";
import {homeCarousel, myWork, myWorkParagraph} from "@/constants";
import {CarouselImages, WorksButton} from "@/components/molecules";
import {motion} from "framer-motion";
import {fadeIn, textVariant, zoomIn} from "@/utils/motion";

const ShortWorks = () => {
  return (
      <div className={` h-full flex flex-col`}>
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            variants={textVariant(1)}
            className={'w-full sm:w-7/12 sm:text-center pb-[2rem] xl:pb-[5rem]'}>
          <MorvaText>
            <h1 className={`${styles.sectionHeader}`}>{myWork}</h1>
          </MorvaText>
          <p className={`${styles.sectionParagraph} ${styles.sectionMarginBetweenContent}  sm:-ml-[2rem]`}> {myWorkParagraph}</p>
        </motion.div>
        <div
            className={`h-full w-full flex flex-col  sm:grid sm:h-[50vh] md:h-[65vh] lg:h-[75vh] gap-24 grid-cols-12 grid-rows-6`}>
          <motion.div initial="hidden"
                      whileInView="show"
                      viewport={{once: true}}
                      variants={fadeIn('right', 'tween', 1.1, .5)}
                      className=" w-full sm:col-span-7 sm:row-span-3 flex h-full">
            <CarouselImages images={homeCarousel}/>
          </motion.div>
          <motion.div initial="hidden"
                      whileInView="show"
                      viewport={{once: true}}
                      variants={fadeIn('right', 'tween', 1.25, .5)}
                      className=" w-full sm:col-span-7 sm:row-span-3  flex h-full ">
            <CarouselImages images={homeCarousel}/>
          </motion.div>
          <motion.div initial="hidden"
                      whileInView="show"
                      viewport={{once: true}}
                      variants={fadeIn('left', 'tween', 1.5, .5)}
                      className=" w-full sm:col-span-5 sm:row-span-4 sm:col-start-8 sm:row-start-1 flex h-full">
            <CarouselImages images={homeCarousel}/>
          </motion.div>
          <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
              variants={zoomIn(1.1, .5)}
              className={` w-full sm:col-span-5 sm:row-span-2 sm:col-start-8 sm:row-start-5 flex items-center aboutLInnerPadding`}>
            <WorksButton  label={'See All'}/>
          </motion.div>
        </div>
      </div>
  );
};

export default ShortWorks;
