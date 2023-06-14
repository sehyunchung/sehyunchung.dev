"use client"
import * as React from "react"

import { cn } from "@/lib/utils"

export function Contact({ className }: { className?: string }) {
	const [contact, setContact] = React.useState({
		phone: "...",
		email: "...",
	})

	React.useEffect(() => {
		setContact({
			phone: "010-9892-3705",
			email: "hi@sehyunchung.dev",
		})
	}, [])

	return (
		<ul
			className={cn(
				"not-prose list-none h-[10ch] w-[20ch]",
				"flex flex-col items-end",
				className,
			)}
		>
			<>
				<li className="select-none">{contact.phone}</li>
				<li>{contact.email}</li>
				<li>
					<a href="https://github.com/sehyunchung">github.com/sehyunchung</a>
				</li>
				<li>
					<a href="https://sehyunchung.dev">sehyunchung.dev</a>
				</li>
			</>
		</ul>
	)
}
