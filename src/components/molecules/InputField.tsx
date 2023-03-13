import React from 'react';
import {Label} from "@/components/atoms";
import {IInput} from "@/interfaces";
import styles from "@/styles";


const InputField = ({label, type, placeholder}: IInput) => {
  return (
      <div className={'mb-[1.5rem] sm:mb-[2rem] lg:mb-[3rem] flex flex-col w-full'}>
        <Label label={label}/>
        <input placeholder={placeholder} type={type}
               className={` ${styles.inputStyle}`}/>
      </div>
  );
};

export default InputField;
