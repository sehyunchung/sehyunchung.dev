import * as React from "react"

import { cn } from "@/lib/utils"

type BoxVariant = "single" | "arrow" | "double" | "rounded" | "classic"

const Box = ({
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
    <PresentationSpan
      style={{
        lineHeight: 1.1,
        width: `${shadow ? colsWidth + 1 : colsWidth}ch`,
        height: `${shadow ? rows + 1 : rows}em`,
      }}
      className={cn("relative grid place-items-center z-10", className)}
      {...props}
    >
      <AriaHiddenSpan
        style={{
          fontFamily:
            'ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro","Fira Mono", "Droid Sans Mono", "Courier New", monospace',
        }}
        className="absolute whitespace-pre"
      >
        {boxStr}
      </AriaHiddenSpan>
      <div
        style={{
          transform: `translate(-${shadow ? 0.5 : 0}ch, -${
            shadow ? 0.5 : 0
          }em)`,
        }}
      >
        {children}
      </div>
    </PresentationSpan>
  )
}
Box.displayName = "Box"

export const BoxDrawn = {
  Box,
}

const PresentationSpan = ({
  children,
  ...rest
}: React.ComponentProps<"span">) => (
  <span {...rest} role="presentation">
    {children}
  </span>
)
PresentationSpan.displayName = "PresentationSpan"

const AriaHiddenSpan = ({
  children,
  ...rest
}: React.ComponentProps<"span">) => (
  <span role="presentation" aria-hidden {...rest}>
    {children}
  </span>
)
AriaHiddenSpan.displayName = "AriaHiddenSpan"

const getBoxDrawingChars = (type: BoxVariant) => {
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

const makeBoxString = ({
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

/**
 * # `stringDigger`⛏️
 *
 * Extract the text from a ReactNode
 * @param {React.ReactNode} children
 * @returns {string} The text from children
 */
function stringDigger(children: React.ReactNode): string {
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
