import {
	Contact,
	Name,
	ShortStrength,
	WorkExperienceShortItem,
} from "./components"

export default function ResumePage() {
	return (
		<div className="absolute grid place-items-center left-0 top-0 w-screen h-screen p-8">
			<article
				style={{
					fontFamily: "Gothic A1, sans-serif",
				}}
				className="relative place-self-stretch mx-auto aspect-[1000/1414]"
			>
				<div className="flex justify-between items-center">
					<Name />
					<Contact />
				</div>
				<ShortStrength className="absolute right-0" />
				<WorkExperienceShortItem
					headline="프론트엔드 개발자 | (주) 모노랩스"
					period="2020. 12 ~ 현재"
					description="초기에 합류하여 서비스 및 어드민 등 프론트엔드 개발이 필요한 모든 부분의 개발을 진행했고, FE팀 내에선 기술 리서치 및 적용, 문서화, 미팅 방식, 회고 등 팀 내 문화를 만드는 데 주도적인 역할을 담당했습니다."
				/>
				<WorkExperienceShortItem
					headline="프론트엔드 개발자 | (주) 버드뷰"
					period="2018. 10 ~ 2020. 12"
					description="광고, 마케팅, 커머스 등 사업팀이 사용하는 어드민, 화해 앱 내 쇼핑 기능 관련 웹뷰 영역 등의 개발에 참여했습니다. 초기 2명의 프론트엔드 팀으로 시작하여 6명 까지 팀이 성장하는 과정에 함께 하였습니다."
				/>
			</article>
		</div>
	)
}
