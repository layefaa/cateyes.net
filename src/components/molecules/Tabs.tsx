'use client'
import React from 'react';
import {Button} from "@/components/atoms";

type Tab = {
  id: number;
  title: string;
  content: string;
};

type TabsProps = {
  tabsData: Tab[];
  activeTab: number;
  handleClick: (id: number) => void;
};
const Tabs = ({tabsData, activeTab, handleClick}: Required<TabsProps>) => {
  return (
      <div className={'w-[90rem] flex gap-[1rem] mx-auto'}>
        {
          tabsData.map((tab) => (
              <Button active={tab.id === activeTab} key={tab.id} onClick={() => handleClick(tab.id)} type={'tab'}
                      label={tab.title}/>
          ))}
      </div>
  );
};

export default Tabs;
