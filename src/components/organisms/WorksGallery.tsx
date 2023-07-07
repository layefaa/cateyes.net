'use client'
import React, {useState} from 'react';
import {m} from 'framer-motion';
import {galleryImages, tabsData} from "@/constants";
import {Tabs} from "@/components/molecules";
import styles from "@/styles";
import {fade} from "@/utils/motion";
import Image from "next/image";
import Overlay from "../atoms/Overlay";

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
        <m.div
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            className={'w-full relative'}
            variants={fade('spring', 1, 1)}
        >
            <div className={`overflow-x-auto ${styles.sectionPaddingY}`}>
                <Tabs handleClick={handleClick} activeTab={activeTab} tabsData={tabsData}/>
            </div>
            <div
                className="w-full p-5 pb-10 mx-auto mb-10 gap-[2rem] columns-1 sm:columns-2 lg:columns-3  space-y-[2.4rem]"
            >
                {
                    filteredImages.map((img, index) => {
                        return (
                            <m.div initial={{opacity: 0, y: -100}}
                                   animate={{opacity: 1, y: 0}}
                                   className={'relative group'}
                                   transition={transition} key={index}>
                                <Overlay
                                    className={'transition-opacity duration-300 delay-100 group-hover:opacity-0 cursor-pointer gradient-image'}/>
                                <Image
                                    src={img.url}
                                    alt=""
                                    className={'cursor-pointer transition-transform  group-hover:scale-110 duration-500 '}
                                    width={1000}
                                    height={1000}
                                    placeholder='blur'
                                    blurDataURL={'data:image/web;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPMyIirBwAEHQGvoLiC1wAAAABJRU5ErkJggg=='}
                                    style={{breakInside: 'avoid-column'}}
                                />
                            </m.div>

                        )
                    })
                }
            </div>
        </m.div>
    );
};

export default WorksGallery;

