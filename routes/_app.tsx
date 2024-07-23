import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>sehyunchung's playground</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body
        className={"antialiased min-h-screen flex items-center flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 break-keep"}
      >
        <main className="border-x prose flex-1 prose-neutral dark:prose-invert w-full max-w-xl p-10">
          <Component />
        </main>
      </body>
    </html>
  );
}
