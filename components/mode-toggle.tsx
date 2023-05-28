"use client"

import { useTheme } from "next-themes"

import { useMounted } from "@/lib/client-hooks"

import { BoxDrawn } from "./box-drawn"

export function ModeToggle(props: React.ComponentProps<"button">) {
  const mounted = useMounted()
  const { setTheme, resolvedTheme } = useTheme()

  let text: string = "?"
  if (mounted) {
    text = resolvedTheme === "light" ? "light" : "dark"
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      {...props}
    >
      <span className="sr-only">Toggle theme</span>
      <BoxDrawn.Box className="text-xs leading-[1.2]" shadow>
        {text}
      </BoxDrawn.Box>
    </button>
  )
}
