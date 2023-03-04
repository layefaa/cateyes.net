'use client'
import React from 'react';
import {useRouter} from 'next/navigation';
import {Button} from "@/components/atoms";
import {IButton} from "@/interfaces";

const AboutButton = ({label}: {label:string}) => {
  const router = useRouter();
  return (
      <Button type={'button'} onClick={() => router.push('/about')} label={label}/>
  );
};

export default AboutButton;
