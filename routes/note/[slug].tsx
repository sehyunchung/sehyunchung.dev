import { extract } from "https://deno.land/std@0.145.0/encoding/front_matter.ts";
import { join } from "$std/path/mod.ts";

import { Handlers, PageProps } from "$fresh/server.ts";

interface Note {
  title: string;
  createdAt: Date;
  labels: string[];
  slug: string;
  content: string;
}

async function getNote(slug: string): Promise<Note | null> {
  const text = await Deno.readTextFile(
    join("./content/notes", `${slug}.mdx`),
  );

  const { attrs, body } = extract<Note>(text);

  return {
    slug,
    title: attrs.title,
    createdAt: attrs.createdAt,
    content: body,
    labels: attrs.labels,
  };
}

async function getAllNote(): Promise<Note[]> {
  const files = Deno.readDir("./content/notes");
  const promises = [];
  for await (const file of files) {
    const slug = file.name.replace(".mdx", "");
    if (slug.includes("DS_Store")) {
      continue;
    }
    promises.push(getNote(slug));
  }
  const posts = await Promise.all(promises) as Note[];
  posts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  return posts;
}

export const handler: Handlers<Note[]> = {
  async GET(_req, ctx) {
    const notes = await getAllNote();
    return ctx.render(notes);
  },
};

function PostCard(props: { post: Note }) {
  const { post } = props;
  return (
    <div class="py-8 border(t gray-200)">
      <a class="sm:col-span-2" href={`/${post.slug}`}>
        <h3 class="text(3xl gray-900) font-bold">
          {post.title}
        </h3>
        <time class="text-gray-500">
          {new Date(post.createdAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div class="mt-4 text-gray-900">
          {post.content}
        </div>
      </a>
    </div>
  );
}

export default function BlogIndexPage(props: PageProps<Note[]>) {
  const posts = props.data;
  return (
    <main class="max-w-screen-md px-4 pt-16 mx-auto">
      <h1 class="text-5xl font-bold">Blog</h1>
      <div class="mt-8">
        {posts.map((post) => <PostCard post={post} />)}
      </div>
    </main>
  );
}
