'use client'
import {InputField} from "@/components/molecules";
import {Button} from "@/components/atoms";
import {FormProvider, useForm} from "react-hook-form";
import {email_validation, text_validation} from "@/utils/inputValidation";


const ContactUsForm = () => {

  // const sgMail = require('@sendgrid/mail')
  const call = async () => {
    const res = await fetch('/api/mail',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
                hello: 'world'
              }
          )
        })

    const result = await res.json()
    console.log(result)
  }
  const methods = useForm()

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
  })


  // useEffect(() => {
  //   call()
  // }, [])
  return (
      <FormProvider {...methods}>
        <form
            onSubmit={e => e.preventDefault()}
            noValidate
            className={`w-full h-fit flex flex-col bg-ce-tertiary-black p-[2rem] md:p-[3rem] xl:p-[6rem]`}>
          <div className={'flex lg:gap-[2rem] flex-col lg:flex-row justify-between'}>
            <InputField label={'First Name'} name={'last_name'} placeholder={'e.g John'} type={'text'}
                        validation={text_validation}/>
            <InputField label={'Last Name'} name={'first_name'} placeholder={'e.g Doe'} type={'text'}
                        validation={text_validation}/>
          </div>
          <InputField label={'email'} name={'email'} placeholder={'e.g johndoe@mail.com'} type={'email'}
                      validation={email_validation}/>
          <InputField multiline name={'message'} label={'Message'} validation={text_validation}
                      placeholder={'e.g I want to schedule an appointment for a shoot......'}/>
          <div className={'flex w-full justify-center mt-[2rem]'}>
            <Button onClick={onSubmit} label={'Submit'} type={'submit'}/>
          </div>
        </form>
      </FormProvider>
  );
};

export default ContactUsForm;
