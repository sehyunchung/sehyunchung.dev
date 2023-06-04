import { cn } from "@/lib/utils"

import { stringDigger } from "./box-drawn"

export function ClassicBox({
  color = "#d2d2ff",
  children,
  className,
}: React.ComponentProps<"div"> & {
  children: React.ReactNode
  color?: React.CSSProperties["backgroundColor"]
}) {
  const initial = stringDigger(children)[0]

  return (
    <div
      style={{
        borderStyle: "outset",
        borderColor: color,
        backgroundColor: color,
      }}
      className={cn(
        "relative flex justify-between border-4 h-[2em] px-[1em] pl-[1.5em] items-center leading-none font-bold italic capitalize font-serif",
        className
      )}
    >
      <span className="absolute drop-shadow-md left-[0.2em] top-[2%] text-[150%] flex font-gothic not-italic text-[#ff0] font-black">
        {initial}
      </span>
      <span className="flex">{children}</span>
    </div>
  )
}
