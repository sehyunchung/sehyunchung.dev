"use client"

import * as React from "react"

import { STORIES } from "./data"

export function Stories() {
	const [showStory, setShowStories] = React.useState(false)
	return (
		<aside>
			<button
				className="font-semibold text-sm text-gray-400"
				type="button"
				onClick={() => setShowStories((p) => !p)}
			>
				몇 가지 개선 사례들을 꼽아보았습니다.
			</button>
			{showStory ? (
				<section>
					{STORIES.map((story) => (
						<article key={story.title}>
							<h4>{story.title}</h4>
							<ul className="text-sm">
								{story.story.map((s) => (
									<li key={s}>{s}</li>
								))}
							</ul>
						</article>
					))}
				</section>
			) : null}
		</aside>
	)
}
