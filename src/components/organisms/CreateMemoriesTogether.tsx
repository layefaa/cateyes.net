import React from 'react';
import {MorvaText} from "@/components/atoms";
import {footerHeader, menuSubHeader} from "@/constants";
import {ContactUsButton} from "@/components/molecules";

const CreateMemoriesTogether = () => {
  return (
      <div className={'flex items-center flex-col w-full'}>
        <MorvaText>
          <div className={' flex justify-center '}>
            <p className={'text-24 md:text-48 text-center w-full w-[70%] md:w-full leading-[165%]'}>
              {footerHeader}
            </p>
          </div>
        </MorvaText>
        <div className={'mt-[2rem] mb-[4rem] md:mb-[6rem]'}>
          <p>{menuSubHeader}</p>
        </div>
        <ContactUsButton/>
      </div>
  );
};

export default CreateMemoriesTogether;
