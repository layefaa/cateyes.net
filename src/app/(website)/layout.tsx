import React from 'react'
import {Header} from "@/components/templates";

export default function WebsiteLayout({children,}: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <head/>
      <body className={`bg-ce-primary-black text-ce-primary-white`}>
      <Header/>
      {children}
      <footer>
        {/*Footer*/}
      </footer>
      </body>
      </html>
  )
}
