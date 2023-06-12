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
			<li>github.com/sehyunchung</li>
			<li>sehyunchung.dev</li>
		</ul>
	)
}

export function StrengthSummary({ className }: { className?: string }) {
	return (
		<ul
			className={cn(
				"flex flex-col gap-3 border m-0 w-[40ch] p-8 pl-10",
				className,
			)}
		>
			<li>
				프로덕트와 유저 사이에 난 틈을 해결하는 일이라는 점에서 UI 개발에 매력을
				느끼고, 문제를 파악하고 해결하는 과정에서 즐거움을 얻습니다.
			</li>
			<li>
				코드도 나와 동료, 프로덕트 사이의 UI라는 점을 중요하게 생각하고, 소통 및
				사용성에 중점을 두고 작성하기 위해 끊임없이 노력합니다.
			</li>
			<li>
				영상, 음악, 디자인 등 다양한 직업/경험적 배경을 갖고 있으며, 직군간의
				경계가 뚜렷하지 않음을 알고, 협업 가능성에 제한을 두지 않습니다.
			</li>
			<li>
				조직 문화의 중요성을 이해하며, 동료들의 심리적 안전감을 위해 적극적으로
				행동합니다.
			</li>
			<li>
				리드, 참여, 최초 개발, 유지 보수, 재작성, 마이그레이션, 레거시 관리 등
				다양한 형태의 프로젝트 경험을 가지고 있습니다.
			</li>
			<li>
				영어 문서 및 동영상 자료들을 적극적으로 활용하며, 최신의 흐름과 기반
				지식 모두에 관심을 가지고 있습니다.
			</li>
			<li>
				React/TypeScript/Next.js/SSR/SSG 등의 키워드로 대표되는 모던 프론트엔드
				스택/패러다임에 익숙합니다.
			</li>
		</ul>
	)
}

export function WorkExperienceShortItem({
	className,
	headline,
	period,
	description,
}: {
	className?: string
	headline: string
	period: string
	description: string
}) {
	return (
		<section className={cn("flex flex-col")}>
			<h1 className="flex m-0 p-0 text-lg">{headline}</h1>
			<h2 className="flex m-0 p-0 text-sm text-gray-400 mt-1 font-medium">
				{period}
			</h2>
			<p className="flex text-base m-0 mt-3">{description}</p>
		</section>
	)
}

export function ProjectItem({
	className,
	headline,
	period,
	description,
	techStack,
	challenge,
	achievements,
	findings,
}: {
	className?: string
	headline: string
	period?: string
	description?: string | JSX.Element
	challenge?: string | JSX.Element
	achievements?: string | JSX.Element
	findings?: string | JSX.Element
	techStack?: string
}) {
	return (
		<section className={cn("max-w-[60ch]", className)}>
			<h1 className="flex m-0 p-0 text-base font-bold text-gray-700">
				{headline}
			</h1>
			{period && (
				<h2 className="flex m-0 p-0 text-sm text-gray-400 mt-1 mb-3 font-medium">
					{period}
				</h2>
			)}
			<div className="flex flex-col gap-4">
				{description && (
					<p className="m-0 flex text-sm whitespace-pre-line">{description}</p>
				)}
				{challenge && (
					<div>
						<h5 className="m-0 text-xs text-gray-400 capitalize">Challenge</h5>
						<p className="m-0 flex text-sm">{challenge}</p>
					</div>
				)}
				{achievements && (
					<div>
						<h5 className="m-0 text-xs text-gray-400 capitalize">
							achievements
						</h5>
						<p className="m-0 flex text-sm">{achievements}</p>
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
