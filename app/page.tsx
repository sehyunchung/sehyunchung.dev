import { BoxDrawn } from "@/components/box-drawn"

export default async function Home() {
  return (
    <div className="relative text-xl bottom-0 flex-auto flex flex-col h-[70vh]">
      <div className="absolute md:text-3xl left-[20%] top-[10%]">
        <BoxDrawn.Box classic cols={8} rows={4}>
          {""}
        </BoxDrawn.Box>
      </div>
      <div className="absolute md:text-2xl left-[35%] top-[35%]">
        <BoxDrawn.Box cols={4} rows={4} shadow>
          {""}
        </BoxDrawn.Box>
      </div>
      <div className="absolute md:text-2xl right-[20%] top-[20%]">
        <BoxDrawn.Box rounded cols={8} rows={8}>
          {""}
        </BoxDrawn.Box>
      </div>
      <div className="absolute md:text-2xl left-[10%] bottom-[14%]">
        <BoxDrawn.Box doubleStroke rows={5} cols={20} shadow>
          {""}
        </BoxDrawn.Box>
      </div>
    </div>
  )
}
