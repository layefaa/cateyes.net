import React from 'react';
import localFont from '@next/font/local'


const morva = localFont({
  src: [
    {
      path: '../../../public/fonts/MORVA.otf',
    }, {
      path: '../../../public/fonts/MORVA.ttf',
    },
  ],
})


const MorvaText = ({children}: { children: React.ReactNode }) => {
  return (
      <div
          className={`${morva.className} mt-0.5 sm:mt-1 md:mt-2 text-ce-secondary-white inline px-[1rem]`}>
        {children}
      </div>
  );
};

export default MorvaText;
