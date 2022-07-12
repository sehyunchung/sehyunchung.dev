import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

import TheGreatBack from "../../../components/TheGreatBackButton";

export default function NotePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <div className="container max-w-[60ch] p-4 md:p-6 lg:p-8  dark:bg-gray-800 dark:text-slate-100 leading-loose whitespace-pre-wrap">
      <TheGreatBack />
      <div className="h-8" />
      <main className="text-md max-w-[60ch] ">
        <h1 className="text-4xl">{props.data.title}</h1>
        <div className="h-5" />
        <p>
          {new Date(props.data.date).getFullYear()}.
          {new Date(props.data.date).getMonth()}
        </p>
        <div className="h-10" />
        <div className="h-8" />
        <article className="article">
          <MDXRemote {...props.source} />
        </article>
      </main>
      <div className="h-8" />
      <ul className="flex align-middle rounded gap-3">
        {props.data.tags.map((tag) => (
          <li key={tag}>#{tag}</li>
        ))}
      </ul>
      <div className="h-8" />
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
