import Link from "next/link"

import "./globals.css"
import { Comic_Neue, Gothic_A1, JetBrains_Mono } from "next/font/google"
import localFont from "next/font/local"

import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import { ThemeProvider } from "@/components/theme-provider"

const jbMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  display: "swap",
  subsets: ["latin"],
})

const pretendard = localFont({
  variable: "--font-pretendard",
  src: "./PretendardStdVariable.woff2",
  display: "swap",
})

const comicMono = localFont({
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

const comicNeue = Comic_Neue({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-comic-neue",
})

const gothicA1 = Gothic_A1({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-gothic-a1",
})

export const metadata = {
  title: "Sehyun Chung",
  description: "...",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="ko"
      className={`${jbMono.variable} ${pretendard.variable} ${comicMono.variable} ${comicNeue.variable} ${gothicA1.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`antialiased font-elice min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 break-keep`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 container px-4">
            <header>
              <div className="flex items-center justify-between">
                <ModeToggle />
                <nav className="ml-auto text-sm font-medium space-x-6">
                  <Link href="/">Home</Link>
                  <Link href="/til">til</Link>
                  <Link href="/about">About</Link>
                </nav>
              </div>
            </header>
            <main className="flex flex-col">{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
