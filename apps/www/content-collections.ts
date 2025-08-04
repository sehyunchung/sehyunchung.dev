import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'

const posts = defineCollection({
  name: 'posts',
  directory: 'content/posts',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(),
    tags: z.array(z.string()),
  }),
  transform: (document) => ({
    ...document,
    body: { code: 'function MDXContent() { return React.createElement("div", {}, "Content temporarily unavailable"); } export default MDXContent;' },
    slug: document._meta.path.replace(/\.mdx$/, ''),
    slugAsParams: document._meta.path.replace(/\.mdx$/, ''),
    _id: document._meta.path.replace(/\.mdx$/, ''),
  }),
})

const pages = defineCollection({
  name: 'pages',
  directory: 'content/pages',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string(),
  }),
  transform: (document) => ({
    ...document,
    body: { code: 'function MDXContent() { return React.createElement("div", {}, "Content temporarily unavailable"); } export default MDXContent;' },
    slug: document._meta.path.replace(/\.mdx$/, ''),
    slugAsParams: document._meta.path.replace(/\.mdx$/, ''),
  }),
})

const notes = defineCollection({
  name: 'notes',
  directory: 'content/notes',
  include: '**/*.mdx',
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    createdAt: z.string(),
    labels: z.array(z.string()),
  }),
  transform: (document) => {
    const id = document.id ? encodeURIComponent(document.id) : undefined
    return {
      ...document,
      body: { code: 'function MDXContent() { return React.createElement("div", {}, "Content temporarily unavailable"); } export default MDXContent;' },
      id,
      slug: document._meta.path.replace(/\.mdx$/, ''),
      slugAsParams: document._meta.path.replace(/\.mdx$/, ''),
      _raw: {
        flattenedPath: `notes/${document._meta.path.replace(/\.mdx$/, '')}`,
      },
      _id: document._meta.path.replace(/\.mdx$/, ''),
    }
  },
})

export default defineConfig({
  collections: [posts, pages, notes],
})