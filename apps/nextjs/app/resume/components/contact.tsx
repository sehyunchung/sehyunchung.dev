"use client"
import * as React from "react"

import { cn } from "@/lib/utils"

export function Contact({ className }: { className?: string }) {
	const [contact, setContact] = React.useState({
		phone: "",
		email: "",
	})

	const handlePhoneClick = React.useCallback(() => {
		setContact((p) => ({
			...p,
			phone: "010-9892-3705",
		}))
	}, [])
	const handleMailClick = React.useCallback(() => {
		setContact((p) => ({
			...p,
			email: "hi@sehyunchung.dev",
		}))
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
				<li
					tabIndex={0}
					onClick={handlePhoneClick}
					onKeyDown={handlePhoneClick}
				>
					{contact.phone ? (
						<a href="tel:010-9892-3705">{contact.phone}</a>
					) : (
						"..."
					)}
				</li>
				<li tabIndex={0} onClick={handleMailClick} onKeyDown={handleMailClick}>
					{contact.email ? (
						<a href="mailto:hi@sehyunchung.dev">{contact.email}</a>
					) : (
						"..."
					)}
				</li>
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
