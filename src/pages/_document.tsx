import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="text-slate-800 bg-slate-50 dark:bg-gray-800 dark:text-slate-100 leading-loose whitespace-pre-wrap break-words">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
