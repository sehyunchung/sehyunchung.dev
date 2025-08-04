import { Feed } from "feed"

import { allNotes } from "content-collections"

const feed = new Feed({
	title: "sehyunchung.dev",
	description: "Notes",
	id: "https://sehyunchung.dev/notes",
	link: "https://sehyunchung.dev/notes/feed",
	language: "ko",
	image: "https://sehyunchung.dev/og?title=notes",
	favicon: "https://sehyunchung.dev/favicon.ico",
	copyright: `All rights reserved ${new Date().getFullYear()}, Sehyun Chung`,
	feedLinks: {
		atom: "https://sehyunchung.dev/notes/feed",
	},
	author: {
		name: "Sehyun Chung",
		email: "hi@sehyunchung.dev",
		link: "https://sehyunchung.dev",
	},
})

export async function GET() {
	allNotes.forEach((note) => {
		feed.addItem({
			title: note.title,
			id: `https://sehyunchung.dev/notes/${note?.id || note.slug}`,
			link: `https://sehyunchung.dev/notes/${note?.id || note.slug}`,
			date: new Date(note.createdAt),
			category: note.labels.map((label) => {
				return {
					name: label,
					term: label,
				}
			}),
			content: note.labels.map((label) => label).join(", "),
		})
	})

	return new Response(feed.atom1(), {
		headers: {
			"Content-Type": "application/atom+xml; charset=utf-8",
		},
	})
}
