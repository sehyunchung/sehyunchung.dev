import TheGreatBackButton from "~/components/TheGreatBackButton";
import "./globals.css";
import "@fontsource/gothic-a1/korean-400.css";
import "@fontsource/inter/latin.css";

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
    <html lang="ko">
      <body>
        <main
          className="
              min-h-screen
              flex
              flex-col
              px-[1.8em]
              pb-[4em]
              text-slate-800
              bg-slate-50
              dark:bg-gray-800
              dark:text-slate-100
              leading-loose
              whitespace-pre-wrap
              break-words
              "
        >
          <div className="h-8" />
          <TheGreatBackButton />
          {children}
        </main>
      </body>
    </html>
  );
}
