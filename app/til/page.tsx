import { Suspense } from "react"
import { Metadata } from "next"

import { getAllTILs } from "@/lib/github-api"
import { getOgImgUrl } from "@/lib/utils"

import { TilList } from "./components"

export async function generateMetadata(): Promise<Metadata> {
  let ogImg = getOgImgUrl()
  ogImg.searchParams.set("title", "TIL")

  return {
    title: "TIL",
    description: "Today I Learned",
    openGraph: {
      images: [ogImg],
      title: "TIL",
      description: "Today I Learned",
    },
    twitter: {
      images: [ogImg],
      title: "TIL",
      description: "Today I Learned",
      card: "summary_large_image",
    },
  }
}

export default function TILListPage() {
  return (
    <article className="w-[100%]">
      <Suspense fallback={<div className="pt-4">Loading...</div>}>
        {/* @ts-ignore */}
        <AllTILList />
      </Suspense>
    </article>
  )
}

export async function AllTILList() {
  const tils = await getAllTILs()

  return <TilList tils={tils} />
}
