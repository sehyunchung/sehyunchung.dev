import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypePrettyCode from "rehype-pretty-code"
import remarkGfm from "remark-gfm"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
	slug: {
		type: "string",
		resolve: (doc) => `${doc._raw.flattenedPath}`,
	},
	slugAsParams: {
		type: "string",
		resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
	},
}

export const Til = defineDocumentType(() => {
	return {
		name: "Til",
		filePathPattern: "til/**/*.json",
		contentType: "data",
		fields: {
			id: {
				type: "string",
				required: true,
			},
			title: {
				type: "string",
				required: true,
			},
			content: {
				type: "mdx",
				required: true,
			},
			createdAt: {
				type: "date",
				required: true,
			},
			labels: {
				type: "list",
				required: true,
				of: {
					name: "label",
					type: "string",
				},
			},
		},
		computedFields: {
			slug: {
				type: "string",
				resolve: (doc) => {
					return `${doc.id}`
				},
			},
		},
	}
})

export const Page = defineDocumentType(() => ({
	name: "Page",
	filePathPattern: "pages/**/*.mdx",
	contentType: "mdx",
	fields: {
		title: {
			type: "string",
			required: true,
		},
	},
	computedFields,
}))

export const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: "posts/**/*.mdx",
	contentType: "mdx",
	fields: {
		title: {
			type: "string",
			required: true,
		},
		description: {
			type: "string",
		},
		date: {
			type: "date",
			required: true,
		},
		tags: {
			type: "list",
			of: {
				type: "string",
			},
			required: true,
		},
	},
	computedFields,
}))

export default makeSource({
	contentDirPath: "./content",
	documentTypes: [Post, Page, Til],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			[
				rehypePrettyCode,
				{
					theme: {
						dark: "github-dark-dimmed",
						light: "github-light",
					},
				},
			],
		],
	},
})
