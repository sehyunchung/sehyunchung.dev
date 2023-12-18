import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";

export default function NoteRouteLayout({ Component }: PageProps) {
  return (
    <>
      <Head>
        <title>Notes</title>
      </Head>
      <Component />
    </>
  );
}
