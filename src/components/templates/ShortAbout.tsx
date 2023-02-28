'use client'
import {MorvaText, ProfileImage} from "@/components/atoms";
import {aboutGreeting, aboutYouShort} from "@/constants";
import styles from "@/styles";
import {AboutButton} from "@/components/molecules";
import {childVariants2, fadeIn, parentVariants2} from "@/utils/motion";
import {motion} from "framer-motion";

const ShortAbout = () => {
  return (
      <div className={` h-full flex flex-col sm:flex-row aboutXPadding`}>
        <motion.div initial={'closed'}
                    whileInView={'open'}
                    viewport={{once: true}}
                    variants={parentVariants2(1)}
                    className={'aboutRInnerPadding mt-0 sm:mt-[4rem] lg:mt-[10rem] sm:w-1/2'}>
          <MorvaText>
            <motion.h1 variants={childVariants2} className={`${styles.sectionHeader}`}>{aboutGreeting}</motion.h1>
          </MorvaText>
          <motion.p variants={childVariants2}
                    className={`${styles.sectionParagraph} ${styles.sectionMarginBetweenContent}`}> {aboutYouShort}</motion.p>
          <motion.div variants={childVariants2} className={'my-[4rem]'}>
            <AboutButton label={"Learn More"}/>
          </motion.div>

        </motion.div>
        <motion.div initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
                    variants={fadeIn('left', 'tween', 1.4, .5)}
                    className={'w-full sm:w-1/2 sm:h-full md:h-[70%] bg-red-800'}>
          <ProfileImage url={'/img/profile.jpg'}/>
        </motion.div>
      </div>
  );
};

export default ShortAbout;
