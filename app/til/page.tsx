import { remark } from "remark"
import html from "remark-html"

async function getTil() {
  return await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
        {
            repository(name: "til", owner: "sehyunchung") {
              id
              issues(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
                nodes {
                  id
                  createdAt
                  bodyHTML
                  title
                  labels(last: 10) {
                    nodes {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        `,
    }),
  })
    .then((res) => res.json())
    .then((res) => res.data.repository.issues.nodes)
}

export default async function TILListPage() {
  const tils = await getTil()

  return (
    <article suppressHydrationWarning className="w-[100%] whitespace-pre-wrap">
      {tils.map((til: any) => (
        <div key={til.id} className="border-b border-b-gray-200 py-4">
          <div className="pt-4 pb-2 text-sm">
            {new Date(til.createdAt)?.toLocaleDateString("ko")}
          </div>
          <h2 className="m-0 font-mono text-md">{til.title}</h2>
          <p
            dangerouslySetInnerHTML={{ __html: til.bodyHTML }}
            className="whitespace-pre-line break-words max-[100%]"
          />
          <section className="flex gap-2 mb-2">
            {til.labels.nodes.map((label: any) => (
              <span key={label.id}>#{label.name}</span>
            ))}
          </section>
        </div>
      ))}
    </article>
  )
}
