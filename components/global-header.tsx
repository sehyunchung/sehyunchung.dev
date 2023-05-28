"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

import { LogoNav } from "./logo-nav"
import { ModeToggle } from "./mode-toggle"

const HEADER_NAV_LINKS = {
  Home: "/",
  TIL: "/til",
  Posts: "/posts",
} as const

export function HeaderNav() {
  const path = usePathname()

  const setActiveLinkIndicator = (href: string) => {
    return path === href
      ? "underline decoration-wavy decoration-[#ffea2b]"
      : "no-underline"
  }

  return (
    <nav className="h-12 ml-auto grid grid-flow-col gap-x-3 place-items-center prose-a:underline-offset-4">
      {Object.entries(HEADER_NAV_LINKS).map(([text, href]) => (
        <Link className={setActiveLinkIndicator(href)} href={href} key={href}>
          {text}
        </Link>
      ))}
      <Link href="/about" className="mr-1">
        <LogoNav className={cn("h-12 m-0 p-0")} />
      </Link>
    </nav>
  )
}

export function GlobalHeader() {
  return (
    <header>
      <div className="relative flex items-center justify-between">
        <ModeToggle className="absolute" />
        <HeaderNav />
      </div>
    </header>
  )
}
