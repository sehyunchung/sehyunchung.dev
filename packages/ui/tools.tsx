import * as React from "react"
import { BoxVariant } from "."

/**
 * # `stringDigger`⛏️
 *
 * Extract text from children
 * @param {React.ReactNode} children
 * @returns {string} The text from children
 */
export function stringDigger(children: React.ReactNode): string {
	if (Array.isArray(children)) {
		return children.map(stringDigger).join(" ")
	}

	if (React.isValidElement(children) && children.props.children !== undefined) {
		return stringDigger(children.props.children)
	}

	if (typeof children === "string" || typeof children === "number") {
		return children.toString()
	}

	return ""
}

export const getBoxDrawingChars = (type: BoxVariant) => {
	switch (type) {
		case "arrow":
			return {
				topLeft: "↘",
				topRight: "↙",
				bottomLeft: "↗",
				bottomRight: "↖",
				topHorizontal: "↓",
				bottomHorizontal: "↑",
				verticalStart: "→",
				verticalEnd: "←",
				space: " ",
				shadow: "░",
			} as const
		case "double":
			return {
				topLeft: "╔",
				topRight: "╗",
				bottomLeft: "╚",
				bottomRight: "╝",
				horizontal: "═",
				vertical: "║",
				space: " ",
				shadow: "░",
			} as const
		case "rounded":
			return {
				topLeft: "╭",
				topRight: "╮",
				bottomLeft: "╰",
				bottomRight: "╯",
				horizontal: "─",
				vertical: "│",
				space: " ",
				shadow: "░",
			} as const
		case "classic":
			return {
				topLeft: "+",
				topRight: "+",
				bottomLeft: "+",
				bottomRight: "+",
				horizontal: "─",
				vertical: "│",
				space: " ",
				shadow: "░",
			} as const
		default:
			return {
				topLeft: "┌",
				topRight: "┐",
				bottomLeft: "└",
				bottomRight: "┘",
				horizontal: "─",
				vertical: "│",
				space: " ",
				shadow: "░",
			} as const
	}
}

export const makeBoxString = ({
	variant = "single",
	cols,
	rows = 3,
	text = "",
	shadow = false,
}: {
	variant?: BoxVariant
	cols?: number
	rows?: number
	text?: string
	shadow?: boolean
}) => {
	const boxDrawingChars = getBoxDrawingChars(variant)
	const colsLength = cols ? cols : text.length + 2
	const middleRows = rows - 2

	let boxStr = ""

	for (let i = 0; i < colsLength; i++) {
		if (i === 0) {
			boxStr += boxDrawingChars.topLeft
		} else if (i === colsLength - 1) {
			boxStr += boxDrawingChars.topRight
		} else {
			boxStr +=
				variant === "arrow"
					? boxDrawingChars.topHorizontal
					: boxDrawingChars.horizontal
		}
	}

	if (shadow) {
		boxStr += " "
	}

	for (let i = 0; i < middleRows; i++) {
		boxStr += "\n"
		for (let j = 0; j < colsLength; j++) {
			if (j === 0) {
				boxStr +=
					variant === "arrow"
						? boxDrawingChars.verticalStart
						: boxDrawingChars.vertical
			} else if (j === colsLength - 1) {
				boxStr +=
					variant === "arrow"
						? boxDrawingChars.verticalEnd
						: boxDrawingChars.vertical
				boxStr += shadow ? boxDrawingChars.shadow : ""
			} else {
				boxStr += boxDrawingChars.space
			}
		}
	}

	boxStr += "\n"

	for (let i = 0; i < colsLength; i++) {
		if (i === 0) {
			boxStr += boxDrawingChars.bottomLeft
		} else if (i === colsLength - 1) {
			boxStr += boxDrawingChars.bottomRight
			boxStr += shadow ? boxDrawingChars.shadow : ""
		} else {
			boxStr +=
				variant === "arrow"
					? boxDrawingChars.bottomHorizontal
					: boxDrawingChars.horizontal
		}
	}

	if (shadow) {
		boxStr += "\n"
		for (let i = 0; i < colsLength; i++) {
			if (i === 0) {
				boxStr += boxDrawingChars.space
			} else {
				boxStr += boxDrawingChars.shadow
			}
		}
		boxStr += boxDrawingChars.shadow
	}

	return boxStr
}
