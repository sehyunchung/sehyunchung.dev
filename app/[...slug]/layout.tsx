import { GlobalHeader } from "@/components/global-header"

import { Footer } from "../layout"

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <GlobalHeader />
      <main className="flex flex-col min-h-[50vh]">{children}</main>
      <Footer />
    </>
  )
}
