import '@/styles/globals.css'
import React from 'react'


export const metadata = {
  // @ts-ignore
  title: {
    template: `CatEyes | %s`,
  },
  description: 'CatEyes Photography Studio Website',
  openGraph: {
    title: 'Cateyes.net',
    description: 'CatEyes Photography Studio Website',
    url: 'Cateyes.net',
    siteName: 'Cateyes.net',
    images: [
      {
        url: 'Cateyes.net/cateyes.svg',
        width: 800,
        height: 600,
      },
      {
        url: 'Cateyes.net/cateyes.svg',
        width: 1800,
        height: 1600,
        alt: '',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },

}

// export const metadata = {
//   title: {
//     template: `Cateyes Photography | %s `,
//   },
// }

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
