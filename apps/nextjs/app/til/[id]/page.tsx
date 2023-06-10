import { Metadata } from "next";
import { allTils } from "@/.contentlayer/generated";

import { getAllTILIds, getAllTILs } from "@/lib/github-api";
import { getOgImgUrl } from "@/lib/utils";
import { Footer } from "@/components/footer";
import { Giscus } from "@/components/giscus";

import { TILItem } from "../components";

export async function generateStaticParams() {
	const ids = getAllTILIds();
	return ids;
}

export async function generateMetadata({
	params,
}: {
	params: { id: string };
}): Promise<Metadata> {
	const tils = await getAllTILs();

	const id = decodeURIComponent(params.id);

	const til = tils.find((til: any) => {
		const tilId = til.id.replace(/=/g, "");
		return tilId === id;
	});

	if (!til) {
		return {};
	}

	const title = til?.title;

	const ogImg = getOgImgUrl();
	ogImg.searchParams.set("title", "TIL");
	ogImg.searchParams.set("description", title);

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
	};
}

export default async function TilItemPage({
	params,
}: {
	params: { id: string };
}) {
	const id = decodeURIComponent(params.id);
	const til = allTils.find((til) => {
		return til.id === id;
	});

	if (!til) return null;

	return (
		<>
			<TILItem til={til} />
			<Giscus />
			<Footer />
		</>
	);
}
