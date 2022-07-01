/** @jsx h */
import { h } from "preact";
import { UnknownPageProps } from "$fresh/server.ts";
import { tw } from "@twind";

export default function NotFoundPage({ url }: UnknownPageProps) {
  console.log({ url });
  return (
    <p class={tw`p-4`}>
      Hi, <code class={tw`text-gray-400`}>{url.pathname}</code> page is not exist(yet).
    </p>
  );
}
