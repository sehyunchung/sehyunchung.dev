import { allNotes } from "@/.contentlayer/generated"
import { Metadata } from "next"

import { Giscus } from "@/components/giscus"
import { getOgImgUrl } from "@/lib/utils"

import { NoteItem } from "../components"

export async function generateStaticParams() {
	const params = allNotes.map((note) => ({
		id: note.id,
		slugAsParams: note.slugAsParams,
	}))
	return params
}

export async function generateMetadata({
	params,
}: {
	params: { id?: string; slugAsParams?: string }
}): Promise<Metadata> {
	const identifier = params?.id || params.slugAsParams
	if (!identifier) return {}

	const note = allNotes.find((note) => {
		if (note.id) {
			const tilId = note?.id?.replace(/=/g, "")
			return tilId === identifier
		}
		return note.slugAsParams === identifier
	})

	if (!note) {
		return {}
	}

	const title = note?.title

	const ogImg = getOgImgUrl()
	ogImg.searchParams.set("title", "Note")
	ogImg.searchParams.set("description", title)

	return {
		title,
		openGraph: {
			images: [ogImg],
			title: "Note",
			description: title,
		},
		twitter: {
			images: [ogImg],
			title,
			description: title,
			card: "summary_large_image",
		},
	}
}

export default async function TilItemPage({
	params,
}: {
	params: { id?: string; slugAsParams?: string }
}) {
	const identifier = params?.id || params.slugAsParams || ""
	const note = allNotes.find((note) => {
		if (note.id) {
			return note.id === identifier
		}
		return note.slugAsParams === identifier
	})

	if (!note) return null

	return (
		<>
			<NoteItem note={note} />
			{/* <Giscus /> */}
		</>
	)
}
