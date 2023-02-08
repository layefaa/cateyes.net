import React from 'react';
import {Socials} from "@/components/molecules";

const FollowEffect = () => {
  return (
      <div className={`group w-fit`}>
        <div className={`flex items-center gap-[1.6rem] cursor-pointer hidden sm:flex group-hover:hidden w-fit`}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7H13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M7 1V13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <p>Follow</p>
        </div>
        <div className={`hidden  w-fit group-hover:flex`}><Socials strokeColor={'stroke-white'}/></div>
      </div>
  );
};

export default FollowEffect;
