'use client'
import styles from "@/styles";
import {Socials} from "@/components/molecules";
import {CreateMemoriesTogether, FooterLinksWithLogo} from "@/components/organisms";
import {m} from 'framer-motion';
import {parentVariants2, slideIn} from "@/utils/motion";

const Footer = () => {
  return (
      <footer
          // variants={footerVariants}
          // initial="hidden"
          // whileInView="show"
          // viewport={{ once: true }}
          className={`bg-ce-secondary-black ${styles.containerPaddingX} flex flex-col pt-[8rem] pb-[4rem] md:pt-[12rem] `}>

        <m.div
            initial={'closed'}
            whileInView={'open'}
            viewport={{once: true}}
            variants={parentVariants2(1)}
            className={'mb-[10rem] md:mb-[24rem]'}>
          <CreateMemoriesTogether/>
        </m.div>
        <div className={'flex flex-col sm:flex-row sm:justify-between'}>
          <FooterLinksWithLogo/>
          <div className={'mt-[4rem] sm:mt-0'}>
            <m.p initial="hidden"
                      whileInView="show"
                      variants={slideIn('spring', 0, .5)}
                      className={'text-ce-secondary-white mb-[1rem] md:mb-[2rem] text-18 font-[300] h-[4rem] py-[1rem] text-left md:text-right'}>
              Follow
            </m.p>
            <Socials strokeColor={'stroke-ce-tertiary-white'}/>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
