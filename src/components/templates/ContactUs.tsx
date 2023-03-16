'use client'
import React from 'react';
import {m} from "framer-motion";
import {childVariants2, fadeIn, parentVariants2} from "@/utils/motion";
import {MorvaText, ProfileImage} from "@/components/atoms";
import styles from "@/styles";
import {contactUsParagraph, letsCreateMemories} from "@/constants";
import {ContactUsForm} from "@/components/organisms";

const ContactUs = () => {
  return (
      <div className={`mt-[4rem] md:mt-[12rem] h-full flex flex-col sm:flex-row aboutXPadding`}>
        <m.div initial={'closed'}
                    whileInView={'open'}
                    viewport={{once: true}}
                    variants={parentVariants2(1)}
                    className={'aboutRInnerPadding mt-0 sm:mt-[4rem] lg:mt-[10rem] sm:w-2/5'}>
          <MorvaText>
            <m.h1 variants={childVariants2} className={`${styles.sectionHeader} leading-[165%]`}>{letsCreateMemories}</m.h1>
          </MorvaText>
          <m.p variants={childVariants2}
                    className={`${styles.sectionParagraph} ${styles.sectionMarginBetweenContent} `}> {contactUsParagraph}</m.p>
        </m.div>
        <m.div initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
                    variants={fadeIn('left', 'tween', 1.4, .5)}
                    className={'w-full sm:w-3/5'}>
          <ContactUsForm/>
        </m.div>
      </div>
  );
};

export default ContactUs;
