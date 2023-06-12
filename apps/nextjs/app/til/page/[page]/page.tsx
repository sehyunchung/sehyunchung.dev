import Link from "next/link"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import { allTils } from "@/.contentlayer/generated/"

import { cn } from "@/lib/utils"

import { TILItem } from "../../components"

const sortedTils = allTils.sort(
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
	return chunkArray(allTils, 10).map((chunk, index) => index + 1)
}

export default function TilPaginatedPage({
	params: { page },
}: {
	params: { page: string }
}) {
	const currentPageTils = getPaginatedTils(page)
	const totalPages = Math.ceil(allTils.length / 10)
	const currentPage = Number(page)
	const prevPage = currentPage > 1 ? currentPage - 1 : 1
	const nextPage = currentPage < 10 ? currentPage + 1 : 10

	return (
		<>
			<article className="w-[100%]">
				{currentPageTils
					.sort(
						(a, b) =>
							new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
					)
					.map((til) => (
						<TILItem
							key={til.id}
							className="break-words border-b border-b-gray-200 pb-6"
							til={til}
						/>
					))}
			</article>
			<div className="flex justify-center items-center mt-8 gap-4">
				{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
					<Link
						href={`/til/page/${page}`}
						key={page}
						className={cn("flex justify-center items-center no-underline", {
							underline: page === currentPage,
							italic: page === currentPage,
						})}
					>
						{page === 1 ? "T" : page === 10 ? "l" : "i"}
					</Link>
				))}
			</div>
		</>
	)
}
