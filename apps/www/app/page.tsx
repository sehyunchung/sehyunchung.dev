import Link from "next/link"
import { Box } from "ui"

import system7Bg from "./system7_bg.png"
import welcome from "./welcome.webp"
import { ClassicBox } from "@/components/classic-box"
import Image from "next/image"

export default async function Home() {
	return (
		<div
			style={{
				backgroundImage: `url(${system7Bg.src})`,
			}}
			className="fixed font-[cursive] capitalize md:text-3xl lg:text-4xl xl:text-5xl -translate-x-[50%] w-[85vw] max-w-5xl -translate-y-[55%] top-[50%] left-[50%] grid grid-cols-2 grid-rows-2 place-items-center text-xl"
		>
			<Image
				className="absolute z-20"
				src={welcome}
				alt="welcome"
				width={500}
				height={500}
			/>
			<Link href="/notes" className="no-underline bg-white drop-shadow-xl">
				<ClassicBox className="drop-shadow" dropCap>
					notes
				</ClassicBox>
			</Link>
			<Box
				className="text-[#f30] bg-white"
				variant="classic"
				shadow
				cols={8}
				rows={4}
			>
				<Link href="/toys" className="no-underline">
					<span className="text-[#f30]">toys</span>
				</Link>
			</Box>
			<Box
				className="text-[limegreen] bg-white"
				variant="rounded"
				shadow
				rows={8}
			>
				<Link href="/posts" className="no-underline text-[limegreen]">
					posts
				</Link>
			</Box>
			<Box
				className="text-[#00f] bg-white"
				variant="double"
				rows={5}
				cols={11}
				shadow
			>
				<Link href="/about" className="no-underline text-[#00f]">
					about
				</Link>
			</Box>
		</div>
	)
}
