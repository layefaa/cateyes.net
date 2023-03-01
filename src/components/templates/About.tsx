'use client'
import {MorvaText, ProfileImage} from "@/components/atoms";
import {aboutMeHeader, aboutYou} from "@/constants";
import styles from "@/styles";
import {childVariants2, fadeIn, parentVariants2} from "@/utils/motion";
import {motion} from "framer-motion";

const About = () => {
  return (
      <div className={`mt-[4rem] md:mt-[12rem] h-full flex flex-col sm:flex-row aboutXPadding`}>
        <motion.div initial={'closed'}
                    whileInView={'open'}
                    viewport={{once: true}}
                    variants={parentVariants2(1)}
                    className={'aboutRInnerPadding mt-0 sm:mt-[4rem] lg:mt-[10rem] sm:w-1/2'}>
          <MorvaText>
            <motion.h1 variants={childVariants2} className={`${styles.sectionHeader}`}>{aboutMeHeader}</motion.h1>
          </MorvaText>
          <motion.p variants={childVariants2}
                    className={`${styles.sectionParagraph} ${styles.sectionMarginBetweenContent}`}> {aboutYou}</motion.p>
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

export default About;
