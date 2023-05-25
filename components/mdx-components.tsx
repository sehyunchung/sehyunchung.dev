import Image from "next/image"
import Link from "next/link"
import { useMDXComponent } from "next-contentlayer/hooks"
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc"
import probe from "probe-image-size"
import { Tweet } from "react-tweet"
import remarkGfm from "remark-gfm"

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

export async function MDXTIL({ source }: { source: string }) {
  const components: MDXRemoteProps["components"] = {
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
        return (
          <a target="_blank" href={href} rel="noopener noreferrer" {...props} />
        )
      }
    },
    // @ts-expect-error
    img: async ({ src, alt }) => {
      const { width, height } = await probe(src ?? "")
      return (
        <Image src={src ?? ""} alt={alt ?? ""} width={width} height={height} />
      )
    },
  }
  return (
    // @ts-expect-error
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      }}
    />
  )
}
