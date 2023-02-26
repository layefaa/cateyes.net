'use client'
import {MorvaText} from "@/components/atoms";
import {footerHeader, menuSubHeader} from "@/constants";
import {ContactUsButton} from "@/components/molecules";
import {motion} from "framer-motion";
import {childVariants2} from "@/utils/motion";

const CreateMemoriesTogether = () => {
  return (
      <div className={'flex items-center flex-col w-full'}>
        <MorvaText>
          <motion.div variants={childVariants2} className={' flex justify-center '}>
            <p className={'text-24 md:text-48 text-center w-full w-[70%] md:w-full leading-[165%]'}>
              {footerHeader}
            </p>
          </motion.div>
        </MorvaText>
        <motion.div variants={childVariants2} className={'mt-[2rem] mb-[4rem] md:mb-[6rem]'}>
          <p>{menuSubHeader}</p>
        </motion.div>
        <motion.div variants={childVariants2}>
          <ContactUsButton/>
        </motion.div>

      </div>
  );
};

export default CreateMemoriesTogether;
