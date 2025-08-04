import { Metadata } from "next"
import { notFound } from "next/navigation"
import { allPages } from "content-collections"

import { Mdx } from "@/components/mdx-components"

interface PageProps {
	params: {
		slug: string[]
	}
}

async function getPageFromParams(params: PageProps["params"]) {
	const slug = params?.slug?.join("/")
	const page = allPages.find((page) => page.slugAsParams === slug)

	if (!page) {
		null
	}

	return page
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const page = await getPageFromParams(params)

	if (!page) {
		return {}
	}

	return {
		title: page.title,
	}
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
	return allPages.map((page) => ({
		slug: page.slugAsParams.split("/"),
	}))
}

export default async function PagePage({ params }: PageProps) {
	const page = await getPageFromParams(params)

	if (!page) {
		notFound()
	}

	return (
		<article className="py-6" data-clarity-region="article">
			<h1>{page.title}</h1>
			<Mdx code={page.body.code} />
		</article>
	)
}
