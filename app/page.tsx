import { BoxDrawn } from "@/components/box-drawn"

export default async function Home() {
  return (
    <div className="relative text-xl bottom-0 flex-auto flex flex-col h-[70vh]">
      <div className="absolute md:text-3xl left-[20%] top-[10%]">
        <BoxDrawn.Box variant="classic" cols={8} rows={4}>
          <span>hello</span>
        </BoxDrawn.Box>
      </div>
      <div className="absolute text-2xl md:text-4xl left-[14%] md:left-[30%] top-[36%] md:top-[35%]">
        <BoxDrawn.Box variant="arrow">
          <span>hello</span>
        </BoxDrawn.Box>
      </div>
      <div className="absolute md:text-2xl right-[10%] top-[14%]">
        <BoxDrawn.Box variant="rounded" shadow rows={8}>
          hello
        </BoxDrawn.Box>
      </div>
      <div className="absolute md:text-2xl left-[10%] bottom-[10%]">
        <BoxDrawn.Box variant="double" rows={5} cols={20} shadow>
          {"hello"}
        </BoxDrawn.Box>
      </div>
    </div>
  )
}
