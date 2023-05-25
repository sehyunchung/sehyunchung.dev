import { Suspense } from "react"
import { Metadata } from "next"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"

import { getAllTILIds, getAllTILs } from "@/lib/github-api"
import { cn, getOgImgUrl } from "@/lib/utils"
import { badgeVariants } from "@/components/ui/badge"
import { MDXTIL } from "@/components/mdx-components"

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
  let tils = await getAllTILs()
  let id = decodeURIComponent(params.id)
  let til = tils.find((til: any) => {
    return til.id === id
  })

  if (!til) return null

  return <TILItem til={til} />
}

export function TILItem({
  til,
  ...props
}: React.ComponentProps<"div"> & {
  til: {
    id: string
    title: string
    body: string
    bodyHTML: string
    createdAt: string
    labels: { nodes: { name: string }[] }
  }
}) {
  return (
    <div
      key={til.id}
      className="break-words border-b border-b-gray-200 pb-6 pt-4"
      {...props}
    >
      <Link className="no-underline" href={`/til/${til.id}`}>
        <h2 id={til.id} className="text-md font-mono">
          <div className="pb-4 text-sm font-normal">
            {new Date(til.createdAt)?.toLocaleDateString("ko")}
          </div>
          {til.title}
        </h2>
      </Link>
      <Suspense>
        {/* @ts-expect-error */}
        <MDXTIL source={til.body} />
      </Suspense>
      <div className="mb-2 flex gap-2 pt-4">
        {til.labels.nodes.map((label: any) => (
          <Link
            className={cn(
              badgeVariants({
                variant: "outline",
              }),
              "no-underline"
            )}
            href={`/til/label/${label.name}`}
            key={label.id}
          >
            {label.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
