import React from 'react';
import Image from "next/image"

const ProfileImage = ({url}: { url: string }) => {
  return (
      <div className={'relative h-[40rem] lg:h-[40vw] w-full'}>
        <Image src={url} alt={''} fill
               sizes="100vw"
               style={{
                 objectPosition: 'top',
                 objectFit: 'cover',
               }}/>
      </div>
  );
};

export default ProfileImage;
