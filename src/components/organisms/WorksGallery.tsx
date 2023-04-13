'use client'
import React, {useState} from 'react';
import {m} from 'framer-motion';
import {galleryImages, tabsData} from "@/constants";
import {Tabs} from "@/components/molecules";
import styles from "@/styles";

const WorksGallery = () => {
  const [activeTab, setTab] = useState(tabsData[0].content)
  const handleClick = (content: string) => {
    setTab(content);
  };

  const filteredImages = galleryImages.filter((img) =>
      img.content.toLowerCase().includes(activeTab)
  );

  const transition = {duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96]};

  return (
      <div>
        <div className={`overflow-x-auto ${styles.sectionPaddingY}`}>
          <Tabs handleClick={handleClick} activeTab={activeTab} tabsData={tabsData}/>
        </div>
        <div
            className="w-full p-5 pb-10 mx-auto mb-10 gap-[2rem] columns-1 sm:columns-2 lg:columns-3  space-y-[2.4rem]"
        >
          {
            filteredImages.map((img, index) => {
              return (
                  <m.img
                      key={index}
                      src={img.url}
                      alt=""
                      loading={'lazy'}
                      initial={{opacity: 0, y: -100}}
                      animate={{opacity: 1, y: 0}}
                      transition={transition}
                  />
              )
            })
          }
        </div>
      </div>
  );
};

export default WorksGallery;

