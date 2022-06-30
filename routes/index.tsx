/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const ME = [
  {
    text: "the father of the most 😍 dog in the universe",
    link: "https://instagram.com/chocho_paju",
  },
  { text: "a frontend developer", link: "https://github.com/sehyunchung" },
  { text: "a DJ", link: "https://soundcloud.com/cong_vu" },
];

export default function Home() {
  return (
    <div>
      <h1 class={tw`p-4 max-w-screen-md font-mono text-2xl`}>
        Hi, my name is in url. And I'm...
      </h1>
      <main>
        <ul class={tw`flex flex-col gap-2 p-4 text-sky-500 list-disc`}>
          {ME.map((item, index) => (
            <li class={tw`flex items-center gap-1`} key={index}>
              {item.text}{" "}
              <a
                class={tw`text-sm text-blue-600)`}
                href={item.link}
                target="_blank"
              >
                [link]
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
