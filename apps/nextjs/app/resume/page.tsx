import { Experience, Name, ProjectItem, Skills } from "./components"
import { Contact } from "./components/contact"
import {
	BIRDVIEW_PROJECTS,
	ETC_EXPERIENCES,
	HARD_SKILLS,
	MONO_PROJECTS,
	PERSONAL_EXPERIENCES,
	SOFT_SKILLS,
	WORK_EXPERIENCE,
} from "./components/data"
import { Stories } from "./components/stories"

export default function ResumePage() {
	return (
		<div className="absolute grid place-items-center p-12 left-0 top-0 w-screen h-screen">
			<article
				style={{
					fontFamily: "Gothic A1, sans-serif",
					display: "grid",
					gridTemplateColumns: "repeat(12, 1fr)",
					gridAutoFlow: "dense",
				}}
				className="relative mx-auto w-[calc(100ch_+_110px)] max-h-[141ch] aspect-[1000/1414]"
			>
				<div className="col-start-1 col-end-13 row-start-1 row-end-2 flex justify-between items-center h-min">
					<Name />
					<Contact />
				</div>
				<div className="col-start-8 border col-end-13 row-start-2 place-self-stretch w-full h-min text-sm p-8 pt-12 pb-20 mt-20">
					<h3 className="mb-6">Hard Skills</h3>
					<Skills items={HARD_SKILLS} />
					<h3 className="mt-10 mb-6">Soft Skills</h3>
					<Skills items={SOFT_SKILLS} />
					<h3 className="mt-10 mb-6">개발 외 경험</h3>
					<Skills items={ETC_EXPERIENCES} />
				</div>
				<div className="row-start-8 col-start-1 col-span-7 flex flex-col gap-8 h-min pr-6 pb-10 mt-0">
					<h2 className="m-0 my-8 mb-4 text-2xl">Work Experiences</h2>
					<Experience {...WORK_EXPERIENCE[0]} />
					<hr className="m-0 w-1/2 mx-auto my-6" />
					<Experience {...WORK_EXPERIENCE[1]} />
				</div>
				<hr className="col-span-full w-1/2 m-0 my-6 mx-auto" />
				<div className="col-span-full m-0 my-8 h-full max-h-[1411px]">
					<div
						className="w-full h-full"
						style={{
							columnCount: 2,
							columnFill: "auto",
							columnGap: "3rem",
						}}
					>
						<h3
							style={{
								columnSpan: "all",
							}}
							className="m-0 p-0 mt-0 mb-8 font-extrabold"
						>
							주요 프로젝트
						</h3>
						<h4 className="font-black text-gray-400 mb-4">모노랩스</h4>
						<div className="flex flex-col gap-10 mb-10">
							{MONO_PROJECTS.map((project) => (
								<ProjectItem
									className="mb-5"
									key={project.title}
									{...project}
								/>
							))}
						</div>
						<hr />
						<h4 className="font-black text-gray-400 m-0 mb-4">버드뷰</h4>
						<div className="flex flex-col gap-10">
							{BIRDVIEW_PROJECTS.map((project) => (
								<ProjectItem key={project.title} {...project} />
							))}
							<h6 className="m-0 font-semibold text-sm text-gray-400">
								+기타 다양한 백오피스 및 레거시 프로젝트 개발/유지보수 경험
							</h6>
						</div>
						<hr />
						<h4 className="font-black text-gray-400 m-0 mb-4">
							기타/개인 작업
						</h4>
						<div className="flex flex-col gap-10">
							{PERSONAL_EXPERIENCES.map((project) => (
								<ProjectItem key={project.title} {...project} />
							))}
						</div>
					</div>
				</div>
				<div className="col-span-12">
					<Stories />
				</div>
			</article>
		</div>
	)
}
