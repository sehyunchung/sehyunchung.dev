import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMDX } from '@content-collections/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import { z } from 'zod'

async function compileMDXWithFallback(context: any, document: any) {
  try {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [
          rehypePrettyCode as any,
          {
            theme: {
              dark: 'github-dark-dimmed',
              light: 'github-light',
            },
          },
        ],
      ],
    })
    return mdx
  } catch (error) {
    console.error(`Error processing MDX for ${document._meta.path}:`, error)
    // Return a simple fallback
    return {
      body: {
        code: `export default function MDXContent() { return <div>Error loading content</div> }`,
        raw: document.content || ''
      }
    }
  }
}

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
  transform: async (document, context) => {
    const mdx = await compileMDXWithFallback(context, document)
    
    return {
      ...document,
      ...mdx,
      slug: document._meta.path.replace(/\.mdx$/, ''),
      slugAsParams: document._meta.path.replace(/\.mdx$/, ''),
    }
  },
})

const pages = defineCollection({
  name: 'pages',
  directory: 'content/pages',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDXWithFallback(context, document)
    
    return {
      ...document,
      ...mdx,
      slug: document._meta.path.replace(/\.mdx$/, ''),
      slugAsParams: document._meta.path.replace(/\.mdx$/, ''),
    }
  },
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
  transform: async (document, context) => {
    const mdx = await compileMDXWithFallback(context, document)
    
    // Maintain compatibility with existing id encoding logic
    const id = document.id ? encodeURIComponent(document.id) : undefined
    
    return {
      ...document,
      ...mdx,
      id,
      slug: document._meta.path.replace(/\.mdx$/, ''),
      slugAsParams: document._meta.path.replace(/\.mdx$/, ''),
      // Add _raw for compatibility
      _raw: {
        flattenedPath: `notes/${document._meta.path.replace(/\.mdx$/, '')}`,
      },
      // Add _id for compatibility
      _id: document._meta.path.replace(/\.mdx$/, ''),
    }
  },
})

export default defineConfig({
  collections: [posts, pages, notes],
})