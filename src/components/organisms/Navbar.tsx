'use client'
import styles from "@/styles";
import {Logo} from "@/components/atoms";
import {Menu} from "@/components/molecules";

const Navbar = () => {
  return (
      <div
          className={`${styles.flexBetweenCenter} text-ce-secondary-white text-14 font-semibold  w-screen z-20 fixed h-[7.5rem] md:h-[8rem] top-0 ${styles.containerPaddingX}`}>
        <div className={`w-[30%]`}>
          <p className={`hidden sm:block`}>Follow</p>
        </div>
        <Logo/>
        <div className={`w-[30%] flex justify-end`}>
          <Menu/>
        </div>

      </div>
  );
};

export default Navbar;
