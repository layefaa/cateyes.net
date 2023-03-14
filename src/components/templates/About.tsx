'use client'
import {MorvaText, ProfileImage} from "@/components/atoms";
import {aboutMeHeader, aboutYou} from "@/constants";
import styles from "@/styles";
import {childVariants2, fadeIn, parentVariants2} from "@/utils/motion";
import {motion} from "framer-motion";

const About = () => {
  return (
      <div className={`mt-[4rem] md:mt-[12rem] h-full flex flex-col lg:flex-row`}>
        <motion.div initial={'closed'}
                    whileInView={'open'}
                    viewport={{once: true}}
                    variants={parentVariants2(.5)}
                    className={'pr-0 lg:pr-20 xl:pr-80 lg:w-1/2'}>
          <MorvaText>
            <motion.h1 variants={childVariants2} className={`${styles.headerText}`}>{aboutMeHeader}</motion.h1>
          </MorvaText>
          <motion.p variants={childVariants2}
                    className={`${styles.sectionParagraph} ${styles.sectionMarginBetweenContent}`}> {aboutYou}</motion.p>
        </motion.div>
        <motion.div initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
                    variants={fadeIn('left', 'tween', 1.4, .5)}
                    className={'w-full mt-[5rem] lg:mt-0 lg:w-1/2'}>
          <ProfileImage url={'/img/profile.jpg'}/>
        </motion.div>
      </div>
  );
};

export default About;
