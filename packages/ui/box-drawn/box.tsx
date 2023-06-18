import * as React from "react"

import { cn } from "../lib/utils"
import { makeBoxString, stringDigger } from "../tools"

export type BoxVariant = "single" | "arrow" | "double" | "rounded" | "classic"

const fontStack =
	'ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro","Fira Mono", "Droid Sans Mono", "Courier New", monospace'

export const Box = ({
	variant = "single",
	rows = 3,
	cols,
	shadow = false,
	className,
	children,
	...props
}: {
	variant?: "single" | "arrow" | "double" | "rounded" | "classic"
	rows?: number
	cols?: number
	shadow?: boolean
} & React.ComponentProps<"span">) => {
	const text = stringDigger(children)
	const colsWidth = cols ? cols : text.length + 2
	const boxStr = makeBoxString({ variant, cols, rows, text, shadow })

	return (
		<span
			role="figure"
			style={{
				lineHeight: 1.1,
				width: `${shadow ? colsWidth + 1 : colsWidth}ch`,
				height: `${shadow ? rows + 1 : rows}em`,
			}}
			className={cn("relative grid place-items-center z-10", className)}
			{...props}
		>
			<span
				aria-hidden
				style={{
					fontFamily: fontStack,
				}}
				className="absolute whitespace-pre"
			>
				{boxStr}
			</span>
			<div
				style={{
					transform: `translate(-${shadow ? 0.5 : 0}ch, -${shadow ? 0.5 : 0
						}em)`,
				}}
			>
				{children}
			</div>
		</span>
	)
}
Box.displayName = "Box"
