import { allPosts as posts } from "@/.contentlayer/generated"
import { Feed } from "feed"

const feed = new Feed({
  title: "sehyunchung.dev",
  description: "Posts",
  id: "https://sehyunchung.dev/posts",
  link: "https://sehyunchung.dev/posts",
  language: "ko",
  image: "https://sehyunchung.dev/og?title=Posts",
  favicon: "https://sehyunchung.dev/favicon.ico",
  copyright: `All rights reserved ${new Date().getFullYear()}, Sehyun Chung`,
  feedLinks: {
    atom: "https://sehyunchung.dev/feed/posts/",
  },
  author: {
    name: "Sehyun Chung",
    email: "hi@sehyunchung.dev",
    link: "https://sehyunchung.dev",
  },
})

posts.forEach((post) => {
  feed.addItem({
    title: post.title,
    id: post._id,
    link: `https://sehyunchung.dev/posts/${post.slug}`,
    date: new Date(post.date),
    description: post.description,
  })
})

export async function GET() {
  return new Response(feed.atom1(), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  })
}
