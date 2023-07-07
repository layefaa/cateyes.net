import React from 'react';

const Overlay = ({className}: {className?: string}) => {
  return (
      <div className={`w-full h-full absolute gradient z-[2] opacity-100 ${className}`}/>
  );
};

export default Overlay;
