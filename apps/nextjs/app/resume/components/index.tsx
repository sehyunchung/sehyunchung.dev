import { cn } from "@/lib/utils"

export function Name({ className }: { className?: string }) {
	return <h1 className={cn("m-0 p-0", className)}>정세현</h1>
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

export function ShortStrength({ className }: { className?: string }) {
	return (
		<ul className={cn("border w-[40ch] p-8 pl-10", className)}>
			<li>
				프로덕트와 유저 사이의 틈을 줄이는 일이라는 점에서 UI 개발에 매력을
				느끼고, 문제를 파악하고 해결하는 과정 자체에서 즐거움을 얻습니다.
			</li>
			<li>
				코드도 나와 동료, 제품 사이의 인터페이스이기 때문에, 의사소통 및
				사용성에 중점을 두고 작성하기 위해 노력합니다.
			</li>
			<li>
				조직 문화의 중요성을 이해하며, 동료들의 심리적 안전감을 위해 적극적으로
				행동합니다.
			</li>
			<li>
				다양한 직업/경험적 배경을 갖고 있으며, 직군간의 경계가 뚜렷하지 않음을
				알고, 협업에 경계를 두지 않습니다.
			</li>
			<li>
				리드, 참여, 최초 개발, 유지 보수, 재작성, 마이그레이션, 레거시 관리 등
				다양한 형태의 실무 경험이 있습니다.
			</li>
			<li>
				영어 문서 및 동영상 자료들을 적극적으로 활용하며, 최신의 흐름과 기반
				지식 모두에 관심을 가지고 있습니다.
			</li>
			<li>
				React/TypeScript/Next.js/SSR/SSG 등의 키워드를 중심으로 한 모던
				프론트엔드 스택/패러다임에 익숙합니다.
			</li>
		</ul>
	)
}

export function WorkExperienceShortItem({ className }: { className?: string }) {
	return (
		<section className={cn("flex flex-col w-[60ch]")}>
			<h1 className="flex m-0 p-0 text-lg">
				프론트엔드 개발자 | (주) 모노랩스
			</h1>
			<h2 className="flex m-0 p-0 text-sm text-gray-400 mt-1 font-medium">
				2020. 12 ~ 현재
			</h2>
			<p className="flex text-base mt-3">
				초기에 합류하여 서비스 및 어드민 등 프론트엔드 개발이 필요한 모든 부분의
				개발을 진행했고, FE팀 내에선 기술 리서치 및 적용, 문서화, 미팅 방식,
				회고 등 팀 내 문화를 만드는 데 주도적인 역할을 했습니다.
			</p>
		</section>
	)
}
