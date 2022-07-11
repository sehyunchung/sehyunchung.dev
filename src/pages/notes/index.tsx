import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import path from "path";

export default function NotesIndexPage({
  notes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main>
      <article className="h-screen p-4 md:p-6 lg:p-8 dark:bg-gray-800 dark:text-white">
        <h1 className="p-8 text-2xl">Notes</h1>
        <ul className="flex flex-col gap-4">
          {notes.map((note) => (
            <li key={note.content}>
              <Link href={"notes/" + note.slug}>{note.data.title}</Link>
            </li>
          ))}
        </ul>
      </article>
    </main>
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
