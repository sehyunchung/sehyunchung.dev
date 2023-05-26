import Link from "next/link"

import "./globals.css"
import Script from "next/script"

import { comicMono, comicNeue, gothicA1 } from "@/lib/fonts"
import { Analytics } from "@/components/analytics"
import { LogoNav } from "@/components/logo-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: {
    template: "%s | sehyunchung.dev",
    default: "sehyunchung.dev",
  },
  description: "프론트엔드 괴발개발",
  openGraph: {
    url: "https://sehyunchung.dev",
    title: "sehyunchung.dev",
    description: "프론트엔드 괴발개발",
    siteName: "sehyunchung.dev",
    type: "website",
    images: ["https://sehyunchung.dev/api/og"],
  },
  twitter: {
    card: "summary_large_image",
    title: "sehyunchung.dev",
    description: "A personal website",
    creator: "@sehyun_chung",
    images: ["https://sehyunchung.dev/api/og"],
  },
  icons: ["https://sehunchung.dev/icon"],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="ko"
      className={`${comicMono.variable} ${comicNeue.variable} ${gothicA1.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* eslint-disable */}
        <Script
          id="ms-clarity"
          type="text/javascript"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "h9xndue0yj");`,
          }}
        />
      </head>
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 break-keep`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="prose prose-neutral prose-md sm:prose-base dark:prose-invert max-w-2xl mx-auto py-10 container px-4">
            <header>
              <div className="flex items-center justify-between">
                <ModeToggle />
                <nav className="h-12 ml-auto space-x-6 flex items-center no-underline prose-a:no-underline">
                  <Link href="/">Home</Link>
                  <Link href="/til">TIL</Link>
                  <Link href="/posts">Posts</Link>
                  <Link href="/about" passHref>
                    <LogoNav className="h-12 pt-1" />
                  </Link>
                </nav>
              </div>
            </header>
            <main className="flex flex-col">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
