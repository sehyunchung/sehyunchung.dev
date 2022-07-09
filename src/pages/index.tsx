/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>"sehyunchung.dev"</title>
        <meta name="description" content="sehyunchung.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen p-4 font-sans bg-white text-black dark:bg-gray-800 dark:text-white">
        <main>
          <h1>Hi, I'm...</h1>
          <ul className="mt-8">
            <li>the father of the most 😍 dog in the universe</li>
            <li>a frontend developer</li>
            <li>a DJ</li>
          </ul>
        </main>
      </div>
    </>
  );
};

export default Home;
