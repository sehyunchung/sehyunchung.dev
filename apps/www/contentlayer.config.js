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

export const Note = defineDocumentType(() => {
	return {
		name: "Note",
		filePathPattern: "notes/**/*.mdx",
		contentType: "mdx",
		fields: {
			id: {
				type: "string",
				required: false,
			},
			title: {
				type: "string",
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
			...computedFields,
			id: {
				type: "string",
				resolve: (doc) => {
					if (!doc.id) {
						return
					}
					return encodeURIComponent(doc.id)
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
	contentDirExclude: ["archived"],
	documentTypes: [Post, Page, Note],
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
