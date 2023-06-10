"use client";

import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

export function ModeToggle(props: React.ComponentProps<"button">) {
	const { setTheme, resolvedTheme } = useTheme();

	return (
		<button
			type="button"
			className={cn(props.className)}
			onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
			{...props}
		>
			<span className="sr-only">Toggle theme</span>
			<span className="dark:inline hidden">☽</span>
			<span className="inline dark:hidden">☼</span>
		</button>
	);
}
