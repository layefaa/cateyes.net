'use client'
import {domAnimation, LazyMotion} from "framer-motion"
import React, {lazy} from 'react'
import styles from "@/styles";
import {Quicksand} from '@next/font/google';
import {Header} from "@/components/templates";

const Footer = lazy(() => import('@/components/templates/Footer'));

const quickSand = Quicksand({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
})

export default function WebsiteLayout({children,}: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <head/>
      <body>
      <LazyMotion features={domAnimation}>
        <div className={` ${quickSand.className} ${styles.baseFontSize} font-[300]`}>
          <Header/>
          <main
              className={`${styles.containerPaddingX} pt-[7.5rem] md:pt-[8rem] flex flex-col ${styles.spaceBetweenSections}`}>

            {children}
          </main>
          <Footer/>
        </div>
      </LazyMotion>
      </body>
      </html>
  )
}
