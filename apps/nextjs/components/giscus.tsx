"use client"

import * as React from "react"
import GiscusReact from "@giscus/react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

export function Giscus({ className }: { className?: string }) {
	const { resolvedTheme } = useTheme()

	const theme =
		resolvedTheme === "system"
			? "preferred_color_scheme"
			: resolvedTheme === "dark"
			? "dark_dimmed"
			: "light"

	return (
		<div className={cn("pt-8", className)}>
			<GiscusReact
				id="giscus"
				repo="sehyunchung/sehyunchung.dev"
				repoId="MDEwOlJlcG9zaXRvcnkxNzM5NDczOTU="
				category="giscus"
				categoryId="DIC_kwDOCl46A84CXDR0"
				mapping="pathname"
				strict="0"
				reactionsEnabled="1"
				emitMetadata="0"
				inputPosition="bottom"
				theme={theme}
				lang="en"
			/>
		</div>
	)
}
