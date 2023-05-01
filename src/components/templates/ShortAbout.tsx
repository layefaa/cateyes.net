'use client'
import {MorvaText, ProfileImage} from "@/components/atoms";
import {aboutGreeting, aboutKelvin, profilePic} from "@/constants";
import styles from "@/styles";
import {AboutButton} from "@/components/molecules";
import {childVariants2, fadeIn, parentVariants2} from "@/utils/motion";
import {m} from "framer-motion";

const ShortAbout = () => {
  return (
      <div className={` h-full flex flex-col sm:flex-row aboutXPadding`}>
        <m.div initial={'closed'}
               whileInView={'open'}
               viewport={{once: true}}
               variants={parentVariants2(.5)}
               className={'aboutRInnerPadding mt-0 sm:mt-[4rem] lg:mt-[10rem] sm:w-1/2'}>
          <MorvaText>
            <m.h1 variants={childVariants2} className={`${styles.sectionHeader}`}>{aboutGreeting}</m.h1>
          </MorvaText>
          <m.p variants={childVariants2}
               className={`${styles.sectionParagraph} ${styles.sectionMarginBetweenContent} line-clamp-4`}> {aboutKelvin[0]}</m.p>
          <m.div variants={childVariants2} className={'my-[4rem]'}>
            <AboutButton label={"Learn More"}/>
          </m.div>

        </m.div>
        <m.div initial="hidden"
               whileInView="show"
               viewport={{once: true}}
               variants={fadeIn('left', 'tween', 1.4, .5)}
               className={'w-full sm:w-1/2 sm:h-full md:h-[70%] bg-red-800'}>
          <ProfileImage priority={false} url={profilePic}/>
        </m.div>
      </div>
  );
};

export default ShortAbout;
