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
      <div className={`mt-[4rem] lg:mt-[12rem] h-full flex flex-col lg:flex-row`}>
        <m.div initial={'closed'}
                    whileInView={'open'}
                    viewport={{once: true}}
                    variants={parentVariants2(1)}
                    className={'mt-0 lg:mt-[4rem] pr-0 lg:pr-20 xl:pr-80 lg:w-2/5 2xl:w-1/2'}>
          <MorvaText>
            <m.h1 variants={childVariants2} className={`${styles.sectionHeader} leading-[165%]`}>{letsCreateMemories}</m.h1>
          </MorvaText>
          <m.p variants={childVariants2}
                    className={`${styles.sectionParagraph} mb-[4rem] `}> {contactUsParagraph}</m.p>
        </m.div>
        <m.div initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
                    variants={fadeIn('left', 'tween', 1.4, .5)}
                    className={'w-full lg:w-3/5 2xl:w-1/2'}>
          <ContactUsForm/>
        </m.div>
      </div>
  );
};

export default ContactUs;
