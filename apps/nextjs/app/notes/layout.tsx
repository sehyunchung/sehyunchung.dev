import Link from "next/link"

import { allNotes } from "@/.contentlayer/generated"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { badgeVariants } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

function NotesLabels() {
	const labels = Array.from(new Set(allNotes.flatMap((note) => note.labels)))
	return (
		<div className="flex flex-wrap gap-2">
			{labels.map((label) => (
				<Link
					className={cn(
						badgeVariants({
							variant: "outline",
						}),
						"no-underline",
					)}
					href={`/notes/label/${label}`}
					key={label}
				>
					{label}
				</Link>
			))}
		</div>
	)
}

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
				<NotesLabels />
				{children}
			</div>
			<Footer className="mt-16" />
		</>
	)
}
