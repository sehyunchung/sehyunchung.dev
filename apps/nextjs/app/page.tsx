import Link from "next/link";
import { BoxDrawn } from "ui";

import { ClassicBox } from "@/components/classic-box";

export default async function Home() {
	return (
		<div className="fixed capitalize md:text-3xl lg:text-4xl xl:text-5xl -translate-x-[50%] w-[85vw] max-w-5xl -translate-y-[55%] top-[50%] left-[50%] grid grid-cols-2 grid-rows-2 place-items-center text-xl">
			<Link href="/til" className="no-underline">
				<ClassicBox dropCap>til</ClassicBox>
			</Link>
			<BoxDrawn.Box variant="classic" shadow cols={8} rows={4}>
				<Link href="/toys" className="no-underline">
					<span>toys</span>
				</Link>
			</BoxDrawn.Box>
			<BoxDrawn.Box variant="rounded" shadow rows={8}>
				<Link href="/posts" className="no-underline">
					posts
				</Link>
			</BoxDrawn.Box>
			<BoxDrawn.Box variant="double" rows={5} cols={11} shadow>
				<Link href="/about" className="no-underline">
					about
				</Link>
			</BoxDrawn.Box>
		</div>
	);
}
