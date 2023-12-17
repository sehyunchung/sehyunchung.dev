import { CSS, render } from "https://deno.land/x/gfm@0.2.5/mod.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getAllNote, Note } from "./[slug].tsx";

export const handler: Handlers<Note[]> = {
  async GET(_req, ctx) {
    const notes = await getAllNote();
    return ctx.render(notes);
  },
};

function PostCard(props: { post: Note }) {
  const { post } = props;
  return (
    <div>
      <a className="no-underline" href={`/note/${post.slug}`}>
        <h3>
          {post.title}
        </h3>
        <time>
          {new Date(post.createdAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div dangerouslySetInnerHTML={{ __html: render(post.content) }} />
      </a>
    </div>
  );
}

export default function BlogIndexPage(props: PageProps<Note[]>) {
  const posts = props.data;
  return (
    <main>
      <h1>Notes</h1>
      <div className="break-words border-b border-b-gray-200 pb-6">
        {posts.map((post) => <PostCard post={post} />)}
      </div>
    </main>
  );
}
