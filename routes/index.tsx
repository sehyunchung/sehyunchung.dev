/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const ME = [
  "the father of the most 😍 dog in the universe",
  "a frontend developer",
  "a DJ",
];

export default function Home() {
  return (
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
  );
}
