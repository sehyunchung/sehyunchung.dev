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
	findings,
}: {
	className?: string
	company: string
	period: string
	summary: string
	findings: string[]
}) {
	return (
		<section className={cn("flex flex-col")}>
			<h1 className="flex items-center gap-3 m-0 p-0 mb-2 text-2xl">
				{company}
				<span className="flex m-0 p-0 text-base text-gray-500 font-medium">
					{period}
				</span>
			</h1>
			<p className="flex text-base m-0 mt-3">{summary}</p>
			<ul className="prose">
				{findings.map((experience) => (
					<li key={experience} className="flex text-sm m-0 mt-3">
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
						{/* <h5 className="m-0 text-xs text-gray-400 capitalize">Challenge</h5> */}
						<p className="m-0 flex text-sm">{challenge}</p>
					</div>
				)}
				{whatIDid && (
					<div>
						{/* <h5 className="m-0 text-xs text-gray-400 capitalize">
							achievements
						</h5> */}
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
