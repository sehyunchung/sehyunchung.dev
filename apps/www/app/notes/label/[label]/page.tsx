import { allNotes } from "@/.contentlayer/generated"
import { Metadata } from "next"

import { getOgImgUrl } from "@/lib/utils"

import { NoteItem } from "../../components"

export async function generateStaticParams() {
	const allLabels = Array.from(new Set(allNotes.flatMap((note) => note.labels)))
	return allLabels
}

export async function generateMetadata({
	params,
	// rome-ignore lint/suspicious/noExplicitAny: we can't type search params
}: { params: Record<string, any> }): Promise<Metadata> {
	const label = decodeURIComponent(params.label)
	const ogImg = getOgImgUrl()
	ogImg.searchParams.set("title", "note")

	return {
		title: `#${label}`,
		description: `Notes - ${label}`,
		openGraph: {
			images: [ogImg],
			title: "Note",
			description: "A short note",
		},
		twitter: {
			images: [ogImg],
			title: "Note",
			description: "A short note",
			card: "summary_large_image",
		},
	}
}

export default async function NoteLabelPage({
	params,
}: {
	params: { label: string }
}) {
	const label = decodeURIComponent(params.label)

	const notes = allNotes
		.filter((note) => note.labels.includes(label))
		.sort((a, b) => {
			const aDate = new Date(a.createdAt)
			const bDate = new Date(b.createdAt)
			return bDate.getTime() - aDate.getTime()
		})

	return (
		<>
			<h1 className="font-mono text-3xl">#{label}</h1>
			{notes?.map((note) => (
				<NoteItem
					key={note._id}
					className="break-words border-b border-b-gray-200 py-6"
					note={note}
				/>
			))}
		</>
	)
}
