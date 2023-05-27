import Link from "next/link"

import { LogoNav } from "./logo-nav"
import { ModeToggle } from "./mode-toggle"

export function GlobalHeader() {
  return (
    <header>
      <div className="flex items-center justify-between">
        <ModeToggle />
        <nav className="h-12 ml-auto space-x-6 flex items-center no-underline prose-a:no-underline">
          <Link href="/">Home</Link>
          <Link href="/til">TIL</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/about" passHref>
            <LogoNav className="h-12 pt-1" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
