import { Suspense } from "react"

import { MeltingFace } from "@/components/logo"

import { GetFromPyAPI } from "./py-api-test"

export default async function Home() {
  return (
    <div className="flex-auto flex flex-col">
      <Suspense fallback={<MeltingFace />}>
        {/* @ts-expect-error */}
        <GetFromPyAPI />
      </Suspense>
    </div>
  )
}
