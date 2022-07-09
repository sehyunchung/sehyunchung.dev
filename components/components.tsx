/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { Head } from "$fresh/runtime.ts";

interface MetaTagsProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string;
  siteName?: string;
  author?: string;
}

export function MetaTags({ title, description, url }: MetaTagsProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
    </Head>
  );
}
