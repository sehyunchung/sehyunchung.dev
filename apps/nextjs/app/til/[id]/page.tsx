import { allTils } from "@/.contentlayer/generated"
import { Metadata } from "next"

import { Giscus } from "@/components/giscus"
import { getOgImgUrl } from "@/lib/utils"

import { TILItem } from "../components"

export async function generateStaticParams() {
	const ids = allTils.map((til) => til.id)
	return ids
}

export async function generateMetadata({
	params,
}: {
	params: { id: string }
}): Promise<Metadata> {
	const id = decodeURIComponent(params.id)

	const til = allTils.find((til) => {
		const tilId = til.id.replace(/=/g, "")
		return tilId === id
	})

	if (!til) {
		return {}
	}

	const title = til?.title

	const ogImg = getOgImgUrl()
	ogImg.searchParams.set("title", "TIL")
	ogImg.searchParams.set("description", title)

	return {
		title: "TIL",
		description: title,
		openGraph: {
			images: [ogImg],
			title: "TIL",
			description: title,
		},
		twitter: {
			images: [ogImg],
			title: "TIL",
			description: title,
			card: "summary_large_image",
		},
	}
}

export default async function TilItemPage({
	params,
}: {
	params: { id: string }
}) {
	const id = decodeURIComponent(params.id)
	const til = allTils.find((til) => {
		return til.id === id
	})

	if (!til) return null

	return (
		<>
			<TILItem til={til} />
			<Giscus />
		</>
	)
}
