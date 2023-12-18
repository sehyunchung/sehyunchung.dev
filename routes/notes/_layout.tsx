import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";

export default function NoteRouteLayout({ Component }: PageProps) {
  return (
    <>
      <Head>
        <title>Notes</title>
      </Head>
      <section>
        <a class="no-underline" href="/notes">
          <h1 class="font-bold">
            Notes
          </h1>
        </a>
        <Component />
      </section>
    </>
  );
}
