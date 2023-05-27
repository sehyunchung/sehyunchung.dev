import { Comic_Neue, Gothic_A1 } from "next/font/google"
import localFont from "next/font/local"

export const berkeleyMono = localFont({
  variable: "--font-bk-mono",
  src: [
    {
      path: "./BerkeleyMonoVariable-Regular.woff2",
      style: "normal",
    },
    {
      path: "./BerkeleyMonoVariable-Italic.woff2",
      style: "italic",
    },
  ],
  display: "swap",
})

export const comicMono = localFont({
  variable: "--font-comic-mono",
  src: [
    {
      path: "./ComicMono-R.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./ComicMono-B.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
})

export const comicNeue = Comic_Neue({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-comic-neue",
})

export const gothicA1 = Gothic_A1({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-gothic-a1",
})
