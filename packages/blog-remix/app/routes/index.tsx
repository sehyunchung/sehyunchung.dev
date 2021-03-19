import type {
  MetaFunction,
  LinksFunction,
  LoaderFunction,
} from "@remix-run/react";
import { useRouteData } from "@remix-run/react";

import styles from "css:../styles/index.css";

export let meta: MetaFunction = () => {
  return {
    title: "Sehyun Chung's web something.",
    description: "Welcome to ...!",
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export let loader: LoaderFunction = async () => {
  return {};
};

export default function Index() {
  let data = useRouteData();

  return <div className="p-6">Hello World</div>;
}
