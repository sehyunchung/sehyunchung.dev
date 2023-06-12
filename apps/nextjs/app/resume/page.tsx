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
				<WorkExperienceShortItem />
			</article>
		</div>
	)
}
