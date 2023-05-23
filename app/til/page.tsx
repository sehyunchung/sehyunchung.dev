import { Suspense } from "react"
import { Metadata } from "next"

import { getAllTILs } from "@/lib/github-api"
import { TilPageAlert } from "@/components/til-alert"

import { TILItem } from "./[id]/page"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "TIL",
    description: "Today I Learned",
    openGraph: {
      images: ["/api/og?title=TIL"],
      title: "TIL",
      description: "Today I Learned",
    },
    twitter: {
      images: ["/api/og?title=TIL"],
      title: "TIL",
      description: "Today I Learned",
      card: "summary_large_image",
    },
  }
}

export default function TILListPage() {
  return (
    <article className="w-[100%] whitespace-pre-wrap">
      <h1 className="uppercase">til</h1>
      <TilPageAlert />
      <Suspense fallback={<div className="pt-4">Loading...</div>}>
        {/* @ts-ignore */}
        <AllTILList />
      </Suspense>
    </article>
  )
}

export function TilList({ tils }: { tils: any }) {
  return (
    <>
      {tils?.map((til: any) => (
        <TILItem
          key={til.id}
          className="break-words border-b border-b-gray-200 pb-6 pt-4"
          til={til}
        />
      ))}
    </>
  )
}

export async function AllTILList() {
  const tils = await getAllTILs()

  return <TilList tils={tils} />
}
