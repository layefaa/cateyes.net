import React from 'react'

export default function WebsiteLayout({children,}: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <head/>
      <body>
      <nav>
        {/*Navbar*/}
      </nav>
      {children}
      <footer>
        {/*Footer*/}
      </footer>
      </body>
      </html>
  )
}
