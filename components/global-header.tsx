"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

import { ClassicBox } from "./classic-box"
import { LogoNav } from "./logo-nav"
import { ModeToggle } from "./mode-toggle"

const HEADER_NAV_LINKS = {
  Home: "/",
  TIL: "/til",
  Toys: "/toys",
  Posts: "/posts",
} as const

export function HeaderNav() {
  const path = usePathname()

  const setActiveLinkIndicator = (href: string) => {
    return path === href || (href !== "/" && path.startsWith(href))
      ? "underline decoration-wavy decoration-[#ffea2b]"
      : "no-underline"
  }

  return (
    <nav className="h-12 ml-auto grid grid-flow-col gap-x-3 md:gap-x-5 place-items-center prose-a:underline-offset-4">
      {Object.entries(HEADER_NAV_LINKS).map(([name, href]) => (
        <Link
          className={
            name === "TIL" ? "no-underline" : setActiveLinkIndicator(href)
          }
          href={href}
          key={href}
        >
          {name === "TIL" ? <ClassicBox>{name}</ClassicBox> : name}
        </Link>
      ))}
      <Link aria-label="About" href="/about" className="mr-1 h-12 w-12">
        <LogoNav className={cn("h-12 w-12 m-0 p-0")} />
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
