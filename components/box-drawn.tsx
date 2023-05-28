const PresentationSpan = ({
  children,
  ...rest
}: React.ComponentProps<"span">) => <span {...rest}>{children}</span>

const AriaHiddenSpan = ({
  children,
  ...rest
}: React.ComponentProps<"span">) => (
  <span role="presentation" aria-hidden {...rest}>
    {children}
  </span>
)

const Box = ({
  height = 3,
  width,
  doubleStroke = false,
  shadow = false,
  children,
  ...props
}: {
  height?: number
  width?: number
  doubleStroke?: boolean
  shadow?: boolean
} & React.ComponentProps<"span">) => {
  if (typeof children !== "string") {
    throw new Error("Box component only accepts string as children")
  }

  const text = children

  const middleLength = height - 2

  const calcedWidth = width ? width : text.length + 2

  const boxChars = doubleStroke
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
        topLeft: "┌",
        topRight: "┐",
        bottomLeft: "└",
        bottomRight: "┘",
        horizontal: "─",
        vertical: "│",
        space: " ",
        shadow: "░",
        empty: " ",
      }

  const top = Array.from({ length: calcedWidth }, (_, i) => {
    if (i === 0) return boxChars.topLeft
    if (i === calcedWidth - 1) return boxChars.topRight
    return boxChars.horizontal
  })

  const middle = Array.from({ length: middleLength }, (_, i) => i).map(() =>
    Array.from({ length: calcedWidth }, (_, i) => {
      if (i === 0) return boxChars.vertical
      if (i === calcedWidth - 1) return boxChars.vertical
      return boxChars.space
    })
  )

  const bottom = Array.from({ length: calcedWidth }, (_, i) => {
    if (i === 0) return boxChars.bottomLeft
    if (i === calcedWidth - 1) return boxChars.bottomRight
    return boxChars.horizontal
  })

  return (
    <PresentationSpan
      className="relative z-10 flex flex-col leading-[1.2] tracking-tight"
      {...props}
    >
      <span className="absolute flex justify-center items-center w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {children}
      </span>
      <AriaHiddenSpan className="flex">
        {top.map((topChar, i) => (
          <span
            className={`relative flex-1 flex justify-center ${
              shadow && i === calcedWidth - 1
                ? "after:absolute after:content-['░'] after:-right-[.7em] after:-bottom-[1.2em]"
                : ""
            }`}
            key={`top-${i}`}
          >
            {topChar}
          </span>
        ))}
      </AriaHiddenSpan>
      <AriaHiddenSpan className="flex flex-col">
        {middle.map((row, i) => (
          <span className="flex-1 flex" key={`middle-row-${i}`}>
            {row.map((middleChar, i) => (
              <span
                className={`relative flex-1 flex justify-center ${
                  shadow && i === calcedWidth - 1
                    ? "after:absolute after:content-['░'] after:-right-[.7em] after:-bottom-[1.2em]"
                    : ""
                }`}
                key={`middle-row-char-${i}`}
              >
                {middleChar}
              </span>
            ))}
          </span>
        ))}
      </AriaHiddenSpan>
      <AriaHiddenSpan className="flex">
        {bottom.map((bottomChar, i) => (
          <span
            className={`relative flex-1 flex justify-center ${
              shadow
                ? "after:absolute after:content-['░'] after:-right-[.7em] after:-bottom-[1.2em]"
                : ""
            }`}
            key={`bottom-${i}`}
          >
            {bottomChar}
          </span>
        ))}
      </AriaHiddenSpan>
    </PresentationSpan>
  )
}

export const BoxDrawn = {
  Box,
}
