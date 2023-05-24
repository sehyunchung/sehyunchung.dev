import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { useMDXComponent } from "next-contentlayer/hooks"
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc"
import { Tweet } from "react-tweet"

import { AboutCard } from "./about-card"

const components = {
  Tweet,
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

const componentsForTil: MDXRemoteProps["components"] = {
  Tweet,
  p: ({ children }) => <div>{children}</div>,
  a: ({ href, ...props }) => {
    if (href?.startsWith("/")) {
      return (
        <Link
          href={{
            href,
          }}
          {...props}
        />
      )
    } else {
      return <a target="_blank" rel="noopener noreferrer" {...props} />
    }
  },
  img: ({ src, alt, width, height }) => {
    console.log({ src })
    if (height || width) {
      return (
        <Image
          src={src ?? ""}
          alt={alt ?? ""}
          width={Number(width)}
          height={Number(height)}
        />
      )
    }
    return (
      <div className="relative max-w-[500px] h-auto min-h-[200px]">
        <Image
          src={src ?? ""}
          fill
          alt={alt ?? ""}
          style={{ objectFit: "cover" }}
        />
      </div>
    )
  },
}

export async function MdxForTil({
  source,
}: {
  source: MDXRemoteProps["source"]
}) {
  // @ts-expect-error
  return <MDXRemote source={source} components={componentsForTil} />
}
