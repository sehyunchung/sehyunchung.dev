import Link from "next/link"
import { allPosts } from "@/.contentlayer/generated"

export default async function PostsPage() {
  return (
    <div className="prose flex-auto dark:prose-invert">
      {allPosts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((post) => (
          <article key={post._id}>
            <Link href={`/${post.slug}`} className="no-underline">
              <h2 className="mb-2 flex flex-col justify-between">
                <div className="m-0 mb-2 bg-transparent p-0 text-xs text-slate-700 dark:text-slate-200">
                  {new Date(post.date).toLocaleDateString("ko")}
                </div>
                {post.title}
              </h2>
              {post.description && (
                <p className="font-normal">{post.description}</p>
              )}
            </Link>
          </article>
        ))}
    </div>
  )
}