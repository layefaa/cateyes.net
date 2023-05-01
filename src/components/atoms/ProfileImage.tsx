import React from 'react';
import Image from "next/image"

const ProfileImage = ({url, priority}: { url: string, priority: boolean }) => {
  return (
      <div className={'relative w-full aspect-[0.75] md:aspect-[0.94] md:h-full '}>
        <Image src={url} alt={''} fill
               sizes="100%"
               priority={priority}
               style={{
                 objectPosition: 'top center',
                 objectFit: 'cover',
               }}/>
      </div>
  );
};

export default ProfileImage;
