import { Metadata, ResolvingMetadata } from "next"
import { allTils } from "@/.contentlayer/generated"

import { getAllTILLabels, getAllTILs } from "@/lib/github-api"
import { getOgImgUrl } from "@/lib/utils"

import { TILItem } from "../../components"

export async function generateStaticParams() {
	const allLabels = await getAllTILLabels()
	return allLabels
}

export async function generateMetadata(
	{ params }: any,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const label = decodeURIComponent(params.label)
	const ogImg = getOgImgUrl()
	ogImg.searchParams.set("title", "TIL")

	return {
		title: `#${label}`,
		description: `Today I Learned - ${label}`,
		openGraph: {
			images: [ogImg],
			title: "TIL",
			description: "Today I Learned",
		},
		twitter: {
			images: [ogImg],
			title: "TIL",
			description: "Today I Learned",
			card: "summary_large_image",
		},
	}
}

export default async function TilTagPage({
	params,
}: {
	params: { label: string }
}) {
	const label = decodeURIComponent(params.label)

	const tils = allTils
		.filter((til) => til.labels.includes(label))
		.sort((a, b) => {
			const aDate = new Date(a.createdAt)
			const bDate = new Date(b.createdAt)
			return bDate.getTime() - aDate.getTime()
		})

	return (
		<>
			<h2 className="font-mono text-3xl mb-0">#{label}</h2>
			{tils?.map((til: any) => (
				<TILItem
					key={til.id}
					className="break-words border-b border-b-gray-200 pb-6"
					til={til}
				/>
			))}
		</>
	)
}
