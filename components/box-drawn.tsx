const Box = ({
  rows = 3,
  cols,
  doubleStroke = false,
  shadow = false,
  rounded = false,
  classic = false,
  arrow = false,
  children,
  ...props
}: {
  rows?: number
  cols?: number
  doubleStroke?: boolean
  shadow?: boolean
  rounded?: boolean
  classic?: boolean
  arrow?: boolean
} & React.ComponentProps<"span">) => {
  if (typeof children !== "string") {
    throw new Error("Box component only accepts string as children")
  }

  const text = children

  const middleRowsLength = rows - 2

  const colsLength = cols ? cols : text.length + 2

  const boxChars = arrow
    ? {
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
        empty: " ",
      }
    : doubleStroke
    ? {
        topLeft: "╔",
        topRight: "╗",
        bottomLeft: "╚",
        bottomRight: "╝",
        horizontal: "═",
        vertical: "║",
        space: " ",
        shadow: "░",
        empty: " ",
      }
    : {
        topLeft: rounded ? "╭" : classic ? "+" : "┌",
        topRight: rounded ? "╮" : classic ? "+" : "┐",
        bottomLeft: rounded ? "╰" : classic ? "+" : "└",
        bottomRight: rounded ? "╯" : classic ? "+" : "┘",
        horizontal: "─",
        vertical: "│",
        space: " ",
        shadow: "░",
        empty: " ",
      }

  let str = ""

  for (let i = 0; i < colsLength; i++) {
    if (i === 0) {
      str += boxChars.topLeft
    } else if (i === colsLength - 1) {
      str += boxChars.topRight
    } else {
      str += arrow ? boxChars.topHorizontal : boxChars.horizontal
    }
  }

  if (shadow) {
    str += " "
  }

  for (let i = 0; i < middleRowsLength; i++) {
    str += "\n"
    for (let j = 0; j < colsLength; j++) {
      if (j === 0) {
        str += arrow ? boxChars.verticalStart : boxChars.vertical
      } else if (j === colsLength - 1) {
        str += arrow ? boxChars.verticalEnd : boxChars.vertical
        if (shadow) {
          str += boxChars.shadow
        }
      } else {
        str += boxChars.space
      }
    }
  }

  str += "\n"

  for (let i = 0; i < colsLength; i++) {
    if (i === 0) {
      str += boxChars.bottomLeft
    } else if (i === colsLength - 1) {
      str += boxChars.bottomRight
      if (shadow) {
        str += boxChars.shadow
      }
    } else {
      str += arrow ? boxChars.bottomHorizontal : boxChars.horizontal
    }
  }

  if (shadow) {
    str += "\n"
    for (let i = 0; i < colsLength; i++) {
      if (i === 0) {
        str += boxChars.empty
      } else {
        str += boxChars.shadow
      }
    }
    str += boxChars.shadow
  }

  return (
    <PresentationSpan
      style={{
        lineHeight: 1.1,
      }}
      className="relative grid z-10"
      {...props}
    >
      <AriaHiddenSpan
        style={{
          fontFamily:
            'ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro","Fira Mono", "Droid Sans Mono", "Courier New", monospace',
        }}
        className="whitespace-pre"
      >
        {str}
      </AriaHiddenSpan>
      <span
        style={{
          top: "50%",
          left: "50%",
          transform: shadow
            ? `translate(calc(-50% - ${100 / (colsLength + 1)}%), calc(-100%))`
            : "translate(-50%, -50%)",
        }}
        className="absolute"
      >
        {children}
      </span>
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
}: React.ComponentProps<"span">) => <span {...rest}>{children}</span>
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
