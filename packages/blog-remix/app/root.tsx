import type { LinksFunction, LoaderFunction } from "@remix-run/react";
import { Meta, Links, Scripts, useRouteData } from "@remix-run/react";
import { Outlet } from "react-router-dom";

import tailwind from "css:./styles/tailwind.css";
import global from "css:./styles/global.css";

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwind },
    { rel: "stylesheet", href: global },
  ];
};

export let loader: LoaderFunction = async () => {
  return {};
};

export default function App() {
  let data = useRouteData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />

        <footer className="text-6xl">Footer</footer>
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Oops!</title>
      </head>
      <body>
        <div>
          <h1>App Error</h1>
          <pre>{error.message}</pre>
          <p>
            Replace this UI with what you want users to see when your app throws
            uncaught errors. The file is at <code>app/App.tsx</code>.
          </p>
        </div>

        <Scripts />
      </body>
    </html>
  );
}
