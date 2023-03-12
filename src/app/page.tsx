import Link from "next/link";

import { ExternalLinkIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="font-sans">
      <div className="h-8" />
      <h1 className="text-5xl font-serif">Sehyun Chung</h1>
      <div className="h-4" />
      <article>
        <ul className="flex gap-3 leading-tight">
          <li className="flex items-center">
            초초의 아버지
            <Link
              className="flex ml-0.5"
              href="https://instagram.com/chocho_paju"
              target="_blank"
            >
              <ExternalLinkIcon />
            </Link>
          </li>
          <li className="flex items-center">
            UI 엔지니어
            <Link
              className="flex ml-0.5"
              href="https://github.com/sehyunchung"
              target="_blank"
            >
              <ExternalLinkIcon />
            </Link>
          </li>
          <li className="flex items-center">
            DJ/Producer/etc.
            <Link
              className="flex ml-0.5"
              href="https://soundcloud.com/cong_vu"
              target="_blank"
            >
              <ExternalLinkIcon />
            </Link>
          </li>
        </ul>
      </article>
    </main>
  );
}
