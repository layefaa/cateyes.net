'use client'
import styles from "@/styles";
import {Logo} from "@/components/atoms";
import {Menu} from "@/components/molecules";
import {FollowEffect} from "@/components/organisms";
import Link from "next/link";


const Navbar = () => {
  return (
      <div
          className={`${styles.flexBetweenCenter} text-ce-secondary-white text-14 font-semibold  w-screen z-20 fixed h-[7.5rem] md:h-[8rem] top-0 ${styles.containerPaddingX}`}>
        <div className={`w-[30%]`}>
          <FollowEffect/>
        </div>
        <Link href={'/'} className={`relative w-[8rem] h-[4rem] md:w-[16.3rem] md:h-[5.2rem]`}>
          <Logo/>
        </Link>
        <div className={`w-[30%] flex justify-end`}>
          <Menu/>
        </div>

      </div>
  );
};

export default Navbar;
