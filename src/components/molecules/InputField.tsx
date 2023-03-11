import React from 'react';
import {Label} from "@/components/atoms";
import {IInput} from "@/interfaces";


const InputField = ({label, type, placeholder}: IInput) => {
  return (
      <div>
        <Label label={label}/>
        <input placeholder={placeholder} type={type}/>
      </div>
  );
};

export default InputField;
