"use client"

import { Badge } from "./ui/badge"

export function TilTag({
  children,
}: React.ComponentProps<typeof Badge> & { children: React.ReactNode }) {
  return <Badge variant="outline">#{children}</Badge>
}
