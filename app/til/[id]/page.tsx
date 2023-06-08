import { Metadata } from "next"
import { allTils } from "@/.contentlayer/generated"

import { getAllTILIds, getAllTILs } from "@/lib/github-api"
import { getOgImgUrl } from "@/lib/utils"
import { Footer } from "@/components/footer"
import { Giscus } from "@/components/giscus"

import { TILItem } from "../components"

export async function generateStaticParams() {
  let ids = getAllTILIds()
  return ids
}

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  let tils = await getAllTILs()

  let id = decodeURIComponent(params.id)

  let til = tils.find((til: any) => {
    let tilId = til.id.replace(/=/g, "")
    return tilId === id
  })

  if (!til) {
    return {}
  }

  let title = til?.title

  let ogImg = getOgImgUrl()
  ogImg.searchParams.set("title", "TIL")
  ogImg.searchParams.set("description", title)

  return {
    title: "TIL",
    description: title,
    openGraph: {
      images: [ogImg],
      title: "TIL",
      description: title,
    },
    twitter: {
      images: [ogImg],
      title: "TIL",
      description: title,
      card: "summary_large_image",
    },
  }
}

export default async function TilItemPage({
  params,
}: {
  params: { id: string }
}) {
  let id = decodeURIComponent(params.id)
  let til = allTils.find((til) => {
    return til.id === id
  })

  if (!til) return null

  return (
    <>
      <TILItem til={til} />
      <Giscus />
      <Footer />
    </>
  )
}
