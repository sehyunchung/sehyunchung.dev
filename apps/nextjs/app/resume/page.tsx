import {
	Contact,
	Name,
	ProjectItem,
	StrengthSummary,
	WorkExperienceShortItem,
} from "./components"

const PROJECTS = {
	BIRDVIEW: {
		commerce: {
			headline: "화해앱 내 커머스 영역 웹뷰 리뉴얼",
			period: "2020. 5 ~ 2020.12",
			description:
				"PHP Backend + template 기반의 기존 구조를 리뉴얼하며 Next.js/Typescript로 재작성한 프로젝트로, 업무에서 React와 TypeScript를 활용한 첫번째 프로젝트였습니다.",
			challenge: "",
			achievements:
				"당시 프로젝트를 기점으로 입사한 시니어 개발자분의 주도로 작은 단위의 재사용 가능한 컴포넌트들부터 개발해서 프로젝트 완료까지 진행해보는 경험을 얻을 수 있었습니다. 리액트가 처음인 팀원들이 있어서 학습을 돕는 역할에 적극적으로 참여하였습니다.",
			findings: "",
			techStack: "Next.js, Mobx, mobx-state-tree, Material UI",
		},
		ad: {
			headline: "광고 어드민 개발",
			period: "2018. 7 ~ 2020. 10",
			description:
				"광고팀과 고객사가 광고 집행을 위해 사용하는 백오피스 웹서비스로, 기존에 서버 개발자들이 풀스택으로 개발중이던 프로젝트를 프론트엔드 팀이 생기며 이어받아 개발하게 되었습니다.",
			challenge:
				"스타일링이 외주 퍼블리셔에 의해 작업되어있었고, Vuetify가 사용되고 있었으나 디자인 요구사항은 꽤 자세한 편이어서 충돌을 뚫고 커스텀 스타일을 적용하는 것이 까다로웠습니다.",
			achievements:
				"스타일링 관련한 난관을 자주 겪었으나 어떻게든 해결이 되긴 된다는 걸 알게 됐고, headless 컴포넌트등 재활용의 중요성과 그를 위해 필요한 요건들에 대해 어렴풋이 알게 된 경험이었던 것 같습니다. 그 외에도 커리어 극초반이라 모든 게 어설펐지만 생각지 못한 UI 상태의 경우의 수를 경험하면서 UI 개발에 매력을 더 느끼게 되기도 했습니다. 후반엔 특정 부분에 유닛 테스트 등을 추가하거나 동료들과 타입스크립트 도입을 추진하는 등,  코드의 안정성을 위한 노력을 하기도 했습니다.",
			findings: "",
			techStack: "Nuxt.js, Vue, Vuex, Vuetify",
		},
		etc: {
			headline:
				"그 외 다양한 레거시/Nuxt, Vue 기반의 각종 어드민 개발 및 유지보수 경험",
		},
	},
	MONOLABS: {
		iam: {
			headline: "IAM 메인 웹사이트 iam-iam.com",
			period: "2020.12 ~ 현재",
			description:
				"IAM 서비스의 메인 웹사이트로,  영양제 구입을 위한 상담 설문,  영양제 구입 관련 쇼핑 기능, 브랜딩용 블로그 기능,  회원 가입 및 계정 관리 기능 등을 갖고 있는 복합적인 웹서비스입니다.",
			challenge:
				"초기에 사용되고 있던 외주 제작 웹페이지의 퍼포먼스 문제,  잦은 요구사항 변경 및 예상하지 못한 기능 추가 등",
			achievements:
				"프레임워크 선정부터 배포 환경 설정까지 각종 기술적 결정에 주도적인 역할을 하였습니다. 변경에 유연한 컴포넌트 설계 방법을 리서치/제안/공유하고 공동으로 학습하는 과정을 진행했으며, 커스텀이 어려운 라이브러리는 headless 방식의 라이브러리로 교체하는 등, 팀의 개발 환경을 개선하는데 기여하였습니다. 자주 바뀌는 요구 사항을 대응하는 과정에서 기획/디자인 과정에 참여하는 것의 중요성을 알게 되었고, 기여할 부분을 찾아 효율적인 프로세스를 만들기 위해 노력하였습니다.",
			findings: "",
			techStack:
				"Gatsby.js, Typescript, Stitches, Radix UI, Jotai, React Hook Form, Zod, etc.",
		},
		video: {
			headline: "화상상담 웹앱 Next.js 재작성",
			period: "2022. 9 ~ 2023. 1",
			description:
				"유저가 카카오 알림톡 링크를 열어 앱 내 브라우저를 통해 영양사와 화상상담을 진행하는 웹앱. 기존 프로젝트가 매우 급하게 진행된데다 관련자가 모두 퇴사한 이후라, 기능 변경 등의 이슈에 대응하기 어려워 재작성이 필요하다고 판단하여 진행한 프로젝트 입니다.",
			challenge:
				"기존 프로젝트의 코드 파악이 쉽지 않은데다 기획/디자인 등 관련 문서도 전혀 남아있지 않아 어려움을 겪었던 프로젝트입니다. 유저 사이드는 웹앱인데 상담사용 앱은 iOS로 개발되어 있는 등, 요구사항을 파악을 위해 거쳐야 하는 과정이 쉽지 않았습니다.",
			achievements:
				"히스토리를 아는 동료들과 인터뷰/시연 세션을 진행하여 요구 사항과 플로우차트 등 관련 문서를 새로 만들어 개발을 진행했으며, 테스트 배포 후 안정화 과정을 거치며 테스트 케이스를 보강해 이후엔 같은 문제가 발생하지 않도록 자세한 문서/기록을 남겨두었습니다. 문서 기반이 없는 상태에서 성공적으로 프로젝트를 마무리한 경험,  video call 관련 기능을 개발해본 경험을 얻었습니다.",
			techStack: "Next.js, Jotai, Agora SDK, Firestore",
		},
		space: {
			headline: "우주약방 병원/의사 어드민 개발",
			period: "2021. 12 ~ 2022. 5",
			description:
				"비대면 진료 솔루션을 개발하는 계열사 의사/병원용 어드민 웹앱. 회원가입, 회원정보 관리, firebase를 통해 실시간으로 업데이트 되는 진료 신청 리스트 페이지, 진료 일정 등의 관리를 위한 디테일 페이지 등을 개발하였습니다.",
			challenge:
				"계열사의 인력 부족으로 인해 파견(?)된 프로젝트로, 역시 인력 부족으로 인해 고용된 베트남 개발사의 외주 인력과 리모트로 협업을 진행했으나, 결과적으론 혼자 대부분의 기능을 개발하게 됩니다.",
			achievements:
				"팀내에서 최초로 Next.js를 기반으로 프로젝트를 완료해 본 경험을 얻게 되어 이후 다양한 백오피스 작업을 효율적으로 진행하는 데 기여할 수 있었고, vercel로 배포 플랫폼을 옮기게 된 계기가 되기도 했습니다. 프로젝트를 주도적으로 진행해 본 경험이 쌓이면서 좀 더 자신감이 붙게 된 계기가 되기도 했습니다.",
			techStack:
				"Next.js, NextAuth.js, Redux Toolkit, RTK Query, Firestore, Vercel",
		},
	},
}

