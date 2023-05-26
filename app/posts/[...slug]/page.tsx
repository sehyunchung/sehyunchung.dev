import { Metadata } from "next"
import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"

import { getOgImgUrl } from "@/lib/utils"
import { Mdx } from "@/components/mdx-components"

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")

  const post = allPosts.find((post) => {
    return encodeURI(post.slugAsParams) === slug
  })

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  const ogImg = getOgImgUrl()
  ogImg.searchParams.set("title", post.title)
  if (post.description) {
    ogImg.searchParams.set("description", post?.description ?? "")
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: ogImg,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImg],
    },
  }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article className="py-6">
      <div className="m-0 p-1 font-mono bg-transparent text-slate-700 dark:text-slate-200">
        {new Date(post.date).toLocaleDateString("ko")}
      </div>
      <h1 className="mb-2">{post.title}</h1>
      {post.description && (
        <p className="text-md mt-3 text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )}
      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </article>
  )
}
