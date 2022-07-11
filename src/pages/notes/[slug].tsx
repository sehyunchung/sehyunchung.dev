import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import path from "path";

export default function NotePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <div className="container w-[60ch] p-4 md:p-6 lg:p-8  dark:bg-gray-800 dark:text-slate-100 leading-loose whitespace-pre-wrap">
      <Link href="/notes">
        <a className="text-5xl">🡠</a>
      </Link>
      <div className="h-4" />
      <main className="text-md w-[60ch] ">
        <h1 className="text-4xl">{props.data.title}</h1>
        <div className="h-8" />
        <ul className="flex align-middle rounded gap-3">
          {props.data.tags.map((tag) => (
            <li key={tag}>#{tag}</li>
          ))}
        </ul>
        <div className="h-8" />
        <MDXRemote {...props.source} />
      </main>
    </div>
  );
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const notesPath = path.join(process.cwd(), "contents", "notes");
  const filePath = path.join(notesPath, params?.slug + ".mdx");
  const source = readFileSync(filePath);
  const { content, data } = matter(source);

  return {
    props: {
      source: await serialize(content),
      content,
      data: {
        ...data,
        date: data.date.toString(),
      } as {
        date: string;
        title: string;
        description: string;
        tags: string[];
      },
    },
  };
}

export async function getStaticPaths() {
  const getSlugParams = (filePaths: typeof noteFilePaths) =>
    filePaths
      .map((path) => path.replace(/\.mdx?$/, ""))
      .map((slug) => ({ params: { slug } }));

  const notesPath = path.join(process.cwd(), "contents", "notes");
  const noteFilePaths = readdirSync(notesPath).filter((path) =>
    /\.mdx?$/.test(path)
  );
  const notePaths = getSlugParams(noteFilePaths);

  const paths = notePaths;

  return {
    paths,
    fallback: false,
  };
}
