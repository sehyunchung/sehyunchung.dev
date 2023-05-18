import { fetchTILLabels, getTILs } from "@/lib/utils"

import { TilList } from "../page"

export async function generateStaticParams() {
  return await fetchTILLabels()
}

export default async function TilTagPage({
  params,
}: {
  params: { label: string }
}) {
  const label = params.label

  const tils = await getTILs({
    labels: [label],
    first: 100,
    orderBy: {
      field: "CREATED_AT",
      direction: "DESC",
    },
  })

  return (
    <>
      <h1 className="font-mono">#{label}</h1>
      <TilList tils={tils} />
    </>
  )
}