export default function ResumePage() {
	return (
		<div className="absolute grid place-items-center p-12 left-0 top-0 w-screen h-screen">
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
				<StrengthSummary className="col-start-8 col-end-13 row-start-2 w-full h-min text-sm px-12 mt-24" />
				<div className="row-start-2 col-start-1 col-span-7 h-min pr-6">
					<h2 className="m-0 mb-6">Work Experiences</h2>
					<WorkExperienceShortItem
						headline="프론트엔드 개발자 | (주) 모노랩스"
						period="2020. 12 ~ 현재"
						description="초기에 합류하여 서비스 및 어드민 등 프론트엔드 개발이 필요한 모든 부분의 개발에 참여 및 리딩했고, 기술 리서치 및 적용, 문서화, 미팅 방식 개발, 회고 프로세스 도입, 신입 개발자 온보딩 프로그램 개발 등 팀 경험 개선 및 조직 문화를 만드는 데에도 주도적인 역할을 담당했습니다."
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
					<h3 className="m-0 p-0 my-6">주요 프로젝트</h3>
					<div className="flex flex-col gap-10">
						{Object.entries(PROJECTS.BIRDVIEW).map(([key, value]) => (
							<ProjectItem key={key} {...value} />
						))}
					</div>
				</div>
			</article>
		</div>
	)
}
