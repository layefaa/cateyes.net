import React from 'react';
import {Label} from "@/components/atoms";
import {IInput} from "@/interfaces";

const TextAreaField = ({label, placeholder}: IInput) => {
  return (
      <div>
        <div>
          <Label label={label}/>
          <textarea placeholder={placeholder}/>
        </div>
      </div>
  );
};

export default TextAreaField;
