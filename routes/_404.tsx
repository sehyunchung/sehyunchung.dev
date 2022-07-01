/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { UnknownPageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <>
      <Head>
        <title>{url.pathname}</title>
      </Head>
      <body
        class={tw`p-4 font-sans bg-white text-black dark:(bg-gray-800 text-white)`}
      >
        Hi, <code class={tw`text-gray-400`}>{url.pathname}</code> page is not
        exist(yet).
      </body>
    </>
  );
}
