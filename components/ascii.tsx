const Box = ({
  text,
  width,
  ...props
}: { text: string; width?: number } & React.ComponentProps<"span">) => {
  const height = 3
  const w = width ? width : text.length + 2

  const dimension = Array.from({ length: height }, () =>
    Array.from({ length: w }, () => " ")
  )

  const top = dimension[0].map((_, i) => {
    if (i === 0) return "┌"
    if (i === w - 1) return "┐"
    return "─"
  })

  const middle = dimension[1].map((_, i) => {
    if (i === 0) return "│"
    if (i === w - 1) return "│"
    return " "
  })

  const bottom = dimension[2].map((_, i) => {
    if (i === 0) return "└"
    if (i === w - 1) return "┘"
    return "─"
  })

  return (
    <span
      role="none"
      className="relative flex flex-col text-xs leading-tight"
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
  )
}

export const ASCII = {
  Box,
}
