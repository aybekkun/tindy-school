import type { Metadata } from "next"
import "./globals.css"

import { Inter, JetBrains_Mono, Source_Serif_4 } from "next/font/google"
import "./globals.css"
import { Providers } from "@/providers"

const inter = Inter({
	variable: "--font-sans",
	subsets: ["latin"],
})

const sourceSerif4 = Source_Serif_4({
	variable: "--font-serif",
	subsets: ["latin"],
})

const jetBrainsMono = JetBrains_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Tindy",
	description: "Tindy - Online mektep",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="uz">
			<body
				className={`${inter.variable} ${sourceSerif4.variable} ${jetBrainsMono.variable} antialiased min-h-screen bg-zinc-50 dark:bg-black font-sans`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
