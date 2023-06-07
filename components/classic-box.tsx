import { cn } from "@/lib/utils"

import { stringDigger } from "./box-drawn"

export function ClassicBox({
  children,
  className,
  dropCap = true,
}: React.ComponentProps<"div"> & {
  children: React.ReactNode
  dropCap?: boolean
  italic?: boolean
}) {
  const firstLetter = stringDigger(children)[0]

  return (
    <div
      style={{
        borderStyle: "outset",
      }}
      className={cn(
        "relative text-black flex border-[#d2d2ff] bg-[#d2d2ff] justify-between border-[0.2em] h-[2em] px-[1em] items-center leading-none font-bold capitalize font-serif",
        dropCap ? "pl-[1.5em]" : "",
        className
      )}
    >
      {dropCap && (
        <span className="absolute drop-shadow-md left-[0.2em] top-[10%] text-[130%] flex font-gothic not-italic text-[#ff0] font-black">
          {firstLetter}
        </span>
      )}
      <span className="flex">{children}</span>
    </div>
  )
}
