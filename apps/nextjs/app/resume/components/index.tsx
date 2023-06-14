import { cn } from "@/lib/utils"

export function Name({ className }: { className?: string }) {
	return <h1 className={cn("m-0 p-0 text-bold", className)}>정세현</h1>
}

export function Contact({ className }: { className?: string }) {
	return (
		<ul
			className={cn("flex flex-col items-end not-prose list-none", className)}
		>
			<li className="select-none">010-9892-3705</li>
			<li>hi@sehyunchung.dev</li>
			<li>
				<a href="https://github.com/sehyunchung">github.com/sehyunchung</a>
			</li>
			<li>
				<a href="https://sehyunchung.dev">sehyunchung.dev</a>
			</li>
		</ul>
	)
}

export function Skills({
	className,
	items,
}: { className?: string; items: string[] }) {
	return (
		<ul className={cn("flex flex-col gap-3 m-0 w-full", className)}>
			{items.map((item) => (
				<li key={item} className="m-0 text-sm">
					{item}
				</li>
			))}
		</ul>
	)
}

export function Experience({
	className,
	company,
	period,
	summary,
	achievements,
	shortcomings,
}: {
	className?: string
	company: string
	period: string
	summary: string
	achievements: string[]
	shortcomings: string[]
}) {
	return (
		<section className={cn("flex flex-col")}>
			<h1 className="flex items-center gap-3 m-0 p-0 mb-2 text-2xl">
				{company}
				<span className="flex m-0 p-0 text-base text-gray-500 font-medium">
					{period}
				</span>
			</h1>
			<p className="flex text-base">{summary}</p>
			<h2 className="text-sm font-semibold m-0 mt-6 mb-2 text-gray-500">
				얻은 것
			</h2>
			<ul className="prose flex flex-col gap-1 list-disc mb-0 font-medium">
				{achievements.map((experience) => (
					<li key={experience} className="text-sm m-0">
						{experience}
					</li>
				))}
			</ul>
			<h2 className="text-sm font-semibold m-0 mt-8 mb-2 text-gray-500">
				아쉬운 점
			</h2>
			<ul className="prose flex flex-col gap-1 list-disc mb-0 font-medium">
				{shortcomings.map((experience) => (
					<li key={experience} className="text-sm m-0">
						{experience}
					</li>
				))}
			</ul>
		</section>
	)
}

export function ProjectItem({
	className,
	title,
	period,
	summary,
	techStack,
	challenge,
	whatIDid,
	findings,
}: {
	className?: string
	title: string
	period?: string
	summary?: string | JSX.Element
	challenge?: string | JSX.Element
	whatIDid?: string | JSX.Element
	findings?: string | JSX.Element
	techStack?: string
}) {
	return (
		<section className={cn("max-w-[60ch]", className)}>
			<h1 className="flex m-0 mb-2 items-center p-0 text-lg font-bold text-gray-700">
				{title}
				{period && (
					<span className="flex m-0 p-0 text-sm text-gray-500 ml-2 font-medium">
						{period}
					</span>
				)}
			</h1>
			<div className="flex flex-col gap-4">
				{summary && (
					<p className="m-0 flex text-sm whitespace-pre-line text-gray-500">
						{summary}
					</p>
				)}
				{challenge && (
					<div>
						<h5 className="m-0 text-xs text-gray-400 capitalize">
							어려웠던 점
						</h5>
						<p className="m-0 flex text-sm">{challenge}</p>
					</div>
				)}
				{whatIDid && (
					<div>
						<h5 className="m-0 text-xs text-gray-400 capitalize">
							해결 및 성취
						</h5>
						<p className="m-0 flex text-sm font-medium">{whatIDid}</p>
					</div>
				)}
				{findings && (
					<div>
						<h5 className="m-0 text-xs text-gray-400 capitalize">findings</h5>
						<p className="m-0 flex text-sm">{findings}</p>
					</div>
				)}
				{techStack && (
					<div>
						<h5 className="m-0 text-xs text-gray-400 capitalize">tech stack</h5>
						<p className="m-0 flex text-sm">{techStack}</p>
					</div>
				)}
			</div>
		</section>
	)
}
