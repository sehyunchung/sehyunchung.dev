"use client"

import { useTheme } from "next-themes"

import { useMounted } from "@/lib/client-hooks"
import { cn } from "@/lib/utils"

import { BoxDrawn } from "./box-drawn"

export function ModeToggle(props: React.ComponentProps<"button">) {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <button
      type="button"
      className={cn(props.className)}
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      {...props}
    >
      <span className="sr-only">Toggle theme</span>
      <span className="dark:inline hidden">☽</span>
      <span className="inline dark:hidden">☼</span>
    </button>
  )
}
