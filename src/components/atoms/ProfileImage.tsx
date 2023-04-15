import React from 'react';
import Image from "next/image"

const ProfileImage = ({url}: { url: string }) => {
  return (
      <div className={'relative w-full aspect-[0.75] md:aspect-[0.94] md:h-full '}>
        <Image priority src={url} alt={''} fill
               sizes="100vw"
               style={{
                 objectPosition: 'top center',
                 objectFit: 'cover',
               }}/>
      </div>
  );
};

export default ProfileImage;
