import { getBaseUrl } from "@/lib/utils"

const getData = async () =>
  await fetch(`${getBaseUrl().toString()}api/py`, {
    next: {
      revalidate: 0,
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText)
      }
      return res.json()
    })
    .then((json) => {
      return json
    })
    .catch((err) => console.log({ err }))

export async function GetFromPyAPI() {
  const data = await getData()
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}
