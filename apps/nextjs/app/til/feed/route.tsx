import { Feed } from "feed";

import { getAllTILs } from "@/lib/github-api";

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
});

export async function GET() {
	const tils = await getAllTILs();

	tils.forEach((til: any) => {
		feed.addItem({
			title: til.title,
			id: `https://sehyunchung.dev/til/${til.id}`,
			link: `https://sehyunchung.dev/til/${til.id}`,
			date: new Date(til.createdAt),
			category: til.labels.nodes.map((label: any) => {
				return {
					name: label.name,
					term: label.name,
				};
			}),
			content: til.labels.nodes.map((label: any) => label.name).join(", "),
		});
	});

	return new Response(feed.atom1(), {
		headers: {
			"Content-Type": "application/atom+xml; charset=utf-8",
		},
	});
}
