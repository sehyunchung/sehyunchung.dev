import Link from "next/link"

import { allNotes } from "@/.contentlayer/generated"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { badgeVariants } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

function NotesLabels({ className }: { className?: string }) {
	const labels = Array.from(
		new Set(allNotes.flatMap((note) => note.labels)),
	).sort((x, y) => x.toLowerCase().localeCompare(y.toLowerCase()))
	return (
		<div className={cn("flex flex-wrap justify-center gap-2", className)}>
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
				{children}
				<div className="h-14" />
				<h2>Tags</h2>
				<NotesLabels />
			</div>
			<Footer className="mt-16" />
		</>
	)
}
