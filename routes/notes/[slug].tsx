import { render } from "https://deno.land/x/gfm@0.2.5/mod.ts";

import { extract } from "https://deno.land/std@0.145.0/encoding/front_matter.ts";
import { join } from "$std/path/mod.ts";

import { Handlers, PageProps } from "$fresh/server.ts";

export interface Note {
  title: string;
  createdAt: Date;
  labels: string[];
  slug: string;
  content: string;
}

export async function getNote(slug: string): Promise<Note | null> {
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

export async function getAllNote(): Promise<Note[]> {
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

export const handler: Handlers<Note> = {
  async GET(_req, ctx) {
    const post = await getNote(ctx.params.slug);
    if (post === null) return ctx.renderNotFound();
    return ctx.render(post);
  },
};

export default function PostPage(props: PageProps<Note>) {
  const post = props.data;
  const __html = render(post.content);
  return (
    <>
      <h1 className="font-bold">{post.title}</h1>
      <div
        class="gfm"
        dangerouslySetInnerHTML={{ __html }}
      />
    </>
  );
}
