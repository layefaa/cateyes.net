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
  activeTab: string;
  handleClick: (id: string) => void;
};
const Tabs = ({tabsData, activeTab, handleClick}: Required<TabsProps>) => {
  return (
      <div className={'w-[90rem] flex gap-[1rem] mx-auto'}>
        {
          tabsData.map((tab) => (
              <Button active={tab.content === activeTab} key={tab.id} onClick={() => handleClick(tab.content)}
                      type={'tab'}
                      label={tab.title}/>
          ))}
      </div>
  );
};

export default Tabs;
