import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  return <Component />;
}
