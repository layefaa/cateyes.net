'use client'
import React from 'react';
import {useRouter} from 'next/navigation';
import {Button} from "@/components/atoms";
import {IButton} from "@/interfaces";

const AboutButton = ({label}: IButton) => {
  const router = useRouter();
  return (
      <Button onClick={() => router.push('/about')} label={label}/>
  );
};

export default AboutButton;
