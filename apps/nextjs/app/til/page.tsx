import { Metadata } from "next";
import { allTils } from "@/.contentlayer/generated";

import { getOgImgUrl } from "@/lib/utils";

import { TILItem } from "./components";

export async function generateMetadata(): Promise<Metadata> {
	const ogImg = getOgImgUrl();
	ogImg.searchParams.set("title", "TIL");

	return {
		title: "TIL",
		description: "Today I Learned",
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
	};
}

export default async function TILListPage() {
	return (
		<article className="w-[100%]">
			{/* @ts-ignore */}
			{allTils
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
	);
}
