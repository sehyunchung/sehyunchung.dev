import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import BaseLayout from "../../components/BaseLayout";

export default function NotePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <BaseLayout>
      <div className="h-8" />
      <main className="flex-auto text-base ">
        <h1 className="text-4xl">{props.data.title}</h1>
        <div className="h-4" />
        <p>
          {new Date(props.data.date).getFullYear()}.
          {new Date(props.data.date).getMonth()}
        </p>
        <div className="h-10" />
        <div className="h-8" />
        <article className="text-base leading-relaxed">
          <MDXRemote {...props.source} />
        </article>
      </main>
      <div className="h-8" />
      {/* <ul className="flex align-middle rounded gap-3">
        {props.data.tags.map((tag) => (
          <li key={tag}>#{tag}</li>
        ))}
      </ul> */}
      <div className="h-8" />
    </BaseLayout>
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
