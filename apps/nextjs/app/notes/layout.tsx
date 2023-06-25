import Link from "next/link"

import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { TilPageAlert } from "@/components/til-alert"

export default function NoteLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<>
			<SiteHeader />
			<div className="py-8">
				<h1 className="capitalize">
					<Link className="font-bold no-underline" href="/notes">
						notes
					</Link>
				</h1>
				<TilPageAlert />
				{children}
			</div>
			<Footer className="mt-16" />
		</>
	)
}
