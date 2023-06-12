import {
	Contact,
	Name,
	ProjectItem,
	StrengthSummary,
	WorkExperienceShortItem,
} from "./components"

const PROJECTS = {
	MONOLABS: {
		iam: {
			headline: "IAM 메인 웹사이트",
			period: "2020.12 ~ 현재",
			description:
				"IAM 서비스의 메인 웹사이트로,  영양제 구입을 위한 상담 설문,  영양제 구입 관련 쇼핑 기능, 브랜딩용 블로그 기능,  회원 가입 및 계정 관리 기능 등을 갖고 있는 복합적인 웹서비스.",
			challenge:
				"초기에 사용되고 있던 외주 제작 웹페이지의 퍼포먼스 문제,  잦은 요구사항 변경 및 예상하지 못한 기능 추가 등",
			achievements:
				"유연한 컴포넌트 구조 설계 및 실행, 기술 리서치 및 적용/전파",
			techStack:
				"Gatsby.js, Typescript, Stitches, Radix UI, Jotai, React Hook Form, Zod, etc.",
		},
		video: {
			headline: "화상상담 웹앱 Next.js 재작성",
			period: "2022. 9 ~ 2023. 1",
			description:
				"유저가 카카오 알림톡 링크를 열어 앱 내 브라우저를 통해 영양사와 화상상담을 진행하게 하는 웹서비스. 방치되어 있던 기존 코드베이스를 Next.js/TypeScript로 재작성.",
			challenge:
				"기존 코드베이스가 오랜 기간 방치되어있었고, 문서로 남아있는 기획/요구사항/디자인등이 전혀 없었던데다 개발 진행도 단독으로 할 수 밖에 없었던 상황.",
			achievements:
				"히스토리를 아는 동료들과 인터뷰/시연 세션을 진행하여 요구 사항과 플로우차트 등 관련 문서를 새로 만들어 개발을 진행했으며, 테스트 배포 후 안정화 과정을 거치며 테스트 케이스를 보강해 이후엔 같은 문제가 발생하지 않도록 하였습니다.",
			techStack: "Next.js, Jotai, Agora SDK, Firestore",
		},
	},
}

export default function ResumePage() {
	return (
		<div className="absolute grid place-items-center p-12 left-0 top-0 w-screen h-screen p-8">
			<article
				style={{
					fontFamily: "Gothic A1, sans-serif",
					display: "grid",
					gridTemplateColumns: "repeat(12, 1fr)",
					gridAutoRows: "min-content",
				}}
				className="relative mx-auto w-[calc(100ch_+_110px)] max-h-[141ch] aspect-[1000/1414]"
			>
				<div className="col-start-1 col-end-13 row-start-1 row-end-2 flex justify-between items-center h-min">
					<Name />
					<Contact />
				</div>
				<StrengthSummary className="col-start-8 col-end-13 row-start-2 w-full h-min text-sm px-12" />
				<div className="row-start-2 col-start-1 col-span-7 h-min pr-6">
					<h2 className="m-0 mb-6">Work Experiences</h2>
					<WorkExperienceShortItem
						headline="프론트엔드 개발자 | (주) 모노랩스"
						period="2020. 12 ~ 현재"
						description="초기에 합류하여 서비스 및 어드민 등 프론트엔드 개발이 필요한 모든 부분의 개발을 진행했고, FE팀 내에선 기술 리서치 및 적용, 문서화, 미팅 방식 개발, 회고 문화, 신입 개발자 온보딩 프로그램 개발 등 팀 경험 개선 및 조직 문화를 만드는 데에도 주도적인 역할을 담당했습니다."
					/>
					<h3 className="m-0 p-0 my-6">주요 프로젝트</h3>
					<div className="flex flex-col gap-10">
						{Object.entries(PROJECTS.MONOLABS).map(([key, value]) => (
							<ProjectItem key={key} {...value} />
						))}
					</div>
					<hr className="m-0 my-8" />
					<WorkExperienceShortItem
						headline="프론트엔드 개발자 | (주) 버드뷰"
						period="2018. 10 ~ 2020. 12"
						description="광고, 마케팅, 커머스 등 사업팀이 사용하는 어드민, 화해 앱 내 쇼핑 기능 관련 웹뷰 영역 등의 개발에 참여했습니다. 초기 2명의 프론트엔드 팀으로 시작하여 6명 까지 팀이 성장하는 과정에 함께 하였습니다."
					/>
				</div>
			</article>
		</div>
	)
}
