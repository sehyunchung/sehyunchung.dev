import "./globals.css"
import { Analytics } from "@/components/analytics"
import { SpeedInsights } from "@vercel/speed-insights/next"
import {
	ScriptGoogleDataLayerInline,
	ScriptGoogleTagManager,
	ScriptMSClarity,
} from "@/components/external-scripts"
import { NextAuthProvider } from "@/components/next-auth-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { berkeleyMono, comicMono, comicNeue, gothicA1 } from "@/lib/fonts"
import { getBaseUrl } from "@/lib/utils"

export const metadata = {
	metadataBase: getBaseUrl(),
	title: {
		template: "%s | sehyunchung.dev",
		default: "sehyunchung.dev",
	},
	description: "개  프론트엔드  발",
	openGraph: {
		url: "https://sehyunchung.dev",
		title: "sehyunchung.dev",
		description: "개  프론트엔드  발",
		siteName: "sehyunchung.dev",
		type: "website",
		images: ["https://sehyunchung.dev/og"],
	},
	twitter: {
		card: "summary_large_image",
		title: "sehyunchung.dev",
		description: "A personal website",
		creator: "@sehyun_chung",
		images: ["https://sehyunchung.dev/og"],
	},
	icons: ["https://sehunchung.dev/icon"],
}

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html
			lang="ko"
			className={`${berkeleyMono.variable} ${gothicA1.variable}`}
			suppressHydrationWarning
		>
			<head>
				<ScriptMSClarity />
				<ScriptGoogleTagManager />
				<ScriptGoogleDataLayerInline />
			</head>
			<body
				className={
					"antialiased font-mono min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 break-keep"
				}
			>
				<NextAuthProvider>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
						<div className="border-x prose prose-neutral dark:prose-invert max-w-2xl mx-auto p-10">
							{children}
						</div>
					</ThemeProvider>
				</NextAuthProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
