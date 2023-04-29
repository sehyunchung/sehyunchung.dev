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
              <h2>{post.title}</h2>
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}
    </div>
  )
}
