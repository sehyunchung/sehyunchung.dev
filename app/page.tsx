import Link from "next/link"
import { allPosts } from "@/.contentlayer/generated"

export default function Home() {
  return (
    <div className="prose dark:prose-invert flex-auto">
      {allPosts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((post) => (
          <article key={post._id}>
            <Link href={post.slug} className="no-underline">
              <h2 className="flex flex-col justify-between">
                <pre className="m-0 p-0 mb-2 text-xs bg-transparent text-slate-700 dark:text-slate-200">
                  {new Date(post.date).toLocaleDateString("ko")}
                </pre>
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
