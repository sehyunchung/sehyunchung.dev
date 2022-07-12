import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import path from "path";
import BaseLayout from "../../components/BaseLayout";

export default function NotesIndexPage({
  notes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <BaseLayout>
      <div className="h-full">
        <div className="h-10" />
        <h1 className="text-5xl">Notes</h1>
        <div className="h-11" />
        <article className="text-base">
          <ul className="flex flex-col gap-7">
            {notes.map((note) => (
              <li key={note.content}>
                <Link href={"notes/" + note.slug}>{note.data.title}</Link>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const notesPath = path.join(process.cwd(), "contents", "notes");
  const noteFilePaths = readdirSync(notesPath).filter((path) =>
    /\.mdx?$/.test(path)
  );

  let notes = noteFilePaths.map((filePath) => {
    const source = readFileSync(path.join(notesPath, filePath));
    const { content, data } = matter(source);
    const slug = filePath.replace(/\.mdx?$/, "");

    return {
      slug,
      data: {
        ...data,
        date: data.date.toString(),
      } as {
        date: string;
        title: string;
        description: string;
        tags: string[];
      },
      content,
    };
  });

  return {
    props: { notesPath, noteFilePaths, notes },
  };
}
