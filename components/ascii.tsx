const Box = ({
  width,
  height = 3,
  text,
}: {
  width: number
  height?: number
  text: string
}) => {
  const dimension = Array.from({ length: height }, () =>
    Array.from({ length: width }, () => " ")
  )
  const top = dimension[0].map((_, i) => {
    if (i === 0) return "┌"
    if (i === width - 1) return "┐"
    return "─"
  })
  const bottome = dimension[2].map((_, i) => {
    if (i === 0) return "└"
    if (i === width - 1) return "┘"
    return "─"
  })
  const middle = dimension[1].map((_, i) => {
    if (i === 0) return "│"
    if (i === width - 1) return "│"
    return " "
  })

  return (
    <div className="relative flex flex-col text-xs ">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {text}
      </div>
      <div className="flex">
        {top.map((t, i) => (
          <code className="flex-1 flex" key={i}>
            {t}
          </code>
        ))}
      </div>
      <div className="flex translate-x-[1px]">
        {middle.map((t, i) => (
          <code className="flex-1 flex justify-center" key={i}>
            {t}
          </code>
        ))}
      </div>
      <div className="flex">
        {bottome.map((t, i) => (
          <code className="flex-1 flex" key={i}>
            {t}
          </code>
        ))}
      </div>
    </div>
  )
}

export const ASCII = {
  Box,
}
