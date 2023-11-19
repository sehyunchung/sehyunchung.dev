import { MindConsciousnessSpectrum } from "./mind-consiousness-spectrum"
import { ExternalLinkIcon } from "lucide-react"
import { useMDXComponent } from "next-contentlayer/hooks"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { Tweet } from "react-tweet"
import { Box as BoxDrawn } from "ui"
import { TooltipProvider } from "./ui/tooltip"
import { TranslateTooltip } from "./translate-tooltip"

const Mermaid = dynamic(() => import("./mermaid"), {
	ssr: false,
})

const components = {
	Tweet,
	Image,
	BoxDrawn,
	LinkIcon: ExternalLinkIcon,
	Link,
	Mermaid,
	MindConsciousnessSpectrum,
	Translate: TranslateTooltip,
	TooltipProvider,
}

interface MdxProps {
	code: string
}

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code)
	return <Component components={components} />
}
