import React from 'react';
import {FbLink, InstagramLink, TiktokLink, TwitterLink, WhatsappLink, YoutubeLink} from "@/components/atoms";
import {ISocialIcon} from "@/interfaces";

const Socials = ({strokeColor}: ISocialIcon) => {
  return (
      <div className={`flex w-fit gap-8`}>

        <YoutubeLink strokeColor={strokeColor}/>
        <TwitterLink strokeColor={strokeColor}/>
        <FbLink strokeColor={strokeColor}/>
        <WhatsappLink strokeColor={strokeColor}/>
        <TiktokLink strokeColor={strokeColor}/>
        <InstagramLink strokeColor={strokeColor}/>
      </div>
  );

};

export default Socials;
