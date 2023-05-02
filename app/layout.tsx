import Link from "next/link"

import "./globals.css"
import localFont from "next/font/local"

import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import { ThemeProvider } from "@/components/theme-provider"

const pretendard = localFont({
  variable: "--font-pretendard",
  src: "./PretendardStdVariable.woff2",
  display: "swap",
})

const monaSans = localFont({
  variable: "--font-mona-sans",
  src: "./Mona-Sans.woff2",
  display: "swap",
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
    <html lang="ko" className={`${pretendard.variable} ${monaSans.variable}`}>
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 break-keep`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 container px-4">
            <header>
              <div className="flex items-center justify-between">
                <ModeToggle />
                <nav className="ml-auto text-sm font-medium space-x-6">
                  <Link href="/">Home</Link>
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
