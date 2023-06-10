import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";
import { useMDXComponent } from "next-contentlayer/hooks";
import probe from "probe-image-size";
import { Tweet } from "react-tweet";
import { BoxDrawn } from "ui";

const components = {
	Tweet,
	Image,
	BoxDrawn,
	LinkIcon: ExternalLinkIcon,
};

interface MdxProps {
	code: string;
}

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code);

	return <Component components={components} />;
}

export async function MdxTil({ code }: MdxProps) {
	const components: any = {
		BoxDrawn: BoxDrawn.Box,
		Tweet,
		a: ({ href, ref, ...props }: any) => {
			if (href?.startsWith("/")) {
				return (
					<Link
						href={{
							href,
						}}
						{...props}
					/>
				);
			} else {
				return (
					<a target="_blank" href={href} rel="noopener noreferrer" {...props} />
				);
			}
		},
		// @ts-expect-error
		img: async ({ src, alt }) => {
			const { width, height } = await probe(src ?? "");
			return (
				<Image src={src ?? ""} alt={alt ?? ""} width={width} height={height} />
			);
		},
	};

	const Component = useMDXComponent(code);

	return <Component components={components} />;
}
