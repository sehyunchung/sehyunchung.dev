const Box = ({
  text,
  width,
  doubleStroke = false,
  shadow = false,
  ...props
}: {
  text: string
  width?: number
  doubleStroke?: boolean
  shadow?: boolean
} & React.ComponentProps<"span">) => {
  const height = 3
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

  const bottomShadow = Array.from({ length: w + text.length }, (_, i) => {
    if (i === 0) return boxChars.space
    return "░"
  })

  return (
    <span className="block relative leading-0">
      <span
        role="none"
        className="relative z-10 flex flex-col text-xs leading-tight"
        {...props}
      >
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {text}
        </span>
        <span className="flex">
          {top.map((t, i) => (
            <span className="flex-1 flex justify-center" key={`top-${i}`}>
              {t}
            </span>
          ))}
        </span>
        <span className="flex">
          {middle.map((t, i) => (
            <span className="flex-1 flex justify-center" key={`middle-${i}`}>
              {t}
            </span>
          ))}
        </span>
        <span className="flex">
          {bottom.map((t, i) => (
            <span className="flex-1 flex justify-center" key={`bottom-${i}`}>
              {t}
            </span>
          ))}
        </span>
      </span>
      <span className="absolute text-[7px] bottom-5 -right-1 z-0">
        {shadow &&
          bottomShadow.map((t, i, arr) =>
            i === arr.length - 1 ? (
              <span key={`shadow-2-${i}`}>{t}</span>
            ) : (
              <span key={`shadow-2-${i}`}> </span>
            )
          )}
      </span>
      <span className="absolute text-[7px] bottom-3 -right-1 z-0">
        {shadow &&
          bottomShadow.map((t, i, arr) =>
            i === arr.length - 1 ? (
              <span key={`shadow-2-${i}`}>{t}</span>
            ) : (
              <span key={`shadow-2-${i}`}> </span>
            )
          )}
      </span>
      <span className="absolute text-[7px] bottom-1 -right-1 z-0">
        {shadow &&
          bottomShadow.map((t, i, arr) =>
            i === arr.length - 1 ? (
              <span key={`shadow-2-${i}`}>{t}</span>
            ) : (
              <span key={`shadow-2-${i}`}> </span>
            )
          )}
      </span>
      <span className="absolute text-[7px] -bottom-[0.7em] -right-[0.5em] z-0">
        {shadow &&
          bottomShadow.map((t, i) => <span key={`shadow-${i}`}>{t}</span>)}
      </span>
    </span>
  )
}

export const ASCII = {
  Box,
}
