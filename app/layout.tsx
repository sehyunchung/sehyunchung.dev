import "./globals.css"
import { berkeleyMono, comicMono, comicNeue, gothicA1 } from "@/lib/fonts"
import { Analytics } from "@/components/analytics"
import {
  ScriptGoogleDataLayerInline,
  ScriptGoogleTagManager,
  ScriptMSClarity,
} from "@/components/external-scripts"
import { GlobalHeader } from "@/components/global-header"
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
    images: ["https://sehyunchung.dev/og"],
  },
  twitter: {
    card: "summary_large_image",
    title: "sehyunchung.dev",
    description: "A personal website",
    creator: "@sehyun_chung",
    images: ["https://sehyunchung.dev/og"],
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
      className={`${berkeleyMono.variable} ${comicMono.variable} ${comicNeue.variable} ${gothicA1.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ScriptMSClarity />
        <ScriptGoogleTagManager />
        <ScriptGoogleDataLayerInline />
      </head>
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 break-keep`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="prose prose-neutral prose-lg dark:prose-invert max-w-2xl mx-auto py-10 container px-4">
            <GlobalHeader />
            <main className="flex flex-col">{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
