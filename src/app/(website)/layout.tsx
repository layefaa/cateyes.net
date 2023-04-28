'use client'
import MenuContextProvider from "@/context/MenuContextProvider";
import "swiper/swiper-bundle.css";
import {domAnimation, LazyMotion} from "framer-motion"
import React, {lazy} from 'react'
import styles from "@/styles";
import {Header} from "@/components/templates";
import {quickSand} from "@/fonts";

const Footer = lazy(() => import('@/components/templates/Footer'));

// export const metadata = {
//   title: 'Bambuu',
//   description: 'Bambuu Website',
// }

export default function WebsiteLayout({children,}: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <head/>
      <body>
      <MenuContextProvider>
        <LazyMotion features={domAnimation}>
          <div className={`${styles.baseFontSize} ${quickSand.className} font-[300]`}>
            <Header/>
            <main
                className={`${styles.containerPaddingX} pt-[7.5rem] md:pt-[8rem] flex flex-col ${styles.spaceBetweenSections}`}>
              {children}
            </main>
            <Footer/>
          </div>
        </LazyMotion>
      </MenuContextProvider>
      </body>
      </html>
  )
}
