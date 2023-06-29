import { getServerSession, unstable_getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function ChatPageLayout({
	children,
}: { children: React.ReactNode }) {
	const session = await getServerSession()
	if (!session?.user) {
		redirect("/api/auth/signin")
	}
	return <>{children}</>
}
