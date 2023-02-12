import React from 'react';
import {IButton} from "@/interfaces";

const Button = ({label}: IButton) => {
  return (
      <div>
        {label}
      </div>
  );
};

export default Button;
