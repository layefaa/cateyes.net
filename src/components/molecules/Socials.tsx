import React from 'react';
import {FbLink, TiktokLink, TwitterLink, WhatsappLink, YoutubeLink} from "@/components/atoms";
import {ISocialIcon} from "@/interfaces";

const Socials = ({strokeColor, strokeColor2}: ISocialIcon) => {
  return (
      <div className={`flex w-fit gap-8`}>
        <YoutubeLink strokeColor={strokeColor} strokeColor2={strokeColor2}/>
        <TwitterLink strokeColor={strokeColor}/>
        <FbLink strokeColor={strokeColor}/>
        <WhatsappLink strokeColor={strokeColor}/>
        <TiktokLink strokeColor={strokeColor}/>
      </div>
  );

};

export default Socials;
