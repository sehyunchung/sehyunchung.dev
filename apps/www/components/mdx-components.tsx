import { MindConsciousnessSpectrum } from "./mind-consiousness-spectrum"
import { ExternalLinkIcon } from "lucide-react"
import { MDXContent } from "@content-collections/mdx/react"
import Image from "next/image"
import Link from "next/link"
import { Tweet } from "react-tweet"
import { Box as BoxDrawn } from "ui"
import { TranslateTooltip } from "./translate-tooltip"
import type { MDXComponents } from "mdx/types"
// @ts-ignore - Mermaid component has type issues
import Mermaid from "./mermaid"

const components = {
	Tweet,
	Image,
	BoxDrawn,
	LinkIcon: ExternalLinkIcon,
	Link,
	// Mermaid, // TODO: Fix type issues with Mermaid component
	MindConsciousnessSpectrum,
	Translate: TranslateTooltip,
} satisfies MDXComponents

interface MdxProps {
	code: string
}

export function Mdx({ code }: MdxProps) {
	return <MDXContent code={code} components={components} />
}
