import { cn } from "@/lib/utils"

export function Footer({ className }: { className?: string }) {
	return (
		<footer className={cn("bottom-0 flex items-center w-full h-24 border-t text-sm", className)}>
			<div className="flex items-center mr-auto">
				{new Date().getFullYear()} © Sehyun Chung
			</div>
			<div className="flex items-center justify-center">
				<a
					href="https://github.com/sehyunchung/sehyunchung.dev"
					target="_blank"
					rel="noopener noreferrer"
				>
					Source
				</a>
			</div>
		</footer>
	)
}
