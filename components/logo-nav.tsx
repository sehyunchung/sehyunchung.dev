"use client"

import { usePathname } from "next/navigation"

import { MeltingFace } from "./logo"

export function LogoNav(props: React.SVGProps<SVGSVGElement>) {
  const path = usePathname()

  if (path === "/") return null

  return <MeltingFace {...props} />
}
