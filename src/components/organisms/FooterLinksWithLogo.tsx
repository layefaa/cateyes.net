'use client'
import Link from "next/link";
import {Logo} from "@/components/atoms";
import {FooterLinks} from "@/components/molecules";
import {motion} from "framer-motion";
import {slideIn} from "@/utils/motion";

const FooterLinksWithLogo = () => {
  return (
      <motion.div initial="hidden"
                  whileInView="show"
                  variants={slideIn('spring', 0, .5)} className={'flex flex-col'}>
        <Link href={'/'} className={`relative w-[8rem] h-[4rem] mb-[1rem] md:mb-[2rem]`}>
          <Logo/>
        </Link>
        <div className={`w-fit`}><FooterLinks/></div>
      </motion.div>
  );
};

export default FooterLinksWithLogo;
