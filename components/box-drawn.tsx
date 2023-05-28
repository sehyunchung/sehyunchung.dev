const Presentation = ({ children, ...rest }: React.ComponentProps<"span">) => (
  <span {...rest}>{children}</span>
)
const Hidden = ({ children, ...rest }: React.ComponentProps<"span">) => (
  <span role="presentation" aria-hidden {...rest}>
    {children}
  </span>
)

const Box = ({
  width,
  doubleStroke = false,
  shadow = false,
  children,
  ...props
}: {
  width?: number
  doubleStroke?: boolean
  shadow?: boolean
} & React.ComponentProps<"span">) => {
  if (typeof children !== "string") {
    throw new Error("Box component only accepts string as children")
  }

  const text = children

  const w = width ? width : text.length + 2

  const boxChars = doubleStroke
    ? {
        topLeft: "╔",
        topRight: "╗",
        bottomLeft: "╚",
        bottomRight: "╝",
        horizontal: "═",
        vertical: "║",
        space: " ",
      }
    : {
        topLeft: "┌",
        topRight: "┐",
        bottomLeft: "└",
        bottomRight: "┘",
        horizontal: "─",
        vertical: "│",
        space: " ",
      }

  const top = Array.from({ length: w }, (_, i) => {
    if (i === 0) return boxChars.topLeft
    if (i === w - 1) return boxChars.topRight
    return boxChars.horizontal
  })

  const middle = Array.from({ length: w }, (_, i) => {
    if (i === 0) return boxChars.vertical
    if (i === w - 1) return boxChars.vertical
    return boxChars.space
  })

  const bottom = Array.from({ length: w }, (_, i) => {
    if (i === 0) return boxChars.bottomLeft
    if (i === w - 1) return boxChars.bottomRight
    return boxChars.horizontal
  })

  const shadowLength = w + text.length

  const sideShadow = Array.from({ length: shadowLength }, (_, i) =>
    i === w - 1 ? "░" : " "
  )
  const bottomShadow = Array.from({ length: shadowLength }, () => "░")

  return (
    <Presentation className="block relative leading-0">
      <Hidden className="relative z-10 flex flex-col leading-tight" {...props}>
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {children}
        </span>
        <Hidden className="flex">
          {top.map((t, i) => (
            <span className="flex-1 flex justify-center" key={`top-${i}`}>
              {t}
            </span>
          ))}
        </Hidden>
        <Hidden className="flex">
          {middle.map((t, i) => (
            <span className="flex-1 flex justify-center" key={`middle-${i}`}>
              {t}
            </span>
          ))}
        </Hidden>
        <Hidden className="flex">
          {bottom.map((t, i) => (
            <span className="flex-1 flex justify-center" key={`bottom-${i}`}>
              {t}
            </span>
          ))}
        </Hidden>
      </Hidden>
      {/* shadow */}
      <Hidden className="flex flex-col items-end absolute text-[0.5rem] leading-tight -bottom-[0.14rem] -right-[0.1rem] z-0">
        <span>
          {shadow &&
            sideShadow.map((t, i) => <span key={`shadow-0-${i}`}>{t}</span>)}
        </span>
        <span>
          {shadow &&
            sideShadow.map((t, i) => <span key={`shadow-1-${i}`}>{t}</span>)}
        </span>
        <span>
          {shadow &&
            sideShadow.map((t, i) => <span key={`shadow-2-${i}`}>{t}</span>)}
        </span>
        <span>
          {shadow &&
            bottomShadow.map((t, i) => (
              <span key={`shadow-bottom-${i}`}>{t}</span>
            ))}
        </span>
      </Hidden>
    </Presentation>
  )
}

export const BoxDrawn = {
  Box,
}
