import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

export default function PagesLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<SiteHeader />
			<main className="flex flex-col min-h-[50vh]">{children}</main>
			<Footer />
		</>
	)
}
