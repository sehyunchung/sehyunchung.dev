import { getBaseUrl } from "@/lib/utils"
import { MeltingFace } from "@/components/logo"

export default async function Home() {
  const data = await fetch(`${getBaseUrl().toString()}api/python`)
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText)
      }
      console.log({ res })
      return res.json()
    })
    .then((json) => {
      console.log({ json })
      return json
    })
    .catch((err) => console.log({ err }))
  return (
    <div className="flex-auto flex flex-col">
      <pre>{JSON.stringify(data, null, 4)}</pre>
      <MeltingFace />
    </div>
  )
}
