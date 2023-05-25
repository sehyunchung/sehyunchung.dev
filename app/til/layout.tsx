import { TilPageAlert } from "@/components/til-alert"

export default function TILLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-8 prose dark:prose-invert prose-img:rounded-xl">
      <h1 className="uppercase">til</h1>
      <TilPageAlert />
      {children}
    </div>
  )
}
