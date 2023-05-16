"use client"

import { Badge } from "./ui/badge"

export function TilTag({
  children,
}: React.ComponentProps<typeof Badge> & { children: React.ReactNode }) {
  return (
    <Badge
      variant="outline"
      onClick={() => {
        alert("그러니까 이런 것이라던지...😅")
      }}
    >
      {children}
    </Badge>
  )
}
