"use client"

import { usePathname } from "next/navigation"

import { Logo } from "./logo"

export function LogoNav(props: React.SVGProps<SVGSVGElement>) {
  const path = usePathname()

  if (path === "/") return null

  return <Logo {...props} />
}
