'use client'
import React from 'react';
import {useRouter} from "next/navigation";
import {Button} from "@/components/atoms";
import {IButton} from "@/interfaces";

const WorksButton = ({label}: {label: string}) => {
  const router = useRouter();
  return (
      <Button type={'button'} onClick={() => router.push('/works')} label={label}/>
  );
};

export default WorksButton;
