import Link from "next/link"

import { SiteHeader } from "@/components/site-header"
import { TilPageAlert } from "@/components/til-alert"

export default function TILLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<SiteHeader />
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
