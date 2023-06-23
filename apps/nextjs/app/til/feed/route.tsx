import { Feed } from "feed"

import { allTils } from "@/.contentlayer/generated/index.mjs"

const feed = new Feed({
	title: "sehyunchung.dev",
	description: "Til",
	id: "https://sehyunchung.dev/til",
	link: "https://sehyunchung.dev/til/feed",
	language: "ko",
	image: "https://sehyunchung.dev/og?title=Til",
	favicon: "https://sehyunchung.dev/favicon.ico",
	copyright: `All rights reserved ${new Date().getFullYear()}, Sehyun Chung`,
	feedLinks: {
		atom: "https://sehyunchung.dev/til/feed",
	},
	author: {
		name: "Sehyun Chung",
		email: "hi@sehyunchung.dev",
		link: "https://sehyunchung.dev",
	},
})

export async function GET() {
	allTils.forEach((til) => {
		feed.addItem({
			title: til.title,
			id: `https://sehyunchung.dev/til/${til?.id || til.slug}`,
			link: `https://sehyunchung.dev/til/${til?.id || til.slug}`,
			date: new Date(til.createdAt),
			category: til.labels.map((label) => {
				return {
					name: label,
					term: label,
				}
			}),
			content: til.labels.map((label) => label).join(", "),
		})
	})

	return new Response(feed.atom1(), {
		headers: {
			"Content-Type": "application/atom+xml; charset=utf-8",
		},
	})
}
