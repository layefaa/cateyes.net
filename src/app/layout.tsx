import '@/styles/globals.css'
import React from 'react'
import MenuContextProvider from "@/context/MenuContextProvider";
import "swiper/swiper-bundle.css";
import {quickSand} from "@/fonts";

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
      <html lang="en" className={quickSand.className}>
      <head/>
      <body>
      <MenuContextProvider>
        {children}
      </MenuContextProvider>
      </body>
      </html>
  )
}
