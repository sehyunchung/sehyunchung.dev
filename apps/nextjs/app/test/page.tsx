"use client"

import { useChat } from "ai/react"

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat()

	return (
		<div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
			{messages.map((m) => (
				<div key={m.id} className="border-b last-of-type:border-b-0 py-4">
					{m.role === "user" ? "Me: " : "Chat: "}
					{m.content}
				</div>
			))}

			<form
				className="fixed bottom-0 w-full max-w-md flex items-center gap-4 mb-8"
				onSubmit={handleSubmit}
			>
				<label className="flex-1 flex">
					<input
						className="flex-1 border border-gray-300 rounded p-2"
						value={input}
						onChange={handleInputChange}
						placeholder="Send a message"
					/>
				</label>
				<button className="p-2 border rounded" type="submit">
					Send
				</button>
			</form>
		</div>
	)
}
