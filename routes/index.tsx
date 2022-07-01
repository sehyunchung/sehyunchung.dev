/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";
import { PageProps, Handlers } from "$fresh/server.ts";

const TITLE = `"Home Page"`;
const DESCRIPTION = `"Home Page"`;

const ME = [
  "the father of the most 😍 dog in the universe",
  "a frontend developer",
  "a DJ",
];

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("Cache-Control", "public, max-age=31536000");
    return resp;
  },
};

export default function Home(props: PageProps) {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.url.href} />
      </Head>
      <body
        class={tw`p-4 font-sans bg-white text-black dark:(bg-gray-800 text-white)`}
      >
        <h1 class={tw`max-w-screen-md`}>Hi, my name is in url. And I'm...</h1>
        <div class={tw`h-8`} />
        <main>
          <ul class={tw`flex flex-col gap-2`}>
            {ME.map((item, index) => (
              <li class={tw`flex items-center gap-1`} key={index}>
                {item}
              </li>
            ))}
          </ul>
        </main>
      </body>
    </>
  );
}
