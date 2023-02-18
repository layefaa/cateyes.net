import React from 'react';
import {Button, MorvaText, ProfileImage} from "@/components/atoms";
import {aboutGreeting, aboutYouShort} from "@/constants";
import styles from "@/styles";

const ShortAbout = () => {
  return (
      <div className={` ${styles.sectionPaddingY} h-full flex flex-col sm:flex-row aboutXPadding`}>
        <div className={'aboutRInnerPadding mt-0 sm:mt-[4rem] lg:mt-[10rem] sm:w-1/2'}>
          <MorvaText>
            <p className={'text-24 sm:text-32 md:text-48'}>{aboutGreeting}</p>
          </MorvaText>
          <p className={'text-14 md:text-20 mt-[2rem] xl:mt-[4rem] leading-[165%]'}> {aboutYouShort}</p>
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
