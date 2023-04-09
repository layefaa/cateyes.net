import {Quicksand} from "next/font/google";
import localFont from "next/font/local"

export const quickSand = Quicksand({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  preload: true
})

export const morva = localFont({
  preload: true,
  src: [
    {
      path: '../public/fonts/MORVA.otf',
    }, {
      path: '../public/fonts/MORVA.ttf',
    },
  ],
})