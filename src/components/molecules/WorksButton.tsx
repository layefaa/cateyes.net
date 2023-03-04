'use client'
import React from 'react';
import {useRouter} from "next/navigation";
import {Button} from "@/components/atoms";
import {IButton} from "@/interfaces";

const WorksButton = ({label}: IButton) => {
  const router = useRouter();
  return (
      <Button onClick={() => router.push('/works')} label={label}/>
  );
};

export default WorksButton;
