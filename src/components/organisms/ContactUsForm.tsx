'use client'
import {InputField} from "@/components/molecules";
import {Button} from "@/components/atoms";
import {FieldValues, FormProvider, useForm} from "react-hook-form";
import {email_validation, text_validation} from "@/utils/inputValidation";
import {useState} from "react";


const ContactUsForm = () => {
  const [isLoading, setLoading] = useState(false)
  const [isSuccess, setSuccess] = useState(false)
  const [isError, setError] = useState(false)
  const sendMail = async (data: FieldValues) => {
    const res = await fetch('/api/mail',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        })
    console.log(res.status)
    return res;
  }

  const methods = useForm()

  const onSubmit = methods.handleSubmit(data => {
    setLoading(true)
    sendMail(data)
        .then(
            (res) => {
              if (res.status === 200) {
                setSuccess(true)
              }
              if (res.status === 500) {
                setError(true)
              }
            })
        .finally(() => {
          setTimeout(() => {
            setLoading(false)
            setSuccess(false)
            setError(false)
            methods.reset()
          }, 1000)
        })
  })
  return (
      <FormProvider {...methods}>
        <form
            onSubmit={e => e.preventDefault()}
            noValidate
            className={`w-full h-fit flex flex-col bg-ce-tertiary-black p-[2rem] md:p-[3rem] xl:p-[6rem]`}>
          <div className={'flex lg:gap-[2rem] flex-col lg:flex-row justify-between'}>
            <InputField label={'first name'} id={'first_name'} name={'first_name'} placeholder={'e.g John'}
                        type={'text'}
                        validation={text_validation}/>
            <InputField label={'last name'} id={'last_name'} name={'last_name'} placeholder={'e.g Doe'} type={'text'}
                        validation={text_validation}/>
          </div>
          <InputField label={'email'} id={'email'} name={'email'} placeholder={'e.g johndoe@mail.com'} type={'email'}
                      validation={email_validation}/>
          <InputField multiline name={'message'} id={'message'} label={'message'} validation={text_validation}
                      placeholder={'e.g I want to schedule an appointment for a shoot......'}/>
          <div className={'flex w-full justify-center mt-[2rem]'}>
            <Button onClick={onSubmit} label={'Submit'} type={'submit'} isLoading={isLoading} isSuccess={isSuccess}
                    isError={isError}/>
          </div>
        </form>
      </FormProvider>
  );
};

export default ContactUsForm;
