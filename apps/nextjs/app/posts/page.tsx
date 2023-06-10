import type { Route } from "next";
import Link from "next/link";
import { allPosts } from "@/.contentlayer/generated";

import { getOgImgUrl } from "@/lib/utils";

export async function generateMetadata() {
	const ogImg = getOgImgUrl();
	ogImg.searchParams.set("title", "Posts");

	return {
		title: "Posts",
		openGraph: {
			title: "Posts",
			images: [ogImg],
		},
		twitter: {
			card: "summary_large_image",
			title: "Posts",
			images: [ogImg],
		},
	};
}

export default async function PostsPage() {
	return (
		<div className="flex-auto">
			{allPosts
				.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
				.map((post) => (
					<article key={post._id}>
						<Link href={`/${post.slug}` as Route} className="no-underline">
							<h2 className="mb-2 flex flex-col justify-between">
								<div className="m-0 mb-2 bg-transparent p-0 text-xs text-slate-700 dark:text-slate-200">
									{new Date(post.date).toLocaleDateString("ko")}
								</div>
								{post.title}
							</h2>
							{post.description && (
								<p className="font-normal">{post.description}</p>
							)}
						</Link>
					</article>
				))}
		</div>
	);
}
