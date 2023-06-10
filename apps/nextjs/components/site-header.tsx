"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { ClassicBox } from "./classic-box";
import { LogoNav } from "./logo-nav";
import { ModeToggle } from "./mode-toggle";

const HEADER_NAV_LINKS = [
	{ href: "/til", label: "til" },
	{ href: "/posts", label: "posts" },
	{ href: "/toys", label: "toys" },
	{ href: "/about", label: "about" },
] as const;

export function HeaderNav() {
	const path = usePathname();

	const isCurrentRoute = (href: string) => {
		return path.startsWith(href);
	};

	return (
		<nav className="h-12 ml-auto grid grid-flow-col gap-x-3 md:gap-x-5 place-items-center prose-a:underline-offset-4">
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
			<ModeToggle />
		</nav>
	);
}

export function SiteHeader() {
	return (
		<header>
			<div className="relative flex items-center justify-between">
				<Link aria-label="home" href="/" className="h-12 w-12">
					<LogoNav width="3rem" height="3rem" className={cn("m-0 p-0")} />
				</Link>
				<HeaderNav />
			</div>
		</header>
	);
}
