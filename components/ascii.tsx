const Box = ({
  text,
  width,
  ...props
}: { text: string; width?: number } & React.ComponentProps<"pre">) => {
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
    <pre role="none" className="relative flex flex-col text-xs " {...props}>
      <pre className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {text}
      </pre>
      <pre className="flex">
        {top.map((t, i) => (
          <code className="flex-1 flex justify-center" key={`top-${i}`}>
            {t}
          </code>
        ))}
      </pre>
      <pre className="flex">
        {middle.map((t, i) => (
          <code className="flex-1 flex justify-center" key={`middle-${i}`}>
            {t}
          </code>
        ))}
      </pre>
      <pre className="flex">
        {bottom.map((t, i) => (
          <code className="flex-1 flex justify-center" key={`bottom-${i}`}>
            {t}
          </code>
        ))}
      </pre>
    </pre>
  )
}

export const ASCII = {
  Box,
}
