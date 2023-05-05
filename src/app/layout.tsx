import '@/styles/globals.css'
import React from 'react'
import {worksHeader} from "@/constants";


export const metadata = {
  // @ts-ignore
  title: {
    template: `CatEyes | %s`,
  },
  description: 'CatEyes Photography Studio Website',
  openGraph: {
    title: 'CatEyes Photography',
    description:  worksHeader,
    url: 'https://cateyes.net',
    siteName: 'Cateyes.net',
    images: [
      {
        url: '/cateyes.png',
        width: 800,
        height: 600,
      },
      {
        url: '/cateyes.png',
        width: 1800,
        height: 1600,
        alt: '',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  icons: {
    icon: '/cateyes.png',
    shortcut:'/cateyes.png',
    apple: '/cateyes.png',
    // other: {
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/apple-touch-icon-precomposed.png',
    // },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // viewport: {
  //   width: 'device-width',
  //   initialScale: 1,
  //   maximumScale: 1,
  // },
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
