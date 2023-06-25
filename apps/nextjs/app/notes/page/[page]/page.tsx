import { allNotes } from "@/.contentlayer/generated/"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { NoteItem } from "../../components"
import { Metadata } from "next"

const sortedTils = allNotes.sort(
	(a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
)

const getPaginatedTils = (page: string) => {
	const p = Number(page) - 1
	return sortedTils.slice(p * 10, p * 10 + 10)
}

function chunkArray<T>(array: T[], chunk: number): T[][] {
	const result = []
	for (let i = 0; i < array.length; i += chunk) {
		result.push(array.slice(i, i + chunk))
	}
	return result
}

export async function generateStaticParams() {
	return chunkArray(allNotes, 10).map((_, index) => index + 1)
}

export const metadata = {
	title: "Notes",
	description: "Some short notes",
}

export default function TilPaginatedPage({
	params: { page },
}: {
	params: { page: string }
}) {
	const currentPageTils = getPaginatedTils(page)
	const totalPages = Math.ceil(allNotes.length / 10)
	const currentPage = Number(page)

	return (
		<>
			<article className="w-[100%]">
				{currentPageTils
					.sort(
						(a, b) =>
							new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
					)
					.map((note) => (
						<NoteItem
							key={note.id}
							className="break-words border-b border-b-gray-200 pb-6"
							note={note}
						/>
					))}
			</article>
			<div className="flex justify-center items-center mt-8 gap-4">
				{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
					<Link
						href={`/notes/page/${page}`}
						key={page}
						className={cn("flex justify-center items-center no-underline", {
							underline: page === currentPage,
							"font-bold": page === currentPage,
						})}
					>
						{page}
					</Link>
				))}
			</div>
		</>
	)
}
