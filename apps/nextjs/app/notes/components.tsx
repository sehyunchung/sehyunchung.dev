import { Note } from "@/.contentlayer/generated"
import Link from "next/link"

import { Mdx } from "@/components/mdx-components"
import { badgeVariants } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function NoteItem({
	note,
	...props
}: React.ComponentProps<"div"> & {
	note: Note
}) {
	return (
		<div
			key={note.id}
			className="break-words border-b border-b-gray-200 pb-6"
			data-clarity-region="article"
			{...props}
		>
			<Link
				className="no-underline"
				href={`/notes/${note.id || note.slugAsParams}`}
			>
				<h2 id={note.id} className="text-md font-mono">
					<div className="pb-4 text-sm font-normal">
						{new Date(note.createdAt)?.toLocaleDateString("ko")}
					</div>
					{note.title}
				</h2>
			</Link>
			<div className="prose-img:my-0 prose-img:rounded-xl prose-pre:rounded-md">
				<Mdx code={note.body.code} />
			</div>
			<div className="mb-2 flex gap-2 pt-5">
				{note.labels.map((label) => (
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
		</div>
	)
}
