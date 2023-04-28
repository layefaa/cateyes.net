import '@/styles/globals.css'
import React from 'react'

export const metadata = {
  title: 'CatEyes Photography',
  description: 'CatEyes Photography Studio Website',
}
export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <head/>
      <body>
      {children}
      </body>
      </html>
  )
}
