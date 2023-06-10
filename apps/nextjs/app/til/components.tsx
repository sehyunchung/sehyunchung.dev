import { Suspense } from "react";
import Link from "next/link";
import { Til } from "@/.contentlayer/generated";

import { cn } from "@/lib/utils";
import { badgeVariants } from "@/components/ui/badge";
import { MdxTil } from "@/components/mdx-components";

export function TILItem({
	til,
	...props
}: React.ComponentProps<"div"> & {
	til: Til;
}) {
	return (
		<div
			key={til.id}
			className="break-words border-b border-b-gray-200 pb-6"
			data-clarity-region="article"
			{...props}
		>
			<Link className="no-underline" href={`/til/${til.id}`}>
				<h2 id={til.id} className="text-md font-mono">
					<div className="pb-4 text-sm font-normal">
						{new Date(til.createdAt)?.toLocaleDateString("ko")}
					</div>
					{til.title}
				</h2>
			</Link>
			<div className="prose-img:my-0 prose-img:rounded-xl prose-pre:rounded-md">
				{/* @ts-expect-error */}
				<MdxTil code={til.content.code} />
			</div>
			<div className="mb-2 flex gap-2 pt-5">
				{til.labels.map((label) => (
					<Link
						className={cn(
							badgeVariants({
								variant: "outline",
							}),
							"no-underline",
						)}
						href={`/til/label/${label}`}
						key={label}
					>
						{label}
					</Link>
				))}
			</div>
		</div>
	);
}
