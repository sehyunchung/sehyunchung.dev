import { render } from "https://deno.land/x/gfm@0.2.5/mod.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getAllNote, Note } from "./[slug].tsx";

export const handler: Handlers<Note[]> = {
  async GET(_req, ctx) {
    const notes = await getAllNote();
    return ctx.render(notes);
  },
};

function NoteCard(props: { post: Note }) {
  const { post } = props;
  return (
    <>
      <a class="no-underline" href={`/notes/${post.slug}`}>
        <h1 class="font-bold">
          {post.title}
        </h1>
        <time>
          {new Date(post.createdAt).toLocaleDateString("ko-kr", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div
          class="gfm"
          dangerouslySetInnerHTML={{ __html: render(post.content) }}
        />
      </a>
    </>
  );
}

export default function BlogIndexPage(props: PageProps<Note[]>) {
  const posts = props.data;
  return (
    <section class="break-words border-b border-b-gray-200 pb-6">
      {posts.map((post) => <NoteCard post={post} />)}
    </section>
  );
}
