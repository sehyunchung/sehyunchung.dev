import { Footer } from "@/components/footer"
import { GlobalHeader } from "@/components/global-header"

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
