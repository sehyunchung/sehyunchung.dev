import { Comic_Neue, Gothic_A1, JetBrains_Mono } from "next/font/google"
import localFont from "next/font/local"

export const jbMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  display: "swap",
  subsets: ["latin"],
})

export const pretendard = localFont({
  variable: "--font-pretendard",
  src: "./PretendardStdVariable.woff2",
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
