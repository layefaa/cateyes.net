import React from 'react';
import {ISocialIcon} from "@/interfaces";
import {socials} from "@/constants";
import Link from 'next/link';

const WhatsappLink = ({strokeColor}: ISocialIcon) => {
  return (
      <Link href={socials.whatsApp} target="_blank">
        <svg width="20" className={`cursor-pointer group/wt `} height="20" viewBox="0 0 20 20"
             fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M2.5 17.5001L3.875 14.3334C2.82305 12.8401 2.35222 11.0143 2.55087 9.19852C2.74952 7.38274 3.60399 5.70188 4.95392 4.47136C6.30386 3.24085 8.05646 2.54527 9.88282 2.51518C11.7092 2.48508 13.4837 3.12254 14.8735 4.30791C16.2632 5.49328 17.1726 7.14508 17.431 8.95332C17.6893 10.7616 17.2789 12.6019 16.2768 14.1291C15.2746 15.6562 13.7495 16.7651 11.9878 17.2477C10.2261 17.7303 8.34885 17.5533 6.70833 16.7501L2.5 17.5001"
              className={`${strokeColor} group-hover/wt:stroke-white group-hover/wt:fill-[#23d366]`} strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"/>
          <path
              d="M7.5 8.33325C7.5 8.44376 7.5439 8.54974 7.62204 8.62788C7.70018 8.70602 7.80616 8.74992 7.91667 8.74992C8.02717 8.74992 8.13315 8.70602 8.21129 8.62788C8.28944 8.54974 8.33333 8.44376 8.33333 8.33325V7.49992C8.33333 7.38941 8.28944 7.28343 8.21129 7.20529C8.13315 7.12715 8.02717 7.08325 7.91667 7.08325C7.80616 7.08325 7.70018 7.12715 7.62204 7.20529C7.5439 7.28343 7.5 7.38941 7.5 7.49992V8.33325ZM7.5 8.33325C7.5 9.43832 7.93899 10.4981 8.72039 11.2795C9.50179 12.0609 10.5616 12.4999 11.6667 12.4999H12.5C12.6105 12.4999 12.7165 12.456 12.7946 12.3779C12.8728 12.2997 12.9167 12.1938 12.9167 12.0833C12.9167 11.9727 12.8728 11.8668 12.7946 11.7886C12.7165 11.7105 12.6105 11.6666 12.5 11.6666H11.6667C11.5562 11.6666 11.4502 11.7105 11.372 11.7886C11.2939 11.8668 11.25 11.9727 11.25 12.0833C11.25 12.1938 11.2939 12.2997 11.372 12.3779C11.4502 12.456 11.5562 12.4999 11.6667 12.4999"
              className={`${strokeColor} group-hover/wt:stroke-white`} strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round"/>
        </svg>
      </Link>

  );
};

export default WhatsappLink;
