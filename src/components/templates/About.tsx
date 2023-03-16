'use client'
import {MorvaText, ProfileImage} from "@/components/atoms";
import {aboutMeHeader, aboutYou} from "@/constants";
import styles from "@/styles";
import {childVariants2, fadeIn, parentVariants2} from "@/utils/motion";
import {m} from "framer-motion";

const About = () => {
  return (
      <div className={`mt-[4rem] md:mt-[12rem] h-full flex flex-col lg:flex-row`}>
        <m.div initial={'closed'}
                    whileInView={'open'}
                    viewport={{once: true}}
                    variants={parentVariants2(.5)}
                    className={'pr-0 lg:pr-20 xl:pr-80 lg:w-1/2'}>
          <MorvaText>
            <m.h1 variants={childVariants2} className={`${styles.headerText}`}>{aboutMeHeader}</m.h1>
          </MorvaText>
          <m.p variants={childVariants2}
                    className={`${styles.sectionParagraph} ${styles.sectionMarginBetweenContent}`}> {aboutYou}</m.p>
        </m.div>
        <m.div initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
                    variants={fadeIn('left', 'tween', 1.4, .5)}
                    className={'w-full mt-[5rem] lg:mt-0 lg:w-1/2'}>
          <ProfileImage url={'/img/profile.jpg'}/>
        </m.div>
      </div>
  );
};

export default About;
