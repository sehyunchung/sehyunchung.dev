import { EB_Garamond } from "next/font/google";

import "./globals.css";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";

const EBGaramond = EB_Garamond({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-garamond",
});

export const metadata = {
  title: "sehyunchung.dev",
  description: "I really want to add a description here.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${EBGaramond.variable}`}>
      <body>
        <main
          className="
              min-h-screen
              flex
              flex-col
              px-[1.8em]
              pb-[4em]
              text-gray-900
              bg-gray-50
              dark:bg-[#111010]
              dark:text-gray-100
              leading-loose
              whitespace-pre-wrap
              break-words
              antialiased
              "
        >
          {children}
        </main>
      </body>
    </html>
  );
}
