import Link from "next/link";

import { ExternalLinkIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="font-sans break-keep">
      <div className="h-8" />
      <h1 className="text-5xl font-serif">Sehyun Chung</h1>
      <div className="h-4" />
      <article>
        <ul className="flex flex-wrap gap-3 leading-tight">
          <li className="flex">
            <Link
              className="flex items-center ml-0.5 hover:underline"
              href="https://instagram.com/chocho_paju"
              target="_blank"
            >
              초초의 아버지
              <ExternalLinkIcon />
            </Link>
          </li>
          <li className="flex">
            <Link
              className="flex items-center ml-0.5 hover:underline"
              href="https://github.com/sehyunchung"
              target="_blank"
            >
              UI 엔지니어
              <ExternalLinkIcon />
            </Link>
          </li>
          <li className="flex">
            <Link
              className="flex items-center ml-0.5 hover:underline"
              href="https://soundcloud.com/cong_vu"
              target="_blank"
            >
              DJ/Producer/etc.
              <ExternalLinkIcon />
            </Link>
          </li>
        </ul>
      </article>
    </main>
  );
}
