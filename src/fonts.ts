import {Quicksand} from "@next/font/google";
import localFont from '@next/font/local'

export const quickSand = Quicksand({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
})

export const morva = localFont({
  src: [
    {
      path: '../public/fonts/MORVA.otf',
    }, {
      path: '../public/fonts/MORVA.ttf',
    },
  ],
})