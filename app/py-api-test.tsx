import { getBaseUrl } from "@/lib/utils"

const getData = async () =>
  await fetch(`${getBaseUrl().toString()}api/python`, {
    next: {
      revalidate: 0,
    },
  })
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

export async function GetFromPyAPI() {
  const data = await getData()
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}
