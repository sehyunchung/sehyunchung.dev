/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import BaseLayout from "../components/BaseLayout";
import TheGreatBackButton from "../components/TheGreatBackButton";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>"sehyunchung.dev"</title>
        <meta name="description" content="sehyunchung.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <div className="h-8" />
        <h1 className="text-4xl">sehyunchung.dev</h1>
        <div className="h-12" />
        <article className="text-base">
          <h2 className="text-xl">Hello, I'm...</h2>
          <div className="h-7" />
          <ul className="flex flex-col gap-3 list-disc pl-4">
            <li>
              the father of the most 😍 dog in the universe{" "}
              <a
                className="text-blue-500 underline"
                href="https://instagram.com/chocho_paju"
                target="_blank"
                rel="noreferrer"
              >
                [link]
              </a>
            </li>
            <li>
              a frontend developer{" "}
              <a
                className="text-blue-500 underline"
                href="https://github.com/sehyunchung"
                target="_blank"
                rel="noreferrer"
              >
                [link]
              </a>
            </li>
            <li>
              a DJ/Producer/etc.{" "}
              <a
                className="text-blue-500 underline"
                href="https://soundcloud.com/cong_vu"
                target="_blank"
                rel="noreferrer"
              >
                [link]
              </a>
            </li>
          </ul>
        </article>
      </BaseLayout>
    </>
  );
};

export default Home;
