import { Box } from "@/../../packages/ui"
import { cn } from "@/lib/utils"

export function Footer({ className }: { className?: string }) {
	return (
		<footer
			className={cn("grid place-items-center w-full h-44 text-sm", className)}
		>
			<Box variant="classic" rows={7}>
				<div className="flex flex-col items-center gap-2">
					{new Date().getFullYear()} © Sehyun Chung
					<a
						href="https://github.com/sehyunchung/sehyunchung.dev"
						target="_blank"
						rel="noopener noreferrer"
					>
						Source
					</a>
				</div>
			</Box>
		</footer>
	)
}
