'use client'
import {MorvaText} from "@/components/atoms";
import {letsCreateMemories, menuSubHeader} from "@/constants";
import {ContactUsButton} from "@/components/molecules";
import {m} from "framer-motion";
import {childVariants2} from "@/utils/motion";
import styles from "@/styles";

const CreateMemoriesTogether = () => {
  return (
      <div className={'flex items-center flex-col w-full'}>
        <MorvaText>
          <m.div variants={childVariants2} className={' flex justify-center '}>
            <p className={`${styles.headerText} leading-[165%] text-center  w-[70%] md:w-full`}>
              {letsCreateMemories}
            </p>
          </m.div>
        </MorvaText>
        <m.div variants={childVariants2} className={'mt-[2rem] mb-[4rem] lg:mb-[6rem]'}>
          <p>{menuSubHeader}</p>
        </m.div>
        <m.div variants={childVariants2}>
          <ContactUsButton/>
        </m.div>

      </div>
  );
};

export default CreateMemoriesTogether;
