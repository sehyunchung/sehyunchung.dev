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
        className={"antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 break-keep"}
      >
        <div className="border-x prose prose-neutral dark:prose-invert max-w-xl mx-auto p-10">
          <Component />
        </div>
      </body>
    </html>
  );
}
