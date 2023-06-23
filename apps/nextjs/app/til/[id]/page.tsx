import { Til, allTils } from "@/.contentlayer/generated"
import { Metadata } from "next"

import { Giscus } from "@/components/giscus"
import { getOgImgUrl } from "@/lib/utils"

import { TILItem } from "../components"

export async function generateStaticParams() {
	const params = allTils.map((til) => ({
		id: til.id,
		slugAsParams: til.slugAsParams,
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

	const til = allTils.find((til) => {
		if (til.id) {
			const tilId = til?.id?.replace(/=/g, "")
			return tilId === identifier
		}
		return til.slugAsParams === identifier
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
	params: { id?: string; slugAsParams?: string }
}) {
	const identifier = params?.id || params.slugAsParams || ""
	const til = allTils.find((til) => {
		if (til.id) {
			return til.id === identifier
		}
		return til.slugAsParams === identifier
	})

	if (!til) return null

	return (
		<>
			<TILItem til={til} />
			<Giscus />
		</>
	)
}
