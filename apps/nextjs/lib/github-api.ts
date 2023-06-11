import { ofetch } from "ofetch"

export async function queryGitHubAPINode(query: string, variables?: any) {
	return await ofetch("https://api.github.com/graphql", {
		method: "POST",
		headers: {
			"content-type": "application/json",
			Authorization: `bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	}).then((json) => json.data)
}

export async function queryGitHubAPI(query: string, variables?: any) {
	return await fetch("https://api.github.com/graphql", {
		method: "POST",
		headers: {
			"content-type": "application/json",
			Authorization: `bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
		},
		body: JSON.stringify({
			query,
			variables,
		}),
		next: { revalidate: 60 },
	})
		.then((res) => res.json())
		.then((json) => json.data)
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

export async function getAllTILs(
	{ labels, first, orderBy }: TilQueryArgs = {
		first: 100,
		orderBy: {
			field: "CREATED_AT",
			direction: "DESC",
		},
	},
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

	return await queryGitHubAPI(
		`
      query GetTilList($filterBy: IssueFilters, $first: Int, $orderBy: IssueOrder) {
        repository(name: "til", owner: "sehyunchung") {
          id
          issues(filterBy: $filterBy, first: $first, orderBy: $orderBy) {
            nodes {
              id
              createdAt
              body
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
	).then((res) => res?.repository?.issues?.nodes)
}

export async function getAllTILsNode(
	{ labels, first, orderBy }: TilQueryArgs = {
		first: 100,
		orderBy: {
			field: "CREATED_AT",
			direction: "DESC",
		},
	},
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

	return await queryGitHubAPINode(
		`
      query GetTilList($filterBy: IssueFilters, $first: Int, $orderBy: IssueOrder) {
        repository(name: "til", owner: "sehyunchung") {
          id
          issues(filterBy: $filterBy, first: $first, orderBy: $orderBy) {
            nodes {
              id
              createdAt
              body
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
	).then((res) => res?.repository?.issues?.nodes)
}

export async function getAllTILLabels() {
	return await queryGitHubAPI(`
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
      `)
		.then((json) => {
			return json?.repository?.labels?.nodes as {
				id: string
				name: string
			}[]
		})
		.then((labels) => labels?.map((label) => encodeURIComponent(label.name)))
}

export async function getAllTILIds() {
	return await queryGitHubAPI(`
        query TilIds {
            repository(name: "til", owner: "sehyunchung") {
              issues(first: 100) {
                edges {
                  node {
                    id
                  }
                }
              }
            }
          }
            `).then((data) =>
		data.repository.issues.edges.map((edge: any) => edge.node.id),
	)
}
