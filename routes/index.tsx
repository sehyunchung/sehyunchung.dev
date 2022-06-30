/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <h1 class={tw`p-4 mx-auto max-w-screen-md`}>
      Welcome to `sehyunchung.dev` built with Deno/Fresh.
    </h1>
  );
}
