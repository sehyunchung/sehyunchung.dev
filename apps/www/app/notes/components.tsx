import { Note } from "content-collections"
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
		<article
			key={note._id}
			className="break-words border-b border-b-gray-200 py-6"
			{...props}
			data-clarity-region="article"
		>
			<Link
				className="no-underline "
				href={`/notes/${note?.id || note.slugAsParams}`}
			>
				<h1
					id={note._id}
					className="font-semibold flex items-center justify-between"
				>
					{note.title}
					<span className="text-sm font-medium">
						{new Date(note.createdAt)?.toLocaleDateString("ko")}
					</span>
				</h1>
			</Link>
			<div className="prose-img:my-0 prose-img:rounded-xl prose-pre:rounded-md">
				<Mdx code={note.body.code} />
			</div>
			<div className="mb-2 flex gap-2 pt-5">
				{note.labels.map((label: string) => (
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
		</article>
	)
}
