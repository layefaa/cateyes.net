import React from 'react';
// import localFont from '@next/font/local'


// const morva = localFont({
//   src: [
//     {
//       path: 'public/fonts/MORVA.otf',
//       style: 'normal',
//     },
//   ],
// })


const MorvaText = ({children}: { children: React.ReactNode }) => {
  return (
      <div className={` text-ce-secondary-white`}>
        {children}
      </div>
  );
};

export default MorvaText;
