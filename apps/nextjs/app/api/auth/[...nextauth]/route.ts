import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const handler = NextAuth({
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
	],
	callbacks: {
		async signIn({ user }) {
			if (user.id !== process.env.MY_GITHUB_ID) {
				return false
			}
			return true
		},
	},
})

export { handler as GET, handler as POST }
