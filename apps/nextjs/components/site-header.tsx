"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

import { ClassicBox } from "./classic-box"
import { LogoNav } from "./logo-nav"
import { ModeToggle } from "./mode-toggle"

const HEADER_NAV_LINKS = [
	{ href: "/notes", label: "Notes" },
	{ href: "/posts", label: "posts" },
	{ href: "/toys", label: "toys" },
	{ href: "/about", label: "about" },
] as const

export function HeaderNav({ className }: { className?: string }) {
	const path = usePathname()

	const isCurrentRoute = (href: string) => {
		return path.startsWith(href)
	}

	return (
		<nav
			className={cn(
				"h-12 grid grid-flow-col gap-x-3 md:gap-x-5 place-items-center prose-a:underline-offset-4",
				className,
			)}
		>
			{HEADER_NAV_LINKS.map(({ href, label }) => (
				<Link href={href} className="no-underline capitalize" key={href}>
					{isCurrentRoute(href) ? (
						<ClassicBox className="italic" dropCap>
							{label}
						</ClassicBox>
					) : (
						label
					)}
				</Link>
			))}
		</nav>
	)
}

export function SiteHeader() {
	return (
		<header className="fixed md:relative w-full max-w-screen left-0 bottom-0 flex justify-stretch bg-white dark:bg-black">
			<div className="relative flex-auto flex justify-between items-center">
				<div className="pl-1">
					<Link aria-label="home" href="/" className="h-12 w-12">
						<LogoNav width="3rem" height="3rem" className={cn("m-0 p-0")} />
					</Link>
				</div>
				<div className="flex">
					<HeaderNav />
					<ModeToggle className="w-11 h-12 text-xl font-bold grid place-items-center" />
				</div>
			</div>
		</header>
	)
}
