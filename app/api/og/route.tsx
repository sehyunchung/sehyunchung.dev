import { ImageResponse } from "@vercel/og"

export const runtime = "edge"

const comicNeueR = fetch(
  new URL("./ComicNeue-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

const comicNeueB = fetch(new URL("./ComicNeue-Bold.ttf", import.meta.url)).then(
  (res) => res.arrayBuffer()
)

export async function GET(request: Request) {
  const url = new URL(request.url)
  const searchParams = url.searchParams
  const title = searchParams.has("title")
    ? searchParams.get("title")
    : "sehyunchung.dev"
  const description = searchParams.has("description")
    ? searchParams.get("description")
    : ""

  const comicNeueRegular = await comicNeueR
  const comicNeueBold = await comicNeueB

  return new ImageResponse(
    (
      <div
        tw="w-full h-full flex flex-col"
        style={{
          backgroundImage: "linear-gradient(to bottom, #dbf4ff, #fff1f1)",
        }}
      >
        <h1 tw="text-bold flex-auto flex flex-col justify-center items-center text-8xl capitalize">
          <div tw="text-[182px] -mt-8">{"🫠"}</div>
          {title}
          {description ? (
            <div tw="justify-center items-center text-bold text-4xl">
              {description}
            </div>
          ) : null}
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: "Comic Neue",
          weight: 400,
          data: comicNeueRegular,
          style: "normal",
        },
        {
          name: "Comic Neue",
          weight: 700,
          data: comicNeueBold,
          style: "normal",
        },
      ],
    }
  )
}
