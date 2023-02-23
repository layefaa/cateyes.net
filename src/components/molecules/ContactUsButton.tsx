'use client'
import React from 'react';
import {useRouter} from 'next/navigation';
import {Button} from "@/components/atoms";

const ContactUsButton = () => {
  const router = useRouter();
  return (
      <Button onClick={() => router.push('/contact')} label={'Send us a message'}/>
  );
};

export default ContactUsButton;
