'use client'
import React, {useState} from 'react';
import {tabsData} from "@/constants";
import {Tabs} from "@/components/molecules";
import styles from "@/styles";

const WorksGallery = () => {
  const [activeTab, setTab] = useState(tabsData[0].id)
  const handleClick = (id: number) => {
    setTab(id);
  };
  return (
      <div>
        <div className={`overflow-x-auto ${styles.sectionPaddingY}`}>
          <Tabs handleClick={handleClick} activeTab={activeTab} tabsData={tabsData}/>
        </div>
        <div>
          {tabsData.map(
              (tab) =>
                  activeTab === tab.id && (
                      <div key={tab.id} className="p-4">
                        {tab.content}
                      </div>
                  )
          )}
        </div>
      </div>
  );
};

export default WorksGallery;
