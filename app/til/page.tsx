import { Suspense } from "react"
import { Metadata, ResolvingMetadata } from "next"
import Link from "next/link"
import { md } from "tagged-md"

import { cn, getTILs } from "@/lib/utils"
import { badgeVariants } from "@/components/ui/badge"
import { TilPageAlert } from "@/components/til-alert"

export const metadata = {
  title: "TIL",
  openGraph: {
    images: ["https://sehyunchung.dev/api/og?title=TIL"],
  },
  twitter: {
    images: ["https://sehyunchung.dev/api/og?title=TIL"],
  },
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
        <div
          key={til.id}
          className="break-words border-b border-b-gray-200 pb-6 pt-4"
        >
          <Link className="no-underline" href={`/til#${til.id}`}>
            <h2 id={til.id} className="text-md font-mono">
              <div className="pb-4 text-sm font-normal">
                {new Date(til.createdAt)?.toLocaleDateString("ko")}
              </div>
              {til.title}
            </h2>
          </Link>
          <div
            className="prose-headings:underline prose-pre:py-5"
            dangerouslySetInnerHTML={{ __html: md({ gfm: true })`til.body` }}
          />
          <div className="mb-2 flex gap-2 pt-4">
            {til.labels.nodes.map((label: any) => (
              <Link
                className={cn(
                  badgeVariants({
                    variant: "outline",
                  }),
                  "no-underline"
                )}
                href={`/til/${label.name}`}
                key={label.id}
              >
                {label.name}
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
