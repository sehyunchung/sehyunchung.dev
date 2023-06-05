import Link from "next/link"

import { GlobalHeader } from "@/components/global-header"
import { TilPageAlert } from "@/components/til-alert"

export default function TILLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalHeader />
      <div className="pt-8">
        <h1 className="uppercase">
          <Link className="font-bold no-underline" href="/til">
            til
          </Link>
        </h1>
        <TilPageAlert />
        {children}
      </div>
    </>
  )
}
