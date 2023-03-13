import React from 'react';
import {Label} from "@/components/atoms";
import {IInput} from "@/interfaces";
import styles from "@/styles";

const TextAreaField = ({label, placeholder}: IInput) => {
  return (
      <div className={'mb-[1.5rem] sm:mb-[2rem] lg:mb-[3rem] flex flex-col'}>
        <Label label={label}/>
        <textarea className={`${styles.inputStyle} h-[12rem]`} placeholder={placeholder}/>
      </div>
  );
};

export default TextAreaField;
