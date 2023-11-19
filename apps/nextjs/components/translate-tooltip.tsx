import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

export function TranslateTooltip({
	original,
	translated,
}: { original: string; translated: string }) {
	return (
		<Tooltip>
			<TooltipTrigger className="text-left" asChild>
				<span>{translated}</span>
			</TooltipTrigger>
			<TooltipContent className="break-keep max-w-[60ch] text-base">
				<span className="">{original}</span>
			</TooltipContent>
		</Tooltip>
	)
}
