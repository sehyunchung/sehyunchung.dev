import { Suspense } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { badgeVariants } from "@/components/ui/badge"
import { MDXTIL } from "@/components/mdx-components"

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
      className="break-words border-b border-b-gray-200 pb-6"
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
      <div className="prose-img:my-0 prose-img:rounded-xl">
        <Suspense>
          {/* @ts-expect-error */}
          <MDXTIL source={til.body} />
        </Suspense>
      </div>
      <div className="mb-2 flex gap-2 pt-5">
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

export function TilList({ tils }: { tils: any }) {
  return (
    <>
      {tils?.map((til: any) => (
        <TILItem
          key={til.id}
          className="break-words border-b border-b-gray-200 pb-6"
          til={til}
        />
      ))}
    </>
  )
}
