import React from 'react'
import styles from "@/styles";
import {Quicksand} from '@next/font/google';
import {Header} from "@/components/templates";


const quickSand = Quicksand({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
})

export default function WebsiteLayout({children,}: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <head/>
      <body>
      <div className={` ${quickSand.className} ${styles.baseFontSize}`}>
        <Header/>
        <main className={`${styles.containerPaddingX} pt-[7.5rem] md:pt-[8rem]`}>
          {children}
        </main>
        <footer>
          {/*Footer*/}
        </footer>
      </div>
      </body>
      </html>
  )
}
