import React from 'react';
import {Button, MorvaText, ProfileImage} from "@/components/atoms";
import {aboutGreeting, aboutYouShort} from "@/constants";
import styles from "@/styles";

const ShortAbout = () => {
  return (
      <div className={` h-full flex flex-col sm:flex-row aboutXPadding`}>
        <div className={'aboutRInnerPadding mt-0 sm:mt-[4rem] lg:mt-[10rem] sm:w-1/2'}>
          <MorvaText>
            <h1 className={`${styles.sectionHeader}`}>{aboutGreeting}</h1>
          </MorvaText>
          <p className={`${styles.sectionParagraph} ${styles.sectionMarginBetweenContent}`}> {aboutYouShort}</p>
          <div className={'my-[4rem]'}>
            <Button label={"Learn More"}/>
          </div>

        </div>
        <div className={'w-full sm:w-1/2 sm:h-full md:h-[70%] bg-red-800'}>
          <ProfileImage url={'/img/profile.jpg'}/>
        </div>
      </div>
  );
};

export default ShortAbout;
