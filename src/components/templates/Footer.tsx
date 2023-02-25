'use client'
import styles from "@/styles";
import {Socials} from "@/components/molecules";
import {CreateMemoriesTogether, FooterLinksWithLogo} from "@/components/organisms";
// import {motion} from 'framer-motion';
// import {footerVariants} from "@/utils/motion";

const Footer = () => {
  return (
      <footer
          // variants={footerVariants}
          // initial="hidden"
          // whileInView="show"
          // viewport={{ once: true }}
          className={`bg-ce-secondary-black ${styles.containerPaddingX} flex flex-col pt-[8rem] pb-[4rem] md:pt-[12rem] `}>

        <div className={'mb-[10rem] md:mb-[24rem]'}>
          <CreateMemoriesTogether/>
        </div>
        <div className={'flex flex-col sm:flex-row sm:justify-between'}>
          <FooterLinksWithLogo/>
          <div className={'mt-[4rem] sm:mt-0'}>
            <p className={'text-ce-secondary-white mb-[1rem] md:mb-[2rem] text-18 font-[300] h-[4rem] py-[1rem] text-left md:text-right'}>
              Follow
            </p>
            <Socials  strokeColor={'stroke-ce-tertiary-white'}/>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
