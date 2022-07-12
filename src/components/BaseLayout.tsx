import TheGreatBackButton from "./TheGreatBackButton";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
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
    </div>
  );
}
