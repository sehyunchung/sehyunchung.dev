import { Suspense } from "react"
import Link from "next/link"

import { getTILs } from "@/lib/utils"
import { TilPageAlert } from "@/components/til-alert"
import { TilTag } from "@/components/til-tag"

export function TilList({ tils }: { tils: any }) {
  return (
    <>
      {tils?.map((til: any) => (
        <div key={til.id} className="border-b border-b-gray-200 pb-4">
          <div className="pt-4 pb-2 text-sm">
            {new Date(til.createdAt)?.toLocaleDateString("ko")}
          </div>
          <h2 className="m-0 font-mono text-md">{til.title}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: til.bodyHTML }}
            className="whitespace-pre-line break-words max-[100%]"
          />
          <div className="flex gap-2 mb-2">
            {til.labels.nodes.map((label: any) => (
              <Link href={`/til/${label.name}`} key={label.id}>
                <TilTag className="font-mono" variant="outline" key={label.id}>
                  {label.name}
                </TilTag>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export async function AllTILList() {
  const tils = await getTILs()

  return <TilList tils={tils} />
}

export default function TILListPage() {
  return (
    <article className="w-[100%] whitespace-pre-wrap">
      <h1>til</h1>
      <TilPageAlert />
      <Suspense fallback={<div className="pt-4">Loading...</div>}>
        {/* @ts-ignore */}
        <AllTILList />
      </Suspense>
    </article>
  )
}
