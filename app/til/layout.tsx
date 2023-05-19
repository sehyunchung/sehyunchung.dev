export default function TILLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="pt-8 prose dark:prose-invert prose-img:rounded-xl">
      {children}
    </article>
  )
}
