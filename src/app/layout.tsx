import '@/styles/globals.css'
import React from 'react'
import MenuContextProvider from "@/context/MenuContextProvider";
import "swiper/swiper-bundle.css";

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <head/>
      <body>
      <MenuContextProvider>
        {children}
      </MenuContextProvider>
      </body>
      </html>
  )
}
