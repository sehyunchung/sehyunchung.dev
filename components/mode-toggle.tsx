"use client"

import { useTheme } from "next-themes"

import { useMounted } from "@/lib/client-hooks"

import { ASCII } from "./ascii"

export function ModeToggle() {
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
    >
      <span className="sr-only">Toggle mode</span>
      <ASCII.Box text={text} />
    </button>
  )
}
