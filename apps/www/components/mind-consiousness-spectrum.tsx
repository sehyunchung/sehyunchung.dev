import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip"

export async function MindConsciousnessSpectrum() {
	return (
		<TooltipProvider>
			<div className="w-full grid grid-flow-col grid-rows-2">
				<div className="flex justify-between text-sm border-b border-black pb-2">
					<div>생각(mind)</div>
					<div>의식(consciousness)</div>
				</div>
				<div className="flex justify-between text-xs pt-2">
					<Tooltip>
						<TooltipContent>생각과 실제를 구분하지 못하는 상태</TooltipContent>
						<TooltipTrigger>
							<div>정신증</div>
						</TooltipTrigger>
					</Tooltip>
					<div>공황</div>
					<div>"heartbreak"</div>
					<div>"한 발 물러남"</div>
					<div>몰입</div>
					<Tooltip>
						<TooltipContent>생각이 없고 의식만 있는 상태</TooltipContent>
						<TooltipTrigger>
							<div>"무아지경"</div>
						</TooltipTrigger>
					</Tooltip>
				</div>
			</div>
		</TooltipProvider>
	)
}
