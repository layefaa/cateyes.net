'use client'
import styles from "@/styles";
import {Logo} from "@/components/atoms";
import {Menu} from "@/components/molecules";
import {FollowEffect} from "@/components/organisms";
import Link from "next/link";
import {motion} from 'framer-motion';
import {navVariants} from "@/utils/motion";


const Navbar = () => {
  return (
      <motion.nav
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`${styles.flexBetweenCenter} filter text-ce-secondary-white text-14 font-semibold  w-screen z-20 fixed h-[7.5rem] md:h-[8rem] top-0 ${styles.containerPaddingX}`}>
        <div className={`w-[30%]`}>
          <FollowEffect/>
        </div>
        <Link href={'/'} className={`relative w-[8rem] h-[4rem] md:w-[16.3rem] md:h-[5.2rem]`}>
          <Logo/>
        </Link>
        <div className={`w-[30%] flex justify-end`}>
          <Menu/>
        </div>

      </motion.nav>
  );
};

export default Navbar;
