import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"

import { AboutCard } from "./about-card"

const components = {
  Image,
  AboutCard,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
