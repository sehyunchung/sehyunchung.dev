import { cn } from "@/lib/utils"

import { stringDigger } from "./box-drawn"

export function ClassicBox({
  children,
  className,
}: React.ComponentProps<"div"> & { children: React.ReactNode }) {
  const initial = stringDigger(children)[0]

  return (
    <div
      style={{
        borderStyle: "outset",
      }}
      className={cn(
        "relative flex justify-between border-4 border-[#d2d2ff] bg-[#d2d2ff] h-[2em] px-[1em] pl-[1.5em] items-center leading-none font-bold italic capitalize font-serif",
        className
      )}
    >
      <span className="absolute drop-shadow-md left-[0.2em] bottom-[0.05em] text-[150%] flex font-gothic not-italic text-[#ff0] font-black">
        {initial}
      </span>
      <span className="flex">{children}</span>
    </div>
  )
}
