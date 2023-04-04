import React from 'react';
import {InputField, TextAreaField} from "@/components/molecules";
import {Button} from "@/components/atoms";

const ContactUsForm = () => {
  return (
      <div className={`w-full h-fit flex flex-col bg-ce-tertiary-black p-[2rem] md:p-[3rem] xl:p-[6rem]`}>
        <div className={'flex lg:gap-[2rem] flex-col lg:flex-row justify-between'}>
          <InputField label={'First Name'} placeholder={'e.g John'} type={'text'}/>
          <InputField label={'Last Name'} placeholder={'e.g Doe'} type={'text'}/>
        </div>
        <InputField label={'Email'} placeholder={'e.g johndoe@mail.com'} type={'email'}/>
        <TextAreaField label={'Message'} placeholder={'e.g I want to schedule an appointment for a shoot......'}/>
        <div className={'flex w-full justify-center mt-[2rem]'}>
          <Button label={'Submit'} type={'submit'}/>
        </div>
      </div>
  );
};

export default ContactUsForm;
