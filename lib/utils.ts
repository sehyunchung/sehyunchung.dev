import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type TilQueryArgs =
  | {
      labels?: string[]
      first?: number
      orderBy?: {
        field: "CREATED_AT" | "UPDATED_AT" | "COMMENTS"
        direction: "ASC" | "DESC"
      }
    }
  | undefined

export async function getTILs(
  { labels, first, orderBy }: TilQueryArgs = {
    first: 100,
    orderBy: {
      field: "CREATED_AT",
      direction: "DESC",
    },
  }
) {
  const variables = {
    filterBy: labels
      ? {
          labels,
        }
      : undefined,
    first,
    orderBy,
  }

  return await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
      query GetTilList($filterBy: IssueFilters, $first: Int, $orderBy: IssueOrder) {
        repository(name: "til", owner: "sehyunchung") {
          id
          issues(filterBy: $filterBy, first: $first, orderBy: $orderBy) {
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
      variables,
    }),
    next: { revalidate: 60 },
  })
    .then((res) => res.json())
    .then((res) => res.data?.repository?.issues?.nodes)
}

export async function fetchTILLabels() {
  return await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
      query TilLabels {
        repository(name: "til", owner: "sehyunchung") {
          id
          labels(first: 100, orderBy: {field: NAME, direction: ASC}) {
            nodes {
              id
              name
            }
          }
        }
      }
      `,
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      return json.data?.repository?.labels?.nodes as {
        id: string
        name: string
      }[]
    })
    .then((labels) => labels?.map((label) => label.name))
}
